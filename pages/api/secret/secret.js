import { unstable_getServerSession } from "next-auth/next";
export default async (req, res) => {
  const session = await unstable_getServerSession({ req });

  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }
};
