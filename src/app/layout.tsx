import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/header";



export const metadata: Metadata = {
  title: "GOAT Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
            <Header/>
            <main className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-8">
            {children}
            </main>
          </div>
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
