export type QuizEntry = {
  answer: string;
  aliases?: string[];
  category: string;
  icon: string;
  clues: string[];
  source: string;
};

export const CATALOG_VERSION = "2026.1";

export const villagers: QuizEntry[] = [
  { answer: "Abigail", category: "Villager", icon: "🔮", clues: ["Loves receiving Amethyst and Pumpkin.", "Hates receiving Holly.", "Can be found in the Museum library at 12:00 PM on Wednesdays.", "Their 4-heart event takes place in the Mountains on a rainy day."], source: "https://stardewvalleywiki.com/Abigail" },
  { answer: "Alex", category: "Villager", icon: "🏈", clues: ["Loves Complete Breakfast and Salmon Dinner.", "Hates Holly.", "Spends summer mornings by the tree beside his house before heading to the beach.", "Their 8-heart event happens at the beach on a sunny day."], source: "https://stardewvalleywiki.com/Alex" },
  { answer: "Elliott", category: "Villager", icon: "🪶", clues: ["Loves Lobster, Crab Cakes, and Pomegranate.", "Hates Sea Cucumber.", "Lives alone in a cabin on the beach.", "Their 8-heart event is a reading at the Museum."], source: "https://stardewvalleywiki.com/Elliott" },
  { answer: "Emily", category: "Villager", icon: "🧵", clues: ["Loves Cloth, Wool, Amethyst, and Aquamarine.", "Hates Fish Taco, Holly, and Maki Roll.", "Works most evenings at the Stardrop Saloon from 4:00 PM.", "Their 8-heart event is called Clothing Therapy."], source: "https://stardewvalleywiki.com/Emily" },
  { answer: "Haley", category: "Villager", icon: "🌻", clues: ["Loves Coconut, Fruit Salad, Pink Cake, and Sunflower.", "Hates Prismatic Shard.", "Can often be found taking photographs near Marnie's Ranch in spring.", "Their 8-heart event takes place in Cindersap Forest on a sunny day."], source: "https://stardewvalleywiki.com/Haley" },
  { answer: "Harvey", category: "Villager", icon: "☕", clues: ["Loves Coffee, Pickles, Truffle Oil, and Wine.", "Hates Coral, Nautilus Shell, and Rainbow Shell.", "Runs the medical clinic in Pelican Town.", "Their 10-heart event involves a hot-air balloon."], source: "https://stardewvalleywiki.com/Harvey" },
  { answer: "Leah", category: "Villager", icon: "🎨", clues: ["Loves Goat Cheese, Salad, Truffle, and Wine.", "Hates Bread, Hashbrowns, Pancakes, and Pizza.", "Lives in a small cottage south of Marnie's Ranch.", "Their 2-heart event lets the player suggest an art direction."], source: "https://stardewvalleywiki.com/Leah" },
  { answer: "Maru", category: "Villager", icon: "🔭", clues: ["Loves Battery Pack, Cauliflower, and Strawberry.", "Hates Holly.", "Works at Harvey's Clinic on Tuesdays and Thursdays.", "Their 10-heart event reveals a major invention."], source: "https://stardewvalleywiki.com/Maru" },
  { answer: "Penny", category: "Villager", icon: "📚", clues: ["Loves Melon, Poppy, and Roots Platter.", "Hates Rabbit's Foot.", "Tutors Jas and Vincent at the Museum on Tuesdays.", "Their 4-heart event takes place inside the trailer."], source: "https://stardewvalleywiki.com/Penny" },
  { answer: "Sam", category: "Villager", icon: "🎸", clues: ["Loves Cactus Fruit, Maple Bar, Pizza, and Tigerseye.", "Hates Coal and Iridium Ore.", "Works at JojaMart on Mondays and Wednesdays before it closes.", "Their 8-heart event is a concert at the Bus Stop."], source: "https://stardewvalleywiki.com/Sam" },
  { answer: "Sebastian", category: "Villager", icon: "🐸", clues: ["Loves Frozen Tear, Obsidian, Pumpkin Soup, and Sashimi.", "Hates Complete Breakfast and Farmer's Lunch.", "Can be found playing pool at the Stardrop Saloon on Fridays.", "Their 4-heart event takes place in the garage."], source: "https://stardewvalleywiki.com/Sebastian" },
  { answer: "Shane", category: "Villager", icon: "🐔", clues: ["Loves Beer, Hot Pepper, Pepper Poppers, and Pizza.", "Hates Pickles.", "Works at JojaMart on weekdays before it closes.", "Their 8-heart event introduces special blue chickens."], source: "https://stardewvalleywiki.com/Shane" },
  { answer: "Caroline", category: "Villager", icon: "🍵", clues: ["Loves Fish Taco, Green Tea, and Summer Spangle.", "Hates Salmonberry.", "Attends aerobics at Pierre's General Store on Tuesdays.", "Their 2-heart event unlocks the Tea Sapling recipe."], source: "https://stardewvalleywiki.com/Caroline" },
  { answer: "George", category: "Villager", icon: "🪵", clues: ["Loves Leek and Fried Mushroom.", "Hates Clay and Dandelion.", "Usually watches television at home during the morning.", "Their 6-heart event begins when entering their house."], source: "https://stardewvalleywiki.com/George" },
  { answer: "Krobus", category: "Villager", icon: "🌑", clues: ["Loves Void Egg, Void Mayonnaise, and Wild Horseradish.", "Hates Life Elixir and most mayonnaise.", "Runs a shop in the Sewers every day.", "Can become the player's roommate instead of a spouse."], source: "https://stardewvalleywiki.com/Krobus" },
  { answer: "Linus", category: "Villager", icon: "🏕️", clues: ["Loves Coconut, Dish O' The Sea, Yam, and Cactus Fruit.", "Hates most gems.", "Lives in a tent north of the Carpenter's Shop.", "Their 4-heart event teaches the Wild Bait recipe."], source: "https://stardewvalleywiki.com/Linus" },
  { answer: "Robin", category: "Villager", icon: "🔨", clues: ["Loves Goat Cheese, Peach, and Spaghetti.", "Hates Holly.", "Runs the Carpenter's Shop from 9:00 AM on most days.", "Sends the Woodskip quest by mail after reaching six hearts."], source: "https://stardewvalleywiki.com/Robin" },
  { answer: "Willy", category: "Villager", icon: "🎣", clues: ["Loves Catfish, Octopus, Pumpkin, and Sea Cucumber.", "Hates Holly.", "Runs the Fish Shop on the beach from 9:00 AM.", "Invites the player behind his shop after the Community Center is complete."], source: "https://stardewvalleywiki.com/Willy" }
];

