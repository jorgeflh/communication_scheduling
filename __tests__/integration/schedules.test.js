const request = require("supertest");

const app = require("../../src/app");
const { Schedules } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe("Schedule endpoints", () => {
    beforeEach(async () => {
        await truncate();
    })

    it('should create a schedule', async () => {
        const schedule = await Schedules.create({
            sendDate: '2021-09-05 12:28:00 -3:00',
            sendTo: 'jorgeflh@gmail.com',
            message: 'Teste de mensagem',
            transportType: 'email'
        });
    
        const response = await request(app)
            .post("/Schedules")
            .send({schedule});
    
        expect(response.status).toBe(200);
    });
})