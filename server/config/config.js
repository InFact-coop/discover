require("env2")("./.env")
const {
  NODE_ENV,
  DEVELOPMENT_DATABASE,
  PRODUCTION_DATABASE,
  SECRET,
  ADMIN_ACCESS_TOKEN,
} = process.env

const baseVariables = {
  secret: SECRET,
  adminAccessToken: ADMIN_ACCESS_TOKEN,
}

const config = env => {
  if (env === "production") {
    return {
      ...baseVariables,
      database: PRODUCTION_DATABASE,
    }
  }
  return {
    ...baseVariables,
    database: DEVELOPMENT_DATABASE,
  }
}

module.exports = config(NODE_ENV)
