import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const OurStart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white">Nossa Origem</span>
            </div>
          </Container>
          <Container delay={0.1} className="flex grow">
            <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-center mt-4">
              Como Nasceu a Division Services
            </h2>
          </Container>
          <Container delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground text-left md:text-center mt-4 max-w-2xl">
              <span className="text-balance">
                A Division Services nasceu da vontade de fazer diferente.
                Cansados de ver projetos mal executados, prazos irreais e
                empresas perdendo oportunidades por falta de soluções digitais
                adequadas, reunimos um time que compartilha os mesmos valores:
                qualidade, transparência e compromisso com resultados.
              </span>
              <br />
              <br />
              <span className="mt-4 text-balance">
                Hoje somos especialistas em transformar ideias em projetos
                funcionais. Trabalhamos com empresas de todos os tamanhos,
                sempre com o mesmo cuidado: tratamos cada projeto como se fosse
                nosso.
              </span>
            </p>
          </Container>

          <Container delay={0.5} className="w-full max-w-4xl mx-auto">
            <div className="mt-10 w-full">
              <div className="relative flex flex-col items-center justify-center text-center h-80 w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] rounded-xl lg:rounded-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={`star-${i}`}
                      className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                        opacity: Math.random() * 0.7 + 0.3,
                      }}
                    />
                  ))}

                  {[...Array(20)].map((_, i) => (
                    <div
                      key={`star-medium-${i}`}
                      className="absolute w-[3px] h-[3px] bg-white rounded-full animate-twinkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                        opacity: Math.random() * 0.5 + 0.3,
                      }}
                    />
                  ))}

                  <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-50" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                    Pronto para começar <br className="hidden lg:block" /> seu
                    projeto?
                  </h3>
                  <Button size="md" variant="secondary" className="mt-6">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurStart;
