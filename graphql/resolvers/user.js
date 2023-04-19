const User = require("../../models/User");
const { HeaderAuth } = require("../../services/auth");

module.exports = {
    Query: {
        allUsers: async function() {
            const users = await User.find();
            console.log(users);
            return users;
        },
        currUser: async function(_, _, context) {
            return HeaderAuth(context);
        },
    }
}