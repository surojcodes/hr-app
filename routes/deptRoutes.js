const express = require('express');
const {
	createDepartment,
	getAllDepartments,
	getDepartment,
	updateDepartment,
	deleteDepartment,
} = require('../controllers/deptControllers');
const router = express.Router();

router.route('/').get(getAllDepartments).post(createDepartment);
router
	.route('/:id')
	.get(getDepartment)
	.patch(updateDepartment)
	.delete(deleteDepartment);

module.exports = router;
