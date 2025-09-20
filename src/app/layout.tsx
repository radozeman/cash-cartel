import { Providers } from "@/modules/providers";
import "@/modules/ui/design-system/globals.css";
import { geistMono, geistSans } from "@/modules/ui/fonts";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
