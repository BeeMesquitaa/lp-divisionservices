import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Container from "../global/container";
import { CONTACT_CARDS } from "@/constants";

const ContactHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(51,133,255,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white">Fale Conosco</span>
            </div>
          </Container>

          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              Vamos Conversar Sobre Seu Projeto?
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              Tem uma ideia ou precisa de ajuda com seu projeto digital? Estamos
              aqui para ajudar. Entre em contato e vamos descobrir a melhor
              solução para o seu negócio.
            </p>
          </Container>

          <Container delay={0.3} className="w-full">
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full mt-10">
              {CONTACT_CARDS.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0A0A0A] border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 text-center">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactHero;
