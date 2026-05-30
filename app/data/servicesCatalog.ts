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
    title: "Residential Cleaning",
    services: [
      {
        title: "Home Cleaning",
        slug: "home-cleaning",
        image: "/services/home-cleaning.jpg",
        desc: "Comprehensive home cleaning covering living rooms, bedrooms, kitchens, and bathrooms. We remove dust, dirt, stains, and allergens to maintain a spotless, fresh, and healthy home environment across Nepal.",
      },
      {
        title: "Kitchen Cleaning",
        slug: "kitchen-cleaning",
        image: "/services/kitchen-cleaning.jpg",
        desc: "Expert kitchen cleaning including countertops, cabinets, sinks, stovetops, and appliances. We remove grease, grime, and bacteria for a hygienic and safe cooking environment.",
      },
      {
        title: "Bathroom Cleaning",
        slug: "bathroom-cleaning",
        image: "/services/bathroom-cleaning.jpg",
        desc: "Deep bathroom cleaning of tiles, toilets, showers, mirrors, and grout. We remove mold, soap scum, hard water stains, and bacteria using eco-friendly solutions.",
      },
      {
        title: "Carpet Cleaning",
        slug: "carpet-cleaning",
        image: "/services/carpet-cleaning.jpg",
        desc: "Professional carpet cleaning removes embedded dirt, dust mites, and allergens. Steam cleaning and stain treatment restore freshness and extend carpet life.",
      },
      {
        title: "Sofa / Upholstery Cleaning",
        slug: "sofa-upholstery-cleaning",
        image: "/services/sofa-upholstery-cleaning.jpg",
        desc: "Deep cleaning for fabric, leather, and microfiber sofas, recliners, chairs, and cushions using fabric-safe professional methods.",
      },
      {
        title: "Move-In / Move-Out Cleaning",
        slug: "move-in-move-out-cleaning",
        image: "/services/move-in-move-out-cleaning.jpg",
        desc: "Complete move-in and move-out cleaning for every room, kitchen, bathroom, and fixture — leaving properties spotless for new occupants.",
      },
    ],
  },
  {
    title: "Deep Cleaning & Sanitization",
    services: [
      {
        title: "Disinfection / Sanitization",
        slug: "disinfection-sanitization-services",
        image: "/services/disinfection-sanitization-services.jpg",
        desc: "Professional disinfection for homes, offices, and commercial spaces. We eliminate germs and bacteria on high-touch surfaces using safe, effective solutions.",
      },
      {
        title: "Post-Construction Cleaning",
        slug: "post-construction-cleaning",
        image: "/services/post-construction-cleaning.jpg",
        desc: "Thorough post-construction cleanup removing dust, debris, and residue from newly built or renovated properties to make them move-in ready.",
      },
      {
        title: "Post Event Cleaning",
        slug: "post-event-cleaning",
        image: "/services/post-event-cleaning.jpg",
        desc: "Efficient post-event cleanup including trash removal, surface cleaning, and restroom sanitization after parties, weddings, and corporate events.",
      },
      {
        title: "Medical Facility Cleaning",
        slug: "medical-facility-cleaning",
        image: "/services/medical-facility-cleaning.jpg",
        desc: "Hospital-grade cleaning for hospitals, clinics, and laboratories with strict infection control and sanitization protocols.",
      },
    ],
  },
  {
    title: "Commercial & Office Cleaning",
    services: [
      {
        title: "Corporate House Cleaning",
        slug: "corporate-house-cleaning",
        image: "/services/corporate-house-cleaning.jpg",
        desc: "Commercial and office cleaning maintaining clean workspaces, sanitizing desks, conference rooms, and communal areas for a professional environment.",
      },
      {
        title: "Monthly Cleaning",
        slug: "monthly-cleaning",
        image: "/services/monthly-cleaning.jpg",
        desc: "Scheduled monthly cleaning packages for homes and offices maintaining consistent hygiene, freshness, and cleanliness on a recurring basis.",
      },
      {
        title: "School Cleaning",
        slug: "school-cleaning",
        image: "/services/school-cleaning.jpg",
        desc: "Comprehensive school cleaning sanitizing classrooms, corridors, restrooms, and playgrounds for a healthy learning environment.",
      },
      {
        title: "Lift / Elevator Cleaning",
        slug: "lift-elevator-cleaning",
        image: "/services/lift-elevator-cleaning.jpg",
        desc: "Professional lift and elevator cleaning focusing on floors, walls, buttons, and handrails for hygiene and safety in shared buildings.",
      },
      {
        title: "Desktop Cleaning",
        slug: "desktop-cleaning",
        image: "/services/desktop-cleaning.jpg",
        desc: "Workstation cleaning for offices and co-working spaces — dusting monitors, keyboards, desks, and sanitizing high-touch surfaces.",
      },
      {
        title: "Laptop Cleaning",
        slug: "laptop-cleaning",
        image: "/services/laptop-cleaning.jpg",
        desc: "Safe laptop cleaning removing dust from vents, screens, and keyboards to prevent overheating and maintain device hygiene.",
      },
    ],
  },
  {
    title: "Specialized Cleaning",
    services: [
      {
        title: "A/C Cleaning",
        slug: "ac-cleaning",
        image: "/services/ac-cleaning.jpg",
        desc: "AC servicing including filter cleaning, coil maintenance, and duct sanitization for improved air quality and cooling efficiency.",
      },
      {
        title: "Facade Cleaning",
        slug: "facade-cleaning",
        image: "/services/facade-cleaning.jpg",
        desc: "Exterior building cleaning using pressure washing and polishing to remove pollution, algae, and grime from building facades.",
      },
      {
        title: "Car Interior Cleaning",
        slug: "car-interior-cleaning",
        image: "/services/car-interior-cleaning.jpg",
        desc: "Comprehensive car interior detailing — seats, carpets, mats, and surfaces cleaned to remove dirt, stains, and odors.",
      },
      {
        title: "Marble / Tile Cleaning",
        slug: "marble-tile-cleaning",
        image: "/services/marble-tile-cleaning.jpg",
        desc: "Marble and tile cleaning with grout treatment, stain removal, and polishing to restore shine and beauty of floors and walls.",
      },
      {
        title: "Air Duct & Vent Cleaning",
        slug: "air-duct-vent-cleaning",
        image: "/services/air-duct-vent-cleaning.jpg",
        desc: "Professional duct and vent cleaning improving airflow, reducing allergens, and maintaining healthy indoor air quality.",
      },
      {
        title: "Reserve Tank Cleaning",
        slug: "reserve-tank-cleaning",
        image: "/services/reserve-tank-cleaning.jpg",
        desc: "Water storage tank cleaning removing sludge, sediment, and contaminants to ensure safe, clean water supply.",
      },
      {
        title: "Aeroplane Cleaning",
        slug: "aeroplane-cleaning",
        image: "/services/aeroplane-cleaning.jpg",
        desc: "Aircraft cabin cleaning and sanitization for passenger comfort and aviation hygiene standards.",
      },
      {
        title: "Helicopter Cleaning",
        slug: "helicopter-cleaning",
        image: "/services/helicopter-cleaning.jpg",
        desc: "Specialized helicopter interior cleaning and sanitization adhering to strict safety standards.",
      },
      {
        title: "Parquet Cleaning",
        slug: "parquet-cleaning",
        image: "/services/parquet-cleaning.jpg",
        desc: "Professional parquet and wooden floor cleaning with polishing to maintain shine, quality, and longevity.",
      },
      {
        title: "Chair Cleaning",
        slug: "chair-cleaning",
        image: "/services/chair-cleaning.jpg",
        desc: "Deep cleaning for office and home chairs removing dirt, stains, and odors while preserving fabric or leather quality.",
      },
      {
        title: "Swimming Pool Cleaning",
        slug: "swimming-pool-cleaning",
        image: "/services/swimming-pool-cleaning.jpg",
        desc: "Pool cleaning and maintenance ensuring crystal clear water, proper chemical balance, and a safe swimming environment.",
      },
      {
        title: "Dead Animal Removal",
        slug: "dead-animal-removal",
        image: "/services/dead-animal-removal.jpg",
        desc: "Safe and hygienic dead animal removal preventing odors, contamination, and health hazards.",
      },
      {
        title: "Dog Cleaning",
        slug: "dog-cleaning",
        image: "/services/dog-cleaning.jpg",
        desc: "Professional pet grooming and hygiene services to keep your dogs clean, healthy, and comfortable.",
      },
    ],
  },
  {
    title: "Outdoor & Property Cleaning",
    services: [
      {
        title: "Garden Cleaning",
        slug: "garden-cleaning",
        image: "/services/garden-cleaning.jpg",
        desc: "Garden maintenance including trimming, leaf removal, pathway cleaning, and outdoor space sanitization.",
      },
      {
        title: "Garage Cleaning",
        slug: "garage-cleaning",
        image: "/services/garage-cleaning.jpg",
        desc: "Garage cleaning removing dirt, oil stains, and clutter to create a clean, organized, and safe storage space.",
      },
      {
        title: "Drainage Cleaning",
        slug: "drainage-cleaning",
        image: "/services/drainage-cleaning.jpg",
        desc: "Drain unclogging and pipe cleaning ensuring smooth water flow and preventing unpleasant odors and water damage.",
      },
      {
        title: "Septic Tank Cleaning",
        slug: "septic-tank-cleaning",
        image: "/services/septic-tank-cleaning.jpg",
        desc: "Safe septic tank cleaning and maintenance preventing overflows and maintaining proper sanitation.",
      },
    ],
  },
];
