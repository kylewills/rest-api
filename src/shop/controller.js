const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    //console.log('getting the users for you Kyle');
    pool.query(/*"SELECT * FROM users",*/ queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);  
    });
};

const addUser = (req, res) => {
    const {firstName, lastName, email } = req.body;
    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) =>{
        if(results.rows.length){
            res.send("This email address is already in use");
        }

        //add user to db
        pool.query(queries.addUser, [firstName, lastName, email], (error, results) => {
            if (error) throw error;
            res.status(201).send('a new user has been created');
            console.log('new user created...');
        })
    });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,  
};