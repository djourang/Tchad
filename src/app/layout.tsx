import { Roboto } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Tchad.td",
  description: "Informations et services du Gouvernement du Tchad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} font-sans bg-white text-black`}>
        <div className="section-header bg-blue-900">
          <Header /> {/* Affiche le Header sur toutes les pages */}
        </div>
        <main>{children}</main>{" "}
        {/* Le contenu de chaque page sera injecté ici */}
        <div className="section-footer bg-blue-900">
          <Footer /> {/* Affiche le Footer sur toutes les pages */}
        </div>
      </body>
    </html>
  );
}
