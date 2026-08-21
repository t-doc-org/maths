% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Équations trigonométriques

## Théorie

```{admonition} Définition
Une **équation trigonométrique** est une équation dans laquelle l'inconnue
apparaît comme argument d'une fonction trigonométrique.
```

````{admonition} Définition
Voici quelques relations trigonométriques utiles lors de la résolution
d'équations:

```{math}
:class: align-center
\cos(x) &= \cos(-x)\\
\sin(x) &= \sin(\pi - x)\\
\cos^2(x) + \sin^2(x) &= 1\\
\sin(x) &= \cos\left(\dfrac{\pi}{2} - x\right)\\
\cos(x) &= \sin\left(\dfrac{\pi}{2} - x\right) = \sin\left(\dfrac{\pi}{2} + x\right)\\
\tan(x) &= \dfrac{\sin(x)}{\cos(x)}\\
-\cos(x) &= \cos(\pi-x)\\
```
````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
attrs.page = [attrs.screen, attrs.nonInteractive, {
  boundingBox: [-6, 5.5, 6, -2.5],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  grid: {majorStep: [Math.PI / 4, 1]},
  defaultAxes: {
    x: {
      ticks: {
        insertTicks: false,
        ticksDistance: 1/2, minorTicks: 1, ticksPerLabel: 1,
        scale: Math.PI, scaleSymbol: 'π',
        label: { toFraction: true, useMathJax: true },
      },
    },
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
      segment: {strokeWidth: 1},
      point: {strokeWidth: 0},
  },
}];
render.exempleTan = el => {
  return initBoard(el, attrs.page, board => {
    board.create('functiongraph', [x => Math.tan(x) - 2], {
      name: '\\(\\tan(x)-1\\)', withLabel: true,
      label: {position: '0.5fr right', offset: [-30, 0]},
    });
    board.create('functiongraph', [x => 3], {strokeColor: JXG.palette.red});
    for (let k = 0; k < 5; ++k) {
      board.create('point', [Math.atan(5) - 2 * Math.PI + k * Math.PI, 3], {
        fillColor: 'darkmagenta', withLabel: false, size: 3,
      });
    }
    board.create('segment', [[Math.atan(5), 0],[Math.atan(5), 3]], {dash: 2});
  });
};
render.exempleCos = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-6, 1.5, 6, -1.5],
  }], board => {
    board.create('functiongraph', [x => Math.cos(3 * x)], {
      name: '\\(\\cos(3x)\\)', withLabel: true,
      label: {position: '0.7fr right', offset: [-20, 0]},
    });
    board.create('functiongraph', [x => Math.sqrt(2) / 2], {
      strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
      board.create('point',
        [Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI / 3, Math.sqrt(2) / 2],
        {fillColor: 'darkmagenta', withLabel: false, size: 3});
      board.create('point',
        [-Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI / 3, Math.sqrt(2) / 2],
        {fillColor: 'darkgreen', withLabel: false, size: 3});
    }
    board.create('segment',
      [[Math.PI / 12, 0],[Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
    board.create('segment',
      [[-Math.PI / 12, 0],[-Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
  });
};
render.exempleSin = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-6, 2.8, 6, -0.5],
  }], board => {
    board.create('functiongraph', [x => Math.sin(x - Math.PI / 2) + 1], {
      name: '\\(\\sin(x - \\dfrac{\\pi}{2})+1\\)', withLabel: true,
      label: {position: '0.7fr left', offset: [0, 0]},
    });
    board.create('functiongraph', [x => 1 / 2], {strokeColor: JXG.palette.red});
    for (let k = 0; k < 2; ++k) {
      board.create('point',
        [Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2],
        {fillColor: 'darkmagenta', withLabel: false, size: 3});
      board.create('point',
        [5 * Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2],
        {fillColor: 'darkgreen', withLabel: false, size: 3});
    }
    board.create('segment', [[Math.PI / 3, 0],[Math.PI / 3, 1 / 2]], {dash: 2});
    board.create('segment',
      [[5 * Math.PI / 3, 0],[5 * Math.PI / 3, 1 / 2]], {dash: 2});
  });
};
render.exempleSin2 = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-6, 1.5, 6, -1.5],
  }], board => {
    board.create('functiongraph', [x => Math.sin(2 *x)], {
      name: '\\(\\sin(2x)\\)', withLabel: true,
      label: {position: '0.75fr left', offset: [-20, 0]},
    });
    board.create('functiongraph', [x => Math.sin(Math.PI / 2 - x)], {
      name: '\\(\\sin(\\dfrac{\\pi}{2}-x)\\)', withLabel: true,
      label: {
        position: '0.44fr left', offset: [-30, 0], strokeColor: JXG.palette.red,
      },
      strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
      board.create('point',
        [Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI / 3,
         Math.sin(2 * (Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI / 3))],
        {fillColor: 'darkmagenta', withLabel: false, size: 3});
      board.create('point', [Math.PI / 2 - 2 * Math.PI + k * 2 * Math.PI, 0], {
        fillColor: 'darkgreen', withLabel: false, size: 3,
      });
    }
    board.create('segment',
      [[Math.PI / 6, 0],[Math.PI / 6, Math.sin(2 * Math.PI / 6)]], {dash: 2});
  });
};
render.exempleSin3 = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-6, 1.5, 6, -1.5],
  }], board => {
    board.create('functiongraph', [x => Math.sin(2 * x + Math.PI / 4)], {
      name: '\\(\\sin(2x - \\dfrac{\\pi}{2})\\)', withLabel: true,
      label: {position: '0.75fr left', offset: [-40, -10]},
    });
    board.create('functiongraph', [x => Math.cos(x)], {
      name: '\\(\\cos(x)\\)', withLabel: true,
      label: {
        position: '0.44fr left', offset: [-20, 0], strokeColor: JXG.palette.red,
      },
      strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
      board.create('point',
        [Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI / 3,
         Math.cos(Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI / 3)],
        {fillColor: 'darkmagenta', withLabel: false, size: 3});
      board.create('point',
        [Math.PI / 4 - 2 * Math.PI + k * 2 * Math.PI,
         Math.cos(Math.PI / 4 - 2 * Math.PI + k * 2 * Math.PI)],
        {fillColor: 'darkgreen', withLabel: false, size: 3});
    }
    board.create('segment',
      [[Math.PI / 12, 0],[Math.PI / 12, Math.cos(Math.PI / 12)]], {dash: 2});
    board.create('segment',
      [[Math.PI / 4, 0],[Math.PI / 4, Math.cos(Math.PI / 4)]], {dash: 2});
  });
};
render.exempleSinCos = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-6, 2.8, 6, -1.5],
  }], board => {
    board.create('functiongraph', [x => 2 * (Math.cos(x)) ** 2 + Math.sin(x)], {
      name: '\\(2\\cos^2(x)+ \\sin(x)\\)', withLabel: true,
      label: {position: '0.7fr left', offset: [-40, 0]},
    });
    board.create('functiongraph', [x => 1], {strokeColor: JXG.palette.red,});
    for (let k = 0; k < 7; ++k) {
      board.create('point',
        [-1 * Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI, 1],
        {fillColor: 'darkmagenta', withLabel: false, size: 3});
      board.create('point',
        [7 * Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI, 1],
        {fillColor: 'darkgreen', withLabel: false, size: 3});
      board.create('point', [Math.PI / 2 - 2 * Math.PI + k * 2 * Math.PI, 1],
        {fillColor: 'skyblue', withLabel: false, size: 3});
    }
    board.create('segment', [[-1 * Math.PI / 6, 0], [-1 * Math.PI / 6, 1]],
      {dash: 2});
    board.create('segment', [[7 * Math.PI / 6, 0], [7 * Math.PI / 6, 1]],
      {dash: 2});
    board.create('segment', [[Math.PI / 2, 0],[Math.PI / 2, 1]], {dash: 2});
  });
};
</script>


