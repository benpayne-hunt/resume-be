import Skill from "../models/skill";

export const allSkills = async () => {
  try {
    return await Skill.find({});
  } catch (error: any) {
    throw error;
  }
};

export const findSkill = async (name: string) => {
  try {
    return await Skill.findOne({ name: name });
  } catch (error: any) {
    throw error;
  }
};
