import { mongoose } from "@typegoose/typegoose";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";

export type Context = {
  req: Request & {
    session: Session &
      Partial<SessionData> & { userId: mongoose.Types.ObjectId };
  };
  res: Response;
};
