import Sequelize, { Model } from 'sequelize';

class Progress extends Model {
    static init(sequelize) {
        super.init(
            {
                generic_title: Sequelize.STRING,
                date: Sequelize.DATE,
                hours: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Process, {
            foreignKey: 'id_process',
            as: 'process',
        });
    }
}

export default Progress;
