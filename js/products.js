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
    { feature: "EXTRA HEAVY WALL SHEATH", description: "Heavy wall sheath (0.035\" or 0.065\" thickness) is provided in: Stainless Steel, Steel." }
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
        { feature: "Extra Heavy Wall Sheath", description: "Heavy wall sheaths measuring 0.035 inches or 0.065 inches in thickness are provided in Stainless Steel and Steel." }
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

      prodDescription = "A flange heater is an industrial heating unit consisting of multiple tubular heating elements welded or brazed to a rigid metal flange. It is designed for direct immersion into liquids and gases. The unit is installed by bolting it directly to a matching companion flange on the wall of a tank or vessel. This direct contact method provides rapid and highly efficient heat transfer for large volume heating operations.";
      prodUses = "Flange heaters are primarily utilized for heating bulk liquids such as water, oils, corrosive solutions, and thermal fluids. They are adaptable to various tank sizes and are essential in commercial environments that require high wattage outputs to maintain precise fluid temperatures over extended operational periods.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and available in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for high capacity outputs, ranging from minimal kilowatts up to extensive megawatt capacities based on requirements." },
        { feature: "Flange Sizes", description: "Standard pipe sizes typically range from 2 inches to 42 inches, constructed to comply with Philippine National Standards and accepted local industrial requirements." },
        { feature: "Sheath Materials", description: "Heating elements are provided in Copper, Steel, and Stainless Steel to ensure compatibility with different chemical and physical environments." }
      ];
      prodApps = [
        "Chemical Processing: Maintaining the proper temperature of reactive chemicals and corrosive solutions stored in large vats.",
        "Oil and Gas: Preheating heavy fuel oils and lubricating oils to ensure proper viscosity and fluid flow through pipelines.",
        "Water Heating: Supplying consistent hot water for large scale industrial washing, rinsing, and boiler equipment.",
        "Food and Beverage: Heating sanitary fluids, syrups, and cooking oils inside food safe processing vessels."
      ];
      prodFeatures = [
        "Maximum Efficiency: Direct immersion ensures that all thermal energy is transferred directly into the target medium, preventing energy waste.",
        "Simplified Maintenance: The flanged structural design allows for straightforward installation, inspection, and removal without the need to dismantle the entire storage tank.",
        "High Durability: Constructed with robust materials engineered to withstand intense pressures and harsh operational conditions.",
        "Targeted Control: Easily integrated with external control panels and thermostats to provide exact and unwavering temperature regulation."
      ];
      break;

    case "Immersion Heater":
      mainImg = 'https://www.fueltankshop.co.uk/images/products/large/5760_1882.jpg';
      usesImg = 'https://media.rs-online.com/Y2318024-01.jpg';

      prodDescription = "An immersion heater is an industrial heating device designed to be placed directly into the liquid or gas it is intended to heat. By submerging the heating element directly into the medium, it provides rapid and highly efficient heat transfer. This direct contact method ensures that the target fluid reaches the required temperature quickly, making it a reliable solution for various industrial tank heating requirements.";
      prodUses = "Immersion heaters are widely used across multiple industries to heat water, oils, solvents, and chemical solutions. They are highly adaptable and are typically installed in large storage tanks, vats, and pressurized vessels to maintain specific fluid temperatures required for manufacturing, processing, and cleaning operations.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied with standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Designed to accommodate specific power requirements, ranging from low to high kilowatt outputs." },
        { feature: "Mounting Types", description: "Available in various configurations, including threaded screw plug and over-the-side designs, to fit different tank structures and operational needs." },
        { feature: "Sheath Materials", description: "Constructed with durable heavy wall sheaths available in Copper, Steel, and Stainless Steel to resist corrosion from different fluids." }
      ];
      prodApps = [
        "Water Heating: Providing continuous hot water for industrial washing facilities, rinse tanks, and boiler systems.",
        "Chemical Processing: Maintaining stable temperatures for chemical solutions and solvent mixtures in holding tanks.",
        "Oil Management: Preheating heavy machinery oils, thermal fluids, and lubricants to maintain proper flow and viscosity.",
        "Food Processing: Heating cooking oils, cleaning water, and sanitary fluids safely in food production facilities."
      ];
      prodFeatures = [
        "Direct Heat Transfer: Immersing the element directly into the fluid ensures minimal heat loss and maximum energy efficiency.",
        "Fast Heating Times: Direct contact allows for rapid temperature increases, reducing operational downtime and improving productivity.",
        "Versatile Installation: Multiple mounting options allow for easy integration into existing tanks without requiring major structural modifications.",
        "Reliable Durability: Built with heavy duty materials designed to withstand continuous operation and harsh industrial environments."
      ];
      break;

    case "Screw Flange Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00bYuRKIoGHyqk/9kw-Electric-Flange-Immersion-Heater-Heating-Element-for-Airing-Cupboard.webp';
      usesImg = 'https://www.basstor.com/uploads/202026031/electric-immersion-heater-flange13092579052.jpg';

      prodDescription = "A screw flange heater is a compact industrial heating unit designed to be threaded directly into the wall of a tank or vessel. It features tubular heating elements that are firmly welded or brazed into a threaded metal plug. This specific design allows for direct immersion heating of liquids within smaller or space restricted containers, providing a highly efficient transfer of thermal energy directly into the fluid.";
      prodUses = "These heaters are primarily utilized to heat liquids in smaller storage tanks where space is limited. They are highly effective for maintaining the proper temperature of water, lubricating oils, and mild chemical solutions in compact industrial setups that require consistent and reliable heat.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet specific operational requirements for concentrated heating." },
        { feature: "Thread Sizes", description: "Standard threaded plug sizes typically range from 1 inch to 3 inches to seamlessly fit universal tank fittings." },
        { feature: "Sheath Materials", description: "Heating elements are provided in Copper, Steel, and Stainless Steel to ensure proper compatibility with various liquids." }
      ];
      prodApps = [
        "Cleaning Equipment: Heating water and mild solvents in commercial parts washers and industrial cleaning tanks.",
        "Hydraulic Systems: Maintaining the correct temperature and viscosity of hydraulic oils in machinery reservoirs.",
        "Food Processing: Heating clean water for facility sanitation and small batch liquid processing.",
        "Laboratory Facilities: Providing precise temperature control for fluid baths and small scale chemical holding tanks."
      ];
      prodFeatures = [
        "Simple Installation: The threaded design allows for quick insertion and secure attachment by simply screwing the unit directly into the tank wall.",
        "Space Efficiency: The highly compact structure is engineered specifically for smaller tanks and areas with restricted operational space.",
        "Direct Heating: Submerging the heating elements directly into the liquid ensures immediate and highly efficient thermal transfer.",
        "Convenient Maintenance: The unit can be easily unscrewed for routine cleaning, inspection, or replacement without requiring extensive system downtime."
      ];
      break;

    case "Fins Heater":
      mainImg = 'https://www.basstor.com/uploads/202026031/tubular-air-finned-heater-element44537870900.jpg';
      usesImg = 'https://sensemaster.co.uk/wp-content/uploads/2019/12/finbar_480.png';

      prodDescription = "A finned heater is an industrial heating element featuring continuous metal fins attached to its outer tubular surface. These fins significantly increase the overall surface area of the heater, allowing for faster and more efficient heat transfer into the surrounding air or gas. It is specifically designed for use in forced air and convection heating systems.";
      prodUses = "Finned heaters are primarily utilized for heating moving air and gases in commercial and industrial environments. They are highly effective for systems that require rapid heat dissipation and are typically installed inside air ducts, industrial ovens, and climate control units to maintain precise environmental temperatures.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet specific power requirements for efficient air heating." },
        { feature: "Fin Material", description: "Constructed with Steel or Stainless Steel fins to maximize thermal conductivity." },
        { feature: "Sheath Materials", description: "Heating elements are provided in Copper, Steel, and Stainless Steel to ensure operational durability." }
      ];
      prodApps = [
        "HVAC Systems: Heating air within commercial heating, ventilation, and air conditioning units.",
        "Industrial Ovens: Providing consistent and uniform heat for curing, drying, and baking processes.",
        "Duct Heating: Installed directly into ventilation ducts to warm continuous air streams.",
        "Packaging Equipment: Supplying controlled heat for commercial shrink wrapping and sealing machinery."
      ];
      prodFeatures = [
        "Increased Surface Area: The attached fins maximize the heating surface, resulting in rapid and highly efficient thermal transfer.",
        "Energy Efficiency: The design allows for quicker heat dissipation, which reduces overall power consumption and operational costs.",
        "Uniform Heating: Ensures even heat distribution to prevent cold spots within enclosed heating chambers or ventilation systems.",
        "Robust Construction: Built with rigid metal materials engineered to withstand continuous airflow and mechanical vibration."
      ];
      break;

    case "Tubular Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00RjZVbmwsMipY/U-Type-Industrial-Stainless-Steel-Electric-Tubular-Heating-Elements-for-Oven.webp';
      usesImg = 'https://www.superbheater.com/uploads/201810468/ce-approved-1500w-electric-tubular-heater22137682383.jpg';

      prodDescription = "A tubular heater is a highly versatile industrial heating element that can be formed into various shapes. It consists of a rigid metal sheath containing a heating wire surrounded by compacted insulating powder. This specific construction allows the unit to apply heat directly or indirectly to liquids, solid surfaces, and gases, making it a fundamental component for numerous industrial equipment designs.";
      prodUses = "These heaters serve as the primary heat source for a wide range of commercial and industrial processes. Because they can be bent to fit specific spaces, they are extensively utilized inside ovens, molding machinery, and liquid heating vessels to provide reliable and consistent temperature control.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet precise operational power requirements." },
        { feature: "Shapes", description: "Can be factory formed into custom configurations to perfectly match equipment dimensions." },
        { feature: "Sheath Materials", description: "Built with durable outer layers available in Copper, Steel, and Stainless Steel." }
      ];
      prodApps = [
        "Plastic Manufacturing: Heating molds and dies for plastic injection and extrusion equipment.",
        "Liquid Heating: Integrated into immersion systems to heat water, oils, and industrial fluid baths.",
        "Air Heating: Installed in commercial ovens, drying cabinets, and environmental warming systems.",
        "Packaging Operations: Providing focused thermal energy for sealing bars and packaging machinery."
      ];
      prodFeatures = [
        "Exceptional Versatility: The ability to be formed into complex shapes ensures an exact fit for specialized industrial machinery.",
        "High Durability: The tightly compacted internal insulation protects the core heating wire from physical shock and machinery vibration.",
        "Efficient Heat Transfer: Can be clamped securely to metal surfaces or submerged in fluids to provide direct and effective thermal energy.",
        "Extended Lifespan: The robust outer metal casing shields the internal components from harsh operational wear and environmental damage."
      ];
      break;

    case "Tubular Heater with Nipple":
      mainImg = 'https://m.media-amazon.com/images/I/51y1A7UJtYL.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/41Q9he+kM-L._AC_UF894,1000_QL80_.jpg';

      prodDescription = "A tubular heater with a nipple is an industrial heating element equipped with threaded metal fittings at its ends. These threaded connections allow the heater to be securely fastened to tank walls or mounting brackets. This specific design provides a tight mechanical seal and precise positioning for direct liquid or air heating operations.";
      prodUses = "These heaters are primarily utilized in systems requiring a secure and sealed installation through a vessel wall. They are highly effective for heating water, oils, and gases in industrial equipment where vibration or fluid pressure requires a mechanically fastened heating element.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet precise operational power requirements." },
        { feature: "Fitting Sizes", description: "Equipped with standard threaded nipples to seamlessly fit local industrial bulkheads." },
        { feature: "Sheath Materials", description: "Built with durable outer layers available in Copper, Steel, and Stainless Steel." }
      ];
      prodApps = [
        "Commercial Appliances: Heating water in commercial cleaning equipment and industrial laundry machines.",
        "Food Processing: Installed in hot water baths and warming stations for continuous food preparation.",
        "Industrial Tanks: Providing direct heat for fluid reservoirs requiring a watertight seal.",
        "Ventilation Systems: Mounted securely within air ducts to provide steady environmental heating."
      ];
      prodFeatures = [
        "Secure Mounting: The threaded connections provide a firm and stable mechanical attachment to equipment walls.",
        "Leak Prevention: Designed to accommodate gaskets to ensure a tight seal against liquids and gases.",
        "Exceptional Versatility: The heating elements can be formed into exact shapes to perfectly fit specialized industrial machinery.",
        "Reliable Durability: The robust construction easily withstands mechanical vibration and continuous operational wear."
      ];
      break;

    case "U-Shaped Tubular Heater":
      mainImg = 'https://ae-pic-a1.aliexpress-media.com/kf/H3f8032c97fec454780811c4da1c4b60el.jpg';
      usesImg = 'https://www.etdzheater.com/Content/uploads/2021739098/2021010809060770d1c18924264f19b905c60a5d2877d0.jpeg';

      prodDescription = "A U-shaped tubular heater is an industrial heating element formed into a simple U configuration. It consists of a rigid metal sheath containing a heating wire surrounded by compacted insulating powder. This specific shape allows for easy installation into tanks and pipes, providing efficient direct heat transfer to liquids, air, and solid metals.";
      prodUses = "These heaters are widely utilized across various industries for direct immersion heating. They are highly effective for heating water, oils, and chemical solutions in open vats, as well as for warming air in ventilation systems and heating solid metal molds in manufacturing processes.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet specific operational power requirements." },
        { feature: "Dimensions", description: "Manufactured with custom lengths and bend radii to perfectly fit specific tank and equipment sizes." },
        { feature: "Sheath Materials", description: "Built with durable outer layers available in Copper, Steel, and Stainless Steel." }
      ];
      prodApps = [
        "Tank Heating: Submerged directly into reservoirs to heat water, oils, and industrial fluids.",
        "Food Processing: Used in commercial fryers and warming equipment to maintain safe cooking temperatures.",
        "Air Heating: Installed in commercial ovens and drying rooms to provide consistent air temperature.",
        "Metal Processing: Inserted into drilled holes in metal platens and molding equipment for precise localized heating."
      ];
      prodFeatures = [
        "Simple Installation: The U shape allows the heater to easily slip into standard tank openings and mounting brackets.",
        "Efficient Heat Transfer: Direct contact with the target medium ensures maximum thermal efficiency and rapid heating.",
        "Customizable Design: The bending radius and leg lengths can be tailored to match exact equipment dimensions.",
        "High Durability: The robust metal casing and compacted internal insulation protect against operational wear and mechanical vibration."
      ];
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
