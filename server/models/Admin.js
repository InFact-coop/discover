const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const AdminSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
})

AdminSchema.pre("save", function(next) {
  bcrypt
    .hash(this.password, 8)
    .then(hashedPassword => {
      this.password = hashedPassword

      return next()
    })
    .catch(err => {
      next(err)
    })
})

AdminSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("Admin", AdminSchema)
