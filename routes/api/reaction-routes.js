const router = require('express').Router();
const {
    addReaction,
    removeReaction
  } = require('../../controllers/reaction-controller');

// /api/thoughts/:thoughtId/reactions
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction);
router.route('/api/thoughts/:thoughtId/reactions').delete(removeReaction);

module.exports = router;
