const mongoose = require("mongoose")

const tommorrowDate = () => {
  const today = new Date()
  const tommorrow = new Date()
  tommorrow.setDate(today.getDate() + 1)
  return tommorrow
}

const AccessCodeSchema = mongoose.Schema({
  code: { type: String, required: true, index: { unique: true } },
  verified: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() },
  expires_at: {
    type: Date,
    default: tommorrowDate(),
  },
})

module.exports = mongoose.model("AccessCode", AccessCodeSchema)
