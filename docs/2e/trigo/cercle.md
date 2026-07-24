% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cercle trigonométrique

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

### Radian

<script type="module">
const {attrs, gcd, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.trigCircle = el => {
  return initBoard(el, [attrs.screen, withAxesLabels([-1, 1], [-1, 1]), {
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
        strokeWidth: 0, size: 0, label: {anchorY: 'top'},
        withLabel: false, showInfobox: false,
      },
      angle: {
        strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
        fillOpacity: 0.2, strokeWidth: 1,
        label: {
          strokeColor: JXG.palette.black, anchorX: 'middle', anchorY: 'middle',
        },
      },
      circle: {strokeColor: JXG.palette.black, strokeWidth: 1},
      arc: {strokeColor: JXG.palette.red, strokeWidth: 3},
    },
  }], board => {
    const r = 1;
    const ax1 = board.create('point', [1, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    const o = board.create('point', [0, 0], {
      fixed: true, visible: false, withLabel: false,
    });
    board.create('segment', [o, ax1], {name: '\\(r\\)', withLabel: true});

    // Place the circle.
    const c = board.create('circle', [o, r], {strokeColor: JXG.palette.black});
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
      fillColor: alphaColor, attractors, attractorDistance: 0.04, size: 3,
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
    const ox = board.create('point', [r, 0], {visible: false});
    const arc = board.create('arc', [o, ox, p], {
        name: '\\(l\\)', withLabel: true,
        label: {
          anchorX: 'right', offset: [0, -4],
          strokeColor: JXG.palette.red,
        },
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
    board.create('text', [-1, 1.3, () => `\
\\(\\alpha=${display(alpha())}\\;rad\
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`], {
      strokeColor: alphaColor, fixed: true,
    });

    board.create('text', [-1, 1.15, () => `\\(l=${alpha().toFixed(2)}r\\)`], {
      strokeColor: JXG.palette.red, fixed: true,
    });
  });
};
</script>

````{admonition} Définition
Un angle $\alpha$ d'un **radian** intercepte sur la circonférence d'un cercle de
rayon $r$ un arc d'une longueur égale au rayon.

```{math}
:class: align-center
\alpha = \dfrac{l}{r}
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

```{jsxgraph} trigCircle
:style: width: 100%; border: none;
```
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

````{container} frame noprint
# Exemple {num2}`exemple`

La mesure d'un angle en radians est proportionnelle à sa mesure en degrés.

```{flex-table}
:class: angle
| degrés  | $360^\circ$ | $1$ | $\varphi$
| radians | $2\pi$ | $x$ | $1$
```
{vspace}`0.5lh`
1 degré correspond à: $\quad x = \dfrac{2\pi}{360^\circ} \approx 0.0175^\circ$

1 radian correspond à: $\quad \varphi = \dfrac{360^\circ}{2\pi} \approx 57.3$
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

````{container} frame noprint
# Exemple {num2}`exemple`

En radians, un angle de $37^\circ$ vaut $\qquad \dfrac{37^\circ}{360^\circ} \cdot 2\pi = \dfrac{37\pi}{180} \approx 0.2056$

Un angle de 5.13 rad vaut en degré $\qquad \dfrac{5.13}{2\pi} \cdot 360^\circ \approx 293.93^\circ$
````

```{container}
# Remarques

-   Les angles en radians sont généralement donnés sous forme de multiples ou
    de fractions de $\pi$.
-   Le "rad" n'est en général pas noté, car c'est un rapport de deux longueurs
    (l'arc de cercle et le rayon). Les angles sans unité sont toujours des
    radians.
```

<script type="module">
const {attrs, gcd, initBoard, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.cercleTrigo = el => {
  return initBoard(el, [attrs.screen, withAxesLabels([-1, 1], [-1, 1]), {
    boundingBox: [-1.75, 1.75, 1.75, -1.75], grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    defaultAxes: {
      x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
      y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 1},
      line: {strokeColor: JXG.palette.black, strokeWidth: 1},
      point: {
        strokeWidth: 0, size: 0, label: {anchorY:'top'},
        withLabel: false,  showInfobox: false,
      },
      angle: {
        strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
        fillOpacity: 0.2, strokeWidth: 1,
        label: {strokeColor: JXG.palette.black},
      },
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
    const c = board.create('circle', [o, 1], {strokeColor: JXG.palette.black});
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
      fillColor: alphaColor, attractors, attractorDistance: 0.04, size: 3,
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
    board.create('segment', [o, [1, () => Math.tan(alpha())]], {
      strokeColor: alphaColor, dash: 2,
    });
    board.create('segment', [o, p], {strokeColor: alphaColor});

    // Project the glider point onto the axes.
    const px = board.create('point', [() => p.X(), 0], {
      name: '\\(\X_p\\)', withLabel: true,
      label: {
        anchorX: 'middle', offset: [0, -3],
        strokeColor: JXG.palette.black,
      },
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
      [2, 5.7, () => `\\(sin(\\alpha)=${Math.sin(alpha()).toFixed(3)}\\)`],
      {strokeColor: sinColor, fixed: true});

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
      [2, 5.4, () => `\\(cos(\\alpha)=${Math.cos(alpha()).toFixed(3)}\\)`],
      {strokeColor: cosColor, fixed: true});

    // Place the elments related to the tan.
    const t = board.create('point', [1, () => Math.tan(alpha())], {
      name: '\\(T(X_T; Y_T)\\)', withLabel: true, size: 0,
      label: {anchorX: 'left', anchorY: 'middle', offset: [8, 0]},
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
      [2, 5.4, () => `\\(tan(\\alpha)=${Math.tan(alpha()).toFixed(3)}\\)`],
      {strokeColor: tanColor, fixed: true});

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
=${(alpha() * 180 / Math.PI).toFixed(1)}\\degree\\)`],
      {strokeColor: alphaColor, fixed: true});

    board.create('text',
      [-1.5, 1.35,
       () => `\\(\\sin(\\alpha)=${display_value(Math.sin(alpha()))}\\)`],
      {strokeColor: JXG.palette.blue, fixed: true});
    board.create('text',
      [-1.5, 1.1,
       () => `\\(\\cos(\\alpha)=${display_value(Math.cos(alpha()))}\\)`],
      {strokeColor: JXG.palette.red, fixed: true});
    board.create('text',
      [-1.5, 0.85,
       () => `\\(\\tan(\\alpha)=${Math.tan(alpha()) > 100 ?
             `indéfini` : display_value(Math.tan(alpha()))}\\)`],
      {strokeColor: JXG.palette.purple, fixed: true});
  });
};
</script>

