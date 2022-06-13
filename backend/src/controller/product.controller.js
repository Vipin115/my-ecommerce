const express = require("express");
const productData = require("../model/product.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const userData = await productData.create({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            category:req.body.category,
            image:req.body.image,
            rating:req.body.rating
            
        });
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{

    
    try {
        const userData = await productData.find().lean().exec();
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("/:_id", async (req, res)=>{

   
    try {
        const userData = await productData.findById(req.params._id).lean().exec();

        
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

module.exports = router