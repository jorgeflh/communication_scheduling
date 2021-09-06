const { Schedules } = require('../models');

class SchedulesController {
    async create(req, res) {
        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        } else {
            await Schedules.create({
                sendDate: req.body.sendDate,
                sendTo: req.body.sendTo,
                message: req.body.message,
                transportType: req.body.transportType
            }).then(function(data) {
                res.status(201).send(data);
            }).catch(function(err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Schedule."
                });
            });
        }
    }

    async findOne(req, res) {
        Schedules.findOne({
            where: { id: req.params.scheduleId }
        }).then(function(schedule) {
            if (!schedule) {
                return res.status(401).send("Schedule not found");
            } else {
                res.status(200).send(schedule);
            }            
        });
    }

    async update(req, res) {
        try {
            const { scheduleId } = req.params;
            const [updated] = await Schedules.update(req.body, {
                where: { id: scheduleId }
            });
            if (updated) {
                const updatedSchedule = await Schedules.findOne({ where: { id: scheduleId } });
                return res.status(200).json({ schedule: updatedSchedule });
            }
            throw new Error('Schedule was not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async remove(req, res) {
        try {
            const { scheduleId } = req.params;
            const deleted = await Schedules.destroy({
                where: { id: scheduleId },
            });
            if (deleted) {
                return res.status(204).send("Schedule was deleted");
            }
            throw new Error("Schedule was not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
};

module.exports = new SchedulesController();