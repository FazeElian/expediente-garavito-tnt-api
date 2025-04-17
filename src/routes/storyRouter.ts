import { Router } from "express";

// Controller
import { StoryController } from "../controllers/StoryController";

const router = Router()

// Routes
router.get("/stories", StoryController.getAll)
router.post("/stories/new", StoryController.new)

export default router;