import React from 'react';
import './PetCard.css'
import {
  FaSmile,        // Happy
  FaFrown,        // Sad
  FaGrinStars,    // Playful
  FaLeaf,         // Calm
  FaUserSecret    // Shy
} from 'react-icons/fa';
import './PetCard.css'; // optional for custom styles

// Mood to color mapping
const moodColors = {
  Happy: 'green',
  Sad: 'red',
  Playful: 'orange',
  Calm: 'blue',
  Shy: 'purple',
};

// Mood to icon mapping
const moodIcons = {
  Happy: <FaSmile />,
  Sad: <FaFrown />,
  Playful: <FaGrinStars />,
  Calm: <FaLeaf />,
  Shy: <FaUserSecret />,
};

const PetCard = ({ pet, onDelete, onAdopt, onEdit }) => {
  return (
    <div className="card border rounded shadow p-3 m-2" style={{ borderColor: moodColors[pet.mood] }}>
      <h4>{pet.name} ({pet.species})</h4>
      <p>Age: {pet.age}</p>
      <p>Personality: {pet.personality}</p>
      <p>
        Mood: <span style={{ color: moodColors[pet.mood] }}>
          {moodIcons[pet.mood]} {pet.mood}
        </span>
      </p>
      <p>Status: {pet.adopted ? "Adopted" : "Available"}</p>

      <div className="d-flex justify-content-between mt-2">
        <button className="btn btn-warning" onClick={() => onEdit(pet)}>Edit</button>
        <button className="btn btn-success" onClick={() => onAdopt(pet._id)} disabled={pet.adopted}>Adopt</button>
        <button className="btn btn-danger" onClick={() => onDelete(pet._id)}>Delete</button>
      </div>
    </div>
  );
};

export default PetCard;