````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $\tan(x) - 2 = 3$.

$$
\tan(x) - 2 &= 3 \qquad \qquad \qquad &|& +2\\
\tan(x) &= 5 &|& \arctan(...)\\
\arctan(\tan(x)) &= \arctan(5)\\
x &= \arctan(5)
$$

Comme $\tan(x)$ a une période de $\pi$:

$x = 1.3734 {\color{red} \,+\, k \cdot \pi}$

$S = {\color{darkmagenta}\{1.3734 + k\pi \bigm| k \in \mathbb{Z}\}}$

```{jsxgraph} exempleTan
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Même exemple que le précédent, mais en travaillant en degrés.

Résolvez $\tan(\alpha) - 2 = 3$.

$$
\tan(\alpha) - 2 &= 3 \qquad \qquad \qquad &|& +2\\
\tan(\alpha) &= 5 &|& \arctan(...)\\
\arctan(\tan(\alpha)) &= \arctan(5)\\
\alpha &= \arctan(5)
$$

Comme $\tan(\alpha)$ a une période de $180^\circ$:

$\alpha = 78.69^\circ {\color{red} \,+\, k \cdot 180^\circ}$

$S = {\color{darkmagenta}\{78.69^\circ + k \cdot 180^\circ \bigm| k \in \mathbb{Z}\}}$
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-eq-trigo-ex1>`
```

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $\sin(x - \dfrac{\pi}{2}) + 1 = \dfrac{1}{2}$.

$$
\sin(x - \dfrac{\pi}{2}) + 1 &= \dfrac{1}{2} \qquad \qquad \qquad &|& -1\\
\sin(x - \dfrac{\pi}{2}) &= -\dfrac{1}{2} &|& \arcsin(...)\\
\arcsin(\sin(x - \dfrac{\pi}{2}))  &= \arcsin(-\dfrac{1}{2})\\
x - \dfrac{\pi}{2}  &= \arcsin(-\dfrac{1}{2})
$$

Par symétrie dans le cercle trigonométrique, $\sin(x)=\sin(\pi-x)$ et, de plus,
$\sin(x)$ a une période de $2\pi$, il y a donc deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$
  x_1 - \dfrac{\pi}{2}  &= -\dfrac{\pi}{6} {\color{red} + \, k \, \cdot 2\pi} \qquad &|& +\dfrac{\pi}{2} \\
  x_1  &= \dfrac{\pi}{3} + k \cdot 2\pi
  $$
- $$
  x_2 - \dfrac{\pi}{2} &= {\color{red}\, \pi \,- }(-\dfrac{\pi}{6}) {\color{red} + \, k \, \cdot 2\pi} \qquad &|& \text{CL}\\
  x_2 - \dfrac{\pi}{2} &= \dfrac{7\pi}{6} + k \cdot 2\pi &|& +\dfrac{\pi}{2}\\
  x_2  &= \dfrac{7\pi}{6} + \dfrac{\pi}{2} + k \cdot 2\pi &|& \text{CL}\\
  x_2  &= \dfrac{5\pi}{3} + k \cdot 2\pi
  $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{darkgreen}\left\{\dfrac{5\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{Z} \right\}}$

```{jsxgraph} exempleSin
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Même exemple que le précédent, mais en travaillant en degrés.

