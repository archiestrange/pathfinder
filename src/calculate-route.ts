import { Destination, CalculationItem, UsedRoute } from "./types";
import { getConnectingRoutes } from "./get-connection-routes";

export function Calculate(startSite: Destination, endSite: Destination): CalculationItem[] {

    // Set initial route to use startSite's details
    const routes: CalculationItem[] = [
        {
            current: startSite,
            used: false,
            usedRoutes: [],
            total: 0,
            foundDestination: false
        }
    ];

    for(let i = 0; i < routes.length; i++) {

        routes.forEach((route: CalculationItem, idx: number) => {
            
            // Ignore routes that have already been used or have found 
            if (route.used || route.foundDestination) {
                return;
            }

            // Find connecting routes from this route's destination that havn;t already been visited
            const possibleRoutes = getConnectingRoutes(route, startSite);

            // Push each new possible route into 'routes' array for further iteration
            for (const possRoute of possibleRoutes) {
                const usedRoute: UsedRoute = { start: route.current, end: possRoute.destination };
                const newRoute: CalculationItem = {
                    current: possRoute.destination,
                    used: false,
                    usedRoutes: [ ...route.usedRoutes, usedRoute ],
                    total: route.total + possRoute.distance,
                    foundDestination: possRoute.destination === endSite ? true : false
                };
                routes.push(newRoute);
            }
            
            // Set this route as used so it wont be used in iteration again
            routes[idx] = { ...routes[idx], used: true };
        });

    }

    // Filter out any routes that didn't find the end
    const pathsToDestination = routes.filter(r => r.foundDestination);

    // Sort in order of lowest travel count to highest
    pathsToDestination.sort(function (a, b) {
        return a.total - b.total
    });

    return pathsToDestination;
}