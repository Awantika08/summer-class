var express = require("express");

const {
  createUserController,
  getUserController,
  loginHandleController,
  getUserListController,
  viewMyProfileController,
  viewProfileofUserController,
  updateProfileMeController,
} = require("../controller/userController");
const { validateTokenMiddleware } = require("../controller/middleware/AuthMiddleware");
const { uploadMiddleware } = require("../controller/middleware/FileHandlerMiddleware");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.json({
    message: "User Controller is working",
  });
});
router.post("/create", createUserController);
router.post("/login", loginHandleController); 
router.get("/list", validateTokenMiddleware, getUserListController);

router.put("/profile", validateTokenMiddleware,uploadMiddleware('profileImg'), updateProfileMeController);

router.get("/profile/me", validateTokenMiddleware, viewMyProfileController);
router.get(
  "/profile/:id",
  validateTokenMiddleware,
  viewProfileofUserController
);

module.exports = router;