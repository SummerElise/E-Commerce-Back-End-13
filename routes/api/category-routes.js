const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Finding all categories
router.get('/', (req, res) => {
  try {
    const categoryData =  Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
  // be sure to include its associated Products
});

  // Find one category by its `id` value
router.get('/:id', async (req, res) => {
    // be sure to include its associated Products
    try {
      const categoryData = await Category.findByPk(req.params.id); 
       if (!categoryData) {
         res.status(404).json({ message: 'No category found with this id!'});
         return;
       }
      
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
});


// create a new category
router.post('/', (req, res) => {
  
});


// update a category by its `id` value
router.put('/:id', (req, res) => {
  
});


 // delete a category by its `id` value
router.delete('/:id', (req, res) => {
 
});

module.exports = router;
