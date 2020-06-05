import User from '../models/User';
import Rule from '../models/Rule';

class RuleController {
    async index(req, res) {
        return;
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
                error: 'You can only create rules as lawyer',
            });
        }

        const ruleExists = await Rule.findOne({
            where: {
                rule: req.body.rule,
            },
        });

        if (ruleExists) {
            return res.status(400).json({
                error: 'Rule already exists.',
            });
        }

        const { id, rule, translation } = await Rule.create(req.body);

        return res.json({
            id,
            rule,
            translation,
        });
    }
}

export default new RuleController();
