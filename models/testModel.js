module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Order;
}