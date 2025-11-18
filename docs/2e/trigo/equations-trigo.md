% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Équations trigonométriques

```{metadata}
subject: "Mathématiques 2e année"
```

```{admonition} Définition
Une **équation trigonométrique** est une équation dans laquelle l'inconnue
apparaît comme argument d'une fonction trigonométrique.
```

````{admonition} Définition
Voici quelques relations trigonométriques utiles lors de la résolution
d'équations:

```{math}
:class: align-center
\cos(-\alpha) &= \cos(\alpha)\\
\sin(-\alpha) &= -\sin(\alpha)\\
\tan(-\alpha) &= -\tan(\alpha)\\
\cos^2(\alpha) + \sin^2(\alpha) &= 1\\
\sin(\alpha) &= \cos\left(\dfrac{\pi}{2} - \alpha\right)\\
\cos(\alpha) &= \sin\left(\dfrac{\pi}{2} - \alpha\right) = \sin\left(\dfrac{\pi}{2} + \alpha\right)\\
```
````

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
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
}];
initBoard('exemple-tan', attrs, board => {
    board.create('functiongraph', [x => Math.tan(x)-2], {
        name: '\\(\\tan(x)-1\\)', withLabel: true,
        label: {
            position: '0.5fr right', offset: [-30, 0],
        },
    });
    board.create('functiongraph', [x => 3]);
    for (let k = 0; k < 5; ++k) {
        board.create('point', [Math.atan(5) - 2 * Math.PI + k * Math.PI, 3], {
        fillColor: JXG.palette.red, withLabel: false, size: 3,
    });
    }
    board.create('segment', [[Math.atan(5), 0],[Math.atan(5), 3]], {dash: 2});
});
initBoard('exemple-cos', attrs, board => {

    board.create('functiongraph', [x => Math.cos(3 * x)], {
        name: '\\(\\cos(3x)\\)', withLabel: true,
        label: {
            position: '0.7fr right', offset: [-20, 0],
        },
    });
    board.create('functiongraph', [x => Math.sqrt(2) / 2]);
    for (let k = 0; k < 7; ++k) {
        board.create('point', [Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/ 3, Math.sqrt(2) / 2], {
            fillColor: 'red', withLabel: false, size: 3,
        });
        board.create('point', [-Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/ 3, Math.sqrt(2) / 2], {
            fillColor: 'red', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 12, 0],[Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
    board.create('segment', [[-Math.PI / 12, 0],[-Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
});
initBoard('exemple-sin', attrs, board => {

    board.create('functiongraph', [x => Math.sin(x - Math.PI/2)+1], {
        name: '\\(\\sin(x - \\dfrac{\\pi}{2})+1\\)', withLabel: true,
        label: {
            position: '0.7fr left', offset: [0, 0],
        },
    });
    board.create('functiongraph', [x => 1 / 2]);
    for (let k = 0; k < 2; ++k) {
        board.create('point', [Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2], {
            fillColor: 'red', withLabel: false, size: 3,
        });
        board.create('point', [5 * Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2], {
            fillColor: 'red', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 3, 0],[Math.PI / 3, 1 / 2]], {dash: 2});
    board.create('segment', [[5 * Math.PI / 3, 0],[5 * Math.PI / 3, 1 / 2]], {dash: 2});
});
</script>


## Exemple {num2}`exemple`

Résolvez $\tan(x) - 2 = 3$.

$$
\tan(x) - 2 &= 3 \qquad \qquad \qquad &|& +2\\
\tan(x) &= 5 &|& \arctan(...)\\
\tan(x) &= \arctan(5) &|& \text{calculer la valeur de l'}\arctan(x) \text{et ajouter la période de } \pi\\
x &= 1.3734 {\color{red} + k \cdot \pi} &|& \text{solution principale}
$$

$S = \{1.3734 + k\pi \bigm| k \in \mathbb{R}\}$

```{jsxgraph} exemple-tan
:style: width: 100%; border: none;
```


## Exemple {num2}`exemple`

Résolvez $\cos(3x) = \dfrac{\sqrt{2}}{2}$.

$$
\cos(3x) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\cos(3x) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 2\pi\\
3x_1  &= \dfrac{\pi}{4} {\color{red} + k \cdot 2\pi} &|& :3 \\
x_1  &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $x_2 = - x_1$.

$$
3x_2 &= -\dfrac{\pi}{4} + k \cdot 2\pi\\
x_2 &= -\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
$$

$S = \left\{\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{R} \right\} \cup
\left\{-\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{R} \right\}$

```{jsxgraph} exemple-cos
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

Résolvez $\sin(x - \dfrac{\pi}{2}) + 1 = \dfrac{1}{2}$.

$$
\sin(x - \dfrac{\pi}{2}) + 1 &= 0.5 \qquad \qquad \qquad &|& -1\\
\sin(x - \dfrac{\pi}{2}) &= -0.5 &|& \arcsin(...)\\
x - \dfrac{\pi}{2}  &= \arcsin(-0.5) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 2\pi\\
x_1 - \dfrac{\pi}{2}  &= -\dfrac{\pi}{6} {\color{red} + k \cdot 2\pi} &|& +\dfrac{\pi}{2} \\
x_1  &= \dfrac{\pi}{3} + k \cdot 2\pi &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $x_2 = \pi - x_1$.

$$
x_2 - \dfrac{\pi}{2} &= \pi - (-\dfrac{\pi}{6}) + k \cdot 2\pi\\
x_2 - \dfrac{\pi}{2} &= \dfrac{7\pi}{6} + k \cdot 2\pi\\
x_2  &= \dfrac{7\pi}{6} + \dfrac{\pi}{2} + k \cdot 2\pi\\
x_2  &= \dfrac{5\pi}{3} + k \cdot 2\pi
$$

$S = \left\{\dfrac{\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{R} \right\} \cup
\left\{\dfrac{5\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{R} \right\}$

```{jsxgraph} exemple-sin
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

Résolvez $\tan(\alpha) - 2 = 3$.

$$
\tan(\alpha) - 2 &= 3 \qquad \qquad \qquad \qquad &|& +2\\
\tan(\alpha) &= 5 &|& \arctan(...)\\
\tan(\alpha) &= \arctan(5) &|& \text{calculer la valeur de l'}\arctan(x) \text{et ajouter la période de } 180^\circ\\
\alpha &= 78.69^\circ {\color{red} + k \cdot 180^\circ} &|& \text{solution principale}
$$

$S = \{78.69^\circ + k \cdot 180^\circ \bigm| k \in \mathbb{R}\}$

## Exemple {num2}`exemple`

Résolvez $\cos(3\alpha) = \dfrac{\sqrt{2}}{2}$.

$$
\cos(3\alpha) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\cos(3\alpha) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 360^\circ\\
3\alpha_1  &= 45^\circ {\color{red} + k \cdot 360^\circ} &|& :3 \\
\alpha_1  &= 15^\circ + k \cdot 120^\circ &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $\alpha_2 = - \alpha_1$.

$$
3\alpha_2 &= -45^\circ + k \cdot 360^\circ\\
\alpha_2 &= -15^\circ + k \cdot 120^\circ
$$

$S = \left\{15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{R} \right\} \cup
\left\{-15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{R} \right\}$

## Exemple {num2}`exemple`

Résolvez $\sin(x - 90^\circ) + 1 = \dfrac{1}{2}$.

$$
\sin(x - 90^\circ) + 1 &= 0.5 \qquad \qquad \qquad &|& -1\\
\sin(x - 90^\circ) &= -0.5 &|& \arcsin(...)\\
x - 90^\circ  &= \arcsin(-0.5) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 360^\circ\\
\alpha_1 - 90^\circ  &= -30^\circ {\color{red} + k \cdot 360^\circ} &|& +90^\circ \\
\alpha_1  &= 60^\circ + k \cdot 360^\circ &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $\alpha_2 = \pi - \alpha_1$.

$$
\alpha_1 - 90^\circ &= 180^\circ - (- 30^\circ) + k \cdot 360^\circ\\
\alpha_1 - 90^\circ &= 210^\circ + k \cdot 360^\circ$\\
\alpha_1 &= 210^\circ + k \cdot 300^\circ$\\
$$

$S = \left\{60^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{R} \right\} \cup
\left\{300^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{R} \right\}$
