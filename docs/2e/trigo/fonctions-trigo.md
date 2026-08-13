% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Fonctions trigonométriques

````{admonition} Définition
Une fonction réelle $f$ est **périodique** s'il existe un nombre réel $p$ tel
que, pour tout $k \in \mathbb{Z}$ et tout $x\in D_f$,

```{math}
:class: align-center
f(x + k \cdot p) = f(x).
```

Le nombre $p$ est alors appelé la **période** de la fonction.
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-fct-ex1>`
```

<script type="module">
const {attrs, gcd, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.sin = el => {
  return initBoard(el, [attrs.screen, withAxesLabels(undefined, [-1, 1]), {
    boundingBox: [-1.5, 1.5, 6.5, -1.5],
    axis: true, grid: {majorStep: [Math.PI / 2, 1]},
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    defaultAxes: {
      x: {
        name: '\\(x, \\alpha\\)',
        ticks: {
          insertTicks: false,
          ticksDistance: 1/2, minorTicks: 1, ticksPerLabel: 1,
          scale: Math.PI, scaleSymbol: 'π',
          label: { toFraction: true, useMathJax: true },
        },
      },
      y: {
        name: '\\(y\\)',
        ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
      },
    },
    defaults: {
      point: {strokeWidth: 0, showInfobox: false},
      line: {strokeWidth: 1},
    },
  }], board => {
    const ax1 = board.create('point', [1, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    // Place the circle.
    const c = board.create('circle', [o, 1], {strokeColor: JXG.palette.black});

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
    board.create('angle', [ax1, o, p], {
      name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
      radius: 0.2, orthoType: 'none',
      strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [o, p], {strokeColor: alphaColor});
    board.create('text',
      [1, 1.2, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`],
      {strokeColor: alphaColor, fixed: true});

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    board.create('segment', [p, px], {dash: 2, strokeColor: JXG.palette.black});
    board.create('segment', [p, py], {dash: 2, strokeColor: JXG.palette.black});

    // Place the elements related to the sine.
    const sinColor = JXG.palette.blue;
    board.create('arrow', [o, py], {
      name: '\\(\\sin(\\alpha)\\)', withLabel: true,
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
      [4, 1.2, () => `\
\\(\\sin(\\alpha)=${display_value(Math.sin(alpha()))}\\)`],
      {strokeColor: sinColor, fixed: true});

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
};
</script>

<script type="module">
const {attrs, gcd, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.cos = el => {
  return initBoard(el, [attrs.screen, withAxesLabels([-1, 1], undefined), {
    boundingBox: [-3, 6.5, 2.5, -1.5],
    axis: true, grid: {majorStep: [1, Math.PI / 2]},
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
      defaultAxes: {
      x: {
        name: '\\(x, \\alpha\\)',
        ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
      },
      y: {
        name: '\\(y, \\alpha\\)',
        ticks: {
          insertTicks: false,
          ticksDistance: 1/2, minorTicks: 1, ticksPerLabel: 1,
          scale: Math.PI, scaleSymbol: 'π',
          label: { toFraction: true, useMathJax: true },
        },
      },
    },
    defaults: {
      point: {strokeWidth: 0, size: 0, showInfobox: false},
      line: {strokeWidth: 1},
    },
  }], board => {
    const ax1 = board.create('point', [1, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    // Place the circle.
    const c = board.create('circle', [o, 1], {strokeColor: JXG.palette.black});

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
    board.create('angle', [ax1, o, p], {
      name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
      radius: 0.2, orthoType: 'none',
      strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [o, p], {strokeColor: alphaColor});
    board.create('text',
      [-2.5, 5.8, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`],
      {strokeColor: alphaColor, fixed: true});

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    board.create('segment', [p, px], {dash: 2, strokeColor: JXG.palette.black});
    board.create('segment', [p, py], {dash: 2, strokeColor: JXG.palette.black});

    // Place the elements related to the cosine.
    const cosColor = JXG.palette.red;
    board.create('arrow', [o, px], {
      name: '\\(\\cos(\\alpha)\\)', withLabel: true,
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
      withLabel: false, fillColor: cosColor, size: 2
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
      [-2.5, 5.2, () => `\
\\(\\cos(\\alpha)=${display_value(Math.cos(alpha()))}\\)`],
      {strokeColor: cosColor, fixed: true});

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
};
</script>

<script type="module">
const {attrs, gcd, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.tan = el => {
  return initBoard(el, [attrs.screen, withAxesLabels(undefined, [-1, 1]), {
    boundingBox: [-1.5, 6.5, 6.5, -6.5],
    axis: true, grid: {majorStep: [Math.PI / 4, 1]},
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    defaultAxes: {
      x: {
        name: '\\(x, \\alpha\\)',
        ticks: {
          insertTicks: false,
          ticksDistance: 1, minorTicks: 3, ticksPerLabel: 1,
          scale: Math.PI, scaleSymbol: 'π',
          label: { toFraction: true, useMathJax: true },
        },
      },
      y: {
        name: '\\(y\\)',
        ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},
      },
    },
    defaults: {
      point: {strokeWidth: 0, size: 0, showInfobox: false},
      line: {strokeWidth: 1},
    },
  }], board => {
    const ax1 = board.create('point', [1, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    // Place the circle.
    const c = board.create('circle', [o, 1], {strokeColor: JXG.palette.black});

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

    board.create('angle', [ax1, o, p], {
      name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
      radius: 0.2, orthoType: 'none',
      strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [o, [1, () => Math.tan(alpha())]],
      {strokeColor: alphaColor, dash: 2});
    board.create('segment', [o, p], {strokeColor: alphaColor});
    board.create('text',
      [2, 6, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`],
      {strokeColor: alphaColor, fixed: true});

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];

    // Place the elements related to the tan.
    const tanColor = JXG.palette.purple;
    const ptan = board.create('point', [alpha, () => Math.tan(alpha())], {
      withLabel: false, fillColor: tanColor, size: 2
    });
    board.create('curve', [a => a, a => Math.tan(a), 0, 2 * Math.PI], {
      strokeColor: tanColor,
    });
    board.create('segment', [[0, () => Math.tan(alpha())], ptan], {
      dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('segment', [[0, () => Math.tan(alpha())],
                             [1, () => Math.tan(alpha())]], {
      dash: 2, strokeColor: JXG.palette.black,
    });
    const ax = board.create('point', [alpha, 0], {
      name: '\\(\\alpha\\)', size: 0, label: {strokeColor: alphaColor},
    });
    board.create('segment', [ptan, ax], {
      dash: 2, strokeColor: JXG.palette.black,
    });
    board.create('line', [ax1, [1, 1]], {
      dash: 2, strokeColor: JXG.palette.black
    });
    board.create('arrow', [ax1, [1, () => Math.tan(alpha())]], {
      name: '\\(\\tan(\\alpha)\\)', withLabel: true,
      label: {
        position: '0.5fr right', anchorX: 'middle', anchorY: 'middle',
        distance: 0, offset: [7, 0], strokeColor: tanColor,
      },
      strokeWidth: 2, strokeColor: tanColor,
    });
    board.create('text',
      [2, 5.5, () => `\
\\(\\tan(\\alpha)=${Math.tan(alpha()) > 100 ? `indéfini` :
                      display_value(Math.tan(alpha()))}\\)`],
      {strokeColor: tanColor, fixed: true});

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
};
</script>

````{container} frame noprint
# Fonction $\sin(x)$

```{jsxgraph} sin
:style: width: 100%; border: none;
```

$$
\sin: \mathbb{R} & \to [-1; 1]\\
         x & \mapsto \sin(x)
$$
$\sin(x) = \sin(x + k \cdot 2\pi)$, la période de $\sin(x)$ est $2\pi$.

$\sin(-x) = -\sin(x)$, la fonction $\sin(x)$ est donc impaire.

zéros: $\{k \cdot \pi \; | \; k \in \mathbb{Z}\}$
````

````{container} frame noprint
# Fonction $\cos(x)$

```{jsxgraph} cos
:style: width: 60%; border: none;
```

$$
\cos: \mathbb{R} & \to [-1; 1]\\
         x & \mapsto \cos(x)
$$
$\cos(x) = \cos(x + k \cdot 2\pi)$, la période de $\cos(x)$ est $2\pi$.

$\cos(-x) = \cos(x)$, la fonction $\cos(x)$ est donc paire.

zéros: $\left\{\dfrac{\pi}{2} + k \cdot \pi \; | \; k \in \mathbb{Z}\right\}$

````

````{container} frame noprint
# Fonction $\tan(x)$

```{jsxgraph} tan
:style: width: 80%; border: none;
```

$$
\tan: \mathbb{R} \setminus \left\{\dfrac{\pi}{2} + k \cdot \pi\right\} \ & \to \mathbb{R}\\
         x & \mapsto \tan(x)
$$
$\tan(x) = \tan(x + k \cdot \pi)$, la période de $\tan(x)$ est $\pi$.

$\tan(-x) = -\tan(x)$, la fonction $\tan(x)$ est donc impaire.

zéros: $\{k \cdot \pi \; | \; k \in \mathbb{Z}\}$
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
| **Dom. de déf.**  | $\mathbb{R}$ | $\mathbb{R}$ | $\mathbb{R} \setminus \left\{\dfrac{\pi}{2} + k \cdot \pi\right\}$
| **Images** | $[-1; 1]$ | $[-1; 1]$ | $\mathbb{R}$
| **Période** | $2\pi$ | $2\pi$ | $\pi$
| **Zéros** | $k \cdot \pi$ | $\dfrac{\pi}{2} + k \cdot \pi$ | $k \cdot \pi$
| **Parité** | impaire | paire | impaire
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-7, 1.5, 7, -1.5],
  grid: {majorStep: [Math.PI / 4, 0.5]},
  defaultAxes: {
    x: {ticks: {scale: Math.PI, scaleSymbol: 'π'}},
    y: {ticks: {minorTicks: 1}},
  },
}];
render.sinx = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.sin(x)], {
      name: `\\(\\sin(x)\\)`, withlabel: true,
      label: {position: '0.68fr right', offset: [0, 45]},
    });
  });
};
render.cosx = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.cos(x)], {
      name: `\\(\\cos(x)\\)`, withlabel: true,
      label: {position: '0.58fr right', offset: [0, 42]},
    });
  });
};
render.tanx = el => {
  return initBoard(el, [battrs, {boundingBox: [-7, 5, 7, -5]}], board => {
    board.create('functiongraph', [x => Math.tan(x)], {
      name: `\\(\\tan(x)\\)`, withlabel: true,
      label: {position: '0.57fr right', offset: [-30, 0]},
    });
  });
};
</script>


````{container} frame
# Représentation graphique de la fonction $\sin(x)$:

```{jsxgraph} sinx
:style: width: 100%; border: none;
```
````

````{container} frame
### Représentation graphique de la fonction $\cos(x)$:

```{jsxgraph} cosx
:style: width: 100%; border: none;
```
````

````{container} frame
### Représentation graphique de la fonction $\tan(x)$:

```{jsxgraph} tanx
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Comment la représentation de la fonction $a \cdot \sin(b \cdot x + c) + d$
change-t-elle en fonction des coefficients $a$, $b$, $c$ et $d$?

```{jsxgraph} sinus
:style: width: 100%; border: none;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-fct-ex2>`
```

````{container} frame noprint
# Exemple {num2}`exemple`

Comment la représentation de la fonction $a \cdot \cos(b \cdot x + c) + d$
change-t-elle en fonction des coefficients $a$, $b$, $c$ et $d$?

```{jsxgraph} cosinus
:style: width: 100%; border: none;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-fct-ex3>`
```

````{container} frame noprint
# Exemple {num2}`exemple`

Comment la représentation de la fonction $a \cdot \tan(b \cdot x + c) + d$
change-t-elle en fonction des coefficients $a$, $b$, $c$ et $d$?

```{jsxgraph} tangente
:style: width: 100%; border: none;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-fct-ex4>`
```

<script type="module">
const {attrs, gcd, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');

function sliders(board) {
  const a = board.create('slider', [[-6.8, 4] , [-3.8, 4], [0, 1, 4]], {
    name: '\\(a\\)', size: 4, withTicks: false,
  });
  const b = board.create('slider', [[-6.8, 3.7] , [-3.8, 3.7], [0, 1, 4]], {
    name: '\\(b\\)',  size: 4, withTicks: false,
  });
  const snaps = [];
  for (let i = -4; i <= 4; ++i) snaps.push(i * Math.PI / 2);
  const c = board.create('slider', [[-6.8, 3.4] , [-3.8, 3.4],
                                    [- 2 * Math.PI, 0, 2 * Math.PI]], {
    name: '\\(c\\)',  size: 4, withTicks: false,
    snapValues: snaps, snapValueDistance: Math.PI / 12,
  });
  const d = board.create('slider', [[-6.8, 3.1] , [-3.8, 3.1], [-3, 0, 3]], {
    name: '\\(d\\)',  size: 4, withTicks: false,
  });
  const sliders = [a, b, c, d];
  const def = sliders.map(s => s.getParents()[2][1]);
  const btn = board.create('button', [-2.2, 3.9, "Réinitialiser", () => {
    for (const [i, s] of sliders.entries()) s.setValue(def[i]);
    board.update();
  }]);
  btn.rendNodeButton.classList.add('tdoc');
  return sliders;
}

const battrs = [attrs.screen, {
  boundingBox: [-7, 4.2, 7, -4.2],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  grid: {majorStep: [Math.PI / 2, 1]},
  defaultAxes: {
    x: {
      ticks: {
        insertTicks: false,
        ticksDistance: 1/2, minorTicks: 1,
        scale: Math.PI, scaleSymbol: 'π',
        label: { toFraction: true, useMathJax: true },
      },
    },
    y: {ticks: {minorTicks: 1}},
  },
  defaults: {
    slider: {withLabel: true, label: {distance: 1}},
  },
}];

render.sinus = el => {
  return initBoard(el, battrs, board => {
    const [a, b, c, d] = sliders(board);
    board.create('functiongraph', [x => {
      return a.Value() * Math.sin(b.Value() * x + c.Value()) + d.Value();
    }]);
    board.create('text', [1, 3.8, () => {
      const sc = c.Value() >= 0 ? '+' : '-';
      const vc = display(Math.abs(c.Value()));
      const sd = d.Value() >= 0 ? '+' : '-';
      const vd = Math.abs(d.Value()).toFixed(2);
      return `\
\\(${a.Value().toFixed(2)} \\cdot sin(${b.Value().toFixed(2)} \
\\cdot x ${sc} ${vc}) ${sd} ${vd}\\)`;
      },
    ], {
      strokeColor: JXG.palette.blue, fixed: true,
    });
  });
};

render.cosinus = el => {
  return initBoard(el, battrs, board => {
    const [a, b, c, d] = sliders(board);
    board.create('functiongraph', [x => {
      return a.Value() * Math.cos(b.Value() * x + c.Value()) + d.Value();
    }]);
    board.create('text', [1, 3.8, () => {
      const sc = c.Value() >= 0 ? '+' : '-';
      const vc = display(Math.abs(c.Value()));
      const sd = d.Value() >= 0 ? '+' : '-';
      const vd = Math.abs(d.Value()).toFixed(2);
      return `\
\\(${a.Value().toFixed(2)} \\cdot cos(${b.Value().toFixed(2)} \
\\cdot x ${sc} ${vc}) ${sd} ${vd}\\)`;
      },
    ], {
      strokeColor: JXG.palette.blue, fixed: true,
    });
  });
};

render.tangente = el => {
  return initBoard(el, battrs, board => {
    const [a, b, c, d] = sliders(board);
    board.create('functiongraph', [x => {
      return a.Value() * Math.tan(b.Value() * x + c.Value()) + d.Value();
    }]);
    board.create('text', [1, 3.8, () => {
      const sc = c.Value() >= 0 ? '+' : '-';
      const vc = display(Math.abs(c.Value()));
      const sd = d.Value() >= 0 ? '+' : '-';
      const vd = Math.abs(d.Value()).toFixed(2);
      return `\
\\(${a.Value().toFixed(2)} \\cdot tan(${b.Value().toFixed(2)} \
\\cdot x ${sc} ${vc}) ${sd} ${vd}\\)`;
      },
    ], {
      strokeColor: JXG.palette.blue, fixed: true,
    });
  });
};

const angles = [];
for (let i = 0; i < 5; ++i) {
  for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
    const a = i * d + 2 * n, b = 2 * d;
    const cd = gcd(a, b);
    angles.push([a / cd, b / cd]);
  }
}

function display(angle) {
  for (const [n, d] of angles) {
    if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
      if (n === 0) return 0;
      const ns = `${n > 1 ? n : ''}\\pi`;
      if (d == 1) return ns;
      return `\\dfrac{${ns}}{${d}}`;
    }
  }
  return angle.toFixed(2);
}
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

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, {
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  grid: {majorStep: [1, Math.PI / 4]},
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {
      ticks: {
        insertTicks: false,
        ticksDistance: 1/2, minorTicks: 1, ticksPerLabel: 1,
        scale: Math.PI, scaleSymbol: 'π',
        label: { toFraction: true, useMathJax: true },
      },
    },
  },
}];
render.arcsin = el => {
  return initBoard(el, [battrs, {boundingBox: [-4, 2, 4, -2]}], board => {
    board.create('functiongraph', [x => Math.sin(x)], {
      name: '\\(\\sin\\)', withLabel: true,
      label: {
        position: '0.7fr right', offset: [-8, 0],
      },
      strokeOpacity: 0.3}
      );
    board.create('functiongraph', [x => Math.sin(x), -Math.PI/2, Math.PI/2]);
    board.create('functiongraph', [x => Math.asin(x), -1, 1], {
      name: '\\(\\arcsin\\)', withLabel: true,
      label: {
        position: '1fr right', offset: [-30, 0],
        strokeColor: JXG.palette.red,
      },
      strokeColor: JXG.palette.red,
    });
  });
};
render.arccos = el => {
  return initBoard(el, [battrs, {boundingBox: [-4, 3.5, 4, -1.5]}], board => {
    board.create('functiongraph', [x => Math.cos(x)], {
      name: '\\(\\cos\\)', withLabel: true,
      label: {
        position: '0.4fr right', offset: [-8, 0],
      },
      strokeOpacity: 0.3}
      );
    board.create('functiongraph', [x => Math.cos(x),0, Math.PI]);
    board.create('functiongraph', [x => Math.acos(x), -1, 1], {
      name: '\\(\\arccos\\)', withLabel: true,
      label: {
        position: '0fr right', offset: [-20, 0],
        strokeColor: JXG.palette.red,
      },
      strokeColor: JXG.palette.red,
    });
  });
};
render.arctan = el => {
  return initBoard(el, [battrs, {boundingBox: [-4, 3, 4, -3]}], board => {
    board.create('functiongraph', [x => Math.tan(x)], {
      name: '\\(\\tan\\)', withLabel: true,
      label: {
        position: '0.62fr right', offset: [-8, 0],
      },
      strokeOpacity: 0.3
    });
    board.create('functiongraph', [x => Math.tan(x), -Math.PI/2, Math.PI/2]);
    board.create('functiongraph', [x => Math.atan(x)], {
      name: '\\(\\arctan\\)', withLabel: true,
      label: {
        position: '0.8fr right', offset: [-30, 0],
        strokeColor: JXG.palette.red,
      },
      strokeColor: JXG.palette.red,
    });
  });
};
</script>

````{container} frame noprint
# Représentation de la fonction $\arcsin(x)$

```{jsxgraph} arcsin
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Représentation de la fonction $\arccos(x)$

```{jsxgraph} arccos
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Représentation de la fonction $\arctan(x)$

```{jsxgraph} arctan
:style: width: 100%; border: none;
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez tous les angles $\alpha$ en degrés tels que $\tan(\alpha) = 0.8$.

Une solution possible est $\quad \alpha = \arctan(0.8) \approx 38.66^\circ$

Comme la tangente a une période de $180^\circ$, l'ensemble des solutions est:

$S = \{ 38.66^\circ + k \cdot 180^\circ \Bigm| k \in \mathbb{Z}\}$.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez tous les angles $\alpha$ en randians tels que $\sin(x) = \dfrac{\sqrt{2}}{2}$.

Une solution possible est $\quad x_1 = \arcsin(\dfrac{\sqrt{2}}{2}) = \dfrac{\pi}{4}$

Par symétrie dans le cercle trigonométrique, une autre solution possible est
$x_2 = \pi - x_1 = \pi - \dfrac{\pi}{4} = \dfrac{3\pi}{4}$.

Comme le sinus a une période de $2\pi$, l'ensemble des solutions est:

$S = \left\{\dfrac{\pi}{4} + k \cdot 2\pi\Bigm| k \in \mathbb{Z}\right\} \cup
\left\{\dfrac{3\pi}{4} + k \cdot 2\pi\Bigm| k \in \mathbb{Z}\right\}$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-fct-ex5>`,
{numref}`exercice %s<exercice:2-fct-ex6>`,
{numref}`exercice %s<exercice:2-fct-ex7>
```


## Exercices

### Exercice {num2}`exercice:2-fct-ex1`

Lesquelles des fonctions ci-dessous sont périodiques? Justifiez la réponse et
déterminez la période, le cas échéant.

{.lower-alpha-paren}
1. temps $\longrightarrow$ hauteur d'une balle qui rebondit sur le sol
2. temps $\longrightarrow$ distance entre la Terre et le Soleil
3. temps $\longrightarrow$ niveau de l'eau le long d'un bord de mer

```{block} solution
{.lower-alpha-paren}
1. Non, car la balle rebondit toujours moins haut.
2. Oui, la période est 1 année.
3. Oui, l'alternance de la marée haute et de la marée basse est un processus
    périodique.
```

### Exercice {num2}`exercice:2-fct-ex2`

Établissez un tableau de correspondance des fonctions données, puis tracez leur
représentation graphique dans le repère ci-dessous, où la représentation
graphique de la fonction sinus a déjà été tracée. Que modifie le coefficient
devant le $\sin(x)$?

{.lower-alpha-paren .columns-3}
1. $f_1(x)=2\cdot \sin(x)$
2. $f_2(x)=0.25 \cdot \sin(x)$
3. $f_3(x)=- \sin(x)$

```{jsxgraph} sinusExo
:style: width: 100%; border: none;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-7, 2.5, 7, -2.5],
  grid: {majorStep: [Math.PI / 4, 0.5]},
  defaultAxes: {
    x: {ticks: {scale: Math.PI, scaleSymbol: 'π'}},
    y: {ticks: {minorTicks: 1}},
  },
}];
render.sinusExo = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.sin(x)]);
  });
};
render.sinusExoSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.sin(x)], {
      dash: 3, strokeOpacity: 0.4
    });
    board.create('functiongraph', [x => 2 * Math.sin(x)], {
      name: '\\(f_{1}\\)', withLabel: true,
      label: {position: '0.8fr right'},
    });
    board.create('functiongraph', [x => 0.25 * Math.sin(x)], {
      name: '\\(f_{2}\\)', withLabel: true,
      label: {position: '0.76fr right', offset: [2, -1]},
    });
    board.create('functiongraph', [x => - Math.sin(x)], {
      name: '\\(f_{3}\\)', withLabel: true,
      label: {position: '0.76fr left'},
    });
  });
};
render.cosinusExo = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.cos(x)]);
  });
};
render.cosinusExoSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.cos(x)], {
      dash: 3, strokeOpacity: 0.4
    });
    board.create('functiongraph', [x => Math.cos(0.5 * x)], {
      name: '\\(f_{1}\\)', withLabel: true,
      label: {position: '0.53fr left', offset: [0, -2]},
    });
    board.create('functiongraph', [x => Math.cos(2 * x)], {
      name: '\\(f_{2}\\)', withLabel: true,
      label: {position: '0.77fr right', offset: [4, -2]},
    });
    board.create('functiongraph', [x => Math.cos(4 * x)], {
      name: '\\(f_{3}\\)', withLabel: true,
      label: {position: '0.77fr left', offset: [10, 20]},
    });
  });
};
</script>

