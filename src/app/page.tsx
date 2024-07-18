import { Loader } from '@/components/loading';
import { SaveCarts } from '@/hooks/save-carts';
import { Suspense } from 'react';
import { ProductList } from './_components/product-list';
import { Sidebar } from './_components/sidebar';

const getCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return await res.json();
};

export default async ({
  searchParams,
}: { searchParams: { search: string } }) => {
  const categories = await getCategories();
  return (
    <div className="flex gap-4">
      <Sidebar searchParams={searchParams.search} categories={categories} />
      <Suspense
        fallback={
          <div className="flex w-full flex-1 items-center justify-center">
            <Loader />
          </div>
        }
        key={searchParams.search}
      >
        <ProductList query={searchParams.search} />
      </Suspense>
      <SaveCarts />
    </div>
  );
};
