import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

export const getUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.status(200).json(users);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return res.status(500).json({ message });
  }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown validation error';
    return res.status(400).json({ message });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const id = String(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user id' });
  }

  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown update error';
    return res.status(400).json({ message });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const id = String(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user id' });
  }

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown delete error';
    return res.status(400).json({ message });
  }
};
