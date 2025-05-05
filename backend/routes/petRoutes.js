const express = require('express');
const { newPets, getPets, getSinglePet, updatePet, deletePet, adoptPet, getMoodPets } = require('../controllers/petController');
const router = express.Router();

router.route('/pets').post(newPets);
router.route('/pets').get(getPets);
router.route('/pet/:id').get(getSinglePet);
router.route('/pet/:id').put(updatePet);
router.route('/pet/:id').delete(deletePet);
router.route('/pets/:id/adopt').patch(adoptPet);
router.route('/pets/filter').get(getMoodPets);



module.exports=router;