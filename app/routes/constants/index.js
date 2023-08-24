const ADJECTIVES = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
];
  
const NOUNS = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
];

export const BillingInterval = {
    OneTime: "ONE_TIME",
    Every30Days: "EVERY_30_DAYS",
    Annual: "ANNUAL",
};

export const RECURRING_INTERVALS = [
    BillingInterval.Every30Days,
    BillingInterval.Annual,
];

export const FAKE_SUBSCRIPTION = [
    {
        subscription_name : 'BASIC',
        amount : 45,
        features: ["up to 1000 orders/month", "up 1000 products"],
        productCount : 1000,
        orderCount : 1000
    },
    {
        subscription_name : 'GROWTH',
        amount : 79,
        features: ["up to 3000 orders/month", "up 3000 products"],
        productCount : 3000,
        orderCount : 3000
    },
    {
        subscription_name : 'PRO',
        amount : 99,
        features: ["up to 6000 orders/month", "up 6000 products"],
        productCount : 6000,
        orderCount : 6000
    },
    {
        subscription_name : 'ENTERPRISE',
        amount : 120,
        features: ["up to 11000 orders/month", "up 20000 products"],
        productCount : 11000,
        orderCount : 20000
    }
]

export const randomTitle = () => {
    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  
    return `${adjective} ${noun}`;
}
