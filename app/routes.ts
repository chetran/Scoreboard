import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("score","routes/Scoreboard.tsx")
] satisfies RouteConfig;
