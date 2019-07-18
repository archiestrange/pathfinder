import { A_ROUTES, B_ROUTES, C_ROUTES, D_ROUTES, E_ROUTES, F_ROUTES, G_ROUTES, H_ROUTES } from "./routes";
import { Route, Destination } from "./types";

export function routesAvailable(currentSite: Destination): Route[] {
    switch(currentSite) {
        case Destination.A:
            return A_ROUTES;

        case Destination.B:
            return B_ROUTES;

        case Destination.C:
            return C_ROUTES;

        case Destination.D:
            return D_ROUTES;

        case Destination.E:
            return E_ROUTES;

        case Destination.F:
            return F_ROUTES;

        case Destination.G:
            return G_ROUTES;

        case Destination.H:
            return H_ROUTES;
    }
}