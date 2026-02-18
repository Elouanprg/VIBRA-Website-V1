/**
 * VIBRA - Données des événements pour le modal de détail
 * Chaque clé correspond à un data-event-id dans le HTML
 */
const eventsData = {

  // ===== ÉVÉNEMENTS PROFESSIONNELS - Carrousel =====
  'pro-loreal': {
    title: "L'Oréal Paris",
    subtitle: "Institut de l'Entreprise",
    category: 'Corporate',
    description: "Mise en ambiance musicale et lumineuse pour l'Institut de l'Entreprise organisé par L'Oréal Paris. Un DJ set élégant accompagné d'un éclairage aux couleurs de la marque pour une soirée corporate inoubliable.",
    images: [
      'assets/images/services/LBGroup_InstitutEntreprise_GaelleAbrard-254 (1).webp',
      'assets/images/services/AiPulse2025_-_6356.webp',
      'assets/images/services/e5a28361-bed1-4b59-bb94-4dfe585f1a1e (1).webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'pro-capgemini': {
    title: 'Capgemini',
    subtitle: 'Séminaire - La Rotonde Stalingrad',
    category: 'Corporate',
    description: "Prestation complète son et lumière pour le séminaire annuel Capgemini à La Rotonde Stalingrad. Sonorisation de la conférence plénière et DJ set pour la soirée de gala.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
    ],
    location: 'Paris - La Rotonde Stalingrad',
    date: '2025'
  },

  'pro-scaleway': {
    title: 'Scaleway',
    subtitle: 'Événement ai-PULSE - Station F',
    category: 'Corporate',
    description: "Sonorisation et ambiance musicale pour l'événement ai-PULSE de Scaleway à Station F. Une prestation technique de pointe dans un cadre tech et innovation.",
    images: [
      'assets/images/services/AiPulse2025_-_6356.webp',
      'assets/images/services/LBGroup_InstitutEntreprise_GaelleAbrard-254 (1).webp',
      'assets/images/services/NotiPlage_FDLM_2025_VF-268 (1).webp',
    ],
    location: 'Paris - Station F',
    date: '2025'
  },

  'pro-notiplage': {
    title: 'Noti Plage',
    subtitle: 'Fête de la Musique - Paris',
    category: 'Festival',
    description: "Animation DJ et sonorisation pour la Fête de la Musique au Noti Plage. Une ambiance festive en plein air avec un sound system adapté à l'espace extérieur.",
    images: [
      'assets/images/services/NotiPlage_FDLM_2025_VF-268 (1).webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'pro-corporate': {
    title: 'Événement Corporate',
    subtitle: 'Soirée Premium',
    category: 'Corporate',
    description: "Soirée corporate premium avec DJ set, éclairage personnalisé et sonorisation haut de gamme. Une prestation complète pour un événement d'exception.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/services/LBGroup_InstitutEntreprise_GaelleAbrard-254 (1).webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  // ===== ÉVÉNEMENTS PARTICULIERS - Carrousel =====
  'part-mariage': {
    title: 'Mariage',
    subtitle: 'Château de la Vallée',
    category: 'Mariage',
    description: "Prestation DJ et ambiance musicale pour un mariage au Château de la Vallée. Du vin d'honneur à la soirée dansante, une bande-son sur mesure pour chaque moment.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
    ],
    location: 'Château de la Vallée',
    date: '2025'
  },

  'part-anniversaire': {
    title: 'Anniversaire',
    subtitle: 'Soirée privée - Paris',
    category: 'Anniversaire',
    description: "Animation musicale pour un anniversaire privé à Paris. DJ set personnalisé avec playlist sur mesure et éclairage d'ambiance.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'part-soiree': {
    title: 'Soirée Privée',
    subtitle: 'Villa Élégance',
    category: 'Soirée privée',
    description: "Soirée privée dans une villa d'exception. Ambiance lounge et deep house avec un éclairage tamisé pour une atmosphère élégante.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie.webp',
    ],
    location: 'Villa Élégance',
    date: '2025'
  },

  'part-bapteme': {
    title: 'Baptême',
    subtitle: 'Fête de famille',
    category: 'Baptême',
    description: "Animation musicale douce et festive pour un baptême en famille. Sonorisation de la cérémonie et ambiance musicale pour le cocktail.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'part-fiancailles': {
    title: 'Fiançailles',
    subtitle: 'Soirée intime',
    category: 'Fiançailles',
    description: "Ambiance musicale raffinée pour une soirée de fiançailles intime. Playlist soigneusement sélectionnée et éclairage romantique.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  // ===== PRESTATIONS TECHNIQUES =====
  'tech-sono-1': {
    title: 'Sonorisation événementielle',
    subtitle: 'Prestation DJ & sound system',
    category: 'Sonorisation',
    description: "Installation complète de sonorisation pour événement. Matériel haut de gamme dimensionné pour votre espace avec ingénieur son dédié.",
    images: [
      'assets/images/technical/photo3.webp',
      'assets/images/technical/IMG_0879.webp',
      'assets/images/technical/LBGroup_InstitutEntreprise_GaelleAbrard-254 (2).webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-sono-2': {
    title: 'Matériel de sonorisation',
    subtitle: 'Équipement professionnel',
    category: 'Sonorisation',
    description: "Découvrez notre parc matériel de sonorisation professionnelle. Enceintes, subwoofers, tables de mixage et microphones de dernière génération.",
    images: [
      'assets/images/technical/IMG_0879.webp',
      'assets/images/technical/photo3.webp',
      'assets/images/technical/LBGroup_InstitutEntreprise_GaelleAbrard-254 (2).webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-sono-3': {
    title: 'Installation sono événement',
    subtitle: 'Mise en place complète',
    category: 'Sonorisation',
    description: "Montage et installation de la sonorisation pour vos événements. Notre équipe technique s'occupe de tout, du câblage au réglage final.",
    images: [
      'assets/images/technical/LBGroup_InstitutEntreprise_GaelleAbrard-254 (2).webp',
      'assets/images/technical/photo3.webp',
      'assets/images/technical/IMG_0879.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-light-1': {
    title: 'Éclairage ambiance',
    subtitle: 'Scénographie lumineuse',
    category: 'Éclairage',
    description: "Création d'ambiances lumineuses sur mesure. Architecture lumineuse, projecteurs LED, lyres et lasers pour transformer vos espaces.",
    images: [
      'assets/images/technical/WHITE1.webp',
      'assets/images/technical/IMG_0884.webp',
      'assets/images/technical/e5a28361-bed1-4b59-bb94-4dfe585f1a1e (2).webp',
      'assets/images/technical/SAVANAQUENTIN-20250913-0943.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-light-2': {
    title: 'Projecteurs LED',
    subtitle: 'Éclairage événementiel',
    category: 'Éclairage',
    description: "Projecteurs LED dernière génération pour un éclairage puissant et économe en énergie. Couleurs personnalisables selon votre identité visuelle.",
    images: [
      'assets/images/technical/IMG_0884.webp',
      'assets/images/technical/WHITE1.webp',
      'assets/images/technical/SAVANAQUENTIN-20250913-0943.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-light-3': {
    title: 'Mise en lumière scène',
    subtitle: 'Installation technique',
    category: 'Éclairage',
    description: "Mise en lumière de scène professionnelle. Éclairage de face, contre-jour et effets spéciaux pour sublimer vos artistes et intervenants.",
    images: [
      'assets/images/technical/e5a28361-bed1-4b59-bb94-4dfe585f1a1e (2).webp',
      'assets/images/technical/IMG_0884.webp',
      'assets/images/technical/WHITE1.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  'tech-light-4': {
    title: 'Prestation lumière',
    subtitle: 'Événement complet',
    category: 'Éclairage',
    description: "Prestation lumière complète pour votre événement. De la conception à l'installation, notre équipe crée l'ambiance parfaite.",
    images: [
      'assets/images/technical/SAVANAQUENTIN-20250913-0943.webp',
      'assets/images/technical/e5a28361-bed1-4b59-bb94-4dfe585f1a1e (2).webp',
      'assets/images/technical/WHITE1.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  // ===== PORTFOLIO =====
  'port-1': {
    title: 'AlphaNOV',
    subtitle: 'Événement corporate',
    category: 'Corporate',
    description: "Prestation musicale et technique pour AlphaNOV. Sonorisation et ambiance pour un événement d'entreprise réussi.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1).webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-2': {
    title: 'Capgemini',
    subtitle: 'Soirée entreprise',
    category: 'Corporate',
    description: "Animation DJ pour la soirée annuelle Capgemini. Ambiance festive et professionnelle pour les collaborateurs.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-3': {
    title: "L'Oréal",
    subtitle: 'Lancement produit',
    category: 'Corporate',
    description: "Mise en ambiance pour le lancement d'un nouveau produit L'Oréal. Éclairage aux couleurs de la marque et DJ set premium.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-4': {
    title: 'BOSS',
    subtitle: 'Soirée de marque',
    category: 'Corporate',
    description: "Événement exclusif pour BOSS. DJ set élégant et éclairage sophistiqué pour une soirée de marque inoubliable.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-5': {
    title: 'Capgemini',
    subtitle: 'Team building',
    category: 'Corporate',
    description: "Animation musicale pour une journée team building Capgemini. Ambiance décontractée et fédératrice.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-6': {
    title: 'Capgemini',
    subtitle: 'Conférence annuelle',
    category: 'Corporate',
    description: "Sonorisation et ambiance pour la conférence annuelle Capgemini. Du plénière au cocktail, une prestation complète.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (6) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-7': {
    title: 'Capgemini',
    subtitle: 'Gala de fin d\'année',
    category: 'Corporate',
    description: "DJ set et éclairage pour le gala de fin d'année Capgemini. Ambiance festive et chaleureuse pour célébrer les succès.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (7) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (6) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-8': {
    title: 'Capgemini',
    subtitle: 'Séminaire d\'été',
    category: 'Corporate',
    description: "Animation estivale pour le séminaire Capgemini. Musique d'ambiance en journée et DJ set pour la soirée.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (8) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (7) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-9': {
    title: 'Capgemini',
    subtitle: 'Innovation Day',
    category: 'Corporate',
    description: "Sonorisation et ambiance musicale pour l'Innovation Day Capgemini. Un événement tech avec une atmosphère moderne.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (9) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (8) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-10': {
    title: 'Capgemini',
    subtitle: 'Afterwork',
    category: 'Corporate',
    description: "DJ set afterwork pour Capgemini. Ambiance détendue et festive pour clôturer la semaine en beauté.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (9) - Copie - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-11': {
    title: 'Capgemini',
    subtitle: 'Workshop créatif',
    category: 'Corporate',
    description: "Ambiance musicale pour un workshop créatif Capgemini. Musique d'inspiration pour stimuler la créativité.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-12': {
    title: 'Capgemini',
    subtitle: 'Cocktail clients',
    category: 'Corporate',
    description: "Animation musicale élégante pour un cocktail clients Capgemini. Jazz, lounge et deep house pour une atmosphère raffinée.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (2) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-13': {
    title: 'Capgemini',
    subtitle: 'Remise de prix',
    category: 'Corporate',
    description: "Sonorisation et éclairage pour la cérémonie de remise de prix Capgemini. Un moment solennel sublimé par une mise en scène impactante.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (3) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-14': {
    title: 'Capgemini',
    subtitle: 'Convention nationale',
    category: 'Corporate',
    description: "Prestation technique complète pour la convention nationale Capgemini. Son, lumière et DJ pour 500 collaborateurs.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (4) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-15': {
    title: 'Capgemini',
    subtitle: 'Soirée de Noël',
    category: 'Corporate',
    description: "Animation festive pour la soirée de Noël Capgemini. DJ set et éclairage féerique pour une fin d'année mémorable.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (5) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (6) - Copie.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  'port-16': {
    title: 'Capgemini',
    subtitle: 'Summer Party',
    category: 'Corporate',
    description: "Summer party en plein air pour Capgemini. DJ set estival, sonorisation outdoor et éclairage d'ambiance pour une fête réussie.",
    images: [
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (6) - Copie.webp',
      'assets/images/events/NotiPlage_FDLM_2025_VF-268 (1).webp',
    ],
    location: 'Paris',
    date: '2025'
  },
};

export { eventsData };
