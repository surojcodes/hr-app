const mongoose = require('mongoose');
const JobTitleSchema = new mongoose.Schema(
	{
		jobTitle: {
			type: String,
			required: [true, 'Please provide a job title'],
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('JobTitle', JobTitleSchema);
