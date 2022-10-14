const mng=require('mongoose');
const taskSchema = new mng.Schema({
    name: {
type:String,
required:[true ,'must provide name'],
trim:true,
maxlength:[20],

    },
    completed:{
type:Boolean,
default:false,
    },
})
module.exports=mng.model(' task',taskSchema)