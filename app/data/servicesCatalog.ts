export type CatalogService = {
  title: string;
  slug: string;
  image: string;
  desc: string;
};

export type ServiceCategory = {
  title: string;
  services: CatalogService[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Cleaning & Exterior Maintenance",
    services: [
      {
        title: "Deep Cleaning",
        slug: "deep-cleaning",
        image: "/services/deep-cleaning.jpg",
        desc: "Deep cleaning provides a thorough and detailed cleaning of your entire home, targeting hidden dirt, grime, and bacteria. It includes scrubbing floors, sanitizing kitchens and bathrooms, dusting hard-to-reach areas, and refreshing upholstery.",
      },
      {
        title: "Pressure Washing",
        slug: "pressure-washing",
        image: "/services/pressure-washing.jpg",
        desc: "Pressure washing removes dirt, mold, algae, and stains from outdoor surfaces using high-pressure water. It's ideal for driveways, patios, walls, and sidewalks, restoring their clean, fresh, original appearance quickly and effectively.",
      },
      {
        title: "Roof & Gutter Cleaning",
        slug: "roof-gutter-cleaning",
        image: "/services/roof-gutter-cleaning.jpg",
        desc: "Roof and gutter cleaning ensures proper drainage and protects your home from water damage. This service removes leaves, debris, moss, and dirt buildup from rooftops and gutters. Clean gutters prevent blockages, leaks, and structural issues, especially during heavy rainfall.",
      },
    ],
  },
  {
    title: "Home Repair & Maintenance",
    services: [
      {
        title: "Handyman",
        slug: "handyman",
        image: "/services/handyman.jpg",
        desc: "Handyman services cover a wide range of small repair and maintenance tasks around your home. From fixing doors and windows to assembling furniture and minor installations, this service ensures everything functions properly. It saves time and effort by addressing multiple issues in one visit.",
      },
      {
        title: "Carpentry",
        slug: "carpentry",
        image: "/services/carpentry.jpg",
        desc: "Carpentry services include custom woodwork, furniture repair, and installation tasks. Whether you need cabinets, shelves, doors, or wooden fixtures, skilled carpenters ensure precision and durability. This service enhances both functionality and aesthetics of your space.",
      },
      {
        title: "Plumbing",
        slug: "plumbing",
        image: "/services/plumbing.jpg",
        desc: "Plumbing services handle everything from fixing leaks to installing pipes and fixtures. Whether it's a dripping faucet, clogged drain, or bathroom installation, expert plumbers ensure smooth water flow and proper drainage. Timely plumbing maintenance prevents water damage and costly repairs.",
      },
      {
        title: "Electrical Repairs",
        slug: "electrical-repairs",
        image: "/services/electrical.jpg",
        desc: "Electrical repair services ensure your home's wiring, outlets, and power systems function safely and efficiently. From fixing faulty switches to resolving power issues, trained professionals handle all electrical concerns. Proper repairs reduce risks such as short circuits and fire hazards.",
      },
      {
        title: "Flooring Fixes",
        slug: "flooring-fixes",
        image: "/services/flooring.jpg",
        desc: "Flooring fixes restore damaged or worn-out surfaces, including tiles, wood, and other materials. This service addresses cracks, loose tiles, uneven surfaces, and general wear. It improves both safety and appearance while extending the life of your flooring.",
      },
      {
        title: "Washing Machine Repair",
        slug: "washing-machine-repair",
        image: "/services/washing-machine-repair.jpg",
        desc: "Washing machine repair services diagnose and fix issues such as leaks, noise, and poor performance. Skilled technicians ensure your appliance runs efficiently, saving time and energy. Regular maintenance extends the lifespan of your machine and prevents costly replacements.",
      },
    ],
  },
  {
    title: "Installation & Smart Home",
    services: [
      {
        title: "Smart Home Setup",
        slug: "smart-home-setup",
        image: "/services/smart-home.jpg",
        desc: "Smart home setup integrates modern technology into your living space, including CCTV, automation systems, and smart devices. This service enhances security, convenience, and energy efficiency. Control lighting, appliances, and surveillance remotely for a seamless experience.",
      },
      {
        title: "EV Charger Installation",
        slug: "ev-charger-installation",
        image: "/services/electric-charger-installation.jpg",
        desc: "EV charger installation provides a reliable and convenient solution for charging electric vehicles at home. Experts ensure proper setup, safety compliance, and efficient power usage. This service supports sustainable living while offering the ease of charging your vehicle anytime.",
      },
      {
        title: "AC Servicing",
        slug: "ac-servicing",
        image: "/services/ac-service.jpg",
        desc: "AC servicing ensures your cooling system operates efficiently and reliably. This service includes cleaning filters, checking components, and optimizing performance. Regular maintenance improves air quality, reduces energy consumption, and prevents breakdowns.",
      },
    ],
  },
  {
    title: "Home Improvement",
    services: [
      {
        title: "Painting",
        slug: "painting",
        image: "/services/painting.jpg",
        desc: "Painting services refresh your home with high-quality interior and exterior finishes. Professionals ensure smooth application, proper color selection, and long-lasting results. Whether renovating or updating, painting enhances appearance and protects surfaces.",
      },
      {
        title: "Wallpaper",
        slug: "wallpaper",
        image: "/services/wall-decoration.jpg",
        desc: "Wallpaper services provide stylish wall decoration options to enhance interior design. From modern patterns to classic textures, professionals ensure precise installation and a flawless finish. Wallpaper adds personality and elegance to any room.",
      },
      {
        title: "Drywall Repair",
        slug: "drywall-repair",
        image: "/services/drywall-repair.jpg",
        desc: "Drywall repair fixes cracks, holes, and damaged wall surfaces. This service restores smoothness and prepares walls for painting or decoration. Professional repairs ensure durability and a seamless finish.",
      },
      {
        title: "Tile Work",
        slug: "tile-work",
        image: "/services/tiling-work.jpg",
        desc: "Tile work includes installation and repair of tiles for floors, walls, kitchens, and bathrooms. Skilled professionals ensure precise alignment, durability, and aesthetic appeal. This service enhances both functionality and design, creating clean and stylish surfaces that are easy to maintain and long-lasting.",
      },
      {
        title: "Window Repair",
        slug: "window-repair",
        image: "/services/window-repair.jpg",
        desc: "Window repair services fix broken glass, frames, and sealing issues. Proper repairs improve insulation, security, and energy efficiency. This service ensures smooth operation and enhances the overall appearance of your home. Well-maintained windows provide better comfort and protection from weather conditions.",
      },
      {
        title: "Floor Repair",
        slug: "floor-repair",
        image: "/services/floor-repair.jpg",
        desc: "Floor repair restores damaged flooring, addressing cracks, wear, and uneven surfaces. This service improves safety, durability, and visual appeal. Professional solutions ensure long-lasting results, making your floors look new and function properly for everyday use.",
      },
    ],
  },
  {
    title: "Outdoor Services",
    services: [
      {
        title: "Lawn Care",
        slug: "lawn-care",
        image: "/services/lawn-care.jpg",
        desc: "Lawn care services maintain healthy, green grass and beautiful outdoor spaces. This includes mowing, fertilizing, and landscaping. Regular care improves curb appeal and creates a relaxing outdoor environment. It keeps your lawn fresh, clean, and well-managed throughout the year.",
      },
      {
        title: "Tree Cutting",
        slug: "tree-cutting",
        image: "/services/tree-cutting.jpg",
        desc: "Tree cutting services handle trimming, pruning, and safe removal of trees. This helps maintain safety, prevent damage, and improve landscape appearance. Professional care ensures proper growth and reduces risks during storms or heavy winds.",
      },
      {
        title: "Garden Care",
        slug: "garden-care",
        image: "/services/garden-care.jpg",
        desc: "Garden care includes planting, pruning, and maintaining flowers and plants. This service keeps your garden vibrant and healthy. It enhances outdoor beauty and creates a peaceful, natural environment for relaxation and enjoyment.",
      },
      {
        title: "Irrigation",
        slug: "irrigation",
        image: "/services/smart-irrigation.jpg",
        desc: "Irrigation services install and maintain water systems for efficient plant watering. Proper irrigation supports healthy growth and conserves water. This service ensures your garden and lawn receive consistent hydration with minimal effort.",
      },
      {
        title: "Fence Repair",
        slug: "fence-repair",
        image: "/services/fence-repair.jpg",
        desc: "Fence repair services fix damaged or broken fencing, improving security and appearance. Strong and well-maintained fences protect your property while enhancing its overall look. Professional repairs ensure durability and reliability.",
      },
      {
        title: "Outdoor Lighting",
        slug: "outdoor-lighting",
        image: "/services/outdoor-lightning.jpg",
        desc: "Outdoor lighting installation enhances visibility, safety, and aesthetics. This service includes pathway lights, garden lighting, and security fixtures. It creates a welcoming atmosphere and improves nighttime functionality of your outdoor spaces.",
      },
    ],
  },
  {
    title: "Moving & Property",
    services: [
      {
        title: "Moving",
        slug: "moving",
        image: "/services/relocation-assistance.jpg",
        desc: "Moving services assist with safe and efficient relocation of your belongings. Professionals handle packing, transport, and unloading. This service reduces stress and ensures your items reach their destination securely and on time.",
      },
      {
        title: "Airbnb Maintenance",
        slug: "airbnb-maintenance",
        image: "/services/airbnb-maintenance.jpg",
        desc: "Airbnb maintenance ensures your rental property remains clean, functional, and guest-ready. Regular inspections, repairs, and cleaning maintain high standards. This service improves guest satisfaction and helps maximize bookings.",
      },
      {
        title: "Packing",
        slug: "packing",
        image: "/services/packing.jpg",
        desc: "Packing services provide organized and secure packing of your belongings. Professionals use proper materials to prevent damage during transit. This service saves time and ensures safe handling of all items.",
      },
    ],
  },
  {
    title: "Subscription Services",
    services: [
      {
        title: "Home Concierge",
        slug: "home-concierge",
        image: "/services/home-concierge.jpg",
        desc: "Home concierge services manage daily household tasks and maintenance. From scheduling repairs to overseeing services, it provides convenience and peace of mind. Ideal for busy homeowners seeking efficient home management.",
      },
      {
        title: "Cleaning Plan",
        slug: "cleaning-plan",
        image: "/services/cleaning-plan.jpg",
        desc: "Cleaning plans offer regular and scheduled cleaning services tailored to your needs. This ensures consistent cleanliness and hygiene. It helps maintain a fresh and organized home environment effortlessly.",
      },
      {
        title: "Maintenance Plan",
        slug: "maintenance-plan",
        image: "/services/maintenance-plan.jpg",
        desc: "Maintenance plans provide seasonal and routine care for your home. Regular inspections and servicing prevent major issues. This service ensures your property stays in excellent condition year-round with minimal hassle.",
      },
    ],
  },
];
