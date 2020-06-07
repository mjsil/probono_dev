module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('rules', 'validation', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('rules', 'validation');
    },
};
