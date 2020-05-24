const { environment } = require("@rails/webpacker");
const typescript = require("./loaders/typescript");
const graphql = require("./loaders/graphql");

environment.loaders.prepend("typescript", typescript);
environment.loaders.prepend("graphql", graphql);

module.exports = environment;
