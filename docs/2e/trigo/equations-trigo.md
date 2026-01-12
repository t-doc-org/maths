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
\cos(x) &= \cos(-x)\\
\sin(x) &= \sin(\pi - x)\\
\cos^2(x) + \sin^2(x) &= 1\\
\sin(x) &= \cos\left(\dfrac{\pi}{2} - x\right)\\
\cos(x) &= \sin\left(\dfrac{\pi}{2} - x\right) = \sin\left(\dfrac{\pi}{2} + x\right)\\
```
````

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
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
        point: {strokeWidth: 0},
    },
}];
initBoard('exemple-tan', attrs, board => {
    board.create('functiongraph', [x => Math.tan(x)-2], {
        name: '\\(\\tan(x)-1\\)', withLabel: true,
        label: {
            position: '0.5fr right', offset: [-30, 0],
        },
    });
    board.create('functiongraph', [x => 3], {
        strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 5; ++k) {
        board.create('point', [Math.atan(5) - 2 * Math.PI + k * Math.PI, 3], {
        fillColor: 'darkmagenta', withLabel: false, size: 3,
    });
    }
    board.create('segment', [[Math.atan(5), 0],[Math.atan(5), 3]], {dash: 2});
});

initBoard('exemple-cos', [attrs, {boundingBox: [-6, 1.5, 6, -1.5],
}], board => {

    board.create('functiongraph', [x => Math.cos(3 * x)], {
        name: '\\(\\cos(3x)\\)', withLabel: true,
        label: {
            position: '0.7fr right', offset: [-20, 0],
        },
    });
    board.create('functiongraph', [x => Math.sqrt(2) / 2], {
        strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
        board.create('point', [Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/ 3, Math.sqrt(2) / 2], {
            fillColor: 'darkmagenta', withLabel: false, size: 3,
        });
        board.create('point', [-Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/ 3, Math.sqrt(2) / 2], {
            fillColor: 'darkgreen', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 12, 0],[Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
    board.create('segment', [[-Math.PI / 12, 0],[-Math.PI / 12, Math.sqrt(2) / 2]], {dash: 2});
});
initBoard('exemple-sin', [attrs, {boundingBox: [-6, 2.5, 6, -0.5],
}], board => {

    board.create('functiongraph', [x => Math.sin(x - Math.PI/2)+1], {
        name: '\\(\\sin(x - \\dfrac{\\pi}{2})+1\\)', withLabel: true,
        label: {
            position: '0.7fr left', offset: [0, 0],
        },
    });
    board.create('functiongraph', [x => 1 / 2], {
        strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 2; ++k) {
        board.create('point', [Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2], {
            fillColor: 'darkmagenta', withLabel: false, size: 3,
        });
        board.create('point', [5 * Math.PI / 3 - 2 * Math.PI + k * 2 * Math.PI, 1 / 2], {
            fillColor: 'darkgreen', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 3, 0],[Math.PI / 3, 1 / 2]], {dash: 2});
    board.create('segment', [[5 * Math.PI / 3, 0],[5 * Math.PI / 3, 1 / 2]], {dash: 2});
});
initBoard('exemple-sin-2', [attrs, {boundingBox: [-6, 1.5, 6, -1.5],
}], board => {

    board.create('functiongraph', [x => Math.sin(2 *x)], {
        name: '\\(\\sin(2x)\\)', withLabel: true,
        label: {
            position: '0.75fr left', offset: [-20, 0],
        },
    });
    board.create('functiongraph', [x => Math.sin(Math.PI/2 -x)], {
        name: '\\(\\sin(\\dfrac{\\pi}{2}-x)\\)', withLabel: true,
        label: {
            position: '0.44fr left', offset: [-30, 0],
            strokeColor: JXG.palette.red,
        },
        strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
        board.create('point', [Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI/3, Math.sin(2 * (Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI/3))], {
            fillColor: 'darkmagenta', withLabel: false, size: 3,
        });
        board.create('point', [Math.PI / 2 - 2 * Math.PI + k * 2 * Math.PI, 0], {
            fillColor: 'darkgreen', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 6, 0],[Math.PI / 6, Math.sin(2 * Math.PI/6)]], {dash: 2});
});
initBoard('exemple-sin-3', [attrs, {boundingBox: [-6, 1.5, 6, -1.5],
}], board => {

    board.create('functiongraph', [x => Math.sin(2 *x + Math.PI/4)], {
        name: '\\(\\sin(2x - \\dfrac{\\pi}{2})\\)', withLabel: true,
        label: {
            position: '0.75fr left', offset: [-40, -10],
        },
    });
    board.create('functiongraph', [x => Math.cos(x)], {
        name: '\\(\\cos(x)\\)', withLabel: true,
        label: {
            position: '0.44fr left', offset: [-20, 0],
            strokeColor: JXG.palette.red,
        },
        strokeColor: JXG.palette.red,
    });
    for (let k = 0; k < 7; ++k) {
        board.create('point', [Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/3, Math.cos(Math.PI / 12 - 2 * Math.PI + k * 2 * Math.PI/3)], {
            fillColor: 'darkmagenta', withLabel: false, size: 3,
        });
        board.create('point', [Math.PI / 4 - 2 * Math.PI + k * 2 * Math.PI, Math.cos(Math.PI / 4 - 2 * Math.PI + k * 2 * Math.PI)], {
            fillColor: 'darkgreen', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[Math.PI / 12, 0],[Math.PI / 12, Math.cos(Math.PI/12)]], {dash: 2});
    board.create('segment', [[Math.PI / 4, 0],[Math.PI / 4, Math.cos(Math.PI/4)]], {dash: 2});
});
initBoard('exemple-sin-cos', [attrs, {boundingBox: [-6, 2.8, 6, -1.5],
}], board => {

    board.create('functiongraph', [x => 2*(Math.cos(x))**2+ Math.sin(x)], {
        name: '\\(2\\cos^2(x)+ \\sin(x)\\)', withLabel: true,
        label: {
            position: '0.7fr left', offset: [-40, 0],
        },
    });
    board.create('functiongraph', [x => 1], {strokeColor: JXG.palette.red,});
    for (let k = 0; k < 7; ++k) {
        board.create('point', [-1 * Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI, 1], {
            fillColor: 'darkmagenta', withLabel: false, size: 3,
        });
        board.create('point', [7 * Math.PI / 6 - 2 * Math.PI + k * 2 * Math.PI, 1], {
            fillColor: 'darkgreen', withLabel: false, size: 3,
        });
        board.create('point', [Math.PI / 2 - 2 * Math.PI + k * 2 * Math.PI, 1], {
            fillColor: 'skyblue', withLabel: false, size: 3,
        });
    }
    board.create('segment', [[-1 * Math.PI / 6, 0],[-1 * Math.PI / 6, 1]], {dash: 2});
    board.create('segment', [[7 * Math.PI / 6 , 0],[7 * Math.PI / 6 , 1]], {dash: 2});
    board.create('segment', [[Math.PI / 2 , 0],[Math.PI / 2 , 1]], {dash: 2});
    console.log(JXG.palette);
});
</script>


## Exemple {num2}`exemple`

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

```{jsxgraph} exemple-tan
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

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

