import { CalculationItem, Destination, CalculationResult } from "./types";

export const destinations = Object.keys(Destination).map(d => Destination[d as any]);

export function convertResultToStringArray(result: CalculationItem[]): CalculationResult[] {
    const resultText: CalculationResult[] = [];
    result.forEach((r, idx) => {
        const position = idx === 0 ? "Fastest Path" : `Path ${idx + 1}`;
        const details = `${position}: ${r.usedRoutes.map(ur => `${ur.start} - ${ur.end}`).join(", ")} | Distance: ${r.total}`;
        const item = { id: idx, details };
        resultText.push(item);
    });

    return resultText;
}