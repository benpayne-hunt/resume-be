import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import connect from "./database";
import { getSkillsSearchCodeSight } from "./domains/codeSight/controllers/skillsSearchController";
import { allSkills, findSkill } from "./domains/skills/controllers/findSkillsController";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to the database
connect();

/**
 * Ping to check if the server is up
 */
app.get("/ping", cors(corsOptions), (req: Request, res: Response) => {
  res.send({ ok: true, data: "ok" });
});

/**
 * All Skills
 */
app.get("/skills", cors(corsOptions), async (req: Request, res: Response) => {
  res.json(await allSkills());
});
/**
 * Find Skill
 */
app.post("/skill", cors(corsOptions), async (req: Request, res: Response) => {
  res.send(await findSkill(req.body.name));
});

/**
 * Code Sight Skills Search
 */
app.get("/code-sight/skills-search", cors(corsOptions), (req: Request, res: Response) => {
  res.send(getSkillsSearchCodeSight()).status(200);
});

app.listen(port, () => {
  console.log(`[server]: Dev server is running at http://localhost:${port}`);
});
