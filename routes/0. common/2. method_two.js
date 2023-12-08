const express = require(`express`);
const router = express.Router();
const moment = require(`moment`)
const { Parser } = require('json2csv');
const { writeCSV } = require(`../../controllers/csv_generator/fields`)

router.get(`/download`, async function (req, res, next) {
    try {
        const { data, fields } = await writeCSV();
        const timeStamp = moment().format(`YYYYMMDDHHmmss`)
        const file_name = `health_check_${timeStamp}.csv`
        const json2csv = new Parser({ fields });
        const csv = json2csv.parse(data);
        res.header('Content-Type', 'text/csv');
        res.attachment(file_name);
        res.send(csv);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
