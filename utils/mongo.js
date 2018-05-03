const uriFormat = require('mongodb-uri')

exports.encodeMongoURI = function encodeMongoURI (urlString) {
  if (urlString) {
    const parsed = uriFormat.parse(urlString)
    urlString = uriFormat.format(parsed)
  }
  return urlString
}
