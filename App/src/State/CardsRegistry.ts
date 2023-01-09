import type { Card } from "./Card";
import { AirDefenseCard } from "./Cards/AirDefenseCard";
import { AllyCard } from "./Cards/Allies";
import { AllyAngerCard } from "./Cards/AllyAnger";
import { AttackedCard } from "./Cards/AttackedCard";
import { AttackedLogCard } from "./Cards/AttackLogCard";
import { BridgeAccident } from "./Cards/BridgeAccident";
import { BudgetCard } from "./Cards/BudgetCard";
import { CoffeeShortageCard } from "./Cards/CoffeeShortage";
import { DailyNewsCard } from "./Cards/DailyNewsCard";
import { DiscoverCard } from "./Cards/FoundOut";
import { IntroCard } from "./Cards/IntroCard";
import { LogisticsCard } from "./Cards/LogisticsCard";
import { LudumDareCard } from "./Cards/LudumDareCard";
import { MeltdownCard } from "./Cards/MeltdownCard";
import { OutrageCard } from "./Cards/OutrageCard";
import { PlasticBagCard } from "./Cards/PlasticBags";
import { RaiseMilitaryCard } from "./Cards/RaiseMilitaryCardOne";
import { SpeechCard } from "./Cards/SpeechCard";
import { TheFuncleCard } from "./Cards/TheFuncleCard";
import { NuclearCard } from "./Cards/TheNuclearOptionCard";
import { TryDiplomacyCard } from "./Cards/TryDiplomacyCard";
import { UninhabitableCard } from "./Cards/UninhabitableCard";

export const gameCards: Card[] = [
    new IntroCard(),
    new TryDiplomacyCard(),
    new RaiseMilitaryCard(),
    new AttackedCard(),
    new LudumDareCard(),
    new NuclearCard(),
    new MeltdownCard(),
    new UninhabitableCard(),
    new BudgetCard(),
    new LogisticsCard(),
    // 10
    new AttackedLogCard(),
    new OutrageCard(),
    new CoffeeShortageCard(),
    new BridgeAccident(),
    new DiscoverCard(),
    new DailyNewsCard(),
    new SpeechCard(),
    new PlasticBagCard(),
    new AllyCard(),
    new AllyAngerCard(),
    // 20
    new AirDefenseCard(),
    new TheFuncleCard()
];
