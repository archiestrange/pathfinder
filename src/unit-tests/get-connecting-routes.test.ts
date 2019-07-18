import { CalculationItem, Destination, Route } from "../types";
import { getConnectingRoutes } from "../get-connection-routes";

test("Get connecting routes", () => {
    // Make sure used routes are excluded from new connecting routes

    const route: CalculationItem = {
        current: Destination.C,
        foundDestination: false,
        total: 2,
        used: false,
        usedRoutes: [
            {
                start: Destination.A,
                end: Destination.C
            }
        ]
    };

    const connectingRoutes = getConnectingRoutes(route, Destination.A);
    
    const expectedResult: Route[] = [
        { destination: Destination.D, distance: 1 },
        { destination: Destination.F, distance: 4 }
    ];

    expect(connectingRoutes).toEqual(expectedResult);
});