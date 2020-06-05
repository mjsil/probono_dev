import Sequelize, { Model } from 'sequelize';

class Rule extends Model {
    static init(sequelize) {
        super.init(
            {
                rule: Sequelize.STRING,
                translation: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Rule;
