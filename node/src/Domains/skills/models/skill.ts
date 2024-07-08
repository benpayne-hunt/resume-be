import mongoose from "mongoose";

export interface ISkill {
  name: String;
  experienceYears: Number;
  experienceLevel: String;
}

const Schema = mongoose.Schema;
const skillSchema = new Schema({
  name: String,
  experienceYears: Number,
  experienceLevel: String,
});

const Skill = mongoose.model<ISkill>("skills", skillSchema);

export default Skill;
