
const schemaValidator = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body)      
    } catch (error) {
      return res.status(400).json({mensaje: error.message})
    }
    next()
  }
}
module.exports = schemaValidator