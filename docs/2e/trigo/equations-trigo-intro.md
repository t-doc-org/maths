% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Introduction - Équations trigonométriques

```{metadata}
page-break-avoid-inside: 1
scripts:
  - src: chart.js
    type: module
```

## Exercice {nump}`exercice`

Déterminez tous les angles en degrés entre $-360^\circ$ et $720^\circ$ qui sont
solutions de l'équation donnée (arrondir au centième de degré).

{.lower-alpha-paren .columns-3}
1. $\sin(\alpha)=0.7$
2. $\cos(\alpha)=-0.42$
3. $\tan(\alpha)=0.7$
4. $\sin(\alpha)=-0.83$
5. $\cos(\alpha)=0.25$
6. $\tan(\alpha)=1.2$

```{solution}
{.lower-alpha-paren}
1. $44.43^\circ$, $404.43^\circ$, $-315.57^\circ$, $135.57^\circ$, $495.57^\circ$, $-224.43^\circ$
2. $114.83^\circ$, $474.83^\circ$, $-245.17^\circ$, $245.17^\circ$, $605.17^\circ$, $-114.83^\circ$
3. $34.99^\circ$, $214.99^\circ$, $394.99^\circ$, $574.99^\circ$, $-145.01^\circ$, $-325.01^\circ$
4. $-56.1^\circ$, $303.9^\circ$, $663.9^\circ$, $236.1^\circ$, $-123.9^\circ$, $596.1^\circ$
5. $75.52^\circ$, $435.52^\circ$, $-284.48^\circ$, $-75.53^\circ$, $284.48^\circ$, $644.48^\circ$
6. $50.19^\circ$, $230.19^\circ$, $410.19^\circ$, $590.19^\circ$, $-129.81^\circ$, $-309.81^\circ$
```
{vspace}`1lh`

## Exercice {nump}`exercice`

Représentez à l'aide du cercle trigonométrique les relations suivantes:

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # $\cos(\alpha) = cos(-\alpha)$
  ```{jsxgraph} exoIntro
  :style: width: 85%; border: none;
  ```

- # $\sin(\alpha) = \sin(180^\circ - \alpha)$
  ```{jsxgraph} exoIntro
  :style: width: 85%; border: none;
  ```

- # $\sin(\alpha) = \cos(90^\circ - \alpha)$
  ```{jsxgraph} exoIntro
  :style: width: 85%; border: none;
  ```

- # $\cos(\alpha) = \sin(90^\circ - \alpha) = \sin(90^\circ + \alpha)$
  ```{jsxgraph} exoIntro
  :style: width: 85%; border: none;
  ```

- # $\cos^2(\alpha) + \sin^2(\alpha) = 1$
  ```{jsxgraph} exoIntro
  :style: width: 85%; border: none;
  ```
````

`````{solution}
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # $\cos(\alpha) = cos(-\alpha)$
  ```{jsxgraph} exoIntro1
  :style: width: 85%; border: none;
  ```

- # $\sin(\alpha) = \sin(180^\circ - \alpha)$
  ```{jsxgraph} exoIntro2
  :style: width: 85%; border: none;
  ```

- # $\sin(\alpha) = \cos(90^\circ - \alpha)$
  ```{jsxgraph} exoIntro3
  :style: width: 85%; border: none;
  ```

- # $\cos(\alpha) = \sin(90^\circ - \alpha) = \sin(90^\circ + \alpha)$
  ```{jsxgraph} exoIntro4
  :style: width: 85%; border: none;
  ```

- # $\cos^2(\alpha) + \sin^2(\alpha) = 1$
  ```{jsxgraph} exoIntro5
  :style: width: 85%; border: none;
  ```
````
`````

## Exercice {nump}`exercice`

En utilisant le théorème de Thalès et le cercle trigonométrique, montrez que
$\tan(\alpha) = \dfrac{\sin(\alpha)}{\cos(\alpha)}$.

