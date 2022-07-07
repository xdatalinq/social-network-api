const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .sort({ createdAt: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createThought
  createThought({ body }, res) {
    Thought.create(body).then((dbThoughtData) => {
      return User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      )
        .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
          }
          res.json({ message: "Thought has been added to the User" });
        })
        .catch((err) => res.status(400).json(err));
    });
  },

  // update thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $set: body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },

  addReaction({ body }, res) {
 //look into add to set make sure we are updating the thought 
  },

  // delete reaction
  removeReaction({ params }, res) {
//think about how to removea reaction from the thought model reactions array. what is the opposite of $push
  },
};

module.exports = thoughtController;
