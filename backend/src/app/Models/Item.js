const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Item = new mongoose.Schema({
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
},
{
    timestamps: true,
});

Item.plugin(mongoosePaginate);

module.exports = mongoose.model('Item', Item);

