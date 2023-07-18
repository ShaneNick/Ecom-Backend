const router = require('express').Router();
const { Category } = require('../../models');

// Get all categories
router.get('/', async (req, res) => {
  const categoriesList = await fetchCategories();
  res.json(categoriesList);
});

// Get single category by ID
router.get('/:id', async (req, res) => {
  const categoryItem = await fetchCategoryById(req.params.id);
  if(!categoryItem) return res.status(404).json({ message: 'Category not found!' });
  
  res.json(categoryItem);
}); 

// Create a new category
router.post('/', async (req, res) => {
  try {
    const addedCategory = await Category.create(req.body);
    res.status(201).json(addedCategory);
  } catch (err) {
    handleError(res, err);
  }
});

// Update a category
router.put('/:id', async (req, res) => {
  try {
    const [modifiedCount] = await Category.update(req.body, { 
      where: { id: req.params.id }
    });
    if(!modifiedCount) return res.status(404).json({ message: 'Category not found!' });
    
    res.json(modifiedCount);
  } catch (err) {
     handleError(res, err);
  }
});

// Delete a category
router.delete('/:id', async (req, res) => {
  try {
    const deletedCount = await Category.destroy({ where: { id: req.params.id }});
    if(!deletedCount) return res.status(404).json({ message: 'Category not found!' });
    
    res.json(deletedCount);
  } catch (err) {
    handleError(res, err);
  }
});

// Helper functions
async function fetchCategories() {
  return await Category.findAll();
}

async function fetchCategoryById(id) {
  return await Category.findByPk(id); 
}

function handleError(res, err) {
  console.log(err);
  res.status(500).json(err); 
}

module.exports = router;