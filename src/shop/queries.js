const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const checkEmailExists = 'SELECT u FROM users WHERE u.email = $1';
const addUser = 'INSERT INTO users (fisrtName, lastName, email) VALUES ($1, $2, $3)';

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
}