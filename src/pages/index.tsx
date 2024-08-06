import Image from "next/image";
import Hero from "../components/Hero";
import ThingsContainer from "../components/ThingsContainer";
import Nav from "../components/Nav";
import WritingContainer from "../components/WritingContainer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <ThingsContainer />
      <WritingContainer />
    </main>
  );
}
