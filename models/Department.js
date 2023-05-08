const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
	deptName: {
		type: String,
		required: [true, 'Please provide a name'],
	},
	deptHead: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	totalUsers: {
		type: Number,
		default: 0,
	},
});
module.exports = mongoose.model('Department', DepartmentSchema);
