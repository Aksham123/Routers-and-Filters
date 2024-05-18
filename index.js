const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Create a router for admin routes
const adminRouter = express.Router();
adminRouter.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

// Create a router for shop routes
const shopRouter = express.Router();
shopRouter.get('/products', (req, res) => {
    res.send('Products Page');
});

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Use the routers
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

// Handle 404 Page Not Found
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
