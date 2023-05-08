const createDepartment = async (req, res) => {
	res.send('createDepartment');
};
const getAllDepartments = async (req, res) => {
	res.send('getAllDepartments');
};
const getDepartment = async (req, res) => {
	res.send('getDepartment');
};
const updateDepartment = async (req, res) => {
	res.send('updateDepartment');
};
const deleteDepartment = async (req, res) => {
	res.send('deleteDepartment');
};

module.exports = {
	createDepartment,
	getAllDepartments,
	getDepartment,
	updateDepartment,
	deleteDepartment,
};