### Cercle trigonométrique

````{admonition} Définition
Le cercle de rayon 1 et centré sur l'origine est appelé **cercle
trigonométrique**.

**Sinus, cosinus et tangente dans le cercle trigonométrique**

```{jsxgraph} cercleTrigo
:style: width: 75%; border: none;
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
    \sin(\varphi) = \sin(\varphi + k \cdot 2\pi) = \sin(\varphi + k \cdot 360^\circ)\\
    \cos(\varphi) = \cos(\varphi + k \cdot 2\pi) = \cos(\varphi + k \cdot 360^\circ)\\
    \tan(\varphi) = \tan(\varphi + k \cdot \pi) = \tan(\varphi + k \cdot 180^\circ)\\
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

## Exercices

### Exercice {num2}`exercice`

Complétez le tableau ci-dessous, sans utiliser la calculatrice.
Les angles en radians sont à donner sous la forme d'un multiple ou d'une
fraction de $\pi$.

```{flex-table}
:class: angle
| degrés  | $36^\circ$ |  | $135^\circ$ |  | $30^\circ$ |  | $6^\circ$ | | $420^\circ$
| radians |  | $\dfrac{\pi}{3}$ || $\dfrac{4\pi}{5}$ | | $\dfrac{5\pi}{4}$ |  | $\dfrac{3\pi}{10}$ |
```

```{block} solution
```{flex-table}
:class: angle
| degrés  | $36^\circ$ | $60^\circ$ | $135^\circ$ | $144^\circ$ | $30^\circ$ | $225^\circ$ | $6^\circ$ | $54^\circ$ | $420^\circ$
| radians | $\dfrac{\pi}{5}$  | $\dfrac{\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{4\pi}{5}$ | $\dfrac{\pi}{6}$ | $\dfrac{5\pi}{4}$ | $\dfrac{\pi}{30}$ | $\dfrac{3\pi}{10}$ |  $\dfrac{7\pi}{3}$
```

