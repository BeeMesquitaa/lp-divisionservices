import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
              Como Trabalhamos
              <br /> na Division Services
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
              Processo transparente e ágil. Do primeiro contato ao deploy, você
              acompanha cada etapa do desenvolvimento.
            </p>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="flex flex-col gap-y-8 mt-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <Image
                    src="/images/hiw01.svg"
                    alt="01"
                    width={1024}
                    height={1024}
                    className="w-10 lg:w-14 h-auto"
                  />
                  <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                    01
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Entendemos seu negócio <br /> e seus objetivos
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Briefing detalhado para entender suas necessidades.
                    Definimos escopo, tecnologias ideais e cronograma realista.
                    Você recebe a proposta em até 48h.
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src="/images/hiw1.svg"
                    alt="01"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src="/images/hiw2.svg"
                    alt="02"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <Image
                    src="/images/hiw02.svg"
                    alt="02"
                    width={1024}
                    height={1024}
                    className="w-10 lg:w-14 h-auto"
                  />
                  <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                    02
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Desenvolvemos em <br /> sprints ágeis
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Entregas incrementais a cada semana. Você acompanha o
                    progresso, testa funcionalidades e dá feedbacks constantes.
                    Transparência total do início ao fim.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <Image
                    src="/images/hiw03.svg"
                    alt="03"
                    width={1024}
                    height={1024}
                    className="w-10 lg:w-14 h-auto"
                  />
                  <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                    03
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Deploy e suporte <br /> para você crescer
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Seu sistema vai ao ar com infraestrutura configurada e
                    monitoramento ativo. Inclui 30 dias de suporte gratuito e
                    treinamento da equipe.
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src="/images/hiw3.svg"
                    alt="03"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default HowItWorks;
