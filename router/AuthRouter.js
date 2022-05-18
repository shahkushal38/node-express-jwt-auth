const { Router } = require("express");
const authController = require("../controllers/AuthController")
const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", () => {});
router.get("/login", authController.login_get);
router.post("/login", () => {});


module.exports = router;
