import {
  Home,
  Building2,
  PackageOpen,
  MapPin,
  Route as RouteIcon,
  ArrowUpDown,
  ShieldCheck,
  Car,
  Store,
  type LucideIcon,
} from "lucide-react";

import household from "@/assets/household-shifting.jpg";
import office from "@/assets/office-move.jpg";
import packing from "@/assets/packing-detail.jpg";
import loading from "@/assets/loading-truck.jpg";
import vehicle from "@/assets/vehicle-transport.jpg";
import highway from "@/assets/domestic-relocation.jpg";
import unloading from "@/assets/unloading.jpg";
import shop from "@/assets/shop-relocation.jpg";
import delivery from "@/assets/delivery-unpacking.jpg";
import boxes from "@/assets/boxes-stack.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  heroEyebrow: string;
  intro: string[];
  suitableFor: string[];
  process: { title: string; text: string }[];
  care: { heading: string; points: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "household-shifting",
    title: "Household Shifting",
    short: "Full home moves packed, loaded and delivered with care.",
    blurb:
      "From a single bedroom to a full family home, we pack room by room, protect furniture and keep your belongings organised until everything is placed in your new house.",
    icon: Home,
    image: household,
    imageAlt: "Movers wrapping a sofa and packing household items in a bright living room",
    heroEyebrow: "House shifting Rajahmundry",
    intro: [
      "House shifting is the work we do most. Our team surveys your rooms, decides what needs extra protection, and packs everything in a sequence that keeps daily-use items accessible until the last moment.",
      "Furniture is wrapped, fragile items are cushioned, and cartons are grouped by room so unpacking at the new home feels calm instead of confusing.",
    ],
    suitableFor: [
      "1 BHK, 2 BHK and 3 BHK flats",
      "Independent houses and duplex homes",
      "Families moving within Rajahmundry",
      "Homes moving to another city in India",
      "Bachelor and student shifting with fewer items",
    ],
    process: [
      { title: "Home survey", text: "We look at the volume of goods, access, stairs and parking, then share a quote." },
      { title: "Room-wise packing", text: "Cartons are packed and marked room by room with protective material for fragile items." },
      { title: "Careful loading", text: "Heavy furniture goes in first, cartons are stacked so nothing shifts on the road." },
      { title: "Delivery and placement", text: "Goods are unloaded, furniture reassembled where required and cartons placed in the right rooms." },
    ],
    care: {
      heading: "How we protect a home move",
      points: [
        "Bubble wrap, corrugated sheets and edge protectors for fragile and wooden items",
        "Mattresses, sofas and mirrors covered before they leave the room",
        "Cartons sealed and labelled so kitchen items never end up in the bedroom",
        "Trained handling on staircases and narrow passages",
      ],
    },
    faqs: [
      { q: "Do you pack for us or should we pack ourselves?", a: "Both are possible. Most families ask us to handle the full packing. If you prefer packing personal items yourself, tell us during the enquiry and we will plan around it." },
      { q: "How much does a house shift cost?", a: "It depends on the volume of goods, distance, floor level and packing required. Call us and share these details for an accurate quote." },
      { q: "How early should I book?", a: "Earlier is better, especially at month end. Please call to check availability for your preferred date." },
      { q: "Will furniture be dismantled and reassembled?", a: "Beds, wardrobes and similar items are dismantled where needed and reassembled at delivery. Confirm the items with us in advance." },
    ],
    related: ["packing-unpacking", "local-shifting", "loading-unloading"],
  },
  {
    slug: "office-commercial-shifting",
    title: "Office & Commercial Shifting",
    short: "Workplace moves planned around your working hours.",
    blurb:
      "Computers, files, workstations and cabinets moved in an ordered sequence so your team can restart work quickly at the new premises.",
    icon: Building2,
    image: office,
    imageAlt: "Relocation team packing computers and document boxes in a modern office",
    heroEyebrow: "Office relocation Rajahmundry",
    intro: [
      "An office move is mostly about sequence. We label workstations, pack documents in a traceable way and keep IT equipment separated from general furniture so nothing is misplaced.",
      "Where a working day cannot be disturbed, we plan the shift in phases or outside busy hours, subject to availability.",
    ],
    suitableFor: [
      "Small offices and startup workspaces",
      "Clinics, coaching centres and training rooms",
      "Branch offices moving within Rajahmundry",
      "Companies relocating to another city",
      "Warehouse and back-office equipment shifting",
    ],
    process: [
      { title: "Site walkthrough", text: "We check equipment count, floor access, lifts and the switch-over window you need." },
      { title: "Labelling plan", text: "Desks, cabinets and cartons are coded so each item reaches the correct seat or room." },
      { title: "Phased move", text: "IT equipment, files and furniture are moved in the agreed order to limit downtime." },
      { title: "Set-up support", text: "Furniture is reassembled and cartons are delivered to the mapped locations." },
    ],
    care: {
      heading: "Handling office equipment",
      points: [
        "Monitors and CPUs wrapped individually with cushioning",
        "Cables bundled and kept with their device",
        "Document files packed in closed cartons and sequenced",
        "Glass table tops and partitions given rigid protection",
      ],
    },
    faqs: [
      { q: "Can you move an office on a Sunday?", a: "We work all seven days, 7:00 AM to 9:00 PM. Call us to confirm availability for a weekend or off-hours slot." },
      { q: "Do you handle server and network equipment?", a: "We pack and transport the hardware carefully. Disconnection and reconfiguration of servers should be handled by your IT team." },
      { q: "How do you avoid mixing up departments?", a: "Every carton and desk is labelled against a room or seat map that we prepare with your coordinator before packing." },
      { q: "Is a site visit needed for a quote?", a: "For offices it helps a lot. Share your address on WhatsApp and we will plan a visit or a detailed phone assessment." },
    ],
    related: ["shop-business-relocation", "packing-unpacking", "safe-secure-transportation"],
  },
  {
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    short: "Professional materials and methodical packing, both ends.",
    blurb:
      "Packing-only or packing plus unpacking at the destination, using bubble wrap, corrugated sheets, cartons and tape suited to each item.",
    icon: PackageOpen,
    image: packing,
    imageAlt: "Close-up of hands using bubble wrap and tape to protect fragile items",
    heroEyebrow: "Careful packing service",
    intro: [
      "Most damage during a move happens because of weak packing, not the journey. We use material chosen for each category — crockery, electronics, glass, clothes, books, kitchen items — and seal cartons properly before loading.",
      "You can book packing alone, or ask us to unpack and arrange items at the new place as well.",
    ],
    suitableFor: [
      "Kitchen crockery, glassware and appliances",
      "Televisions, computers and audio equipment",
      "Wardrobes, clothes, books and documents",
      "Paintings, mirrors and framed photographs",
      "Customers who have already arranged transport",
    ],
    process: [
      { title: "Sorting", text: "Items are grouped by fragility and room before any carton is filled." },
      { title: "Wrapping", text: "Fragile pieces are individually wrapped and cushioned inside the carton." },
      { title: "Sealing and marking", text: "Cartons are taped, marked with the room name and noted as fragile where needed." },
      { title: "Unpacking (optional)", text: "At delivery we open cartons, place items and clear the packing waste." },
    ],
    care: {
      heading: "Materials we work with",
      points: [
        "Multi-layer corrugated cartons in several sizes",
        "Bubble wrap and foam sheets for fragile surfaces",
        "Stretch film for upholstery and mattresses",
        "Edge protectors and strong packing tape",
      ],
    },
    faqs: [
      { q: "Can I book only packing?", a: "Yes. Many customers book packing alone when transport is already arranged. Mention it while enquiring." },
      { q: "Do you charge for packing material separately?", a: "Material and labour are quoted together based on the item list. Call us for the exact quote." },
      { q: "How long does packing a 2 BHK take?", a: "It varies with the quantity of goods and helpers deployed. We will give you a realistic time estimate after understanding your home." },
      { q: "Will you take away the empty cartons?", a: "If you book unpacking, we clear the packing waste at the destination. Please confirm this while booking." },
    ],
    related: ["household-shifting", "loading-unloading", "office-commercial-shifting"],
  },
  {
    slug: "local-shifting",
    title: "Local Shifting",
    short: "Short-distance moves inside and around Rajahmundry.",
    blurb:
      "Street-to-street and area-to-area shifting in Rajahmundry, handled quickly with the right vehicle size for your load.",
    icon: MapPin,
    image: unloading,
    imageAlt: "Two movers unloading sealed cartons from a small truck outside a house",
    heroEyebrow: "Local shifting in Rajahmundry",
    intro: [
      "Local moves inside Rajahmundry are often finished the same day. Because we work in the city every day, we plan around narrow lanes, lift availability and parking before the vehicle arrives.",
      "We match the vehicle to the load so you are not paying for space you do not need.",
    ],
    suitableFor: [
      "Shifting between areas within Rajahmundry",
      "Moving a few rooms or partial household goods",
      "Single-item moves such as a fridge or almirah",
      "Rental changes at short notice",
      "PG and hostel shifting",
    ],
    process: [
      { title: "Quick assessment", text: "Share your item list, both addresses and floor details over a call or WhatsApp." },
      { title: "Right vehicle", text: "We assign a vehicle that fits your load and the access at both ends." },
      { title: "Pack and load", text: "Items are protected, loaded and secured even for a short run." },
      { title: "Same-day delivery", text: "Goods are unloaded and placed where you want them, usually the same day." },
    ],
    care: {
      heading: "Short trips still need protection",
      points: [
        "Furniture wrapped even for a five-minute drive",
        "Load secured with straps so nothing tips on bad roads",
        "Appliances kept upright and cushioned",
        "Careful handling through gates, stairs and lifts",
      ],
    },
    faqs: [
      { q: "Can you shift on the same day I call?", a: "Sometimes yes, depending on the vehicle and crew available. Call as early as you can and we will tell you honestly." },
      { q: "Do you shift a single item?", a: "Yes, single-item and part-load local shifting is possible. Share the item and both addresses for a quote." },
      { q: "Is there a lift charge for higher floors?", a: "Floor level and lift availability affect effort and time, so they are considered in the quote. We tell you before confirming." },
      { q: "Which areas do you cover?", a: "We work in and around Rajahmundry. Share your pickup and drop location and we will confirm whether we can serve it." },
    ],
    related: ["household-shifting", "loading-unloading", "packing-unpacking"],
  },
  {
    slug: "domestic-relocation",
    title: "Domestic Relocation",
    short: "Long-distance moves to other cities in India.",
    blurb:
      "Planned intercity shifting with stronger packing, secured loading and a delivery timeline confirmed before your goods leave.",
    icon: RouteIcon,
    image: highway,
    imageAlt: "White moving truck travelling on an Indian highway at sunrise",
    heroEyebrow: "Domestic relocation from Rajahmundry",
    intro: [
      "A long journey puts more stress on packing than the loading itself. For intercity moves we reinforce cartons, brace furniture and secure the load so it stays stable over hundreds of kilometres.",
      "Before dispatch we confirm the route plan and the expected delivery window with you, and keep you informed while the vehicle is on the road.",
    ],
    suitableFor: [
      "Families relocating to another state for work",
      "Students and professionals moving intercity",
      "Partial household loads travelling long distance",
      "Office equipment moving to a new city branch",
      "Vehicle plus household goods moving together",
    ],
    process: [
      { title: "Detailed quote", text: "Distance, volume, packing needs and vehicle type are assessed together." },
      { title: "Reinforced packing", text: "Extra cushioning and stronger cartons are used for the longer journey." },
      { title: "Secured transit", text: "The load is braced and strapped, and we stay in touch while it travels." },
      { title: "Confirmed delivery", text: "Goods are unloaded, checked against the list and placed at the new address." },
    ],
    care: {
      heading: "Built for the long road",
      points: [
        "Double-layer protection for fragile and wooden items",
        "Load bracing so cartons do not shift in transit",
        "Item list checked at pickup and delivery",
        "Communication with you through the journey",
      ],
    },
    faqs: [
      { q: "How many days does an intercity move take?", a: "It depends on the distance, route and load. We give you an expected window before dispatch instead of a fixed promise we cannot control." },
      { q: "Can you move goods to any city in India?", a: "Share your destination while enquiring and we will confirm whether we can take that route." },
      { q: "Will my goods travel with other customers' items?", a: "Depending on volume, a dedicated or shared vehicle may be suitable. We explain which option applies to your move." },
      { q: "Can my car move along with household goods?", a: "Vehicle transportation can be arranged alongside the household move. Mention it in your enquiry." },
    ],
    related: ["safe-secure-transportation", "vehicle-transportation", "packing-unpacking"],
  },
  {
    slug: "loading-unloading",
    title: "Loading & Unloading",
    short: "Trained manpower for lifting, stacking and unloading.",
    blurb:
      "Manpower-only support when you have transport arranged and need experienced hands to load or unload safely.",
    icon: ArrowUpDown,
    image: loading,
    imageAlt: "Moving team loading organised sealed boxes into a white box truck",
    heroEyebrow: "Loading and unloading support",
    intro: [
      "Loading is where most avoidable damage occurs. Weight has to be balanced, heavy items placed first and fragile cartons kept on top and strapped.",
      "Our crew can handle only the loading, only the unloading, or both, whether the vehicle is ours or yours.",
    ],
    suitableFor: [
      "Customers who booked a vehicle separately",
      "Goods arriving and needing unloading help",
      "Shops receiving or dispatching stock",
      "Heavy furniture and appliance lifting",
      "Moves with stairs and no lift access",
    ],
    process: [
      { title: "Crew planning", text: "We decide how many helpers the item list, floor and access require." },
      { title: "Safe lifting", text: "Proper posture and equipment for heavy furniture and appliances." },
      { title: "Balanced stacking", text: "Weight distributed correctly and the load strapped before the doors close." },
      { title: "Careful unloading", text: "Items brought in one by one and placed where you direct." },
    ],
    care: {
      heading: "Safety on site",
      points: [
        "Correct lifting technique to protect goods and crew",
        "Trolleys and straps for heavy or awkward items",
        "Doorframes and staircases kept clear during movement",
        "Fragile cartons never placed under heavy weight",
      ],
    },
    faqs: [
      { q: "Can I hire only manpower without a vehicle?", a: "Yes. Tell us the item list, floor and timing and we will quote for the crew alone." },
      { q: "How many helpers will come?", a: "It depends on the volume, weight and access. We confirm the number when quoting." },
      { q: "Do you carry equipment for heavy items?", a: "We use trolleys, straps and other basic moving equipment as the job requires." },
      { q: "Can you unload late in the evening?", a: "We work until 9:00 PM every day. Call to check the slot you need." },
    ],
    related: ["local-shifting", "household-shifting", "safe-secure-transportation"],
  },
  {
    slug: "safe-secure-transportation",
    title: "Safe & Secure Transportation",
    short: "Well-maintained vehicles and a properly secured load.",
    blurb:
      "Closed-body vehicles matched to your load, with the goods braced and strapped so they arrive in the condition they left.",
    icon: ShieldCheck,
    image: highway,
    imageAlt: "Clean white moving truck on a highway representing safe transportation",
    heroEyebrow: "Secure transport of household goods",
    intro: [
      "Transport is the part of a move you cannot watch. We reduce risk in the ways that matter: the correct vehicle size, a load that cannot move, and a driver and crew who know the route.",
      "Goods are checked at loading, secured for the journey and verified again at delivery.",
    ],
    suitableFor: [
      "Household goods travelling within the city",
      "Intercity shifting of furniture and appliances",
      "Fragile items needing a cushioned load plan",
      "Office equipment and document consignments",
      "Shop stock and business material",
    ],
    process: [
      { title: "Vehicle selection", text: "We choose the vehicle size that suits your volume and both access points." },
      { title: "Load securing", text: "Items are packed tight, braced and strapped so movement is minimal." },
      { title: "Planned route", text: "The driver follows a route planned for the load and the timing agreed with you." },
      { title: "Delivery check", text: "Goods are unloaded and verified against the list with you present." },
    ],
    care: {
      heading: "What secure transport means to us",
      points: [
        "Closed-body vehicles to keep goods away from rain and dust",
        "Straps and bracing so the load does not shift",
        "Fragile cartons loaded last and kept accessible",
        "Item verification at both pickup and delivery",
      ],
    },
    faqs: [
      { q: "Are the vehicles closed body?", a: "We arrange closed-body vehicles for household and office goods. If your load needs an open vehicle, we will explain why." },
      { q: "Can I track the vehicle?", a: "We stay in touch by phone and update you during the journey. Please call us for status any time within working hours." },
      { q: "What if goods are damaged?", a: "Tell us immediately at delivery so we can inspect and discuss it with you directly. We do not make claims about coverage we have not offered you in writing." },
      { q: "Do you move goods at night?", a: "Our working hours are 7:00 AM to 9:00 PM daily. Long-distance travel timing is planned around the route." },
    ],
    related: ["domestic-relocation", "vehicle-transportation", "loading-unloading"],
  },
  {
    slug: "vehicle-transportation",
    title: "Vehicle Transportation",
    short: "Cars and two-wheelers moved with proper securing.",
    blurb:
      "Your car or bike prepared, inspected and strapped for transport, so it travels without being driven the whole distance.",
    icon: Car,
    image: vehicle,
    imageAlt: "Movers preparing a family car for secure transport with wheel straps",
    heroEyebrow: "Car and bike transport",
    intro: [
      "Driving a vehicle to a new city adds wear, fuel cost and risk. We arrange transport so your car or two-wheeler reaches the destination without those extra kilometres.",
      "Before loading we note the vehicle's condition with you, then secure it with wheel straps and soft protection at contact points.",
    ],
    suitableFor: [
      "Cars moving with a household relocation",
      "Two-wheelers shifting to another city",
      "Vehicles being sent to family members",
      "Customers moving without time to drive",
      "Multiple vehicles from one household",
    ],
    process: [
      { title: "Condition check", text: "We record the existing condition of the vehicle together with you before loading." },
      { title: "Preparation", text: "Fuel kept low, loose accessories removed and contact points protected." },
      { title: "Secure loading", text: "Wheel straps and blocks hold the vehicle in place for the journey." },
      { title: "Handover", text: "The vehicle is unloaded and checked with you against the initial condition notes." },
    ],
    care: {
      heading: "Protecting your vehicle",
      points: [
        "Wheel straps instead of pressure on the body",
        "Soft padding at points that touch the carrier",
        "Condition noted at pickup and rechecked at delivery",
        "Trained handling while driving on and off the carrier",
      ],
    },
    faqs: [
      { q: "Can I keep household items inside the car?", a: "No. Vehicles must travel empty apart from standard tools, both for safety and for weight rules." },
      { q: "How long does car transport take?", a: "It depends on the route and distance. We share an expected window before dispatch." },
      { q: "Can a bike and household goods move together?", a: "In many cases yes. Mention both while enquiring so we plan the right vehicle." },
      { q: "Do you handle the paperwork?", a: "You keep your vehicle documents ready. We will tell you exactly what is needed before pickup." },
    ],
    related: ["domestic-relocation", "safe-secure-transportation", "household-shifting"],
  },
  {
    slug: "shop-business-relocation",
    title: "Shop & Business Relocation",
    short: "Retail stock, shelving and equipment moved in order.",
    blurb:
      "Shop shifting planned so your stock stays countable, your fittings stay usable and your shutter reopens quickly.",
    icon: Store,
    image: shop,
    imageAlt: "Movers packing shelving and cartons in a clean retail shop",
    heroEyebrow: "Shop shifting Rajahmundry",
    intro: [
      "For a shop, every closed day matters. We pack stock in countable batches, dismantle shelving carefully and keep fittings with their fixtures so reassembly is fast.",
      "Where possible we move outside your busiest hours so the new location can open sooner.",
    ],
    suitableFor: [
      "Retail shops and boutiques",
      "Mobile, electrical and hardware stores",
      "Small business stock and equipment",
      "Godowns and storage rooms",
      "Salons, tailoring units and workshops",
    ],
    process: [
      { title: "Stock and fitting review", text: "We list stock categories, racks, counters and equipment before packing." },
      { title: "Batch packing", text: "Stock is packed in marked batches so your counting stays straightforward." },
      { title: "Dismantle and move", text: "Shelving and counters are dismantled with fittings kept together and labelled." },
      { title: "Reassemble", text: "Racks and counters are rebuilt at the new shop and stock cartons placed by category." },
    ],
    care: {
      heading: "Keeping business goods intact",
      points: [
        "Glass counters and display units given rigid protection",
        "Screws and fittings bagged and tagged with their unit",
        "Stock cartons marked by category for easy counting",
        "Electrical and electronic items packed separately",
      ],
    },
    faqs: [
      { q: "Can you shift a shop overnight?", a: "Our working hours are 7:00 AM to 9:00 PM daily. Call us to discuss the least disruptive slot for your shop." },
      { q: "Will you dismantle and refit racks?", a: "Yes, racks and counters are dismantled and refitted where they are designed for it. We check this during the survey." },
      { q: "How do I keep track of stock?", a: "We pack in marked batches by category. Keeping your own stock list alongside is always advisable." },
      { q: "Do you move commercial kitchen equipment?", a: "Share the equipment details while enquiring so we can confirm what we can handle safely." },
    ],
    related: ["office-commercial-shifting", "loading-unloading", "packing-unpacking"],
  },
];

