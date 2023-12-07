const schedule = require(`node-schedule`);
const { checkApplicationHealth } = require(`./health_check`);

module.exports = async () => {
    schedule.scheduleJob(`1 0 * * * *`, async () => {
        // Not use of set timeout because it may not flexible
        // Node instance == 0 for production, or else each instance will run the job once
        checkApplicationHealth()
    })
}
