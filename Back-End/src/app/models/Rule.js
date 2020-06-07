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

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'id_lawyer',
            as: 'lawyer',
        });
    }
}

export default Rule;
