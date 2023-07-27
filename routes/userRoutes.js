const router = require('express').Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:userId', userController.getUserById);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update a user by ID
router.put('/:userId', userController.updateUserById);

// Route to delete a user by ID
router.delete('/:userId', userController.deleteUserById);

//Route to add a friend
router.post('/:userId/friends/:friendId', userController.addFriend);

//Route to remove a friend
router.delete('/:userId/friends/:friendId', userController.removeFriend);


module.exports = router;

