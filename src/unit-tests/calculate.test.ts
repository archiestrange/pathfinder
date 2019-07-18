import { Calculate } from "../calculate-route";
import { Destination, CalculationItem } from "../types";

test("Calculate test", () => {
    // A - C is one step and simple test
    const results = Calculate(Destination.A, Destination.C);
    const expectedResult: CalculationItem[] = [{
        current: Destination.C,
        foundDestination: true,
        total: 2,
        used: false,
        usedRoutes: [{
        end: Destination.C,
        start: Destination.A,
        }]
    }];
    expect(results).toEqual(expectedResult);
});