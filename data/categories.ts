export interface SubCategory {
  name: string;
  href?: string;
}

export interface Category {
  name: string;
  href?: string;
  subcategories?: SubCategory[];
}

export interface CategoryGroup {
  name: string;
  categories: Category[];
}

export const megaMenuCategories: CategoryGroup[] = [
  {
    name: "Automotive Lights",
    categories: [
      {
        name: "Headlights",
        subcategories: [
          { name: "Seal Beam" }
        ]
      },
      { name: "Interior Lights" },
      { name: "Fog Lights" },
      { name: "Headlight Bulbs" },
      {
        name: "Headlight LEDs",
        subcategories: [
          { name: "Park LED/Bulbs" }
        ]
      }
    ]
  },
  {
    name: "Car Audio System",
    categories: [
      { name: "Android" },
      { name: "Single Din" },
      { name: "Double Din" },
      { name: "Speaker" },
      { name: "Sub Woofer" }
    ]
  },
  {
    name: "Automotive Batteries",
    categories: [
      { name: "Bike Battery" },
      { name: "Car Battery" },
      { name: "Commercial/Lorry Battery" }
    ]
  },
  {
    name: "Interior Accessories",
    categories: [
      { name: "Steering Covers" },
      { name: "Carpets" },
      { name: "Seat Covers" },
      { name: "Mud Flaps" },
      { name: "Dashboard Gadgets" },
      { name: "Sun Visor" },
      { name: "Ambient Interior Lights" },
      { name: "Underbody Neon Lights" },
      { name: "Strobe / Emergency Lights" },
      { name: "Gear Knobs & Covers" },
      { name: "Others" }
    ]
  },
  {
    name: "Air Fresheners",
    categories: [
      { name: "Spray" },
      { name: "Hanging" },
      { name: "A/C Vent" }
    ]
  },
  {
    name: "Chrome Accessories",
    categories: [
      { name: "Car Models" }
    ]
  },
  {
    name: "Safety & Security",
    categories: [
      { name: "Reverse Cameras" },
      { name: "Parking Sensors" },
      { name: "Dash Cameras" },
      { name: "Car Alarms" },
      { name: "GPS Trackers" },
      { name: "Fire Extinguishers" }
    ]
  },
  {
    name: "Performance & Utility",
    categories: [
      { name: "Horns" },
      { name: "Exhaust Tips" },
      { name: "Air Filters" },
      { name: "Engine Additives" },
      { name: "Jump Starters" },
      { name: "Tire Inflators" },
      { name: "Battery Chargers" }
    ]
  },
  {
    name: "Exterior Accessories",
    categories: [
      { name: "Wipers & Blades" },
      { name: "Number Plate Frames" },
      { name: "Car Covers" },
      { name: "Window Tints / Sun Shades" },
      { name: "Side Steps" },
      { name: "Roof Rails" },
      { name: "Tow Hooks" },
      { name: "Spoilers" },
      { name: "Door Visors" }
    ]
  },
  {
    name: "Car Care & Detailing",
    categories: [
      { name: "Car Shampoo" },
      { name: "Wax & Polish" },
      { name: "Interior Cleaners" },
      { name: "Dashboard Polish" },
      { name: "Tire Shine" },
      { name: "Microfiber Cloths" },
      { name: "Cleaning Kits" }
    ]
  },
  {
    name: "Electrical & Power",
    categories: [
      { name: "Wires" },
      { name: "Relays" },
      { name: "Fuses" },
      { name: "Switches" },
      { name: "Converters (12V-24V)" },
      { name: "Power Distribution Blocks" }
    ]
  },
  {
    name: "Comfort & Convenience",
    categories: [
      { name: "Neck Pillows" },
      { name: "Lumbar Supports" },
      { name: "Sun Shades" }
    ]
  },
  {
    name: "Fluids & Consumables",
    categories: [
      { name: "Engine Oils" },
      { name: "Coolants" },
      { name: "Brake Fluids" },
      { name: "Windshield Washer Fluid" },
      { name: "Grease & Lubricants" },
      { name: "Engine Chemicals" }
    ]
  }
];
