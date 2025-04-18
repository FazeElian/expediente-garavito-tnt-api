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
        const form = formidable({
            multiples: false
        })

        try {
            form.parse(req, (err, fields, files) => {
                // console.log('Fields:', fields);
                // console.log('Files:', files);
                // console.log('Image file: ', files.image);
                // console.log("Image empty: ", imageUploaded)

                const imageUploaded = files.image

                cloudinary.uploader.upload(imageUploaded[0].filepath, { public_id: uuid() }, async function (error, result) {
                    if (error) {
                        const error = new Error("Error uploading the image")
                        return res.status(500).json({ error: error.message })
                    }

                    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
                    const author = Array.isArray(fields.author) ? fields.author[0] : fields.author;
                    const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;

                    if (result) {
                        const imageParsed = result.secure_url
                        // res.json({ image: imageParsed })
                        console.log(imageParsed)

                        const story = new Story({
                            title: title,
                            author: author,
                            content: content,
                            image: imageParsed
                        });

                        await story.save();
                        res.status(201).send("Story created sucessfully");
                    }
                })
            })
        } catch (error) {
            res.status(500).json({ error: "Error creating the story" })
        }
    }
    // static uploadImg = async (req: Request, res: Response) => {
    //     const form = formidable({
    //         multiples: false
    //     })

    //     try {
    //         form.parse(req, (error, fields, files) => {
    //             // console.log(files.image[0].filepath)
    //             cloudinary.uploader.upload(files.image[0].filepath, { public_id: uuid() }, async function (error, result) {
    //                 if (error) {
    //                     const error = new Error("Error uploading the image")
    //                     return res.status(500).json({ error: error.message })
    //                 }
    //                 if (result) {
    //                     req.story.image = result.secure_url
    //                     await req.story.save()
    //                     res.json({ image: result.secure_url })
    //                 }
    //             })
    //         })
    //     } catch (error) {
    //         res.status(500).json({ error: "Error creating the story" })
    //     }
    // }
}