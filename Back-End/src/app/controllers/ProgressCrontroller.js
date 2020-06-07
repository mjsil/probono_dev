import User from '../models/User';
import Process from '../models/Process';
import Progress from '../models/Progress';

class ProgressController {
    async index(req, res) {
        const progresses = await Progress.findAll({
            where: {
                id_process: req.params.id,
            },
        });

        return res.json(progresses);
    }

    async store(req, res) {
        const isLawyer = await User.findOne({
            where: {
                id: req.userId,
                provider: true,
            },
        });

        if (!isLawyer) {
            return res.status(401).json({
                error: 'You can only create progresses as lawyer',
            });
        }

        /**
         * Check if process belongs to lawyer and exists
         */
        const belongs = await Process.findOne({
            where: {
                id: req.body.id_process,
                id_lawyer: req.userId,
            },
        });

        if (!belongs) {
            return res.status(401).json({
                error: 'The process does not belong to you or does not exists!',
            });
        }

        const progress = await Progress.create(req.body);

        return res.json(progress);
    }
}

export default new ProgressController();
