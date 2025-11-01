% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cercle trigonométrique

```{metadata}
subject: "Mathématiques 2e année"
```
## Radian

<script type="module">
const {defaults, initBoard, JXG} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-1.5, 1.5, 1.5, -1.5],
    axis: false, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, label: {anchorY:'top'}, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {
                    strokeColor: JXG.palette.black,
                    anchorX: 'middle', anchorY: 'middle'}},
        circle: {strokeColor: JXG.palette.black, strokeWidth: 1},
    },
}];

initBoard('radian-1', attrs, board => {
    const r = 1;
    const p1 = board.create('point', [0, 0]);
    const p2 = board.create('point', [r, 0]);
    const p3 = board.create('point', [r * Math.cos(1), r * Math.sin(1)]);
    const r1 = board.create('segment', [p1, p2], {
        name: '\\(r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 4]}
    });
    const r2 = board.create('segment', [p1, p3], {withLabel: false});
    board.create('circle', [p1, p2]);
    board.create('arc', [p1, p2, p3], {
        name: '\\(r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [3, 3],
            strokeColor: JXG.palette.blue},
        strokeWidth: 3,
    });
    board.create('angle', [p2, p1, p3], {
        name: '\\(\\alpha\\)', withLabel: true,
        label: {offset: [-5, -2]}
    });
});
initBoard('radian-2', attrs, board => {
    const r = 1;
    const p1 = board.create('point', [0, 0]);
    const p2 = board.create('point', [r, 0]);
    const p3 = board.create('point', [r * Math.cos(2), r * Math.sin(2)]);
    const r1 = board.create('segment', [p1, p2], {
        name: '\\(r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 4]}
    });
    const r2 = board.create('segment', [p1, p3], {withLabel: false});
    board.create('circle', [p1, p2]);
    board.create('arc', [p1, p2, p3], {
        name: '\\(2r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [3, 3],
            strokeColor: JXG.palette.blue},
        strokeWidth: 3,
    });
    board.create('angle', [p2, p1, p3], {
        name: '\\(\\beta\\)', withLabel: true,
        label: {offset: [-5, -2]}
    });
});
initBoard('radian-5', attrs, board => {
    const r = 1;
    const p1 = board.create('point', [0, 0]);
    const p2 = board.create('point', [r, 0]);
    const p3 = board.create('point', [r * Math.cos(5), r * Math.sin(5)]);
    const r1 = board.create('segment', [p1, p2], {
        name: '\\(r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 4]}
    });
    const r2 = board.create('segment', [p1, p3], {withLabel: false});
    board.create('circle', [p1, p2]);
    board.create('arc', [p1, p2, p3], {
        name: '\\(5r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [3, 3],
            strokeColor: JXG.palette.blue},
        strokeWidth: 3,
    });
    board.create('angle', [p2, p1, p3], {
        name: '\\(\\gamma\\)', withLabel: true,
        label: {offset: [7, 0]}
    });
});
initBoard('radian-2pi', attrs, board => {
    const r = 1;
    const p1 = board.create('point', [0, 0]);
    const p2 = board.create('point', [r, 0]);
    const p3 = board.create('point', [r * Math.cos(2 * Math.PI), r * Math.sin(2 * Math.PI)]);
    const r1 = board.create('segment', [p1, p2], {
        name: '\\(r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 4]}
    });
    const r2 = board.create('segment', [p1, p3], {withLabel: false});
    board.create('circle', [p1, p2]);
    board.create('arc', [p1, p2, p3], {
        name: '\\(2\\pi r\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [-8, 10],
            strokeColor: JXG.palette.blue},
        strokeWidth: 3,
    });
    board.create('angle', [p2, p1, p3], {
        name: '\\(360^\\circ\\)', withLabel: true,
        label: {offset: [-5, -2]}
    });
});
</script>

````{admonition} Définition
Un angle d'un **radian** intercepte sur la circonférence de ce cercle un arc
d'une longueur égale au rayon.
````

### Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns:1fr 1fr;
-   ```{jsxgraph} radian-1
    :style: width: 50%; border: none;
    ```
-   Par définition:

    $\alpha = \dfrac{r}{r} = 1$ rad

-   ```{jsxgraph} radian-2
    :style: width: 50%; border: none;
    ```
-   L'arc de cerlce intercepté par un angle est proportionnel à l'angle.<br>
    En doublant l'arc de cercle, l'angle double aussi.

    $\beta = \dfrac{2r}{r} = 2$ rad

-   ```{jsxgraph} radian-5
    :style: width: 50%; border: none;
    ```
-   De même au multipliant par 5.

    $\gamma = \dfrac{5r}{r} = 5$ rad

-   ```{jsxgraph} radian-2pi
    :style: width: 50%; border: none;
    ```
