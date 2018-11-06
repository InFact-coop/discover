require("env2")("./.env")
const {
  NODE_ENV,
  DEVELOPMENT_DATABASE,
  PRODUCTION_DATABASE,
  SECRET,
  ADMIN_ACCESS_TOKEN,
} = process.env

const config = env => {
  if (env === "production") {
    return {
      database: PRODUCTION_DATABASE,
      secret: SECRET,
    }
  }
  return {
    database: DEVELOPMENT_DATABASE,
    secret: SECRET,
    adminAccessToken: ADMIN_ACCESS_TOKEN,
  }
}
module.exports = config(NODE_ENV)
