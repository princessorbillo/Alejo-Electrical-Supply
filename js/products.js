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

      prodDescription = "A band heater is a ring shaped industrial heating device designed to clamp tightly around cylindrical components. It transfers thermal energy indirectly through surface contact, providing steady and uniform heat to the internal materials.";
      prodUses = "These heaters are primarily utilized to heat cylindrical machinery parts. They are highly effective for maintaining fluid flow and melting plastics in manufacturing equipment and industrial pipes.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet precise operational power requirements." },
        { feature: "Sizes", description: "Manufactured to perfectly match the specific diameter of local industrial machinery." },
        { feature: "Sheath Materials", description: "Built with durable outer layers available in Steel, Stainless Steel, and Brass." }
      ];
      prodApps = [
        "Plastic Manufacturing: Heating the barrels of injection molding and extrusion machines.",
        "Pipe Heating: Providing external heat to industrial pipes to maintain fluid viscosity.",
        "Blow Molding: Regulating temperatures for plastic forming equipment.",
        "Food Processing: Heating cylindrical vessels and fluid transfer lines."
      ];
      prodFeatures = [
        "Secure Fit: Clamping mechanisms ensure a tight grip for maximum heat transfer.",
        "Uniform Heating: Distributes heat evenly across the cylindrical surface to prevent material degradation.",
        "Simple Installation: Designed to easily open and wrap around existing equipment.",
        "High Durability: Robust metal construction withstands constant clamping pressure and high temperatures."
      ];
      break;

    case "Cartridge Heater":
      mainImg = 'https://image.made-in-china.com/202f0j00rCUhHKYGOjzW/12V-24V-48V-110V-220V-Air-Cartridge-Heater-Element-Electric-Industrial-Heater.webp';
      usesImg = 'https://image.made-in-china.com/2f0j00VYTftGjWIyqr/6mm-Diameter-Electric-Stainless-Steel-Cartridge-Heater-for-Mould-Heating.jpg';

      prodDescription = "A cartridge heater is a tube shaped heating element designed to be inserted directly into drilled holes within metal parts. It provides highly concentrated and localized thermal energy precisely where it is needed within industrial machinery.";
      prodUses = "These heaters are extensively used to heat solid metal blocks, molds, and dies. They are essential for processes requiring highly targeted and intense heat within confined spaces.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for high density power outputs in compact areas." },
        { feature: "Dimensions", description: "Available in exact diameters to fit standard industrial drilled holes tightly." },
        { feature: "Sheath Materials", description: "Constructed with high quality Stainless Steel to resist oxidation and wear." }
      ];
      prodApps = [
        "Molding Operations: Heating steel dies and molds in plastic and rubber manufacturing.",
        "Packaging Equipment: Providing targeted heat to sealing bars and cutting blades.",
        "Medical Machinery: Maintaining exact temperatures in fluid warming and diagnostic equipment.",
        "Hot Stamping: Heating metal stamps for precise printing and branding processes."
      ];
      prodFeatures = [
        "Concentrated Heat: Delivers intense thermal energy directly to solid metals.",
        "Exact Fit: Manufactured to tight tolerances to ensure maximum surface contact and heat transfer.",
        "Space Efficiency: The compact tubular design fits easily into complex machinery.",
        "Rapid Response: Provides quick temperature increases and accurate thermal control."
      ];
      break;

    case "Coil Heater":
      mainImg = 'https://5.imimg.com/data5/JA/QP/FK/SELLER-472505/30i.jpg';
      usesImg = 'https://image.made-in-china.com/318f0j00OEMYTVNaaDun/CoilHeatingelement-mp4.webp';

      prodDescription = "A coil heater is a highly flexible tubular heating element formed into a tight spiral configuration. This structure provides intense, full coverage heating to small cylindrical nozzles and targeted equipment areas.";
      prodUses = "Coil heaters are primarily utilized in precision manufacturing environments where space is extremely limited but high temperatures are required. They are highly effective for heating narrow machinery components evenly.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to deliver precise power outputs for small scale applications." },
        { feature: "Coil Formations", description: "Custom wound to exactly match the length and diameter of the target component." },
        { feature: "Sheath Materials", description: "Built with resilient Stainless Steel to withstand continuous high temperatures." }
      ];
      prodApps = [
        "Plastic Injection: Providing focused heat to hot runner nozzles to prevent plastic from cooling.",
        "Cutting Equipment: Heating industrial cutting wires and blades for clean separations.",
        "Semiconductor Production: Delivering highly controlled heat to delicate manufacturing processes.",
        "Packaging Machinery: Supplying localized heat to specialized sealing components."
      ];
      prodFeatures = [
        "Total Coverage: The coiled shape wraps completely around the component for uniform heat distribution.",
        "Compact Power: Delivers high operating temperatures despite its extremely small profile.",
        "Formability: Can be tightly wound to fit perfectly around irregularly shaped nozzles.",
        "Quick Recovery: Responds rapidly to temperature drops to maintain continuous operational flow."
      ];
      break;

    case "Plate Heater":
      mainImg = 'https://images.jdmagicbox.com/quickquotes/images_main/-4nw5ixb8.png';
      usesImg = 'https://image.made-in-china.com/2f0j00pbvlKdNMyAfG/Mica-Stainless-Steel-Heating-Plate-Electric-Heater-Plate-220V.jpg';

      prodDescription = "A plate heater is a flat industrial heating unit designed to be securely clamped directly against flat surfaces. It provides a broad area of thermal contact, ensuring an even and consistent transfer of heat across large metal sections.";
      prodUses = "These heaters are utilized to warm large flat surfaces, holding tanks, and commercial warming equipment. They are highly effective for applications requiring broad, low density heat distribution to prevent localized burning.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to provide balanced and uniform power across the entire surface." },
        { feature: "Dimensions", description: "Manufactured in custom shapes and sizes to perfectly cover required surface areas." },
        { feature: "Sheath Materials", description: "Constructed with durable Steel, Stainless Steel, or Aluminum for optimal thermal conductivity." }
      ];
      prodApps = [
        "Commercial Food Service: Warming serving tables and flat griddles in professional kitchens.",
        "Tank Heating: Clamped to the exterior walls of holding vats to maintain liquid temperatures.",
        "Industrial Presses: Heating large metal platens for pressing and laminating operations.",
        "Drying Equipment: Providing a heated surface for dehydrating materials in manufacturing."
      ];
      prodFeatures = [
        "Broad Contact Area: Maximizes surface contact for highly efficient and uniform thermal transfer.",
        "Low Profile: The flat structure requires minimal space, allowing easy integration into existing equipment.",
        "Even Heat Distribution: Prevents hot spots, ensuring the safety of delicate materials and fluids.",
        "Simple Maintenance: Can be easily unbolted and removed for machinery inspection."
      ];
      break;

    case "Strip Heater":
      mainImg = 'https://www.tempco.com/wp-content/uploads/2025/09/StripFamily.png';
      usesImg = 'https://br.omega.com/omegaFiles/Heaters/images/CSH4_SERIES_m.jpg';

      prodDescription = "A strip heater is a slender, rectangular heating element designed to be bolted to flat solid surfaces or suspended in open air. Its rigid design allows for versatile placement in both surface heating and environmental warming systems.";
      prodUses = "Strip heaters are widely utilized to provide targeted heat inside enclosed cabinets or across flat metal surfaces. They are highly effective for preventing moisture buildup and maintaining exact temperatures in various commercial settings.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet specific surface or air heating requirements." },
        { feature: "Lengths", description: "Available in multiple lengths to accommodate different equipment sizes." },
        { feature: "Sheath Materials", description: "Built with sturdy Steel and Stainless Steel to ensure long lasting performance." }
      ];
      prodApps = [
        "Environmental Chambers: Preventing condensation and freezing inside electrical control panels.",
        "Packaging Sealing: Heating long flat sealing bars to melt and bond packaging materials.",
        "Ovens and Cabinets: Providing continuous radiant heat for commercial drying and baking.",
        "Hopper Heating: Bolted to the exterior of storage hoppers to prevent bulk materials from clumping."
      ];
      prodFeatures = [
        "Versatile Mounting: Pre drilled holes allow for quick and secure bolting directly to flat machinery parts.",
        "Slim Design: Easily fits into narrow channels and tight spaces within industrial cabinets.",
        "Dual Purpose: Highly capable of functioning as both a direct surface heater and an ambient air heater.",
        "Rugged Construction: Engineered to withstand continuous physical vibration and harsh industrial conditions."
      ];
      break;

    case "Air Heater":
      mainImg = 'https://m.media-amazon.com/images/I/71rjGrL8LgL._AC_UF894,1000_QL80_.jpg';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2025/6/521408989/QR/UC/ZE/30186976/finned-tubular-heater-500x500.jpeg';

      prodDescription = "An air heater is an industrial device engineered to warm continuous streams of ambient air or forced gas. It operates by passing air over highly conductive heating elements, transferring thermal energy directly into the airstream to regulate environmental or process temperatures.";
      prodUses = "These heaters are primarily utilized to control the climate within large facilities and industrial equipment. They are highly effective for drying processes, environmental warming, and maintaining stable temperatures in enclosed spaces.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet specific airflow and thermal requirements." },
        { feature: "Configurations", description: "Available in open coil, tubular, or finned tubular designs to match specific equipment." },
        { feature: "Sheath Materials", description: "Constructed with Steel and Stainless Steel to withstand continuous airflow." }
      ];
      prodApps = [
        "HVAC Systems: Integrated into ductwork to provide reliable heating for commercial buildings.",
        "Drying Equipment: Supplying continuous warm air for commercial laundry and material dehydration.",
        "Packaging Operations: Providing targeted hot air for heat shrinking and sealing machinery.",
        "Environmental Chambers: Maintaining exact climate conditions for product testing and storage."
      ];
      prodFeatures = [
        "Rapid Heating: Designed to transfer heat instantly to moving air for immediate temperature control.",
        "Energy Efficiency: Maximizes thermal transfer to reduce power consumption during continuous operation.",
        "Versatile Integration: Easily installed inside standard ductwork or custom industrial enclosures.",
        "Durable Construction: Built to withstand high velocity airflow and extended operational periods."
      ];
      break;

    case "Boiler Heater":
      mainImg = 'https://www.wattco.com/wp-content/uploads/2017/07/Boiler-Flange-Heater-1.png';
      usesImg = 'https://www.familyhandyman.com/wp-content/uploads/2024/01/Boilers-vs-Furnaces-Whats-the-Difference_Graphic_FT.jpg';

      prodDescription = "A boiler heater is a heavy duty immersion heating element designed specifically for steam and hot water boilers. It is installed directly into the boiler vessel to heat water rapidly, producing steam or pressurized hot water for facility wide utility systems.";
      prodUses = "These heaters are extensively utilized as the primary heat source in commercial and industrial boiler equipment. They are essential for power generation, facility heating, and providing continuous steam for manufacturing processes.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for exceptionally high power outputs to vaporize water efficiently." },
        { feature: "Mounting", description: "Designed with heavy flanged connections to securely fit standard boiler vessels." },
        { feature: "Sheath Materials", description: "Built with thick walled Copper, Steel, and Stainless Steel to resist constant water pressure." }
      ];
      prodApps = [
        "Power Generation: Creating high pressure steam to drive industrial turbines and machinery.",
        "Facility Heating: Supplying centralized hot water and steam for building radiators and climate control.",
        "Food Processing: Providing clean steam for commercial sterilization and large scale cooking operations.",
        "Textile Manufacturing: Supplying steady steam required for fabric dyeing and pressing processes."
      ];
      prodFeatures = [
        "High Capacity: Capable of generating massive amounts of thermal energy for large scale demands.",
        "Direct Immersion: Submerged directly in the water reservoir for maximum energy utilization.",
        "Pressure Resistance: Constructed with robust materials to safely operate under intense boiler pressure.",
        "Simple Replacement: The flanged design allows for straightforward removal and maintenance without replacing the entire boiler."
      ];
      break;

    case "Oven Heater":
      mainImg = 'https://www.thermowatt.com/content/dam/thermowatt---website/images/GXX09208-s-min.png';
      usesImg = 'https://www.ht-heater.com/wp-content/uploads/2026/01/oven-heating-element-2.webp';

      prodDescription = "An oven heater is an industrial heating element configured to provide consistent radiant or convection heat inside enclosed chambers. It is structurally designed to withstand high ambient temperatures while distributing thermal energy evenly across the internal space.";
      prodUses = "These heaters are utilized extensively inside commercial and industrial ovens. They are highly effective for baking, curing, and drying materials in enclosed spaces where precise and uniform temperature control is required.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to meet precise operational power requirements for enclosed heating." },
        { feature: "Shapes", description: "Custom formed to match the internal dimensions and airflow patterns of specific ovens." },
        { feature: "Sheath Materials", description: "Constructed with durable Steel and Stainless Steel to endure extreme internal temperatures." }
      ];
      prodApps = [
        "Food Production: Providing exact baking and roasting temperatures for commercial bakeries.",
        "Paint Curing: Heating industrial curing ovens to properly set powder coatings and industrial paints.",
        "Material Dehydration: Maintaining steady heat for drying agricultural products and industrial materials.",
        "Metal Treatment: Supplying controlled heat for annealing and tempering metal components."
      ];
      prodFeatures = [
        "Uniform Distribution: Formed to spread heat evenly, preventing cold spots within the oven chamber.",
        "High Temperature Tolerance: Engineered to operate continuously within extremely hot environments.",
        "Custom Fit: Can be bent and shaped to navigate around internal oven racks and machinery.",
        "Long Lifespan: Built with robust materials that resist degradation from continuous baking cycles."
      ];
      break;

    case "Coffee Maker Heater":
      mainImg = 'https://m.media-amazon.com/images/I/51JcMfCeysL.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/51W2CO17VES._AC_UF1000,1000_QL80_.jpg';

      prodDescription = "A coffee maker heater is a compact tubular heating element designed to rapidly heat water for commercial brewing equipment. It is typically integrated into the boiler or water reservoir to ensure that water reaches and maintains the exact temperature required for optimal brewing.";
      prodUses = "These heaters are primarily utilized in commercial coffee machines and beverage dispensers. They are highly effective for providing consistent hot water in high volume food service environments, ensuring continuous operation without temperature fluctuations.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to deliver rapid heating for commercial volume requirements." },
        { feature: "Configurations", description: "Formed to fit precisely within the restricted space of boiler tanks." },
        { feature: "Sheath Materials", description: "Constructed with Copper or Stainless Steel to ensure safety for potable water." }
      ];
      prodApps = [
        "Coffee Shops: Powering espresso machines and high capacity drip brewers.",
        "Restaurants: Supplying continuous hot water for beverage stations.",
        "Hotels: Providing reliable heat for automated breakfast buffet dispensers.",
        "Convenience Stores: Maintaining consistent temperatures for self service coffee units."
      ];
      prodFeatures = [
        "Rapid Heating: Designed to heat water instantly, reducing wait times between brewing cycles.",
        "Safe for Consumption: Built with food grade materials to prevent water contamination.",
        "Space Efficient: Compact design allows for easy integration into complex internal machinery.",
        "Reliable Performance: Engineered to withstand constant daily use in busy commercial settings."
      ];
      break;

    case "Defrost Heater":
      mainImg = 'https://m.media-amazon.com/images/I/717ubLqi+aL._AC_UF894,1000_QL80_.jpg';
      usesImg = 'https://ziperone.com/uploads/shop/products/main/2/2c5b7c812a1511e5ac9ac80aa932b82b_87d9f0ca1c2011ef9185cca52452cc1e_8fg31.webp';

      prodDescription = "A defrost heater is a specialized heating element installed directly on or near the cooling coils of refrigeration systems. It activates periodically to melt accumulated frost and ice, ensuring the cooling system operates efficiently without blockages.";
      prodUses = "These heaters are essential for maintaining commercial freezers, cold storage units, and supermarket display cases. They prevent ice buildup that can restrict airflow and damage refrigeration equipment.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to melt ice quickly without damaging nearby cooling components." },
        { feature: "Sealing", description: "Features moisture resistant sealed ends to prevent electrical shorts in wet environments." },
        { feature: "Sheath Materials", description: "Built with Stainless Steel or Aluminum to resist rust and moisture." }
      ];
      prodApps = [
        "Supermarkets: Installed in refrigerated display cases and frozen food aisles.",
        "Cold Storage Facilities: Maintaining large scale walk in freezers and industrial refrigerators.",
        "Food Processing: Preventing ice blockages in temperature controlled production rooms.",
        "Transport Refrigeration: Used in refrigerated delivery trucks to maintain continuous cooling."
      ];
      prodFeatures = [
        "Moisture Resistance: Completely sealed to operate safely in highly wet and humid conditions.",
        "Protects Equipment: Prevents severe ice buildup that can cause cooling coils to fail.",
        "Improves Efficiency: Ensures unobstructed airflow, reducing the overall energy consumption of the compressor.",
        "Targeted Heating: Provides just enough heat to melt frost without raising the overall temperature of the storage area."
      ];
      break;

    case "French Fries Heater":
      mainImg = 'https://image.made-in-china.com/365f3j00ZhYcPIvFZgre/Heating-Element-for-Commercial-French-Fries-and-Chicken-Electric-Fryer.webp';
      usesImg = 'https://m.media-amazon.com/images/I/4182ZO6w42S._AC_UF1000,1000_QL80_.jpg';

      prodDescription = "A commercial fryer heater is a heavy duty heating element designed to be submerged directly into cooking oil. Its specialized structure provides rapid and consistent heat transfer, ensuring that deep fryers maintain precise cooking temperatures during continuous food production.";
      prodUses = "These heaters are primarily utilized in commercial deep fryers for fast food operations. They are engineered with a specific low watt density to heat the oil efficiently without burning or degrading the cooking medium.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to provide intense heat with a low watt density surface." },
        { feature: "Configurations", description: "Often flat or broadly curved to maximize surface contact with the oil." },
        { feature: "Sheath Materials", description: "Constructed entirely of food grade Stainless Steel." }
      ];
      prodApps = [
        "Fast Food Chains: Powering continuous, high volume deep frying stations.",
        "Food Processing Plants: Heating large commercial frying vats for packaged snacks.",
        "Restaurants: Supplying consistent heat for precise cooking of assorted fried foods.",
        "Catering Services: Installed in portable commercial fryers for large events."
      ];
      prodFeatures = [
        "Oil Preservation: The low surface temperature prevents the cooking oil from scorching, extending its usable lifespan.",
        "Even Heat Distribution: Ensures food cooks uniformly without cold spots in the vat.",
        "Easy Cleaning: The smooth stainless steel surface allows for straightforward removal of grease and food particles.",
        "Rapid Response: Quickly restores the oil to cooking temperature immediately after frozen foods are submerged."
      ];
      break;

    case "Hand Dryer Heater":
      mainImg = 'https://www.freitech.com/images/stories/virtuemart/product/phon2.jpg';
      usesImg = 'https://www.eycomheater.com/uploads/frx_1500_13.jpg';

      prodDescription = "A hair dryer heater is a specialized open coil heating element designed to instantly heat fast moving air. It consists of high resistance heating wire structured securely within an insulated frame, allowing air from a fan to pass directly over the heated wires.";
      prodUses = "These heaters are utilized in commercial salon drying equipment, hand dryers, and pet grooming dryers. They are highly effective for providing immediate, controlled warm air in environments requiring rapid drying times.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to produce instant heat without overloading the electrical circuit." },
        { feature: "Structure", description: "Utilizes exposed heating wire mounted on fireproof, non-conductive supports." },
        { feature: "Sheath Materials", description: "Exposed wire design, strictly utilizing high grade heating alloys." }
      ];
      prodApps = [
        "Hair Salons: Providing reliable heat for commercial hood dryers and heavy duty hand held units.",
        "Public Restrooms: Installed in high speed commercial hand drying machines.",
        "Pet Grooming: Supplying safe and continuous warm air for large grooming blowers.",
        "Industrial Drying: Used in small scale manufacturing for rapid surface drying of parts."
      ];
      prodFeatures = [
        "Instant Thermal Response: Heats the air immediately upon activation, eliminating wait times.",
        "Lightweight Design: Adds minimal weight to handheld or portable drying equipment.",
        "Consistent Airflow: The open structure allows maximum air volume to pass through without restriction.",
        "Safe Operation: Integrated with thermal limiters to prevent overheating and ensure user safety."
      ];
      break;

    case "Sauna Bath Heater":
      mainImg = 'https://5.imimg.com/data5/SELLER/Default/2024/6/428563625/ZE/ZL/JL/9686147/sauna-heater-element-1-500x500.jpg';
      usesImg = 'https://m.media-amazon.com/images/I/51t8r4E6AzL.jpg';

      prodDescription = "A sauna bath heater is a robust industrial heating unit designed to generate intense dry heat and steam within an enclosed room. It features durable heating elements situated beneath a rock tray, capable of withstanding extreme temperatures and direct water contact.";
      prodUses = "These heaters are exclusively utilized to warm commercial and residential sauna rooms. They are highly effective at heating the surrounding air and the sauna stones, producing steam instantly when water is poured over the hot rocks.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for high capacity output to heat entire rooms evenly." },
        { feature: "Construction", description: "Housed within a protective metal casing with internal rock support grates." },
        { feature: "Sheath Materials", description: "Built with heavy duty Stainless Steel to resist constant thermal shock and moisture." }
      ];
      prodApps = [
        "Health Spas: Providing continuous operation for commercial wellness centers.",
        "Hotels and Gyms: Installed in public locker room saunas for high volume usage.",
        "Residential Homes: Supplying reliable and safe heat for private indoor or outdoor sauna cabins.",
        "Rehabilitation Centers: Used in physical therapy facilities requiring controlled heat exposure."
      ];
      prodFeatures = [
        "Thermal Shock Resistance: Elements are specifically engineered to withstand sudden cooling when splashed with water.",
        "Exceptional Durability: The rust resistant exterior ensures a long lifespan despite the highly humid environment.",
        "Even Room Heating: Convection design draws cold air from the floor and pushes heated air evenly throughout the room.",
        "Safety Guards: The sturdy outer casing prevents users from accidentally contacting the internal heating components."
      ];
      break;

    case "Dish Washing Heater":
      mainImg = 'https://image.made-in-china.com/318f0j00ZEmGrTbtJcoq/6000304320788-mp4.webp';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2024/4/413304541/ZD/CX/LE/3167643/dishwasher-heating-elements-9kw-230v-440v.png';

      prodDescription = "A dish washing heater is a rugged immersion heating element designed to maintain high water temperatures required for proper sanitation. Submerged directly into the washing tank, it ensures that commercial dishwashers consistently meet required health and safety standards.";
      prodUses = "These heaters are widely utilized in heavy duty commercial dishwashing equipment. They are necessary for heating both the primary wash water and the final high temperature rinse water.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for fast recovery times between washing cycles." },
        { feature: "Mounting", description: "Equipped with threaded or flanged connections for secure, watertight installation." },
        { feature: "Sheath Materials", description: "Constructed with durable Stainless Steel to resist corrosive detergents." }
      ];
      prodApps = [
        "Commercial Kitchens: Powering large scale conveyor and door type dishwashers.",
        "Hospitals: Ensuring complete sanitation for food service and medical trays.",
        "Hotels and Resorts: Handling continuous, high volume washing operations.",
        "Cafeterias: Providing reliable water heating for daily institutional food service."
      ];
      prodFeatures = [
        "Corrosion Resistance: Specially built to withstand constant exposure to harsh cleaning chemicals and food acids.",
        "Fast Recovery: Rapidly reheats water as cold dishes enter the machine, allowing for continuous use.",
        "Sanitation Compliance: Guarantees that water reaches the exact temperatures needed to eliminate bacteria.",
        "Leak Proof Design: Secure mechanical fittings prevent water from leaking into electrical components."
      ];
      break;

    case "Bunker Fuel Oil Heater":
      mainImg = 'https://5.imimg.com/data5/SELLER/Default/2025/6/518034869/DF/WB/GX/907275/tube-oil-heater-500x500.jpg';
      usesImg = 'https://5.imimg.com/data5/SELLER/Default/2022/12/RW/BF/SS/82024232/whatsapp-image-2022-12-07-at-9-21-29-am-1--250x250.jpeg';

      prodDescription = "A bunker fuel oil heater is an industrial heating unit specifically designed to preheat thick and heavy fuel oils before combustion. By safely raising the temperature of the oil, it reduces the fluid viscosity to ensure proper atomization and efficient burning within industrial burners and large engines.";
      prodUses = "These heaters are primarily utilized in power plants and large scale industrial facilities that rely on heavy grade oils for operation. They are highly effective for ensuring smooth fuel transport through complex piping systems and maximizing the overall combustion efficiency of the facility.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered to deliver precise thermal output using a low watt density design to prevent oil from burning." },
        { feature: "Configurations", description: "Available in flanged immersion or inline circulation designs to match the specific piping infrastructure." },
        { feature: "Sheath Materials", description: "Constructed with durable Steel or Stainless Steel to withstand heavy viscous fluids." }
      ];
      prodApps = [
        "Power Generation: Preheating heavy fuel oils for large scale industrial turbines and generators.",
        "Industrial Boilers: Ensuring proper fuel viscosity for continuous steam and hot water production.",
        "Asphalt Plants: Maintaining the high temperatures required to process and transport heavy bituminous materials.",
        "Heavy Manufacturing: Supplying consistent fuel flow for industrial furnaces and smelting operations."
      ];
      prodFeatures = [
        "Prevents Carbon Buildup: The low watt density surface prevents the heavy oil from scorching and building up solid carbon on the heating elements.",
        "Consistent Temperature: Provides precise thermal control to maintain the exact viscosity required for optimal pump operation.",
        "Fuel Efficiency: Proper preheating ensures complete combustion, which significantly reduces fuel waste and operational costs.",
        "Robust Construction: Built to handle high pressure fluid flow and the demanding conditions of heavy industrial environments."
      ];
      break;

    case "Bunker Heater":
      mainImg = 'https://www.valin.com/sites/default/files/2023/styles/asset_image_full_size/public/immersion-heater_1.jpeg?itok=bOzGbw7n';
      usesImg = 'https://cdn.globalso.com/wn-heater/56-pih1.jpg';

      prodDescription = "A bunker heater is a heavy duty immersion heating element installed directly into large fuel storage tanks. Its primary function is to maintain stored bunker fuel at a stable, elevated temperature, preventing the highly viscous fluid from solidifying or becoming too thick to pump in cold environments.";
      prodUses = "These heaters are utilized in bulk storage facilities, tank farms, and industrial depots. They ensure that heavy fuel remains in a liquid state and is immediately ready for transfer to processing areas or transport vehicles at all times.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built and supplied in standard industrial voltages up to 600V." },
        { feature: "Wattage", description: "Engineered for large volume heating while maintaining safe surface temperatures." },
        { feature: "Length", description: "Supplied in custom immersed lengths to reach the optimal heating zones within large storage tanks." },
        { feature: "Sheath Materials", description: "Built with heavy wall Steel or Stainless Steel to endure prolonged submersion in bulk fuel." }
      ];
      prodApps = [
        "Bulk Fuel Storage: Preventing heavy oils from congealing inside large outdoor storage tanks.",
        "Port Terminals: Maintaining fluid readiness for transferring bunker fuel to maritime vessels.",
        "Refinery Holding Tanks: Regulating the temperature of unrefined heavy oils awaiting further processing.",
        "Transfer Stations: Ensuring smooth pumping operations at distribution hubs."
      ];
      prodFeatures = [
        "Maintains Fluidity: Effectively prevents thick oils from solidifying, ensuring continuous pumping capabilities.",
        "Tank Integration: Designed with secure flanged connections for safe and sealed installation directly into the tank wall.",
        "Safe Operation: Engineered to provide steady, low density heat that safely warms the fuel without risking ignition.",
        "Reliable Durability: The heavy wall construction resists internal tank pressure and the corrosive nature of unrefined oils."
      ];
      break;

    case "Shipping Vessels Bunker/Oil Heater":
      mainImg = 'https://lh3.googleusercontent.com/proxy/5d1r9dIRiEFegNIf9mYVgg1p4KRC1yBPIxxSPofMbseDMBIyZHaASM6QVLiNee5uXxyCguuccWpLiooiJGThkBehBi8ObMPR1cPm3rx9GSm3mE035RPs8t3w9YSd';
      usesImg = 'https://img.nauticexpo.com/images_ne/photo-m2/30935-473745.jpg';

      prodDescription = "A shipping vessels bunker heater is a specialized marine grade heating system engineered specifically for the maritime industry. It is built to withstand extreme ocean conditions and constant structural vibration while effectively heating the heavy fuel oils required to power massive marine diesel engines.";
      prodUses = "These highly durable heaters are installed directly in the engine rooms and lower fuel tanks of commercial cargo ships and tankers. They are absolutely vital for maintaining the propulsion systems and onboard power generators of maritime vessels during long international transits.";
      prodSpecs = [
        { feature: "Voltage", description: "Custom built to integrate seamlessly with the specific electrical grid of the maritime vessel up to 600V." },
        { feature: "Wattage", description: "Engineered to meet the precise fuel consumption rates of large scale marine engines." },
        { feature: "Mounting", description: "Equipped with heavy duty flanges and reinforced supports to endure constant maritime movement." },
        { feature: "Sheath Materials", description: "Constructed with premium Stainless Steel or specialized alloys to resist highly corrosive saltwater environments and heavy fuels." }
      ];
      prodApps = [
        "Commercial Cargo Ships: Preheating heavy bunker fuel for the main propulsion engines.",
        "Oil Tankers: Maintaining the temperature of operational fuel reserves during deep sea transit.",
        "Cruise Liners: Ensuring the reliable operation of onboard power generation and climate control boilers.",
        "Maritime Transport: Supplying consistent heat for auxiliary engines and heavy equipment on large vessels."
      ];
      prodFeatures = [
        "Marine Grade Durability: Specifically reinforced to withstand the continuous mechanical vibrations and turbulent motions of ocean transit.",
        "Engine Reliability: Guarantees that fuel reaches the engine at the perfect viscosity, preventing engine stalling or mechanical failure at sea.",
        "Space Efficient Design: Compact and highly efficient construction allows for installation in tight, restricted engine room spaces.",
        "Corrosion Protection: Built with robust materials that actively resist degradation from both the heavy fuel and the surrounding maritime atmosphere."
      ];
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
