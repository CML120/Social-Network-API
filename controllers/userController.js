const User = require('../models/User');

const userController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create a new user.' });
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users.' });
    }
  },

  // Get a user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user.' });
    }
  },

  // Update a user by ID
  updateUserById: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user.' });
    }
  },

  // Delete a user by ID
  deleteUserById: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete user.' });
    }
  },

  // Add a friend
  addFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const friend = await User.findById(req.params.friendId);

      if (!user || !friend) {
        return res.status(404).json({ error: 'User or friend not found.' });
      }

      // Check if the friend is already in the user's friend list
      if (user.friends.includes(req.params.friendId)) {
        return res.status(400).json({ error: 'Friend already added.' });
      }

      user.friends.push(req.params.friendId);
      await user.save();

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add friend.' });
    }
  },

  // Remove a friend
  removeFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      // Check if the friend is in the user's friend list
      if (!user.friends.includes(req.params.friendId)) {
        return res.status(400).json({ error: 'Friend not found in the friend list.' });
      }

      user.friends = user.friends.filter((friendId) => friendId !== req.params.friendId);
      await user.save();

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to remove friend.' });
    }
  },

  // Add a reaction
  addReaction: async (req, res) => {
    try {
      // ... (code for adding a reaction)
    } catch (err) {
      res.status(500).json({ error: 'Failed to add reaction.' });
    }
  },

  // Remove a reaction
  removeReaction: async (req, res) => {
    try {
      // ... (code for removing a reaction)
    } catch (err) {
      res.status(500).json({ error: 'Failed to remove reaction.' });
    }
  },
};

module.exports = userController;
