import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { UploadIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container delay={0.1}>
          <div className="flex flex-col lg:items-center lg:justify-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
              Solicite Seu Orçamento
            </h2>
            <p className="text-base text-muted-foreground text-left lg:text-center mt-2">
              Preencha o formulário e receba uma proposta em até 48 horas
            </p>
          </div>
        </Container>

        <Container delay={0.2}>
          <form className="max-w-3xl mx-auto w-full mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome*</Label>
                <Input
                  id="firstName"
                  placeholder="João"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome*</Label>
                <Input
                  id="lastName"
                  placeholder="Silva"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com.br"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp*</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(51) 99999-9999"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                placeholder="Nome da sua empresa (opcional)"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Tipo de Projeto*</Label>
              <Input
                id="subject"
                placeholder="Ex: Site institucional, E-commerce, Sistema customizado"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Conte-nos sobre seu projeto*</Label>
              <Textarea
                id="message"
                placeholder="Descreva sua ideia, necessidades e objetivos..."
                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Anexar arquivos (opcional)</Label>
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center gap-2 px-4 py-8 rounded-lg border border-dashed border-border/50 bg-[#0A0A0A] cursor-pointer hover:border-primary/50 transition-colors"
              >
                <UploadIcon className="size-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Arraste arquivos ou clique para fazer upload
                </span>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                />
              </label>
              <span className="text-xs text-muted-foreground">
                Briefings, referências visuais ou qualquer material que ajude a
                entender seu projeto
              </span>
            </div>

            <Button className="w-full">Enviar Solicitação</Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao enviar este formulário, você concorda com nossa política de
              privacidade. Responderemos em até 1 dia útil.
            </p>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
