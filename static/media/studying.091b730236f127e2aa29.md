## Problem Statement

You are taking $N$ exams, with $T$ total hours to study. For each subject $i$ (from $1$ to $N$), you're given the function

$$f_i(t) = a_i t^2 + b_i t + c_i$$

which outputs an exam score from 0–100, where the input $t$ is the number of hours studied for that subject.

From the total time $T$ given, your task is to allot a certain amount of time to each exam in order to **maximize the average exam score** across all $N$ exams.

Note that the functions $f_i(t)$ are non-decreasing on the interval $[0, T]$, and that fractions of hours can be allotted to each subject — it doesn't have to be whole hours.

**Input format:** The first line contains the integers $N$ and $T$ separated by a space, with $N \in [1, 10]$ and $T \in [1, 240]$. Each of the next $N$ lines contains three numbers $a_i$, $b_i$, $c_i$ for the function $f_i(t)$.

---

## Solution
