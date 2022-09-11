import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async function jwt(req, res) {
  const token = await getToken({ req, secret });
  res.send(JSON.stringify(token, null, 2));
}
