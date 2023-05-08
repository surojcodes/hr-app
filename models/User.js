const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a name'],
		},
		email: {
			type: String,
			required: [true, 'Please provide an email address'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please provide a password'],
		},
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
			required: [true, 'Please provide a user role'],
		},
		profile: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Profile',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
