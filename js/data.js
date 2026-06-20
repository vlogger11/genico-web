/* ============================================================
   GENICO TECH SOLUTIONS — CENTRAL DATA STORE
   All product, company and contact data lives here.
   Replace `img` URLs with your own product photos later.
   ============================================================ */

const COMPANY = {
  name: "Genico Tech Solutions",
  tagline: "Building Strong Partnerships Through Quality & Reliability",
  gst: "27CFBPC8539J1Z9",
  phone: "07313726182",
  email: "info@genicotechsolutions.net",
  established: "2023",
  employees: "03",
  nature: "Trader and Supplier",
  transport: "By Road",
  payment: "Online (NEFT / RTGS / IMPS), Cheque / DD, Cash",
  address:
    "1, Flat No 06, Alokshree Sadan Co-op HSG Soc, Lane Number 2, Ashwini Stationery And Variety, Pune - 411038, Maharashtra, India",
  logo: "https://placehold.co/180x70/0a2a66/ffffff?text=GENICO",
  about:
    "Genico Tech Solutions is a Pune-based trader and supplier of industrial automation products, established in 2023. We specialize in delivering high-quality Mitsubishi VFD, Mitsubishi Servo Motor, Servo Drives, Delta VFD and Mitsubishi PLC to industries seeking reliable automation solutions. Our company is committed to maintaining quality, authenticity, and professional service in every transaction. Each product supplied is carefully verified to ensure dependable performance and suitability for demanding industrial applications.",
  about2:
    "With a strong customer-centric approach, we assist businesses in selecting the right automation components based on their operational needs. Over time, we have built our presence through transparent processes, timely deliveries, and consistent service standards. We aim to be a trusted partner for industries requiring efficient, durable, and advanced automation products.",
  mission:
    "To deliver reliable, high-quality industrial automation products that support the growth and efficiency of our clients, backed by professional service and timely delivery.",
  vision:
    "To become a leading and trusted name in the automation industry by continually expanding our product range, strengthening client partnerships, and adopting advanced technologies.",
  whyUs: [
    "Quality-Assured Products verified for performance, durability and compliance with industry standards.",
    "Transparent & Competitive Pricing designed to offer long-term value without compromising on reliability.",
    "Timely Delivery System supported by efficient logistics and well-organized supply operations.",
    "Customer-Centric Service with prompt communication and technical assistance throughout the buying process.",
  ],
};

/* Product categories (used for filters and menus) */
const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "servo-motor", name: "Mitsubishi Servo Motor" },
  { id: "mitsubishi-vfd", name: "Mitsubishi VFD" },
  { id: "delta-vfd", name: "Delta VFD" },
  { id: "servo-drives", name: "Servo Drives" },
  { id: "mitsubishi-plc", name: "Mitsubishi PLC" },
  { id: "delta-plc", name: "Delta PLC" },
  { id: "delta-hmi", name: "Delta HMI" },
  { id: "mitsubishi-hmi", name: "Mitsubishi HMI" },
  { id: "smps", name: "Power Supply (SMPS)" },
  { id: "siemens-servo", name: "Siemens Servo Motors" },
  { id: "fl-switch", name: "FL Switch" },
];

/* Master product list.
   Each item: id, name, category, brand, img, short, specs[], description */
