import { A_ROUTES, B_ROUTES, H_ROUTES, G_ROUTES, F_ROUTES, E_ROUTES, D_ROUTES, C_ROUTES } from "../routes";
import { routesAvailable } from "../get-available-routes";
import { Destination } from "../types";

test("Get route correctly", () => {
  const routeA = routesAvailable(Destination.A);
  expect(routeA).toBe(A_ROUTES);
  
  const routeB = routesAvailable(Destination.B);
  expect(routeB).toBe(B_ROUTES);
  
  const routeC = routesAvailable(Destination.C);
  expect(routeC).toBe(C_ROUTES);
  
  const routeD = routesAvailable(Destination.D);
  expect(routeD).toBe(D_ROUTES);
  
  const routeE = routesAvailable(Destination.E);
  expect(routeE).toBe(E_ROUTES);
  
  const routeF = routesAvailable(Destination.F);
  expect(routeF).toBe(F_ROUTES);
  
  const routeG = routesAvailable(Destination.G);
  expect(routeG).toBe(G_ROUTES);

  const routeH = routesAvailable(Destination.H);
  expect(routeH).toBe(H_ROUTES);
});