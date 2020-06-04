import Sequelize, { Model } from 'sequelize';

class Process extends Model {
    static init(sequelize) {
        super.init(
            {
                number: Sequelize.INTEGER,
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

        this.belongsTo(models.User, {
            foreignKey: 'id_client',
            as: 'client',
        });
    }
}

export default Process;
