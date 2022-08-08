import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('traffic-lights', 'user', '1234', {
    dialect: 'sqlite',
    host: './db.sqlite'
});

export default sequelize;