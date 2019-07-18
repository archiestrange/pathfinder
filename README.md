# Pathfinder
Use a calculator to find the shortest path between two points

## How to run:
In your terminal run: <br />
- git clone https://github.com/archiestrange/pathfinder.git <br />
- cd pathfinder
- npm i
- npm run start
- (should auto do this) open chrome to http://localhost:3000/
- (optional) npm test

# Rundown
This is written in react/typescript and the project template was built using CRA. <br />
There is some basic validation that stops the user calculating empty fields or identical ones. <br />
The calculation happens in calculate-route.ts. The process behind this is: <br />
- Loop over an array of "Routes"
- For each possible new* destination for that route, parse details into initial array (causing more loop iterations)
- If the new distination is the desired one, that gets set to used and ignored next loop
- After each iteration set the "route" to "used", which means it will be ignored in the next iteration
- When eventually all routes have been made and there are no more "unused" routes, end the loop
- Filter down the results to ones that found the end destination, and sort in order

*new - hasn't been used in that path yet. <br />
I'm sure there will be a better way of doing this without having lingering objects for each iteration of the route.<br />
I can't say the functionality is beautiful, but it works. And if it's stupid, but it works, is it stupid? Probably. <br />

I had fun doing it nonetheless.

