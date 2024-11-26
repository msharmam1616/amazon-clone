import { addProduct } from "../services/product-services";
import { authMiddleware } from "../validation";

const express= require('express');
const router= express.Router();

router.post('/addProduct', async (req: any, res:any ,next: any) =>{
    const product= req.body;
    addProduct(product).then(()=>{
       return res.json({
        type: "Success",
        msg: "Product Added Successfully!"
       })
    }).catch(()=>{
       return res.json({
            type: "Error",
            msg: "Error while adding product!"
        })
    })
})


// router.get('/findProduct', authMiddleware, async (req:any, res: any, next: any) => {
//     const filter= req.params.filter;
//     const products= await Product.findAll({
//         name: new RegExp(filter)
//     })

//     res.json(products);
// })

module.exports= router;