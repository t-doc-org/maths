% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Introduction - Fonctions trigonométriques

```{metadata}
page-break-avoid-inside: 2
scripts:
  - src: chart.js
    type: module
```

## Exercice {nump}`exercice`

Complétez le tableau et représentez graphiquement la fonction $\sin(x)$.

<style>
.angle td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
  text-align: center;
  width: 100px;
}
</style>

{vspace}`1lh`

```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\sin(x)$ | | |  |  |  |  |  |  |  |  |  |  |  |
```
{vspace}`1lh`

```{jsxgraph} templateSin
:style: width: 100%; border: none;
```

````{solution}
```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\sin(x)$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-\dfrac{1}{2}$ | $-\dfrac{\sqrt{3}}{2}$ | $-1$ | $-\dfrac{\sqrt{3}}{2}$ | $-\dfrac{1}{2}$
```

```{jsxgraph} sin
:style: width: 100%; border: none;
```
````

## Exercice {nump}`exercice`

Complétez le tableau et représentez graphiquement la fonction $\cos(x)$.

```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\cos(x)$ | | |  |  |  |  |  |  |  |  |  |  |  |
```

{vspace}`1lh`

```{jsxgraph} templateCos
:style: width: 100%; border: none;
```

````{solution}
```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\cos(x)$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-\dfrac{1}{2}$ | $-\dfrac{\sqrt{2}}{2}$ | $-\dfrac{\sqrt{3}}{2}$ | $-1$ | $-\dfrac{\sqrt{3}}{2}$ | $-\dfrac{1}{2}$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{2}$
```

```{jsxgraph} cos
:style: width: 100%; border: none;
```
````

## Exercice {nump}`exercice`

Qu'est-ce qui est semblable et qu'est-ce qui est différent entre la
représentation graphique de $\sin(x)$ et de $\cos(x)$?

```{solution}
Les deux fonctions ont la même forme, elles sont juste décalées de
$\dfrac{\pi}{2}$.
```


## Exercice {nump}`exercice`

Complétez le tableau et représentez graphiquement la fonction $\tan(x)$.

```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\tan(x)$ | | |  |  |  |  |  |  |  |  |  |  |  |
```
{vspace}`1lh`

```{jsxgraph} templateTan
:style: width: 100%; border: none;
```

````{solution}
```{flex-table}
:class: angle
| $x$ | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{4\pi}{3}$ | $\dfrac{3\pi}{2}$ | $\dfrac{5\pi}{3}$ | $\dfrac{11\pi}{6}$
| $\tan(x)$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | - | $-\sqrt{3}$ | $-1$| $-\dfrac{\sqrt{3}}{3}$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $\sqrt{3}$ | - | $-\sqrt{3}$ | $-\dfrac{\sqrt{3}}{3}$
```

```{jsxgraph} tan
:style: width: 100%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, {
  boundingBox: [-6.5, 2, 6.5, -2],
  axis: true, grid: {majorStep: [Math.PI / 6, 0.5]},
  defaultAxes: {
    x: {
      name: '\\(x\\)',
      ticks: {
        insertTicks: false,
        ticksDistance: 1/3, minorTicks: 1, ticksPerLabel: 1,
        scale: Math.PI, scaleSymbol: 'π',
        label: { toFraction: true, useMathJax: true },
      },
    },
    y: {
      name: '\\(y\\)',
      ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 1},
    },
  },
}];
render.templateSin = el => {
  return initBoard(el, battrs, board => {});
};
render.templateCos = el => {
  return initBoard(el, battrs, board => {});
};
render.templateTan = el => {
  return initBoard(el, [battrs, {boundingBox: [-7, 5, 7, -5]}], board => {});
};
render.sin = el => {
  return initBoard(el, battrs,
    board => {
      board.create('functiongraph', [x => Math.sin(x)], {
        name: `\\(\\sin(x)\\)`, label: {position: '0.6fr right'},
      });
    });
};
render.cos = el => {
  return initBoard(el, battrs,
    board => {
      board.create('functiongraph', [x => Math.cos(x)], {
        name: `\\(\\cos(x)\\)`, label: {position: '0.55fr right'},
      });
    });
};
render.tan = el => {
  return initBoard(el, [battrs, {boundingBox: [-7, 5, 7, -5]}],
    board => {
      board.create('functiongraph', [x => Math.tan(x)], {
        name: `\\(\\tan(x)\\)`, label: {position: '0.55fr right'},
      });
    });
};
</script>
