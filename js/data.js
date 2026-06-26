/* ============================================================
   GENICO TECH SOLUTIONS — CENTRAL DATA STORE
   All product, company and contact data lives here.
   Replace `img` URLs with your own product photos later.
   ============================================================ */

/* Fallback shown if a product's assets/<id>.png isn't added yet.
   Self-contained SVG (no external request) so layouts never break. */
const IMG_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">' +
      '<rect width="100%" height="100%" fill="#eaf1ff"/>' +
      '<text x="50%" y="46%" font-family="Poppins,Arial,sans-serif" font-size="30" font-weight="700" fill="#0a2a66" text-anchor="middle">GENICO</text>' +
      '<text x="50%" y="58%" font-family="Inter,Arial,sans-serif" font-size="20" fill="#5a6b86" text-anchor="middle">Product image coming soon</text>' +
      "</svg>",
  );
if (typeof window !== "undefined") window.IMG_FALLBACK = IMG_FALLBACK;

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
  logo: "assets/logo.png",
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
  { id: "servo-drives", name: "Servo Drive" },
  { id: "mitsubishi-plc", name: "Mitsubishi PLC" },
  { id: "mitsubishi-servo-drives", name: "Mitsubishi Servo Drives" },
  { id: "delta-plc", name: "Delta PLC" },
  { id: "fl-switch", name: "Industrial Ethernet Switches" },
  { id: "delta-hmi", name: "Delta HMI" },
  { id: "ac-servo-motor", name: "AC Servo Motor" },
  { id: "mitsubishi-hmi", name: "Mitsubishi HMI" },
  { id: "high-voltage-circuit-breakers", name: "High Voltage Circuit Breakers" },
  { id: "shavison-smps", name: "Shavison SMPS" },
  {
    id: "mean-well-switch-mode-power-supply",
    name: "Mean Well Switch Mode Power Supply",
  },
  { id: "relay", name: "Relay" },
  { id: "signal-isolator", name: "Signal Isolator" },
  { id: "smps-power-supply", name: "SMPS Power Supply" },
  { id: "switch-mode-power-supply", name: "Switch Mode Power Supply" },
  { id: "siemens-servo", name: "Siemens Servo Motor" },
  { id: "industrial-wireless-devices", name: "Industrial Wireless Devices" },
  { id: "wireless-remote-control", name: "Wireless Remote Control" },
  { id: "smps", name: "SMPS" },
  { id: "new-items", name: "New Items" },
];

function mitsubishiVfdProduct({
  id,
  model,
  series,
  power,
  input = "380-480 V",
  phase = "Three phase",
  description,
}) {
  return {
    id,
    name: `Mitsubishi VFD ${model}`,
    category: "mitsubishi-vfd",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: `${power} ${series} variable frequency drive for industrial motor control.`,
    specs: [
      ["Series", series],
      ["Power Rating", power],
      ["Input Voltage", input],
      ["Phase", phase],
      ["Current Type", "AC"],
    ],
    description:
      description ||
      `The Mitsubishi ${model} is an AC variable frequency drive from the ${series} series. It is designed for reliable motor speed and torque control in pumps, fans, conveyors and industrial automation applications, with efficient operation and built-in protective features.`,
  };
}

const MITSUBISHI_VFD_PRODUCTS = [
  mitsubishiVfdProduct({
    id: "frd740036e16",
    model: "FR-D740-036-E16",
    series: "FR-D740",
    power: "3.7 kW",
    input: "400 V",
    description:
      "The Mitsubishi FR-D740-036-E16 is a FR-D700 series VFD for precise AC motor control. It supports smooth motor operation, energy-efficient performance and flexible integration for industrial automation applications.",
  }),
  mitsubishiVfdProduct({
    id: "frd740080e16",
    model: "FR-D740-080-E16",
    series: "FR-D740",
    power: "3.7 kW / 5 HP",
    input: "400 V",
  }),
  mitsubishiVfdProduct({
    id: "frd740022e16",
    model: "FR-D740-022-E16",
    series: "FR-D740",
    power: "0.75 kW",
  }),
  mitsubishiVfdProduct({
    id: "frd740120e16",
    model: "FR-D740-120-E16",
    series: "FR-D740",
    power: "5.5 kW / 7.5 HP",
  }),
  mitsubishiVfdProduct({
    id: "frd720s070e16",
    model: "FR-D720S-070-E16",
    series: "FR-D720S",
    power: "1.5 kW / 2 HP",
    input: "200-240 V",
    phase: "Single phase",
  }),
  mitsubishiVfdProduct({
    id: "frd720s100e16",
    model: "FR-D720S-100-E16",
    series: "FR-D720S",
    power: "2.2 kW / 3 HP",
    input: "200-240 V",
    phase: "Single phase",
  }),
  mitsubishiVfdProduct({
    id: "frd740160e16",
    model: "FR-D740-160-E16",
    series: "FR-D740",
    power: "7.5 kW / 10 HP",
  }),
  mitsubishiVfdProduct({
    id: "frd740050e16",
    model: "FR-D740-050-E16",
    series: "FR-D740",
    power: "2.2 kW / 3 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740026e16",
    model: "FR-E740-026-E16",
    series: "FR-E740",
    power: "0.75 kW / 1 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740040e16",
    model: "FR-E740-040-E16",
    series: "FR-E740",
    power: "1.5 kW / 2 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740060e16",
    model: "FR-E740-060-E16",
    series: "FR-E740",
    power: "2.2 kW / 3 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740095e16",
    model: "FR-E740-095-E16",
    series: "FR-E740",
    power: "3.7 kW / 5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740120e16",
    model: "FR-E740-120-E16",
    series: "FR-E740",
    power: "5.5 kW / 7.5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740230e16",
    model: "FR-E740-230-E16",
    series: "FR-E740",
    power: "11 kW / 15 HP",
    input: "400 V",
  }),
  mitsubishiVfdProduct({
    id: "fre740300e16",
    model: "FR-E740-300-E16",
    series: "FR-E740",
    power: "15 kW / 20 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400016e16",
    model: "FR-E840-0016-E16",
    series: "FR-E840",
    power: "0.4 kW / 0.5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400026e16",
    model: "FR-E840-0026-E16",
    series: "FR-E840",
    power: "0.75 kW / 1 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400095e16",
    model: "FR-E840-0095-E16",
    series: "FR-E840",
    power: "3.7 kW / 5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400120e16",
    model: "FR-E840-0120-E16",
    series: "FR-E840",
    power: "5.5 kW / 7.5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400040e16",
    model: "FR-E840-0040-E16",
    series: "FR-E840",
    power: "1.5 kW / 2 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400060e16",
    model: "FR-E840-0060-E16",
    series: "FR-E840",
    power: "2.2 kW / 3 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400300e16",
    model: "FR-E840-0300-E16",
    series: "FR-E840",
    power: "15 kW / 20 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400380e16",
    model: "FR-E840-0380-E16",
    series: "FR-E840",
    power: "11 kW / 15 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400440e16",
    model: "FR-E840-0440-E16",
    series: "FR-E840",
    power: "15 kW / 20 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre8400230e16",
    model: "FR-E840-0230-E16",
    series: "FR-E840",
    power: "11 kW / 15 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000126260",
    model: "FR-A840-00126-2-60",
    series: "FR-A840",
    power: "3.7 kW / 5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000380260",
    model: "FR-A840-00380-2-60",
    series: "FR-A840",
    power: "18.5 kW",
  }),
  mitsubishiVfdProduct({
    id: "fra84002160260",
    model: "FR-A840-02160-2-60",
    series: "FR-A840",
    power: "75 kW / 100 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000620260",
    model: "FR-A840-00620-2-60",
    series: "FR-A840",
    power: "620 kW",
    input: "500 V",
    description:
      "The Mitsubishi FR-A840-00620-2-60 is a high-performance AC VFD for large industrial applications requiring precise speed and torque control. It includes advanced control algorithms, robust protection features and efficient operation.",
  }),
  mitsubishiVfdProduct({
    id: "frd720s025e16",
    model: "FR-D720S-025-E16",
    series: "FR-D720S",
    power: "0.4 kW / 0.5 HP",
    input: "200-240 V",
    phase: "Single phase",
  }),
  mitsubishiVfdProduct({
    id: "fre8400170e16",
    model: "FR-E840-0170-E16",
    series: "FR-E840",
    power: "7.5 kW / 10 HP",
  }),
  mitsubishiVfdProduct({
    id: "fre740170e16",
    model: "FR-E740-170-E16",
    series: "FR-E740",
    power: "7.5 kW / 10 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000038260",
    model: "FR-A840-00038-2-60",
    series: "FR-A840",
    power: "0.75 kW / 1 HP",
    input: "200-240 V",
  }),
  mitsubishiVfdProduct({
    id: "fra84000052260",
    model: "FR-A840-00052-2-60",
    series: "FR-A840",
    power: "Medium-small duty",
  }),
  mitsubishiVfdProduct({
    id: "fra84000083260",
    model: "FR-A840-00083-2-60",
    series: "FR-A840",
    power: "2.2 kW / 3 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000023260",
    model: "FR-A840-00023-2-60",
    series: "FR-A840",
    power: "0.4 kW / 0.5 HP",
  }),
  mitsubishiVfdProduct({
    id: "fra84000310260",
    model: "FR-A840-00310-2-60",
    series: "FR-A840",
    power: "11 kW",
  }),
];

