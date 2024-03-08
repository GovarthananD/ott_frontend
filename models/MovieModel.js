import { MongoGridFSChunkError } from "mongodb";
import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
    trim: true,
  },
  moviePoster: {
    type: String,
    required: true,
    trim: true,
  },
  languages: {
    type: String,
    required: true,
    trim: true,
  },
  genres: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: false,
    trim: true,
  },
});

const Movies = mongoose.model("Movies", movieSchema);
export { Movies };
