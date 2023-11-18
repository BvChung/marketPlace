import ProductDisplay from "@/components/products/ProductDisplay";
import { demoData } from "@/util/demoProducts";

export default function Page() {
  return (
    <div className="max-w-[100rem]">
      <div className="grid h-fit w-full min-w-full gap-6 sm:min-w-[640px] sm:grid-cols-2 sm:justify-center md:min-w-[768px] md:grid-cols-3 lg:min-w-[1024px] lg:grid-cols-4">
        {demoData.map((product) => (
          <ProductDisplay key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
