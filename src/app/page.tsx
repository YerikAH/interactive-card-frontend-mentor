import { FormCard, ViewCard } from "@/components";

export default function Home() {
  return (
    <main className="w-full grid h-full lg:grid-cols-[50%_50%]">
      <ViewCard />
      <FormCard />
    </main>
  );
}
