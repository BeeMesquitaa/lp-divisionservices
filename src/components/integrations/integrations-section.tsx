"use client";

import React, { useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import {
  INTEGRATIONS,
  INTEGRATION_CATEGORIES,
  type Integration,
} from "@/constants/integrations";
import { cn } from "@/lib";
import Image from "next/image";

const IntegrationsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "desenvolvimento" | "recursos" | "suporte"
  >("all");

  const filteredIntegrations = INTEGRATIONS.filter((integration) =>
    activeCategory === "all" ? true : integration.category === activeCategory
  );

  return (
    <div className="w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex items-center gap-2 flex-wrap">
            {INTEGRATION_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10 border-border"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={index}
                className="flex flex-col p-6 rounded-2xl bg-[#0A0A0A] border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="size-12 rounded-lg bg-card flex items-center justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default IntegrationsSection;
