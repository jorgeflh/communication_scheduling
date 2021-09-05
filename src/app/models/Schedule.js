module.exports = (sequelize, DataTypes) => {
    const Schedules = sequelize.define("Schedules", {
        sendDate: DataTypes.DATE,
        sendTo: DataTypes.STRING,
        message: DataTypes.STRING,
        transportType: DataTypes.STRING,
        wasSent: DataTypes.BOOLEAN
    });

    return Schedules;
};