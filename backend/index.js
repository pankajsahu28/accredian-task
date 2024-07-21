const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referrals');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: ["https://accredian-task-frontend-puce.vercel.app"], 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

app.use('/api', referralRoutes);

app.get('/test', (req, res) => {
  res.json({ message: 'CORS is working' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
