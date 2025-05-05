const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  species: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat'] // You can add more species if needed
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  personality: {
    type: String,
    required: true,
    enum: ['Friendly', 'Shy', 'Aggressive', 'Playful', 'Calm'] // Customize as needed
  },
  mood: {
    type: String,
    default: 'Happy' // Will be dynamically updated based on logic
  },
  adopted: {
    type: Boolean,
    default: false
  },
  adoption_date: {
    type: Date,
    default: null
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
