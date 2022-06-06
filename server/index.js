const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const users = [
{
username: 'john',
password: '123',
role: 'admin'
}, {
username: 'anna',
password: 'password123member',
role: 'member'
}
];
const accessTokenSecret = 'bgimahood';

app.use(express.json());


app.post('/login', (req, res) => {
// Read username and password from request body
const { username, password } = req.body;
// Filter user from the users array by username and password
const user = users.find(u =>  u.username === username && u.password === password );
if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username, password }, accessTokenSecret)
         res.json({
            accessToken
        });
       } else {
            res.send('Username or password incorrect');
        }
    });


app.listen(3001, () => {
console.log('Authentication service started on port 3001');
});