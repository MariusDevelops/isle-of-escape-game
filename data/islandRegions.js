// island region map:
// NW- N-mountain     NE-
//  W- C-jungle        E-
// SW- S-rockySeaside SE-

const islandRegions = {
  rockySeaside: {
    name: "rocky seaside",
    description: "An empty rocky coastline with an escape capsule.",
    exits: {
      north: "jungle",
    },
    investigate: "You investigate capsule and find some usefull items.",
    items: ["medkit", "spare part"],
  },
  jungle: {
    name: "jungle",
    description: "You can see a spaceship hidden amongst the trees.",
    exits: {
      south: "rockySeaside",
      north: "mountain",
    },
    investigate: "You investigate spaceship and find some usefull items.",
    items: ["energy cell"],
  },
  mountain: {
    name: "mountain",
    description: "You can see the Cyborg Space C325 settlement.",
    exits: {
      south: "jungle",
    },
    items: [],
  },
};

export default islandRegions;