### Exercice {num2}`exercice`

Transformez les angles ci-dessous en radians. Donnez les résultats en nombres
décimaux (arrondis au dix-millionième).

{.lower-alpha-paren .columns-6}
1. $32^\circ$
2. $79^\circ$
3. $125^\circ$
4. $208^\circ$
5. $355^\circ$
6. $419^\circ$

```{block} solution
{.lower-alpha-paren .columns-6}
1. $0.5585$
2. $1.3788$
3. $2.1817$
4. $3.6303$
5. $6.1959$
6. $7.3129$
```

### Exercice {num2}`exercice`

Transformez les angles ci-dessous en degrés (arrondis au centième).

{.lower-alpha-paren .columns-6}
1. $0.567$
2. $1.2$
3. $2.76$
4. $4.9$
5. $5.444$
6. $8.06$

```{block} solution
{.lower-alpha-paren .columns-6}
1. $32.49^\circ$
2. $68.75^\circ$
3. $158.14^\circ$
4. $280.75^\circ$
5. $311.92^\circ$
6. $461.8^\circ$
```

### Exercice {num2}`exercice`

Calculez la longueur $\ell$ de l'arc intercepté par l'angle $\varphi$ donné en
degrés sur un cercle de rayon $r$.

{.lower-alpha-paren .columns-3}
1. $r=10$, $\varphi=37^\circ$
2. $r=7.5$, $\varphi=311^\circ$
3. $r=44$, $\varphi=165^\circ$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\ell=6.46$
2. $\ell=40.71$
3. $\ell=126.71$
```

### Exercice {num2}`exercice`

Calculez la longueur $\ell$ de l'arc intercepté par l'angle $x$ donné en
radians sur un cercle de rayon $r$.

{.lower-alpha-paren .columns-3}
1. $r=60$, $x=2.2$
2. $r=4$, $x=1$
3. $r=12.5$, $x=4.5$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\ell=132$
2. $\ell=4$
3. $\ell=56.25$
```

### Exercice {num2}`exercice`

Dessinez précisément un cercle trigonométrique (1 unité = 10 carrés).

{.lower-alpha-paren}

1. Reportez-y les angles suivants.

      {.decimal-paren .columns-6}
      1. $45^\circ$
      2. $-440^\circ$
      3. $200^\circ$
      4. $-\dfrac{5\pi}{6}$
      5. $\dfrac{7\pi}{3}$
      6. $13\pi$

2.  Représentez sur votre dessin les valeurs suivantes et donnez-en une valeur
    approximative.

      {.decimal-paren .columns-6}
      1. $\tan(45^\circ)$
      2. $\sin(-440^\circ)$
      3. $\cos(200^\circ)$
      4. $\tan(-\dfrac{5\pi}{6})$
      5. $\sin(\dfrac{7\pi}{3})$
      6. $\cos(13\pi)$

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-1.5, 1.5, 1.5, -1.5],
  axis: true, grid: false,
  defaults: {
    segment: {strokeWidth: 2, strokeColor: JXG.palette.black},
    line: {strokeWidth: 1, strokeColor: JXG.palette.black},
    point: {size: 0, label: {anchorY: 'top'}},
    angle: {
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black, fillOpacity: 0.2,
      label: {strokeColor: JXG.palette.black},
    },
    circle: {strokeWidth: 1, strokeColor: JXG.palette.black},
  },
}];

