import { Router } from "express";

// Controller
import { StoryController } from "../controllers/storyController";

const router = Router()

// Routes
router.get("/stories", StoryController.getAll)
router.get("/stories/new", StoryController.new)

export default router;