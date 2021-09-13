//  SERVER/MODELS/Playlist.js  //

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
    },
    like: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const playlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: [
    commentSchema
]
  ,
  playlistTitle: {
    type: String,
  },
  songTitle: {
    type: String,
  },
  artistName: {
    type: String,
  },
});

module.exports = mongoose.model("Playlist", playlistSchema);
