import express from 'express';
import publicRoutes from './routes/public.js';
import router from './routes/public.js';

// Initialize express app
const app = express();
const port = 3000;

// Rota raiz
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// Middlewares
app.use(express.json());
app.use('/usuarios', publicRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});