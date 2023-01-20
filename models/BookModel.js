const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categories:{
        type: String
    },
    publishDate:{
        type:Number,
        required: false,
        default: `unknown`
    },
    pages:{
        type:Number,
        required: false,
        default: 'unknown'
    }
})



module.exports=model('Book', BookSchema);