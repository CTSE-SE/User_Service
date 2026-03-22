import { body } from "express-validator";

export const registerValidation = [
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("address").notEmpty().withMessage("Address is required")
];

export const loginValidation = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required")
];

export const updateProfileValidation = [
  body("fullName").optional().notEmpty().withMessage("Full name cannot be empty"),
  body("phone").optional().notEmpty().withMessage("Phone cannot be empty"),
  body("address").optional().notEmpty().withMessage("Address cannot be empty")
];