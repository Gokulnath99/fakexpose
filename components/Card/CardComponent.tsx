import { LeadershipTeamData, TechnicalTeamData } from "../../sample_data/CardList";
import { HoverEffect } from "../ui/card-hover-effect";

export function Card() {
  return (
    <div className="px-11 block">
        <h2 className="text-3xl underline">Leadership Team</h2>
        <HoverEffect items={LeadershipTeamData} />
        <h2 className="text-3xl underline">Technical Team</h2>
        <HoverEffect items={TechnicalTeamData} />
    </div>
  );
}