## Exemple {num2}`exemple`

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

-   $$3x_1  &= \dfrac{\pi}{4} {\color{red} \, + \, k \cdot 2\pi} \qquad &|& :3 \\
    x_1  &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
    $$

-   $$
    3x_2 &= {\color{red}-}\dfrac{\pi}{4} {\color{red} \, + \, k \cdot 2\pi} \qquad &|& :3 \\
    x_2 &= -\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
    $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{green}\left\{-\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z} \right\}}$

```{jsxgraph} exemple-cos
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

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

-   $$3\alpha_1  &= 45^\circ {\color{red} \, + \, k \cdot 360^\circ} \qquad &|& :3 \\
    \alpha_1  &= 15^\circ + k \cdot 120^\circ
    $$

-   $$
    3\alpha_2 &= {\color{red} \,-}45^\circ {\color{red} \, + \, k \cdot 360^\circ} \qquad &|& :3 \\
    \alpha_2 &= -15^\circ + k \cdot 120^\circ
    $$
```

$S = {\color{darkmagenta}\left\{15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{green}\left\{-15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{Z} \right\}}$

## Exemple {num2}`exemple`

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

-   $$
    x_1 - \dfrac{\pi}{2}  &= -\dfrac{\pi}{6} {\color{red} + \, k \, \cdot 2\pi} \qquad &|& +\dfrac{\pi}{2} \\
    x_1  &= \dfrac{\pi}{3} + k \cdot 2\pi
    $$

-   $$
    x_2 - \dfrac{\pi}{2} &= {\color{red}\, \pi \,- }(-\dfrac{\pi}{6}) {\color{red} + \, k \, \cdot 2\pi} \qquad &|& \text{CL}\\
    x_2 - \dfrac{\pi}{2} &= \dfrac{7\pi}{6} + k \cdot 2\pi &|& +\dfrac{\pi}{2}\\
    x_2  &= \dfrac{7\pi}{6} + \dfrac{\pi}{2} + k \cdot 2\pi &|& \text{CL}\\
    x_2  &= \dfrac{5\pi}{3} + k \cdot 2\pi
    $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{darkgreen}\left\{\dfrac{5\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{Z} \right\}}$

```{jsxgraph} exemple-sin
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

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

-   $$
    \alpha_1 - 90^\circ  &= -30^\circ {\color{red} + \, k \, \cdot 360^\circ} \qquad &|& +90^\circ \\
    \alpha_1  &= 60^\circ + k \cdot 360^\circ
    $$

-   $$
    \alpha_2 - 90^\circ &= {\color{red}\, 180^\circ \,- }(-30^\circ) {\color{red} + \, k \, \cdot 360^\circ} \qquad &|& \text{CL}\\
    \alpha_2 - 90^\circ &= 210^\circ + k \cdot 360^\circ &|& +90^\circ\\
    \alpha_2  &= 300^\circ + k \cdot 360^\circ
    $$
```

$S = {\color{darkmagenta}\left\{60^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{Z} \right\}} \cup
{\color{darkgreen}\left\{300^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{Z} \right\}}$

## Exemple {num2}`exemple`

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

-   $$
    2x_1 &= \dfrac{\pi}{2} - x_1 + k \cdot 2\pi  \qquad &|& +x_1\\
    3x_1 &= \dfrac{\pi}{2} + k \cdot 2\pi &|& :3\\
    x_1 &= \dfrac{\pi}{6} + k \cdot \dfrac{2\pi}{3}
    $$
-   $$
    2x_2 &= \pi - (\dfrac{\pi}{2} - x_2) + k \cdot 2\pi \qquad &|& \text{CL}\\
    2x_2 &= \pi - \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& \text{CL}\\
    2x_2 &= \dfrac{\pi}{2} + x_2 + k \cdot 2\pi &|& -x_2\\
    x_2 &= \dfrac{\pi}{2} + k \cdot 2\pi
    $$
```

$S = {\color{darkmagenta}\left\{\dfrac{\pi}{6} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{darkgreen}\left\{\dfrac{\pi}{2} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}}$


```{jsxgraph} exemple-sin-2
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

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

-   $$
    2x_1 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} - x_1 + k \cdot 2\pi  \qquad &|& +x_1\\
    3x_1 + \dfrac{\pi}{4} &= \dfrac{\pi}{2} + k \cdot 2\pi &|& -\dfrac{\pi}{4}\\
    3x_1 &= \dfrac{\pi}{2} - \dfrac{\pi}{4} + k \cdot 2\pi &|& \text{CL}\\
    3x_1 &= \dfrac{\pi}{4} + k \cdot 2\pi &|& :3\\
    x_1 &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}
    $$
-   $$
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

```{jsxgraph} exemple-sin-3
:style: width: 100%; border: none;
```

## Exemple {num2}`exemple`

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

-   # $\sin(x) = -\dfrac{1}{2}$
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
-   # $\sin(x) = 1$
    $$
    x_3 &= \dfrac{\pi}{2} + k \cdot 2\pi\\
    $$
````

$S = {\color{darkmagenta}\left\{-\dfrac{\pi}{6} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{darkgreen}\left\{\dfrac{7\pi}{6} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} \cup
{\color{skyblue}\left\{\dfrac{\pi}{2} + k \cdot 2\pi \bigm| k \in \mathbb{Z}\right\}} =
\left\{\dfrac{\pi}{2} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{Z}\right\}$


```{jsxgraph} exemple-sin-cos
:style: width: 100%; border: none;
```




