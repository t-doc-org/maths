% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Angles remarquables

```{metadata}
page-break-avoid-inside: 1
scripts:
  - src: chart.js
    type: module
```

## Exercice {nump}`exercice` - Rapports d'un angle de 45°

Soit un triangle rectangle isocèle, dont les côtés isométriques valent $x$ et
l'hypoténuse $2$.

{.lower-alpha-paren}
1.  Faites un schéma de la situation.
2.  Déterminez $x$.
3.  Déterminez en laissant sous forme de fraction simplifiée:
    - $\sin(45^{\circ}) = $
      {vspace}`1lh`
    - $\cos(45^{\circ}) = $
      {vspace}`1lh`
    - $\tan(45^{\circ}) = $
      {vspace}`1lh`


`````{solution}
````{list-grid} 5fr 3fr
-   Par Pythagore: $2^2 = x^2 + x^2 \implies 4 = 2x^2 \implies x^2 = 2 \implies x = \sqrt{2}$

    $\sin(45^\circ) = \dfrac{x}{2} = \dfrac{\sqrt{2}}{2}$

    $\cos(45^\circ) = \dfrac{x}{2} = \dfrac{\sqrt{2}}{2}$

    $\tan(45^\circ) = \dfrac{x}{x} = 1$
-   ```{jsxgraph} triangleIsoRect
    :style: width: 80%; border: none;
    ```
````
`````

## Exercice {nump}`exercice` - Rapports des angle de 30° et 60°

Soit un triangle équilatéral, dont les côtés valent $1$.

{.lower-alpha-paren}
1.  Faites un schéma de la situation.
2.  Déterminez la hauteur $h$.
3.  Déterminez en laissant sous forme de fraction simplifiée:
    - $\sin(30^{\circ}) = $
      {vspace}`1lh`
    - $\cos(30^{\circ}) = $
      {vspace}`1lh`
    - $\tan(30^{\circ}) = $
      {vspace}`1lh`
    - $\sin(60^{\circ}) = $
      {vspace}`1lh`
    - $\cos(60^{\circ}) = $
      {vspace}`1lh`
    - $\tan(60^{\circ}) = $
      {vspace}`1lh`


`````{solution}
````{list-grid} 5fr 3fr
-   Par Pythagore:
    $h^2 = 1^2 - \left(\dfrac{1}{2} \right)^2 = 1 - \dfrac{1}{4} = \dfrac{3}{4} \implies h = \sqrt{\dfrac{3}{4}} = \dfrac{\sqrt{3}}{2}$

    $\sin(30^\circ) = \dfrac{\frac{1}{2}}{1} = \dfrac{1}{2}$

    $\cos(30^\circ) = \dfrac{h}{1} = h = \dfrac{\sqrt{3}}{2}$

    $\tan(30^\circ) = \dfrac{\frac{1}{2}}{h} = \dfrac{\frac{1}{2}}{\frac{\sqrt{3}}{2}} = \dfrac{1}{2} \cdot \dfrac{2}{\sqrt{3}}  = \dfrac{1}{\sqrt{3}} \cdot \dfrac{\sqrt{3}}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$

    $\sin(60^\circ) = \dfrac{h}{1} =  h = \dfrac{\sqrt{3}}{2}$

    $\cos(60^\circ) = \dfrac{\frac{1}{2}}{1}= \dfrac{1}{2}$

    $\tan(60^\circ) = \dfrac{h}{\frac{1}{2}} = \dfrac{\frac{\sqrt{3}}{2}}{\frac{1}{2}} = \dfrac{\sqrt{3}}{2} \cdot {\dfrac{2}{1}}  = \sqrt{3}$
-   ```{jsxgraph} triangleEqui
    :style: width: 90%; border: none;
    ```
````
`````


<script type="module">
const {attrs, initBoard, render} = await tdoc.import('jsxgraph.js');
attrs.page = [attrs.screen, attrs.nonInteractive, {
  axis: false, grid: false,
  defaults: {
    point: {label: {anchorY: 'top'}},
    angle: {radius: 0.7},
  },
}];
const withLabels = {
  defaults: {
    point: {withLabel: true},
    segment: {withLabel: true},
  },
};

render.triangleIsoRect = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-0.5, 4.5, 4.5, -0.5],
  }], board => {
    const A = board.create('point', [0, 0]);
    const B = board.create('point', [4, 0]);
    const C = board.create('point', [4, 4]);
    const D = board.create('point', [0, 4]);
    board.create('segment', [A, B], {
      name: '\\(x\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
    });
    board.create('segment', [D, A], {
      name: '\\(x\\)', withLabel: true,
      label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]},
    });
    board.create('segment', [B, D], {
      name: '\\(2\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]},
    });
    board.create('segment', [B, C], {dash: 3});
    board.create('segment', [C, D], {dash: 3});
    board.create('angle', [D, B, A], {
      name: '\\(45^\\circ\\)', radius: 0.6,
      label: {anchorX: 'middle', anchorY: 'middle'},
    });
    board.create('angle', [A, D, B], {
      name: '\\(45^\\circ\\)', radius: 0.6,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [0, 0]},
    });
    board.create('angle', [B, A, D], {
      radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
    board.create('angle', [D, C, B], {
      radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
  });
};

render.triangleEqui = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-0.5, 4.5, 4.5, -1],
  }], board => {
    const A = board.create('point', [0, 0]);
    const B = board.create('point', [4, 0]);
    const C = board.create('point', [2, 4 * Math.sqrt(3) /2 ]);
    const D = board.create('point', [2, 0]);
    board.create('segment', [A,C], {
      name: '\\(1\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [-8, 8]},
    });
    board.create('segment', [A, D], {
      name: '\\(\\frac{1}{2}\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
    });
    board.create('segment', [C, D], {
      name: '\\(h\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [8, 0]},
    });
    board.create('segment', [D, B], {dash: 3});
    board.create('segment', [B, C], {dash: 3});
    board.create('angle', [D, A, C], {
      name: '\\(60^\\circ\\)', radius: 0.6,
      label: {anchorX: 'middle', anchorY: 'middle'},
    });
    board.create('angle', [A, C, D], {
      name: '\\(30^\\circ\\)', radius: 0.6,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [0.5, -6]},
    });
    board.create('angle', [C, D, A], {
      radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
  });
};
</script>

