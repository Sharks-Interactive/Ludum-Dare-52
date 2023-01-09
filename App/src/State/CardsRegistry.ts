import type { Card } from "./Card";
import { AirDefenseCard } from "./Cards/AirDefenseCard";
import { AllyCard } from "./Cards/Allies";
import { AllyAngerCard } from "./Cards/AllyAnger";
import { KillFuncleCard } from "./Cards/AssasinateCard";
import { AssasinationCard } from "./Cards/AssasinationCard";
import { AssaultWithDinosCard } from "./Cards/AssaultWithDinosCard";
import { AttackedCard } from "./Cards/AttackedCard";
import { AttackedLogCard } from "./Cards/AttackLogCard";
import { BankruptCard } from "./Cards/Bankrupt";
import { BioMechCard } from "./Cards/BiomechanicalCard";
import { BridgeAccident } from "./Cards/BridgeAccident";
import { BudgetCard } from "./Cards/BudgetCard";
import { BurnOutCard } from "./Cards/BurnOutCard";
import { CampaignCard } from "./Cards/Campaign";
import { WhaleCitizensCard } from "./Cards/CitizenshipWhales";
import { CoffeeShortageCard } from "./Cards/CoffeeShortage";
import { DailyNewsCard } from "./Cards/DailyNewsCard";
import { DinoCitizensCard } from "./Cards/DinoCitizenshipCard";
import { DinoLeadersCard } from "./Cards/DinoLeadersCard";
import { DinoSupportCard } from "./Cards/DinoSupportOfferCard";
import { EducationFundingCard } from "./Cards/EducationFundingCard";
import { ElectionCard } from "./Cards/ElectionCard";
import { EmbassyDinosCard } from "./Cards/EmbassyDinosCard";
import { EmbassyWhalesCard } from "./Cards/EmbassyWhalesCard";
import { EmbezzleBadCard } from "./Cards/EmbezzleBadCard";
import { DiscoverCard } from "./Cards/FoundOut";
import { IntegDinosCard } from "./Cards/FullIntegrationDinosCard";
import { FuncleAliveCard } from "./Cards/FuncleAlive";
import { FuncleDeadCard } from "./Cards/FuncleDead";
import { FuncleOnRunCard } from "./Cards/FuncleOnRunCard";
import { FunclePropCard } from "./Cards/FunclePropCard";
import { HappyMHealthResponseCard } from "./Cards/HappyMHealthResponse";
import { HappyWDinosCard } from "./Cards/HappyWDinosCard";
import { ImmConcCard } from "./Cards/ImmigrationConcernCard";
import { BombardmentCard } from "./Cards/IndiscriminateBombardmentCard";
import { IntelShareDinosCard } from "./Cards/IntelligenceShareDinosCard";
import { IntroCard } from "./Cards/IntroCard";
import { LogisticsCard } from "./Cards/LogisticsCard";
import { LudumDareCard } from "./Cards/LudumDareCard";
import { MarriageOpedCard } from "./Cards/MarriageOpedCard";
import { MeltdownCard } from "./Cards/MeltdownCard";
import { MHealthCard } from "./Cards/MentalHealthCard";
import { MiliCombDinosCard } from "./Cards/MiliCombineDinosCard";
import { MisInfoCard } from "./Cards/Misinfo5GCard";
import { MusicalDeathCard } from "./Cards/MusicalDeath";
import { BordersDinosCard } from "./Cards/OpenBordersDinosCard";
import { WhaleBordersCard } from "./Cards/OpenBordersWhalesCard";
import { OutrageCard } from "./Cards/OutrageCard";
import { PandemicCard } from "./Cards/PandemicCard";
import { PlasticBagCard } from "./Cards/PlasticBags";
import { PoliceStateCard } from "./Cards/PoliceStateCard";
import { PopMHealthCard } from "./Cards/PopMHealthCrisisCard";
import { PresenceCard } from "./Cards/PresenceCard";
import { RaiseMilitaryCard } from "./Cards/RaiseMilitaryCardOne";
import { RegulationsCard } from "./Cards/RegulationsCard";
import { RenewECard } from "./Cards/RenewECard";
import { RSpeechBlowback } from "./Cards/RSpeechBlowback";
import { SentientCard } from "./Cards/SentientCard";
import { SocialMediaCard } from "./Cards/SocialMediaCard";
import { SOECard } from "./Cards/SOECard";
import { SpeechCard } from "./Cards/SpeechCard";
import { SportingCard } from "./Cards/SportingCard";
import { StudentDebtCard } from "./Cards/StudentDebtCard";
import { TheFuncleCard } from "./Cards/TheFuncleCard";
import { FuncleSurrenderCard } from "./Cards/TheFuncleSurrenderCard";
import { NuclearCard } from "./Cards/TheNuclearOptionCard";
import { TransportCard } from "./Cards/Transport";
import { TryDiplomacyCard } from "./Cards/TryDiplomacyCard";
import { UninhabitableCard } from "./Cards/UninhabitableCard";
import { ViolenceCard } from "./Cards/ViolenceCard";
import { VictoryStatementCard } from "./Cards/WarVictoryAnnounceCard";
import { WhaleSupportCard } from "./Cards/WhaleSupportReqCard";
import { WorkWDinosCard } from "./Cards/WorkWithDinosCard";
import { VillageWrongCard } from "./Cards/WrongInTheVillageCard";

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
    new TheFuncleCard(),
    new BioMechCard(),
    new BankruptCard(),
    new PandemicCard(),
    new AssasinationCard(),
    new TransportCard(),
    new SocialMediaCard(),
    new CampaignCard(),
    new SportingCard(),
    // 30
    new KillFuncleCard(),
    new FuncleDeadCard(),
    new FuncleAliveCard(),
    new StudentDebtCard(),
    new MHealthCard(),
    new SentientCard(),
    new EmbezzleBadCard(),
    new MusicalDeathCard(),
    new FunclePropCard(),
    new PresenceCard(),
    // 40
    new RegulationsCard(),
    new EducationFundingCard(),
    new ViolenceCard(),
    new MarriageOpedCard(),
    new VillageWrongCard(),
    new PoliceStateCard(),
    new WhaleBordersCard(),
    new RSpeechBlowback(),
    new ElectionCard(),
    new PopMHealthCard(),
    // 50
    new DinoSupportCard(),
    new RenewECard(),
    new MisInfoCard(),
    new BurnOutCard(),
    new ImmConcCard(),
    new BordersDinosCard(),
    new EmbassyDinosCard(),
    new EmbassyWhalesCard(),
    new WorkWDinosCard(),
    new DinoCitizensCard(),
    // 60
    new IntelShareDinosCard(),
    new MiliCombDinosCard(),
    new DinoLeadersCard(),
    new IntegDinosCard(),
    new AssaultWithDinosCard(),
    new FuncleOnRunCard(),
    new WhaleSupportCard(),
    new WhaleCitizensCard(),
    new SOECard(),
    new BombardmentCard(),
    // 70
    new FuncleSurrenderCard(),
    new VictoryStatementCard(),
    new HappyMHealthResponseCard(),
    new HappyWDinosCard(),
];