````{block} solution
Le coefficient devant le $\sin(x)$ change l'amplitude de la
fonction.

```{jsxgraph} sinusExoSol
:style: width: 100%; border: none;
````

### Exercice {num2}`exercice:2-fct-ex3`

Établissez un tableau de correspondance des fonctions données, puis tracez leur
représentation graphique dans le repère ci-dessous, où la représentation
graphique de la fonction cosinus a déjà été tracée. Que modifie le coefficient
devant le $x$ d'un $\cos(x)$?

{.lower-alpha-paren .columns-3}
1. $f_1(x)= \cos(0.5x)$
2. $f_2(x)= \cos(2x)$
3. $f_3(x)= \cos(4x)$

```{jsxgraph} cosinusExo
:style: width: 100%; border: none;
```

````{block} solution
Le coefficient devant le $x$ du $\cos(x)$ change la période.

```{jsxgraph} cosinusExoSol
:style: width: 100%; border: none;
````

### Exercice {num2}`exercice:2-fct-ex4`

Tracez la représentation graphique des fonctions ci-dessous.

{.lower-alpha-paren .columns-2}
1. $f_1(x)=2\cos(x+2\pi)-1$
2. $f_2(x)=\cos(2x)+1$
3. $f_3(x)=1.5\cos\left(x-\frac{\pi}{4}\right)-0.5$
4. $f_4(x)=\cos\left(0.5\left(x+\frac{\pi}{2}\right)\right)$

