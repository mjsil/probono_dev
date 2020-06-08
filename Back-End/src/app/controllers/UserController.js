import User from '../models/User';

class UserController {
    async show(req, res) {
        const { cpf } = req.params;

        const userExists = await User.findOne({
            where: {
                cpf,
                provider: false,
            },
        });

        if (!userExists) {
            return res.status(401).json({
                error: 'Client not found',
            });
        }

        return res.json(userExists.id);
    }

    async store(req, res) {
        const emailExists = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        const cpfExists = await User.findOne({
            where: {
                cpf: req.body.cpf,
            },
        });

        if (emailExists || cpfExists) {
            return res.status(400).json({
                error: 'User already exists.',
            });
        }

        const { name, email, provider } = await User.create(req.body);

        return res.json({
            name,
            email,
            provider,
        });
    }
}

export default new UserController();
