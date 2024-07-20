import { FormCard, ViewCard } from "@/components";

export default function Home() {
  return (
    <main className="w-full lg:grid-cols-2 grid">
      <ViewCard />
      <FormCard />
    </main>
  );
}
