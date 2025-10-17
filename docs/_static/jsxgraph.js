/* Copyright 2025 Caroline Blank <caro@c-space.org> */
/* SPDX-License-Identifier: CC-BY-NC-SA-4.0 */

export const [{
    initBoard, JXG, merge, nonInteractive, template, withAxesLabels,
}] = await tdoc.imports('tdoc/jsxgraph.js');

// TODO(0.64): Remove
function generateLabelText(...args) {
    const v = Object.getPrototypeOf(this).generateLabelText.call(this, ...args);
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
