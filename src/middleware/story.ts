import { Request, Response, NextFunction } from "express";
import { param, validationResult } from 'express-validator';

// Model
import Story from '../models/Story';

declare global {
    namespace Express {
        interface Request {
            story: Story
        }
    }
}

export const validateStoryId = async (req: Request, res: Response, next: NextFunction) => {
    await param("id")
        .isInt().withMessage("ID not valid")
        .custom(value => value > 0).withMessage("ID not valid")
        .run(req);

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return;
    } else {
        next()
    }
}