const Pet = require('../models/petModel');


exports.newPets=async(req,res,next)=>{
        console.log("received data",req.body);
        
        try {
            const pets=await Pet.create(req.body);
            res.status(200).json({
                success:true,
                pets
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error:error.message
            })
        }
}

exports.getPets=async(req,res,next)=>{
        try {
          const pets= await Pet.find();
          res.json(pets);  
        } catch (error) {
           res.status(500).json({
            message:error.message
           }) 
        }
}

exports.getSinglePet=async(req,res,next)=>{
    try {
        const pets= await Pet.findById(req.params.id);

        res.json({
            success:true,
            pets
    
        }) 
    } catch (error) {
        res.json({
            success:false,
            message:error.message
    
        }) 
    }
    
}


exports.updatePet = async (req, res) => {
    try {
      const pet = await Pet.findById(req.params.id);
  
      if (!pet) {
        return res.status(404).json({ message: "Pet not found" });
      }
  
      pet.name = req.body.name || pet.name;
      pet.species = req.body.species || pet.species;
      pet.age = req.body.age || pet.age;
      pet.personality = req.body.personality || pet.personality;
  
      const updatedPet = await pet.save();
  
      res.status(200).json({
        success: true,
        pet: updatedPet
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  

exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json({ message: "Pet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





exports.adoptPet = async (req, res) => {
  try {
    const petId = req.params.id;

    
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    
    pet.adopted = true;
    pet.adoption_date = new Date();

  
    const updatedPet = await pet.save();

    res.json({ message: 'Pet adopted successfully', pet: updatedPet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getMoodPets = async (req, res, next) => {
  try {
    const mood = req.query.mood;

    if (!mood) {
      return res.status(400).json({ success: false, message: 'Mood query is required' });
    }

    const pets = await Pet.find({
      mood: {
        $regex: `^${mood}$`, 
        $options: 'i'
      }
    });

    res.json({
      success: true,
      pets
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

