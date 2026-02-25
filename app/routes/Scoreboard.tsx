import Title from "~/components/Title";
import { useSearchParams } from "react-router";
import ScoreCard from "~/components/Scoreboard/ScoreCard";

export default function Scoreboard() {
    const [searchParams] = useSearchParams();
    const playersParam = searchParams.get("players");
    const gameRulesParam = searchParams.get("gamerules");
    
    const players: string[] = playersParam ? JSON.parse(playersParam) : [];
    const gameRules = gameRulesParam ? JSON.parse(decodeURIComponent(gameRulesParam)) : [];

    console.log("Players:", players);
    console.log("Game Rules:", gameRules);
    return <>
        <Title title="Scoreboard" />
        <ScoreCard players={players} gameRules={gameRules} />
    </>;
}