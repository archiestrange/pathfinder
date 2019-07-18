export enum Destination {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H"
}

export interface Route { destination: Destination; distance: number; }

export interface UsedRoute { start: Destination, end: Destination }

export interface CalculationItem {
    current: Destination;
    used: boolean;
    usedRoutes: UsedRoute[];
    total: number;
    foundDestination: boolean;
}

export interface CalculationResult {
    id: number;
    details: string;
}