// config.js
require('dotenv-flow').config();
module.exports = {
    PORT: process.env.PORT,
    azureOpenAIBaseUrl: process.env.azureOpenAIBaseUrl,
    azureOpenAIDeploymet: process.env.azureOpenAIDeploymet,
    azureOpenAIAPIVersion: process.env.azureOpenAIAPIVersion,
    azureOpenAIKey: process.env.azureOpenAIKey,
    max_tokens: process.env.max_tokens,
    azureOpenAIModelVersion: process.env.azureOpenAIModelVersion
};