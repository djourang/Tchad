import Image from "next/image";
import Link from "next/link";
import Alert from "../components/Alert";

const rubriques = [
  {
    titre: "Agriculture",
    description: [
      "Environnement",
      "Ressources naturelles",
      "Forêts",
      "Santé animale",
    ],
    image: "/icones/icone_agriculture_tchad.svg",
    lien: "/agriculture",
  },
  {
    titre: "Culture",
    description: ["Musées", "Livres", "Œuvres d’art", "Médias"],
    image: "/icones/icone_culture_tchad.svg",
    lien: "/culture",
  },
  {
    titre: "Entreprises",
    description: [
      "Créer une entreprise",
      "Gérer une entreprise",
      "Consulter une entreprise",
    ],
    image: "/icones/icone_entreprise_tchad.svg",
    lien: "/entreprises",
  },
  {
    titre: "Famille",
    description: ["Parentalité", "Enfance", "Aide sociale", "Proches aidants"],
    image: "/icones/icone_famille_tchad.svg",
    lien: "/famille",
  },
  {
    titre: "Finances",
    description: [
      "Impôts",
      "Conseils financiers",
      "Gestion des dettes",
      "Crédits d’impôt",
    ],
    image: "/icones/icone_taxe_impot_tchad.svg",
    lien: "/finances",
  },
  {
    titre: "Habitation",
    description: [
      "Logement",
      "Déménagement",
      "Propriété",
      "Milieu de vie sain",
    ],
    image: "/icones/icone_teritoire_cadastre_mairie_tchad.svg",
    lien: "/habitation",
  },
  {
    titre: "Immigration",
    description: [
      "Immigrer",
      "S’intégrer",
      "Travailler au Tchad",
      "Consultation experte",
    ],
    image: "/icones/icone_immigration_tchad.svg",
    lien: "/immigration",
  },
  {
    titre: "Justice",
    description: [
      "Amendes",
      "Protection légale",
      "Services de justice",
      "État civil",
    ],
    image: "/icones/icone_justice_tchad.svg",
    lien: "/justice",
  },
  {
    titre: "Sécurité",
    description: [
      "Urgences",
      "Cybersécurité",
      "Incendies",
      "Services correctionnels",
    ],
    image: "/icones/icone_urgence_cinistre_prison_tchad.svg",
    lien: "/securite",
  },
  {
    titre: "Tourisme",
    description: [
      "Loisirs",
      "Hébergement",
      "Sport",
      "Découverte du territoire",
    ],
    image: "/icones/icone_tourisme_tchad.svg",
    lien: "/tourisme",
  },
  {
    titre: "Transports",
    description: [
      "Sécurité routière",
      "Mobilité électrique",
      "Projets d’infrastructure",
    ],
    image: "/icones/icone_transport_tchad.svg",
    lien: "/transports",
  },
];
export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Alerte importante en haut */}
      <section className="mb-6">
        <Alert type="warning">
          <p>
            <strong>Grève des agents de La Poste du Tchad</strong>&nbsp;:
            informez-vous sur les mesures mises en place pour récupérer vos
            courriers ou mandats en attente. Pour en savoir plus, consultez la
            page{" "}
            <Link href="/greve-poste-tchad">Grève à La Poste du Tchad</Link>
          </p>
        </Alert>
      </section>
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Gouvernement du Tchad
        </h2>
        <p className="text-gray-700">
          Informations et services gouvernementaux
        </p>
      </section>

      <section className="mb-12">
        <form role="search" className="flex justify-center">
          <div className="flex w-full max-w-md rounded border border-gray-300 hover:border-blue-900 focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900 transition-all duration-150">
            <input
              type="search"
              placeholder="Rechercher dans Tchad.gouv.td"
              className="w-full px-4 py-2 text-sm rounded-l focus:outline-none"
              aria-label="Recherche"
              name="recherche"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 rounded-r hover:bg-blue-800 flex items-center justify-center"
              aria-label="Rechercher"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
                />
              </svg>
            </button>
          </div>
        </form>
      </section>

      <section className="mb-12">
        <h3 id="en-demande-titre" className="text-xl font-bold mb-4">
          Les plus consultés
        </h3>
        <nav aria-labelledby="en-demande-titre">
          <ul
            className="en-demande-liste flex flex-wrap gap-2 max-h-[12rem] overflow-hidden"
            style={{ alignItems: "flex-start" }}
          >
            <li>
              <Link
                href="/registre-entreprises"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Rechercher une entreprise au registre
              </Link>
            </li>
            <li>
              <Link
                href="/authentification"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Service d'authentification gouvernementale
              </Link>
            </li>
            <li>
              <Link
                href="/aide-financiere"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Aide financière aux études
              </Link>
            </li>
            <li>
              <Link
                href="/bureau-registraire"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Mon bureau au Registraire des entreprises
              </Link>
            </li>
            <li>
              <Link
                href="/guichet-premiere-ligne"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Guichet d’accès à la première ligne
              </Link>
            </li>
            <li>
              <Link
                href="/rendez-vous-medecin"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Prendre rendez-vous avec un médecin de famille
              </Link>
            </li>
            <li>
              <Link
                href="/achetons-tchadien"
                className="inline-block bg-blue-100 border border-blue-100 text-blue-900 font-semibold text-sm leading-4 px-2.5 py-2 hover:border-blue-800 transition-colors"
              >
                Achetons tchadien
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rubriques.map((r) => (
          <div
            key={r.titre}
            className="border p-6 rounded-lg hover:bg-gray-100"
          >
            {/* Titre + icône en lien */}
            <Link href={r.lien} className="flex items-center gap-4 mb-4 group">
              <Image
                src={r.image}
                alt={"icone_" + r.titre}
                width={40}
                height={40}
                className="group-hover:scale-105 transition-transform"
              />
              <h4 className="text-lg font-semibold group-hover:underline">
                {r.titre}
              </h4>
            </Link>

            {/* Détails cliquables individuellement */}
            <ul className="text-sm text-gray-800 list-disc pl-5 mb-4">
              {r.description.map((item, index) => (
                <li key={index}>
                  <Link
                    href={r.lien}
                    className="hover:text-blue-700 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Voir plus → */}
            <Link href={r.lien} className="text-sm">
              Voir plus →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