Résolvez $\sin(\alpha - 90^\circ) + 1 = \dfrac{1}{2}$.

$$
\sin(\alpha - 90^\circ) + 1 &= \dfrac{1}{2} \qquad \qquad \qquad &|& -1\\
\sin(\alpha - 90^\circ) &= -\dfrac{1}{2} &|& \arcsin(...)\\
\arcsin(\sin(\alpha - 90^\circ)) &= \arcsin(-\dfrac{1}{2})\\
\alpha - 90^\circ  &= \arcsin(-\dfrac{1}{2})
$$

Par symétrie dans le cercle trigonométrique, $\sin(\alpha)=\sin(180^\circ-\alpha)$ et, de plus,
$\sin(\alpha)$ a une période de $360^\circ$, il y a donc deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$
  \alpha_1 - 90^\circ  &= -30^\circ {\color{red} + \, k \, \cdot 360^\circ} \qquad &|& +90^\circ \\
  \alpha_1  &= 60^\circ + k \cdot 360^\circ
  $$
- $$
  \alpha_2 - 90^\circ &= {\color{red}\, 180^\circ \,- }(-30^\circ) {\color{red} + \, k \, \cdot 360^\circ} \qquad &|& \text{CL}\\
  \alpha_2 - 90^\circ &= 210^\circ + k \cdot 360^\circ &|& +90^\circ\\
  \alpha_2  &= 300^\circ + k \cdot 360^\circ
  $$
