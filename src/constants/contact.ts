import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
  {
    title: "WhatsApp",
    value: "+55 (51) 98038-5019",
    icon: PhoneIcon,
  },
  {
    title: "Onde Atuamos",
    value: "Atendimento online para todo Brasil",
    icon: MapPinIcon,
  },
  {
    title: "Email",
    value: "contato@divisionservices.com.br",
    icon: MailIcon,
  },
] as const;
