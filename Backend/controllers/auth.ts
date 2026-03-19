import { Request, Response, NextFunction } from "express";
const authController = {
  signup: (req: Request, res: Response, next: NextFunction) => {
    res.send("from auth controller");
  },
  login: (req: Request, res: Response, next: NextFunction) => {},
};
export default authController;
