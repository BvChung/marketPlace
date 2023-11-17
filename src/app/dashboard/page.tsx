import { notFound } from "next/navigation";

export default async function Page() {
  // const data = await getData();
  // console.log(data);
  const data = null;

  if (!data) {
    notFound();
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      Dashboard
      <p className="text-red-700">ad</p>
    </div>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/users?limit=5&max=10");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}