````{block} solution
```{jsxgraph} fctSol
:style: width: 100%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-7, 2.5, 7, -3.5],
  grid: {majorStep: [Math.PI / 4, 0.5]},
  defaultAxes: {
    x: {ticks: {scale: Math.PI, scaleSymbol: 'π'}},
    y: {ticks: {minorTicks: 1}},
  },
}];
render.fctSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 2 * Math.cos(x + 2 * Math.PI)-1], {
      name: '\\(f_{1}\\)', withLabel: true,
      label: {position: '0.6fr right', offset: [-10, -10]},
    });
    board.create('functiongraph', [x => Math.cos(2 * x) + 1], {
      name: '\\(f_{2}\\)', withLabel: true,
      label: {position: '0.7fr left', offset: [2, -1]},
    });
    board.create('functiongraph', [x => 1.5 * Math.cos(x - Math.PI/4)-0.5], {
      name: '\\(f_{3}\\)', withLabel: true,
      label: {position: '0.76fr right'},
    });
    board.create('functiongraph', [x => Math.cos(0.5 * (x + Math.PI/2))], {
      name: '\\(f_{4}\\)', withLabel: true,
      label: {position: '0.1fr right'},
    });
  });
};
</script>

### Exercice {num2}`exercice:2-fct-ex5`

Déterminez tous les angles (en degrés arrondis au centième) tels que:

{.lower-alpha-paren .columns-3}
1. $\sin(\alpha)=0.82$
2. $\cos(\beta)=-0.65$
3. $\tan(\gamma)=1.9$

```{block} solution
{.lower-alpha-paren}
1. $\alpha_1=55.08^\circ+k \cdot 360^\circ$, $\alpha_2=124.92^\circ +k \cdot
    360^\circ$, $k \in \mathbb{Z}$