const PRODUCTS = [
  /* ---------- MITSUBISHI SERVO MOTORS ---------- */
  {
    id: "hgkn13",
    name: "Mitsubishi HG-KN13 Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HG-KN13+Servo",
    short: "100W low-inertia AC servo motor for high-response motion control.",
    specs: [
      ["Rated Output", "100 W"],
      ["Rated Speed", "3000 r/min"],
      ["Inertia", "Low inertia"],
      ["Series", "MELSERVO HG-KN"],
      ["Encoder", "Absolute / Incremental"],
    ],
    description:
      "The Mitsubishi HG-KN13 is a compact low-inertia AC servo motor delivering 100W of rated output at 3000 r/min. Designed for fast, precise positioning in packaging, assembly and small machinery, it pairs with MELSERVO-J4 drives for high-response control.",
  },
  {
    id: "hgkn23k",
    name: "Mitsubishi HGKN23K Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HGKN23K+Servo",
    short: "200W low-inertia servo motor with high-resolution encoder.",
    specs: [
      ["Rated Output", "200 W"],
      ["Rated Speed", "3000 r/min"],
      ["Inertia", "Low inertia"],
      ["Series", "HG-KN"],
      ["Mounting", "Flange"],
    ],
    description:
      "The Mitsubishi HGKN23K is a 200W low-inertia AC servo motor offering smooth, accurate motion for automation equipment. Its high-resolution encoder ensures repeatable positioning and stable performance under varying loads.",
  },
  {
    id: "hgkn43k",
    name: "Mitsubishi HGKN43K Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HGKN43K+Servo",
    short: "400W low-inertia servo motor for dynamic, high-precision tasks.",
    specs: [
      ["Rated Output", "400 W"],
      ["Rated Speed", "3000 r/min"],
      ["Inertia", "Low inertia"],
      ["Series", "HG-KN"],
      ["Protection", "IP65"],
    ],
    description:
      "The Mitsubishi HGKN43K delivers 400W of rated power in a compact low-inertia design, ideal for dynamic, high-precision motion in machinery and automation lines. Built for durability with reliable encoder feedback.",
  },
  {
    id: "hgkr43j",
    name: "Mitsubishi HGKR43J Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HGKR43J+Servo",
    short: "400W medium-inertia servo motor for stable load handling.",
    specs: [
      ["Rated Output", "400 W"],
      ["Rated Speed", "3000 r/min"],
      ["Inertia", "Medium inertia"],
      ["Series", "HG-KR"],
      ["Feedback", "High-resolution encoder"],
    ],
    description:
      "The Mitsubishi HGKR43J is a 400W medium-inertia AC servo motor suited to applications needing stable handling of fluctuating loads. It provides smooth control and dependable accuracy across demanding industrial duty cycles.",
  },

  /* ---------- SERVO DRIVES ---------- */
  {
    id: "hgsn102jk",
    name: "Mitsubishi HG-SN102JK Servo Motor Drive",
    category: "servo-drives",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HG-SN102JK",
    short: "1kW medium-inertia servo motor drive for industrial systems.",
    specs: [
      ["Rated Output", "1.0 kW"],
      ["Rated Speed", "2000 r/min"],
      ["Inertia", "Medium inertia"],
      ["Series", "HG-SN"],
      ["Voltage", "200 V class"],
    ],
    description:
      "The Mitsubishi HG-SN102JK is a 1kW medium-inertia servo motor drive engineered for robust industrial motion control. It maintains accurate speed and torque under heavy operating conditions.",
  },
  {
    id: "hssn202jk",
    name: "Mitsubishi HS-SN202JK Servo Motor Drive",
    category: "servo-drives",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=HS-SN202JK",
    short: "2kW servo motor drive for high-power motion applications.",
    specs: [
      ["Rated Output", "2.0 kW"],
      ["Rated Speed", "2000 r/min"],
      ["Series", "HS-SN"],
      ["Voltage", "200 V class"],
      ["Control", "High-response"],
    ],
    description:
      "The Mitsubishi HS-SN202JK is a 2kW servo motor drive built for high-power, high-precision motion applications. It delivers reliable torque and smooth operation for demanding machinery.",
  },

  /* ---------- MITSUBISHI VFD ---------- */
  {
    id: "frd720s",
    name: "Mitsubishi Drive FR-D720S-042-E16",
    category: "mitsubishi-vfd",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=FR-D720S",
    short: "Compact single-phase 200V VFD for general-purpose motor control.",
    specs: [
      ["Series", "FR-D700"],
      ["Input", "Single-phase 200-240 V"],
      ["Rated Current", "4.2 A"],
      ["Capacity", "0.75 kW"],
      ["Control", "V/F & General-purpose magnetic flux"],
    ],
    description:
      "The Mitsubishi FR-D720S-042-E16 is a compact, cost-effective variable frequency drive for single-phase 200V applications. It offers smooth speed control, built-in PID and energy savings for fans, pumps and conveyors.",
  },

  /* ---------- DELTA VFD ---------- */
  {
    id: "vfd9a0ms43",
    name: "Delta VFD9A0MS43ANSAA MS300 AC Motor Drive",
    category: "delta-vfd",
    brand: "Delta",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Delta+MS300",
    short: "Standard compact MS300 series 3-phase 460V AC drive.",
    specs: [
      ["Series", "MS300"],
      ["Input", "3-phase 380-480 V"],
      ["Rated Current", "9.0 A"],
      ["Capacity", "4.0 kW (5 HP)"],
      ["Control", "V/F, SVC, FOC"],
    ],
    description:
      "The Delta VFD9A0MS43ANSAA from the MS300 series is a compact, high-performance AC motor drive supporting V/F, sensorless vector and field-oriented control. Built-in PLC functionality and safe-torque-off make it ideal for versatile automation.",
  },
  {
    id: "vfd007el21w1",
    name: "Delta VFD007EL21W1 VFD",
    category: "delta-vfd",
    brand: "Delta",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Delta+EL+VFD",
    short: "0.75kW EL-series micro drive for simple speed control.",
    specs: [
      ["Series", "EL"],
      ["Input", "Single-phase 200-240 V"],
      ["Capacity", "0.75 kW (1 HP)"],
      ["Output Frequency", "0.1-600 Hz"],
      ["Control", "V/F"],
    ],
    description:
      "The Delta VFD007EL21W1 is a compact 0.75kW micro AC drive from the EL series, designed for straightforward variable-speed control of small machines. It is easy to set up and reliable for everyday automation needs.",
  },

  /* ---------- MITSUBISHI PLC ---------- */
  {
    id: "fx5uj40mrds",
    name: "Mitsubishi FX5UJ-40MR/DS PLC",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=FX5UJ-40MR",
    short: "40-point iQ-F compact PLC with relay outputs.",
    specs: [
      ["Series", "MELSEC iQ-F (FX5UJ)"],
      ["I/O Points", "40 (24 in / 16 out)"],
      ["Output Type", "Relay"],
      ["Power", "24 VDC"],
      ["Comms", "Built-in Ethernet"],
    ],
    description:
      "The Mitsubishi FX5UJ-40MR/DS is a compact iQ-F series programmable logic controller with 40 I/O points and relay outputs. Built-in Ethernet and high-speed processing make it a strong choice for compact automation systems.",
  },
  {
    id: "fx3u32mr",
    name: "Mitsubishi FX3U-32MR PLC",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=FX3U-32MR",
    short: "32-point high-performance FX3U PLC with relay outputs.",
    specs: [
      ["Series", "MELSEC FX3U"],
      ["I/O Points", "32 (16 in / 16 out)"],
      ["Output Type", "Relay"],
      ["Power", "100-240 VAC"],
      ["Expansion", "Supports adapters & modules"],
    ],
    description:
      "The Mitsubishi FX3U-32MR is a high-performance micro PLC with 32 I/O points and relay outputs. Its fast processing, flexible expansion and proven reliability make it popular across packaging and machinery applications.",
  },

  /* ---------- DELTA PLC ---------- */
  {
    id: "dvp16sp11r",
    name: "Delta DVP16SP11R PLC",
    category: "delta-plc",
    brand: "Delta",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=DVP16SP11R",
    short: "16-point SS2/SP series expansion PLC with relay output.",
    specs: [
      ["Series", "DVP-SP"],
      ["I/O Points", "16 (8 in / 8 out)"],
      ["Output Type", "Relay"],
      ["Power", "24 VDC"],
      ["Use", "Expansion / standalone"],
    ],
    description:
      "The Delta DVP16SP11R is a versatile 16-point programmable logic controller with relay outputs, usable standalone or as an expansion module. Compact and economical, it suits small to mid-size control tasks.",
  },

  /* ---------- DELTA HMI ---------- */
  {
    id: "dop107cv",
    name: "Delta DOP107CV HMI",
    category: "delta-hmi",
    brand: "Delta",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Delta+DOP107CV",
    short: "7-inch widescreen touch HMI with rich connectivity.",
    specs: [
      ["Display", "7-inch TFT, 800x480"],
      ["Touch", "Resistive"],
      ["Ports", "USB, RS-232/422/485, Ethernet"],
      ["Series", "DOP-100"],
      ["Power", "24 VDC"],
    ],
    description:
      "The Delta DOP107CV is a 7-inch widescreen touch HMI offering crisp visualisation and broad connectivity including Ethernet and serial ports. It provides an intuitive operator interface for machines and process control.",
  },

  /* ---------- MITSUBISHI HMI ---------- */
  {
    id: "got2000",
    name: "Mitsubishi GOT2000 GS Series HMI",
    category: "mitsubishi-hmi",
    brand: "Mitsubishi",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Mitsubishi+HMI",
    short: "High-performance graphic operator terminal for iQ systems.",
    specs: [
      ["Display", "7-10 inch TFT colour"],
      ["Series", "GOT2000 / GS"],
      ["Ports", "Ethernet, USB, RS-232/422/485"],
      ["Resolution", "800x480 / 1024x600"],
      ["Power", "24 VDC"],
    ],
    description:
      "The Mitsubishi GOT2000 series graphic operator terminal delivers high-speed display, advanced visualisation and seamless integration with MELSEC PLCs. It is a reliable, feature-rich HMI for modern automation.",
  },

  /* ---------- SMPS / POWER SUPPLY ---------- */
  {
    id: "mdr60",
    name: "MDR-60 Series Meanwell SMPS",
    category: "smps",
    brand: "Meanwell",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=MDR-60+SMPS",
    short: "60W DIN-rail switch mode power supply, 24VDC output.",
    specs: [
      ["Output", "24 VDC, 2.5 A"],
      ["Power", "60 W"],
      ["Mounting", "DIN rail"],
      ["Input", "85-264 VAC"],
      ["Protection", "OLP / OVP / OTP"],
    ],
    description:
      "The Meanwell MDR-60 is a 60W DIN-rail mounted switch mode power supply providing stable 24VDC output for control panels and automation devices. It features full protection circuitry and a compact, reliable design.",
  },
  {
    id: "shavison",
    name: "Shavison SMPS Power Supply",
    category: "smps",
    brand: "Shavison",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Shavison+SMPS",
    short: "Industrial DIN-rail SMPS for stable DC control power.",
    specs: [
      ["Output", "24 VDC (range available)"],
      ["Mounting", "DIN rail"],
      ["Input", "Wide AC input"],
      ["Cooling", "Convection"],
      ["Protection", "Short circuit / overload"],
    ],
    description:
      "Shavison SMPS units deliver clean, regulated DC power for industrial control systems. Robust and DIN-rail mountable, they ensure dependable supply for PLCs, sensors and automation electronics.",
  },

  /* ---------- SIEMENS SERVO MOTORS ---------- */
  {
    id: "siemens-1fl6",
    name: "Siemens SIMOTICS 1FL6 Servo Motor",
    category: "siemens-servo",
    brand: "Siemens",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=Siemens+1FL6",
    short: "Compact servo motor for SINAMICS V90 drive systems.",
    specs: [
      ["Series", "SIMOTICS S-1FL6"],
      ["Rated Speed", "2000 / 3000 r/min"],
      ["Feedback", "Incremental / Absolute"],
      ["Pairing", "SINAMICS V90"],
      ["Protection", "IP65"],
    ],
    description:
      "The Siemens SIMOTICS 1FL6 is a compact, high-dynamic servo motor designed to pair with SINAMICS V90 drives. It offers precise positioning and smooth running for a wide range of automation tasks.",
  },

  /* ---------- FL SWITCH ---------- */
  {
    id: "fl1005n",
    name: "Phoenix Contact FL SWITCH 1005N (1085039)",
    category: "fl-switch",
    brand: "Phoenix Contact",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=FL+SWITCH+1005N",
    short: "5-port unmanaged industrial Ethernet switch.",
    specs: [
      ["Ports", "5 x RJ45"],
      ["Speed", "10/100 Mbps"],
      ["Type", "Unmanaged"],
      ["Mounting", "DIN rail"],
      ["Order No.", "1085039"],
    ],
    description:
      "The Phoenix Contact FL SWITCH 1005N is a compact 5-port unmanaged industrial Ethernet switch for reliable plug-and-play network connectivity on the factory floor. DIN-rail mountable with robust industrial design.",
  },
  {
    id: "fl1008n",
    name: "Phoenix Contact FL SWITCH 1008N (1085256)",
    category: "fl-switch",
    brand: "Phoenix Contact",
    img: "https://placehold.co/600x450/eef4ff/0a2a66?text=FL+SWITCH+1008N",
    short: "8-port unmanaged industrial Ethernet switch.",
    specs: [
      ["Ports", "8 x RJ45"],
      ["Speed", "10/100 Mbps"],
      ["Type", "Unmanaged"],
      ["Mounting", "DIN rail"],
      ["Order No.", "1085256"],
    ],
    description:
      "The Phoenix Contact FL SWITCH 1008N is an 8-port unmanaged industrial Ethernet switch enabling fast, reliable network expansion for automation devices. Plug-and-play operation with rugged DIN-rail mounting.",
  },
];

/* Helper: get product by id */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

/* Helper: category name from id */
function categoryName(id) {
  const c = CATEGORIES.find((c) => c.id === id);
  return c ? c.name : id;
}
