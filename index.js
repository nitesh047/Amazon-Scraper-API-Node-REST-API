import axios from 'axios';
import express from 'express';
// import { json } from 'express/lib/response';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const api = 'ca1f42ead26648d40fc010265ac74009';
const returnScraperApiUrl  = `http://api.scraperapi.com?api_key=${api}&autoparse=true`;

app.get('/',(req,res)=>{
    res.send("Welcome to rest api")
})
console.log('productId');
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
   console.log(productId);
    try {
        const response = await axios.get(`${returnScraperApiUrl}&url=https://www.amazon.in/dp/${productId}`);
        
        res.json('Success');
        console.log(response);
    } catch (error) {
        res.json(error);
    }
});
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
   console.log(productId);
    try {
        const response = await axios.get(`${returnScraperApiUrl}&url=https://www.amazon.in/product-reviews/${productId}`);
        
        res.json('Success');
        console.log(response);
    } catch (error) {
        res.json(error);
    }
});

app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
   console.log(productId);
    try {
        const response = await axios.get(`${returnScraperApiUrl}&url=https://www.amazon.in/gp/offer-listing/${productId}`);
        
        res.json('Success');
        console.log(response);
    } catch (error) {
        res.json(error);
    }
});

app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
//    console.log(productId);
    try {
        const response = await axios.get(`${returnScraperApiUrl}&url=https://www.amazon.in/s?k=${searchQuery}`);
        
        res.json('Success');
        console.log(response);
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port : ${PORT}`);
})