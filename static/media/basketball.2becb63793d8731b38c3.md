## Problem Statement

This is an algorithm I used for the basketball game I created in Unity, which you can find on my [Projects](/projects) page.

Given two `GameObject`s — a basketball and a hoop — simulate the ball's movement in 3D space as it is shot into the hoop with realistic kinematic motion. The steps essentially calculate:

1. The vector pointing from the ball's start position to the hoop
2. The time it should take to travel that distance
3. The initial velocity needed, given gravity $g = -9.81\ \text{m/s}^2$

First, the ball is brought to a shooting height and detached from the player's `GameObject`.

---

## Solution
