import { Request, Response } from "express";

export class VideoController {
    async create(req: Request, res: Response) {
        const { title, url, room_id } = req.body
        
    }
}