function deltaVfdProduct({ id, model, power, series = "MS300", voltage = "460 V" }) {
  return {
    id,
    name: `Delta ${model} MS300 AC Motor Drive`,
    category: "delta-vfd",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: `${power} Delta ${series} variable frequency drive for industrial motor control.`,
    specs: [
      ["Series", series],
      ["Power Rating", power],
      ["Voltage Supply", voltage],
      ["Current Type", "AC"],
      ["Applications", "Pumps, fans, conveyors, HVAC"],
    ],
    description:
      `The Delta ${model} is a high-efficiency ${series} variable frequency drive designed for smooth AC motor speed control in industrial automation, pumps, fans and conveyor systems. It supports reliable operation, energy savings and protection features for safe installation.`,
  };
}

const DELTA_VFD_PRODUCTS = [
  deltaVfdProduct({
    id: "vfd5a5ms43ansaa",
    model: "VFD5A5MS43ANSAA",
    power: "2.2 kW / 3 HP",
  }),
  deltaVfdProduct({
    id: "vfd1a5ms43ansaa",
    model: "VFD1A5MS43ANSAA",
    power: "0.4 kW / 0.5 HP",
  }),
  deltaVfdProduct({
    id: "vfd2a7ms43ansaa",
    model: "VFD2A7MS43ANSAA",
    power: "0.75 kW / 1 HP",
  }),
  deltaVfdProduct({
    id: "vfd4a2ms43ansaa",
    model: "VFD4A2MS43ANSAA",
    power: "1.5 kW / 2 HP",
  }),
  deltaVfdProduct({
    id: "vfd13ams43ansa",
    model: "VFD13AMS43ANSA",
    power: "5.5 kW / 7.5 HP",
  }),
  deltaVfdProduct({
    id: "vfd17ams43ansaa",
    model: "VFD17AMS43ANSAA",
    power: "7.5 kW / 10 HP",
  }),
  deltaVfdProduct({
    id: "vfd25ams43ansaa",
    model: "VFD25AMS43ANSAA",
    power: "11 kW / 15 HP",
  }),
  deltaVfdProduct({
    id: "vfd32ams43ansaa",
    model: "VFD32AMS43ANSAA",
    power: "15 kW / 20 HP",
  }),
  deltaVfdProduct({
    id: "vfd38ams43ansaa",
    model: "VFD38AMS43ANSAA",
    power: "18.5 kW / 25 HP",
  }),
  deltaVfdProduct({
    id: "vfd45ams43ansaa",
    model: "VFD45AMS43ANSAA",
    power: "22 kW / 30 HP",
  }),
];

function hjKsServoProduct({
  id,
  model,
  power,
  torque,
  speed,
  brake,
  oilSeal = "With oil seal",
  inertia = "Standard",
}) {
  return {
    id,
    name: `${model} AC Servo Motor`,
    category: "ac-servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: `${power}, ${torque} AC servo motor for precise industrial motion control.`,
    specs: [
      ["Rated Output", power],
      ["Rated Speed", speed],
      ["Torque", torque],
      ["Shaft", brake],
      ["Protection", oilSeal],
    ],
    description:
      `The ${model} AC servo motor is designed for precise and reliable performance in industrial automation applications. It delivers ${torque} torque with ${power} output at ${speed}, making it suitable for ${inertia.toLowerCase()} motion-control tasks with smooth operation and durable construction.`,
  };
}

const ADDITIONAL_SERVO_PRODUCTS = [
  {
    id: "hgsn302bjk",
    name: "Mitsubishi HG-SN302BJK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "3kW keyway-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "3 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "14.3 Nm"],
      ["Shaft", "Keyway shaft with brake"],
      ["Compatibility", "SSCNET III/H"],
    ],
    description:
      "The Mitsubishi HG-SN302BJK is a high-performance AC servo motor drive for CNC machines, robotics, industrial automation and packaging systems. It delivers 14.3 Nm torque with 3 kW output and brake support for safe, precise positioning.",
  },
  hjKsServoProduct({
    id: "hjks102j",
    model: "HJ-KS102J",
    power: "1 kW",
    torque: "4.8 Nm",
    speed: "2000 RPM",
    brake: "Plain shaft without brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks152j",
    model: "HJ-KS152J",
    power: "1.5 kW",
    torque: "7.2 Nm",
    speed: "2000 RPM",
    brake: "Plain shaft without brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks152bj",
    model: "HJ-KS152BJ",
    power: "1.5 kW",
    torque: "7.2 Nm",
    speed: "2000 RPM",
    brake: "Plain shaft with brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks13j",
    model: "HJ-KS13J",
    power: "100 W",
    torque: "0.32 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    inertia: "light-duty precision",
  }),
  hjKsServoProduct({
    id: "hjks23j",
    model: "HJ-KS23J",
    power: "200 W",
    torque: "0.64 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    oilSeal: "Without oil seal",
    inertia: "light-to-medium duty",
  }),
  hjKsServoProduct({
    id: "hjks103aj",
    model: "HJ-KS103AJ",
    power: "1 kW",
    torque: "3.2 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    inertia: "ultra low inertia rapid-response",
  }),
  hjKsServoProduct({
    id: "hjks103abj",
    model: "HJ-KS103ABJ",
    power: "1 kW",
    torque: "3.2 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft with brake",
    inertia: "ultra low inertia rapid-response",
  }),
  hjKsServoProduct({
    id: "hjks103j",
    model: "HJ-KS103J",
    power: "1 kW",
    torque: "3.2 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    inertia: "medium-duty precision",
  }),
  hjKsServoProduct({
    id: "hjks103bj",
    model: "HJ-KS103BJ",
    power: "1 kW",
    torque: "3.2 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft with brake",
    inertia: "medium-duty precision",
  }),
  hjKsServoProduct({
    id: "hjks153j",
    model: "HJ-KS153J",
    power: "1.5 kW",
    torque: "4.8 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks153bj",
    model: "HJ-KS153BJ",
    power: "1.5 kW",
    torque: "4.8 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft with brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks203j",
    model: "HJ-KS203J",
    power: "2 kW",
    torque: "6.4 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft without brake",
    inertia: "medium-to-heavy duty",
  }),
  hjKsServoProduct({
    id: "hjks203bj",
    model: "HJ-KS203BJ",
    power: "2 kW",
    torque: "6.4 Nm",
    speed: "3000 RPM",
    brake: "Plain shaft with brake",
    inertia: "medium-to-heavy duty",
  }),
];

