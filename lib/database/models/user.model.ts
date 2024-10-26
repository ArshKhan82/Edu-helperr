//ClerkId, Email, username, photo, firstName, lastName, planId, creditBalance

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
   clerkId: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      required: true,
      unique: true,
   },
   photo: {
      type: String,
      required: true,
   },
   firstName: {
      type: String,
   },
   lastName: {
      type: String,
   },
   planId: {
      type: Number,
      default: 1,
   },
   creditBalance: {
      type: Number,
      default: 50,
   },
});

const User = models?.User || model("User", UserSchema);

export default User;

/*
import mongoose, { Document, Schema, Model } from "mongoose";

interface IUser extends Document {
   clerkId: string;
   email: string;
   username: string;
   photo?: string;
   firstName: string;
   lastName: string;
   planId?: string;
   creditBalance: number;
   createdAt: Date;
   updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
   {
      clerkId: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      photo: { type: String },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      planId: { type: String },
      creditBalance: { type: Number, required: true, default: 0 },
   },
   {
      timestamps: true, // Automatically manages createdAt and updatedAt fields
   }
);

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
export { IUser };

 */
