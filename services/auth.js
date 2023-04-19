const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');

const { SECRET_KEY } = require('../keys.js');

function HeaderAuth({ req }) {

    // console.log(req);
    // console.log(req.get('authorization'))
    const headerToken = req.headers.get('authorization');
    // const headerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZmZDNkODkwNmVjZmFhYzYzYTgzNyIsInVzZXJuYW1lIjoic3VzYW4iLCJlbWFpbCI6InN1c2FuQGdtYWlsLmNvbSIsImlhdCI6MTY4MTkxNjc5NCwiZXhwIjoxNjgxOTIwMzk0fQ.rXNwTzJZJadqT9h94REEDFVb6hkbtMluMELCFfi9lJs"
    console.log(`bearer ${headerToken}`)
    if(headerToken) {
        try {
            const token = headerToken.trim();
            console.log(`bearer ${token}`)
            const user = jwt.verify(token, SECRET_KEY);
            return user;
        }
        catch(err) {
            throw new AuthenticationError('token expired');
        }
    }
    throw new AuthenticationError('no authentication header');
}

module.exports = { HeaderAuth };