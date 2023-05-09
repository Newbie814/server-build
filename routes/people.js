const express = require('express');

const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/router-controllers');

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);
// router.post('/postman', createPersonPostman);

// alternative syntax
router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);
router.route('/postman').post(createPersonPostman);

module.exports = router;
