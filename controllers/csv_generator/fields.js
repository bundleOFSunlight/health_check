const qp = require(`@flexsolver/flexqp2`)

async function writeCSV() {
    const data = await qp.select(`select id, health, readiness, instance, ping_timestamp from health_check where is_available`)
    const fields = [
        {
            label: 'Id',
            value: `id`,
        },
        {
            label: 'Health',
            value: `health`,
        },
        {
            label: 'Readiness',
            value: `readiness`,
        },
        {
            label: 'Instance',
            value: `instance`,
        },
        {
            label: 'Ping_Timestamp',
            value: `ping_timestamp`,
        },
    ]
    return { data, fields }
}

module.exports = {
    writeCSV: writeCSV
}