import User from '../models/User';
import Rule from '../models/Rule';

class RuleController {
    async show(req, res) {
        const { generic_title } = req.params;

        // const titleValidation = generic_title
        //     .normalize('NFD')
        //     .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
        //     .toLowerCase();

        const rule = await Rule.findOne({
            where: {
                validation: generic_title,
            },
        });

        return res.json(rule);
    }

    async index(req, res) {
        const rules = await Rule.findAll({
            where: {
                id_lawyer: req.userId,
            },
        });

        if (!rules) {
            return res.status(401).json({
                error: 'Rules not found',
            });
        }

        return res.json(rules);
    }

    async store(req, res) {
        const { rule, translation, date, hours } = req.body;

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

        const ruleValidation = rule
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
            .toLowerCase();

        const ruleExists = await Rule.findOne({
            where: {
                id_lawyer: req.userId,
                validation: ruleValidation,
            },
        });

        if (ruleExists) {
            return res.status(400).json({
                error: 'Rule already exists.',
            });
        }

        const newRule = await Rule.create({
            id_lawyer: req.userId,
            rule,
            translation,
            validation: ruleValidation,
            date,
            hours,
        });

        return res.json(newRule);
    }
}

export default new RuleController();
