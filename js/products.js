const productNames = [
  "Air Heater",
  "Aluminum Block Heater",
  "Band Heater",
  "Boiler Heater",
  "Bolt-On Type Heater",
  "Bunker Fuel Oil Heater",
  "Bunker Heater",
  "Cartridge Heater",
  "Circulation Heater",
  "Coffee Maker Heater",
  "Coil Heater",
  "Defrost Heater",
  "Dish Washing Heater",
  "Fins Heater",
  "Flange Heater",
  "French Fries Heater",
  "Hand Dryer Heater",
  "Immersion Heater",
  "Mold Heater",
  "Oven Heater",
  "Plate Heater",
  "Sauna Bath Heater",
  "Screw Flange Heater",
  "Shipping Vessels Bunker/Oil Heater",
  "Strip Heater",
  "Tire Recapping Heater",
  "Tubular Heater",
  "Tubular Heater with Nipple",
  "U-Shaped Tubular Heater",
  "Whirlpool Heater"
];

// Helper to generate a URL-friendly ID
function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Generate the full product data array
window.products = productNames.map(name => {
  const isFlange = name.includes("Flange");

  // Default placeholder images
  let mainImg = 'assets/logo_square.jpg';
  let usesImg = 'assets/hero-bg.png';

  // Hardcode specific product photos here!
  switch (name) {
    case "Circulation Heater":
      mainImg = 'https://media.licdn.com/dms/image/v2/C5612AQFr2aV1YR6n-Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1612329736148?e=2147483647&v=beta&t=xSg2VxIOtlnMm36pYq0k9UG5LvMm3FQtJC2fiZiJMBg';
      usesImg = 'https://cdn.prod.website-files.com/62280aa485e4e53ca9e7a262/62e1cb3ab3c7981933840a83_5ad2be95d923b9b7c1c67386_300x350%2520Circulation%2520Heater.png';
      break;

    case "Flange Heater":
      mainImg = 'https://immersionheaters.uk/wp-content/uploads/2023/11/120KW-415V-1200mm-IMMERSED-DN250-10NB-PN16-FLANGE-HEATER-horizontal.jpeg';
      usesImg = 'https://br.omega.com/omegaFiles/Heaters/images/TPN5_m.jpg';
      break;

    case "Immersion Heater":
      mainImg = 'https://www.fueltankshop.co.uk/images/products/large/5760_1882.jpg';
      usesImg = 'https://media.rs-online.com/Y2318024-01.jpg';
      break;

    case "Screw Flange Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00bYuRKIoGHyqk/9kw-Electric-Flange-Immersion-Heater-Heating-Element-for-Airing-Cupboard.webp';
      usesImg = 'https://www.basstor.com/uploads/202026031/electric-immersion-heater-flange13092579052.jpg';
      break;

    case "Heater":
      mainImg = '';
      usesImg = '';
      break;
  }

  return {
    id: generateId(name),
    name: name,
    description: `${name}s are custom-built to meet precise industrial and commercial requirements. Consisting of high-quality heating elements, this electric heater uses direct heat application for maximum efficiency and durability.`,
    image: mainImg,
    pdf: 'Company Profile.pdf',
    shippingInfo: "Alejo Electrical Supply ships nationwide. We handle all necessary packaging and logistics to ensure that you receive your product on time and on spec. Rush delivery is available upon request.",
    uses: `${name}s allow the flexibility of using many different alloys to help resist corrosion and maintain life longevity. Typically used for heavy and light oils, waxes, and water heating applications.`,
    usesImage: usesImg,

    // Tab Data
    specifications: [
      { feature: "VOLTAGE", description: "Custom-built and supplied with voltages up to 600V." },
      { feature: "WATTAGE", description: "Custom made heaters can be supplied with any requested wattage." },
      { feature: "LENGTH", description: "Supplied with unlimited immersed lengths. Internal support recommended for lengths exceeding 50\"." },
      { feature: "EXTRA HEAVY WALL SHEATH", description: "Heavy wall sheath (0.035\" or 0.065\" thickness) is provided in: Incoloy®, Stainless Steel, Steel." }
    ],
    applications: [
      "Process Water",
      "Heat Transfer Oils",
      "Lube Oils",
      "Caustic Solutions",
      "Parts Washing Solutions",
      "Freeze Protection"
    ],
    features: [
      "Easy to install",
      "Compact design",
      "Highly energy efficient",
      "Durable under extreme conditions",
      "Customizable configurations available"
    ],
    literature: [
      { title: "Product Catalog (PDF)", link: "Company Profile.pdf" },
      { title: "Installation Manual (PDF)", link: "#" }
    ]
  };
});
