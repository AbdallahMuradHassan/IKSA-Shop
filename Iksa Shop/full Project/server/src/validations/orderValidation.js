import { body } from "express-validator";

export const checkoutValidation = [
    body("paymentMethod")
        .isIn(["credit_card", "paypal", "cash_on_delivery"])
        .withMessage("Invalid payment method"),
    body("shippingAddress")
        .isURL()
        .withMessage("Shipping address must be a valid URL")
        .matches(/^https:\/\/(www\.)?(google\.com\/maps|openstreetmap\.org)/)
        .withMessage("Shipping address must be a Google Maps or OpenStreetMap URL"),
];
