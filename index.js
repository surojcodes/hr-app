const express = require('express');
const colors = require('colors');

// routes
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/v1/auth', authRoutes);
app.use((req, res) => {
	res.send('Hello to LMS');
});

function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`.bold.green.underline);
		});
	} catch (error) {
		console.log(error.bold.underline);
	}
}

start();
