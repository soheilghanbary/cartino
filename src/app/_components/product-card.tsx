'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCartStore } from '@/hooks/use-cart';
import { Button } from '@/ui/button';
import { EyeIcon, MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';

export function ProductCard(p: Product) {
  const { addCart, carts, updateQuantity, removeCart } = useCartStore();
  const isAddedtoCart = carts.find((cart) => cart.id === p.id);
  return (
    <div className="rounded-md border bg-card p-4 shadow-sm">
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
          {isAddedtoCart ? (
            <div className="flex flex-1 items-center gap-4">
              <Button
                size={'icon'}
                variant={'outline'}
                onClick={() => {
                  updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity + 1);
                }}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
              {isAddedtoCart.quantity}
              {isAddedtoCart.quantity === 1 ? (
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => removeCart(isAddedtoCart.id)}
                >
                  <TrashIcon className="h-4 w-4 text-rose-500" />
                </Button>
              ) : (
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() =>
                    updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity - 1)
                  }
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <Button
              onClick={() => addCart(p)}
              variant={'default'}
              className="flex-1"
            >
              Add to Cart
            </Button>
          )}
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
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
