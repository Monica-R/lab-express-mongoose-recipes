const mongoose = require("mongoose");

// CREATE SCHEMA
const recipeSchema = new mongoose.Schema({
  title: { 
    type: String,
    unique: true,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: 0
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;