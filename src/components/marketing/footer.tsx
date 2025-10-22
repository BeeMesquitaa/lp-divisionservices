import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { PRODUCT_LINKS, RESOURCES_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 md:pb-0 w-full overflow-hidden">
      <Wrapper>
        <Container animation="scaleUp" delay={0.3}>
          <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-[#050505] via-primary/40 to-[#050505]"></div>
        </Container>

        <div className="grid gap-8 xl:grid-cols-2 xl:gap-8">
          <Container animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <div className="flex items-center gap-2">
                <span className="text-lg lg:text-xl font-medium">
                  Division Services
                </span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Dividimos complexidade. <br />
                Entregamos soluções completas.
              </p>
              <div className="mt-4 text-sm text-muted-foreground px-4 py-2 cursor-pointer rounded-full border border-border/40 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300">
                <Link href="tel:+11234567890">
                  <p>+55 (51) 98038-5019</p>
                </Link>
              </div>
            </div>
          </Container>

          <div className="grid grid-cols-2 md:place-items-end w-full">
            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Info</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {PRODUCT_LINKS.map((link, index) => (
                    <Container
                      key={index}
                      animation="fadeLeft"
                      delay={0.6 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </Container>
                  ))}
                </ul>
              </div>
            </Container>

            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Serviços</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {RESOURCES_LINKS.map((link, index) => (
                    <Container
                      key={index}
                      animation="fadeLeft"
                      delay={0.7 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </Container>
                  ))}
                </ul>
              </div>
            </Container>
          </div>
        </div>

        <Container animation="fadeUp" delay={1}>
          <div className="mt-16 mb-4 border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Division Services. Todos os direitos
              reservados.
            </p>
          </div>
        </Container>
      </Wrapper>
    </footer>
  );
};

export default Footer;
