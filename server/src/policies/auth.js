const joi = require('joi');
exports.registerMiddleWare = (req, res, next)=>{
  const schema = joi.object({
    email: joi.string().email().required()
    .messages({
      'string.email': 'email entered is not in formal!',
      'string.required': 'email field is required!',
    }),
    password: joi
    .string()
    .min(8)
    .max(32)
    .pattern(new RegExp('[a-zA-Z0-9]$'))
    .messages({
      'string.min': 'password must be more than 8 charachters',
      'string.max': 'password must be less than 32 charachters',
      'string.pattern.base': 'password must be at least one uppercase letter, one lowercase letter and one number',
    })
  })
  const {error} = schema.validate({email: req.body.email, password: req.body.password}, {abortEarly:false});
  return error ? res.status(400).send(error.details.map(err => {return err.message})) : next();
}