% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Trigonométrie 1

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} ../../entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice non
autorisée.\
Réponse sous forme de valeur exacte simplifiée.**
```
---

## Question {nump}`question`{points}`4`

Soit un triangle rectangle isocèle en A, faites un schéma de la situation et
déterminez le $\sin(45^\circ)$.

<script type="module">
const {defaults, initBoard, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
    boundingBox: [-0.5, 4.5, 4.5, -0.5],
    axis: false, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {size: 0, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
    },
}];

initBoard('trian-iso-rect', attrs, board => {
    const A = board.create('point', [0, 0], {
        name: '\\(A\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const B = board.create('point', [4, 0], {
        name: '\\(B\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const C = board.create('point', [4, 4]);
    const D = board.create('point', [0, 4], {
        name: '\\(C\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [-10, 0]}
    });
    board.create('segment', [A, B], {
        name: '\\(x\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    board.create('segment', [D, A], {
        name: '\\(x\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    board.create('segment', [B, D], {
        name: '\\(a\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]}
    });
    board.create('segment', [B, C], {dash: 3});
    board.create('segment', [C, D], {dash: 3});
    board.create('angle', [D, B, A], {
        radius: 0.6,
        name: '\\(45^\\circ\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle'}
    });
    board.create('angle', [A, D, B], {
        radius: 0.6,
        name: '\\(45^\\circ\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [0, 0]}
    });
    board.create('angle', [B, A, D], {
        radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
    board.create('angle', [D, C, B], {
        radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
});
</script>

`````{solution}
````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Par Pythagore: $a^2 = x^2 + x^2 = 2x^2 \implies a = \sqrt{2x^2} = x\sqrt{2}$

    $\sin(45^\circ) = \dfrac{x}{a} = \dfrac{x}{x\sqrt{2}} = \dfrac{1}{\sqrt{2}}= \dfrac{\sqrt{2}}{2}$
-   ```{jsxgraph} trian-iso-rect
    :style: width: 80%; border: none;
    ```
````
`````

<script type="module">
const {defaults, initBoard, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
    boundingBox: [-1.5, 5, 5.5, -1],
    axis: false, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {size: 0, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
    },
}];

initBoard('trian', attrs, board => {
    const A = board.create('point', [0, 0], {
        name: '\\(B\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const B = board.create('point', [5, 0], {
        name: '\\(C\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const D = board.create('point', [0, 4], {
        name: '\\(A\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [-10, 0]}
    });
    board.create('segment', [A, B]);
    board.create('segment', [D, A], {
        name: '\\(\\sqrt{2}\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    board.create('segment', [B, D], {
        name: '\\(2\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]}
    });
    board.create('angle', [D, B, A], {
        radius: 0.6,
        name: '\\(\\alpha\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle'}
    });
    board.create('angle', [A, D, B], {
        radius: 0.6,
        name: '\\(\\gamma\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [0, 0]}
    });
    board.create('angle', [B, A, D], {
        radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
});
</script>


## Question {nump}`question`{points}`4`

Résolvez le triangle $ABC$ rectangle en $B$, sachant que $c = \sqrt{2}$ et
$b = 2$.


`````{solution}
````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   $\sin(\gamma) = \dfrac{\sqrt{2}}{2} \implies \gamma = sin^{-1}\left(\dfrac{\sqrt{2}}{2}\right)= 45^\circ$

    $\alpha = 180^\circ - 90^\circ - 45^\circ = 45^\circ$

    Le triangle est isocèle rectangle, donc $a = \sqrt{2}$

-   ```{jsxgraph} trian
    :style: width: 80%; border: none;
    ```
````
`````

## Question {nump}`question`{points}`4`

Transformez les angles suivants en radians.

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $90^\circ =$
- $720^\circ =$
- $120^\circ =$
- $22.5^\circ =$
```


````{solution}
```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $90^\circ = \dfrac{\pi}{2}$
- $720^\circ = 4\pi$
- $120^\circ = \dfrac{2\pi}{3}$
- $22.5^\circ = \dfrac{\pi}{8}$
```
````

## Question {nump}`question`{points}`4`

Transformez les angles suivants en degrés.

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $\pi =$
- $\dfrac{\pi}{3} =$
- $\dfrac{5\pi}{4} =$
- $\dfrac{7\pi}{2} =$
```


````{solution}
```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $\pi = 180^\circ$
- $\dfrac{\pi}{3} = 60^\circ$
- $\dfrac{5\pi}{4} = 405^\circ$
- $\dfrac{7\pi}{2} = 630^\circ$
```
````

## Question {nump}`question`{points}`4`

Les égalités suivantes sont-elles vraies? Justifiez.

{.lower-alpha-paren .vsep-2}
1.  $\sin(\dfrac{5\pi}{4}) = \cos(\dfrac{5\pi}{4})$
    {vspace}`3lh`
2.  $\cos(x) = \cos(-x)$
    {vspace}`3lh`
3.  $\sin(x + \pi) = \sin(x)$
    {vspace}`3lh`
4.  $\tan(x) = -\tan(-x)$
    {vspace}`3lh`


```{solution}
{.lower-alpha-paren .vsep-2}
1.  $\sin(\dfrac{5\pi}{4}) = \cos(\dfrac{5\pi}{4}) = -\dfrac{\sqrt{2}}{2}$ est vraie.
2.  $\cos(x) = \cos(-x)$ est vraie, par symétrie du $\cos(x)$ par rapport à l'axe $x$.
3.  $\sin(x + \pi) = \sin(x)$ est fausse, car $\sin(\dfrac{\pi}{4}) = -\sin(\dfrac{5\pi}{4})$
4.  $\tan(x) = -\tan(-x)$ est vraie.
```


## Question {nump}`question`{points}`4`

La fonction $\cos(x)$ est représentée ci-dessous.


{.lower-alpha-paren}
1.  Représentez le plus précisément possible $g(x) = \cos(\dfrac{x}{2})$.

    ```{jsxgraph} ex-cos
    :style: width: 100%; border: none;
    ```
2.  Déterminez la période de $g(x)$
    {vspace}`2lh`
3.  Déterminez l'ensemble des zéros de $g(x)$.
    {vspace}`2lh`


```{solution}
{.lower-alpha-paren}
1.  ```{jsxgraph} ex-cos-sol
    :style: width: 100%; border: none;
    ```
2.  La période de $f(x)$ est $4\pi$.
3.  $S = \left\{\pi + k \cdot 2\pi \mid k \in \mathbb{Z} \right\}$
```

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-10, 3.5, 10, -3.5],
    grid: {majorStep: [Math.PI / 4, 0.5]},
    defaultAxes: {
        x: {ticks: {scale: Math.PI, scaleSymbol: 'π'}},
        y: {ticks: {minorTicks: 1}},
    },
}];
initBoard('ex-cos', attrs, board => {
    board.create('functiongraph', [x => Math.cos(x)]);
});
initBoard('ex-cos-sol', attrs, board => {
    board.create('functiongraph', [x => Math.cos(x)], {dash: 2});
    board.create('functiongraph', [x => Math.cos(x / 2)]);
});
</script>