render.exoDegres = el => {
  return initBoard(el, battrs, board => {
    const alpha = 45 / 360 * 2 * Math.PI;
    const o = board.create('point', [0,0]);
    const x = board.create('point', [1,0]);
    board.create('circle', [o, x]);
    const a = board.create('point', [Math.cos(alpha), Math.sin(alpha)]);
    board.create('segment', [o, a]);
    board.create('angle', [x, o, a], {
      name: '\\(45^\\circ\\)', withLabel: true, radius: 0.2,
      label: {anchorX: 'left', anchorY: 'middle', offset: [4, 4]}
    });
    const beta = -440 / 360 * 2 * Math.PI;
    const b = board.create('point', [Math.cos(beta), Math.sin(beta)]);
    board.create('segment', [o, b]);
    board.create('angle', [b, o, x], {
      name: '\\(-440^\\circ\\)', withLabel: true, radius: 0.3,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [3, -3]}
    });
    const gamma = 200 / 360 * 2 * Math.PI;
    const c = board.create('point', [Math.cos(gamma), Math.sin(gamma)]);
    board.create('segment', [o, c]);
    board.create('angle', [x, o, c], {
      name: '\\(200^\\circ\\)', withLabel: true, radius: 0.25,
      label: {anchorX: 'right', anchorY: 'bottom', offset: [0,-15]}
    });
    board.create('line', [[1,0], [1,2]], {
      dash: 3
    });
    const ta = board.create('point', [1, Math.tan(alpha)], {
      name: '\\(\\tan(45^\\circ)\\)',
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0, 5]},
      size: 1
    });
    board.create('segment', [o, ta], {
      dash: 2, strokeWidth: 1,
    });
    const sb = board.create('point', [0, Math.sin(beta)], {
      name: '\\(\\sin(-440^\\circ)\\)',
      label: {anchorX: 'left', anchorY: 'top', offset: [3, 0]},
      size: 1
    });
    board.create('segment', [sb, b], {
      dash: 2, strokeWidth: 1,
    });
    const cc = board.create('point', [Math.cos(gamma), 0], {
      name: '\\(\\cos(200^\\circ)\\)',
      label: {anchorX: 'left', anchorY: 'bottom', offset: [0, 5]},
      size: 1
    });
    board.create('segment', [cc, c], {
      dash: 2, strokeWidth: 1,
    });
  });
};
render.exoRadians = el => {
  return initBoard(el, battrs, board => {
    const alpha = 7 * Math.PI / 3;
    const o = board.create('point', [0,0]);
    const x = board.create('point', [1,0]);
    board.create('circle', [o, x]);
    const a = board.create('point', [Math.cos(alpha), Math.sin(alpha)]);
    board.create('segment', [o, a]);
    board.create('angle', [x, o, a], {
      name: '\\(\\dfrac{7\\pi}{3}\\)', withLabel: true, radius: 0.2,
      label: {anchorX: 'left', anchorY: 'middle', offset: [4, 4]}
    });
    const beta = -5 * Math.PI / 6;
    const b = board.create('point', [Math.cos(beta), Math.sin(beta)]);
    board.create('segment', [o, b]);
    board.create('angle', [b, o, x], {
      name: '\\(-\\dfrac{5\\pi}{6}\\)', withLabel: true, radius: 0.3,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [3, -5]}
    });
    const gamma = 13 * Math.PI;
    const c = board.create('point', [Math.cos(gamma), Math.sin(gamma)]);
    board.create('segment', [o, c]);
    board.create('angle', [x, o, c], {
      name: '\\(13\\pi\\)', withLabel: true, radius: 0.25,
      label: {anchorX: 'right', anchorY: 'bottom', offset: [0,-15]}
    });
        board.create('line', [[1,0], [1,2]], {
      dash: 3
    });
    const tb = board.create('point', [1, Math.tan(beta)], {
      name: '\\(\\tan(-\\dfrac{5\\pi}{6})\\)',
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0, 5]},
      size: 1
    });
    board.create('segment', [o, tb], {
      dash: 2, strokeWidth: 1,
    });
    const sa = board.create('point', [0, Math.sin(alpha)], {
      name: '\\(\\sin(\\dfrac{7\\pi}{3})\\)',
      label: {anchorX: 'right', anchorY: 'top', offset: [0, 5]},
      size: 1
    });
    board.create('segment', [sa, a], {
      dash: 2, strokeWidth: 1,
    });
    const cc = board.create('point', [Math.cos(gamma), 0], {
      name: '\\(\\cos(13\\pi)\\)',
      label: {anchorX: 'left', anchorY: 'bottom', offset: [5, 0]},
      size: 1
    });
  });
};
</script>

