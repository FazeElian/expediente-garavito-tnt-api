import { Request, Response } from "express";

// Model
import Story from "../models/Story";

export class StoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const stories = await Story.findAll();
            res.json(stories);
        } catch (error) {
            res.status(500).json({ error: "Error creating the story" })
        }
    }
    
    static new = async (req: Request, res: Response) => {
        try {
            const story = new Story(req.body);
            await story.save();

            res.status(201).send("Story created sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error creating the story" })
        }
    }
}