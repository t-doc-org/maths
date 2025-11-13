/* Copyright 2025 Caroline Blank <caro@c-space.org> */
/* SPDX-License-Identifier: CC-BY-NC-SA-4.0 */

export const [{
    initBoard, JXG, merge, nonInteractive, template, withAxesLabels,
}] = await tdoc.imports('tdoc/jsxgraph.js');

export function gcd(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b]
    }
    return a;
}

// TODO(0.64): Remove
function generateLabelText(...args) {
    let v = Object.getPrototypeOf(this).generateLabelText.call(this, ...args);
    const label = this.evalVisProp('label');
    if (label.usemathjax) {
        v = v.replace(/\\[()]/g, '');
        if (label.tofraction) {
            const m = /(-)?(?:(\d+) )?\\frac\{(\d+)}{(\d+)}/d.exec(v);
            if (m) {
                const d = +m[4], n = +(m[2] ?? 0) * d + (+m[3]);
                v = v.substr(0, m.indices[0][0])
                    + `${m[1] ?? ''}\\frac{${n}}{${d}}`
                    + v.substr(m.indices[0][1]);
            } else {
                const sym = this.evalVisProp('scaleSymbol');
                if (sym && v == `1${sym}`) v = sym;
            }
        }
    }
    return `\\(${v}\\)`;
}

export const defaults = [{
    axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {minorTicks: 1, generateLabelText}},
        y: {ticks: {minorTicks: 1, generateLabelText}},
    },
    defaults: {
        circle: {
            strokeWidth: 2, strokeColor: JXG.palette.blue,
            label: {strokeColor: JXG.palette.blue},
        },
        curve: {
            strokeWidth: 2, strokeColor: JXG.palette.blue,
            label: {strokeColor: JXG.palette.blue},
        },
        functiongraph: {
            label: {strokeColor: JXG.palette.blue},
        },
        line: {
            strokeWidth: 1, strokeColor: JXG.palette.black,
        },
        point: {
            size: 1.5, strokeWidth: 1, strokeColor: JXG.palette.black,
            fillColor: JXG.palette.black,
        },
    },
}];
