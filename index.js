/*mongoose is an object modeling package for Node that essentially works like an ORM that you would see in other languages

Mongoose allows us to have access to the MongoDB commands for CRUD simply and easily.*/

'use strict';

let mongoose = require('mongoose');

//connecting to mongodb 
mongoose.connect('mongodb://localhost/myappdb');

let User = require('./users.js'); //adding model file

//create a new user

let newUser = new User({
	name:'udit kumawat',
	username:'udit',
	password:'admin',
	admin:true
});

newUser.dudify(function(err,name){
	if(err)
		throw err;

	console.log('your new name is '+name);
});

//save the user in db

newUser.save(function(err){
	if(err)
		throw err;

	console.log('User Saved succesfully');
});


User.find({},function(err,users){
	
	if(err)
		throw err;
	else
		console.log(users);
});

/*
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

*/

/*
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});

*/

/*

// get any admin that was created in the past month

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});

*/

/*
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});
*/


/*

// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
*/

/*

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

*/


