import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";

const ServicesHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(51,133,255,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full z-10">
            <Container>
              <div className="flex items-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                <Icons.stars className="size-5" />
                <span className="text-sm text-white">
                  Division Services • Nossos Serviços
                </span>
              </div>
            </Container>

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                Soluções para Seu Negócio Digital
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base md:text-lg font-normal text-balance text-muted-foreground max-w-3xl mt-4">
                Do planejamento ao lançamento, desenvolvemos projetos sob medida
                para cada necessidade. Sites, sistemas e plataformas que
                realmente funcionam.
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="flex flex-col gap-2 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Projetos personalizados para seu negócio
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Suporte completo do início ao fim
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.3}>
              <div className="mt-6">
                <Button size="md">Solicitar Orçamento</Button>
              </div>
            </Container>
          </div>

          <Container className="w-full z-30">
            <div className="w-4/5 mx-auto lg:ml-auto mt-10 lg:mt-0">
              <Image
                src="/images/integrations.svg"
                alt="Serviços Division Services"
                priority
                width={2932}
                height={1664}
                loading="eager"
                className="w-full h-full"
              />
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesHero;
