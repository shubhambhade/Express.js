const express = require('express');
const app = express();

//root route
app.get('/',(req, res)=>
{
    res.send("Welcome to our home page");
});

//get all products
app.get('/products',(req, res)=>
{
   const product=[
    {
    id : 1,
    lable : 'Product 1',

   },
   {
    id : 2,
    lable : 'Product 2',

   },
   {
    id : 3,
    lable : 'Product 3',

   } 
  ];
  res.json(product);
});

//get a sinle product(dynamic routing.

app.get('/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id);
    const product=[
        {
        id : 1,
        lable : 'Product 1',
    
       },
       {
        id : 2,
        lable : 'Product 2',
    
       },
       {
        id : 3,
        lable : 'Product 3',
    
       } 
      ];
      const getSingleProduct = product.find(product=>product.id === productId);

      if(getSingleProduct)
      {
        res.json(getSingleProduct);
      }
      else{
        res.status(404).send('product is not found please try with different id');
      }
})

const port = 3000;
app.listen(port,()=>{
    console.log('Server is now start at port : ',port);
});