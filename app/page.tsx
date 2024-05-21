import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_landing/Hero";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <Spacing size="md" />
      <Hero />
    </main>
  );
}