const MORE_SERVO_PRODUCTS = [
  {
    id: "hgsn102j",
    name: "Mitsubishi HG-SN102J Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1kW straight-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "1 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "4.77 Nm"],
      ["Shaft", "Plain shaft without brake"],
      ["Compatibility", "SSCNET III/H"],
    ],
    description:
      "The Mitsubishi HG-SN102J is a high-performance AC servo motor drive for CNC machines, robotics, packaging systems and industrial automation. It delivers 4.77 Nm torque with 1 kW output for accurate, reliable motion control.",
  },
  {
    id: "hgsn152bj",
    name: "Mitsubishi HG-SN152BJ Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1.5kW straight-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "1.5 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "7.16 Nm"],
      ["Shaft", "Plain shaft with brake"],
      ["Compatibility", "SSCNET III/H"],
    ],
    description:
      "The Mitsubishi HG-SN152BJ is a 1.5kW AC servo motor drive designed for precise industrial motion control. Its brake-equipped shaft supports safe stopping and reliable positioning in demanding automation systems.",
  },
  {
    id: "hgsn202j",
    name: "Mitsubishi HG-SN202J Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "2kW straight-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "2 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "9.55 Nm"],
      ["Shaft", "Plain shaft without brake"],
      ["Compatibility", "SSCNET III/H"],
    ],
    description:
      "The Mitsubishi HG-SN202J servo motor drive delivers 9.55 Nm torque with 2 kW output for heavy-duty industrial automation. It supports precise speed, torque and position control for CNC, robotics and packaging applications.",
  },
  {
    id: "hgsn302j",
    name: "Mitsubishi HG-SN302J Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "3kW straight-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "3 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "14.3 Nm"],
      ["Shaft", "Plain shaft without brake"],
      ["Voltage", "200 V class"],
    ],
    description:
      "The Mitsubishi HG-SN302J is a 3kW medium-inertia AC servo motor drive for high-precision heavy-duty automation. It delivers 14.3 Nm torque with smooth operation for CNC machines, robotics and industrial motion systems.",
  },
  {
    id: "hgsn302bj",
    name: "Mitsubishi HG-SN302BJ Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "3kW straight-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "3 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "14.3 Nm"],
      ["Shaft", "Plain shaft with brake"],
      ["Voltage", "200 V class"],
    ],
    description:
      "The Mitsubishi HG-SN302BJ is a 3kW AC servo motor drive for precise motion control in demanding industrial applications. Its brake-equipped shaft supports safe stopping and repeatable positioning.",
  },
  {
    id: "hgsn302jk",
    name: "Mitsubishi HG-SN302JK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "3kW keyway-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "3 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "14.3 Nm"],
      ["Shaft", "Keyway shaft without brake"],
      ["Voltage", "200 V class"],
    ],
    description:
      "The Mitsubishi HG-SN302JK is a high-performance 3kW servo motor drive with keyway shaft for secure coupling. It is suitable for heavy-duty CNC, robotics, packaging and industrial automation systems.",
  },
];

const MITSUBISHI_PLC_PRODUCTS = [
  {
    id: "fx5u32mr",
    name: "Mitsubishi FX5U-32MR PLC",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "32-point MELSEC iQ-F FX5U PLC with relay outputs.",
    specs: [
      ["Series", "MELSEC iQ-F FX5U"],
      ["I/O Points", "32 (16 in / 16 out)"],
      ["Output Type", "Relay"],
      ["Power Supply", "240 V AC"],
      ["Current Type", "AC"],
    ],
    description:
      "The Mitsubishi FX5U-32MR is a versatile high-performance PLC from the FX5 series. It provides fast processing, enhanced communication capability and flexible expansion for precise industrial automation control.",
  },
  {
    id: "fx3u4adadp",
    name: "Mitsubishi FX3U-4AD-ADP PLC Module",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "Analog adapter module for Mitsubishi FX3U PLC systems.",
    specs: [
      ["Series", "MELSEC-F FX3U"],
      ["Module Type", "Analog input adapter"],
      ["Channels", "4 analog inputs"],
      ["Power Supply", "24 V DC"],
      ["Current Type", "DC"],
    ],
    description:
      "The Mitsubishi FX3U-4AD-ADP is an analog input adapter module for FX3U PLC systems. It expands control capability for precise analog signal measurement in process monitoring and automation applications.",
  },
  {
    id: "fx516etess",
    name: "Mitsubishi FX5-16ET/ESS PLC Module",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "16-point MELSEC iQ-F transistor I/O module for FX5 systems.",
    specs: [
      ["Series", "MELSEC iQ-F"],
      ["I/O Points", "16"],
      ["Output Type", "Transistor"],
      ["Power Supply", "24 V DC"],
      ["Type", "I/O combined module"],
    ],
    description:
      "The Mitsubishi FX5-16ET/ESS is a compact I/O module for FX5 automation systems. It supports high-speed control, flexible expansion and reliable operation in small to medium industrial control panels.",
  },
  {
    id: "gc43mh32mrd",
    name: "Mitsubishi GC43MH-32MR-D PLC",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "Compact GOC43 series PLC with built-in display and communication options.",
    specs: [
      ["Series", "GOC43"],
      ["Model", "GC43MH-32MR-D"],
      ["Type", "Programmable logic controller"],
      ["Display", "Built-in color display"],
      ["Use", "Machine automation"],
    ],
    description:
      "The Mitsubishi GC43MH-32MR-D is a compact programmable logic controller from the GOC43 series. It is designed as a versatile automation solution with built-in display, touch interface and communication options.",
  },
];

const DELTA_PLC_PRODUCTS = [
  {
    id: "dvp04ads",
    name: "Delta DVP04AD-S PLC Module",
    category: "delta-plc",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "4-channel analog input module for Delta DVP SS2 PLC systems.",
    specs: [
      ["Series", "DVP SS2"],
      ["Module Type", "Analog input"],
      ["Channels", "4 analog inputs"],
      ["Voltage", "24 V DC"],
      ["Interface", "RS-232"],
    ],
    description:
      "The Delta DVP04AD-S is a compact analog input module for small automation applications. It handles sensor and process signals for temperature control, monitoring and precision control tasks.",
  },
  {
    id: "dvp14ss211r",
    name: "Delta DVP14SS211R PLC",
    category: "delta-plc",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "14-point compact Delta DVP SS2 PLC with relay outputs.",
    specs: [
      ["Series", "DVP SS2"],
      ["I/O Points", "14 (8 in / 6 out)"],
      ["Output Type", "Relay"],
      ["Interface", "RS-232"],
      ["Controller Type", "Compact PLC"],
    ],
    description:
      "The Delta DVP14SS211R is a compact PLC for small to medium automation tasks. It offers built-in communication, expansion options and reliable relay output control for machinery and process automation.",
  },
  {
    id: "dvp06xas",
    name: "Delta DVP06XA-S PLC",
    category: "delta-plc",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "Compact 6-point Delta PLC for simple automation tasks.",
    specs: [
      ["I/O Points", "6 (4 in / 2 out)"],
      ["Output Type", "Relay"],
      ["Interface", "RS-232"],
      ["Voltage", "24 V DC"],
      ["Model", "DVP06XA-S"],
    ],
    description:
      "The Delta DVP06XA-S is a compact and cost-effective PLC for simple machine control. It offers basic I/O handling in a small form factor for equipment and embedded automation applications.",
  },
];

const RELAY_PRODUCTS = [
  {
    id: "plcosc24dc24dc",
    name: "PLC-OSC-24DC-24DC Relay Module",
    category: "relay",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "24V DC socket relay module for DIN-rail PLC interface wiring.",
    specs: [
      ["Load Voltage", "5-60 V DC"],
      ["Load Current", "10 A"],
      ["Control Voltage", "20-32 V DC"],
      ["Phase Type", "Single phase"],
      ["Mounting", "DIN rail"],
    ],
    description:
      "The PLC-OSC-24DC-24DC relay module is used for PLC interface switching in control panels. Its DIN-rail mounting and DC switching capability make it suitable for industrial automation wiring.",
  },
];

