% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cercle trigonométrique

```{metadata}
subject: "Mathématiques 2e année"
```
## Radian

<script type="module">
const {defaults, gcd, initBoard, JXG, withAxesLabels} =
    await tdoc.import('jsxgraph.js');
initBoard('trig-circle', [defaults, withAxesLabels([-1, 1], [-1, 1]), {
    boundingBox: [-1.2, 1.5, 1.2, -1.2],
    axis: true, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},},
    },
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {
            strokeWidth: 0, size: 0, label: {anchorY:'top'},
            withLabel: false, showInfobox: false,
        },
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
    const ax1 = board.create('point', [1, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    board.create('segment', [o, ax1], {
        name: '\\(r\\)', withLabel: true
    });
    // Place the circle.
    const c = board.create('circle', [o, r], {
        strokeColor: JXG.palette.black,
    });

    const angles = [];
    for (let i = 0; i < 4; ++i) {
        for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
            const a = i * d + 2 * n, b = 2 * d;
            const cd = gcd(a, b);
            angles.push([a / cd, b / cd]);
        }
    }

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = angles.map(([n, d]) => {
        const a = n * Math.PI / d;
        return board.create('point', [Math.cos(a), Math.sin(a)], {
            fixed: true, visible: false, withLabel: false,
        });
    });
    const p = board.create('glider', [Math.cos(1), Math.sin(1), c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.04, size: 3
    });
    const alpha = () => {
        const a = Math.atan2(p.Y(), p.X());
        return a >= 0 ? a : a + 2 * Math.PI;
    };
    board.create('angle', [ax1, o, p], {
        name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
        radius: 0.2, orthoType: 'none',
        strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [o, p], {strokeColor: alphaColor});

    // Project the glider point onto the axes.
    const px = [() => p.X(), 0];
    const py = [0, () => p.Y()];
    const ox = board.create('point', [r, 0], {
        visible: false,
    });
    const arc = board.create('arc', [o, ox, p], {
        name: '\\(l\\)',
        label: {anchorX: 'right', offset: [0, -4], strokeColor: JXG.palette.red},
        withLabel: true,
    });

    function almostEqual(a, b) { return Math.abs(a - b) < 1e-6; }

    function display(angle) {
        for (const [n, d] of angles) {
            if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
                if (n === 0) return 0;
                const ns = `${n > 1 ? n : ''}\\pi`;
                if (d == 1) return ns;
                return `\\dfrac{${ns}}{${d}}`;
            }
        }
        return alpha().toFixed(2);
    }

    // Display values
    board.create('text',
        [-1, 1.3, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });

    board.create('text', [-1, 1.15, () => `\\(l=${alpha().toFixed(2)}r\\)`], {
        strokeColor: JXG.palette.red, fixed: true,
    });

});
</script>

````{admonition} Définition
Un angle $\alpha$ d'un **radian** intercepte sur la circonférence d'un cercle de
rayon $r$ un arc d'une longueur égale au rayon.

```{math}
:class: align-center
\alpha = \dfrac{l}{r}
```
````

### Exemple {num2}`exemple`