export const generalEntries: QuizEntry[] = [
  { answer: "Pufferfish", category: "Fish", icon: "🐡", clues: ["Caught in the ocean from 12:00 PM–4:00 PM.", "Appears in summer when the sun is shining.", "Has a difficulty of 80 with floater behaviour.", "Used in the Specialty Fish Bundle."], source: "https://stardewvalleywiki.com/Pufferfish" },
  { answer: "Catfish", category: "Fish", icon: "🐟", clues: ["Found in rivers during spring and fall.", "Usually requires rainy weather.", "Can be caught from 6:00 AM–12:00 AM.", "Has a difficulty of 75 with mixed behaviour."], source: "https://stardewvalleywiki.com/Catfish" },
  { answer: "Sturgeon", category: "Fish", icon: "🐟", clues: ["Caught in the Mountain Lake.", "Appears in summer and winter.", "Its Roe can be aged into Caviar.", "Has a difficulty of 78 with mixed behaviour."], source: "https://stardewvalleywiki.com/Sturgeon" },
  { answer: "Lava Eel", category: "Fish", icon: "🌋", clues: ["Can be caught on floor 100 of the Mines.", "Can also be found at the Volcano Caldera.", "Has a difficulty of 90 with mixed behaviour.", "One of the most valuable regular fish."], source: "https://stardewvalleywiki.com/Lava_Eel" },
  { answer: "Woodskip", category: "Fish", icon: "🪵", clues: ["Normally caught in the Secret Woods pond.", "Can appear on the Forest Farm.", "Available in all seasons and weather.", "Used in the Specialty Fish Bundle."], source: "https://stardewvalleywiki.com/Woodskip" },
  { answer: "Walleye", category: "Fish", icon: "🌧️", clues: ["Caught from 12:00 PM–2:00 AM.", "Found in rivers, the Forest Pond, and Mountain Lake.", "Appears in fall rain.", "Used in the Night Fishing Bundle."], source: "https://stardewvalleywiki.com/Walleye" },
  { answer: "Keg", category: "Crafting", icon: "🛢️", clues: ["Recipe unlocks at Farming level 8.", "Crafted with Wood, Copper Bar, Iron Bar, and Oak Resin.", "Turns fruit into Wine.", "Turns Hops into Pale Ale."], source: "https://stardewvalleywiki.com/Keg" },
  { answer: "Preserves Jar", category: "Crafting", icon: "🫙", clues: ["Recipe unlocks at Farming level 4.", "Crafted with Wood, Stone, and Coal.", "Turns vegetables into Pickles.", "Turns fruit into Jelly."], source: "https://stardewvalleywiki.com/Preserves_Jar" },
  { answer: "Crystalarium", category: "Crafting", icon: "💎", clues: ["Replicates most inserted gems.", "Cannot replicate Prismatic Shards.", "One is a reward from the 25,000g Vault Bundle.", "Its recipe unlocks at Mining level 9."], source: "https://stardewvalleywiki.com/Crystalarium" },
  { answer: "Lightning Rod", category: "Crafting", icon: "⚡", clues: ["Intercepts lightning on the farm.", "Produces a Battery Pack after being struck.", "Its recipe unlocks at Foraging level 6.", "Crafted with Iron Bar, Refined Quartz, and Bat Wings."], source: "https://stardewvalleywiki.com/Lightning_Rod" },
  { answer: "Bee House", category: "Crafting", icon: "🍯", clues: ["Produces Wild Honey outdoors in most seasons.", "Nearby flowers change the honey type and value.", "Does not produce outdoors in winter.", "Its recipe unlocks at Farming level 3."], source: "https://stardewvalleywiki.com/Bee_House" },
  { answer: "Oil Maker", category: "Crafting", icon: "🫒", clues: ["Turns Truffles into Truffle Oil.", "Also processes Corn, Sunflower, and Sunflower Seeds.", "Its recipe unlocks at Farming level 8.", "Requires Slime, Hardwood, and a Gold Bar."], source: "https://stardewvalleywiki.com/Oil_Maker" },
  { answer: "Ancient Fruit", category: "Crop", icon: "🫐", clues: ["Grows from Ancient Seeds.", "Takes 28 days to mature.", "Produces another fruit every 7 days.", "Grows in spring, summer, and fall."], source: "https://stardewvalleywiki.com/Ancient_Fruit" },
  { answer: "Starfruit", category: "Crop", icon: "⭐", clues: ["Seeds are normally purchased in the Oasis.", "Takes 13 days to mature.", "Grows during summer.", "Its Wine is among the most valuable artisan goods."], source: "https://stardewvalleywiki.com/Starfruit" },
  { answer: "Sweet Gem Berry", category: "Crop", icon: "💠", clues: ["Grown from a Rare Seed.", "Takes 24 days to mature.", "Grows in fall.", "Old Master Cannoli trades a Stardrop for one."], source: "https://stardewvalleywiki.com/Sweet_Gem_Berry" },
  { answer: "Coffee Bean", category: "Crop", icon: "☕", clues: ["Can be planted in spring or summer.", "Produces more beans every 2 days after maturing.", "Five placed in a Keg make Coffee.", "May be sold by the Traveling Cart."], source: "https://stardewvalleywiki.com/Coffee_Bean" },
  { answer: "Prismatic Shard", category: "Mineral", icon: "🌈", clues: ["One is used to obtain the Galaxy Sword.", "Can be donated to the Museum.", "Most villagers love it, but Haley hates it.", "Cannot be duplicated in a Crystalarium."], source: "https://stardewvalleywiki.com/Prismatic_Shard" },
  { answer: "Earth Crystal", category: "Mineral", icon: "🔶", clues: ["Commonly found on floors 1–39 of the Mines.", "Needed to craft a Mayonnaise Machine.", "Can be replicated in a Crystalarium.", "Requested by several Fish Pond species."], source: "https://stardewvalleywiki.com/Earth_Crystal" },
  { answer: "Iridium Ore", category: "Resource", icon: "🟣", clues: ["Used to smelt Iridium Bars.", "Commonly found deeper in Skull Cavern.", "The Statue of Perfection can produce it daily.", "Five pieces and one Coal make a bar."], source: "https://stardewvalleywiki.com/Iridium_Ore" },
  { answer: "Hardwood", category: "Resource", icon: "🪵", clues: ["Large Stumps drop it when chopped.", "Six stumps regrow daily in the Secret Woods.", "Ten pieces are needed for the Stable.", "Mahogany Trees can also provide it."], source: "https://stardewvalleywiki.com/Hardwood" },
  { answer: "Skull Cavern", category: "Location", icon: "💀", clues: ["Located in the Calico Desert.", "Has no bottom floor.", "Iridium nodes become more common at greater depths.", "A Skull Key is needed to enter."], source: "https://stardewvalleywiki.com/Skull_Cavern" },
  { answer: "Secret Woods", category: "Location", icon: "🌲", clues: ["Entered from northwest Cindersap Forest.", "A Steel Axe is needed to clear the blocking log.", "Contains six renewable Large Stumps.", "Home to Old Master Cannoli."], source: "https://stardewvalleywiki.com/Secret_Woods" },
  { answer: "Ginger Island", category: "Location", icon: "🌴", clues: ["Reached by repairing Willy's boat.", "Golden Walnuts unlock new areas.", "Crops can grow here in any season.", "Home to the Volcano Dungeon."], source: "https://stardewvalleywiki.com/Ginger_Island" },
  { answer: "Greenhouse", category: "Building", icon: "🏡", clues: ["Allows crops to grow regardless of season.", "Has a 10×12 area of tillable soil.", "Can be restored through the Pantry bundles.", "Fruit trees can grow around the edge."], source: "https://stardewvalleywiki.com/Greenhouse" },
  { answer: "Junimo Hut", category: "Building", icon: "🍏", clues: ["Purchased from the Wizard after Goblin Problem.", "Helpers harvest nearby ripe crops.", "They do not work in rain.", "Requires Starfruit, Fiber, and Stone."], source: "https://stardewvalleywiki.com/Junimo_Hut" },
  { answer: "Galaxy Sword", category: "Weapon", icon: "⚔️", clues: ["Obtained by holding a Prismatic Shard between three pillars.", "The pillars are in the Calico Desert.", "Unlocks Galaxy weapons at the Adventurer's Guild.", "It is a level 13 sword."], source: "https://stardewvalleywiki.com/Galaxy_Sword" },
  { answer: "Return Scepter", category: "Tool", icon: "🪄", clues: ["Teleports the player to the farm's front door.", "Can be used repeatedly.", "Sold by Krobus.", "Costs 2,000,000g."], source: "https://stardewvalleywiki.com/Return_Scepter" },
  { answer: "Stardrop", category: "Special item", icon: "✨", clues: ["Permanently increases maximum Energy by 34.", "Several can be obtained in one save.", "One is sold at the Stardew Valley Fair.", "Its taste message uses the player's Favourite Thing."], source: "https://stardewvalleywiki.com/Stardrop" },
  { answer: "Dance of the Moonlight Jellies", aliases: ["Moonlight Jellies"], category: "Festival", icon: "🪼", clues: ["Takes place on Summer 28.", "Begins at the beach between 10:00 PM and 12:00 AM.", "Ends after watching the migration.", "Closes out the summer season."], source: "https://stardewvalleywiki.com/Dance_Of_The_Moonlight_Jellies" },
  { answer: "Spirit's Eve", aliases: ["Spirits Eve"], category: "Festival", icon: "🎃", clues: ["Takes place on Fall 27.", "Held in Pelican Town at night.", "Its hedge maze contains a Golden Pumpkin.", "The maze includes a hidden passage."], source: "https://stardewvalleywiki.com/Spirit%27s_Eve" },
  { answer: "Dust Sprite", aliases: ["Dust Sprites"], category: "Monster", icon: "⚫", clues: ["Found in the frozen levels of the Mines.", "Often drops Coal.", "Bounces around in groups.", "Defeating 500 completes an eradication goal."], source: "https://stardewvalleywiki.com/Dust_Sprite" },
  { answer: "Pepper Rex", category: "Monster", icon: "🦖", clues: ["Found on prehistoric Skull Cavern floors.", "Breathes fire in one direction.", "May drop a Dinosaur Egg.", "Defeating 50 completes an eradication goal."], source: "https://stardewvalleywiki.com/Pepper_Rex" }
];

