const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');
const { contactLimiter, validateContact } = require('../middleware/validateContact');

// POST /api/contact
router.post('/', contactLimiter, validateContact, submitContact);

module.exports = router; 