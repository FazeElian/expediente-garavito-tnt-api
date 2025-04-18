import { Request, Response } from "express";
import formidable from "formidable";
import { v4 as uuid } from "uuid";

// Model
import Story from "../models/Story";

// Cloudinary config
import cloudinary from "../config/cloudinary";

export class StoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const stories = await Story.findAll();
            res.json(stories);
        } catch (error) {
            res.status(500).json({ error: "Error creating the story" })
        }
    }

    static getById = async (req: Request, res: Response) => {
        const { id } = req.params
        const story = await Story.findByPk(id)

        res.json(story)
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
    static uploadImg = async (req: Request, res: Response) => {
        const form = formidable({
            multiples: false
        })

        try {
            form.parse(req, (error, fields, files) => {
                console.log(files.image[0].filepath)
                cloudinary.uploader.upload(files.image[0].filepath, { public_id: uuid() }, async function (error, result) {
                    if (error) {
                        res.status(500).json({ error: "Error uploading the image" })
                    }
                    if (result) {
                        console.log(result.url)
                    }
                })
            })
        } catch (error) {
            res.status(500).json({ error: "Error creating the story" })
        }
    }
}