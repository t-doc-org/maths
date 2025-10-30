% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Trigonométrie - Révisions

```{metadata}
subject: "Mathématiques 2e année"
```

## Notation des triangles

<script type="module">
const {defaults, initBoard} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-3.5, 3.5, 3.5, -0.5],
    axis: false, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {size: 0, label: {anchorY:'top'}},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
    },
}];

initBoard('triangle', attrs, board => {
    const A = board.create('point', [-3, 0], {
        name: '\\(A\\)', withLabel: true,
        label: {anchorX: 'right', offset: [-8, 0]}
    });
    const B = board.create('point', [3, 0], {
        name: '\\(B\\)', withLabel: true,
        label: {anchorX: 'left', offset: [4, 0]}
    });
    const C = board.create('point', [1, 3], {
        name: '\\(C\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [0, 24]}
    });
    const c = board.create('segment', [A, B], {
        name: '\\(c\\)', withLabel: true,
        label: {anchorX: 'right', offset: [0, -8]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(b\\)', withLabel: true,
        label: {anchorX: 'right', offset: [-8, 8]}
    });
    const a = board.create('segment', [B, C], {
        name: '\\(a\\)', withLabel: true,
        label: {anchorX: 'left', offset: [8, 8]}
    });
    const alpha = board.create('angle', [B, A, C], {
        name: '\\(\\alpha\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [-28, -6]}
    });
    const beta = board.create('angle', [C, B, A], {
        name: '\\(\\beta\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [30, -26]}
    });
    const gamma = board.create('angle', [A, C, B], {
        name: '\\(\\gamma\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [4, 24]}
    });
});
initBoard('triangle-rectangle', attrs, board => {
    const A = board.create('point', [3, 0], {
        name: '\\(A\\)', withLabel: true,
        label: {anchorX: 'left', offset: [4, 0]}
    });
    const B = board.create('point', [-1, 3], {
        name: '\\(B\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [0, 24]}
    });
    const C = board.create('point', [-1, 0], {
        name: '\\(C\\)', withLabel: true,
        label: {anchorX: 'right', offset: [-12, 0]}
    });
    const c = board.create('segment', [A, B], {
        name: '\\(c\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(b\\)', withLabel: true,
        label: {anchorX: 'right', offset: [0, -12]}
    });
    const a = board.create('segment', [B, C], {
        name: '\\(a\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const alpha = board.create('angle', [B, A, C], {
        name: '\\(\\alpha\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [25, -16]}
    });
    const beta = board.create('angle', [C, B, A], {
        name: '\\(\\beta\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [-18, 32]}
    });
    const gamma = board.create('angle', [A, C, B], {
        radius: 0.6,
        name: '\\(\\gamma\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [-15, -15]}
    });
});
</script>

````{admonition} Définition
:class: note
Soit un triangle, les **sommets** sont notés par des lettres majuscules $A$,
$B$ et $C$, les **côtés** correspondants par des lettres minuscules $a$, $b$ et
$c$ et les **angles** correspondants par les lettres grecques $\alpha$, $\beta$
et $\gamma$.

```{jsxgraph} triangle
:style: width: 50%; border: none;
```

Par rapport à l'angle $\alpha$, $a$ est le **côté opposé**, $b$ et $c$ sont les
**côtés adjacents**.
````

## Trigonométrie dans le triangle rectangle

### Exemple {num1}`exemple`

```{jsxgraph} triangle-rectangle
:style: width: 50%; border: none;
```

Le triangle $ABC$ est rectangle en $C$, $\gamma = 90^\circ$. Les côtés $a$ et
$b$ sont les **cathètes** et le côté $c$ est l'**hypoténuse**.

Par rapport à l'angle $\alpha$, $a$ est le côté opposé, $b$ est le côté adjacent
et $c$ est l'hypoténuse.

Par rapport à l'angle $\beta$, $b$ est le côté opposé, $a$ est le côté adjacent
et $c$ est l'hypoténuse.


````{admonition} Définition
:class: note
Dans un triangle rectangle, les rapports trigonométriques, **sinus**,
**cosinus** et **tangente** d'un angle $\varphi$ sont les rapports des mesures
des côtés du triangle:

```{math}
:class: align-center
\sin(\varphi) &= \dfrac{\text{côté opposé à $\varphi$}}{\text{hypoténuse}} & \quad \quad SOH \\
\cos(\varphi) &= \dfrac{\text{côté adjacent à $\varphi$}}{\text{hypoténuse}} & \quad \quad CAH \\
\tan(\varphi) &= \dfrac{\text{côté opposé à $\varphi$}}{\text{côté adjacent à $\varphi$}} & \quad \quad TOA
```

Dans un triangle rectangle, l'**hypoténuse** est le côté opposé à l'angle droit.
````

```{admonition} Définition
:class: note
**Résoudre un triangle** signifie déterminer la longueur de tous ses côtés et la
mesure de tous ses angles.
```

### Exemple {num1}`exemple`

Dans un triangle rectangle en $C$, $\alpha = 28^\circ$ et $c = 8$ cm.\
Résolvez ce triangle.

La somme des angles d'un triangle vaut $180^\circ$:

$\beta = 180^\circ - 90^\circ - 27^\circ = 63^\circ$

En utilisant la trigonométrie dans le triangle rectangle:

$\sin(\alpha) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(27^\circ) = \dfrac{a}{8} \implies a = 8 \cdot \sin(27^\circ)= 3.63$ cm

$\cos(\alpha) = \dfrac{\text{adj}}{\text{hyp}} \implies \cos(27^\circ) = \dfrac{b}{8} \implies b = 8 \cdot \cos(27^\circ)= 7.13$ cm

### Exemple {num1}`exemple`

Dans un triangle rectangle en $C$, $a = 3.4$ cm et $b = 7.6$ cm.\
Résolvez ce triangle.

En utilisant la trigonométrie dans le triangle rectangle:

$\tan(\alpha) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\alpha) = \dfrac{3.4}{7.6} \implies \alpha = \tan^{-1}\left(\dfrac{3.4}{7.5}\right)= 24.1^\circ$

