import Image from "next/image";
import { WooCommerce } from "@/lib/woocommerce";
import '../config/env';
import { Products } from "@/lib/woocommerce/type_interface";

export default async function Home() {
  const products: Products[] = await WooCommerce.store.getProducts({
    _fields: ['id', 'name', 'prices'],
    per_page: 3,
    page: 1
  }) ?? []

  //response.headers.get('x-wp-total'))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}

      {products && products.map((product) => {
        return <div key={product.id}>
          <h2>{product?.name} #{product?.id}</h2>
          <p>Rp. {product?.prices?.price}</p>
        </div>

      }
      )}
    </main>
  );
}