const ETHERNET_SWITCH_PRODUCTS = [
  {
    id: "fl1016n",
    name: "Phoenix Contact FL SWITCH 1016N",
    category: "fl-switch",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "16-port unmanaged industrial Ethernet switch for DIN-rail networks.",
    specs: [
      ["Ports", "16 x RJ45"],
      ["Speed", "10/100 Mbps"],
      ["Type", "Unmanaged"],
      ["Mounting", "DIN rail"],
      ["Temperature", "-10 to 70 C"],
    ],
    description:
      "The Phoenix Contact FL SWITCH 1016N is a narrow unmanaged industrial Ethernet switch with sixteen RJ45 ports. It supports automatic transmission speed detection, autocrossing and QoS for reliable factory network expansion.",
  },
];

const DELTA_HMI_PRODUCTS = [
  {
    id: "dop107ev",
    name: "Delta DOP-107EV HMI",
    category: "delta-hmi",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "7-inch Delta touchscreen HMI with Ethernet, USB and serial connectivity.",
    specs: [
      ["Display", "7 inch"],
      ["Resolution", "800x480"],
      ["RAM", "256 MB"],
      ["Ports", "COM, Ethernet, USB"],
      ["Type", "Touchscreen HMI"],
    ],
    description:
      "The Delta DOP-107EV is a 7-inch widescreen HMI with a high-resolution TFT display. It supports multiple communication ports for integration with Delta and third-party PLCs in industrial control systems.",
  },
  {
    id: "dop103bq",
    name: "Delta DOP-103BQ HMI",
    category: "delta-hmi",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "4.3-inch compact Delta HMI for space-constrained control panels.",
    specs: [
      ["Display", "4.3 inch"],
      ["Resolution", "480x272"],
      ["RAM", "256 MB"],
      ["Ports", "2 serial COM ports"],
      ["Type", "Touchscreen HMI"],
    ],
    description:
      "The Delta DOP-103BQ is a compact 4.3-inch touchscreen HMI for small industrial panels. It supports serial communication and provides a user-friendly interface for monitoring and machine control.",
  },
  {
    id: "dop103wq",
    name: "Delta DOP-103WQ HMI",
    category: "delta-hmi",
    brand: "Delta",
    img: IMG_FALLBACK,
    short: "Delta touchscreen HMI with 480x272 display and expansion COM support.",
    specs: [
      ["Display", "4.3 inch"],
      ["Resolution", "480x272"],
      ["RAM", "512 MB"],
      ["Ports", "2 COM ports and 1 extension COM port"],
      ["Type", "Touchscreen HMI"],
    ],
    description:
      "The Delta DOP-103WQ is a compact touchscreen HMI for industrial control applications. It provides serial communication options, durable operation and an intuitive interface for improving operator efficiency.",
  },
];

const MORE_MITSUBISHI_HMI_PRODUCTS = [
  {
    id: "gs2110wtbdn",
    name: "Mitsubishi GS2110-WTBD-N HMI",
    category: "mitsubishi-hmi",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "10.4-inch GOT SIMPLE touchscreen HMI for industrial machine control.",
    specs: [
      ["Display", "10.4 inch"],
      ["Resolution", "800 x 480"],
      ["Series", "GOT SIMPLE"],
      ["Power Supply", "24 V DC"],
      ["Current Type", "DC"],
    ],
    description:
      "The Mitsubishi GS2110-WTBD-N is a GOT SIMPLE HMI for industrial monitoring and machine operation. It provides a touchscreen operator interface with robust connectivity for integration with PLCs and automation systems.",
  },
  {
    id: "gs2107wtbdn",
    name: "Mitsubishi GS2107-WTBD-N HMI",
    category: "mitsubishi-hmi",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "7-inch GOT SIMPLE color touchscreen HMI for automation panels.",
    specs: [
      ["Display", "7 inch"],
      ["Resolution", "800 x 480"],
      ["Series", "GOT SIMPLE"],
      ["Power Supply", "24 V DC"],
      ["Current Type", "DC"],
    ],
    description:
      "The Mitsubishi GS2107-WTBD-N is a 7-inch color touchscreen HMI for industrial automation applications. It offers intuitive visualization, flexible connectivity and dependable operation for machine monitoring and process control.",
  },
];

const MORE_MITSUBISHI_VFD_PRODUCTS = [
  mitsubishiVfdProduct({
    id: "fra84000770260",
    model: "FR-A840-00770-2-60",
    series: "FR-A840",
    power: "30 kW / 37 kW fan-pump duty",
    description:
      "The Mitsubishi FR-A840-00770-2-60 is a premium FR-A800-E series variable frequency drive for demanding industrial motor control. It supports three-phase 380-500 V input, advanced vector control, Safe Torque Off and reliable operation for pumps, fans, conveyors and general machinery.",
  }),
];

const SIGNAL_ISOLATOR_PRODUCTS = [
  {
    id: "phoenix-contact-signal-isolator",
    name: "Phoenix Contact Signal Isolator",
    category: "signal-isolator",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "DIN-rail signal isolator for RTD to 4-20 mA industrial signals.",
    specs: [
      ["Input Signal", "RTD"],
      ["Output Signal", "4-20 mA"],
      ["Channels", "1 channel"],
      ["Isolation Voltage", "2.5 kV"],
      ["Power Supply", "24 V DC"],
    ],
    description:
      "The Phoenix Contact signal isolator provides reliable isolation and conversion for industrial analog signals. It is DIN-rail mountable and suitable for control panels, process monitoring and instrumentation wiring.",
  },
  {
    id: "pr-electronics-slim-isolator",
    name: "PR Electronics Slim Isolator",
    category: "signal-isolator",
    brand: "PR Electronics",
    img: IMG_FALLBACK,
    short: "Slim DIN-rail signal isolator for 24V industrial analog signals.",
    specs: [
      ["Rated Voltage", "24 V DC"],
      ["Signal Current", "4-20 mA"],
      ["Type", "Signal isolator / conditioner"],
      ["Poles", "1 pole"],
      ["Installation", "Indoor"],
    ],
    description:
      "The PR Electronics slim isolator is used for conditioning and isolating low-voltage industrial signals such as 4-20 mA and 0-10 V. It helps improve signal reliability and electrical separation in automation systems.",
  },
  {
    id: "secomea-analog-splitter",
    name: "Secomea Analog Splitter",
    category: "signal-isolator",
    brand: "Secomea",
    img: IMG_FALLBACK,
    short: "DIN-rail isolated splitter with 1-in / 2-out signal routing.",
    specs: [
      ["Signal Type", "RF"],
      ["Port Count", "1 in / 2 out"],
      ["Frequency Range", "5-1000 MHz"],
      ["Connector", "BNC"],
      ["Mounting", "DIN rail"],
    ],
    description:
      "The Secomea analog splitter is used for industrial signal splitting and isolation applications. Its DIN-rail mounting and compact form make it suitable for automation panels and signal distribution setups.",
  },
  {
    id: "pr-signal-splitter",
    name: "PR Signal Splitter",
    category: "signal-isolator",
    brand: "PR Electronics",
    img: IMG_FALLBACK,
    short: "DIN-rail signal splitter for analog industrial signals.",
    specs: [
      ["Signal Type", "4-20 mA / 0-10 V"],
      ["Port Count", "1 in / 2 out"],
      ["Mounting", "DIN rail"],
      ["Type", "Signal splitter"],
      ["Use", "Industrial signal distribution"],
    ],
    description:
      "The PR signal splitter is used to split analog industrial signals such as 4-20 mA or 0-10 V for multiple receiving devices. It supports reliable panel wiring and clean signal distribution.",
  },
];

