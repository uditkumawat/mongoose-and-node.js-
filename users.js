'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;  //taking into consideration Schema class

var userSchema = new Schema({
	
	name:String,
	username:{type:String,required:true,unique:true},
	password:{type:String,required:true},
	admin:Boolean,
	location:String,
	meta:{
		age:Number,
		website:String
	},
	created_at:Date,
	updated_at:Date
});


//adding methods to schema "schema_name.methods.func_name"
userSchema.methods.dudify = function()
{
	this.name = this.name +'-dude';
	return this.name;
};

//run a function before saving
// "pre" method is required for that

userSchema.pre('save',function(next){
	
	var currentDate = new Date();

	this.updated_at = currentDate;

	if(!this.created_at)
		this.created_at = currentDate;

	next(); 

/*
Now on every save, we will add our dates. This is also a great place to hash passwords to be sure that we never save plaintext passwords
*/
});

//make a model to use the schema
var User = mongoose.model('User',userSchema);

//make this model available to other users in node application
module.exports = User;
