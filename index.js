import express from 'express';

import stonesRoutes from './routes/stones.js'; 

const app = express();
const PORT = 5000;

// Use Express 5's built-in JSON parser instead of body-parser
app.use(express.json());

app.use('/stones', stonesRoutes);

app.get('/', (req, res) => res.json({ message: 'Welcome to Stones API', version: '1.0.0' }));

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
