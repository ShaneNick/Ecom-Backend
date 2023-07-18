const express = require('express');
const { Product, Tag, ProductTag } = require('../../models');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [{ model: Tag }] 
    });
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single product by id
router.get('/:id', async (req, res) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: [{ model: Tag }]  
    });
    
    if (!singleProduct) {
      res.status(404).json({ message: 'Product not found with given id!' });
      return;
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    const productTagIds = req.body.tagIds;
    if (productTagIds && productTagIds.length) {
      const newProductTags = productTagIds.map(tag_id => {
        return {
          product_id: newProduct.id,
          tag_id
        };
      });
      await ProductTag.bulkCreate(newProductTags);
    }

    res.status(200).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    let existingProductTags = await ProductTag.findAll({
      where: { product_id: req.params.id },
    });
    const existingTagIds = existingProductTags.map(({ tag_id }) => tag_id);
    const newProductTagIds = req.body.tagIds
      .filter((tag_id) => !existingTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });

    const productTagUpdates = await Promise.all([
      ProductTag.destroy({ where: { id: productTagIdsToRemove } }),
      ProductTag.bulkCreate(newProductTagIds),
    ]);

    res.status(200).json(productTagUpdates);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found with given id!' });
      return;
    }

    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
