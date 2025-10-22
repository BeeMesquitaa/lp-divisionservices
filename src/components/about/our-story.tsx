import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import Icons from "../global/icons";

const OurStory = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
            <Container>
              <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                <Icons.stars className="size-5" />
                <span className="text-sm text-white">Nossa História</span>
              </div>
            </Container>
            <Container delay={0.1} className="flex grow">
              <h2 className="text-3xl md:text-4xl font-semibold text-left mt-4">
                Comprometidos com o Sucesso do Seu Negócio
              </h2>
            </Container>
            <Container delay={0.3} className="mt-auto">
              <div className="flex items-center gap-4">
                <div className="size-24">
                  <Image
                    src="/icons/heart.svg"
                    alt="Heart"
                    width={1024}
                    height={1024}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-base md:text-lg text-muted-foreground text-left mt-2 max-w-2xl">
                  Somos especialistas em criar soluções digitais que fazem
                  empresas crescerem
                </p>
              </div>
            </Container>
          </div>

          <div className="flex flex-col gap-8">
            <Container className="flex items-start gap-6">
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                  01
                </span>
                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                  Experiência que Faz a Diferença
                </h4>
                <div className="mt-2 text-base text-neutral-400">
                  Anos de mercado construindo projetos dos mais variados tipos.
                  Conhecemos os desafios reais e sabemos como superá-los.
                </div>
              </div>
            </Container>
            <Container delay={0.1} className="flex items-start gap-6">
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                  02
                </span>
                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                  Sempre em Evolução
                </h4>
                <div className="mt-2 text-base text-neutral-400">
                  Acompanhamos as mudanças do mercado para oferecer sempre as
                  melhores soluções. Seu projeto é feito com o que há de mais
                  atual e eficiente.
                </div>
              </div>
            </Container>
            <Container delay={0.2} className="flex items-start gap-6">
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                  03
                </span>
                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                  Crescendo Junto com Você
                </h4>
                <div className="mt-2 text-base text-neutral-400">
                  Cada projeto entregue com sucesso nos motiva a evoluir ainda
                  mais. Nosso objetivo é ser seu parceiro de longo prazo.
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurStory;
