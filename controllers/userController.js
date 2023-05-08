const getAllUsers = async (req, res) => {
	res.send('getAllUsers');
};
const getUser = async (req, res) => {
	res.send('getUser');
};
const updateUser = async (req, res) => {
	res.send('updateUser');
};
const deleteUser = async (req, res) => {
	res.send('deleteUser');
};

module.exports = {
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
};
