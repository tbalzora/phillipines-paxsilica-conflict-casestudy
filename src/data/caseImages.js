const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const caseImages = {
  paxSilicaSummit: {
    src: asset('case-study-images/pax-silica-summit-2025.jpg'),
    alt: 'Senior officials from participating countries sit around a conference table at the inaugural Pax Silica Summit in Washington, with a Pax Silica sign behind them.',
    caption: 'Senior officials meet at the inaugural Pax Silica Summit in Washington on December 12, 2025.',
    credit: 'Seoul Ministry of Foreign Affairs photo via Yonhap News Agency',
    source: 'https://en.yna.co.kr/view/AEN20251213000900315',
    placement: 'December 2025 timeline milestone',
  },

  lecSteeringCommittee: {
    src: asset('case-study-images/lec-steering-committee-2026.jpg'),
    alt: 'Officials and partner-country representatives stand together in front of Philippine, United States, and Japanese flags at the Luzon Economic Corridor meeting.',
    caption: 'Representatives of the Philippines, United States, Japan, and partner countries at the Luzon Economic Corridor meeting in May 2026.',
    credit: 'Department of Finance photo via The Philippine Business and News',
    source: 'https://thephilbiznews.com/2026/05/14/global-allies-back-ph-luzon-economic-corridor/',
    placement: 'May 12, 2026 timeline milestone',
  },

  siteUnveiling: {
    src: asset('case-study-images/pax-silica-site-unveiling.jpg'),
    remoteSrc: 'https://reports.psaintelligence.com/content/images/size/w1200/2026/08/Pax-Silica.jpg',
    alt: 'Officials stand beside a Pax Silica site marker at New Clark City with Philippine and United States flags visible.',
    caption: 'Officials at the Pax Silica site unveiling in New Clark City.',
    credit: 'Bases Conversion and Development Authority (BCDA Group), 2026',
    source: 'https://reports.psaintelligence.com/philippines/2026/08/philippines-weekly-brief-august-4-2026/',
    placement: 'Homepage / The Promise',
  },

  aerial: {
    src: asset('case-study-images/new-clark-city-aerial.webp'),
    remoteSrc: 'https://mb.com.ph/manilabulletin/uploads/images/2026/07/30/119817.webp',
    alt: 'Aerial view of developed sections of New Clark City showing roads, buildings, and a large stadium complex.',
    caption: 'Aerial view of New Clark City, the broader development area associated with the proposed Pax Silica hub.',
    credit: 'Manila Bulletin / originating photographer',
    source: 'https://mb.com.ph/2026/07/30/pax-silica-ai-hub-seen-more-than-doubling-philippine-data-center-capacity',
    placement: 'Homepage or infrastructure context',
  },

  antiPaxSilicaLaunch: {
    src: asset('case-study-images/anti-pax-silica-group-launch.png'),
    alt: 'A crowd stands on red steps holding yellow and white signs that read Shut Pax Silica Down, Philippines Not for Sale, and Reject Pax Silica.',
    caption:
      'Participants at the launch of an anti-Pax Silica group hold signs rejecting the initiative and calling the Philippines not for sale.',
    credit: 'ABS-CBN News',
    source:
      'https://www.abs-cbn.com/news/nation/2026/8/31/anti-pax-silica-group-launched-1751',
    placement: 'Case study summary, below the New Clark City aerial',
  },

  proposedSiteSeptember: {
    src: asset('case-study-images/pax-silica-proposed-site-sept-2026.jpg'),
    remoteSrc: 'https://media.philstar.com/photos/2026/09/14/1_2026-09-14_20-18-01.jpg',
    alt: 'Aerial view of open land, roads, and scattered buildings at the proposed Pax Silica industrial-hub site in New Clark City, Capas, Tarlac.',
    caption: 'Aerial view of the proposed Pax Silica industrial-hub site in New Clark City.',
    credit: 'Michael Varcas / The Philippine Star',
    source: 'https://www.philstar.com/business/2026/09/15/2556270/bcda-ink-pax-silica-ai-framework-us',
    placement: 'September-October 2026 timeline milestone',
  },

  aetaLeader: {
    src: asset('case-study-images/aeta-leader-capas.jpg'),
    remoteSrc: 'https://www.japantimes.co.jp/japantimes/uploads/images/2026/09/20/564120.jpg',
    alt: 'Aeta Hungey leader Petronila Muñoz stands in a green landscape in Capas, Tarlac and points toward the surrounding land.',
    caption: 'Petronila Muñoz, an Aeta Hungey leader in Capas, Tarlac, gestures across land near the area associated with the proposed development.',
    credit: 'The Japan Times / originating photographer',
    source: 'https://www.japantimes.co.jp/news/2026/09/20/asia-pacific/philippine-tribe-us-tech-hub/',
    placement: 'The Ground / Kaunlaran para kanino?',
  },

  corridor: {
    src: asset('case-study-images/luzon-economic-corridor-map.png'),
    alt: 'Map of the Luzon Economic Corridor showing a route connecting Subic, Clark, Manila, and Batangas, with an inset map locating the corridor in the Philippines.',
    caption: 'The Luzon Economic Corridor connects Subic, Clark, Manila, and Batangas within a larger network of infrastructure and international investment.',
    credit: 'U.S. Embassy in the Philippines',
    source: 'https://ph.usembassy.gov/fact-sheet-luzon-economic-corridor/',
    placement: 'Power & Governance / Complex Multilateralism',
  },

  institutionalModel: {
    src: asset('case-study-images/officials-new-clark-city-model.jpg'),
    remoteSrc: 'https://media.philstar.com/photos/2026/05/19/hioqwwdwuailuntjpeg_2026-05-19_12-29-38.jpg',
    alt: 'Philippine and United States officials stand around and examine a physical development model of New Clark City.',
    caption: 'Officials examine a development model during a Pax Silica-related visit to New Clark City.',
    credit: 'Philstar / originating source',
    source: 'https://www.philstar.com/business/2026/05/26/2530687/us-official-says-immunity-pax-silica-clark-hub-taken-out-context',
    placement: 'Power & Governance / Institutional hardware',
  },
};

export const caseImageList = Object.values(caseImages);
