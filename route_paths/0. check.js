
module.exports = (app) => {
    app.use(`/one`, require(`../routes/0. common/1. method_one`));
    app.use(`/two`, require(`../routes/0. common/1. method_two`));
};
