var Sequelize = require("Sequelize");

module.exports = function(sequelize, dataTypes){
    var Customer = Sequelize.define("Customer", {
        customer_name: DataTypes.STRING,
        classMethods:{
            associate: function(models){
                Customer.belongsTo(models.Burger,{
                    foreignKey:{
                        allowNull: false
                    }   
                })
            }
        }

    })

    Customer.sync();
    return Customer;
}
