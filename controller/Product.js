const Product = require('../model/productModel')

const getAllProducts = async(req, res) => {
    try{
        const {name, sort, select} = req.query;
        queryBody = {};

        if(name){
            queryBody.name = {$regex: name, $options: "i"}
        }

        let apiData = Product.find(queryBody);

        if(sort){
            let sortFix = sort.split(',').join(" ");
            apiData = apiData.sort(sortFix);
        }

        if(select){
            let selectFix = select.split(',').join(" ");
            apiData = apiData.select(selectFix);
        }

        const getAllProducts = await apiData;
        res.status(200).json(getAllProducts);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = getAllProducts;