export type ServiceArea = {
  city: string;
  slug: string;
  metaTitle: string;
  h1: string;
  metaDescription: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  "Alamo Heights",
  "Balcones Heights",
  "Boerne",
  "Bulverde",
  "Castle Hills",
  "Cibolo",
  "China Grove",
  "Converse",
  "Elmendorf",
  "Fair Oaks Ranch",
  "Floresville",
  "Garden Ridge",
  "Helotes",
  "Hollywood Park",
  "Kirby",
  "Leon Valley",
  "Live Oak",
  "Lytle",
  "New Braunfels",
  "Pleasanton",
  "Poteet",
  "Schertz",
  "Seguin",
  "Selma",
  "Shavano Park",
  "Somerset",
  "St. Hedwig",
  "Terrell Hills",
  "Universal City",
  "Windcrest"
].map((city) => {
  const slugCity = city
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const phrase = `Cash for Junk Cars in ${city}`;

  return {
    city,
    slug: `cash-for-junk-cars-in-${slugCity}`,
    metaTitle: phrase,
    h1: phrase,
    metaDescription: `${phrase}. Super Dave buys junk cars, trucks and SUVs in ${city}, TX with fast cash offers, free towing and same-day pickup available.`
  };
});

export const getServiceAreaBySlug = (slug: string) =>
  SERVICE_AREAS.find((area) => area.slug === slug);
