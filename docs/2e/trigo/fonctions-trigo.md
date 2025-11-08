% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions trigonométriques

```{metadata}
subject: "Mathématiques 2e année"
```

````{admonition} Définition
Une fonction réelle $f$ est **périodique** s'il existe un nombre réel $p$ tel
que, pour tout $k \in \mathbb{Z}$ et tout $x\in D_f$,

```{math}
:class: align-center
f(x + k \cdot p) = f(x).
```

Le nombre $p$ est alors appelé la **période** de la fonction.
````

<style>
.angle td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
    width: 100px;
}
</style>

````{admonition} Propriétés
**Fonctions sinus, cosinus et tangente**

Pour $k \in \mathbb{Z}$.

```{flex-table}
:class: angle
|   | **sin** | **cos** | **tan**
| **Dom. de déf.**  | $\mathbb{R}$ | $\mathbb{R}$ | $\mathbb{R} \setminus \{\dfrac{\pi}{2} + k \cdot \pi\}$
| **Images** | $[-1; 1]$ | $[-1; 1]$ | $\mathbb{R}$
| **Période** | $2\pi$ | $2\pi$ | $\pi$
| **Zéros** | $k \cdot \pi$ | $\dfrac{\pi}{2} + k \cdot \pi$ | $k \cdot \pi$
| **Parité** | impaire | paire | impaire
```
````

## Représentation graphique de la fonction sinus:

```{jsxgraph} sin
:style: width: 100%; border: none;
```

## Représentation graphique de la fonction cosinus:

```{jsxgraph} cos
:style: width: 60%; border: none;
```

## Représentation graphique de la fonction tangente:

