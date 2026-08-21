// Copyright 2026 Caroline Blank <caro@c-space.org>
// SPDX-License-Identifier: CC-BY-NC-SA-4.0

export const {
    attrs, clip, gcd, initBoard, JXG, merge, render, withAxesLabels,
} = await tdoc.import('tdoc/jsxgraph.js');

// Defaults for use on screen media.
attrs.screen = [{
  axis: true, grid: true,
  defaultAxes: {
    x: {ticks: {minorTicks: 1}},
    y: {ticks: {minorTicks: 1}},
  },
  defaults: {
    arrow: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
      label: {anchorX: 'middle', anchorY: 'middle', position: '0.4fr left'},
    },
    circle: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.blue,
      label: {strokeColor: JXG.palette.blue},
    },
    curve: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.blue,
      label: {strokeColor: JXG.palette.blue},
    },
    functiongraph: {
      fixed: true, highlight: false, showInfobox: false,
      label: {strokeColor: JXG.palette.blue},
    },
    line: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 1, strokeColor: JXG.palette.black,
    },
    segment: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
    },
    angle: {
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black, fillOpacity: 0.2,
      label: {strokeColor: JXG.palette.black,
      anchorX: 'middle', anchorY: 'middle'},
    },
    point: {
      // TODO: Add "withLabel: false"
      fixed: true, highlight: false, showInfobox: false,
      size: 0,
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black,
    },
    glider: {
      fixed: false, showInfobox: false, highlight: true,
      size: 2, strokewidth: 1,
      highlightStrokeWidth: 14, highlightStrokeOpacity: 0.2,
      highlightStrokeColor: JXG.palette.blue, highlightFillColor: JXG.palette.blue
    },
    text: {
      fixed: true,
    },
  },
}];

// Defaults for use on print media.
attrs.print = [attrs.nonInteractive, {
  axis: true, grid: true,
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    curve: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black
    },
    arrow: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
      label: {anchorX: 'middle', anchorY: 'middle', position: '0.4fr left'},
    },
    circle: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
      label: {strokeColor: JXG.palette.black},
    },
    curve: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
      label: {strokeColor: JXG.palette.black},
    },
    functiongraph: {
      fixed: true, highlight: false, showInfobox: false,
      label: {strokeColor: JXG.palette.black},
    },
    line: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 1, strokeColor: JXG.palette.black,
    },
    segment: {
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 2, strokeColor: JXG.palette.black,
    },
    angle: {
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black, fillOpacity: 0.2,
      label: {strokeColor: JXG.palette.black,
      anchorX: 'middle', anchorY: 'middle'},
    },
    point: {
      // TODO: Change "name: ''" to "withLabel: false"
      //withLabel: false,
      name: '', size: 0,
      fixed: true, highlight: false, showInfobox: false,
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black,
    },
  },
}];
