const express = require("express");

const router = express.Router();

//importing controllers
const {
  createProject,
  getImportantPersonalProject,
  getImportantProductAnimation,
  getImportantProductVisualization,
  getProjects,
  deleteProject
} = require("../controllers/Project");
const { authUser } = require("../middleware/authUserMiddleware");
const uploadFile = require("../middleware/uploadFileMiddleware");

router.post(
  "/createProject",
  authUser,
  uploadFile.fields([
    { name: "mainFile", maxCount: 1 },
    { name: "gallery", maxCount: 8 },
  ]),
  createProject
);
router.get("/getPersonalProjects", getImportantPersonalProject);
router.get("/getProductAnimations", getImportantProductAnimation);
router.get("/getProductVisualizations", getImportantProductVisualization);
router.get("/getProjects", getProjects);
router.delete("/deleteProject/:id", authUser, deleteProject);

module.exports = router;
