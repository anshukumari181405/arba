const express = require('express');
const CategoryModel = require('../models/categories');
const { upload } = require("../utils/multer");
const CategoryController = express.Router();

// Get All Categories


CategoryController.get('/category', async (req, res) => {
console.log("hello" );
  try {
    let query = {};

    if (req.query.name) {
      const nameRegex = new RegExp(req.query.name, 'i');
      query = { name: nameRegex };
    }

    const categories = await CategoryModel.find(query);

    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// Create Category

CategoryController.post('/category',  async (req, res) => {
  console.log(req.body);
  const user = "661e470b23b74ace6fa80bb0";
  try {
    const { name, slug ,image} = req.body;
    const category = await CategoryModel.create({ name, slug, image, owner: user });
    res.status(201).json({ msg: 'Category created', success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update Category

CategoryController.patch('/category/update/:id',async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, slug ,image} = req.body;
    const updateFields = { name, slug ,image};

    const category = await CategoryModel.findByIdAndUpdate(
      categoryId,
      updateFields,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.status(200).json({ msg: 'Category updated', success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get Single Category

CategoryController.get('/category/:id',  async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete Category

CategoryController.delete('/category/delete/:id',  async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await CategoryModel.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = CategoryController;
