const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addFriend,
  deleteFriend
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/api/thoughts')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/api/thoughts/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

router
  .route('/api/user/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);  

  module.exports = router;