const MORE_SMPS_PRODUCTS = [
  {
    id: "shavison-bl2450",
    name: "Shavison BL2450 SMPS",
    category: "shavison-smps",
    brand: "Shavison",
    img: IMG_FALLBACK,
    short: "24V DC Shavison SMPS for low-to-mid industrial power applications.",
    specs: [
      ["Output Voltage", "24 V DC"],
      ["Output Current", "5 A"],
      ["Wattage", "60 W"],
      ["Model", "BL2450"],
      ["Input", "230 V AC"],
    ],
    description:
      "The Shavison BL2450 is a switched-mode power supply for stable 24V DC power conversion. It is suited to industrial control panels and includes protection features for dependable operation.",
  },
  {
    id: "shavison-g3125024",
    name: "Shavison G31-250-24 SMPS",
    category: "shavison-smps",
    brand: "Shavison",
    img: IMG_FALLBACK,
    short: "250W Shavison switched-mode power supply with 24V DC output.",
    specs: [
      ["Output Voltage", "24 V DC"],
      ["Wattage", "250 W"],
      ["Model", "G31-250-24"],
      ["Frequency", "60 Hz"],
      ["Input", "230 V AC"],
    ],
    description:
      "The Shavison G31-250-24 is a 250W SMPS designed for industrial and electronic applications. It provides stable 24V DC output with built-in protection against overvoltage, overcurrent and short circuit conditions.",
  },
  {
    id: "shavison-g4125024",
    name: "Shavison G41-250-24 SMPS",
    category: "shavison-smps",
    brand: "Shavison",
    img: IMG_FALLBACK,
    short: "250W Shavison G41 series switched-mode power supply.",
    specs: [
      ["Output Voltage", "24 V DC"],
      ["Wattage", "250 W"],
      ["Model", "G41-250-24"],
      ["Frequency", "60 Hz"],
      ["Input", "230 V AC"],
    ],
    description:
      "The Shavison G41-250-24 is a 250W switched-mode power supply for industrial DC power needs. It delivers stable output and includes protection features for safe continuous operation.",
  },
  {
    id: "meanwell-npb120024",
    name: "Mean Well NPB-1200-24 SMPS",
    category: "mean-well-switch-mode-power-supply",
    brand: "Mean Well",
    img: IMG_FALLBACK,
    short: "1200W enclosed Mean Well NPB series power supply with 24V output.",
    specs: [
      ["Series", "NPB"],
      ["Output Voltage", "24 V"],
      ["Output Power", "1200 W"],
      ["Input Voltage", "90-264 V AC"],
      ["Mounting", "Enclosed"],
    ],
    description:
      "The Mean Well NPB-1200-24 is an enclosed industrial SMPS with 24V output and high power capacity. It includes protections for overload, overvoltage, short circuit and overtemperature conditions.",
  },
  {
    id: "meanwell-npp45012",
    name: "Mean Well NPP-450-12 SMPS",
    category: "mean-well-switch-mode-power-supply",
    brand: "Mean Well",
    img: IMG_FALLBACK,
    short: "450W Mean Well NPP series enclosed SMPS with 12V output.",
    specs: [
      ["Series", "NPP"],
      ["Output Voltage", "12 V"],
      ["Output Power", "450 W"],
      ["Input Voltage", "90-264 V AC"],
      ["Mounting", "Enclosed"],
    ],
    description:
      "The Mean Well NPP-450-12 is a single-output enclosed power supply for industrial, medical and LED driver applications. It provides reliable 12V DC output with standard protection features.",
  },
  {
    id: "meanwell-npb45012",
    name: "Mean Well NPB-450-12 SMPS",
    category: "mean-well-switch-mode-power-supply",
    brand: "Mean Well",
    img: IMG_FALLBACK,
    short: "480W Mean Well NPB series enclosed SMPS with 12V output.",
    specs: [
      ["Series", "NPB"],
      ["Output Voltage", "12 V"],
      ["Output Power", "480 W"],
      ["Input Voltage", "90-264 V AC"],
      ["Mounting", "Enclosed"],
    ],
    description:
      "The Mean Well NPB-450-12 is an enclosed switch-mode power supply for industrial and LED driver applications. It provides dependable 12V DC output with overload, overvoltage and short-circuit protection.",
  },
  {
    id: "meanwell-hdr3012",
    name: "Mean Well HDR-30-12 SMPS",
    category: "mean-well-switch-mode-power-supply",
    brand: "Mean Well",
    img: IMG_FALLBACK,
    short: "Compact DIN-rail Mean Well HDR series 12V power supply.",
    specs: [
      ["Series", "HDR"],
      ["Model", "HDR-30-12"],
      ["Output Voltage", "12 V"],
      ["Mounting", "DIN rail"],
      ["Type", "AC-DC power supply"],
    ],
    description:
      "The Mean Well HDR-30-12 is a compact DIN-rail power supply for control panels and automation devices. Its slim housing is suited to space-constrained industrial installations.",
  },
  {
    id: "phoenix-quint-24v-smps",
    name: "Phoenix Contact 24V QUINT SMPS",
    category: "smps-power-supply",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "240W Phoenix Contact QUINT 24V AC-DC power supply.",
    specs: [
      ["Output Voltage", "24 V DC"],
      ["Output Current", "10 A"],
      ["Output Power", "240 W"],
      ["Input Voltage", "230 V AC"],
      ["Type", "AC-DC converter"],
    ],
    description:
      "The Phoenix Contact QUINT 24V SMPS is an industrial AC-DC converter for reliable control-panel power. It provides 24V DC output for PLCs, sensors and automation devices.",
  },
  {
    id: "meanwell-rsp100024",
    name: "Mean Well RSP-1000-24 SMPS",
    category: "mean-well-switch-mode-power-supply",
    brand: "Mean Well",
    img: IMG_FALLBACK,
    short: "1kW enclosed Mean Well RSP series SMPS with 24V output.",
    specs: [
      ["Series", "RSP"],
      ["Output Voltage", "24 V DC"],
      ["Output Power", "1000 W"],
      ["Input Voltage", "90-264 V AC"],
      ["Cooling", "Built-in fan"],
    ],
    description:
      "The Mean Well RSP-1000-24 is a 1kW single-output enclosed AC/DC power supply. It supports industrial 24V DC loads and includes fan cooling, remote control and protection functions.",
  },
];

const MORE_RELAY_PRODUCTS = [
  {
    id: "plcrsc24dc21",
    name: "PLC-RSC-24DC-21 Relay Module",
    category: "relay",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "24V DC PLC interface relay module for DIN-rail control wiring.",
    specs: [
      ["Series", "PLC-INTERFACE"],
      ["Controller Type", "Modular PLC"],
      ["I/O Points", "2 I/O"],
      ["Input Voltage", "24 V DC"],
      ["Use", "PLC interface relay"],
    ],
    description:
      "The PLC-RSC-24DC-21 relay module is used for interface switching between PLC outputs and field devices. It supports compact DIN-rail wiring in control panels.",
  },
  {
    id: "four-pole-electromechanical-relay",
    name: "4 Pole Electromechanical Relay",
    category: "relay",
    brand: "Industrial Relay",
    img: IMG_FALLBACK,
    short: "4PDT socket-mount electromechanical relay with 24V DC coil.",
    specs: [
      ["Pole Configuration", "4PDT"],
      ["Coil Voltage", "24 V DC"],
      ["Contact Current", "10 A"],
      ["Contact Form", "CO"],
      ["Mounting", "Socket mount"],
    ],
    description:
      "This 4 pole electromechanical relay is used for switching, isolating and multiplying control signals in automation panels. It supports socket mounting and 24V DC coil operation.",
  },
  {
    id: "phoenix-contact-safety-relay-10a",
    name: "10A Phoenix Contact Safety Relay",
    category: "relay",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "Phoenix Contact safety relay for industrial safety circuits.",
    specs: [
      ["Current", "10 A"],
      ["Mechanical Life", "Approx. 10,000,000 cycles"],
      ["Response Time", "<175 ms"],
      ["Release Time", "<20 ms"],
      ["Operating Temp", "-40 C to 55 C"],
    ],
    description:
      "The Phoenix Contact safety relay is designed for reliable safety-circuit switching in industrial automation systems. It offers fast response, long mechanical life and robust operation.",
  },
];

