
module.exports = (app) => {
    app.use(`/optional`, require(`../routes/0. common/1. optional_method`));
    app.use(`/report`, require(`../routes/0. common/2. method_two`));
};
