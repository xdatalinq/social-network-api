const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);
router.use('/users', userRoutes);

module.exports = router;
