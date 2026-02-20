/**
 * VIBRA - Données des événements pour le modal de détail
 * Chaque clé correspond à un data-event-id dans le HTML
 *
 * Images : placez vos fichiers .webp dans assets/images/evenements/<dossier>/
 * Voir GUIDE-IMAGES.md pour le détail complet.
 */
const eventsData = {

  // ===== ÉVÉNEMENTS PROFESSIONNELS - Carrousel =====
  'pro-loreal': {
    title: "L'Oréal Paris",
    subtitle: "Institut de l'Entreprise",
    category: 'Corporate',
    description: "Mise en ambiance musicale et lumineuse pour l'Institut de l'Entreprise organisé par L'Oréal Paris. Un DJ set élégant accompagné d'un éclairage aux couleurs de la marque pour une soirée corporate inoubliable.",
    images: [
      'assets/images/evenements/pro-loreal/principale.webp',
      'assets/images/evenements/pro-loreal/galerie-1.webp',
      'assets/images/evenements/pro-loreal/galerie-2.webp',
      'assets/images/evenements/pro-loreal/galerie-3.webp',
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
      'assets/images/evenements/pro-capgemini/principale.webp',
      'assets/images/evenements/pro-capgemini/galerie-1.webp',
      'assets/images/evenements/pro-capgemini/galerie-2.webp',
      'assets/images/evenements/pro-capgemini/galerie-3.webp',
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
      'assets/images/evenements/pro-scaleway/principale.webp',
      'assets/images/evenements/pro-scaleway/galerie-1.webp',
      'assets/images/evenements/pro-scaleway/galerie-2.webp',
      'assets/images/evenements/pro-scaleway/galerie-3.webp',
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
      'assets/images/evenements/pro-notiplage/principale.webp',
      'assets/images/evenements/pro-notiplage/galerie-1.webp',
      'assets/images/evenements/pro-notiplage/galerie-2.webp',
      'assets/images/evenements/pro-notiplage/galerie-3.webp',
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
      'assets/images/evenements/pro-corporate/principale.webp',
      'assets/images/evenements/pro-corporate/galerie-1.webp',
      'assets/images/evenements/pro-corporate/galerie-2.webp',
      'assets/images/evenements/pro-corporate/galerie-3.webp',
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
      'assets/images/evenements/part-mariage/principale.webp',
      'assets/images/evenements/part-mariage/galerie-1.webp',
      'assets/images/evenements/part-mariage/galerie-2.webp',
      'assets/images/evenements/part-mariage/galerie-3.webp',
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
      'assets/images/evenements/part-anniversaire/principale.webp',
      'assets/images/evenements/part-anniversaire/galerie-1.webp',
      'assets/images/evenements/part-anniversaire/galerie-2.webp',
      'assets/images/evenements/part-anniversaire/galerie-3.webp',
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
      'assets/images/evenements/part-soiree/principale.webp',
      'assets/images/evenements/part-soiree/galerie-1.webp',
      'assets/images/evenements/part-soiree/galerie-2.webp',
      'assets/images/evenements/part-soiree/galerie-3.webp',
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
      'assets/images/evenements/part-bapteme/principale.webp',
      'assets/images/evenements/part-bapteme/galerie-1.webp',
      'assets/images/evenements/part-bapteme/galerie-2.webp',
      'assets/images/evenements/part-bapteme/galerie-3.webp',
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
      'assets/images/evenements/part-fiancailles/principale.webp',
      'assets/images/evenements/part-fiancailles/galerie-1.webp',
      'assets/images/evenements/part-fiancailles/galerie-2.webp',
      'assets/images/evenements/part-fiancailles/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/sono-1.webp',
      'assets/images/evenements/tech-sono-1/galerie-1.webp',
      'assets/images/evenements/tech-sono-1/galerie-2.webp',
      'assets/images/evenements/tech-sono-1/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/sono-2.webp',
      'assets/images/evenements/tech-sono-2/galerie-1.webp',
      'assets/images/evenements/tech-sono-2/galerie-2.webp',
      'assets/images/evenements/tech-sono-2/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/sono-3.webp',
      'assets/images/evenements/tech-sono-3/galerie-1.webp',
      'assets/images/evenements/tech-sono-3/galerie-2.webp',
      'assets/images/evenements/tech-sono-3/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/lumiere-1.webp',
      'assets/images/evenements/tech-light-1/galerie-1.webp',
      'assets/images/evenements/tech-light-1/galerie-2.webp',
      'assets/images/evenements/tech-light-1/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/lumiere-2.webp',
      'assets/images/evenements/tech-light-2/galerie-1.webp',
      'assets/images/evenements/tech-light-2/galerie-2.webp',
      'assets/images/evenements/tech-light-2/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/lumiere-3.webp',
      'assets/images/evenements/tech-light-3/galerie-1.webp',
      'assets/images/evenements/tech-light-3/galerie-2.webp',
      'assets/images/evenements/tech-light-3/galerie-3.webp',
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
      'assets/images/page-son-et-lumiere/lumiere-4.webp',
      'assets/images/evenements/tech-light-4/galerie-1.webp',
      'assets/images/evenements/tech-light-4/galerie-2.webp',
      'assets/images/evenements/tech-light-4/galerie-3.webp',
    ],
    location: 'Île-de-France',
    date: '2025'
  },

  // ===== PORTFOLIO (clients uniques) =====
  // Note : Les cartes Capgemini et L'Oréal du portfolio pointent vers
  // 'pro-capgemini' et 'pro-loreal' (pas de doublons)

  'port-1': {
    title: 'AlphaNOV',
    subtitle: 'Événement corporate',
    category: 'Corporate',
    description: "Prestation musicale et technique pour AlphaNOV. Sonorisation et ambiance pour un événement d'entreprise réussi.",
    images: [
      'assets/images/page-portfolio/carte-01.webp',
      'assets/images/evenements/port-alphanov/galerie-1.webp',
      'assets/images/evenements/port-alphanov/galerie-2.webp',
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
      'assets/images/page-portfolio/carte-04.webp',
      'assets/images/evenements/port-boss/galerie-1.webp',
      'assets/images/evenements/port-boss/galerie-2.webp',
    ],
    location: 'Paris',
    date: '2025'
  },
};

// Make available globally
window.eventsData = eventsData;