const MORE_NEW_ITEM_PRODUCTS = [
  {
    id: "phoenix-contact-surge-arrester",
    name: "Phoenix Contact Surge Arrester",
    category: "new-items",
    brand: "Phoenix Contact",
    img: IMG_FALLBACK,
    short: "VALVETRAB Type 2 surge protection device for power lines.",
    specs: [
      ["Series", "VALVETRAB"],
      ["Protection Class", "Type 2"],
      ["Application", "Power line"],
      ["Voltage", "275 V"],
      ["Max Discharge Current", "40 kA"],
    ],
    description:
      "The Phoenix Contact surge arrester is a Type 2 protection device for power-line surge protection. It helps protect electrical installations and control panels from transient overvoltage events.",
  },
  {
    id: "iot-dashboard-service",
    name: "IoT Dashboard",
    category: "new-items",
    brand: "Industrial IoT",
    img: IMG_FALLBACK,
    short: "On-site IoT dashboard maintenance and support service.",
    specs: [
      ["Service Type", "Maintenance and support"],
      ["Application", "Smart home / industrial monitoring"],
      ["Service Mode", "On-site"],
      ["Device Voltage", "12 V"],
      ["Network Type", "5G"],
    ],
    description:
      "The IoT Dashboard service supports monitoring and visualization projects for connected devices. It can be used for dashboards, maintenance support and on-site implementation depending on project complexity.",
  },
];

