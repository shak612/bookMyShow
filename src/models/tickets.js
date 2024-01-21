const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');
const User = require('./users');
const Show = require('./shows');

const Ticket = sequalize.define('tickets', {
    ticket_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      indexes: [{ unique: true, fields: ['ticket_id'] }]
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  
  // Associations for foreign keys
  Ticket.belongsTo(User, { foreignKey: 'user_id' });
  Ticket.belongsTo(Show, { foreignKey: 'show_id' });
  

// Execute the sync command to run migrations 
sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Ticket table"))
  .catch((error) => console.log("Error in Ticket table", error));

module.exports = Ticket;