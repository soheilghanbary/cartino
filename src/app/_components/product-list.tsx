import { ProductCard } from './product-card';

const getProducts = async (query: string) => {
  if (query) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${query}`,
    );
    return await res.json();
  }
  const res = await fetch('https://fakestoreapi.com/products');
  return await res.json();
};

export const ProductList = async ({ query }: { query: string }) => {
  const products = (await getProducts(query || '')) as Product[];
  return (
    <section className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p, i) => (
        <ProductCard {...p} key={i} />
      ))}
    </section>
  );
};
