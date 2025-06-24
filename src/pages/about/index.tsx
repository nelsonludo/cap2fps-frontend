import React from 'react';
import Navbar from '../../components/Navbar';

// Team data
const team = [
    {
        name: 'Manuella Money',
        role: 'Co-fondatrice & Directrice',
        img: 'https://via.placeholder.com/120x120?text=Manuella',
    },
    {
        name: 'Seh Degonzag',
        role: 'Co-fondateur & Directeur',
        img: 'https://via.placeholder.com/120x120?text=Seh',
    },
];

// Values data
const values = [
    { title: 'Professionnalisme', desc: 'Exiger l’excellence dans chaque intervention' },
    { title: 'Mentorat', desc: 'Guider avec bienveillance et expertise' },
    { title: 'Excellence', desc: 'Toujours viser le plus haut niveau de qualité' },
    { title: 'Empathie', desc: 'Favoriser une approche humaine du soin' },
    { title: 'Équité', desc: 'Offrir des chances égales à tous les bénéficiaires' },
    { title: 'Responsabilité', desc: 'Respecter nos engagements envers nos étudiants et partenaires' },
];

// --- Components ---

const Banner: React.FC = () => (
    <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2  mt-20">
            CABINET D’ACCOMPAGNEMENT POST-FORMATION<br />DES FUTURS PROFESSIONNELS DE SANTÉ
        </h1>
        <p className="text-lg opacity-90">Nkoabang, Cameroun</p>
    </section>
);

const Presentation: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-blue-600 mb-2 text-2xl font-semibold">🩺 Qui sommes-nous ?</h2>
        <p>
            Le <b>CABINET D’ACCOMPAGNEMENT POST-FORMATION DES FUTURS PROFESSIONNELS DE SANTÉ</b>, situé à <b>Nkoabang, Cameroun</b>, est une structure dédiée à <b>l’accompagnement des diplômés du secteur de la santé</b> dans leur transition vers le monde professionnel.
        </p>
        <p className="mt-2">
            Nous offrons un encadrement post-formation personnalisé, axé sur le <b>mentorat</b>, les <b>stages pratiques</b>, et l’<b>intégration professionnelle</b>, afin de préparer les jeunes diplômés à réussir dans les hôpitaux, cliniques et autres établissements de santé.
        </p>
    </section>
);

const MissionVision: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[260px] bg-teal-50 rounded-lg p-6">
            <h3 className="text-teal-700 text-xl font-semibold mb-2">🎯 Notre mission</h3>
            <p>
                <b>Accompagner les futurs professionnels de santé</b> après leur formation initiale, en leur fournissant les outils, l’orientation et les opportunités nécessaires pour s’intégrer efficacement dans le monde du travail.
            </p>
        </div>
        <div className="flex-1 min-w-[260px] bg-blue-50 rounded-lg p-6">
            <h3 className="text-blue-600 text-xl font-semibold mb-2">🌍 Notre vision</h3>
            <p>
                Nous aspirons à un Cameroun où <b>chaque diplômé du secteur de la santé</b> bénéficie d’un accompagnement post-formation de qualité, lui permettant de devenir un professionnel compétent, confiant et engagé dans l’amélioration du système de santé.
            </p>
        </div>
    </section>
);

const History: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
        <h3 className="text-purple-600 text-xl font-semibold mb-2">🕰️ Notre histoire</h3>
        <p>
            Fondé en <b>2024</b> par <b>Manuella Money</b> et <b>Seh Degonzag</b>, le Cabinet est né d’un constat : de nombreux jeunes diplômés en santé, bien que formés, rencontrent des difficultés à accéder à des expériences pratiques et à entrer sur le marché du travail.
        </p>
        <p className="mt-2">
            Face à cette réalité, les fondateurs ont voulu créer un espace structuré, professionnel et bienveillant pour <b>réduire l’écart entre la formation académique et la réalité professionnelle</b>.
        </p>
    </section>
);

const TeamSection: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-gray-50 rounded-xl shadow-md p-8">
        <h3 className="text-pink-600 text-xl font-semibold mb-2">👩‍⚕️ Notre équipe dirigeante</h3>
        <div className="flex gap-8 flex-wrap my-6">
            {team.map(member => (
                <div key={member.name} className="text-center flex-1">
                    <img src={member.img} alt={member.name} className="rounded-full w-30 h-30 object-cover mb-2 border-4 border-gray-200 mx-auto" />
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-gray-500 text-sm">{member.role}</div>
                </div>
            ))}
        </div>
        <ul className="list-disc pl-5 mb-2 text-base">
            <li>Une écoute active des besoins des jeunes diplômés</li>
            <li>Un engagement pour la <b>qualité de l’accompagnement</b></li>
            <li>L’intégration de compétences techniques et humaines</li>
            <li>Une <b>implication directe</b> dans la mise en œuvre des programmes</li>
        </ul>
        <p>
            Ils se distinguent par leur volonté de former des soignants <b>compétents, humains et préparés aux défis du terrain</b>.
        </p>
    </section>
);

const ValuesSection: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
        <h3 className="text-green-600 text-xl font-semibold mb-4">💡 Nos valeurs fondamentales</h3>
        <div className="flex flex-wrap gap-6">
            {values.map(val => (
                <div key={val.title} className="flex-1 min-w-[200px] bg-green-50 rounded-lg p-4 mb-3">
                    <b>{val.title}</b>
                    <div className="text-sm text-gray-600">{val.desc}</div>
                </div>
            ))}
        </div>
    </section>
);

