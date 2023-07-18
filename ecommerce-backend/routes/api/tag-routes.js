const express = require('express');
const { Tag, Product, ProductTag } = require('../../models');
const router = express.Router();

// Retrieving all tags
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tagged_products' }]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Retrieving a single tag by its id
router.get('/:id', async (req, res) => {
  try {
    const singleTagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tagged_products' }]
    });

    if (!singleTagData) {
      res.status(404).json({ message: 'Tag with this id does not exist!' });
      return;
    }

    res.status(200).json(singleTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creating a new tag
router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create(req.body);
    res.status(200).json(newTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updating a tag name using its id
router.put('/:id', async (req, res) => {
  try {
    const updatedTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTagData) {
      res.status(404).json({ message: 'Tag with this id does not exist!' });
      return;
    }

    res.status(200).json(updatedTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deleting a tag using its id
router.delete('/:id', async (req, res) => {
  try {
    const deletedTagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTagData) {
      res.status(404).json({ message: 'Tag with this id does not exist!' });
      return;
    }

    res.status(200).json(deletedTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
