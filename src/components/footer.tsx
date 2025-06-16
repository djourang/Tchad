// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 text-sm">
      {/* Bloc bleu (haut du footer) */}
      <div className="bg-blue-900 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ul className="space-y-2">
            <li>
              <strong>Gouvernement</strong>
            </li>
            <li>
              <Link href="#" className="link-white">
                Ministères et organismes
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Services Tchad
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Gouvernement ouvert
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Travailler au gouvernement
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Salle de nouvelles
              </Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <strong>Règlementation</strong>
            </li>
            <li>
              <Link href="#" className="link-white">
                Lois et règlements
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Signaler une vulnérabilité informatique
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Droit d’auteur et autorisation
              </Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <strong>Nous joindre</strong>
            </li>
            <li>
              <Link href="#" className="link-white">
                Renseignements généraux
              </Link>
            </li>
            <li>
              <Link href="#" className="link-white">
                Bureaux de services
              </Link>
            </li>
            <li>
              <strong>Suivez-nous</strong>
            </li>
            <li className="flex gap-4 mt-2 items-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Image
                  src="/icones/icone_facebook_bleue_tchad.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition-opacity"
                />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                aria-label="X (ancien Twitter)"
              >
                <Image
                  src="/icones/icone_x_twitter_bleue_tchad.svg"
                  alt="X"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition-opacity"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bloc clair (bas du footer) */}
      <div className="bg-gray-100 px-6 py-8 text-center text-gray-600">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#">Accessibilité</Link>
            <Link href="#">Plan du site</Link>
            <Link href="#">Accès à l'information</Link>
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#">Conditions d'utilisation</Link>
            <Link href="#">À propos</Link>
          </div>
          <Link href="/">
            <Image
              src="/icones/logo_footer_nom_drapeauf3f4f5_tchad.svg"
              alt="Logo du Gouvernement du Tchad"
              width={100}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <p>© Gouvernement du Tchad, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
