const { NODE_ENV, SECRET, ADMIN_ACCESS_TOKEN } = process.env

const baseVariables = {
  secret: SECRET,
  adminAccessToken: ADMIN_ACCESS_TOKEN,
}

const config = env => {
  if (env === "production") {
    return {
      ...baseVariables,
    }
  }
  return {
    ...baseVariables,
  }
}

module.exports = config(NODE_ENV)
