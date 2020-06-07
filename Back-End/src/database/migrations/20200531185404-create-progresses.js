module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('progresses', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_process: {
                type: Sequelize.INTEGER,
                references: { model: 'processes', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            generic_title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            details: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            hours: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('progresses');
    },
};
