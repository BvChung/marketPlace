import { Product } from "@/types/productTypes";
import Image from "next/image";
import Link from "next/link";

export default function ProductDisplay({
  id,
  name,
  price,
  category,
  imageSrc,
}: Product) {
  return (
    <Link
      href={`/marketplace/${imageSrc}`}
      className="bg-offwhite h-fit w-fit rounded-md border border-gray-200 shadow-sm transition-all hover:shadow-md"
    >
      <Image
        src={`/images/${imageSrc}`}
        alt="product"
        height={325}
        width={325}
      />
      <div className="h-fit p-6">
        <div className="mb-3 w-fit rounded-sm border bg-blue-200 p-2">
          <p className="text-xs font-semibold">{category}</p>
        </div>
        <p className="mb-2 text-sm font-semibold">{name}</p>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </Link>
  );
}
