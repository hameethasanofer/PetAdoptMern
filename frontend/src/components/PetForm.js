import React, { useState, useEffect } from 'react';

const PetForm = ({ onSubmit, editingPet }) => {
  const [formData, setFormData] = useState({ name: '',species: 'Dog', age: '',
    personality: 'Friendly',
    
   
  });
    

  useEffect(() => {
    if (editingPet) {
      setFormData(editingPet);
    }
  }, [editingPet]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', species: 'Dog', age: '', personality: 'Friendly' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 p-3 border rounded">
      <h5>{editingPet ? 'Update Pet' : 'Add New Pet'}</h5>
      <input name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <select name="species" className="form-control mb-2" value={formData.species} onChange={handleChange}>
        <option>Dog</option>
        <option>Cat</option>
      </select>
      <input name="age" type="number" className="form-control mb-2" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <select name="personality" className="form-control mb-2" value={formData.personality} onChange={handleChange}>
        <option>Friendly</option>
        <option>Shy</option>
        <option>Aggressive</option>
        <option>Playful</option>
        <option>Calm</option>
      </select>
      <button className="btn btn-primary" type="submit">{editingPet ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default PetForm;