````{solution}
````{list-grid}
:style: grid-template-columns: 1fr 2fr;
- En appliquant le Théorème de Thalès:
  $$\dfrac{\tan(\alpha)}{\sin(\alpha)} &= \dfrac{1}{\cos(\alpha)} \qquad | \cdot \sin(\alpha)\\
  \tan(\alpha) &= \dfrac{\sin(\alpha)}{\cos(\alpha)}$$

- ```{jsxgraph} exoTan
  :style: width: 85%; border: none;
  ```
`````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = {
  boundingBox: [-1.5, 1.5, 1.5, -1.5],
  pan: {enabled: false}, zoom: {enabled: false},
  axis: true, grid: false,
  defaults: {
    circle: {strokeWidth: 1, strokeColor: JXG.palette.black},
  },
};

function cercle(board, alphaVisible, hypVisible) {
  const alpha = 55 / 360 * 2 * Math.PI;
  const o = board.create('point', [0, 0]);
  const x = board.create('point', [1, 0]);
  const c = board.create('circle', [o, x]);
  const a = board.create('glider', [Math.cos(alpha), Math.sin(alpha), c], {
    strokewidth: 0, fillOpacity: 0,
  });
  const cosa = board.create('point', [() => a.X(), 0]);
  if (hypVisible) {
      board.create('segment', [o, a], {
      name: '\\(1\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [-4, 0],
      strokeColor: JXG.palette.red},
    });

  } else {
    board.create('segment', [o, a]);
  }
  if (alphaVisible) {
    board.create('angle', [x, o, a], {
      name: '\\(\\alpha\\)', radius: 0.2,
      label: {anchorX: 'left', anchorY: 'middle', offset: [-10, 0]}
    });
  } else {
      board.create('angle', [x, o, a], {
      withLabel: false, radius: 0.2,
    });
  }
  return {o, x, a};
}

function alpha(a) {
  const al = Math.atan2(a.Y(), a.X());
  return al >= 0 ? al : al + 2 * Math.PI;
};

render.exoIntro = el => {
  return initBoard(el, [attrs.print, battrs], board => {
    cercle(board, true, false);
  });
};

const sattrs = [attrs.screen, {
   defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
}, battrs];

render.exoIntro1 = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, true, false);
    const pcosa = () => a.X();
    const b = board.create('point', [pcosa, () => -a.Y()]);
    board.create('segment', [[pcosa, 0], a], {dash: 2});
    board.create('segment', [o, b], {strokeColor: JXG.palette.red});
    board.create('angle', [b, o, x], {
      name: '\\(-\\alpha\\)', radius: 0.2,
      label: {anchorX: 'left', anchorY: 'middle', offset: [-6, 2],
      strokeColor: JXG.palette.red}, fillColor: JXG.palette.red,
    });
    board.create('segment', [[pcosa, 0], b], {
      dash: 2, strokeColor: JXG.palette.red,
    });
  });
};
render.exoIntro2 = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, true, false);
    const beta = () => {return Math.PI - alpha(a)};
    const b = board.create('point',
      [() => Math.cos(beta()), () => Math.sin(beta())]
      );
    board.create('segment', [[0, () => a.Y()], a], {dash: 2});
    board.create('segment', [o, b], {strokeColor: JXG.palette.red});
    board.create('angle', [x, o, b], {
      name: '\\(180^\\circ-\\alpha\\)', radius: 0.4,
      label: {anchorX: 'right', anchorY: 'middle', offset: [4, 1],
      strokeColor: JXG.palette.red}, fillColor: JXG.palette.red,
    });
    board.create('segment', [[0, () => Math.sin(beta())], b], {
      dash: 2, strokeColor: JXG.palette.red,
    });
  });
};
render.exoIntro3 = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, false, false);
    const beta = () => {return Math.PI/2 - alpha(a)};
    const b = board.create('point',
      [() => Math.cos(beta()), () => Math.sin(beta())]
      );
    board.create('segment', [[0, () => a.Y()], a], {dash: 2});
    board.create('segment', [o, b], {strokeColor: JXG.palette.red});
    board.create('angle', [x, o, b], {
      name: '\\(90^\\circ-\\alpha\\)', radius: 0.4,
      label: {anchorX: 'left', anchorY: 'middle', offset: [-12, 0],
      strokeColor: JXG.palette.red}, fillColor: JXG.palette.red
    });
    board.create('segment', [[() => Math.cos(beta()),0], b], {
      dash: 2, strokeColor: JXG.palette.red,
    });
  });
};
render.exoIntro4 = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, false, false);
    const beta = () => {return Math.PI/2 - alpha(a)};
    const gamma = () => {return Math.PI/2 + alpha(a)};
    const b = board.create('point',
      [() => Math.cos(beta()), () => Math.sin(beta())]
      );
    const c = board.create('point',
      [() => Math.cos(gamma()), () => Math.sin(gamma())]
      );
    board.create('segment', [[() => a.X(), 0], a], {dash: 2});
    board.create('segment', [o, b], {strokeColor: JXG.palette.red});
    board.create('angle', [x, o, b], {
      name: '\\(90^\\circ-\\alpha\\)', radius: 0.4,
      label: {anchorX: 'left', anchorY: 'middle', offset: [-12, 1],
      strokeColor: JXG.palette.red}, fillColor: JXG.palette.red
    });
    board.create('segment', [[0, () => Math.sin(beta())], b], {
      dash: 2, trokeColor: JXG.palette.red,
    });
    board.create('segment', [o, c], {strokeColor: JXG.palette.green});
    board.create('angle', [x, o, c], {
      name: '\\(90^\\circ-\\alpha\\)', radius: 0.3,
      label: {anchorX: 'left', anchorY: 'middle', offset: [-45, 1],
      strokeColor: JXG.palette.green}, fillColor: JXG.palette.green,
    });
    board.create('segment', [[0, () => Math.sin(gamma())], c], {
      dash: 2, strokeColor: JXG.palette.green,
    });

  });
};
render.exoIntro5 = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, true, true);
    const cosa = [() => a.X(), 0]
    board.create('segment', [cosa, a], {
      name: '\\(\\sin(\\alpha)\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [4, 0],
      strokeColor: JXG.palette.red},
      dash: 2, strokeColor: JXG.palette.red,
    });
    board.create('segment', [o, cosa], {
      name: '\\(\\cos(\\alpha)\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0],
      strokeColor: JXG.palette.red},
      dash: 2, strokeColor: JXG.palette.red,
    });
    board.create('angle', [a, cosa, o], {
      withLabel: false, radius: 0.1,
    });
  });
};
render.exoTan = el => {
  return initBoard(el, sattrs, board => {
    const {o, x, a} = cercle(board, true, false);
    const cosa = [() => a.X(), 0]
    const tana = board.create('point', [1,() => Math.tan(alpha(a))]);
    board.create('segment', [[1,0], tana], {
      name: '\\(\\tan(\\alpha)\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [4, 0],
      strokeColor: JXG.palette.red},
      dash: 3, strokeColor: JXG.palette.red,
    });
    board.create('segment', [o, tana], {
      dash: 2, strokeWidth: 1,
    });
    board.create('segment', [cosa, a], {
      name: '\\(\\sin(\\alpha)\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [4, 0],
      strokeColor: JXG.palette.red},
      dash: 2, strokeColor: JXG.palette.red,
    });
    board.create('segment', [[0, 0], cosa], {
      name: '\\(\\cos(\\alpha)\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0],
      strokeColor: JXG.palette.red},
      dash: 2, strokeColor: JXG.palette.red,
    });
    board.create('angle', [a, cosa, o], {
      withLabel: false, radius: 0.1,
    });
        board.create('angle', [tana, [1,0], o], {
      withLabel: false, radius: 0.1,
    });
  });
};
</script>

