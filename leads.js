const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Lead', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consumoEnergia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoTelhado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
