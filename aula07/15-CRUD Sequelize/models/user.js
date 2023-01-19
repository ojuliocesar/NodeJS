const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../includes/connection');

class User extends Model {}

User.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

sequelize.sync();

module.exports = User;