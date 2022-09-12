import Hero from "../components/Hero";
import Head from "next/head";
import React from "react";
import { useSession } from "next-auth/react";
import LoginPage from "../components/ui/Loginpage";

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title data-testid="sign-in">Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session && (
          <>
            <LoginPage />
          </>
        )}
        {session && (
          <>
            <Hero />
          </>
        )}
      </main>
    </div>
  );
};
export default Home;
