import CodeBlock from "../models/codeBlock";

export const getCodeBlock = async (name: string, language: string) => {
  try {
    const codeBlock = await CodeBlock.findOne({ name, language });
    return codeBlock;
  } catch (error: any) {
    return error;
  }
};
