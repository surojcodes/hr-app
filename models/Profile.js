const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
	country: { type: String, required: [true, 'Please provide country'] },
	county: { type: String, required: [true, 'Please provide county'] },
	state: { type: String, required: [true, 'Please provide state'] },
	city: { type: String, required: [true, 'Please provide city'] },
	zipCode: { type: String, required: [true, 'Please provide zip code'] },
	street: { type: String, required: [true, 'Please provide country'] },
	aptUnit: {
		type: String,
		required: [true, 'Please provide apartment/unit number'],
	},
});
const otherDetailsSchema = mongoose.Schema({
	empHistory: String,
	education: String,
	certifications: [String],
	skills: [String],
	duties: [String],
	awards: [String],
	languages: [String],
	hobbies: [String],
});
const ProfileSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: [true, 'Please provide a full name'],
		},
		department: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Department',
			required: [true, 'Please provide a department'],
		},
		gender: {
			type: String,
			enum: {
				values: ['male', 'female', 'other'],
				message: '{VALUE} is not identified as a valid gender',
			},
			required: [true, 'Please provide a gender'],
		},
		maritalStatus: {
			type: String,
			enum: {
				values: [
					'married',
					'single',
					'divorced',
					'widowed',
					'separated',
					'annulled',
				],
				message: '{VALUE} is not identified as a valid marital status',
			},
		},
		dob: {
			type: Date,
			required: [true, 'Please provide a date of birth'],
		},
		jobTitle: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'JobTitle',
			required: [true, 'Please provide a job title'],
		},
		contact: {
			type: [String],
			required: [true, 'Please provide a contact number'],
		},
		address: {
			type: addressSchema,
			required: true,
		},
		image: {
			type: String,
			default: '/uploads/default-user.jpeg',
		},
		otherDetails: otherDetailsSchema,
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('Profile', ProfileSchema);
