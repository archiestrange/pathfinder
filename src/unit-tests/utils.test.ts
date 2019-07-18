import { destinations, convertResultToStringArray } from "../utils";
import { Destination } from "../types";

test("Destinations string created correctly", () => {
    const testDestinations = destinations;
    const correctDestinations = ["A", "B", "C", "D", "E", "F", "G", "H"];
    expect(testDestinations).toEqual(correctDestinations);
});

test("Convert result to string array", () => {
    const resultParams = [{
        current: Destination.B,
        used: true,
        usedRoutes: [{ start: Destination.A, end: Destination.B }],
        total: 5,
        foundDestination: true
    }];
    const resultString = convertResultToStringArray(resultParams);
    expect(resultString).toEqual([{ id: 0, details: "Fastest Path: A - B | Distance: 5" }]);
});

test("Convert multi result to string array", () => {
    const resultParams = [
        {
            current: Destination.B,
            used: true,
            usedRoutes: [{ start: Destination.A, end: Destination.B }],
            total: 5,
            foundDestination: true
        }, {
            current: Destination.B,
            used: true,
            usedRoutes: [{ start: Destination.A, end: Destination.C }, { start: Destination.C, end: Destination.B }],
            total: 8,
            foundDestination: true
        }
    ];
    const resultString = convertResultToStringArray(resultParams);
    expect(resultString).toEqual([
        { id: 0, details: "Fastest Path: A - B | Distance: 5" },
        { id: 1, details: "Path 2: A - C, C - B | Distance: 8" }
    ]);
});