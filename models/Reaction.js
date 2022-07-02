const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// get total count of comments and replies on retrieval
ReactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.reduce(
    (total, reactions) => total + reactions.length + 1,
    0
  );
});

const Reaction = model("Reaction", ReactionSchema);

module.exports = Reaction;
