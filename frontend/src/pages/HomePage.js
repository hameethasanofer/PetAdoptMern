import React, { useEffect, useState } from 'react';
import API from '../services/api';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  const fetchPets = async () => {
    const res = await API.get('/pets');
    setPets(res.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleAddOrUpdatePet = async (pet) => {
    if (pet._id) {
      await API.put(`/pet/${pet._id}`, pet);
    } else {
      await API.post('/pets', pet);
    }
    fetchPets();
    setEditingPet(null);
  };

  const handleDelete = async (id) => {
    await API.delete(`/pet/${id}`);
    fetchPets();
  };

  const handleAdopt = async (id) => {
    await API.patch(`/pets/${id}/adopt`);
    fetchPets();
  };

  const handleFilter = async (mood) => {
    if (!mood) return fetchPets();
    const res = await API.get(`/pets/filter?mood=${mood}`);
    setPets(res.data.pets);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">🐾 Pet Management</h2>
      <PetForm onSubmit={handleAddOrUpdatePet} editingPet={editingPet} />
      <FilterBar onFilter={handleFilter} />
      <div className="row">
        {pets.map(pet => (
          <div className="col-md-4" key={pet._id}>
            <PetCard pet={pet} onDelete={handleDelete} onAdopt={handleAdopt} onEdit={setEditingPet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
