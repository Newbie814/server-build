const express = require('express');

const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/router-controllers');

router.get('/', getPeople);

router.post('/', createPerson);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

router.post('/postman', createPersonPostman);

module.exports = router;