`````{block} solution
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- ```{jsxgraph} exoDegres
  :style: width: 85%; border: none;
  ```
- ```{jsxgraph} exoRadians
  :style: width: 85%; border: none;
  ```
````
{.lower-alpha-paren}
2.
    {.decimal-paren .columns-6}
    1. $1$
    2. $\sim 0.99$
    3. $\sim -0.9$
    4. $\sim 0.6$
    5. $\sim 0.9$
    6. $-1$

`````

### Exercice {num2}`exercice`

Triez les nombres suivants par ordre croissant, en vous aidant du cercle
trigonométrique et sans utiliser la calculatrice.

{.lower-alpha-paren}
1. $\sin(12^\circ)$, $\sin(272^\circ)$, $\sin(60^\circ)$, $\sin(180^\circ)$, $\sin(345^\circ)$
2. $\cos(0)$, $\cos(3)$, $\cos(6)$, $\cos(2)$, $\cos(\pi)$
3. $\tan(30^\circ)$, $\tan(265^\circ)$, $\tan(170^\circ)$, $\tan(60^\circ)$, $\tan(358^\circ)$
4. $\sin\left(\frac{\pi}{2}\right)$, $\sin\left(\frac{\pi}{10}\right)$, $\sin\left(\frac{\pi}{4}\right)$, $\sin\left(\frac{\pi}{5}\right)$, $\sin\left(\frac{\pi}{3}\right)$
5. $\cos(5^\circ)$, $\cos(400^\circ)$, $\cos(190^\circ)$, $\cos(255^\circ)$, $\cos(90^\circ)$


```{block} solution
1. $\sin(272^\circ) < \sin(345^\circ) < \sin(180^\circ) < \sin(12^\circ) < \sin(60^\circ)$
2. $\cos(\pi) < \cos(3) < \cos(2) < \cos(6) < \cos(0)$
3. $\tan(170^\circ) < \tan(358^\circ) < \tan(30^\circ) < \tan(60^\circ) < \tan(265^\circ)$
4. $\sin\left(\frac{\pi}{10}\right) < \sin\left(\frac{\pi}{5}\right) < \sin\left(\frac{\pi}{4}\right) < sin\left(\frac{\pi}{3}\right) < \sin\left(\frac{\pi}{2}\right)$
5. $\cos(190^\circ) < \cos(255^\circ) < \cos(90^\circ) < \cos(400^\circ) < \cos(5^\circ)$
```

### Exercice {num2}`exercice`

En vous aidant du cercle trigonométrique et sans utiliser la calculatrice,
déterminez si les égalités suivantes sont vraies ou fausses.

{.lower-alpha-paren .columns-2}
1. $\sin(30^\circ)=\sin(330^\circ)$
2. $\cos(150^\circ)=\cos(210^\circ)$
3. $\tan(x)=\tan(x+\pi)$
4. $\cos(0)=-\cos(2\pi)$
5. $\sin(170^\circ)=\sin(10^\circ)$
6. $\tan(70^\circ)=\tan(-70^\circ)$
7. $\sin\left(\frac{\pi}{4}\right)=\sin\left(\frac{3\pi}{4}\right)$
8. $\cos(2)=\cos(-2)$

```{block} solution
{.lower-alpha-paren .columns-4}
1. faux
2. vrai
3. vrai
4. faux
5. vrai
6. faux
7. vrai
8. vrai
```

### Exercice {num2}`exercice`

En vous aidant du cercle trigonométrique et sans utiliser la calculatrice,
déterminez si les nombres suivants sont positifs, négatifs ou nuls.

{.lower-alpha-paren .columns-3}
1. $\sin(4)$
2. $\cos(300^\circ)$
3. $\tan(3\pi)$
4. $\sin(-181^\circ)$
5. $\cos(-1)$
6. $\tan(-\frac{\pi}{5})$
7. $\sin(540^\circ)$
8. $\cos(500^\circ)$
9. $\tan(3.5)$

```{block} solution
{.lower-alpha-paren .columns-3}
1. Négatif
2. Positif
3. $0$
4. Positif
5. Positif
6. Négatif
7. $0$
8. Négatif
9. Positif
```

### Exercice {num2}`exercice`

En vous aidant du cercle trigonométrique et sans utiliser la calculatrice,
déterminez si les égalités suivantes sont possibles ou non.