```{jsxgraph} trig-circle
:style: width: 80%; border: none;
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

### Exemple {num2}`exemple`

La mesure d'un angle en radians est proportionnelle à sa mesure en degrés.

```{flex-table}
:class: angle
| degrés  | $360^\circ$ | $1$ | $\varphi$
| radians | $2\pi$ | $x$ | $1$
```
{vspace}`0.5lh`
1 degré correspond à: $\quad x = \dfrac{2\pi}{360^\circ} \approx 0.0175^\circ$

1 radian correspond à: $\quad \varphi = \dfrac{360^\circ}{2\pi} \approx 57.3$


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

En radians, un angle de $37^\circ$ vaut $\qquad \dfrac{37^\circ}{360^\circ} \cdot 2\pi = \dfrac{37\pi}{180} \approx 0.2056$

Un angle de 5.13 rad vaut en degré $\qquad \dfrac{5.13}{2\pi} \cdot 360^\circ \approx 293.93^\circ$

### Remarques

-   Les angles en radians sont généralement donnés sous forme de multiples ou
    de fractions de $\pi$.
-   Le "rad" n'est en général pas noté, car c'est un rapport de deux longueurs
    (l'arc de cercle et le rayon). Les angles sans unité sont toujours des
    radians.

<script type="module">
const {defaults, gcd, initBoard, withAxesLabels} =
    await tdoc.import('jsxgraph.js');
initBoard('cercle-trigo', [defaults, withAxesLabels([-1, 1], [-1, 1]), {
    boundingBox: [-1.75, 1.75, 1.75, -1.75], grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0},},
    },
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {
            strokeWidth: 0, size: 0, label: {anchorY:'top'},
            withLabel: false,  showInfobox: false,
        },
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black}},
        circle: {strokeColor: JXG.palette.black, strokeWidth: 1},
    },
}], board => {
    const ax1 = board.create('point', [1, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
        fixed: true, visible: false, withLabel: false,
    });
    // Place the circle.
    const c = board.create('circle', [o, 1], {
        strokeColor: JXG.palette.black,
    });

    const angles = [];
    for (let i = 0; i < 4; ++i) {
        for (const [n, d] of [[0, 1], [1, 6], [1, 4], [1, 3]]) {
            const a = i * d + 2 * n, b = 2 * d;
            const cd = gcd(a, b);
            angles.push([a / cd, b / cd]);
        }
    }

    // Place the glider point and everything related to the angle.
    const alphaColor = JXG.palette.green;
    const attractors = angles.map(([n, d]) => {
        const a = n * Math.PI / d;
        return board.create('point', [Math.cos(a), Math.sin(a)], {
            fixed: true, visible: false, withLabel: false,
        });
    });
    const p = board.create('glider', [0.8, 0.6, c], {
        name: '\\(P\\)', label: {strokeColor: alphaColor},
        fillColor: alphaColor, attractors, attractorDistance: 0.04, size: 3
    });
    const alpha = () => {
        const a = Math.atan2(p.Y(), p.X());
        return a >= 0 ? a : a + 2 * Math.PI;
    };
    board.create('angle', [ax1, o, p], {
        name: '\\(\\alpha\\)', label: {strokeColor: alphaColor},
        radius: 0.2, orthoType: 'none',
        strokeColor: alphaColor, fillColor: alphaColor, fillOpacity: 0.3,
    });
    board.create('segment', [o, [1, () => Math.tan(alpha())]], {strokeColor: alphaColor, dash: 2});
    board.create('segment', [o, p], {strokeColor: alphaColor});


    // Project the glider point onto the axes.
    const px = board.create('point', [() => p.X(), 0], {
        name: '\\(\X_p\\)',
        label: {anchorX: 'middle', offset: [0, -3], strokeColor: JXG.palette.black},
        withLabel: true,
    });
    const py = board.create('point', [0, () => p.Y()], {
        name: '\\(\Y_p\\)',
        label: {anchorX: 'right', anchorY: 'middle', offset: [-5, 0]},
        withLabel: true,
    });
    board.create('segment', [p, px], {dash: 2, strokeColor: JXG.palette.black});
    board.create('segment', [p, py], {dash: 2, strokeColor: JXG.palette.black});
    board.create('line', [[1,0], [1, 1]], {
        dash: 2, strokeColor: JXG.palette.black,
        point1: {fixed: true}, point2: {fixed: true},
    });

    // Place the elements related to the sine.
    const sinColor = JXG.palette.blue;
    board.create('arrow', [o, py], {
        name: '\\(\\sin(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr left', anchorX: 'right', anchorY: 'middle',
            distance: 0, offset: [-7, 0], strokeColor: sinColor,
        },
        strokeWidth: 2, strokeColor: sinColor,
    });
    board.create('text',
        [2, 5.7, () => `\\(sin(\\alpha)=${Math.sin(alpha()).toFixed(3)}\\)`], {
        strokeColor: sinColor, fixed: true,
    });

    // Place the elments related to the cosine.
    const cosColor = JXG.palette.red;
    board.create('arrow', [o, px], {
        name: '\\(\\cos(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr right', anchorX: 'middle', anchorY: 'top',
            distance: 0, offset: [0, -7], strokeColor: cosColor,
        },
        strokeWidth: 2, strokeColor: cosColor,
    });
    board.create('text',
        [2, 5.4, () => `\\(cos(\\alpha)=${Math.cos(alpha()).toFixed(3)}\\)`], {
        strokeColor: cosColor, fixed: true,
    });

    // Place the elments related to the tan.
    const t = board.create('point', [1, () => Math.tan(alpha())], {
        size: 0,
        name: '\\(T(X_T; Y_T)\\)', withLabel: true,
        label: {anchorX: 'left', anchorY: 'middle', offset: [8, 0]}
    });
    const tanColor = JXG.palette.purple;
    board.create('arrow', [ax1, t], {
        name: '\\(\\tan(\\alpha)\\)', withLabel: true,
        label: {
            position: '0.5fr right', anchorX: 'left', anchorY: 'middle',
            distance: 0, offset: [7, 0], strokeColor: tanColor,
        },
        strokeWidth: 2, strokeColor: tanColor,
    });
    board.create('text',
        [2, 5.4, () => `\\(tan(\\alpha)=${Math.tan(alpha()).toFixed(3)}\\)`], {
        strokeColor: tanColor, fixed: true,
    });

    function almostEqual(a, b) { return Math.abs(a - b) < 1e-6; }

    function display(angle) {
        for (const [n, d] of angles) {
            if (Math.abs(angle - n * Math.PI / d) < 1e-6) {
                if (n === 0) return 0;
                const ns = `${n > 1 ? n : ''}\\pi`;
                if (d == 1) return ns;
                return `\\dfrac{${ns}}{${d}}`;
            }
        }
        return alpha().toFixed(2);
    }

    function display_value(value) {
        if (Math.abs(Math.abs(value) - 0.5) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{1}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(2)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{2}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/2) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{2}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)/3) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\dfrac{\\sqrt{3}}{3}`;
        } else if (Math.abs(Math.abs(value) - Math.sqrt(3)) < 1e-6) {
            return `${value < 0 ? '-' : ''}\\sqrt{3}`;
        } else {
            return value.toFixed(2);
        }
    }

    // Display values
    board.create('text',
        [-1.5, 1.6, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
            strokeColor: alphaColor, fixed: true,
    });

    board.create('text', [-1.5, 1.35, () => `\\(\\sin(\\alpha)=${display_value(Math.sin(alpha()))}\\)`], {
        strokeColor: JXG.palette.blue, fixed: true,
    });
    board.create('text', [-1.5, 1.1, () => `\\(\\cos(\\alpha)=${display_value(Math.cos(alpha()))}\\)`], {
        strokeColor: JXG.palette.red, fixed: true,
    });
    board.create('text', [-1.5, 0.85, () => `\\(\\tan(\\alpha)=${Math.tan(alpha()) > 100 ? `indéfini` : display_value(Math.tan(alpha()))}\\)`], {
        strokeColor: JXG.palette.purple, fixed: true,
    });

});
</script>

