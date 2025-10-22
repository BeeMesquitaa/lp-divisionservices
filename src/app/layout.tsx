import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
          base.variable,
          heading.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
