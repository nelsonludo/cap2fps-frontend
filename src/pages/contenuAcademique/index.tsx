import  { useState } from "react";
import Navbar from "../../components/Navbar";

const axes = [
    {
        title: "Modules de développement professionnel",
        details: [
            "Rédaction de CV et lettres de motivation",
            "Préparation aux entretiens d’embauche",
            "Stages et immersion clinique",
            "Mise en relation avec des cliniques et hôpitaux partenaires",
            "Suivi personnalisé durant les stages",
        ],
    },
    {
        title: "Renforcement des soft-skills",
        details: [
            "Communication en milieu hospitalier",
            "Gestion du stress, empathie, leadership",
        ],
    },
    {
        title: "Ateliers pratiques",
        details: [
            "Journées d’orientation, conférences avec des professionnels du secteur",
        ],
    },
];

const contenuAcademique = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <>
        <Navbar />
        <div className="max-w-3xl mx-auto p-8 font-sans bg-[#f9fafe] rounded-xl shadow-lg ">
            <h1 className="text-center text-5xl font-bold mb-6  mt-20">
            Page Académique & Programmes
            </h1>
            <section className="mb-8">
            <h2 className="text-[#2a6bbf] text-xl font-semibold">Objectif</h2>
            <p>
                Présenter le type d’accompagnement offert, les modules ou services pédagogiques, et leur valeur ajoutée.
            </p>
            </section>
            <section className="mb-8">
            <h2 className="text-[#2a6bbf] text-xl font-semibold">Introduction</h2>
            <p>
                Nos services sont conçus pour renforcer les compétences pratiques, professionnelles et relationnelles des futurs agents de santé.
            </p>
            </section>
            <section>
            <h2 className="text-[#2a6bbf] text-xl font-semibold mb-4">Nos axes d’accompagnement</h2>
            <div>
                {axes.map((axe, idx) => (
                <div
                    key={axe.title}
                    className="mb-4 bg-white rounded-lg shadow transition-shadow overflow-hidden"
                >
                    <button
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left bg-none border-none outline-none px-4 py-4 text-base font-semibold cursor-pointer text-[#234] flex items-center justify-between"
                    aria-expanded={openIndex === idx}
                    aria-controls={`axe-details-${idx}`}
                    type="button"
                    >
                    {axe.title}
                    <span className="text-xl ml-2">
                        {openIndex === idx ? "▲" : "▼"}
                    </span>
                    </button>
                    {openIndex === idx && (
                    <ul
                        id={`axe-details-${idx}`}
                        className="px-6 pb-4 pt-0 bg-[#f3f7fb] border-t border-[#e3e8f0] m-0"
                    >
                        {axe.details.map((detail) => (
                        <li key={detail} className="my-2">
                            {detail}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                ))}
            </div>
            </section>
            <section className="mt-10 text-center">
            <button
                className="bg-gradient-to-r from-[#2a6bbf] to-[#4fc3f7] text-white border-none rounded-md px-8 py-3 text-base font-semibold cursor-pointer shadow-md transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Retour en haut
            </button>
            </section>
        </div>
        </>
    );
};

export default contenuAcademique;