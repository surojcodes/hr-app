const createRole = async (req, res) => {
	res.send('createRole');
};
const getAllRoles = async (req, res) => {
	res.send('getAllRoles');
};
const getRole = async (req, res) => {
	res.send('getRole');
};
const updateRole = async (req, res) => {
	res.send('updateRole');
};
const deleteRole = async (req, res) => {
	res.send('deleteRole');
};

module.exports = {
	createRole,
	getAllRoles,
	getRole,
	updateRole,
	deleteRole,
};
