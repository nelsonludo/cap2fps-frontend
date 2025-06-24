import React, { useState } from "react";
import Navbar from "../../components/Navbar";

// Example data (could be fetched from an API)
const initialNews = [
    {
        type: "announcement",
        title: "📢 Ouverture de la prochaine cohorte : Août 2025",
        content: "Rejoignez notre prochaine cohorte pour bénéficier d’un accompagnement personnalisé.",
        date: "2025-06-01",
    },
    {
        type: "announcement",
        title: "🏥 Nouveaux partenariats signés avec des centres de santé à Yaoundé",
        content: "Nous avons signé des partenariats avec 3 nouveaux centres pour élargir nos opportunités.",
        date: "2025-05-20",
    },
    {
        type: "announcement",
        title: "💡 Lancement d’une plateforme d’e-learning",
        content: "Découvrez notre nouvelle plateforme pour suivre des cours en ligne à votre rythme.",
        date: "2025-04-15",
    },
];

const initialUpcomingEvents = [
    {
        title: "Session de coaching en groupe",
        date: "2025-07-15",
        description: "Participez à une session de coaching pour booster votre carrière.",
        location: "En ligne",
        registrationLink: "#",
    },
    {
        title: 'Conférence "Entrer dans la vie active en santé"',
        date: "2025-08-05",
        description: "Des experts partagent leurs conseils pour réussir dans le secteur de la santé.",
        location: "Université de Yaoundé",
        registrationLink: "#",
    },
    {
        title: "Webinaire : Les métiers de la santé en 2030",
        date: "2025-09-10",
        description: "Anticipez les évolutions du secteur avec nos intervenants.",
        location: "En ligne",
        registrationLink: "#",
    },
];

const initialPastEvents = [
    {
        title: "Atelier CV & entretiens",
        date: "2025-04-10",
        description: "Améliorez votre CV et préparez-vous aux entretiens.",
        location: "En ligne",
    },
    {
        title: "Visite de terrain à l’hôpital de Nkolndongo",
        date: "2025-03-22",
        description: "Découverte des métiers sur le terrain.",
        location: "Hôpital de Nkolndongo",
    },
    {
        title: "Forum des métiers de la santé",
        date: "2025-02-15",
        description: "Rencontrez des professionnels et échangez sur les opportunités.",
        location: "Centre de conférences, Yaoundé",
    },
];

const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString("fr-FR", options);
};

const EvenementsPage: React.FC = () => {
    const [news, setNews] = useState(initialNews);
    const [upcomingEvents, setUpcomingEvents] = useState(initialUpcomingEvents);
    const [pastEvents, setPastEvents] = useState(initialPastEvents);
    const [selectedNews, setSelectedNews] = useState<number | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
    const [search, setSearch] = useState("");

    // Filter events by search
    const filteredUpcoming = upcomingEvents.filter(e =>
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase())
    );
    const filteredPast = pastEvents.filter(e =>
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />
        <main className="max-w-2xl mx-auto p-8">
            <h1 className="text-5xl font-bold mb-8 mt-20">Actualités & Évènements</h1>
            <p className="mb-4">
            <strong>🎯 Objectif :</strong> Partager les dernières nouvelles, annonces, et les événements passés ou à venir.
            </p>

            <input
            type="text"
            placeholder="Rechercher un événement..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-2 mb-6 rounded border border-gray-300"
            />

            <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Annonces récentes</h2>
            <ul>
                {news.map((item, idx) => (
                <li
                    key={idx}
                    className={`mb-2 cursor-pointer rounded p-2 transition-colors ${
                    selectedNews === idx ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedNews(selectedNews === idx ? null : idx)}
                >
                    <div>
                    <strong>{item.title}</strong>
                    <span className="text-gray-500 ml-2 text-xs">
                        {formatDate(item.date)}
                    </span>
                    </div>
                    {selectedNews === idx && (
                    <div className="mt-1 text-gray-800">{item.content}</div>
                    )}
                </li>
                ))}
            </ul>
            </section>

            <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Événements à venir</h2>
            {filteredUpcoming.length === 0 && <p>Aucun événement à venir trouvé.</p>}
            <ul>
                {filteredUpcoming.map((event, idx) => (
                <li
                    key={idx}
                    className={`mb-2 cursor-pointer rounded p-2 transition-colors ${
                    selectedEvent === idx ? "bg-green-50" : ""
                    }`}
                    onClick={() => setSelectedEvent(selectedEvent === idx ? null : idx)}
                >
                    <div>
                    <strong>{event.title}</strong> : {formatDate(event.date)}
                    <span className="text-gray-500 ml-2 text-xs">
                        {event.location}
                    </span>
                    </div>
                    {selectedEvent === idx && (
                    <div className="mt-1">
                        <div className="text-gray-800">{event.description}</div>
                        <a
                        href={event.registrationLink}
                        className="inline-block mt-2 text-blue-700 underline"
                        >
                        S'inscrire
                        </a>
                    </div>
                    )}
                </li>
                ))}
            </ul>
            </section>

            <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Événements passés</h2>
            {filteredPast.length === 0 && <p>Aucun événement passé trouvé.</p>}
            <ul>
                {filteredPast.map((event, idx) => (
                <li
                    key={idx}
                    className="mb-2 bg-gray-100 rounded p-2"
                >
                    <div>
                    <strong>{event.title}</strong> – {formatDate(event.date)}
                    <span className="text-gray-500 ml-2 text-xs">
                        {event.location}
                    </span>
                    </div>
                    <div className="mt-1 text-gray-800">{event.description}</div>
                </li>
                ))}
            </ul>
            </section>
        </main>
        </>
    );
};

export default EvenementsPage;