const ImpactSection: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-gray-50 rounded-xl shadow-md p-8">
        <h3 className="text-orange-500 text-xl font-semibold mb-2">📈 Notre impact</h3>
        <p>
            Depuis sa création, le Cabinet a accompagné <b>de nombreux diplômés</b> vers des <b>stages, expériences pratiques et premières opportunités professionnelles</b>, contribuant ainsi à leur développement et à leur intégration dans le système de santé.
        </p>
        <div className="flex gap-8 mt-6 justify-center">
            <ImpactCounter label="Diplômés accompagnés" value={120} />
            <ImpactCounter label="Stages obtenus" value={45} />
            <ImpactCounter label="Partenaires" value={12} />
        </div>
    </section>
);

const SuggestionsSection: React.FC = () => (
    <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md p-8">
        <h3 className="text-blue-700 text-xl font-semibold mb-4">➕ Informations complémentaires</h3>
        <div className="flex flex-wrap gap-8">
            {/* Photos des fondateurs et encadreurs */}
            <div className="flex-1 min-w-[220px]">
                <h4 className="mb-2 font-semibold">📸 Fondateurs & Encadreurs</h4>
                <div className="flex gap-4">
                    <div className="text-center">
                        <img src="https://via.placeholder.com/90x90?text=Manuella" alt="Manuella Money" className="rounded-full border-2 border-gray-200 w-[90px] h-[90px] object-cover mx-auto" />
                        <div className="font-semibold text-sm">Manuella Money</div>
                        <div className="text-gray-500 text-xs">Directrice</div>
                    </div>
                    <div className="text-center">
                        <img src="https://via.placeholder.com/90x90?text=Seh" alt="Seh Degonzag" className="rounded-full border-2 border-gray-200 w-[90px] h-[90px] object-cover mx-auto" />
                        <div className="font-semibold text-sm">Seh Degonzag</div>
                        <div className="text-gray-500 text-xs">Directeur</div>
                    </div>
                </div>
            </div>
            {/* Témoignages d’anciens bénéficiaires */}
            <div className="flex-1 min-w-[220px]">
                <h4 className="mb-2 font-semibold">🗣️ Témoignages</h4>
                <Testimonial />
            </div>
            {/* Liste de cliniques ou hôpitaux partenaires */}
            <div className="flex-1 min-w-[220px]">
                <h4 className="mb-2 font-semibold">🤝 Partenaires</h4>
                <ul className="pl-4 text-base list-disc">
                    <li>Clinique Saint Luc, Nkoabang</li>
                    <li>Hôpital de District de Nkoabang</li>
                    <li>Centre Médical la Grâce</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-8">
            {/* Accréditations ou affiliations */}
            <div className="flex-1 min-w-[220px]">
                <h4 className="mb-2 font-semibold">📜 Accréditations</h4>
                <ul className="pl-4 text-base list-disc">
                    <li>Reconnu par le Ministère de la Santé Publique du Cameroun</li>
                    <li>Membre de l’Association Camerounaise des Professionnels de Santé</li>
                </ul>
            </div>
            {/* Mot du fondateur */}
            <div className="flex-2 min-w-[300px] flex-1">
                <h4 className="mb-2 font-semibold">✍️ Mot du fondateur</h4>
                <blockquote className="italic text-blue-700 bg-blue-50 rounded-lg p-4 m-0">
                    « Nous avons créé ce cabinet pour offrir aux jeunes diplômés un tremplin vers la réussite professionnelle. Notre engagement est de vous accompagner avec humanité, rigueur et passion. »
                    <div className="font-semibold mt-1 text-sm">— Manuella Money & Seh Degonzag</div>
                </blockquote>
            </div>
            {/* Brochure téléchargeable */}
            <div className="flex-1 min-w-[220px]">
                <h4 className="mb-2 font-semibold">📄 Brochure PDF</h4>
                <a
                    href="/brochure-cap2fps.pdf"
                    download
                    className="text-blue-600 underline font-medium text-base"
                >
                    Télécharger la brochure
                </a>
            </div>
        </div>
    </section>
);

// Dynamic animated counter
const ImpactCounter: React.FC<{ label: string; value: number }> = ({ label, value }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;
        let incrementTime = 20;
        let timer = setInterval(() => {
            start += Math.ceil(end / 50);
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [value]);
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">{count}+</div>
            <div className="text-gray-600 text-base">{label}</div>
        </div>
    );
};

// Dynamic testimonial (placeholder)
const Testimonial: React.FC = () => {
    const testimonials = [
        {
            name: 'Aline N.',
            text: 'Grâce au Cabinet, j’ai pu décrocher mon premier stage en clinique. Un accompagnement humain et professionnel !',
        },
        {
            name: 'Jean-Paul T.',
            text: 'Le mentorat m’a permis de mieux comprendre les attentes du terrain. Merci à toute l’équipe !',
        },
    ];
    const [idx, setIdx] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);
    return (
        <div className="bg-teal-50 rounded-lg p-4 my-2 italic text-teal-700 max-w-xs">
            “{testimonials[idx].text}”
            <div className="font-semibold mt-1 text-sm">— {testimonials[idx].name}</div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="font-sans bg-gray-50 min-h-screen">
            <Banner />
            <Presentation />
            <MissionVision />
            <History />
            <TeamSection />
            <ValuesSection />
            <ImpactSection />
            <SuggestionsSection />
        </div>
        </>
    );
};

export default About;
