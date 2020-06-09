import User from '../models/User';
import Process from '../models/Process';

class ProcessController {
    async show(req, res) {
        const { number } = req.params;

        const processExists = await Process.findOne({
            where: {
                id_lawyer: req.userId,
                number,
            },
        });

        if (!processExists) {
            return res.status(401).json({
                error: 'Process not found',
            });
        }

        return res.json(processExists.id);
    }

    async index(req, res) {
        const user = await User.findOne({
            where: {
                id: req.userId,
            },
        });

        if (user.provider === true) {
            const listProcesses = await Process.findAll({
                where: {
                    id_lawyer: req.userId,
                },
                include: [
                    {
                        model: User,
                        as: 'client',
                        attributes: ['id', 'name'],
                    },
                ],
            });

            return res.json(listProcesses);
        }

        const listProcesses = await Process.findAll({
            where: {
                id_client: req.userId,
            },
            include: [
                {
                    model: User,
                    as: 'client',
                    attributes: ['id', 'name'],
                },
            ],
        });

        return res.json(listProcesses);
    }

    async store(req, res) {
        const { number, id_client } = req.body;

        const isLawyer = await User.findOne({
            where: {
                id: req.userId,
                provider: true,
            },
        });

        if (!isLawyer) {
            return res.status(401).json({
                error: 'You can only create processes as lawyer',
            });
        }

        const clientExists = await User.findOne({
            where: {
                id: id_client,
            },
        });

        if (!clientExists) {
            return res.status(401).json({
                error: 'Client not found',
            });
        }

        const process = await Process.create({
            number,
            id_lawyer: req.userId,
            id_client,
        });

        return res.json(process);
    }
}

export default new ProcessController();
