import { Router } from "express";

// Controller
import { StoryController } from "../controllers/StoryController";

// Middleware
import { validateStoryId } from "../middleware/story";

const router = Router()

router.param("id", validateStoryId);

// Routes
router.get("/stories", StoryController.getAll)
router.post("/stories/new", StoryController.new)
router.post("/stories/new/upload-img", StoryController.uploadImg)
router.get("/stories/:id", StoryController.getById)

export default router;