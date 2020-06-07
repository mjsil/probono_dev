import User from '../models/User';
import Rule from '../models/Rule';

class RuleController {
    async show(req, res) {
        const { gereric_title } = req.params;

        // gereric_title = gereric_title
        // .normalize('NFD')
        // .replace(/[\u0300-\u036f]/g, '');

        gereric_title = gereric_title.toLowerCase();

        // const data = await Rule.findOne({
        //     where: {
        //         rule: gereric_title,
        //     },
        // });

        // if (!data) {
        //     return res.status(401).json({
        //         error: 'Rule not found',
        //     });
        // }

        return res.json(gereric_title);
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
                id_lawyer: req.userId,
                rule: req.body.rule,
            },
        });

        if (ruleExists) {
            return res.status(400).json({
                error: 'Rule already exists.',
            });
        }

        const rule = await Rule.create({
            id_lawyer: req.userId,
            rule: req.body.rule,
            translation: req.body.translation,
        });

        return res.json(rule);
    }
}

export default new RuleController();
