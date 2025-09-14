/* Copyright 2025 Caroline Blank <caro@c-space.org> */
/* SPDX-License-Identifier: CC-BY-NC-SA-4.0 */

export const [{
    initBoard, JXG, merge, nonInteractive, template, withAxesLabels,
}] = await tdoc.imports('tdoc/jsxgraph.js');

export const defaults = [{
    axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {minorTicks: 1}},
        y: {ticks: {minorTicks: 1}},
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
