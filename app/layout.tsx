import "@/app/ui/global.css"
import { interFont, coming_Soon } from "./ui/fonts";


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${coming_Soon.className} antialiased`}>
        <span className={`${interFont.className} antialiased`}>Hola Next</span>
        <span>&#128151;</span>
        {children}
      </body>
    </html>
  );
}
