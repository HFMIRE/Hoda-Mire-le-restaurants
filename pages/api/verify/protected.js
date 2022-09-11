import { getSession } from "next-auth/react";

export default async function protectedHandler(req, res) {
  const session = await getSession({ req });

  if (session) {
    return res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  }

  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
