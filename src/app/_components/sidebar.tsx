'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';
import { ArrowRight, FilterIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Sidebar = ({
  categories,
  searchParams,
}: { categories: string[]; searchParams: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <div className="sticky top-[68px] h-fit w-56 space-y-2.5 rounded-md border bg-card p-4 shadow-sm">
        <h2 className="font-semibold">Select Category</h2>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => router.push(`?search=${c}`)}
            className={cn(
              'group flex w-full cursor-pointer items-center justify-between rounded-md border bg-muted/30 px-2.5 py-2.5 font-medium text-muted-foreground text-sm hover:text-primary',
              {
                'bg-primary text-primary-foreground hover:text-primary-foreground':
                  c === searchParams,
              },
            )}
          >
            {c}
            <ArrowRight className="invisible size-4 translate-y-2 text-muted-foreground opacity-0 duration-150 group-hover:visible group-hover:translate-y-0 group-hover:text-foreground group-hover:opacity-100" />
          </button>
        ))}
        {searchParams && (
          <Button
            onClick={() => router.push('/')}
            variant={'secondary'}
            className="w-full"
          >
            Clear Filter
          </Button>
        )}
      </div>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant={'default'}
          size={'icon'}
          className="fixed bottom-5 left-5 z-50 size-14 rounded-full"
        >
          <FilterIcon className="size-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select Category</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 p-5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                router.push(`?search=${c}`);
                setOpen(false);
              }}
              className={cn(
                'group flex w-full cursor-pointer items-center justify-between rounded-md border bg-muted/30 px-2.5 py-2.5 font-medium text-muted-foreground text-sm hover:text-primary',
                {
                  'bg-primary text-primary-foreground hover:text-primary-foreground':
                    c === searchParams,
                },
              )}
            >
              {c}
              <ArrowRight className="invisible size-4 translate-y-2 text-muted-foreground opacity-0 duration-150 group-hover:visible group-hover:translate-y-0 group-hover:text-foreground group-hover:opacity-100" />
            </button>
          ))}
          {searchParams && (
            <Button
              onClick={() => {
                router.push('/');
                setOpen(false);
              }}
              variant={'secondary'}
              className="w-full"
            >
              Clear Filter
            </Button>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
