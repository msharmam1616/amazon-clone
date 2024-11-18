import { Product } from "../db";
import { authMiddleware } from "../validation";


const router= express.Router();

router.post('/addProduct', authMiddleware, (req: any, res:any ,next: any) =>{
    
    const category= req.body.category;
    const type= req.body.type;
    const name= req.body.name;
    const brand= req.body.brand;
    const price= req.body.price;
    const imagePath= req.body.imagePath;
    const description= req.body.description;
    const quantity= req.body.quantity;
    const rating= req.body.rating;

    Product.addOne({
        category,
        type,
        name,
        brand,
        price,
        imagePath,
        description,
        quantity,
        rating
    });
})


router.get('/findProduct', authMiddleware, async (req:any, res: any, next: any) => {
    const filter= req.params.filter;
    const products= await Product.findAll({
        name: new RegExp(filter)
    })

    res.json(products);
})


module.exports= router;