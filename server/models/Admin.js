const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const AdminSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
})

AdminSchema.pre("save", async function(next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 8)
    this.password = hashedPassword

    return next()
  } catch (err) {
    next(err)
  }
})

AdminSchema.methods.validPassword = async password => {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (err) {
    return false
  }
}

module.exports = mongoose.model("Admin", AdminSchema)
