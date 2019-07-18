import { Route, Destination } from "./types";

export const A_ROUTES: Route[] = [
    { destination: Destination.C, distance: 2 }
];

export const B_ROUTES: Route[] = [
    { destination: Destination.D, distance: 4 },
    { destination: Destination.E, distance: 7 }
];

export const C_ROUTES: Route[] = [
    { destination: Destination.A, distance: 2 },
    { destination: Destination.D, distance: 1 },
    { destination: Destination.F, distance: 4 }
];

export const D_ROUTES: Route[] = [
    { destination: Destination.B, distance: 4 },
    { destination: Destination.C, distance: 1 },
    { destination: Destination.F, distance: 1 },
    { destination: Destination.G, distance: 2 }
];

export const E_ROUTES: Route[] = [
    { destination: Destination.B, distance: 7 },
    { destination: Destination.H, distance: 10 }
];

export const F_ROUTES: Route[] = [
    { destination: Destination.C, distance: 4 },
    { destination: Destination.D, distance: 1 },
    { destination: Destination.G, distance: 3 }
];

export const G_ROUTES: Route[] = [
    { destination: Destination.D, distance: 2 },
    { destination: Destination.F, distance: 3 },
    { destination: Destination.H, distance: 4 }
];

export const H_ROUTES: Route[] = [
    { destination: Destination.E, distance: 10 },
    { destination: Destination.G, distance: 4 }
];