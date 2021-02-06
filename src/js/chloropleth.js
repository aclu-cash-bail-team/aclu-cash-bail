import { RaceMapContainer, BailRateMap, BailPostingMap, SwitchableMap } from "./classes/Map.js";
import { BAIL_RATE_DATA, ROR_RATE_DATA, BAIL_RACE_RATE_DATA, BAIL_POSTING_DATA } from "./data.js";

const cashBailRateMap = new BailRateMap("cash-bail-rate", BAIL_RATE_DATA, 42.6);
const rorRateMap = new BailRateMap("ror-rate", ROR_RATE_DATA, 22.7);
const rateContainer = document.getElementById("rate-container");
new SwitchableMap(cashBailRateMap, rorRateMap, rateContainer);
new RaceMapContainer("race-rate", BAIL_RACE_RATE_DATA, 37.9, 54.7);
new BailPostingMap("bail-posting", BAIL_POSTING_DATA, 58.5, 70);
