const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,

          
        },
        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,

                  
                },
                name: { type: String, },
                quantity: { type: Number, },
                price: { type: Number, },
            },
        ],

        fullName: { type: String },
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },



        shippingPrice: { type: Number, },
        totalPrice: { type: Number, },
        status: {
            type: String,
            default: "pending",
        },

    },
    {
        timestamps: true, // automatically adds createdAt & updatedAt
    }
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
