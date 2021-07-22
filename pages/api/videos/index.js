// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { comments } from "../../../comments";

export default comments = (req, res) => {
  res.status(200).json(comments);
};
