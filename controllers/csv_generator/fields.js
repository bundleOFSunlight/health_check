
function fields() {
    return [
        {
            label: 'Id',
            value: 'id'
        },
        {
            label: 'Health',
            value: 'health'
        },
        {
            label: 'Readiness',
            value: 'readiness'
        },
        {
            label: 'Instance',
            value: 'instance'
        },
        {
            label: 'Ping_Timestamp',
            value: 'ping_timestamp'
        }
    ]
}

module.exports = {
    fields: fields
}