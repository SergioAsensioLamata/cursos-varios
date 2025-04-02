import "dotenv/config"

export default ({ config }) => ({
    ...config,
    extra: {
        weatherApiKey: process.env.API_KEY
    }
})