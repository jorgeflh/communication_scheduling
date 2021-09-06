const request = require("supertest");

const { Schedules } = require("../../src/app/models");

const app = require("../../src/app");
const truncate = require('../utils/truncate');

describe("POST /schedules", () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should create a schedule and return code 201', async () => {    
        const response = await request(app)
            .post("/schedules")
            .send({
                sendDate: '2021-09-05 12:28:00 -3:00',
                sendTo: 'jorgeflh@gmail.com',
                message: 'Teste de mensagem',
                transportType: 'email'
            });
    
        expect(response.status).toBe(201);
    });

    it('should not create a schedule and return code 400', async () => {
        const response = await request(app)
            .post("/schedules")
            .send({});

        expect(response.status).toBe(400);
    });

    it('should not create a schedule and return code 500', async () => {
        const response = await request(app)
            .post("/schedules")
            .send({
                sentDate: '2021-09-05 12:28:00 -3:00',
            });

        expect(response.status).toBe(500);
    });
});

describe("GET /schedules", () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should return a schedule with code 200', async() => {
        const schedule = await Schedules.create({
            sendDate: '2021-09-05 12:28:00 -3:00',
            sendTo: 'jorgeflh@gmail.com',
            message: 'Teste de mensagem',
            transportType: 'email'
        });

        const response = await request(app)
            .get(`/schedules/${schedule.id}`)

        expect(response.status).toBe(200);
    });

    it('should not return a schedule but return code 401', async() => {
        const response = await request(app)
            .get("/schedules/999")

        expect(response.status).toBe(401);
    });
});

describe("PUT /schedules", () => {
    beforeEach(async () => {
        await truncate();
    });
    
    it('should update a schedule with code 204', async() => {
        const schedule = await Schedules.create({
            sendDate: '2021-09-05 12:28:00 -3:00',
            sendTo: 'jorgeflh@gmail.com',
            message: 'Teste de mensagem',
            transportType: 'email',
            wasSent: false
        });

        const response = await request(app)
            .put(`/schedules/${schedule.id}`)
            .send({
                sendDate: '2021-09-05 12:28:00 -3:00',
                sendTo: 'jorgeflh@gmail.com',
                message: 'Teste de mensagem',
                transportType: 'email',
                wasSent: true
            });

        expect(response.status).toBe(200);
    });
});

describe("DELETE /schedules", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should delete a schedule with code 200", async () => {
        const schedule = await Schedules.create({
            sendDate: '2021-09-05 12:28:00 -3:00',
            sendTo: 'jorgeflh@gmail.com',
            message: 'Teste de mensagem',
            transportType: 'email',
            wasSent: false
        });

        console.log(schedule);

        const response = await request(app)
            .delete(`/schedules/${schedule.id}`)
            
        expect(response.status).toBe(204);
    });
});