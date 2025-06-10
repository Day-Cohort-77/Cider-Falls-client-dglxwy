//create and export a database array that contains areas, guests, and services

const database = {
  areas: [
    {
      id: 1,
      name: "Chamfort River",
      location: "northeast",
      description: "world class whitewater rafting and canoeing",
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
      location: "north",
      description: "scenic hiking trail with breathtaking views",
    },
    {
      id: 3,
      name: "The Lodge",
      location: "northwest ",
      description:
        "a cozy lodge for lodging and picnicking, also nearby are a hotel and restaurant",
    },
    {
      id: 4,
      name: "Gander River",
      location: "southwest",
      description: "a natural preserve, so it only supports fishing and hiking",
    },
    {
      id: 5,
      name: "The Campgrounds",
      location: "south",
      description:
        "family-friendly campgrounds with children play areas, the park office is also located here",
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
      location: "southeast",
      description: "blah blah blah",
    },
  ],
  guests: [
    { id: 1, name: "Alice Johnson", areaId: 2 },
    { id: 2, name: "Bob Smith", areaId: 5 },
    { id: 3, name: "Charlie Lee", areaId: 1 },
    { id: 4, name: "Diana Prince", areaId: 3 },
    { id: 5, name: "Ethan Brown", areaId: 4 },
    { id: 6, name: "Fiona Davis", areaId: 6 },
    { id: 7, name: "George Miller", areaId: 1 },
    { id: 8, name: "Hannah Wilson", areaId: 1 },
    { id: 9, name: "Ian Clark", areaId: 3 },
    { id: 10, name: "Julia Adams", areaId: 5 },
    { id: 11, name: "Kevin Scott", areaId: 4 },
    { id: 12, name: "Laura Turner", areaId: 6 },
    { id: 13, name: "Mike Evans", areaId: 2 },
    { id: 14, name: "Nina Harris", areaId: 1 },
    { id: 15, name: "Oscar Young", areaId: 3 },
    { id: 16, name: "Paula King", areaId: 5 },
    { id: 17, name: "Quentin Wright", areaId: 4 },
    { id: 18, name: "Rachel Green", areaId: 6 },
    { id: 19, name: "Sam Baker", areaId: 2 },
    { id: 20, name: "Tina Hall", areaId: 1 },
  ],
  services: [
    {
      id: 1,
      type: "Rafting",
      areaId: 1,
    },
    {
      id: 2,
      type: "Canoeing",
      areaId: 1,
    },
    {
      id: 3,
      type: "Fishing",
      areaId: [1, 4],
    },
    {
      id: 4,
      type: "Hiking",
      areaId: [2, 4, 6],
    },
    {
      id: 5,
      type: "Picnicking",
      areaId: [2, 3, 6],
    },
    {
      id: 6,
      type: "Rock Climbing",
      areaId: 2,
    },
    {
      id: 7,
      type: "Lodging",
      areaId: [3, 5],
    },
    {
      id: 8,
      type: "Parking",
      areaId: [3, 5],
    },
    {
      id: 9,
      type: "Information",
      areaId: [3, 5],
    },
    {
      id: 10,
      type: "Zip Lines",
      areaId: 6,
    },
  ],
};

// create and export structured clones
export const getAreas = () => {
  return structuredClone(database.areas);
};
export const getGuests = () => {
  return structuredClone(database.guests);
};
export const getServices = () => {
  return structuredClone(database.services);
};

//import getAreas where? to areas.js
