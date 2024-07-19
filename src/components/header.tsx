'use client';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { CartList } from './cart-list';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-2 rounded-md border bg-card p-2.5 shadow-sm">
      <div className="flex-1">
        <Link href={'/'}>
          <h3 className="pl-2 font-bold text-lg">Cartino</h3>
        </Link>
      </div>
      <Button variant={'outline'} size={'icon'}>
        <SearchIcon className="size-4" />
      </Button>
      <CartList />
      <ModeToggle />
    </header>
  );
}
