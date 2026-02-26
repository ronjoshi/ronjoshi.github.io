## Problem Statement

You're given $N$ plants, and for each plant, a tuple $(x_i, y_i, v_i)$ denoting the position and value of each plant. These plants are placed on a $W \times H$ field.

Additionally, a "safe zone" — a circle of thorns of radius $R$ — is placed and can be centered anywhere on the field with a uniform probability distribution. Any plants outside of the circle are destroyed, losing their value. Plants within the circle are saved. Given this information, output the **expected value** of plants that will be saved.

---

## Description + Inputs

Here is the [problem description](https://naq23.kattis.com/contests/naq23-fall/problems/naq23.gardenofthorns).

Let’s label the inputs as:

- $n$: number of plants
- $r$: radius of the circle of thorns
- $W$: width of garden
- $H$: height of garden
- $x_i, y_i, v_i$: the $(x, y)$ coordinates and value of each plant

# Approach

The output of this problem is the expected value of all the plants that are “saved”, which is $E[V]$, where $V = V_1 + V_2 + … V_n$, where $V_i$ is the random variable which denotes the final value of plant $i$, after the thorns have been placed.

The plants being saved are independent of each other and only dependent on where the circle of thorns is placed. Given the labeled values of the plants $v_1$ through $v_n$, we know that $V_i$ is either $v_i$ or $0$, depending on whether or not it is in the safe zone.

Additionally,

$$
E[V] = \sum_{i=1}^nV_i = v_i\cdot P(\text{plant } i \text{ is saved})
$$

Given a plant $i$ located at $(x_i, y_i)$, it will be saved if and only if the point $(x_i, y_i)$ is a distance of at most $r$ from the center of the circle of thorns, $(h, k)$. This is equivalent to saying that the center of the circle of thorns is at most a distance of $r$ from $(x_i, y_i)$. This means:

$$
\sqrt{(h-x_i)^2+(k-y_i)^2}\leq r
$$

Additionally, the circle of thorns must be centered within the bounds of the rectangle. This puts an additional constraint:

$$
0 \leq h \leq W\\
0 \leq k \leq H
$$

Define $A$ as the area of the shape created by all the points $(h,k)$ that satisfy these constraints. It’s easy to see that this is simply the intersection of a circle and a rectangle.

Finally,

$$
P(\text{plant } i \text{ is saved}) = \frac{P(\text{circle is a safe distance from plant } i)}{P(\text{circle is placed within bounds}} \\= \frac{A}{WH}
$$

So the bulk of the problem is finding $A$, the intersection of the circle and rectangle.

# Implementation

This is the high-level approach to finding the final intersected area:

1. Start with the area of the full circle
2. Cut off segments of the circle that are out of the rectangle bounds
3. Add back in the intersections of segments that we have double-counted

![Image 1](https://i.imgur.com/hAT4ZER.png)

In the image above, the circle is of radius $r$, centered at the plant located at $(x_i, y_i)$.

### Step 1

This part’s easy. We start out with initial area $\pi r^2$.

### Step 2

We need to subtract out the segment areas (for above, below, and to the left of the rectangle). The way we do this is by the segment area formula, defined by circle radius $r$ and segment height $h$ explained [here](https://www.mathopenref.com/segmentareaht.html):

$$
\text{Segment area} = r^2\cos^{-1}\left(\frac{r-h}{r}\right)-(r-h)\sqrt{2rh-h^2}
$$

Code for step 2:

```cpp
/*
Calculates segment area given radius and height of segment to cut off
https://www.mathopenref.com/segmentareaht.html
*/
long double segarea(long double r, long double h) {
    return (long double)(r * r * acos((r - h) / r) - (r - h) * sqrt((2 * r * h) - h*h));
}

// q1, q2, q3, q4 corresponds to the whether or not the right, up, left, 
// or down sides of the rectangle have been overlapped by the circle.
// think of these as booleans for "quadrants" 1, 2, 3, 4.
bool q1, q2, q3, q4 = false;

long double area = M_PI * r * r;

if(x + r > w) {
    q1 = true;
    area -= segarea(r, (long double)(x + r - w));
}
if(y + r > h) {
    q2 = true;
    area -= segarea(r, (long double)(y + r - h));
}
if(x - r < 0) {
    q3 = true;
    area -= segarea(r, (long double)(0 - x + r));
}
if(y - r < 0) {
    q4 = true;
    area -= segarea(r, (long double)(0 - y + r));
}
```

### Step 3

Cutting the circle and subtracting the area for all 3 sectors creates one problem: the areas in green are double-counted. For example, the top green region has been counted in the up cut and the left cut. In order to add this back, we need to utilize this technique:

![Image 1](https://i.imgur.com/0PBPIMz.png)

The area in the green is what we need to find. There are 3 steps to doing this:

1. Area $P$: Calculate the ice cream cone (sector) area that is bounded by $p_1, (h,k), p_2$. Given angle $\theta$, which is the angle between these 3 points, the area of the sector is simply equal to:
    1.  $\pi r^2 \cdot \frac{\theta}{360}$ for $\theta$ in degrees
    2. $\theta r^2  / 2$ in radians
2. Area $t_1, t_2$: Calculate the area of the triangles.
    1. $t_1 = x \cdot |p_1.y - k| / 2$
    2. $t_2 = y \cdot |p_2.x - h| / 2$
3. Area $R$: Calculate the area of the inner rectangle, which is just $xy$.

Looking at it visually, we can see that the final area in green is equal to:

$$
P - t_1 - t_2 + R
$$

Here is the function to calculate this green area. We need a helper function to compute the angle between 3 points, `a3p`.

```cpp
/*
Calculates internal angle between 3 points, where (x2,y2) is the center.
*/
long double a3p(long double x1, long double y1, long double x2, long double y2, long double x3, long double y3) {
    long double a = sqrt(pow(x2 - x3, 2) + pow(y2 - y3, 2));
    long double b = sqrt(pow(x1 - x3, 2) + pow(y1 - y3, 2));
    long double c = sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
    long double angle = acos((pow(a, 2) + pow(c, 2) - pow(b, 2)) / (2 * a * c));
    return angle;
}

/*
Calculates the area of overlap between two segments. This is the area to be added back in.

The input corresponds to a circle centered at (h,k) with radius r, and two points p1, p2
on the edge of the circle corresponding to where they will be cut from.
*/
long double rect_intersect_area(long double h, long double k, pair<long double, long double> p1, pair<long double, long double> p2, long double r) {
    long double p1x, p2x, p1y, p2y;

    // Format p1x, p2x such that (p1x,p2x) is closer to (h,k) on the x coordinate.
    if(abss(p1.first - h) < abss(p2.first - h)) {p1x = p1.first; p1y = p1.second; p2x = p2.first; p2y = p2.second;}
    else {p1x = p2.first; p1y = p2.second; p2x = p1.first; p2y = p1.second;}

    long double x = abss(p1x - h);
    long double y = abss(p2y - k);
    long double angle = a3p(p1x, p1y, h, k, p2x, p2y);
    // Calculates ice cream (i.e. sector area) given angle between p1, (h,k), p2 (in radians)
    long double icecream =  r * r * angle / 2;
    
    // Calculates triangle areas
    long double t1 = x * abss(p1y - k) / 2;
    long double t2 = y * abss(p2x - h) / 2;

    long double ans = icecream - t1 - t2 + x*y;
    return ans;
}
```

## Finding intersection points

We need to actually compute all possible points $p_1, p_2$ that are to be used in step 3 (adding the green areas back in).

![Image 1](https://i.imgur.com/ASwafOS.png)

We’ll store these 8 intersection points in a `vector<pair<long double, long double>> int_points`. This part is easy to implement, but I’ll include my own implementation in the final solution.

## Caveat

Step 3 of our implementation should be done only if our circle crosses two adjacent boundaries on our rectangle, AND the corner connecting the two boundaries is contained within the circle. For example,

![Image 1](https://i.imgur.com/pkZOg5C.png)

With this example, there is an overlap between the right and bottom borders (for which we’ll have to subtract the area using our segment formula), but no double-counted area.

Here’s a snippet of code that shows how we do this:

```cpp
// Returns boolean value, corresponding to whether or not a point (x,y) is contained in a circle centered at (h,k).
bool point_in_circle(long double h, long double k, long double r, long double x, long double y) {
    // returns true iff circle centered at (h, k) includes point (x, y)
    return (sqrt((x-h)*(x-h) + (y-k)*(y-k)) <= r);
}

// Adds back double-counted area.
if(q1 && q2 && point_in_circle(x, y, r, w, h)) area += rect_intersect_area((long double)x, (long double)y, int_points[1], int_points[3], r);
if(q2 && q3 && point_in_circle(x, y, r, 0, h)) area += rect_intersect_area((long double)x, (long double)y, int_points[2], int_points[5], r);
if(q4 && q3 && point_in_circle(x, y, r, 0, 0)) area += rect_intersect_area((long double)x, (long double)y, int_points[6], int_points[4], r);
if(q1 && q4 && point_in_circle(x, y, r, w, 0)) area += rect_intersect_area((long double)x, (long double)y, int_points[0], int_points[7], r);
```

For example, if `q1` and `q2` are true, then the up and right boundaries have been crossed. We need to check whether the point $(W, H)$ is in the circle before we add back the double-counted green region.

# Final code

```cpp
using namespace std;
#include <iostream>
#include <cstdlib>
#include <cmath>
#include <vector>
#include <iomanip>

/*
Calculates intersection points between circle centered at (h,k), with radius r,
and horizontal/vertical line.

x is a boolean value for whether or not the intersection line is horizontal.
v is the value of the line, y = v (if x true), x = v (if x false).

Return value is a pair of intersection points, expressed as a vector.
*/
vector<pair<long double, long double>> calc_intersect(long double h, long double k, long double r, bool x, long double v) {
    vector<pair<long double, long double>> ans;
    if(x) {
        if (k+r < v || k-r > v) return ans;
        long double d = sqrt(r*r - (v-k)*(v-k));
        ans.push_back(make_pair(h-d, v)); ans.push_back(make_pair(h+d, v));
    }
    else {
        if (h+r < v || h-r > v) return ans;
        long double d = sqrt(r*r - (v-h)*(v-h));
        ans.push_back(make_pair(v, k-d)); ans.push_back(make_pair(v, k+d));
    }
    return ans;
}

/*
Absolute value function for long double. Wasn't working with normal abs()
for some reason.
*/
long double abss(long double x) {
    if(x < 0) x *= -1;
    return x;
}

/*
Calculates segment area given radius and height of segment to cut off
https://www.mathopenref.com/segmentareaht.html
*/
long double segarea(long double r, long double h) {
    return (long double)(r * r * acos((r - h) / r) - (r - h) * sqrt((2 * r * h) - h*h));
}

/*
Calculates internal angle between 3 points, where (x2,y2) is the center.
*/
long double a3p(long double x1, long double y1, long double x2, long double y2, long double x3, long double y3) {
    long double a = sqrt(pow(x2 - x3, 2) + pow(y2 - y3, 2));
    long double b = sqrt(pow(x1 - x3, 2) + pow(y1 - y3, 2));
    long double c = sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
    long double angle = acos((pow(a, 2) + pow(c, 2) - pow(b, 2)) / (2 * a * c));
    return angle;
}

/*
Calculates the area of overlap between two segments. This is the area to be added back in.

The input corresponds to a circle centered at (h,k) with radius r, and two points p1, p2
on the edge of the circle corresponding to where they will be cut from.
*/
long double rect_intersect_area(long double h, long double k, pair<long double, long double> p1, pair<long double, long double> p2, long double r) {
    long double p1x, p2x, p1y, p2y;

    // Format p1x, p2x such that (p1x,p2x) is closer to (h,k) on the x coordinate.
    if(abss(p1.first - h) < abss(p2.first - h)) {p1x = p1.first; p1y = p1.second; p2x = p2.first; p2y = p2.second;}
    else {p1x = p2.first; p1y = p2.second; p2x = p1.first; p2y = p1.second;}

    long double x = abss(p1x - h);
    long double y = abss(p2y - k);
    long double angle = a3p(p1x, p1y, h, k, p2x, p2y);
    // Calculates ice cream (i.e. sector area) given angle between p1, (h,k), p2 (in radians)
    long double icecream =  r * r * angle / 2;
    
    // Calculates triangle areas
    long double t1 = x * abss(p1y - k) / 2;
    long double t2 = y * abss(p2x - h) / 2;

    long double ans = icecream - t1 - t2 + x*y;
    return ans;
}


// Returns boolean value, corresponding to whether or not a point (x,y) is contained in a circle centered at (h,k).
bool point_in_circle(long double h, long double k, long double r, long double x, long double y) {
    // returns true iff circle centered at (h, k) includes point (x, y)
    return (sqrt((x-h)*(x-h) + (y-k)*(y-k)) <= r);
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(NULL);

    int n, r, w, h;
    cin >> n >> r >> w >> h;

    long double ans = 0;

    for(int k = 0; k < n; k++) {
        int x, y, v;
        cin >> x >> y >> v;

        bool q1, q2, q3, q4 = false;

        long double area = M_PI * r * r;

        if(x + r > w) {
            q1 = true;
            area -= segarea(r, (long double)(x + r - w));
        }
        if(y + r > h) {
            q2 = true;
            area -= segarea(r, (long double)(y + r - h));
        }
        if(x - r < 0) {
            q3 = true;
            area -= segarea(r, (long double)(0 - x + r));
        }
        if(y - r < 0) {
            q4 = true;
            area -= segarea(r, (long double)(0 - y + r));
        }

        vector<pair<long double, long double>> int_points(8);

        // Fills up vector of circle and rectangle intersection points
        for(int i = 0; i < 4; i++) {
            vector<pair<long double, long double>> temp;
            if(i % 2 == 0) {
                // vertical lines
                long double v = (i == 0) ? w : 0;
                temp = calc_intersect(x, y, r, false, v);
                if(temp.size() > 0) {
                    if(i == 0) {int_points[0] = temp[0]; int_points[1] = temp[1];}
                    else {int_points[4] = temp[0]; int_points[5] = temp[1];}
                }
            } else {
                // horizontal lines
                long double v = (i == 1) ? h : 0;
                temp = calc_intersect(x, y, r, true, v);
                if(temp.size() > 0) {
                    if(i == 1) {int_points[2] = temp[0]; int_points[3] = temp[1];}
                    else {int_points[6] = temp[0]; int_points[7] = temp[1];}
                }
            }
        }

        // Adds back double-counted area.
        if(q1 && q2 && point_in_circle(x, y, r, w, h)) area += rect_intersect_area((long double)x, (long double)y, int_points[1], int_points[3], r);
        if(q2 && q3 && point_in_circle(x, y, r, 0, h)) area += rect_intersect_area((long double)x, (long double)y, int_points[2], int_points[5], r);
        if(q4 && q3 && point_in_circle(x, y, r, 0, 0)) area += rect_intersect_area((long double)x, (long double)y, int_points[6], int_points[4], r);
        if(q1 && q4 && point_in_circle(x, y, r, w, 0)) area += rect_intersect_area((long double)x, (long double)y, int_points[0], int_points[7], r);

        long double rectarea = (long double)(w*h);

        // Calculates expected value of individual plant. Add this up for all plants, to get the answer.
        ans += (long double)(v) * area / rectarea;
    }
    
    // Just for precision purposes, so that our answer is accurate up to 1e-9
    long double temp = ans;
    int prec = 0;
    while(temp > 1){
        temp /= 10;
        prec++;
    }
    cout << setprecision(prec + 9) << ans;
}
```