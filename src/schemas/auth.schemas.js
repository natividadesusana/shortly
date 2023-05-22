import joi from "joi";

export const signInSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().required().min(6),
});

export const signUpSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().trim().required(),
  password: joi.string().required().min(6),
  confirmPassword: joi.any().valid(joi.ref('password')).required()
});
