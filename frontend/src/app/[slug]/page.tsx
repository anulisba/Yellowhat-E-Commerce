import ProductCard from "@/components/common/product_card";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="py-16 flex flex-col gap-24">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full flex justify-center items-center h-48 md:h-auto">
          <Image src="/logo.png" alt="product" width={400} height={400} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-text-grey font-extralight italic">category</p>
            <h6 className="text-4xl">Product Title</h6>
            <h6 className="font-semibold pt-2">Brand name</h6>
          </div>
          <ul className="flex flex-col ps-5 list-disc">
            <li className="text-text-grey">detail 1</li>
            <li className="text-text-grey">detail 2</li>
          </ul>
          <div className="flex flex-col gap-2">
            <span className="italic text-xl inline-flex items-end gap-2">
              price: <h6 className="font-semibold text-3xl">$199</h6>
            </span>
            <button className="w-fit text-xl font-light px-8 py-2 bg-brand-yellow rounded-md cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:mt-10 gap-5">
        <div className="flex flex-col gap-3">
          <h6 className="text-3xl font-semibold">About Product</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            obcaecati? Necessitatibus possimus fuga distinctio. Laudantium,
            veritatis! Nesciunt ducimus eaque impedit, fugit quod maiores
            reprehenderit tempore, sint vitae exercitationem ut sequi.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="text-3xl font-semibold">About Brand</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            obcaecati? Necessitatibus possimus fuga distinctio. Laudantium,
            veritatis! Nesciunt ducimus eaque impedit, fugit quod maiores
            reprehenderit tempore, sint vitae exercitationem ut sequi.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className="text-3xl font-semibold">Related Products</h6>
        <div className="flex gap-3 overflow-x-scroll no-scrollbar">
          {[1, 2, 3, 4, 5].map((value) => (
            <div key={value} className="min-w-46">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
