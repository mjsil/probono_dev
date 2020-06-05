import User from '../models/User';
import Process from '../models/Process';
import Progress from '../models/Progress';
import { startOfHour, parseISO } from 'date-fns';

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

        const formattedDate = startOfHour(parseISO(req.body.date));

        // FAZER A BUSCA PARA SUBSTITUIÇÃO DA DESCRIÇÃO DO CASO

        // const progress = await Progress.create({
        //     id_process,
        //     description: req.body.description,
        //     date: formattedDate,
        // });

        return res.json({
            id_process,
            description: req.body.description,
            date: formattedDate,
        });
    }
}

export default new ProgressController();
