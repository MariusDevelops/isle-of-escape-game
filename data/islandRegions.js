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
  },
  jungle: {
    name: "jungle",
    description: "You can see a spaceship hidden amongst the trees.",
    exits: {
      south: "rockySeaside",
      north: "mountain",
    },
  },
  mountain: {
    name: "mountain",
    description: "You can see the Cyborg Space C325 settlement.",
    exits: {
      south: "jungle",
    },
  },
};

export default islandRegions;
