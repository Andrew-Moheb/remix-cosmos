import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-3xl font-semibold">Welcome to Remix Test</h1>
    </div>
  );
}
