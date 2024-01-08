const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");

class SessionsController {
    async create(resquest, response) {
        const { email, password } = resquest.body;

        const user = await knex("users").where({ email }).first();

        if (!user) {
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        return response.json(user);
    }
}

module.exports = SessionsController;