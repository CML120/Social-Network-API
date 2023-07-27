const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController');

// Route to get all thoughts
router.get('/', thoughtController.getAllThoughts);

// Route to get a single thought by ID
router.get('/:thoughtId', thoughtController.getThoughtById);

// Route to create a new thought
router.post('/', thoughtController.createThought);

// Route to update a thought by ID
router.put('/:thoughtId', thoughtController.updateThoughtById);

// Route to delete a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThoughtById);

//Route to add a reaction
router.post('/:thoughtId/reactions', thoughtController.addReaction);

//Route to remove a reaction
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);


module.exports = router;
