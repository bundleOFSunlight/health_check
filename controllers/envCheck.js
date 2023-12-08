const joi = require('joi');
require('dotenv').config();

// dotenv.config({ path: path.join(__dirname, "../.env") });

const envVarsSchema = joi
    .object()
    .keys({
        ENVIRONMENT: joi.string().valid('PROD', 'DEV', 'QA').required(),
        DB_HOST: joi.string().required(),
        DB_PORT: joi.number().positive().required(),
        DB_USERNAME: joi.string().required(),
        DB_PASSWORD: joi.string().required(),
        DB_DATABASE: joi.string().required(),
        DB_LIMIT: joi.number().positive().required(),
        GITLAB_TOKEN: joi.string().required(),
        API_ENDPOINT: joi.string().required(),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: \u001b[1;31m${error.message}\u001b[0m`);
} else {
    console.log('ENV file: \u001b[1;32mOK\u001b[0m');
}

module.exports = {};
