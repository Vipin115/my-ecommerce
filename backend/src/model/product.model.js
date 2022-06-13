const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
       
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: {type: String,required: true },
        category: {type: String,required: true },
        image: {type: String,required: true },
        rating: { type: Object, required: true },
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const productData = mongoose.model("product", productSchema);

module.exports = productData;