const express = require('express')
const { list, create, categoryById, remove } = require('../controllers/category.controller')
const router = express.Router()

router.get('/categories', list)
router.post('/createCategory', create)
router.delete('/:categoryId', remove)
router.param('categoryId', categoryById)

module.exports = router