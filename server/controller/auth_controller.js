const swag = require("../models/users")

let id = 1

module.exports = {
    login: (req, res, next) => {
        const { session } = req

        // const { username, password } = req.body;
        const user = users.find(user => user.username === username && user.password === password)
        // if (users[i] === { username, password })
        if (user) {
            session.user.username = user.name;
            res.status(200).send(session.user)
        } else {
            res.status(500).send("No Bueno")
        }
        // user = session.user.username;
        // res.status(200).send(user).catch.staus(500).send('err')

    },
    register: (req, res, next) => {
        const { username, password } = req.body;
        users.push({ id, username, password }); id++;
        res.status(200).send()

    },
    signout: (req, res, next) => {
        const { session } = req;
        session.destroy();
        res.status(200).send(req.session)
    },

    getUser: (req, res, next) => {
        const { session } = req
        res.status(200).send(session.user)
    }
}