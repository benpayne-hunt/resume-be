import mongoose from "mongoose";

export interface ICodeBlock {
  name: String;
  language: String;
  code: String;
}

const Schema = mongoose.Schema;
const codeBlockSchema = new Schema({
  name: String,
  language: String,
  code: String,
});

const CodeBlock = mongoose.model<ICodeBlock>("codeBlocks", codeBlockSchema);

export default CodeBlock;
