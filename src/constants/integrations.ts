export type Service = {
  name: string;
  description: string;
  icon: string;
  category: "desenvolvimento" | "recursos" | "suporte" | "all";
};

export const INTEGRATION_CATEGORIES = [
  {
    label: "Todos os Serviços",
    value: "all",
  },
  {
    label: "Desenvolvimento",
    value: "desenvolvimento",
  },
  {
    label: "Recursos Inclusos",
    value: "recursos",
  },
  {
    label: "Suporte e Manutenção",
    value: "suporte",
  },
] as const;

export const INTEGRATIONS: Service[] = [
  // DESENVOLVIMENTO
  {
    name: "Landing Pages",
    description:
      "Páginas de conversão otimizadas para capturar leads e aumentar suas vendas.",
    icon: "/icons/cursor.svg",
    category: "desenvolvimento",
  },
  {
    name: "Sites Institucionais",
    description:
      "Site completo para sua empresa com design profissional e navegação intuitiva.",
    icon: "/icons/computer.svg",
    category: "desenvolvimento",
  },
  {
    name: "E-commerce",
    description:
      "Loja virtual completa com carrinho, checkout e gestão de produtos.",
    icon: "/icons/pie.svg",
    category: "desenvolvimento",
  },
  {
    name: "Sistemas Customizados",
    description:
      "Plataformas sob medida: CRMs, dashboards, portais e sistemas de gestão.",
    icon: "/icons/crown.svg",
    category: "desenvolvimento",
  },

  // RECURSOS
  {
    name: "Design Responsivo",
    description:
      "Todos os projetos funcionam perfeitamente em celular, tablet e desktop.",
    icon: "/icons/new.svg",
    category: "recursos",
  },
  {
    name: "Painel Administrativo",
    description:
      "Gerencie conteúdo, produtos e usuários sem precisar de programador.",
    icon: "/icons/label.svg",
    category: "recursos",
  },
  {
    name: "SEO Otimizado",
    description:
      "Estrutura preparada para aparecer bem no Google e outros buscadores.",
    icon: "/icons/stars.svg",
    category: "recursos",
  },
  {
    name: "Integrações",
    description:
      "Conectamos com pagamentos, email marketing, CRMs e outras ferramentas.",
    icon: "/icons/heart.svg",
    category: "recursos",
  },
  {
    name: "Performance Rápida",
    description:
      "Sites otimizados que carregam em segundos, melhorando a experiência do usuário.",
    icon: "/icons/clock.svg",
    category: "recursos",
  },
  {
    name: "Segurança SSL",
    description:
      "Certificado de segurança incluído para proteger dados dos seus clientes.",
    icon: "/icons/crown.svg",
    category: "recursos",
  },

  // SUPORTE
  {
    name: "Suporte 30 Dias",
    description:
      "Todo projeto inclui um mês de suporte gratuito após o lançamento.",
    icon: "/icons/heart.svg",
    category: "suporte",
  },
  {
    name: "Manutenção Mensal",
    description:
      "Pacotes de manutenção para manter seu site sempre atualizado e seguro.",
    icon: "/icons/computer.svg",
    category: "suporte",
  },
];
