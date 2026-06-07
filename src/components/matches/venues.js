const VENUES = {
  tributeOtsego: {
    name: "The Tribute at Otsego Resort",
    url: "https://www.otsegoclub.com/golf/the-tribute/",
  },
  classicOtsego: {
    name: "The Classic at Otsego Resort",
    url: "https://www.otsegoclub.com/golf/the-classic/",
  },
  gaylordGolfClub: {
    name: "Gaylord Golf Club",
    url: "https://www.gaylordcountryclub.com/",
  },
  stoatinBrae: {
    name: "Stoatin Brae",
    url: "https://www.gulllakeview.com/golf/stoatin-brae/",
  },
  stonehedgeSouth: {
    name: "Stonehedge South",
    url: "https://www.gulllakeview.com/golf/golf-courses/stonehedge-south/",
  },
  gullLakeEast: {
    name: "Gull Lake East",
    url: "https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-east/",
  },
  gullLakeWest: {
    name: "Gull Lake West",
    url: "https://www.gulllakeview.com/golf/golf-courses/gull-lake-view-west/",
  },
  arthurHills: {
    name: "Arthur Hills",
    url: "https://www.boynegolf.com/eleven-courses/arthur-hills",
  },
  donaldRossMemorial: {
    name: "Donald Ross Memorial",
    url: "https://www.boynegolf.com/eleven-courses/donald-ross-memorial",
  },
  theMoor: {
    name: "The Moor",
    url: "https://www.boynegolf.com/eleven-courses/the-moor",
  },
  theHeather: {
    name: "The Heather",
    url: "https://www.boynegolf.com/eleven-courses/the-heather",
  },
  linksQuarry: {
    name: "The Links/Quarry",
    url: "https://www.boynegolf.com/eleven-courses/links-quarry",
  },
  preserveLinks: {
    name: "The Preserve/Links",
    url: "https://www.boynegolf.com/eleven-courses/links-quarry",
  },
  crookedTree: {
    name: "Crooked Tree Golf Club",
    url: "https://www.boynegolf.com/eleven-courses/the-moor",
  },
}

const venue = (round, key) => ({ round, ...VENUES[key] })

export const matchVenuesByYear = {
  "2021": [
    venue("Round 1", "tributeOtsego"),
    venue("Round 2", "classicOtsego"),
    venue("Round 3", "gaylordGolfClub"),
  ],
  "2022": [
    venue("Round 1", "stoatinBrae"),
    venue("Round 2", "stonehedgeSouth"),
    venue("Round 3", "gullLakeEast"),
    venue("Round 4", "gullLakeWest"),
  ],
  "2023": [
    venue("Round 1", "arthurHills"),
    venue("Round 2", "donaldRossMemorial"),
    venue("Round 3", "theMoor"),
    venue("Round 4", "theHeather"),
  ],
  "2024": [
    venue("Round 1", "linksQuarry"),
    venue("Round 2", "theMoor"),
    venue("Round 3", "arthurHills"),
    venue("Round 4", "theHeather"),
  ],
  "2025": [
    venue("Round 1", "preserveLinks"),
    venue("Round 2", "crookedTree"),
    venue("Round 3", "theHeather"),
    venue("Round 4", "arthurHills"),
  ],
  "2026": [
    venue("Round 1", "preserveLinks"),
    venue("Round 2", "crookedTree"),
    venue("Round 3", "arthurHills"),
    venue("Round 4", "donaldRossMemorial"),
  ],
}

export const getMatchVenues = year => matchVenuesByYear[String(year)] || []
