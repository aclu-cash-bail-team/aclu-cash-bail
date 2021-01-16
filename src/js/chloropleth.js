import { RaceMapContainer, BailRaceMap, BailRateMap } from "./classes/Map.js";
import { BAIL_RATE_DATA, ROR_RATE_DATA, BAIL_RACE_RATE_DATA } from "./data.js";

new BailRateMap(BAIL_RATE_DATA, 42.6);
new BailRateMap(ROR_RATE_DATA, 22.7);
const container = new RaceMapContainer();
const black = new BailRaceMap(BAIL_RACE_RATE_DATA, 2, "black", container);
const white = new BailRaceMap(BAIL_RACE_RATE_DATA, 3, "white", container);
container.registerBlack(black);
container.registerWhite(white);
