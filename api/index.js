import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://anukul:anukul@cluster0.lmk1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

const app = express();

app.listen(3001, () => {
    console.log('Server is running on port 3001!!');
});
