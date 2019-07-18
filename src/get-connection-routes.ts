import { CalculationItem, Destination, Route } from "./types";
import { routesAvailable } from "./get-available-routes";

export const getConnectingRoutes = (route: CalculationItem, startSite: Destination): Route[] => {
    
    const allRoutesAvailable = routesAvailable(route.current);

    const filteredRoutes = allRoutesAvailable.filter(ar => {
        const usedStarts = route.usedRoutes.map(r => r.start);
        const usedEnds = route.usedRoutes.map(r => r.end);
        return ar.destination !== startSite && ((!usedStarts.includes(ar.destination) || !usedEnds.includes(ar.destination)));
    });

    return filteredRoutes;
}