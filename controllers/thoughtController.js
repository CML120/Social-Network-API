const Thought = require('../models/Thought');

// Controller function for getting all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get thoughts.' });
  }
};

// Controller function for getting a single thought by ID
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found.' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get the thought.' });
  }
};

// Controller function for creating a thought
const createThought = async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.json(savedThought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the thought.' });
  }
};

// Controller function for updating a thought by ID
const updateThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found.' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the thought.' });
  }
};

// Controller function for deleting a thought by ID
const deleteThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found.' });
    }
    res.json({ message: 'Thought deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the thought.' });
  }
};

// Controller function for adding a reaction to a thought
const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found.' });
    }

    // Create a new reaction based on the request body
    const newReaction = {
      reactionBody: req.body.reactionBody,
      username: req.body.username,
    };

    thought.reactions.push(newReaction);
    await thought.save();

    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a reaction to the thought.' });
  }
};

// Controller function for removing a reaction from a thought
const removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found.' });
    }

    // Find the index of the reaction in the reactions array
    const reactionIndex = thought.reactions.findIndex(
      (reaction) => reaction._id.toString() === req.params.reactionId
    );

    if (reactionIndex === -1) {
      return res.status(404).json({ error: 'Reaction not found in the thought.' });
    }

    // Remove the reaction from the reactions array
    thought.reactions.splice(reactionIndex, 1);
    await thought.save();

    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove the reaction from the thought.' });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  removeReaction,
};
