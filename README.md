# Wave-Function-Collapse

Working version: [https://wave-function-collapse-pattern.onrender.com/](https://wave-function-collapse-pattern.onrender.com/)

Coding challenge from The Coding Train - https://thecodingtrain.com/challenges/171-wave-function-collapse

## What`s changed
I forked the repository and revamped the imperative for loops for (mostly) high order functional declarative version, optimised several unoptimal loops and the biggest optimization is in implementing updates just for proliferating cells. Also added possibility to declare non-square (rectangular) canvas.

## Main optimization
Original version computed array of valid options for every cell in every loop. This is not optimal, because majority of cells doesnt change. Rules are set in a way, that only cells which are adjacent to the collapsed cells is proliferating (changing) and therefore we are tracking the array of such proliferation cells and run entropy reduction only on those cells. This increases performance a lot and allows computing much larger grids - default set to 20 x 40. 
Original (non-optimised) version was really slow on grids bigger that 400 - 500 cells.
