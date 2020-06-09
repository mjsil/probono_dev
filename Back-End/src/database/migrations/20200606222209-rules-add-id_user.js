module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('rules', 'id_lawyer', {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('rules', 'id_lawyer');
    },
};
