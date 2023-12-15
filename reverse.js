"use strict";
export default function reverse(n) {
    let negative;
    let dot, dotI;
    let goal = [];
    n = n.toString().split('');
    if (n[0] === '-') {
        negative = n.shift();
    }
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '.') {
            dotI = i;
            dot = n.splice(n.indexOf(n[i]), 1);
        }
    }
    for (const el of n) {
        goal.unshift(el);
    }
    if (dot) {
        goal.splice(dotI, 0, dot)
    }
    if (negative) {
        goal.splice(0, 0, negative);
    }
    return goal.join('');
}