```

$S = {\color{darkmagenta}\left\{60^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{darkgreen}\left\{300^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{Z} \right\}}$
````

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $\cos(3x) = \dfrac{\sqrt{2}}{2}$.

$$
\cos(3x) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\arccos(\cos(3x)) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right)\\
3x &= \arccos\left(\dfrac{\sqrt{2}}{2}\right)
$$

Par symétrie dans le cercle trigonométrique, $\cos(x)=\cos(-x)$ et, de plus,
$\cos(x)$ a une période de $2\pi$, il y a donc deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$3x_1  &= \dfrac{\pi}{4} {\color{red} \, + \, k \cdot 2\pi} \qquad &|& :3 \\
  x_1  &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
  $$
- $$
  3x_2 &= {\color{red}-}\dfrac{\pi}{4} {\color{red} \, + \, k \cdot 2\pi} \qquad &|& :3 \\
  x_2 &= -\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
  $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{green}\left\{-\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z} \right\}}$

```{jsxgraph} exempleCos
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Même exemple que le précédent, mais en travaillant en degrés.

Résolvez $\cos(3\alpha) = \dfrac{\sqrt{2}}{2}$.

$$
\cos(3\alpha) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\arccos(\cos(3\alpha)) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right)\\
3\alpha &= \arccos\left(\dfrac{\sqrt{2}}{2}\right)
$$

Par symétrie dans le cercle trigonométrique, $\cos(\alpha)=\cos(-\alpha)$ et, de plus,
$\cos(\alpha)$ a une période de $360^\circ$, il y a donc deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$3\alpha_1  &= 45^\circ {\color{red} \, + \, k \cdot 360^\circ} \qquad &|& :3 \\
  \alpha_1  &= 15^\circ + k \cdot 120^\circ
  $$
- $$
  3\alpha_2 &= {\color{red} \,-}45^\circ {\color{red} \, + \, k \cdot 360^\circ} \qquad &|& :3 \\
  \alpha_2 &= -15^\circ + k \cdot 120^\circ
  $$
```

$S = {\color{darkmagenta}\left\{15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{green}\left\{-15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{Z} \right\}}$
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-eq-trigo-ex2>`
```

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $\sin(2x) - \sin(\dfrac{\pi}{2} - x) = 0$.

$$
\sin(2x) - \sin(\dfrac{\pi}{2} - x) &= 0 \qquad \qquad \qquad &|& + \sin(\dfrac{\pi}{2} - x)\\
\sin(2x) &= \sin(\dfrac{\pi}{2} - x) &|& \arcsin(...) \\
\arcsin(\sin(2x)) &= \arcsin(\sin(\dfrac{\pi}{2} - x))
$$

Comme $\sin(x) = \sin(\pi - x)$ et que le $\sin(x)$ a une période de $2\pi$, il y a
deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$
  2x_1 &= \dfrac{\pi}{2} - x_1 + k \cdot 2\pi  \qquad &|& +x_1\\
  3x_1 &= \dfrac{\pi}{2} + k \cdot 2\pi &|& :3\\
  x_1 &= \dfrac{\pi}{6} + k \cdot \dfrac{2\pi}{3}
  $$
- $$
  2x_2 &= \pi - (\dfrac{\pi}{2} - x_2) + k \cdot 2\pi \qquad &|& \text{CL}\\
  2x_2 &= \pi - \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& \text{CL}\\
  2x_2 &= \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& -x_2\\
  x_2 &= \dfrac{\pi}{2} + k \cdot 2\pi
  $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{6} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{darkgreen}\left\{\dfrac{\pi}{2} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}}$


```{jsxgraph} exempleSin2
:style: width: 100%; border: none;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $\sin(2x + \dfrac{\pi}{4}) - \cos(x)= 0$.

