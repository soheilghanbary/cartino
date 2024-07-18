import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/ui/button';
import { EyeIcon, ShoppingCart } from 'lucide-react';

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
        <div key={i} className="rounded-md border bg-card p-4 shadow-sm">
          <img
            src={p.image}
            className="mx-auto h-40 scale-90 object-contain"
            alt={p.title}
          />
          <div className="grid gap-2">
            <h2 className="line-clamp-1 font-medium text-sm">{p.title}</h2>
            <p className="font-medium text-foreground/80 text-sm tracking-wider">
              ${p.price}
            </p>
            <div className="flex items-center gap-2">
              <Button variant={'default'} className="flex-1">
                Add to Cart
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={'outline'} size={'icon'}>
                    <EyeIcon className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Product Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2.5">
                    <img
                      src={p.image}
                      className="mx-auto max-w-60 scale-90 object-contain md:h-40 lg:h-60"
                      alt={p.title}
                    />
                    <h2 className="font-bold text-xl">{p.title}</h2>
                    <p className="text-emerald-500 dark:text-emerald-400">
                      ${p.price}
                    </p>
                    <p className="text-justify text-foreground/80 text-sm/6">
                      {p.description}
                    </p>
                    <Button variant={'default'} className="flex-1">
                      <ShoppingCart className="mr-2 size-4" />
                      Add to Cart
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