```{jsxgraph} tan
:style: width: 80%; border: none;
```

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels} = await tdoc.import('jsxgraph.js');
initBoard('sin', [defaults, withAxesLabels(undefined, [-1, 1]), {
    boundingBox: [-1.5, 1.5, 6.5, -1.5],
    axis: true, grid: false,
    pan: {enabled: true}, zoom: {enabled: true}, showFullscreen: true,
        defaultAxes: {
        x: {
            name: '\\(x, \\alpha\\)',
            ticks: {
                scale: Math.PI, scaleSymbol: 'π',
                insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
        y: {
            name: '\\(y\\)',
            ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
    },
    defaults: {
        point: {strokeWidth: 0},
        line: {strokeWidth: 1},
    },
}], board => {
    // Place the circle.
    const c = board.create('circle', [[0, 0], 1], {
        strokeColor: JXG.palette.black,
    });

    function gcd(a, b) {
        while (b != 0) {
            [a, b] = [b, a % b]
        }
        return a;
    }

    const angles = [];
    for (let i = 0; i < 4; ++i) {
        for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
            const a = i * d + 2 * n, b = 2 * d;
            const cd = gcd(a, b);
            angles.push([a / cd, b / cd]);
        }
    }

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = angles.map(([n, d]) => {
        const a = n * Math.PI / d;
        return board.create('point', [Math.cos(a), Math.sin(a)], {
            fixed: true, visible: false, withLabel: false,
        });
    });
    const p = board.create('glider', [0, 0, c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.1, size: 3,
    });
    const alpha = () => {
        const a = Math.atan2(p.Y(), p.X());
        return a >= 0 ? a : a + 2 * Math.PI;
    };
    const ax1 = board.create('point', [1, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    board.create('angle', [ax1, [0, 0], p], {
        name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
        radius: 0.2, orthoType: 'none',
        strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [[0, 0], p], {strokeColor: alphaColor});
    board.create('text',
        [1, 1.2, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    board.create('segment', [p, px], {dash: 2, strokeColor: JXG.palette.black});
    board.create('segment', [p, py], {dash: 2, strokeColor: JXG.palette.black});

    // Place the elements related to the sine.
    const sinColor = JXG.palette.blue;
    board.create('arrow', [[0, 0], py], {
        name: '\\(sin(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr left', anchorX: 'right', anchorY: 'middle',
            distance: 0, offset: [-7, 0], strokeColor: sinColor,
        },
        strokeWidth: 2, strokeColor: sinColor,
    });
    board.create('curve', [a => a, a => Math.sin(a), 0, 2 * Math.PI], {
        strokeColor: sinColor,
    });
    const psin = board.create('point', [alpha, () => p.Y()], {
        withLabel: false, fillColor: sinColor,
    });
    board.create('segment', [p, psin], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    const ax = board.create('point', [alpha, 0], {
        name: '\\(\\alpha\\)', size: 0, label: {strokeColor: alphaColor},
    });
    board.create('segment', [psin, ax], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('text',
        [4, 1.2, () => `\\(sin(\\alpha)=${display_value(Math.sin(alpha()))}\\)`], {
        strokeColor: sinColor, fixed: true,
    });

   function almostEqual(a, b) { return Math.abs(a - b) < 1e-6; }

    function display(angle) {
        for (const [n, d] of angles) {
            if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
                if (n === 0) return 0;
                const ns = `${n > 1 ? n : ''}\\pi`;
                if (d == 1) return ns;
                return `\\dfrac{${ns}}{${d}}`;
            }
        }
        return alpha().toFixed(2);
    }

    function display_value(value) {
        if (Math.abs(Math.abs(value) - 0.5) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{1}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(2)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{2}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/3) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{3}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\sqrt{3}`;
        } else {
            return value.toFixed(2);
        }
    }
});
</script>

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels} = await tdoc.import('jsxgraph.js');
initBoard('cos', [defaults, withAxesLabels([-1, 1], undefined), {
    boundingBox: [-3, 6.5, 2.5, -1.5],
    axis: true, grid: false,
    pan: {enabled: true}, zoom: {enabled: true}, showFullscreen: true,
        defaultAxes: {
        x: {
            name: '\\(x\\)',
            ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
        y: {
            name: '\\(y, \\alpha\\)',
            ticks: {
                scale: Math.PI, scaleSymbol: 'π',
                insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
    },
    defaults: {
        point: {strokeWidth: 0},
        line: {strokeWidth: 1},
    },
}], board => {
    // Place the circle.
    const c = board.create('circle', [[0, 0], 1], {
        strokeColor: JXG.palette.black,
    });

    function gcd(a, b) {
        while (b != 0) {
            [a, b] = [b, a % b]
        }
        return a;
    }

    const angles = [];
    for (let i = 0; i < 4; ++i) {
        for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
            const a = i * d + 2 * n, b = 2 * d;
            const cd = gcd(a, b);
            angles.push([a / cd, b / cd]);
        }
    }

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = angles.map(([n, d]) => {
        const a = n * Math.PI / d;
        return board.create('point', [Math.cos(a), Math.sin(a)], {
            fixed: true, visible: false, withLabel: false,
        });
    });
    const p = board.create('glider', [0, 0, c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.1, size: 3,
    });
    const alpha = () => {
        const a = Math.atan2(p.Y(), p.X());
        return a >= 0 ? a : a + 2 * Math.PI;
    };
    const ax1 = board.create('point', [1, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    board.create('angle', [ax1, [0, 0], p], {
        name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
        radius: 0.2, orthoType: 'none',
        strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [[0, 0], p], {strokeColor: alphaColor});
    board.create('text',
        [-2.5, 5.8, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    board.create('segment', [p, px], {dash: 2, strokeColor: JXG.palette.black});
    board.create('segment', [p, py], {dash: 2, strokeColor: JXG.palette.black});

    // Place the elements related to the cosine.
    const cosColor = JXG.palette.red;
    board.create('arrow', [[0, 0], px], {
        name: '\\(cos(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr right', anchorX: 'middle', anchorY: 'top',
            distance: 0, offset: [0, -7], strokeColor: cosColor,
        },
        strokeWidth: 2, strokeColor: cosColor,
    });
    board.create('curve', [a => Math.cos(a), a => a, 0, 2 * Math.PI], {
        strokeColor: cosColor,
    });
    const pcos = board.create('point', [() => p.X(), alpha], {
        withLabel: false, fillColor: cosColor,
    });
    board.create('segment', [p, pcos], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    const ay = board.create('point', [0, alpha], {
        name: '\\(\\alpha\\)', size: 0, label: {strokeColor: alphaColor},
    });
    board.create('segment', [ay, pcos], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('text',
        [-2.5, 5.2, () => `\\(cos(\\alpha)=${display_value(Math.cos(alpha()))}\\)`], {
        strokeColor: cosColor, fixed: true,
    });

    function almostEqual(a, b) { return Math.abs(a - b) < 1e-6; }

    function display(angle) {
        for (const [n, d] of angles) {
            if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
                if (n === 0) return 0;
                const ns = `${n > 1 ? n : ''}\\pi`;
                if (d == 1) return ns;
                return `\\dfrac{${ns}}{${d}}`;
            }
        }
        return alpha().toFixed(2);
    }

    function display_value(value) {
        if (Math.abs(Math.abs(value) - 0.5) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{1}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(2)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{2}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/3) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{3}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\sqrt{3}`;
        } else {
            return value.toFixed(2);
        }
    }
});
</script>

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels} = await tdoc.import('jsxgraph.js');
initBoard('tan', [defaults, withAxesLabels(undefined, [-1, 1]), {
    boundingBox: [-1.5, 6.5, 6.5, -6.5],
    axis: true, grid: false,
    pan: {enabled: true}, zoom: {enabled: true}, showFullscreen: true,
        defaultAxes: {
        x: {
            name: '\\(x, \\alpha\\)',
            ticks: {
                scale: Math.PI, scaleSymbol: 'π',
                insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
        y: {
            name: '\\(y\\)',
            ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
        },
    },
    defaults: {
        point: {strokeWidth: 0},
        line: {strokeWidth: 1},
    },
}], board => {
    // Place the circle.
    const c = board.create('circle', [[0, 0], 1], {
        strokeColor: JXG.palette.black,
    });

    function gcd(a, b) {
        while (b != 0) {
            [a, b] = [b, a % b]
        }
        return a;
    }

    const angles = [];
    for (let i = 0; i < 4; ++i) {
        for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
            const a = i * d + 2 * n, b = 2 * d;
            const cd = gcd(a, b);
            angles.push([a / cd, b / cd]);
        }
    }

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = angles.map(([n, d]) => {
        const a = n * Math.PI / d;
        return board.create('point', [Math.cos(a), Math.sin(a)], {
            fixed: true, visible: false, withLabel: false,
        });
    });
    const p = board.create('glider', [0, 0, c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.1, size: 3
    });
    const alpha = () => {
        const a = Math.atan2(p.Y(), p.X());
        return a >= 0 ? a : a + 2 * Math.PI;
    };
    const ax1 = board.create('point', [1, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    board.create('angle', [ax1, [0, 0], p], {
        name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
        radius: 0.2, orthoType: 'none',
        strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [[0, 0], [1, () => Math.tan(alpha())]], {strokeColor: alphaColor, dash: 2});
    board.create('segment', [[0, 0], p], {strokeColor: alphaColor});
    board.create('text',
        [2, 6, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];

    // Place the elements related to the tan.
    const tanColor = JXG.palette.purple;
    const ptan = board.create('point', [alpha, () => Math.tan(alpha())], {
        withLabel: false, fillColor: tanColor,
    });
    board.create('arrow', [[1, 0], [1, () => Math.tan(alpha())]], {
        name: '\\(tan(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr right', anchorX: 'middle', anchorY: 'top',
            distance: 0, offset: [0, -7], strokeColor: tanColor,
        },
        strokeWidth: 2, strokeColor: tanColor,
    });
    board.create('curve', [a => a, a => Math.tan(a), 0, 2 * Math.PI], {
        strokeColor: tanColor,
    });
    board.create('segment', [[0, () => Math.tan(alpha())], ptan], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('segment', [[0, () => Math.tan(alpha())], [1, () => Math.tan(alpha())]], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    const ax = board.create('point', [alpha, 0], {
        name: '\\(\\alpha\\)', size: 0, label: {strokeColor: alphaColor},
    });
    board.create('segment', [ptan, ax], {
        dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('text',
        [2, 5.5, () => `\\(tan(\\alpha)=${display_value(Math.tan(alpha()))}\\)`], {
        strokeColor: tanColor, fixed: true,
    });

    function almostEqual(a, b) { return Math.abs(a - b) < 1e-6; }

    function display(angle) {
        for (const [n, d] of angles) {
            if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
                if (n === 0) return 0;
                const ns = `${n > 1 ? n : ''}\\pi`;
                if (d == 1) return ns;
                return `\\dfrac{${ns}}{${d}}`;
            }
        }
        return alpha().toFixed(2);
    }

    function display_value(value) {
        if (Math.abs(Math.abs(value) - 0.5) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{1}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(2)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{2}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/3) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{3}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\sqrt{3}`;
        } else {
            return value.toFixed(2);
        }
    }

});
</script>

````{admonition} Définition
La fonction réciproque de la fonction sinus restreinte à
$\left[ -\dfrac{\pi}{2};\dfrac{\pi}{2} \right]$ est appelée **arc sinus**, notée $\arcsin$:

```{math}
:class: align-center
\arcsin: \left[-1;1\right] & \to \left[ -\dfrac{\pi}{2};\dfrac{\pi}{2} \right]\\
         x & \mapsto \arcsin(x)
```

La fonction réciproque de la fonction cosinus restreinte à
$\left[ 0;\pi \right]$ est appelée **arc cosinus**, notée $\arccos$:

```{math}
:class: align-center
\arccos: \left[-1;1\right] & \to \left[ 0;\pi \right]\\
            x & \mapsto \arccos(x)
```

La fonction réciproque de la fonction tangente restreinte à
$\left] -\dfrac{\pi}{2};\dfrac{\pi}{2} \right[$ est appelée **arc tangente**, notée $\arctan$:

```{math}
:class: align-center
\arctan: \mathbb{R} & \to \left] -\dfrac{\pi}{2};\dfrac{\pi}{2} \right[\\
            x & \mapsto \arctan(x)
```
````