$$
\sin(2x + \dfrac{\pi}{4}) - \cos(x)  &= 0 \qquad \qquad \qquad &|& + \cos(x)\\
\sin(2x + \dfrac{\pi}{4}) &= \cos(x) &|& \cos(x) = \sin(\dfrac{\pi}{2} - x) \\
\sin(2x + \dfrac{\pi}{4}) &= \sin(\dfrac{\pi}{2} - x) &|& \arcsin(...) \\
\arcsin(\sin(2x + \dfrac{\pi}{4})) &= \arcsin(\sin(\dfrac{\pi}{2} - x))
$$

Comme $\sin(x) = \sin(\pi - x)$ et que le $\sin(x)$ a une période de $2\pi$, il y a
deux équations possibles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$
  2x_1 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} - x_1 + k \cdot 2\pi  \qquad &|& +x_1\\
  3x_1 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} + k \cdot 2\pi &|& -\dfrac{\pi}{4}\\
  3x_1 &= \dfrac{\pi}{2} - \dfrac{\pi}{4} + k \cdot 2\pi &|& \text{CL}\\
  3x_1 &= \dfrac{\pi}{4} + k \cdot 2\pi &|& :3\\
  x_1 &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
  $$
- $$
  2x_2 + \dfrac{\pi}{4} &= \pi - (\dfrac{\pi}{2} - x_2) + k \cdot 2\pi \qquad &|& \text{CL}\\
  2x_2 + \dfrac{\pi}{4} &= \pi - \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& \text{CL}\\
  2x_2 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& -x_2\\
  x_2 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} + k \cdot 2\pi &|& -\dfrac{\pi}{4}\\
  x_2 &= \dfrac{\pi}{2} - \dfrac{\pi}{4} + k \cdot 2\pi &|& \text{CL}\\
  x_2 &= \dfrac{\pi}{4} + k \cdot 2\pi
  $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{darkgreen}\left\{\dfrac{\pi}{4} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}}$

```{jsxgraph} exempleSin3
:style: width: 100%; border: none;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-eq-trigo-ex3>`,
{numref}`exercice %s<exercice:2-eq-trigo-ex4>`,
```

`````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $2\cos^2(x)+ \sin(x) = 1$.

$$
2\cos^2(x) + \sin(x) &= 1 \qquad  &|& -1\\
2\cos^2(x) + \sin(x) - 1 &= 0 &|& \cos^2(x) = 1-\sin^2(x) \\
2(1 - \sin^2(x)) + \sin(x) - 1 &= 0 &|& \text{CL} \\
2 - 2\sin^2(x) + \sin(x) - 1 &= 0 &|& \text{CL} \\
- 2\sin^2(x) + \sin(x) + 1 &= 0 &|&  \cdot (-1) \\
2\sin^2(x) - \sin(x) - 1 &= 0\\
$$

En posant $t = \sin(x)$, l'équation se transforme en une équation du deuxième
degré:

$$
2t^2 - t - 1 &= 0 \qquad &|&  \text{factorisation du trinôme} \\
2t^2 - 2t + t - 1 &= 0 \\
2t(t - 1) + (t - 1) &= 0\\
(2t + 1)(t - 1) &= 0 \\
$$

$t = -\dfrac{1}{2}$ ou $t = 1$ avec  $t = \sin(x)$ donnent:

````{list-grid}
:style: grid-template-columns: 2fr 1fr;
- # $\sin(x) = -\frac{1}{2}$
  ```{list-grid}
  :style: grid-template-columns: 1fr 1fr;
  -   $$
      x_1 &= -\dfrac{\pi}{6} + k \cdot 2\pi\\
      $$
  -   $$
      x_2 &= \pi - (-\dfrac{\pi}{6}) + k \cdot 2\pi\\
      x_2 &= \pi + \dfrac{\pi}{6} + k \cdot 2\pi\\
      x_2 &= \dfrac{7\pi}{6} + k \cdot 2\pi\\
      $$
  ```
