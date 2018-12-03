const JSON_SIMPLE_VALUE_KINDS = new Set([
  "numberValue",
  "stringValue",
  "boolValue",
])

function structProtoToJson(proto) {
  if (!proto || !proto.fields) {
    return {}
  }
  const json = {}
  for (const k in proto.fields) {
    json[k] = valueProtoToJson(proto.fields[k]) //eslint-disable-line
  }
  return json
}

function valueProtoToJson(proto) {
  if (!proto || !proto.kind) {
    return null
  }

  if (JSON_SIMPLE_VALUE_KINDS.has(proto.kind)) {
    return proto[proto.kind]
  } else if (proto.kind === "nullValue") {
    return null
  } else if (proto.kind === "listValue") {
    if (!proto.listValue || !proto.listValue.values) {
      console.warn("Invalid JSON list value proto: ", JSON.stringify(proto)) //eslint-disable-line
    }
    return proto.listValue.values.map(valueProtoToJson)
  } else if (proto.kind === "structValue") {
    return structProtoToJson(proto.structValue)
  }
  console.warn("Unsupported JSON value proto kind: ", proto.kind) //eslint-disable-line
  return null
}

module.exports = structProtoToJson
