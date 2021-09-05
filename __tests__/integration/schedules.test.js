const { Schedules } = require('../../src/app/models');

describe("Schedule endpoints", () => {
    it('should create a schedule', async () => {
        const schedule = await Schedules.create({
            sendDate: '2021-09-05 12:28:00 -3:00',
            sendTo: 'jorgeflh@gmail.com',
            message: 'Teste de mensagem',
            transportType: 'email'
        });
    
        console.log(schedule);
    
        expect(schedule.sendTo).toBe('jorgeflh@gmail.com');
    });
})