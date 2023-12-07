const axios = require(`axios`);

module.exports = {
    get: async function (url, data, other_options) {
        try {
            const method = `GET`;
            const option = await option_builder(method, url, data, other_options);
            try {
                const result = await axios(option);
                return result.data;
            } catch (error) {
                // log error
                console.error(error);
                throw error;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    post: async function (url, data, other_options) {
        try {
            const method = `POST`;
            const option = await option_builder(method, url, data, other_options);
            try {
                const result = await axios(option);
                return result.data;
            } catch (error) {
                // log error
                console.error(error);
                throw error;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    put: async function (url, data, other_options) {
        try {
            const method = `PUT`;
            const option = await option_builder(method, url, data, other_options);
            try {
                const result = await axios(option);
                return result.data;
            } catch (error) {
                // log error
                console.error(error);
                throw error;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    delete: async function (url, data, other_options) {
        try {
            const method = `DELETE`;
            const option = await option_builder(method, url, data, other_options);
            try {
                const result = await axios(option);
                return result.data;
            } catch (error) {
                // log error
                console.error(error);
                throw error;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

async function option_builder(method, url, data, other_options) {
    const option = {
        ...other_options,
        method: method,
        url: url,
        data: data,
        json: true,
    };
    return option;
}