const MORE_WIRELESS_PRODUCTS = [
  {
    id: "eight-channel-serial-device-server",
    name: "8 Channel Serial Device Server",
    category: "industrial-wireless-devices",
    brand: "Industrial Networking",
    img: IMG_FALLBACK,
    short: "8-port RS232/RS485 serial device server with Ethernet connectivity.",
    specs: [
      ["Serial Ports", "8 ports"],
      ["Port Type", "RS232 + RS485"],
      ["Ethernet", "1 x 10/100"],
      ["Mounting", "DIN rail"],
      ["Protocols", "Modbus TCP"],
    ],
    description:
      "The 8 Channel Serial Device Server connects serial field devices to Ethernet networks. It supports RS232/RS485 ports, DIN-rail mounting and Modbus TCP communication for industrial networking applications.",
  },
  {
    id: "industrial-wireless-remote",
    name: "Industrial Wireless Remote",
    category: "wireless-remote-control",
    brand: "Industrial Wireless",
    img: IMG_FALLBACK,
    short: "8-key 433 MHz wireless remote control for crane applications.",
    specs: [
      ["Application", "Crane"],
      ["Keys", "8 keys"],
      ["Frequency", "433 MHz"],
      ["Control Type", "On / Off"],
      ["Range", "Up to 100 m"],
    ],
    description:
      "The Industrial Wireless Remote is designed for crane and machine control applications. It provides 8-key on/off operation over 433 MHz with battery-powered handheld use and up to 100 m range.",
  },
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
    img: "assets/Mitsubishi Servo Motor hgkn13.jpg",
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
    img: "assets/Mitsubishi Servo Motor hgkn23k.jpg",
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
    img: "assets/Mitsubishi Servo Motor hgkn43k.jpg",
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
    img: "assets/Mitsubishi Servo Motor hgkr43j.jpg",
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
  {
    id: "hjks13bj",
    name: "HJ-KS-13BJ AC Servo Motor",
    category: "ac-servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "100W AC servo motor with brake and oil seal for precise motion control.",
    specs: [
      ["Rated Output", "100 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.32 Nm"],
      ["Input Voltage", "200 VAC"],
      ["Shaft", "Plain shaft with brake and oil seal"],
    ],
    description:
      "The HJ-KS-13BJ AC servo motor is built for light-duty precision automation. It delivers 0.32 Nm torque at 100W and 3000 RPM, with brake and oil seal support for accurate positioning, safe stopping and better protection in industrial environments.",
  },
  {
    id: "hgkn73bj",
    name: "Mitsubishi HG-KN73BJ Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "750W MELSERVO JE servo motor with brake, oil seal and 17-bit feedback.",
    specs: [
      ["Rated Output", "750 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "2.4 Nm"],
      ["Voltage", "200 V class"],
      ["Feedback", "17-bit absolute encoder"],
    ],
    description:
      "The Mitsubishi HG-KN73BJ is a MELSERVO JE series AC brushless rotary servo motor with built-in electromagnetic brake, oil seal and high-resolution feedback. It is suitable for demanding positioning tasks that need reliable stopping and durable operation.",
  },
  {
    id: "hgkn43bk",
    name: "Mitsubishi HG-KN43BK Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "400W HG-KN servo motor with brake for accurate industrial positioning.",
    specs: [
      ["Rated Output", "400 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "1.3 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN43BK is a 400W low-inertia servo motor designed for accurate motion control in automation systems. Its brake-equipped shaft supports safe stopping and stable positioning in medium-duty machinery.",
  },
  {
    id: "hgkn13d",
    name: "Mitsubishi HG-KN13D Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "100W HG-KN servo motor with D-cut shaft for compact automation.",
    specs: [
      ["Rated Output", "100 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.32 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "D-cut shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-KN13D is a compact 100W AC servo motor for CNC machines, robotics and industrial automation. Its D-cut shaft design supports secure coupling while delivering reliable 3000 RPM precision performance.",
  },
  {
    id: "hgkn13bd",
    name: "Mitsubishi HG-KN13BD Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "100W D-shaft servo motor with brake for precise stopping.",
    specs: [
      ["Rated Output", "100 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.32 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "D-cut shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN13BD AC servo motor combines a compact 100W output with a D-cut shaft and integrated brake. It is suited for precise positioning in CNC, robotics and compact industrial automation systems.",
  },
  {
    id: "hgkn13b",
    name: "Mitsubishi HG-KN13B Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "100W HG-KN servo motor with straight shaft and brake.",
    specs: [
      ["Rated Output", "100 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.32 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN13B servo motor is designed for compact precision motion control. It provides 100W output, 0.32 Nm torque and a brake-equipped straight shaft for stable positioning and safe stopping.",
  },
  {
    id: "hgkn23",
    name: "Mitsubishi HG-KN23 Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "200W HG-KN servo motor with straight shaft for medium-duty automation.",
    specs: [
      ["Rated Output", "200 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.64 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-KN23 servo motor delivers 200W output and 0.64 Nm torque for smooth, precise control in CNC, robotics, packaging and general automation applications.",
  },
  {
    id: "hgkn23b",
    name: "Mitsubishi HG-KN23B Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "200W straight-shaft HG-KN servo motor with brake.",
    specs: [
      ["Rated Output", "200 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.64 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN23B is a 200W AC servo motor for accurate medium-duty motion control. Its brake-equipped shaft supports safe stopping and repeatable positioning in industrial machines.",
  },
  {
    id: "hgkn23bk",
    name: "Mitsubishi HG-KN23BK Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "200W keyway-shaft HG-KN servo motor with brake.",
    specs: [
      ["Rated Output", "200 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "0.64 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN23BK servo motor combines 200W output with a keyway shaft and brake, making it suitable for secure coupling, precise stopping and reliable medium-duty automation.",
  },
  {
    id: "hgkn43",
    name: "Mitsubishi HG-KN43 Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "400W HG-KN servo motor with keyway shaft for heavy-duty precision control.",
    specs: [
      ["Rated Output", "400 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "1.3 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-KN43 is a 400W AC servo motor for medium-to-heavy automation loads. It offers 1.3 Nm torque at 3000 RPM and supports precise positioning in CNC, robotics and packaging systems.",
  },
  {
    id: "hgkn43b",
    name: "Mitsubishi HG-KN43B Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "400W straight-shaft HG-KN servo motor with brake.",
    specs: [
      ["Rated Output", "400 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "1.3 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN43B servo motor is built for accurate and reliable motion control in industrial automation. It delivers 400W output and includes a brake for precise stopping and secure positioning.",
  },
  {
    id: "hgkn73j",
    name: "Mitsubishi HG-KN73J Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "750W straight-shaft HG-KN servo motor for high-performance automation.",
    specs: [
      ["Rated Output", "750 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "2.4 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-KN73J is a 750W AC servo motor suitable for CNC machines, robotics, packaging and industrial automation. It delivers 2.4 Nm torque at 3000 RPM for reliable high-performance motion.",
  },
  {
    id: "hgkn73jk",
    name: "Mitsubishi HG-KN73JK Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "750W keyway-shaft HG-KN servo motor without brake.",
    specs: [
      ["Rated Output", "750 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "2.4 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-KN73JK servo motor provides 750W output with a keyway shaft for secure mechanical coupling. It is suitable for high-performance automation requiring precise speed and position control.",
  },
  {
    id: "hgkn73bjk",
    name: "Mitsubishi HG-KN73BJK Servo Motor",
    category: "servo-motor",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "750W keyway-shaft HG-KN servo motor with brake.",
    specs: [
      ["Rated Output", "750 W"],
      ["Rated Speed", "3000 RPM"],
      ["Torque", "2.4 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-KN73BJK is a 750W servo motor with keyway shaft and brake for safe stopping and precise positioning. It is built for demanding CNC, robotics, packaging and automation applications.",
  },
  ...ADDITIONAL_SERVO_PRODUCTS,
  ...MORE_SERVO_PRODUCTS,

  /* ---------- SERVO DRIVES ---------- */
  {
    id: "hgsn102jk",
    name: "Mitsubishi HG-SN102JK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: "assets/Servo Drives hgsn102jk.jpg",
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
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: "assets/Mitsubishi HS-SN202JK.jpg",
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
  {
    id: "hgsn52j",
    name: "Mitsubishi HG-SN52J Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "500W medium-inertia HG-SN servo motor drive with straight shaft.",
    specs: [
      ["Rated Output", "500 W"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "2.39 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-SN52J is a 500W medium-inertia servo motor drive for CNC machines, robotics and industrial automation. It delivers stable 2000 RPM motion with reliable SSCNET III/H compatible performance.",
  },
  {
    id: "hgsn52bj",
    name: "Mitsubishi HG-SN52BJ Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "500W straight-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "500 W"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "2.39 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN52BJ is a 500W medium-inertia servo motor drive with brake support for precise stopping. It is suitable for industrial automation applications that require stable torque and reliable positioning.",
  },
  {
    id: "hgsn52jk",
    name: "Mitsubishi HG-SN52JK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "500W keyway-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "500 W"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "2.39 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-SN52JK provides 500W output with a keyway shaft for secure coupling in automation machinery. It supports accurate, smooth motion control for medium-duty industrial systems.",
  },
  {
    id: "hgsn52bjk",
    name: "Mitsubishi HG-SN52BJK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "500W keyway-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "500 W"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "2.39 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN52BJK is a 500W medium-inertia servo motor drive with keyway shaft and brake, making it a strong fit for safe stopping and precise positioning in industrial automation.",
  },
  {
    id: "hgsn102bj",
    name: "Mitsubishi HG-SN102BJ Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1kW straight-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "1.0 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "4.77 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN102BJ is a 1kW servo motor drive with brake support for safe stopping and accurate positioning. It is designed for CNC, robotics, packaging and demanding industrial automation tasks.",
  },
  {
    id: "hgsn102bjk",
    name: "Mitsubishi HG-SN102BJK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1kW keyway-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "1.0 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "4.77 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN102BJK servo motor drive delivers 1kW output and 4.77 Nm torque with keyway shaft and brake. It is suitable for high-precision machinery that needs secure coupling and safe stopping.",
  },
  {
    id: "hgsn152jk",
    name: "Mitsubishi HG-SN152JK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1.5kW keyway-shaft HG-SN servo motor drive without brake.",
    specs: [
      ["Rated Output", "1.5 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "7.16 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft without brake"],
    ],
    description:
      "The Mitsubishi HG-SN152JK is a 1.5kW medium-inertia servo motor drive for heavy-duty motion control. Its keyway shaft supports secure transmission in CNC, robotics and packaging applications.",
  },
  {
    id: "hgsn152bjk",
    name: "Mitsubishi HG-SN152BJK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "1.5kW keyway-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "1.5 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "7.16 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN152BJK combines 1.5kW output with brake and keyway shaft support for demanding automation applications. It provides reliable high-torque positioning and safe stopping.",
  },
  {
    id: "hgsn202bj",
    name: "Mitsubishi HG-SN202BJ Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "2kW straight-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "2.0 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "9.55 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Straight shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN202BJ is a 2kW high-power servo motor drive for robotics, CNC and industrial automation. It delivers 9.55 Nm torque and brake support for safe, precise control.",
  },
  {
    id: "hgsn202bjk",
    name: "Mitsubishi HG-SN202BJK Servo Motor Drive",
    category: "mitsubishi-servo-drives",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "2kW keyway-shaft HG-SN servo motor drive with brake.",
    specs: [
      ["Rated Output", "2.0 kW"],
      ["Rated Speed", "2000 RPM"],
      ["Torque", "9.55 Nm"],
      ["Voltage", "200 V class"],
      ["Shaft", "Keyway shaft with brake"],
    ],
    description:
      "The Mitsubishi HG-SN202BJK is a 2kW servo motor drive built for demanding high-torque automation. Its keyway shaft and brake configuration supports secure coupling, safe stopping and repeatable positioning.",
  },

  /* ---------- MITSUBISHI VFD ---------- */
  {
    id: "frd720s",
    name: "Mitsubishi Drive FR-D720S-042-E16",
    category: "mitsubishi-vfd",
    brand: "Mitsubishi",
    img: "assets/Mitsubishi VFD frd720s.jpg",
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
  ...MITSUBISHI_VFD_PRODUCTS,
  ...MORE_MITSUBISHI_VFD_PRODUCTS,

  /* ---------- DELTA VFD ---------- */
  {
    id: "vfd9a0ms43",
    name: "Delta VFD9A0MS43ANSAA MS300 AC Motor Drive",
    category: "delta-vfd",
    brand: "Delta",
    img: "assets/Delta VFD vfd9a0ms43.webp",
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
    img: "assets/Delta VFD vfd007el21w1.webp",
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
  ...DELTA_VFD_PRODUCTS,

  /* ---------- MITSUBISHI PLC ---------- */
  {
    id: "fx5uj40mrds",
    name: "Mitsubishi FX5UJ-40MR/DS PLC",
    category: "mitsubishi-plc",
    brand: "Mitsubishi",
    img: "assets/Mitsubishi PLC fx5uj40mrds.webp",
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
    img: "assets/11-mitsubishi-fx3u-32mr-plc.webp",
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
  ...MITSUBISHI_PLC_PRODUCTS,

  /* ---------- DELTA PLC ---------- */
  {
    id: "dvp16sp11r",
    name: "Delta DVP16SP11R PLC",
    category: "delta-plc",
    brand: "Delta",
    img: "assets/12-delta DVP16SP11R PLC.jpg",
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
  ...DELTA_PLC_PRODUCTS,
  ...RELAY_PRODUCTS,

  /* ---------- DELTA HMI ---------- */
  {
    id: "dop107cv",
    name: "Delta DOP107CV HMI",
    category: "delta-hmi",
    brand: "Delta",
    img: "assets/13-Delta DOP107CV HMI.jpg",
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
  ...DELTA_HMI_PRODUCTS,

  /* ---------- MITSUBISHI HMI ---------- */
  {
    id: "got2000",
    name: "Mitsubishi GOT2000 GS Series HMI",
    category: "mitsubishi-hmi",
    brand: "Mitsubishi",
    img: "assets/14-Mitsubish GOT2000 GS Series HMI.jpg",
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
  {
    id: "gs2107wtbd",
    name: "Mitsubishi HMI GS2107-WTBD",
    category: "mitsubishi-hmi",
    brand: "Mitsubishi",
    img: IMG_FALLBACK,
    short: "7-inch panel-mount Mitsubishi touchscreen HMI for machine monitoring.",
    specs: [
      ["Display", "7 inch"],
      ["Mounting", "Panel mount"],
      ["Phase", "Single phase"],
      ["Type", "Touchscreen HMI"],
      ["Use", "Machine and process control"],
    ],
    description:
      "The Mitsubishi GS2107-WTBD is a 7-inch touchscreen Human Machine Interface for machine monitoring and control. It provides intuitive graphics, reliable operation and easy integration for factories, conveyors, pumps and industrial automation systems.",
  },
  ...MORE_MITSUBISHI_HMI_PRODUCTS,

  /* ---------- SMPS / POWER SUPPLY ---------- */
  {
    id: "mdr60",
    name: "MDR-60 Series Meanwell SMPS",
    category: "smps",
    brand: "Meanwell",
    img: "assets/15-MDR-60 Series Meanwell SMPS.jpg",
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
    img: "assets/16-Shavison SMPS power supply.webp",
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
  ...MORE_SMPS_PRODUCTS,

  /* ---------- SIEMENS SERVO MOTORS ---------- */
  {
    id: "siemens-1fl6",
    name: "Siemens SIMOTICS 1FL6 Servo Motor",
    category: "siemens-servo",
    brand: "Siemens",
    img: "assets/17-Siemens SIMOTICS 1FL6 Sevor Motor.jpg",
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
    img: "assets/18-Phoenix Contact FL SWITCH 1005N (1085039).jpg",
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
    img: "assets/19- Phoenix Contact FL SWITCH 1008N (1085256).webp",
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
  ...ETHERNET_SWITCH_PRODUCTS,
  ...SIGNAL_ISOLATOR_PRODUCTS,
  ...MORE_RELAY_PRODUCTS,
  ...MORE_NEW_ITEM_PRODUCTS,
  ...MORE_WIRELESS_PRODUCTS,
];

const PRODUCT_IMAGE_OVERRIDES = {
  hjks13bj: "assets/hj-ks-13bj-servo-motor-drive-500x500.webp",
  hgkn73bj: "assets/mitsubhishi-hgkn73bj-servo-motor-500x500.webp",
  hgkn43bk: "assets/mitsubishi-hg-kn43b-servo-motor-drive-500x500.webp",
  hgkn13d: "assets/hg-kn13d-500x500.webp",
  hgkn13bd: "assets/hg-kn13bd-500x500.webp",
  hgkn23: "assets/mitsubishi-hg-kn23-servo-motor-drive-500x500.webp",
  hgkn23b: "assets/Mitsubishi HG-KN23B.webp",
  hgkn43: "assets/Mitsubishi HG-KN43.webp",
  hgkn43b: "assets/Mitsubishi HG-KN43B.webp",
  hgkn73j: "assets/Mitsubishi HG-KN73J.webp",
  hgkn73jk: "assets/Mitsubishi HG-KN73JK.webp",
  hgkn73bjk: "assets/HG-KN73BJK.webp",
  hgsn302bjk: "assets/Mitsubishi HG-SN302BJK.webp",
  hjks102j: "assets/hj-ks-102j-servo-motor-drive-500x500.webp",
  hjks152j: "assets/hj-ks152j-servo-motor-drive-500x500.webp",
  hjks152bj: "assets/hj-ks152bj-servo-motor-drive-500x500.webp",
  hjks13j: "assets/hj-ks13j-servo-motor-drive-500x500.webp",
  hjks23j: "assets/hj-ks23j-servo-motor-drive-500x500.webp",
  hjks103aj: "assets/hj-ks103aj-servo-motor-drive-500x500.webp",
  hjks103j: "assets/hj-ks103j-servo-motor-drive-500x500.webp",
  hjks153j: "assets/hj-ks153j-servo-motor-drive-500x500.webp",
  hjks153bj: "assets/hj-ks153bj-servo-motor-drive-500x500.webp",
  hjks203j: "assets/hj-ks203j-servo-motor-drive-500x500.webp",
  hjks203bj: "assets/hj-ks203bj-servo-motor-drive-500x500.webp",
  hgsn102j: "assets/Mitsubishi HG-SN102J.webp",
  hgsn202j: "assets/Mitsubishi HG-SN202J.webp",
  hgsn302bj: "assets/Mitsubishi HG-SN302BJ.webp",
  hgsn302jk: "assets/Mitsubishi HG-SN302JK.webp",
  hgsn52bj: "assets/Mitsubishi HG-SN52BJ.webp",
  hgsn102bj: "assets/Mitsubishi HG-SN102BJ.webp",
  hgsn102bjk: "assets/mitsubishi-hg-sn102bjk-servo-motor-drive-500x500.webp",
  hgsn152jk: "assets/Mitsubishi HG-SN152JK.webp",
  hgsn152bjk: "assets/Mitsubishi HG-SN152BJK.webp",
  hgsn202bj: "assets/Mitsubishi HG-SN202BJ.webp",
  frd740036e16: "assets/FR-D740-036-E16.webp",
  frd740080e16: "assets/mitsubishi-make-vfd-fr-d740-080-e16-500x500.webp",
  frd740022e16: "assets/Mitsubishi VFD FR-D740-022-E16.webp",
  frd740120e16: "assets/Mitsubishi VFD FR-D740-120-E16.webp",
  frd720s070e16: "assets/mitsubishi-vfd-fr-d720s-070-e16-variable-frequency-drive-500x500.webp",
  frd720s100e16: "assets/mitsubishi-vfd-fr-d720s-100-e16-500x500.webp",
  frd740160e16: "assets/Mitsubishi VFD FR-D740-160-E16.webp",
  frd740050e16: "assets/FR-D740-050-E16.webp",
  fre740040e16: "assets/mitsubishi-vfd-fr-e740-040-e16-500x500.webp",
  fre740060e16: "assets/FR-E740-060-E16.webp",
  fre740120e16: "assets/Mitsubishi VFD FR-E740-120-E16.webp",
  fre740230e16: "assets/Mitsubishi VFD FR-E740-230-E16.webp",
  fre740300e16: "assets/Mitsubishi VFD FR-E740-300-E16.webp",
  fre8400016e16: "assets/Mitsubishi VFD FR-E840-0016-E16.webp",
  fre8400026e16: "assets/Mitsubishi VFD FR-E840-0026-E16.webp",
  fra84000620260: "assets/mitsubhishi-fr-a840-00620-2-60-vfd-500x500.webp",
  fre740170e16: "assets/FR-E740-170-E16.webp",
  fra84000052260: "assets/Mitsubishi VFD FR-A840-00052-2-60.webp",
  fra84000310260: "assets/Mitsubishi VFD FR-A840-00310-2-60.webp",
  vfd5a5ms43ansaa: "assets/vfd5a5ms43ansaa-varibale-frequency-drive-500x500.webp",
  vfd1a5ms43ansaa: "assets/vfd1a5ms43ansaa-variable-frequency-drive-500x500.webp",
  vfd2a7ms43ansaa: "assets/vfd2a7ms43ansaa-delta-ms-300-ac-motor-drive-500x500.webp",
  vfd4a2ms43ansaa: "assets/vfd4a2ms43ansaa-variable-frequency-drive-500x500.webp",
  vfd13ams43ansa: "assets/vfd13ams43ansa-variable-frequency-drive-500x500.webp",
  vfd25ams43ansaa: "assets/vfd25ams43ansaa-variable-frequency-drive-500x500.webp",
  vfd38ams43ansaa: "assets/vfd38ams43ansaa-varibale-frequency-drive-500x500.webp",
  vfd45ams43ansaa: "assets/vfd45ams43ansaa-variable-frequency-drive-500x500.webp",
  fx5u32mr: "assets/mitsubhishi-fx-5u-32mr-plc-500x500.webp",
  fx3u4adadp: "assets/Mitsubishi Electric FX3U-4AD-ADP (PLC).webp",
  gs2107wtbd: "assets/mitsubishi-hmi-gs2107-wtbd-500x500.webp",
};

PRODUCTS.forEach((product) => {
  if (PRODUCT_IMAGE_OVERRIDES[product.id]) {
    product.img = PRODUCT_IMAGE_OVERRIDES[product.id];
  }
});

/* Helper: get product by id */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

/* Helper: category name from id */
function categoryName(id) {
  const c = CATEGORIES.find((c) => c.id === id);
  return c ? c.name : id;
}
