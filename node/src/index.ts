import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { getSkillsSearchCodeSight } from "./Domains/codeSight/controllers/SkillsSearchController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Routes
app.get("/", cors(corsOptions), (req: Request, res: Response) => {
  res.send({ ok: true, data: "ok" });
});

// Code Sight Routes
app.get("/code-sight/skills-search", cors(corsOptions), (req: Request, res: Response) => {
  res.send(getSkillsSearchCodeSight());
});

app.listen(port, () => {
  console.log(`[server]: Dev server is running at http://localhost:${port}`);
});
