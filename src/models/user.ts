import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    googleId: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin", "moderator"],
    },
    avatar: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
