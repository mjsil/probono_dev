import User from '../models/User';
import Process from '../models/Process';
import Progress from '../models/Progress';
import Rule from '../models/Rule';

class ProgressController {
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

        const { id_process } = req.body;

        /**
         * Check if process belongs to lawyer and exists
         */
        const belongs = await Process.findOne({
            where: {
                id: id_process,
                id_lawyer: req.userId,
            },
        });

        if (!belongs) {
            return res.status(401).json({
                error: 'The process does not belong to you or does not exists!',
            });
        }

        /**
         * Check if the rule exists
         */
        const rule = await Rule.findOne({
            where: {
                rule: req.body.generic_title,
            },
        });

        const progress = await Progress.create({
            id_process,
            generic_title: rule ? rule.translation : req.body.generic_title,
            date: req.body.date,
            hours: req.body.hours,
        });

        return res.json(progress);
    }
}

export default new ProgressController();