const hardClues = ["Loves both Amethyst and Pumpkin.","Loves both Complete Breakfast and Salmon Dinner.","Their 8-heart event is a public reading of their novel in the Museum.","Their 8-heart event is Clothing Therapy.","Hates receiving a Prismatic Shard.","Their 10-heart event involves a hot-air balloon ride.","Loves both Goat Cheese and Salad.","Loves both Battery Pack and Cauliflower.","Hates receiving a Rabbit's Foot.","Loves both Maple Bar and Tigerseye.","Loves both Frozen Tear and Obsidian.","Their 8-heart event reveals blue chickens.","Their 2-heart event leads to receiving the Tea Sapling recipe.","Loves both Leek and Fried Mushroom.","Can become your roommate when given a Void Ghost Pendant.","Their 4-heart event teaches you the Wild Bait recipe.","Loves both Peach and Spaghetti.","Loves both Octopus and Sea Cucumber."];
for (const [index, entry] of villagers.entries()) entry.clues[0] = hardClues[index];
villagers.push(...[{"answer":"Demetrius","clues":["Offers to set up fruit bats or mushrooms in your farm cave.","Loves Bean Hotpot, Ice Cream, Rice Pudding, and Strawberry.","Studies local wildlife.","Lives with Robin in the Mountains."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Demetrius"},{"answer":"Evelyn","clues":["Their 4-heart event teaches you the Cookie recipe.","Loves Beet, Chocolate Cake, Diamond, Fairy Rose, Stuffing, and Tulip.","Tends the town flowers.","Lives with George and Alex."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Evelyn"},{"answer":"Gus","clues":["Their 5-heart event gives you a Mini-Jukebox and its recipe.","Loves Diamond, Escargot, Fish Taco, Orange, and Tropical Curry.","Owns the Stardrop Saloon.","Employs Emily."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Gus"},{"answer":"Marnie","clues":["Loves both Farmer's Lunch and Pumpkin Pie.","Sells animals and animal supplies.","Lives with Jas and Shane.","Their birthday is Fall 18."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Marnie"},{"answer":"Clint","clues":["Loves both Artichoke Dip and Fiddlehead Risotto.","Upgrades your tools and opens geodes.","Works at the Blacksmith shop.","Their birthday is Winter 26."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Clint"},{"answer":"Lewis","clues":["Loves both Glazed Yams and Autumn's Bounty.","Is the mayor of Pelican Town.","Asks you to retrieve his lucky purple shorts.","Their birthday is Spring 7."],"category":"Villager","icon":"🧑‍🌾","source":"https://stardewvalleywiki.com/Lewis"}]);
generalEntries.push(...[{"answer":"Rainbow Trout","clues":["Its pond can very rarely produce a Prismatic Shard at population nine or more.","Caught in rivers and the Mountain Lake on sunny summer days.","Available from 6:00 AM to 7:00 PM.","Used to cook Trout Soup."],"category":"Fish","icon":"🐟","source":"https://stardewvalleywiki.com/Rainbow_Trout"},{"answer":"Octopus","clues":["Its pond can produce Omni Geodes at population nine or more.","Caught in the ocean in summer from 6:00 AM to 1:00 PM.","Has difficulty 95 and sinker behaviour.","Willy loves receiving this fish."],"category":"Fish","icon":"🐟","source":"https://stardewvalleywiki.com/Octopus"},{"answer":"Blobfish","clues":["Its pond may request a Rainbow Shell or Rice Pudding at population seven.","Caught on the Night Market submarine.","Its pond can produce Pearls.","Has difficulty 75 and floater behaviour."],"category":"Fish","icon":"🐟","source":"https://stardewvalleywiki.com/Blobfish"},{"answer":"Ice Pip","clues":["Its pond first requests ten Iron Ore.","Caught on floor 60 of the Mines.","Its pond can produce Frozen Geodes.","Has difficulty 85 and dart behaviour."],"category":"Fish","icon":"🐟","source":"https://stardewvalleywiki.com/Ice_Pip"},{"answer":"Super Cucumber","clues":["Its pond turns purple at population five.","Caught in the ocean on summer and fall evenings.","Its pond can produce Iridium Ore.","Available from 6:00 PM to 2:00 AM."],"category":"Fish","icon":"🐟","source":"https://stardewvalleywiki.com/Super_Cucumber"}]);
const fishClues: Record<string, string[]> = {
Pufferfish: ["Caught in the ocean on sunny summer days, from noon to 4:00 PM.", "Has difficulty 80 and floater behaviour."],
Catfish: ["Caught in the town river during spring or fall rain.", "Has difficulty 75 and mixed behaviour."],
Sturgeon: ["Its Roe is the only Roe that becomes Caviar.", "Its pond first requests one Diamond."],
"Lava Eel": ["Its pond first requests three Fire Quartz.", "Caught on floor 100 of the Mines or at the Volcano Caldera."],
Woodskip: ["Its pond first requests ten Hardwood.", "Caught in the Secret Woods pond or on the Forest Farm."],
Walleye: ["Caught in rivers, the Forest Pond, or Mountain Lake during fall rain.", "Available from noon to 2:00 AM and used in the Night Fishing Bundle."]
};
for (const entry of generalEntries) {
if (fishClues[entry.answer]) entry.clues = [...fishClues[entry.answer], ...entry.clues.slice(2)];
entry.clues = entry.clues.map(clue => clue.replace("Ten pieces are needed for the Stable.", "One hundred pieces are needed for the Stable."));
}

function hashSeed(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffled<T>(items: T[], seedText: string) {
  let seed = hashSeed(seedText);
  const result = [...items];
  const random = () => {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function legacyPuzzle(date: string) {
return [...shuffled(villagers.slice(0,18), `villagers-2026.1-${date}`).slice(0,3), ...shuffled(generalEntries.slice(0,32), `general-2026.1-${date}`).slice(0,5)];
}
const epoch = Date.parse("2026-09-16T00:00:00Z");
const cache = new Map<string, QuizEntry[]>();
export function getDailyPuzzle(date: string): QuizEntry[] {
if (date < "2026-09-16") return legacyPuzzle(date);
if (cache.has(date)) return cache.get(date)!;
const recent: QuizEntry[][] = [legacyPuzzle("2026-09-14"), legacyPuzzle("2026-09-15")];
const days = Math.floor((Date.parse(date + "T00:00:00Z") - epoch) / 86400000);
for (let day = 0; day <= days; day++) {
const key = new Date(epoch + day * 86400000).toISOString().slice(0,10);
const excluded = new Set(recent.flat().map(entry => entry.answer));
const pick = (entries: QuizEntry[], count: number, kind: string) => {
const available = entries.filter(entry => !excluded.has(entry.answer));
if (available.length < count) throw new Error("Catalogue too small for seven-day rotation");
return shuffled(available, kind + "-" + CATALOG_VERSION + "-" + key).slice(0,count);
};
const puzzle = [...pick(villagers,3,"villagers"), ...pick(generalEntries,5,"general")];
cache.set(key,puzzle); recent.push(puzzle); if (recent.length > 6) recent.shift();
}
return cache.get(date)!;
}
