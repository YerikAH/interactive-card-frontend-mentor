import { FormCard, ViewCard } from "@/components";

export default function Home() {
  return (
    <main className="w-full lg:grid-cols-[300px_auto] grid">
      <ViewCard />
      <FormCard />
    </main>
  );
}