$\tan(\beta) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\beta) = \dfrac{7.6}{3.4} \implies \beta = \tan^{-1}\left(\dfrac{7.6}{3.4}\right)= 65.9^\circ$

$\sin(\alpha) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(24.1^\circ) = \dfrac{3.4}{c} \implies c = \dfrac{3.4}{\sin(24.1^\circ)}= 8.33$ cm

Remarque: Le côté $c$ peut aussi être calculé avec le théorème de Pythagore.



## Rapports trigonométriques des angles remarquables

### Triangle rectangle isocèle

<script type="module">
const {defaults, initBoard} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
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

initBoard('triangle-iso-rect', attrs, board => {
    const A = board.create('point', [0, 0]);
    const B = board.create('point', [4, 0]);
    const C = board.create('point', [4, 4]);
    const D = board.create('point', [0, 4]);
    board.create('segment', [A, B], {
        name: '\\(x\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    board.create('segment', [D, A], {
        name: '\\(x\\)', withLabel: true,
        label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    board.create('segment', [B, D], {
        name: '\\(c\\)', withLabel: true,
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


````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Par Pythagore: $c^2 = x^2 + x^2 = 2x^2 \implies c = \sqrt{2x^2} = x\sqrt{2}$

    $\sin(45^\circ) = \dfrac{x}{c} = \dfrac{x}{x\sqrt{2}} = \dfrac{1}{\sqrt{2}}= \dfrac{\sqrt{2}}{2}$

    $\cos(45^\circ) = \dfrac{x}{x\sqrt{2}} = \dfrac{\sqrt{2}}{2}$

    $\tan(45^\circ) = \dfrac{x}{x} = 1$
-   ```{jsxgraph} triangle-iso-rect
    :style: width: 80%; border: none;
    ```
````

### Demi-triangle équilatéral

<script type="module">
const {defaults, initBoard} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-0.5, 4.5, 4.5, -1],
    axis: false, grid: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {size: 0, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
    },
}];

initBoard('triangle-equi', attrs, board => {
    const A = board.create('point', [0, 0]);
    const B = board.create('point', [4, 0]);
    const C = board.create('point', [2, 4 * Math.sqrt(3) /2 ]);
    const D = board.create('point', [2, 0]);
    board.create('segment', [A,C], {
        name: '\\(x\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [-8, 8]}
    });
    board.create('segment', [A, D], {
        name: '\\(\\frac{x}{2}\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    board.create('segment', [C, D], {
        name: '\\(h\\)', withLabel: true,
        label: {anchorX: 'left', anchorY: 'middle', offset: [8, 0]}
    });
    board.create('segment', [D, B], {dash: 3});
    board.create('segment', [B, C], {dash: 3});
    board.create('angle', [D, A, C], {
        radius: 0.6,
        name: '\\(60^\\circ\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle'}
    });
    board.create('angle', [A, C, D], {
        radius: 0.6,
        name: '\\(30^\\circ\\)', withLabel: true,
        label: {anchorX: 'middle', anchorY: 'middle', offset: [0.5, -6]}
    });
    board.create('angle', [C, D, A], {
        radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
});
</script>


````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Par Pythagore: $h^2 = x^2 - \left(\dfrac{x}{2} \right)^2 = x^2 - \dfrac{x^2}{4} = \dfrac{3x^2}{4} \implies h = x \dfrac{\sqrt{3}}{2}$


    $\sin(30^\circ) = \dfrac{\frac{x}{2}}{x} = \dfrac{1}{2}$

    $\cos(30^\circ) = \dfrac{h}{x} = \dfrac{x\frac{\sqrt{3}}{2}}{x} = \dfrac{\sqrt{3}}{2}$

    $\tan(30^\circ) = \dfrac{\frac{x}{2}}{h} = \dfrac{\frac{x}{2}}{x\frac{\sqrt{3}}{2}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$

    $\sin(60^\circ) = \dfrac{h}{x} = \dfrac{x\frac{\sqrt{3}}{2}}{x} = \dfrac{\sqrt{3}}{2}$

    $\cos(60^\circ) = \dfrac{\frac{x}{2}}{x}= \dfrac{1}{2}$

    $\tan(60^\circ) = \dfrac{h}{\frac{x}{2}} = \dfrac{x\frac{\sqrt{3}}{2}}{\frac{x}{2}} = \sqrt{3}$
-   ```{jsxgraph} triangle-equi
    :style: width: 100%; border: none;
    ```
````


````{admonition} Théorème
:class: note
**Rapports trigonométriques des angles remarquables (30°, 45° et 60°)**

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
|$\varphi$       | $30^\circ$    | $45^\circ$    | $60^\circ$
|$\sin(\varphi)$ | $\dfrac{1}{2}$        | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$
|$\cos(\varphi)$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$
|$\tan(\varphi)$ | $\dfrac{\sqrt{3}}{3}$ | $1$                  | $\sqrt{3}$

```
````




