module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rules', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            rule: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            translation: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('rules');
    },
};
