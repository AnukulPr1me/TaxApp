import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

mongoose.connect('mongodb+srv://anukul:anukul@cluster0.lmk1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

const app = express();
app.use(express.json());

app.listen(3001, () => {
    console.log('Server is running on port 3001!!');
});

// Corrected route paths
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

export default app;