-   Tour complet:<br>
    La circonférence d'un cercle vaut $2\pi r$.

    $360^\circ= \dfrac{2 \pi r}{r} = 2\pi$ rad

````

````{admonition} Théorème
**Transformation des angles entre radians et degrés**

Soient $x$ un angle exprimé en radians et $\varphi$ le même angle exprimé en
 degrés.

```{math}
:class: align-center
x = \frac{\varphi}{360^\circ} \cdot 2\pi \quad \text{et} \quad \varphi = \frac{x}{2\pi} \cdot 360^\circ.
```
````

````{admonition} Propriétés
**Table d'équivalence des angles remarquables:**

<style>
.angle td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
    width: 100px;
}
</style>

```{flex-table}
:class: angle
| degrés  | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $180^\circ$ | $270^\circ$ | $360^\circ$ | $720^\circ$
| radians | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ | $2\pi$ | $4\pi$
```
````

### Exemple {num2}`exemple`

En radians, un angle de $37^\circ$ vaut $\dfrac{37^\circ}{360^\circ} \cdot 2\pi = \dfrac{37\pi}{180} \approx 0.2056$

Un angle de 5.13 rad vaut en degré $\dfrac{5.13}{2\pi} \cdot 360^\circ \approx 293.93^\circ$

### Remarques

-   Les angles en radians sont généralement donnés sous forme de multiples ou
    de fractions de $\pi$.
-   Le "rad" n'est en général pas noté, car c'est un rapport de deux longueurs
    (l'arc de cercle et le rayon). Les angles sans unité sont toujours des
    radians.

<script type="module">
const {defaults, initBoard} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-1.5, 1.5, 1.5, -1.5],
    axis: true, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, label: {anchorY:'top'}},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
        circle: {strokeColor: JXG.palette.black, strokeWidth: 1},
    },
}];

initBoard('cercle-trigo', attrs, board => {
    const phi = Math.PI/5;
    const ox = board.create('point', [1,0]);
    const xp = board.create('point', [Math.cos(Math.PI/5), 0], {
        size: 1,
        name: '\\(X_p\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, -5]}
    });
    const yp = board.create('point', [0, Math.sin(phi)], {
        size: 1,
        name: '\\(Y_p\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-5, 0]}
    });
    const o = board.create('point', [0, 0], {
        name: '\\(O\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'top', offset: [-2, -2]}
    });
    const p2 = board.create('point', [1, 0]);
    const p = board.create('point', [Math.cos(phi), Math.sin(phi)], {
        size: 1,
        name: '\\(P\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [6, 10]}
    });
    const t = board.create('point', [1, Math.tan(phi)], {
        size: 1,
        name: '\\(T\\)', withLabel: true,
        label: {anchorX: 'left', anchorY: 'top', offset: [5, 0]}
    });
    const cos = board.create('segment', [o, xp], {
        strokeWidth: 3,
        name: '\\(cos(\\varphi)\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, -3]}
    });
    const sin = board.create('segment', [o, yp], {
        strokeWidth: 3,
        name: '\\(sin(\\varphi)\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-5, 0]}
    });
    const tan = board.create('segment', [ox, t], {
        strokeWidth: 3,
        name: '\\(tan(\\varphi)\\)', withLabel: true,
        label: {anchorX: 'left', anchorY: 'middle', offset: [5, 0]}
    });
    const r2 = board.create('segment', [o, p], {withLabel: false});
    board.create('circle', [o, p2]);
    board.create('angle', [p2, o, p], {
        name: '\\(\\varphi\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [2, 2]}
    });
    board.create('segment', [yp, p], {dash: 3});
    board.create('segment', [xp, p], {dash: 3});
    board.create('line', [ox, t], {dash: 3});
    board.create('line', [o, t], {
        straightFirst: false,
    });

});
</script>


````{admonition} Définition
Le cercle de rayon 1 et centré sur l'origine est appelé **cercle
trigonométrique**.

**Sinus, cosinus et tangente dans le cercle trigonométrique**

```{jsxgraph} cercle-trigo
:style: width: 80%; border: none;
```

Soient $\varphi$ un angle reporté dans le cercle trigonométrique, $P$ le point
d'intersection de la demi-droite de l'angle avec le cercle et $T$ le point
d'intersection de cette demi-droite avec l'axe des tangentes, comme dans la
figure ci-dessus.

Le **cosinus** de l'angle $\varphi$, noté $\cos(\varphi)$, est l'abscisse $X_P$
du point $P$.

Le **sinus** de l'angle $\varphi$, noté $\sin(\varphi)$, est l'ordonnée $Y_P$ du
point$P$.

La **tangente** de l'angle $\varphi$, notée $\tan(\varphi)$, est l'ordonnée
$Y_T$ du point $T$.

````
