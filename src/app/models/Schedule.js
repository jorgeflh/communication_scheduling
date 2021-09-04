module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define("Schedule", {
        sendDatetime: DataTypes.DATA,
        recipient: DataTypes.STRING,
        message: DataTypes.STRING,
        transportType: DataTypes.STRING,
        wasSent: DataTypes.BOOLEAN
    });

    return Schedule;
};