import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: [true, 'first_name is required'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'last_name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model<IUser>('User', userSchema);

export default User;
