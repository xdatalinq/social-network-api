const { Reaction } = require('../models');

const reactionController = {

// createThought
addReaction({ body }, res) {
    Reaction.create(body)
      .then(dbReactionData => res.json(dbReactionData))
      .catch(err => res.json(err));
  },

// delete reaction
removeReaction({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.id })
      .then(dbReactionData => res.json(dbReactionData))
      .catch(err => res.json(err));
  }
};

module.exports = reactionController;
