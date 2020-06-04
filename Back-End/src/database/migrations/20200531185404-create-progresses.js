module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('progresses', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            process: {
                type: Sequelize.INTEGER,
                references: { model: 'processes', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
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
