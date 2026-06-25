const productNames = [
  "Air Heater",
  "Band Heater",
  "Boiler Heater",
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
  "Oven Heater",
  "Plate Heater",
  "Sauna Bath Heater",
  "Screw Flange Heater",
  "Shipping Vessels Bunker/Oil Heater",
  "Strip Heater",
  "Tubular Heater",
  "Tubular Heater with Nipple",
  "U-Shaped Tubular Heater"
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

  // Default product details
  let prodDescription = `${name}s are custom-built to meet precise industrial and commercial requirements. Consisting of high-quality heating elements, this electric heater uses direct heat application for maximum efficiency and durability.`;
  let prodUses = `${name}s allow the flexibility of using many different alloys to help resist corrosion and maintain life longevity. Typically used for heavy and light oils, waxes, and water heating applications.`;
  
  let prodSpecs = [
    { feature: "VOLTAGE", description: "Custom-built and supplied with voltages up to 600V." },
    { feature: "WATTAGE", description: "Custom made heaters can be supplied with any requested wattage." },
    { feature: "LENGTH", description: "Supplied with unlimited immersed lengths. Internal support recommended for lengths exceeding 50\"." },
    { feature: "EXTRA HEAVY WALL SHEATH", description: "Heavy wall sheath (0.035\" or 0.065\" thickness) is provided in: Incoloy®, Stainless Steel, Steel." }
  ];

  let prodApps = [
    "Process Water",
    "Heat Transfer Oils",
    "Lube Oils",
    "Caustic Solutions",
    "Parts Washing Solutions",
    "Freeze Protection"
  ];

  let prodFeatures = [
    "Easy to install",
    "Compact design",
    "Highly energy efficient",
    "Durable under extreme conditions",
    "Customizable configurations available"
  ];

  // Hardcode specific product photos here!
  switch (name) {
    case "Circulation Heater":
      mainImg = 'https://media.licdn.com/dms/image/v2/C5612AQFr2aV1YR6n-Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1612329736148?e=2147483647&v=beta&t=xSg2VxIOtlnMm36pYq0k9UG5LvMm3FQtJC2fiZiJMBg';
      usesImg = 'https://cdn.prod.website-files.com/62280aa485e4e53ca9e7a262/62e1cb3ab3c7981933840a83_5ad2be95d923b9b7c1c67386_300x350%2520Circulation%2520Heater.png';
      
      prodDescription = "A circulation heater is an enclosed unit designed to heat liquids and gases as they flow through a piping system. Unlike open tank heaters, this equipment directly heats the fluid as it passes through a pressurized vessel. This design provides continuous and efficient temperature control for various industrial and commercial processes.";
      prodUses = "Circulation heaters can be customized with various metal alloys to resist corrosion and extend the lifespan of the equipment. They are typically used for heating heavy and light oils, waxes, and water in continuous flow systems.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied with voltages up to 600V." },
        { feature: "Wattage", description: "Custom made heaters can be supplied with any requested wattage." },
        { feature: "Length", description: "Supplied with unlimited immersed lengths. Internal support is recommended for lengths exceeding 50 inches." },
        { feature: "Extra Heavy Wall Sheath", description: "Heavy wall sheaths measuring 0.035 inches or 0.065 inches in thickness are provided in Incoloy, Stainless Steel, and Steel." }
      ];
      prodApps = [
        "Petrochemical Plants: Heating crude oils to maintain proper flow and thickness for transport.",
        "Food Processing: Temperature control for food grade oils, syrups, and cleaning water.",
        "Power Generation: Heating steam and utility fluids required for facility operations.",
        "Water Treatment: Heating water for industrial cleaning and purification processes."
      ];
      prodFeatures = [
        "Energy Efficiency: The enclosed design prevents heat loss to the surrounding environment, which reduces overall energy consumption.",
        "Physical Protection: The heavy duty outer vessel protects the internal heating elements from external damage and wear.",
        "Space Saving: The compact in line design eliminates the need to install and maintain large heated storage tanks.",
        "Temperature Consistency: Provides uniform heating to prevent sudden temperature fluctuations and protect sensitive fluids from degrading."
      ];
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

    case "Fins Heater":
      mainImg = 'https://www.basstor.com/uploads/202026031/tubular-air-finned-heater-element44537870900.jpg';
      usesImg = 'https://sensemaster.co.uk/wp-content/uploads/2019/12/finbar_480.png';
      break;

    case "Tubular Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00RjZVbmwsMipY/U-Type-Industrial-Stainless-Steel-Electric-Tubular-Heating-Elements-for-Oven.webp';
      usesImg = 'https://www.superbheater.com/uploads/201810468/ce-approved-1500w-electric-tubular-heater22137682383.jpg';
      break;

    case "Tubular Heater with Nipple":
      mainImg = 'https://m.media-amazon.com/images/I/51y1A7UJtYL.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/41Q9he+kM-L._AC_UF894,1000_QL80_.jpg';
      break;

    case "U-Shaped Tubular Heater":
      mainImg = 'https://ae-pic-a1.aliexpress-media.com/kf/H3f8032c97fec454780811c4da1c4b60el.jpg';
      usesImg = 'https://www.etdzheater.com/Content/uploads/2021739098/2021010809060770d1c18924264f19b905c60a5d2877d0.jpeg';
      break;

    case "Band Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00jmsonQdJjwbA/Mica-Band-Heater-Wax-Heater-Electric-Heating-Element-for-Slow-Cooer.webp';
      usesImg = 'https://tiimg.tistatic.com/fp/1/003/959/mica-band-heater-547.jpg';
      break;

    case "Cartridge Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00rCUhHKYGOjzW/12V-24V-48V-110V-220V-Air-Cartridge-Heater-Element-Electric-Industrial-Heater.webp';
      usesImg = 'https://image.made-in-china.com/2f0j00VYTftGjWIyqr/6mm-Diameter-Electric-Stainless-Steel-Cartridge-Heater-for-Mould-Heating.jpg';
      break;

    case "Coil Heater":
      mainImg = 'https://5.imimg.com/data5/JA/QP/FK/SELLER-472505/30i.jpg';
      usesImg = 'https://image.made-in-china.com/318f0j00OEMYTVNaaDun/CoilHeatingelement-mp4.webp';
      break;

    case "Plate Heater":
      mainImg = 'https://images.jdmagicbox.com/quickquotes/images_main/-4nw5ixb8.png';
      usesImg = 'https://image.made-in-china.com/2f0j00pbvlKdNMyAfG/Mica-Stainless-Steel-Heating-Plate-Electric-Heater-Plate-220V.jpg';
      break;

    case "Strip Heater":
      mainImg = 'https://www.tempco.com/wp-content/uploads/2025/09/StripFamily.png';
      usesImg = 'https://br.omega.com/omegaFiles/Heaters/images/CSH4_SERIES_m.jpg';
      break;

    case "Air Heater":
      mainImg = 'https://m.media-amazon.com/images/I/71rjGrL8LgL._AC_UF894,1000_QL80_.jpg';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2025/6/521408989/QR/UC/ZE/30186976/finned-tubular-heater-500x500.jpeg';
      break;

    case "Boiler Heater":
      mainImg = 'https://www.wattco.com/wp-content/uploads/2017/07/Boiler-Flange-Heater-1.png';
      usesImg = 'https://www.familyhandyman.com/wp-content/uploads/2024/01/Boilers-vs-Furnaces-Whats-the-Difference_Graphic_FT.jpg';
      break;

    case "Oven Heater":
      mainImg = 'https://www.thermowatt.com/content/dam/thermowatt---website/images/GXX09208-s-min.png';
      usesImg = 'https://www.ht-heater.com/wp-content/uploads/2026/01/oven-heating-element-2.webp';
      break;

    case "Coffee Maker Heater":
      mainImg = 'https://m.media-amazon.com/images/I/51JcMfCeysL.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/51W2CO17VES._AC_UF1000,1000_QL80_.jpg';
      break;

    case "Defrost Heater":
      mainImg = 'https://m.media-amazon.com/images/I/717ubLqi+aL._AC_UF894,1000_QL80_.jpg';
      usesImg = 'https://ziperone.com/uploads/shop/products/main/2/2c5b7c812a1511e5ac9ac80aa932b82b_87d9f0ca1c2011ef9185cca52452cc1e_8fg31.webp';
      break;

    case "French Fries Heater":
      mainImg = 'https://image.made-in-china.com/365f3j00ZhYcPIvFZgre/Heating-Element-for-Commercial-French-Fries-and-Chicken-Electric-Fryer.webp';
      usesImg = 'https://m.media-amazon.com/images/I/4182ZO6w42S._AC_UF1000,1000_QL80_.jpg';
      break;

    case "Hand Dryer Heater":
      mainImg = 'https://www.freitech.com/images/stories/virtuemart/product/phon2.jpg';
      usesImg = 'https://www.eycomheater.com/uploads/frx_1500_13.jpg';
      break;

    case "Sauna Bath Heater":
      mainImg = 'https://5.imimg.com/data5/SELLER/Default/2024/6/428563625/ZE/ZL/JL/9686147/sauna-heater-element-1-500x500.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/51t8r4E6AzL.jpg';
      break;

    case "Dish Washing Heater":
      mainImg = 'https://image.made-in-china.com/318f0j00ZEmGrTbtJcoq/6000304320788-mp4.webp';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2024/4/413304541/ZD/CX/LE/3167643/dishwasher-heating-elements-9kw-230v-440v.png';
      break;

    case "Bunker Fuel Oil Heater":
      mainImg = 'https://5.imimg.com/data5/SELLER/Default/2025/6/518034869/DF/WB/GX/907275/tube-oil-heater-500x500.jpg';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2022/12/RW/BF/SS/82024232/whatsapp-image-2022-12-07-at-9-21-29-am-1--250x250.jpeg';
      break;

    case "Bunker Heater":
      mainImg = 'https://www.valin.com/sites/default/files/2023/styles/asset_image_full_size/public/immersion-heater_1.jpeg?itok=bOzGbw7n';
      usesImg = 'https://cdn.globalso.com/wn-heater/56-pih1.jpg';
      break;

    case "Shipping Vessels Bunker/Oil Heater":
      mainImg = 'https://lh3.googleusercontent.com/proxy/5d1r9dIRiEFegNIf9mYVgg1p4KRC1yBPIxxSPofMbseDMBIyZHaASM6QVLiNee5uXxyCguuccWpLiooiJGThkBehBi8ObMPR1cPm3rx9GSm3mE035RPs8t3w9YSd';
      usesImg = 'https://img.nauticexpo.com/images_ne/photo-m2/30935-473745.jpg';
      break;
  }

  return {
    id: generateId(name),
    name: name,
    description: prodDescription,
    image: mainImg,
    pdf: 'Company Profile.pdf',
    shippingInfo: "Alejo Electrical Supply ships nationwide. We handle all necessary packaging and logistics to ensure that you receive your product on time and on spec. Rush delivery is available upon request.",
    uses: prodUses,
    usesImage: usesImg,

    // Tab Data
    specifications: prodSpecs,
    applications: prodApps,
    features: prodFeatures,
    literature: [
      { title: "Product Catalog (PDF)", link: "Company Profile.pdf" },
      { title: "Installation Manual (PDF)", link: "#" }
    ]
  };
});
