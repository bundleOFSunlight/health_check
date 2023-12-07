const express = require(`express`);
const router = express.Router();

// NOTE: @cloudnative/health-connect, package has been deprecated. 
// I just find a random package to fullfill the requirement
const health = require('@cloudnative/health-connect');
const healthcheck = new health.HealthChecker();
const pingCheck = new health.PingCheck('facebook.com')
healthcheck.registerLivenessCheck(pingCheck)

// This method for open endpoint
router.get(`/ready`, health.ReadinessEndpoint(healthcheck));
router.get(`/live`, health.LivenessEndpoint(healthcheck));

module.exports = router;
