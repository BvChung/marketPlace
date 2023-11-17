export default function Page({ params }: { params: { id: number } }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-white">Dashboard {params.id}</p>
    </div>
  );
}
