"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full h-16 transition-all duration-300",
        isScrolled ? "bg-[#050505]/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Wrapper className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2">
            Division Services
          </Link>
        </motion.div>

        <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-3 text-sm text-muted-foreground font-medium">
          <AnimatePresence>
            {NAV_LINKS.map((link, index) => (
              <Container key={index} animation="fadeDown" delay={0.1 * index}>
                <div className="relative">
                  <Link
                    href={link.link}
                    className="hover:text-foreground transition-all duration-500 px-1.5"
                  >
                    {link.name}
                  </Link>
                </div>
              </Container>
            ))}
          </AnimatePresence>
        </div>

        <Container animation="fadeLeft" delay={0.1}>
          <div className="flex items-center gap-x-4">
            <Link href="/contact" className="hidden lg:block">
              <Button size="sm" variant="outline">
                Entre em contato
              </Button>
            </Link>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </Container>
      </Wrapper>
    </header>
  );
};

export default Navbar;
