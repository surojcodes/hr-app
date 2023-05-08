const express = require('express');
const {
	createProfile,
	getAllProfiles,
	getProfile,
	updateProfile,
	deleteProfile,
} = require('../controllers/ProfileController');
const router = express.Router();

router.route('/').get(getAllProfiles).post(createProfile);
router.route('/:id').get(getProfile).patch(updateProfile).delete(deleteProfile);

module.exports = router;
