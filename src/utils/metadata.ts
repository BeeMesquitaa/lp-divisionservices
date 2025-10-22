import { Metadata } from "next";

export const generateMetadata = ({
  title = `Division Services - Website`,
  description = ``,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  ...(noIndex && { robots: { index: false, follow: false } }),
});
