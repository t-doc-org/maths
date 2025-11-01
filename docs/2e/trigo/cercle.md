% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cercle trigonométrique

```{metadata}
subject: "Mathématiques 2e année"
```
## Radian

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
initBoard('trig-circle', [defaults, {
    boundingBox: [-1.5, 1.5, 1.5, -1.5],
    axis: true, grid: false,
    pan: {enabled: true}, zoom: {enabled: true}, showFullscreen: true,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {strokeWidth: 0, size: 2, label: {anchorY:'top'}, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {
                    strokeColor: JXG.palette.black,
                    anchorX: 'middle', anchorY: 'middle'}},
        circle: {strokeColor: JXG.palette.black, strokeWidth: 1},
        arc: {strokeColor: JXG.palette.red, strokeWidth: 3}
    },
}], board => {
    const r = 1;
    board.create('segment', [[0,0], [r, 0]])
    // Place the circle.
    const c = board.create('circle', [[0, 0], r], {
        strokeColor: JXG.palette.black,
    });

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = [];
    for (let i = 0; i < 4; ++i) {
        for (const a of [0, Math.PI / 6, Math.PI / 4, Math.PI / 3]) {
            const b = i * Math.PI / 2 + a;
            attractors.push(board.create('point', [Math.cos(b), Math.sin(b)], {
                fixed: true, visible: false, withLabel: false,
            }));
        }
    }
    const p = board.create('glider', [Math.cos(1), Math.sin(1), c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.1,
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

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    const arc = board.create('arc', [[0,0], [r, 0], p], {
        name: '\\(l\\)', label: {strokeColor: JXG.palette.red}, withLabel: true,
    });

// Il faut encore affiche pi au lieu des valeurs numériques.
/*    function display(angle) {
        if (3.1 <= angle <= 3.15) {
            return "'\\(\\alpha\\)'";
        } else {
            return "\\(\\alpha=${alpha().toFixed(1)}\\;rad\=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`";
        }
    }*/

    // Display values
    board.create('text',
        [0.2, 1.3, () => `\
\\(\\alpha=${alpha().toFixed(1)}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });
    const t = board.create('text', [0.2, 1.2, () => `\\(l=${alpha().toFixed(1)}r\\)`], {
        strokeColor: JXG.palette.red, fixed: true,
    });

});
</script>

````{admonition} Définition
Un angle d'un **radian** intercepte sur la circonférence de ce cercle un arc
d'une longueur égale au rayon.
````

### Exemple {num2}`exemple`

```{jsxgraph} trig-circle
:style: width: 100%; border: none;
```

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
