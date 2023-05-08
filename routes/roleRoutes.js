const express = require('express');
const {
	createRole,
	getAllRoles,
	getRole,
	updateRole,
	deleteRole,
} = require('../controllers/roleController');
const router = express.Router();

router.route('/').get(getAllRoles).post(createRole);
router.route('/:id').get(getRole).patch(updateRole).delete(deleteRole);

module.exports = router;
