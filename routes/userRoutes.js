const express = require('express');
const {
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/UserController');
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
