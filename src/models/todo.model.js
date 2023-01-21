module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Todo', {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true

    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.DataTypes.NOW
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.DataTypes.NOW
    },
  }, {
    tableName: 'todos-test'
  });
};
