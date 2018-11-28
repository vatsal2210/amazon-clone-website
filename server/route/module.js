module.exports = function (appContext) {

    const module = {};

    /* MongodB Models */
    const Product = require('../models/product');
    module.Product = Product;

    const Review = require('../models/review');
    module.Review = Review;

    const Order = require('../models/order');
    module.Order = Order;

    const User = require('../models/user');
    module.User = User;

    /* Other Routing Files */
    const userRoute = require("./user.js")(module, appContext);
    const productRoute = require('./products.js')(module, appContext);
    const sellerRoute = require("./seller.js")(module, appContext);

};