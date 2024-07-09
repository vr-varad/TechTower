"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
  const session = useSession();
  return (
    <section className="flex flex-row justify-around">
      <button onClick={() => signIn()}>SignIn</button>
      <button onClick={() => signOut()}>SignOut</button>
      {session ? JSON.stringify(session) : "No user Logged in"}
    </section>
  );
}
