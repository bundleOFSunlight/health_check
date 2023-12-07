const { checkGitLabHealth, checkGitLabStatus, checkGitLabInstance } = require(`./gitlab_health_helper`);
const qp = require(`@flexsolver/flexqp2`)
const moment = require(`moment`)

const checkApplicationHealth = async () => {
    let con;
    try {
        const health = JSON.stringify(await checkGitLabHealth());
        const readiness = JSON.stringify(await checkGitLabStatus());
        const instance = JSON.stringify(await checkGitLabInstance());

        const health_check_dao = {
            health: health,
            readiness: readiness,
            instance: instance,
            ping_timestamp: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        con = await qp.connectWithTbegin();
        await qp.insert(`health_check`, health_check_dao, con);
        await qp.commitAndCloseConnection(con);
    } catch (error) {
        if (con) await qp.rollbackAndCloseConnection(con);
        console.error(`Error: ` + error.message)
    }
};

module.exports = {
    checkApplicationHealth: checkApplicationHealth
}