- # $\sin(x) = 1$
  $$
  x_3 &= \dfrac{\pi}{2} + k \cdot 2\pi\\
  $$
````

$S = {\color{darkmagenta}\left\{-\dfrac{\pi}{6} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{darkgreen}\left\{\dfrac{7\pi}{6} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{skyblue}\left\{\dfrac{\pi}{2} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} =
\left\{\dfrac{\pi}{2} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z}\right\}$

```{jsxgraph} exempleSinCos
:style: width: 100%; border: none;
```
`````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-eq-trigo-ex5>`,
{numref}`exercice %s<exercice:2-eq-trigo-ex6>`,
{numref}`exercice %s<exercice:2-eq-trigo-ex7>`,
```

## Exercices

### Exercice {num2}`exercice:2-eq-trigo-ex1`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1. $\sin(\varphi)=0.8473$
2. $\cos(\varphi)=-0.38$
3. $\tan(\varphi)=-1.6$
4. $\cos(x)=1.352$
5. $\tan(x)=-0.9042$
6. $\sin(x)=0.44$

```{block} solution
{.lower-alpha-paren}
1.  $S = \left\{ 57.92^\circ + k \cdot 360^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ 122.08^\circ + k \cdot 360^\circ \mid k \in \mathbb{Z} \right\}$
2.  $S = \left\{ 112.33^\circ +k \cdot 360^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ -112.33^\circ + k \cdot 360^\circ \mid k \in \mathbb{Z} \right\}$
3.  $S = \left\{ 122^\circ +k \cdot 180^\circ \mid k \in \mathbb{Z} \right\}$
4.  $S=\emptyset$
5.  $S = \left\{ 2.4065 + k \cdot \pi \mid k \in \mathbb{Z} \right\}$
6.  $S = \left\{ 0.4556 + k \cdot 2\pi \mid k \in \mathbb{Z} \right\} \cup \left\{ 2.686 + k \cdot 2\pi \mid k \in \mathbb{Z} \right\}$
```

### Exercice {num2}`exercice:2-eq-trigo-ex2`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1.  $\cos(\alpha-60^\circ)=-\dfrac{1}{2}$
2.  $\tan(4x)=\sqrt{3}$
3.  $2 \cdot \sin\left(x+\dfrac{\pi}{12}\right)=-\sqrt{2}$
4.  $\sin(3\alpha+15^\circ)=-0.5$

```{block} solution
{.lower-alpha-paren}
1.  $S = \left\{ 180^\circ +k \cdot 360^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ -60^\circ+k \cdot 360^\circ \mid k \in \mathbb{Z} \right\}$
2.  $S = \left\{ \dfrac{\pi}{12} +k \cdot  \dfrac{\pi}{4} \Bigm| k \in \mathbb{Z} \right\}$
3.  $S = \left\{ -\dfrac{\pi}{3} +k \cdot 2\pi \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ \dfrac{7\pi}{6} +k \cdot 2\pi \Bigm| k \in \mathbb{Z} \right\}$
4.  $S = \left\{ -15^\circ +k \cdot 120^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ 65^\circ+k \cdot 120^\circ \mid k \in \mathbb{Z} \right\}$
```

### Exercice {num2}`exercice:2-eq-trigo-ex3`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1.  $\sin(3x)=\sin\left(\dfrac{\pi}{2}-x\right)$
2.  $\tan\left(\dfrac{2\pi}{3}-x\right)=\tan(2x)$
3.  $\cos\left(\dfrac{2\alpha}{3}-45^\circ\right)=-\cos\left(\dfrac{3\alpha}{2}-30^\circ\right)$
4.  $\sin\left(\dfrac{5\alpha}{3}\right)+\cos\left(\dfrac{\alpha}{2}\right)=0$

```{block} solution
{.lower-alpha-paren}
1.  $S = \left\{ \dfrac{\pi}{8} +k \cdot \dfrac{\pi}{2} \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ \dfrac{\pi}{4} +k \cdot \pi \Bigm| k \in \mathbb{Z} \right\}$
2.  $S = \left\{ \dfrac{2\pi}{9} +k \cdot \dfrac{\pi}{3} \Bigm| k \in \mathbb{Z} \right\}$
3.  $S = \left\{ 117.69^\circ +k \cdot 166.15^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ -234^\circ+k \cdot 432^\circ \mid k \in \mathbb{Z} \right\}$
4.  $S = \left\{ -77.14^\circ +k \cdot 308.57^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ 124.62^\circ+k \cdot 166.15^\circ \mid k \in \mathbb{Z} \right\}$
```

### Exercice {num2}`exercice:2-eq-trigo-ex4`

Déterminez les zéros des fonctions suivantes.

{.lower-alpha-paren .columns-2}
1. $f(x) = 2\sin\left(2\left(x-\dfrac{\pi}{2}\right)\right)$
2. $f(x) = 3\cos\left(\dfrac{x+\pi}{2}\right)$

```{block} solution
{.lower-alpha-paren .columns-2}
1. $S = \left\{ k\cdot \dfrac{\pi}{2} \Bigm| k \in \mathbb{Z} \right\}$
2. $S = \left\{ k \cdot 2\pi \mid k \in \mathbb{Z} \right\}$
```

### Exercice {num2}`exercice:2-eq-trigo-ex5`

Résolvez les équations suivantes en utilisant une substitution pour obtenir une
équation quadratique.

{.lower-alpha-paren .columns-2}
1.  $2 \cdot \sin^2(x)-5 \cdot \sin(x)+2=0$
2.  $\tan^4(x)-4 \cdot \tan^2(x)=-3$
3.  $3 \cdot \cos^2(\alpha)- 3 \cdot \cos(\alpha)+1=0$
4.  $1- \sin(\alpha) = 2 \cdot \cos^2(\alpha)$

```{block} solution
{.lower-alpha-paren}
1.  $S = \left\{ \dfrac{\pi}{6} +k \cdot 2\pi \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ \dfrac{5\pi}{6} +k \cdot 2\pi\Bigm| k \in \mathbb{Z} \right\}$
2.  $S = \left\{ \dfrac{\pi}{4} +k \cdot \dfrac{\pi}{2} \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ \dfrac{\pi}{3} +k \cdot \pi \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ \dfrac{2\pi}{3} +k \cdot \pi \Bigm| k \in \mathbb{Z} \right\}$
3.  $S=\emptyset$
4.  $S = \left\{ 90^\circ +k \cdot 360^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ -30^\circ+k \cdot 360^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ 210^\circ+k \cdot 360^\circ \mid k \in \mathbb{Z} \right\}$
```

### Exercice {num2}`exercice:2-eq-trigo-ex6`

En raison de la marée, la hauteur du niveau des mers et des océans varie chaque
jour. La Baie de Fundy au Canada est connue pour ses grandes marées. Le 12
novembre 2008, le niveau de la mer dans cette baie est donné par la fonction

```{math}
:class: align-center
h(t) = 1.2 \cdot \sin(0.506 \cdot t + 2) + 5
```

où $t$ est l'heure pendant cette journée et $h$ la hauteur du niveau de la mer
en mètres.

{.lower-alpha-paren}
1.  Quelle est la différence de niveau entre la marée basse et la marée haute ce
    jour-là?
2.  Combien de temps s'écoule entre une marée haute et la prochaine marée haute?
3.  À quelle heure a lieu la première marée haute ce jour-là?
4.  Quel est le niveau de la mer ce jour-là à 13 heures 30? Est-ce que le niveau
    croît ou décroît à ce moment?
5.  Tracez la représentation graphique de cette fonction dans un système d'axes.

````{block} solution
{.lower-alpha-paren}
1.  $2.4$ m
2.  12 heures et 25 minutes
3.  À 11 heures 34
4.  $5.67$ m; le niveau décroit
5.  ```{jsxgraph} maree
    :class: align-left
    :style: width: 80%; border: none;
    ```
````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
    await tdoc.import('jsxgraph.js');
render.maree = el => {
  return initBoard(el, [attrs.print,
                      withAxesLabels(undefined, [1, 2, 3, 4, 5, 6, 7]), {
    boundingBox: [-1.5, 7.9, 24.9, -1.5], keepAspectRatio: true,
    defaultAxes: {
      x: {
        name: `\\(t[h]\\)`, ticks: {ticksDistance: 2},
        label: {position: '1fr right'},
      },
      y: {name: `\\(h\\)`, ticks: {ticksDistance: 1}},
    },
  }], board => {
    board.create('functiongraph',
      [t => 1.2 * Math.sin(0.506 * t + 2) + 5, -1.5, 25]);
  });
};
</script>

### Exercice {num2}`exercice:2-eq-trigo-ex7`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1.  $\sin(x)-\sin(x)\cdot \cos(x)=0$
2.  $3 \cdot \tan(\alpha)\cdot \sin(\alpha) - \sin(\alpha)=0$
3.  $\cos\left(3x+\dfrac{\pi}{6}\right) = 0.5$
4.  $\tan\left(2x-\dfrac{\pi}{6}\right)=\dfrac{\sqrt{3}}{3}$
5.  $\tan(5x-2)=100$
6.  $4 \cdot \cos^2(\alpha)-3=0$
7.  $2 \cdot \cos^2(x)-\cos(x)-0.5=0$
8.  $3 \cdot \sin(\alpha)=2 \cdot \cos^2(\alpha)$
9.  $\tan(\alpha)-\sin(\alpha)=0$
10. $\sin(x)+\cos(x)=1$

```{block} solution
{.lower-alpha-paren}
1.  $S = \left\{ k \cdot \pi \mid k \in \mathbb{Z} \right\}$
2.  $S = \left\{ k \cdot 180^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ 18.435^\circ+k \cdot 180^\circ \mid k \in \mathbb{Z} \right\}$
3.  $S = \left\{ \dfrac{\pi}{18} +k \cdot \dfrac{2\pi}{3} \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ -\dfrac{\pi}{2} +k \cdot \dfrac{2\pi}{3} \Bigm| k \in \mathbb{Z} \right\}$
4.  $S = \left\{ \dfrac{\pi}{6}+k \cdot \dfrac{\pi}{2} \Bigm| k \in \mathbb{Z} \right\}$
5.  $S = \left\{ 0.7122 + k \cdot \dfrac{\pi}{5} \Bigm| k \in \mathbb{Z} \right\}$
6.  $S = \left\{ 30^\circ +k \cdot 180^\circ \mid k \in \mathbb{Z} \right\} \cup \left\{ -30^\circ+k \cdot 180^\circ \mid k \in \mathbb{Z} \right\}$
7.  $S = \left\{ \dfrac{\pi}{5} +k \cdot 2\pi \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ -\dfrac{\pi}{5} +k \cdot  2\pi \Bigm| k \in \mathbb{Z} \right\} \cup \\
\left\{ \dfrac{3\pi}{5} +k \cdot  2\pi \Bigm| k \in \mathbb{Z} \right\} \cup \left\{ -\dfrac{3\pi}{5} +k \cdot  2\pi \Bigm| k \in \mathbb{Z} \right\}$
8.  $S = \left\{ 30^\circ +k \cdot 360^\circ \mid k \in \mathbb{Z}\right\} \cup \left\{ 150^\circ+k \cdot 360^\circ \mid k \in \mathbb{Z} \right\}$
9.  $S = \left\{ k \cdot 180^\circ \mid k \in \mathbb{Z} \right\}$
10. $S = \left\{  k \cdot 2\pi \mid k \in \mathbb{Z}\right\} \cup \left\{ \dfrac{\pi}{2} +k \cdot 2\pi \Bigm| k \in \mathbb{Z} \right\}$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```

