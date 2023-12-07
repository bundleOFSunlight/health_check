const express = require(`express`);
const router = express.Router();
const { Parser } = require('json2csv');
const { fields } = require(`../../controllers/csv_generator/fields`);
const qp = require(`@flexsolver/flexqp2`)
const moment = require(`moment`)

router.get(`/download`, async function (req, res, next) {
    try {
        const data = await qp.select(`select id, health, readiness, instance, ping_timestamp from health_check where is_available`)
        const field = fields()
        const timeStamp = moment().format(`YYYYMMDDHHmmss`)
        const file_name = `health_check_${timeStamp}.csv`
        const json2csv = new Parser({ field });
        const csv = json2csv.parse(data);
        res.header('Content-Type', 'text/csv');
        res.attachment(file_name);
        res.send(csv);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
