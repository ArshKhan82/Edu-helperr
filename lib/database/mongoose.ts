import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
   conn: Mongoose | null;
   promise: Promise<Mongoose> | null;
}

// Initialize cached connection if it doesn’t already exist
const cached: MongooseConnection = (global as typeof globalThis & { mongoose?: MongooseConnection }).mongoose || {
   conn: null,
   promise: null,
};
(global as typeof globalThis & { mongoose?: MongooseConnection }).mongoose = cached;

export const connectToDatabase = async (): Promise<Mongoose> => {
   if (cached.conn) {
      console.log("Using cached database connection.");
      return cached.conn;
   }

   if (!MONGODB_URL) {
      throw new Error("Missing MONGODB_URL in environment variables.");
   }

   if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URL, {
         dbName: "imaginify",
         bufferCommands: false,
      });
   }

   cached.conn = await cached.promise;
   console.log("Database connected successfully.");
   return cached.conn;
};
