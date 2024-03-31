const express = require('express');
const cors = require('cors')
const app = express();
const db = require('./db');
const userRoutes = require('./routes/users');
app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('heelloo')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