export const galleryImages = [
  { src: packing, alt: "Fragile items being wrapped with bubble wrap and tape", category: "Packing", caption: "Fragile packing with layered protection" },
  { src: household, alt: "Movers protecting a sofa inside a living room", category: "House Move", caption: "Furniture wrapped before it leaves the room" },
  { src: loading, alt: "Sealed cartons being loaded into a closed-body truck", category: "Loading", caption: "Balanced loading, strapped before dispatch" },
  { src: highway, alt: "Moving truck travelling on a highway at sunrise", category: "Transport", caption: "On the road for a domestic relocation" },
  { src: office, alt: "Team packing computers and files in an office", category: "Office Move", caption: "Workstations labelled and packed in sequence" },
  { src: vehicle, alt: "A car being prepared and strapped for transport", category: "Vehicle", caption: "Condition noted before the vehicle is secured" },
  { src: unloading, alt: "Movers unloading cartons onto a trolley outside a home", category: "Unloading", caption: "Unloading room by room, not in a rush" },
  { src: shop, alt: "Shop shelving and cartons being packed for relocation", category: "Shop Move", caption: "Stock packed in countable batches" },
  { src: delivery, alt: "Family in a new home while movers place boxes and assemble furniture", category: "Delivery", caption: "Boxes placed where they belong" },
  { src: boxes, alt: "Neatly stacked sealed cartons with orange tape in an empty room", category: "Packing", caption: "Sealed, marked and ready to load" },
];

export const galleryCategories = [
  "All",
  "Packing",
  "House Move",
  "Office Move",
  "Loading",
  "Unloading",
  "Transport",
  "Vehicle",
  "Shop Move",
  "Delivery",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceOptions = services.map((s) => s.title);
