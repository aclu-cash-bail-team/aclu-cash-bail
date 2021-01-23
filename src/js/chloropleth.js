import { RaceMapContainer, BailRateMap } from "./classes/Map.js";
import { BAIL_RATE_DATA, ROR_RATE_DATA, BAIL_RACE_RATE_DATA } from "./data.js";

new BailRateMap("cash-bail-rate", BAIL_RATE_DATA, 42.6);
new BailRateMap("ror-rate", ROR_RATE_DATA, 22.7);
new RaceMapContainer("race-rate", BAIL_RACE_RATE_DATA, 37.9, 54.7);
