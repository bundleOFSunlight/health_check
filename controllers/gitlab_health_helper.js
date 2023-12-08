const axios = require(`axios`);

// In actual case I prefer Env viariable for Token and EndPoint
// Sample example reference: GitLab API Doc https://docs.gitlab.com/ee/api/
const gitlabApiToken = process.env.API_ENDPOINT
const url = process.env.API_ENDPOINT

const axiosInstance = axios.create({
    headers: {
        'Private-Token': gitlabApiToken,
    },
});

// check for health
const checkGitLabHealth = async () => {
    try {
        // I have no sample instance running, so i fake a response
        const json_data = { health: "healthy" }

        // set enpoint
        const gitlabHealthEndpoint = `${url}/application/health`;
        // const response = await axiosInstance.get(gitlabHealthEndpoint);
        const response = { data: json_data }


        if (response.data && response.data.health === 'healthy') {
            return {
                health: response.data.health,
            }
        } else {
            console.error('GitLab is not healthy. Check the GitLab instance.');
            return null
        }
    } catch (error) {
        console.error('Error checking GitLab health:', error.message);
    }
};

// Check for readiness
const checkGitLabStatus = async () => {
    try {
        // I have no sample instance running, so i fake a response
        const json_data = {
            status: "ok",
            dependencies: {
                db: true,
                redis: true
                // ... other dependencies
            },
            gitlab_pages: true
        }

        // set endpoint
        const gitlabStatusEndpoint = `${url}/application/status`;
        // const response = await axiosInstance.get(gitlabStatusEndpoint);
        const response = {
            data: json_data
        }
        if (response.data && response.data.status === 'ok') {
            return {
                readiness: response.data.status,
            }
        } else {
            console.error('GitLab is not ready. Check the GitLab instance status.');
            return null
        }
    } catch (error) {
        console.error('Error checking GitLab status:', error.message);
    }
};

// get instance
const checkGitLabInstance = async () => {
    try {
        const json_data = {
            version: "your_instance_version",
        }

        // set endpoint
        const gitlabStatusEndpoint = `${url}/version`;
        // const response = await axiosInstance.get(gitlabStatusEndpoint);
        const response = { data: json_data }

        // 
        if (response.data && response.data.version) {
            const version = response.data.version;
            return {
                instance: version
            }
        } else {
            return null
        }
    } catch (error) {
        console.error('Error fetching GitLab version:', error.message);
    }
};


module.exports = {
    checkGitLabHealth: checkGitLabHealth,
    checkGitLabStatus: checkGitLabStatus,
    checkGitLabInstance, checkGitLabInstance,
}