2. $\beta_1=130.54^\circ+k \cdot 360^\circ$, $\beta_2=-130.54^\circ +k \cdot
    360^\circ$, $k \in \mathbb{Z}$
3. $\gamma=62.24^\circ+k \cdot 180^\circ$, $k \in \mathbb{Z}$
```

### Exercice {num2}`exercice:2-fct-ex6`

Déterminez tous les angles (en radian arrondis au dix-millionième) tels que:

{.lower-alpha-paren .columns-3}
1. $\tan(x)=-0.2$
2. $\sin(y)=-1$
3. $\cos(z)=0.34$

```{block} solution
{.lower-alpha-paren}
1. $x=-0.1974+k \cdot \pi$, $k \in \mathbb{Z}$
2. $y=-1.5708+k \cdot 2\pi$, $k \in \mathbb{Z}$
3. $z_1=1.2239+ k \cdot 2\pi$, $z_2=-1.2239+ k \cdot 2\pi$, $k \in \mathbb{Z}$
```

### Exercice {num2}`exercice:2-fct-ex7`

Une grande roue possédant un diamètre de $60$ m et dont l'axe se trouve à une
hauteur de $31$ m au dessus du sol nécessite 3 minutes pour faire un tour
complet. Un passager se trouve dans une cabine de cette grande roue, située tout
en bas au temps $t=0$.

{.lower-alpha-paren}
1.  À quelle hauteur le passager se trouve-t-il au temps $t= 1$ min, $t=4.5$ min
    et $t= 6$ min?
2.  Tracez la représentation graphique de la fonction qui exprime la hauteur du
    passager en fonction du temps écoulé en minutes.
3.  Déterminez l'expression algébrique de cette fonction.

````{block} solution
{.lower-alpha-paren}
1.  $46$ m; $61$ m; $1$m
2.  ```{jsxgraph} grandeRoue
    :style: width: 50%; border: none;
    ```
3.  $f(t) = -30\cos\left(\frac{2\pi}{3}t\right)+31
    = 30\sin\left(\frac{2\pi}{3}\left(t-\frac{3}{4}\right)\right)+31
    = 30\sin\left(\frac{2\pi}{3}t-\frac{\pi}{2}\right)+31$
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.grandeRoue = el => {
  return initBoard(el, [attrs.print, {
    boundingBox: [-0.9, 65, 11.5, -5], keepAspectRatio: false,
    defaultAxes: {
      x: {
        name: `\\(t[min]\\)`, ticks: {ticksDistance: 1},
        label: {position: '1fr right'},
      },
      y: {name: `\\(h\\)`, ticks: {ticksDistance: 10}},
    },
  }], board => {
    board.create('functiongraph',
      [t => -30 * Math.cos(2 * t * Math.PI/3) + 31, -0.5, 11.5]);
  });
};
</script>

## Solutions

```{blocks} solution
:class: allow-break-inside
```