{.lower-alpha-paren .columns-3}
1. $\tan(60^\circ)=1.73$
2. $\cos(345^\circ)=-0.74$
3. $\sin(1.5)=0.13$
4. $\sin(3)=0.052$
5. $\tan(230^\circ)=-1.19$
6. $\cos(89^\circ)=0.017$

```{block} solution
{.lower-alpha-paren}
1. Possible
2. Pas possible, car $\cos(345^\circ)$ est positif
3. Pas possible, car $1.5 \approx \frac{\pi}{2}$ et par conséquent $\sin(1.5) \approx 1$
4. Possible
5. Pas possible, car $\tan(230^\circ)$ est positif
6. Possible
```

### Exercice {num2}`exercice`

À l'aide des symétries dans le cercle trigonométrique, complétez le tableau par
les **valeurs exactes** des fonctions $\sin$, $\cos$ et $\tan$ dans l'intervalle
$\left[0^\circ;360^\circ\right[$.

```{flex-table}
:class: angle
|$\varphi$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$
|$\sin(\varphi)$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$||||
|$\cos(\varphi)$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$||||
|$\tan(\varphi)$ | $0$ |$\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$||||
```
{vspace}`1lh`

```{flex-table}
:class: angle
|$\varphi$ | $180^\circ$ | $210^\circ$ | $225^\circ$ | $240^\circ$ | $270^\circ$ | $300^\circ$ | $315^\circ$ | $330^\circ$
|$\sin(\varphi)$ | | | | ||||
|$\cos(\varphi)$ | | | | ||||
|$\tan(\varphi)$ | | | | ||||
```

````{block} solution
```{flex-table}
:class: angle
|$\varphi$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$
|$\sin(\varphi)$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $\frac{\sqrt{3}}{2}$ |$\frac{\sqrt{2}}{2}$ |  $\frac{1}{2}$
|$\cos(\varphi)$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-\frac{1}{2}$| $-\frac{\sqrt{2}}{2}$ |  $-\frac{\sqrt{3}}{2}$
|$\tan(\varphi)$ | $0$ |$\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | Pas déf. | $-\sqrt{3}$ | $-1$ | $-\frac{\sqrt{3}}{3}$
```
{vspace}`1lh`

```{flex-table}
:class: angle
|$\varphi$ | $180^\circ$ | $210^\circ$ | $225^\circ$ | $240^\circ$ | $270^\circ$ | $300^\circ$ | $315^\circ$ | $330^\circ$
|$\sin(\varphi)$ | $0$ | $-\frac{1}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-1$ | $-\frac{\sqrt{3}}{2}$ |$-\frac{\sqrt{2}}{2}$ | $-\frac{1}{2}$
|$\cos(\varphi)$ | $-1$ | $-\frac{\sqrt{3}}{2}$| $-\frac{\sqrt{2}}{2}$ |$-\frac{1}{2}$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$
|$\tan(\varphi)$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | Pas déf. | $-\sqrt{3}$ | $-1$ | $-\frac{\sqrt{3}}{3}$
```
````

### Exercice {num2}`exercice`

Soit $\sin\left(\frac{\pi}{3}\right) = 0.866$, déterminez les valeurs ci-dessous
en utilisant les symétries dans le cercle trigonométrique et sans utiliser la
calculatrice.

{.lower-alpha-paren .columns-3}
1. $\sin\left(-\frac{\pi}{3}\right)$
2. $\sin\left(\frac{\pi}{3}+2\pi\right)$
3. $\sin\left(\frac{2\pi}{3}\right)$
4. $\sin\left(\frac{4\pi}{3}\right)$
5. $\sin\left(2\pi- \frac{\pi}{3}\right)$
6. $\cos\left(\frac{\pi}{6}\right)$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $\sin\left(-\frac{\pi}{3}\right)=-0.866$
2. $\sin\left(\frac{\pi}{3}+2\pi\right)=0.866$
3. $\sin\left(\frac{2\pi}{3}\right)=0.866$
4. $\sin\left(\frac{4\pi}{3}\right)=-0.866$
5. $\sin\left(2\pi- \frac{\pi}{3}\right)=-0.866$
6. $\cos\left(\frac{\pi}{6}\right)=0.866$
```



## Solutions

```{blocks} solution
:class: allow-break-inside
```
