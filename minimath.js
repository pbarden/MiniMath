/**
 * This is a simple mathematics library in JavaScript
 * in conjunction with studies at University of Phoenix.
 * 
 * List of mathematical constants:
 * > Pi
 * > Epsilon
 * > Euler's Number
 * 
 * List of functions:
 * > Addition
 * > Subtraction
 * > Division
 * > Multiplication
 * > Euclidean Division
 * > Factorials
 * > Exponents
 * > Absolute Value
 * > Square Root
 * > Summation
 * > Permutations
 * > Combinations
 * > Probability
 * > Logarithms
 * > Negation
 * > Random Number Generation
 * > Area of Quadrilaterals, Circles, Triangles
 * > Perimeter
 * > Circumference
 * > Volume of Boxes, Cylinders, Spheres, Cones, Pyramids
 * > Quadratic Equation
 * > Distance
 * > Midpoint
 * > Slope
 * > Pythagorean Theorem
 * > Sin
 * > Cosine
 * > Tangent
 * > Secant
 * > Cosecant
 * > Cotangent
 * > Compound Interest
 * > Compound Interest using Euler's Number
 * > Pay Calculation (w/ Overtime)
 * 
 * COPYRIGHT D. PAUL BARDEN 2018
 * 
 * @file minimath.js
 * @author D. Paul Barden
 */

var PI = 3.14159265359;
var EPS = 1e-15;
var E = 2.71828182845;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    // Prevents division by zero
    if(b == 0) {
        return "Undefined";
    } else {
        return a / b;
    }
}

function mult(a, b) {
    return a * b;
}

function mod(a, b) {
    return a % b;
}

function fact(a) {
    // Prevents negative factorialization
    if (a < 0) {
        return "Undefined";
    } else if(a==0 || a==1) {
        // Return 1 when factorializing 0 or 1
        return 1;
    } else {
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
    }
    return a;
}

function pow(a, b) {
    var ans = 1;
    for (i = 1; i <= b; i++) {
        ans *= a;
    }
    return ans;
}

function abs(a) {
    if (a < 0) {
        return -a;
    } else return a;
}

function sqrt(a) {
    var b = a;
    while (abs(b - a / b) > EPS * b) {
        b = (a / b + b) / 2;
    }
    return b;
}

function sum(a, b) {
    var total = 0;
    for (n = a; n <= b; n++) {
        total += equation(n);
    }
    return total;
}

// Example equation for use in sum(), n^2 + 2
function equation(num) {
    return pow(num, 2) + 2;
}

function perm(a, b) {
    return fact(a)/fact(a-b);
}

function comb(a, b) {
    return fact(a)/(fact(b)*fact(a-b));
}

function prob(a, b) {
    return a / b;
}

function log(a, b) {
    var comp = 0;
    var ans = 0;
    var i = 1;
    while(comp != b) {
        comp = pow(a, i);
        ans = i;
        i++;
        if(i >= b/a) {
            return "Undefined";
        }
    }
    if(comp == b) {
        return ans;
    }
}

function negate(a) {
    if(a == 0) {
        return "Undefined";
    } else if(a < 0) {
        return a;
    } else {
        return -a;
    }
}

function random(a, b) {
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var day = current.getDay();
    var hours = current.getUTCHours();

    if(current.getMinutes() == 0) var mins = .01;
    else var mins = current.getMinutes();

    if(current.getSeconds() == 0) var secs = .01;
    else var secs = current.getSeconds();

    if(current.getMilliseconds() == 0) var mils = .01;
    else var mils = current.getMilliseconds();

    var seed = (mils * secs) * .00000001;

    while(seed < a || seed >= b + 1) {
        seed = 0|(seed + ((1e-15 * (fact(mils % day) * pow(secs, month) + day / mins - secs % mils) + (sqrt(year) + mils * 76.020481) + hours) % b));
        if(seed == 0) seed = a;
        if(seed >= b && seed <= b + 2) seed = b;
        console.log(seed);
    }
    
    if(seed >= a && seed <= b) {
        return seed;
    } else return "Undefined";
}

function area(a, b) {
    return a * b;
}

function areaCircle(a) {
    return PI * pow(a, 2);
}

function areaTri(a, b) {
    return 1 / 2 * (a * b);
}

function perim(a, b) {
    return 2 * a + 2 * b;
}

function circum(a) {
    return 2 * PI * a;
}

function vol(a, b, c) {
    return a * b * c;
}

function volCyl(a, b) {
    return areaCircle(a) * b;
}

function volSph(a) {
    return 4 / 3 * PI * pow(a, 3);
}

function volCone(a, b) {
    return 1 / 3 * volCyl(a, b);
}

function volPyr(a, b, c) {
    return 1 / 3 * vol(a, b, c);
}

function quad(a, b, c) {
    var disc = (b * b) - 4 * (a * c);
    var root =  sqrt(disc);
    var x1 = (-b + root) / 2;
    var x2 = (-b - root) / 2;
    return "x = " + x1 + ", " + x2;
}

function dist(a, b, c, d) {
    return sqrt(pow((a - c), 2))+(pow((b - d), 2));
}

function midPpoint(a, b, c, d) {
    return (a + c)/2 + ", " + (b + d)/2;
}

function slope(a, b, c, d) {
    return (d - b) / (c - a);
}

function pythag(a, b) {
    return sqrt(pow(a, 2) + pow(b, 2));
}

function sin(a, b) {
    return a / b;
}

function cos(c, b) {
    return c / b;
}

function tan(a, c) {
    return a / c;
}

function sec(c, b) {
    return 1 / cos(c, b);
}

function csc(a, b) {
    return 1 / sin(a, b);
}

function cot(a, c) {
    return 1 / tan(a, c);
}

function compInt(a, b, c, d) {
    return a * pow(1 + (b / c), c * d);
}

function compIntD(a, c, d) {
    return a * pow(E, c * d)
}

function pay(a, b) {
    if(b > 40) return a * 40 + (a * 1.5 * (b - 40));
    else return a * b;
}