import React from "react";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
              Construímos Soluções que Fazem <br /> Seu Negócio Crescer
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
              Transforme sua ideia em produto digital em semanas, não meses.
            </p>
          </div>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
            {FEATURES.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

const Feature = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col p-4 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl hover:border-primary transition-all duration-300 ease-out">
      <Image
        src={icon}
        alt={title}
        width={1024}
        height={1024}
        className="size-8 lg:size-10"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
};

export default Features;
