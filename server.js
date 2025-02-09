const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const userRoutes = require('./routes/userRoutes');
const bloodRequestRoutes = require('./routes/bloodRequestRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/blood-requests', bloodRequestRoutes);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
