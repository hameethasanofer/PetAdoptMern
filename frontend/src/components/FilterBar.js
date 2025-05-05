// FilterBar.js
import React from 'react';

const FilterBar = ({ onFilter }) => {
  const moods = ['Happy', 'Sad', 'Playful', 'Calm', 'Shy'];

  return (
    <div className="mb-3">
      <label className="form-label me-2">Filter by Mood:</label>
      <select className="form-select w-auto d-inline" onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        {moods.map((mood, idx) => (
          <option key={idx} value={mood}>{mood}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
