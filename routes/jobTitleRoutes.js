const express = require('express');
const {
	createJobTitle,
	getAllJobTitles,
	getJobTitle,
	updateJobTitle,
	deleteJobTitle,
} = require('../controllers/jobTitleController');
const router = express.Router();

router.route('/').get(getAllJobTitles).post(createJobTitle);
router
	.route('/:id')
	.get(getJobTitle)
	.patch(updateJobTitle)
	.delete(deleteJobTitle);

module.exports = router;
