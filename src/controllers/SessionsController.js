class SessionsController {
    async create(resquest, response) {
        const { email, password } = resquest.body;

        return response.json({ email, password });
    }
}

module.exports = SessionsController;