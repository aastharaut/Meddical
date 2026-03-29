import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export interface ValidatedRequest<T> extends Request {
  validatedBody: T;
}

export const validate =
  (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details?.[0]?.message ?? "Validation error",
      });
    }
    (req as ValidatedRequest<any>).validatedBody = value;
    next();
  };
