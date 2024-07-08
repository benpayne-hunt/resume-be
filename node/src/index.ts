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
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.get("/", cors(corsOptions), (response: Response) => {
  response.send({ ok: true, data: "Express + TypeScript Server" });
});

// Code Sight Routes
app.get("/code-sight/skills-search", cors(corsOptions), (request: Request, response: Response) => {
  response.send(getSkillsSearchCodeSight());
});

app.listen(port, () => {
  console.log(`[server]: Dev server is running at http://localhost:${port}`);
});
