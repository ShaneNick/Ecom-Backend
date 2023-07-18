const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Tag }] 
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Tag }]  
    });
    
    if (!product) {
      res.status(404).json({ message: 'No product found!' });
      return;
    }

    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new product
router.post('/', async (req, res) => {
  /* Create product, then insert product_tag rows */
  try {
    const product = await Product.create(req.body);

    // Get related tags from request
    const tagIds = req.body.tagIds;
    if (tagIds && tagIds.length) {
      const productTags = tagIds.map(tag_id => {
        return {
          product_id: product.id,
          tag_id
        };
      });
      await ProductTag.bulkCreate(productTags);
    }

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;