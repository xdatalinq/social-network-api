const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/api/users')
  .get(getAllUser)
  .post(createUser);

// /api/user/:id
router
  .route('/api/user/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/api/user/:id/friends/:friendId')
  // .post(addFriend)
  // .delete(deleteFriend);  

  module.exports = router;
