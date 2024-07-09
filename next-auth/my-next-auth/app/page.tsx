import { AppBar } from "./components/AppBar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/nextAuth";

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <>
      <AppBar />
      {JSON.stringify(session)}
    </>
  );
}
