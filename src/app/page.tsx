import { HomeMotion } from "@/components/home/HomeMotion";
import { HeroStage } from "@/components/home/HeroStage";
import { ChallengeSilence } from "@/components/home/ChallengeSilence";
import { WorldsMorph } from "@/components/home/WorldsMorph";
import { UnreasonableDevice } from "@/components/home/UnreasonableDevice";
import { OutcomesSolve } from "@/components/home/OutcomesSolve";
import { CaseStoriesHome } from "@/components/home/CaseStoriesHome";
import { PerspectiveQuiet } from "@/components/home/PerspectiveQuiet";
import { ProcessChain } from "@/components/home/ProcessChain";
import { CollectiveHome } from "@/components/home/CollectiveHome";
import { FinalChallenge } from "@/components/home/FinalChallenge";

export default function HomePage() {
  return (
    <HomeMotion>
      <HeroStage />
      <ChallengeSilence />
      <WorldsMorph />
      <UnreasonableDevice />
      <OutcomesSolve />
      <CaseStoriesHome />
      <PerspectiveQuiet />
      <ProcessChain />
      <CollectiveHome />
      <FinalChallenge />
    </HomeMotion>
  );
}
