const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('colors');

// routes
const authRoutes = require('./routes/authRoutes');
const deptRoutes = require('./routes/deptRoutes');
const jobTitleRoutes = require('./routes/jobTitleRoutes');
const profileRoutes = require('./routes/profileRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/depts', deptRoutes);
app.use('/api/v1/job-titles', jobTitleRoutes);
app.use('/api/v1/profiles', profileRoutes);
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/users', userRoutes);

app.use((req, res) => {
	res.send('Hello to HR APP');
});

async function start() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`.bold.green.underline);
		});
	} catch (error) {
		console.log(`${error}`.red.bold.underline);
	}
}

start();