## Cercle trigonométrique

````{admonition} Définition
Le cercle de rayon 1 et centré sur l'origine est appelé **cercle
trigonométrique**.

**Sinus, cosinus et tangente dans le cercle trigonométrique**

```{jsxgraph} cercle-trigo
:style: width: 100%; border: none;
```

Soient $\alpha$ un angle reporté dans le cercle trigonométrique, $P$ le point
d'intersection de la demi-droite de l'angle avec le cercle et $T$ le point
d'intersection de cette demi-droite avec l'axe des tangentes, comme dans la
figure ci-dessus.

Le **cosinus** de l'angle $\alpha$, noté $\cos(\alpha)$, est l'abscisse $X_P$
du point $P$.

Le **sinus** de l'angle $\alpha$, noté $\sin(\alpha)$, est l'ordonnée $Y_P$ du
point$P$.

La **tangente** de l'angle $\alpha$, notée $\tan(\alpha)$, est l'ordonnée
$Y_T$ du point $T$.

````

````{admonition} Propriétés
:class: note
-   La tangente n'est pas définie si $\varphi = \dfrac{\pi}{2} = 90^\circ$ et si
    $\varphi = \dfrac{3\pi}{2} = 270^\circ$.
-   Pour déterminer la tangente de l'ange $\varphi$ situé dans le deuxième ou le
    troisième quadrant, il faut prolonger la demi-droite $OP$ dans l'autre
    direction pour trouver l'intersection T de l'angle avec l'axe des tangentes.
-   Pour les angles plus grands qu'un tour complet ($2\pi$ ou $360^\circ$),
    ```{math}
    :class: align-center
    sin(\varphi) = sin(\varphi + k \cdot 2\pi) = sin(\varphi + k \cdot 360^\circ)\\
    cos(\varphi) = cos(\varphi + k \cdot 2\pi) = cos(\varphi + k \cdot 360^\circ)\\
    tan(\varphi) = tan(\varphi + k \cdot \pi) = cos(\varphi + k \cdot 180^\circ)\\
    ```
````

```{tip}
**Changement de degrés en radians (et vice-versa) sur la calculatrice**

1.  Pressez la touche {kbd}`mode`.
2.  Dans le menu qui s'affiche, choisissez {kbd}`DEGREE` ou {kbd}`RADIAN` au
    moyen du curseur (gros bouton).
3.  Validez le mode désiré en appuyant sur {kbd}`enter`.
4.  Sortez du menu en appuyant sur {kbd}`2nd` suivi de {kbd}`quit`.

Le mode **DEG** ou **RAD** est affiché en haut de l'écran.
```
