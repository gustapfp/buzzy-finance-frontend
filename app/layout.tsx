import type { Metadata } from "next";
import type { ReactNode } from "react";

import { I18nProvider } from "../components/I18nProvider";

export const metadata: Metadata = {
  title: "Buzzy Finance",
  description: "Buzzy Finance Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
