import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Process from '../app/models/Process';
import Progress from '../app/models/Progress';
import Rule from '../app/models/Rule';

const models = [User, Process, Progress, Rule];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection)),
            models.map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
