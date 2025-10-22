import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4">
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-8">
          {NAV_LINKS.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link href={link.link} className="text-lg font-medium w-full">
                {link.name}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link href="/contact" className="w-full mt-4">
              <Button size="lg" variant="outline" className="w-full">
                Entre em contato
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
