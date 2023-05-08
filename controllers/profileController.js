const createProfile = async (req, res) => {
	res.send('createProfile');
};
const getAllProfiles = async (req, res) => {
	res.send('getAllProfiles');
};
const getProfile = async (req, res) => {
	res.send('getProfile');
};
const updateProfile = async (req, res) => {
	res.send('updateProfile');
};
const deleteProfile = async (req, res) => {
	res.send('deleteProfile');
};

module.exports = {
	createProfile,
	getAllProfiles,
	getProfile,
	updateProfile,
	deleteProfile,
};
