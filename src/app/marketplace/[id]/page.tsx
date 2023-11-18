import Image from "next/image";
import { demoData } from "@/util/demoProducts";

export default function Page({ params }: { params: { id: number | string } }) {
  const product = demoData.find((product) => product.imageSrc === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex">
      <Image
        src={`/images/${params.id}`}
        alt="product"
        height={600}
        width={600}
      />
      <div className="border p-2">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
}
