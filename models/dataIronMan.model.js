const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ironManSchema = new Schema(
  {
    movies: {
      title: {
        type: String,
      },
      coverImg: {
        type: String,
      },
      description: {
        type: String,
      },
      actors: {
        type: [String],
      },
    },
    comics: {
      title: {
        type: String,
      },
      coverImg: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    phrases: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const IronMan = mongoose.model("IronMan", ironManSchema);

module.exports = IronMan;
