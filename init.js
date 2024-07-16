const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const usersTable = require('./usuarios')(sequelize);
const leadsTable = require('./leads')(sequelize);
const subscriptionsTable = require('./assinantes')(sequelize);
const adminsTable = require('./admins')(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');

    // Sincroniza todas as tabelas definidas
    await usuariosTable.sync();
    await leadsTable.sync();
    await assinantesTable.sync();
    await adminsTable.sync();

    console.log('Tabelas criadas com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
    console.log('Conexão com o banco de dados fechada.');
  }
})();
