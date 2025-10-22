import { CheckCircle2, Sparkles } from "lucide-react";
import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8">
          <div className="flex flex-col items-start justify-center w-full">
            <Container className="w-max mx-auto">
              <h2 className="text-3xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold">
                Pronto para Tirar <br /> Seu Projeto do Papel?
              </h2>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    5% OFF no primeiro projeto
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    Orçamento em até 48h
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
            <Container className="w-max mx-auto">
              <div className="flex size-20">
                <Image
                  src="/icons/heart.svg"
                  alt="Heart"
                  width={1024}
                  height={1024}
                  className="object-cover size-full"
                />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Button size="lg" className="group">
                  <Sparkles className="size-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Solicitar Orçamento
                </Button>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    4.8/5 <br /> De 30+ Clientes Satisfeitos
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
