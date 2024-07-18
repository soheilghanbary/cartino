import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCartStore } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/ui/button';
import { MinusIcon, PlusIcon, ShoppingCart, TrashIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { type PropsWithChildren, useMemo, useState } from 'react';

const CartLength = () => {
  const carts = useCartStore((state) => state.carts);
  return (
    <>
      {carts.length ? (
        <span className="-right-2 -top-2 absolute flex h-5 w-5 items-center justify-center rounded-full border bg-primary p-1.5 text-center text-primary-foreground text-xs">
          {carts.length}
        </span>
      ) : null}
    </>
  );
};

const CartLengthClient = dynamic(() => Promise.resolve(CartLength), {
  ssr: false,
});

const CartPayment = () => {
  const clear = useCartStore((state) => state.clear);
  const carts = useCartStore((state) => state.carts);
  const totalPrice = useMemo(
    () => carts.reduce((total, cart) => total + cart.price * cart.quantity, 0),
    [carts],
  );

  if (!carts.length) return;

  return (
    <div className="space-y-4">
      <div className="mt-4 text-right">
        <strong>قیمت نهایی:</strong> {totalPrice.toFixed()} ریال
      </div>
      <button
        type="button"
        onClick={clear}
        className="text-rose-400 text-xs hover:underline"
      >
        حذف همه
      </button>
      <Link href={'/payment'} className={cn('w-full', buttonVariants())}>
        پرداخت کنید
      </Link>
    </div>
  );
};

export function CartList() {
  const carts = useCartStore((state) => state.carts);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} className="relative">
          <ShoppingCart className="h-4 w-4" />
          <CartLengthClient />
        </Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>Cart List</SheetTitle>
        </SheetHeader>
        <section className="flex h-full flex-1 flex-col justify-between pb-4">
          <section className="mt-8 h-[90vh] space-y-4 overflow-y-scroll">
            {carts.map((cart, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-4">
                  <CartImage image={cart.image} alt={cart.title} />
                  <CartBody>
                    <CartTitle title={cart.title} />
                    <CartPrice priec={cart.price} />
                  </CartBody>
                </div>
                <CartActions {...cart} />
              </div>
            ))}
          </section>
          <CartPayment />
        </section>
      </SheetContent>
    </Sheet>
  );
}

export const CartImage = ({ image = '', alt = '' }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-xl">
      <Image
        fill
        alt={alt}
        src={image}
        sizes="(min-width: 1520px) 230px, (min-width: 1280px) calc(10.91vw + 66px), (min-width: 1040px) calc(25vw - 50px), (min-width: 780px) calc(33.33vw - 50px), calc(50vw - 50px)"
        loading="lazy"
        className={cn(
          'h-auto rounded-[inherit] object-cover duration-300 ease-in-out',
          loading ? 'blur-xl' : 'blur-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

const CartTitle = ({ title = '' }) => (
  <h2 className="line-clamp-1 text-base">{title}</h2>
);

const CartPrice = ({ priec = 0 }) => (
  <p className="text-muted-foreground text-sm">${priec.toFixed()}</p>
);

const CartBody = ({ children }: PropsWithChildren) => (
  <div className="flex-1 space-y-2">{children}</div>
);

const CartActions = (product: Product) => {
  const { carts, removeCart, updateQuantity } = useCartStore();
  const isAddedtoCart = carts.find((cart) => cart.id === product.id);
  return (
    <div className="flex items-center justify-between gap-4">
      {isAddedtoCart?.quantity && (
        <div className="flex items-center gap-4">
          <Button
            size={'icon'}
            variant={'outline'}
            onClick={() =>
              updateQuantity(product.id, isAddedtoCart.quantity + 1)
            }
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
          {isAddedtoCart?.quantity}
          <Button
            disabled={isAddedtoCart.quantity === 1}
            size={'icon'}
            variant={'outline'}
            onClick={() =>
              updateQuantity(product.id, isAddedtoCart.quantity - 1)
            }
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
      <Button
        size={'icon'}
        variant={'secondary'}
        onClick={() => removeCart(product.id)}
      >
        <TrashIcon className="h-4 w-4 text-rose-500" />
      </Button>
    </div>
  );
};
