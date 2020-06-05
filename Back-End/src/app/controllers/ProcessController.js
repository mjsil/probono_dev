import User from '../models/User';
import Process from '../models/Process';

class ProcessController {
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
