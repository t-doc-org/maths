% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Trigonométrie - Révisions

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

### Trigonométrie dans le triangle rectangle

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

````{container} frame noprint
# Exemple {num2}`exemple`

```{jsxgraph} triangleRectangle
:style: width: 50%; border: none;
```

Le triangle $ABC$ est rectangle en $C$, $\gamma = 90^\circ$. Les côtés $a$ et
$b$ sont les **cathètes** et le côté $c$ est l'**hypoténuse**.

Par rapport à l'angle $\alpha$, $a$ est le côté opposé, $b$ est le côté adjacent
et $c$ est l'hypoténuse.

Par rapport à l'angle $\beta$, $b$ est le côté opposé, $a$ est le côté adjacent
et $c$ est l'hypoténuse.
````

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

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Dans un triangle rectangle en $C$, $c = 30$ cm et $a =18$ cm.<br>
    Résolvez ce triangle.

    Par Pythagore:

    $b = \sqrt{c^2 - a^2} = \sqrt{30^2 - 18^2} = \sqrt{900 - 324} = \sqrt{576} = 24$ cm
-   ```{jsxgraph} triangleRectangleC
    :style: width: 100%; border: none;
    ```
````
En utilisant la trigonométrie dans le triangle rectangle:

$\sin(\alpha) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(\alpha) = \dfrac{18}{30} = \dfrac{3}{5} \implies \alpha = \sin^{-1}\left(\dfrac{3}{5}\right) \simeq 36.87^\circ$

$\sin(\beta) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(\beta) = \dfrac{24}{30} = \dfrac{4}{5} \implies \beta = \sin^{-1}\left(\dfrac{4}{5}\right) \simeq 53.13^\circ$

Remarque: L'angle $\beta$ peut aussi être calculé en utilisant que la somme des
angles d'un triangle vaut $180^\circ$.
`````

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Dans un triangle rectangle en $A$, $\gamma = 30^\circ$ et $b = 18$ cm.\
    Résolvez ce triangle.

    La somme des angles d'un triangle vaut $180^\circ$:

    $\beta = 180^\circ - 90^\circ - 30^\circ = 60^\circ$
-   ```{jsxgraph} triangleRectangleA
    :style: width: 100%; border: none;
    ```
````
En utilisant la trigonométrie dans le triangle rectangle:

$\tan(\gamma) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(30^\circ) = \dfrac{c}{18} \implies c = 18 \cdot \tan(30^\circ)= 6\sqrt{3} = 10.39$ cm

$\cos(\gamma) = \dfrac{\text{adj}}{\text{hyp}} \implies \cos(30^\circ) = \dfrac{18}{a} \implies a = \dfrac{18}{\cos(30^\circ)}= 20.78$ cm

Remarque: Le côté $a$ peut aussi être calculé par Pythagore.
`````

<!-- Deux autres exemples

```{container} frame noprint
# Exemple {num2}`exemple`

Dans un triangle rectangle en $C$, $\alpha = 28^\circ$ et $c = 8$ cm.\
Résolvez ce triangle.

La somme des angles d'un triangle vaut $180^\circ$:

$\beta = 180^\circ - 90^\circ - 27^\circ = 63^\circ$

En utilisant la trigonométrie dans le triangle rectangle:

$\sin(\alpha) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(27^\circ) = \dfrac{a}{8} \implies a = 8 \cdot \sin(27^\circ)= 3.63$ cm

$\cos(\alpha) = \dfrac{\text{adj}}{\text{hyp}} \implies \cos(27^\circ) = \dfrac{b}{8} \implies b = 8 \cdot \cos(27^\circ)= 7.13$ cm
```

```{container} frame noprint
# Exemple {num2}`exemple`

Dans un triangle rectangle en $C$, $a = 3.4$ cm et $b = 7.6$ cm.\
Résolvez ce triangle.

En utilisant la trigonométrie dans le triangle rectangle:

$\tan(\alpha) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\alpha) = \dfrac{3.4}{7.6} \implies \alpha = \tan^{-1}\left(\dfrac{3.4}{7.5}\right)= 24.1^\circ$

$\tan(\beta) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\beta) = \dfrac{7.6}{3.4} \implies \beta = \tan^{-1}\left(\dfrac{7.6}{3.4}\right)= 65.9^\circ$

$\sin(\alpha) = \dfrac{\text{opp}}{\text{hyp}} \implies \sin(24.1^\circ) = \dfrac{3.4}{c} \implies c = \dfrac{3.4}{\sin(24.1^\circ)}= 8.33$ cm

Remarque: Le côté $c$ peut aussi être calculé avec le théorème de Pythagore.
``` -->

````{container} noprint
# Vidéos

```{youtube} DfgUYXB5_jg
```

```{youtube} 4cWj2-ko6lQ
```

# Exercices supplémentaires

[Série d'exercices supplémentaires](gomaths-trigo.pdf)

générer une nouvelle série d'exercices: [Cliquez ici!](<https://gomaths.edu-vd.ch/print/print_trigo.php?find=3&nb_calcul=10>)

source: (<https://gomaths.edu-vd.ch>)
````

### Rapports trigonométriques des angles remarquables

`````{container} noprint
# Démonstration - Triangle rectangle isocèle

````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Par Pythagore: $c^2 = x^2 + x^2 = 2x^2 \implies c = \sqrt{2x^2} = x\sqrt{2}$

    $\sin(45^\circ) = \dfrac{x}{c} = \dfrac{x}{x\sqrt{2}} = \dfrac{1}{\sqrt{2}}= \dfrac{\sqrt{2}}{2}$

    $\cos(45^\circ) = \dfrac{x}{x\sqrt{2}} = \dfrac{\sqrt{2}}{2}$

    $\tan(45^\circ) = \dfrac{x}{x} = 1$
-   ```{jsxgraph} triangleIsoRect
    :style: width: 80%; border: none;
    ```
````
`````

`````{container} noprint
# Démonstration - Demi-triangle équilatéral

````{list-grid}
:style: grid-template-columns: 5fr 3fr;
-   Par Pythagore: $h^2 = x^2 - \left(\dfrac{x}{2} \right)^2 = x^2 - \dfrac{x^2}{4} = \dfrac{3x^2}{4} \implies h = x \dfrac{\sqrt{3}}{2}$

    $\sin(30^\circ) = \dfrac{\frac{x}{2}}{x} = \dfrac{1}{2}$

    $\cos(30^\circ) = \dfrac{h}{x} = \dfrac{x\frac{\sqrt{3}}{2}}{x} = \dfrac{\sqrt{3}}{2}$

    $\tan(30^\circ) = \dfrac{\frac{x}{2}}{h} = \dfrac{\frac{x}{2}}{x\frac{\sqrt{3}}{2}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$

    $\sin(60^\circ) = \dfrac{h}{x} = \dfrac{x\frac{\sqrt{3}}{2}}{x} = \dfrac{\sqrt{3}}{2}$

    $\cos(60^\circ) = \dfrac{\frac{x}{2}}{x}= \dfrac{1}{2}$

    $\tan(60^\circ) = \dfrac{h}{\frac{x}{2}} = \dfrac{x\frac{\sqrt{3}}{2}}{\frac{x}{2}} = \sqrt{3}$
-   ```{jsxgraph} triangleEqui
    :style: width: 100%; border: none;
    ```
````
`````

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

## Exercices


### Exercice {num2}`exercice`

Résolvez les triangles $ABC$ suivants, rectangles en $C$ (arrondis au centième).

{.lower-alpha-paren}
1.  $a= 3.2\,\text{cm}$, $b=6.5\,\text{cm}$
2.  $\alpha=63.5^\circ$, $c=10\,\text{cm}$
3.  $b=4.4\,\text{cm}$, $\beta= 40^\circ$
4.  $a=15.7$ cm, $\beta=12.3^\circ$

```{block} solution
{.lower-alpha-paren}
1.  $c=7.24\,\text{cm}$, $\alpha=26.21^\circ$, $\beta=63.79^\circ$
2.  $\beta=26.5^\circ$, $a=8.95\,\text{cm}$, $b=4.46\,\text{cm}$
3.  $\alpha=50^\circ$, $c=6.85\,\text{cm}$, $a=5.24\,\text{cm}$
4.  $\alpha=77.7^\circ$, $c=16.07\,\text{cm}$, $b=3.42\,\text{cm}$
```

### Exercice {num2}`exercice`

La longueur de l'hypoténuse d'un triangle rectangle vaut $6.2\, \text{cm}$ et un
de ses angles $27^\circ$. Déterminez la longueur de ses cathètes.


```{block} solution
$a = 2.81\, \text{cm}$ et $b = 5.52\, \text{cm}$.
```

### Exercice {num2}`exercice`

Un triangle isocèle a une base de $51.8\, m$ et une aire de
$130 \, m^2$. Calculez les angles de ce triangle.


```{block} solution
Deux angles de $11^\circ$ et un de $158^\circ$.
```

### Exercice {num2}`exercice`

````{list-grid}
:style: grid-template-columns:3fr 1fr;
-   Une pente de $x\,\%$ indiquée sur un panneau de signalisation routière
    signifie que la dénivellation de la route vaut $x$ mètres pour une distance
    horizontale de $100 \, m$. Déterminez pour chacune des pentes en $\%$
    suivantes l'angle d'élévation.

    {.lower-alpha-paren .columns-4}
    1.  $10 \%$
    2.  $20 \%$
    3.  $50 \%$
    4.  $100 \%$
-   ```{figure} images/panneau.svg
    :alt: Système d'exploitation
    :width: 100%
    ```
````

```{block} solution
{.lower-alpha-paren .columns-4}
1.  $5.71^\circ$
2.  $11.31^\circ$
3.  $26.57^\circ$
4.  $45^\circ$
```

### Exercice {num2}`exercice`

Pour les angles d'élévation suivants, déterminez la pente en $\%$.

{.lower-alpha-paren .columns-4}
1.  $10^\circ$
2.  $20^\circ$
3.  $60^\circ$
4.  $85^\circ$


```{block} solution
{.lower-alpha-paren .columns-4}
1.  $17.6 \%$
2.  $36.4 \%$
3.  $173.2 \%$
4.  $1143 \%$
```

### Exercice {num2}`exercice`

Calculer l'angle $\varphi$ dans le parallélipipède rectangle ci-dessous.

```{jsxgraph} angle
:style: width: 50%; border: none;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.angle = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-1, 3, 6, -0.5],
    axis: false, grid: false,
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
      point: {size: 0},
      angle: {
        strokeWidth: 1, strokeColor: JXG.palette.black,
        fillColor: JXG.palette.black, fillOpacity: 0.2,
        label: {strokeColor: JXG.palette.black},
      },
    },
  }], board => {
    const a = 4, b = 1.6, c = 3;
    function proj(x, y, z) {
      return [x + 0.5 * z, y + 0.3 * z];
    }
    const A = board.create('point', proj(a, 0, 0));
    const B = board.create('point', proj(a, b, 0));
    const C = board.create('point', proj(0, b, 0));
    const D = board.create('point', proj(0, 0, 0));
    const E = board.create('point', proj(a, 0, c));
    const F = board.create('point', proj(a, b, c));
    const G = board.create('point', proj(0, b, c));
    const H = board.create('point', proj(0, 0, c));

    board.create('segment', [D, H], {dash: 2});
    board.create('segment', [E, H], {dash: 2});
    board.create('segment', [G, H], {dash: 2});
    board.create('segment', [A, B]);
    board.create('segment', [B, C]);
    board.create('segment', [C, D]);
    board.create('segment', [D, A], {name: '\\(13\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY:'top',offset: [0, 0]}});
    board.create('segment', [A, E]);
    board.create('segment', [B, F]);
    board.create('segment', [E, F], {name: '\\(5\\)', withLabel: true,
      label: {anchorX: 'left', anchorY:'middle', offset: [5, 0]}});
    board.create('segment', [G, F]);
    board.create('segment', [C, G], {name: '\\(12\\)', withLabel: true,
      label: {anchorX: 'right', anchorY:'middle', offset: [-5, 5]}});

    board.create('segment', [H, A], {strokeWidth: 1});
    board.create('segment', [G, A], {strokeWidth: 1});

    board.create('angle', [G, A, H], {
      name: '\\(\\varphi\\)', withLabel: true,
      label: {anchorX: 'middle', offset: [5, -15]}
    });
  });
};
</script>

```{block} solution
$\varphi = 15.78^\circ$
```

### Exercice {num2}`exercice`

Un triangle isocèle a une base de $10\, cm$ et un angle au sommet de
$130^\circ$. Déterminez les trois angles obtenus au sommet en divisant la base
en trois parties égales grâce à deux points et en reliant ces points avec le
sommet du triangle.

```{block} solution
$29.44^\circ$, $71.12^\circ$, $29.44^\circ$
```

### Exercice {num2}`exercice`

La hauteur d'une falaise peut être déterminée à l'aide d'un segment
$\overline{AB}$ de longueur connue, orienté en direction de la falaise. La
distance entre les points $A$ et $B$ vaut $120 \, m$ et les angles d'élévation,
mesurés à l'aide d'un théodolite, valent $\alpha=35^\circ$ et $\beta=60^\circ$.
Calculez la hauteur $h$ de la falaise en posant et résolvant deux équations à
deux inconnues.

```{jsxgraph} falaise
:style: width: 70%; border: none;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.falaise = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-1, 6, 11, -0.5],
    axis: false, grid: false,
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
      point: {
        size: 0, withLabel: true,
        label: {anchorX: 'middle', anchorY:'top' ,offset: [0, 0]},
      },
      angle: {
        strokeWidth: 1, strokeColor: JXG.palette.black,
        fillColor: JXG.palette.black, fillOpacity: 0.2,
        label: {strokeColor: JXG.palette.black},
      },
    },
  }], board => {
    const O = board.create('point', [0, 0]);
    const A = board.create('point', [10, 0], {name: '\\(A\\)', withLabel: true});
    const B = board.create('point', [6, 0], {name: '\\(B\\)', withLabel: true});
    const C = board.create('point', [0, 5]);

    board.create('segment', [O, B], {dash: 3});
    board.create('segment', [O, C], {dash: 3, name: '\\(h\\)', withLabel: true,
      label: {anchorX: 'right', anchorY:'middle',offset: [-5, 0]}});
    board.create('segment', [B, A]);
    board.create('segment', [B, C]);
    board.create('segment', [A, C]);

    board.create('angle', [C, A, B], {
      name: '\\(\\alpha\\)', withLabel: true,
      label: {anchorX: 'middle', offset: [5, -10]}
    });
    board.create('angle', [C, B, O], {
        name: '\\(\\beta\\)', withLabel: true,
        label: {anchorX: 'middle', offset: [5, -15]}
    });
    board.create('angle', [B, O, C], {
      fillColor: JXG.palette.white, withLabel: false, radius: 0.4,
    });
  });
};
</script>

```{block} solution
$h = 141\, m$
```

### Challenge

Calculez les angles intérieurs du cerf-volant ci-dessous, sachant que
$\overline{AB} = 7\,cm$, $\overline{CD} = 5\,cm$ et $\overline{BD} = 7\,cm$.

```{jsxgraph} cerfVolant
:style: width: 50%; border: none;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.cerfVolant = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-10, 6, 6, -6],
    axis: false, grid: false,
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
      point: {size: 0, withLabel: true},
      angle: {
        strokeWidth: 1, strokeColor: JXG.palette.black,
        fillColor: JXG.palette.black, fillOpacity: 0.2,
        label: {strokeColor: JXG.palette.black},
      },
    },
  }], board => {
    const A = board.create('point', [-9, 0], {name: '\\(A\\)', withLabel: true,
      label: {anchorX: 'right', anchorY:'middle' ,offset: [-5, 0]}});
    const B = board.create('point', [0, -5], {name: '\\(B\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY:'top' ,offset: [0, 0]}});
    const C = board.create('point', [5, 0], {name: '\\(C\\)', withLabel: true,
      label: {anchorX: 'left', anchorY:'middle' ,offset: [5, 0]}});
    const D = board.create('point', [0, 5], {name: '\\(D\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY:'bottom' ,offset: [0, 0]}});

    board.create('segment', [A, B]);
    board.create('segment', [B, C]);
    board.create('segment', [C, D]);
    board.create('segment', [D, A]);
    board.create('segment', [A, C], {strokeWidth: 1});
    board.create('segment', [D, B], {strokeWidth: 1});
  });
};
</script>

```{solution}
$\alpha = 60^\circ$, $\beta = \delta = 105.57^\circ$ et $\gamma = 88.85^\circ$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```

<script type="module">
const {attrs, initBoard, render} = await tdoc.import('jsxgraph.js');
attrs.page = [attrs.screen, attrs.nonInteractive, {
  axis: false, grid: false,
  defaults: {
    point: {size: 0, withLabel: false, label: {anchorY: 'top'}},
    segment: {strokeWidth: 2, strokeColor: JXG.palette.black},
    angle: {
      strokeWidth: 1, strokeColor: JXG.palette.black,
      fillColor: JXG.palette.black, fillOpacity: 0.2,
      label: {strokeColor: JXG.palette.black},
    },
  },
}];
const withLabels = {
  defaults: {
    point: {withLabel: true},
    segment: {withLabel: true},
    angle: {withLabel: true},
  },
};
render.triangle = el => {
  return initBoard(el, [attrs.page, withLabels, {
    boundingBox: [-3.5, 3.5, 3.5, -0.5],
  }], board => {
    const A = board.create('point', [-3, 0], {
      name: '\\(A\\)', label: {anchorX: 'right', offset: [-8, 0]}
    });
    const B = board.create('point', [3, 0], {
      name: '\\(B\\)', label: {anchorX: 'left', offset: [4, 0]}
    });
    const C = board.create('point', [1, 3], {
      name: '\\(C\\)', label: {anchorX: 'middle', offset: [0, 24]}
    });
    const c = board.create('segment', [A, B], {
      name: '\\(c\\)', label: {anchorX: 'right', offset: [0, -8]}
    });
    const b = board.create('segment', [A, C], {
      name: '\\(b\\)', label: {anchorX: 'right', offset: [-8, 8]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(a\\)', label: {anchorX: 'left', offset: [8, 8]}
    });
    const alpha = board.create('angle', [B, A, C], {
      name: '\\(\\alpha\\)', label: {anchorX: 'middle', offset: [-28, -6]}
    });
    const beta = board.create('angle', [C, B, A], {
      name: '\\(\\beta\\)', label: {anchorX: 'middle', offset: [30, -26]}
    });
    const gamma = board.create('angle', [A, C, B], {
      name: '\\(\\gamma\\)', label: {anchorX: 'middle', offset: [4, 24]}
    });
  });
};
render.triangleRectangle = el => {
  return initBoard(el, [attrs.page, withLabels, {
    boundingBox: [-3.5, 3.5, 3.5, -0.5],
  }], board => {
    const A = board.create('point', [3, 0], {
      name: '\\(A\\)', label: {anchorX: 'left', offset: [4, 0]}
    });
    const B = board.create('point', [-1, 3], {
      name: '\\(B\\)', label: {anchorX: 'middle', offset: [0, 24]}
    });
    const C = board.create('point', [-1, 0], {
      name: '\\(C\\)', label: {anchorX: 'right', offset: [-12, 0]}
    });
    const c = board.create('segment', [A, B], {
      name: '\\(c\\)',
      label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(b\\)', label: {anchorX: 'right', offset: [0, -12]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(a\\)',
      label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const alpha = board.create('angle', [B, A, C], {
      name: '\\(\\alpha\\)', label: {anchorX: 'middle', offset: [25, -16]}
    });
    const beta = board.create('angle', [C, B, A], {
      name: '\\(\\beta\\)', label: {anchorX: 'middle', offset: [-18, 32]}
    });
    const gamma = board.create('angle', [A, C, B], {
      name: '\\(\\gamma\\)', radius: 0.6,
      label: {anchorX: 'middle', offset: [-15, -15]}
    });
  });
};
render.triangleRectangleC = el => {
  return initBoard(el, [attrs.page, withLabels, {
    boundingBox: [-3.5, 3.5, 3.5, -0.5],
  }], board => {
    const A = board.create('point', [3, 0], {
      name: '\\(A\\)', label: {anchorX: 'left', offset: [4, 0]}
    });
    const B = board.create('point', [-1, 3], {
      name: '\\(B\\)', label: {anchorX: 'middle', offset: [0, 24]}
    });
    const C = board.create('point', [-1, 0], {
      name: '\\(C\\)', label: {anchorX: 'right', offset: [-12, 0]}
    });
    const c = board.create('segment', [A, B], {
      name: '\\(30\\,cm\\)',
      label: {anchorX: 'middle', anchorY: 'middle', offset: [22, 8]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(b\\)', label: {anchorX: 'right', offset: [0, -12]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(18\\,cm\\)',
        label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const alpha = board.create('angle', [B, A, C], {
      name: '\\(\\alpha\\)', label: {anchorX: 'middle', offset: [25, -16]}
    });
    const beta = board.create('angle', [C, B, A], {
      name: '\\(\\beta\\)', label: {anchorX: 'middle', offset: [-18, 32]}
    });
    const gamma = board.create('angle', [A, C, B], {
      name: '\\(90^\\circ\\)', radius: 0.6,
      label: {anchorX: 'middle', offset: [-15, -15]}
    });
  });
};
render.triangleRectangleA = el => {
  return initBoard(el, [attrs.page, withLabels, {
    boundingBox: [-3.5, 3.5, 3.5, -0.5],
  }], board => {
    const B = board.create('point', [3, 0], {
      name: '\\(B\\)', label: {anchorX: 'left', offset: [4, 0]}
    });
    const C = board.create('point', [-1, 3], {
      name: '\\(C\\)', label: {anchorX: 'middle', offset: [0, 24]}
    });
    const A = board.create('point', [-1, 0], {
      name: '\\(A\\)', label: {anchorX: 'right', offset: [-12, 0]}
    });
    const c = board.create('segment', [A, B], {
      name: '\\(c\\)',
      label: {anchorX: 'right', offset: [0, -12]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(18\\,cm\\)',
          label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(a\\)',
      label: {anchorX: 'middle', anchorY: 'middle', offset: [22, 8]}
    });
    const alpha = board.create('angle', [B, A, C], {
      name: '\\(90^\\circ\\)',  radius: 0.6,
        label: {anchorX: 'middle', offset: [-15, -15]}
    });
    const beta = board.create('angle', [C, B, A], {
      name: '\\(\\beta\\)', label: {anchorX: 'middle', offset: [25, -20]}
    });
    const gamma = board.create('angle', [A, C, B], {
      name: '\\(30^\\circ\\)', label: {anchorX: 'middle', offset: [-12, 25]}
    });
  });
};
</script>

<script type="module">
const {attrs, initBoard, render} = await tdoc.import('jsxgraph.js');
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
      name: '\\(c\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [8, 8]},
    });
    board.create('segment', [B, C], {dash: 3});
    board.create('segment', [C, D], {dash: 3});
    board.create('angle', [D, B, A], {
      name: '\\(45^\\circ\\)', radius: 0.6, withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle'},
    });
    board.create('angle', [A, D, B], {
      name: '\\(45^\\circ\\)', radius: 0.6, withLabel: true,
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
</script>

<script type="module">
const {attrs, initBoard, render} = await tdoc.import('jsxgraph.js');
render.triangleEqui = el => {
  return initBoard(el, [attrs.page, {
    boundingBox: [-0.5, 4.5, 4.5, -1],
  }], board => {
    const A = board.create('point', [0, 0]);
    const B = board.create('point', [4, 0]);
    const C = board.create('point', [2, 4 * Math.sqrt(3) /2 ]);
    const D = board.create('point', [2, 0]);
    board.create('segment', [A,C], {
      name: '\\(x\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [-8, 8]},
    });
    board.create('segment', [A, D], {
      name: '\\(\\frac{x}{2}\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
    });
    board.create('segment', [C, D], {
      name: '\\(h\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [8, 0]},
    });
    board.create('segment', [D, B], {dash: 3});
    board.create('segment', [B, C], {dash: 3});
    board.create('angle', [D, A, C], {
      name: '\\(60^\\circ\\)', radius: 0.6, withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle'},
    });
    board.create('angle', [A, C, D], {
      name: '\\(30^\\circ\\)', radius: 0.6, withLabel: true,
      label: {anchorX: 'middle', anchorY: 'middle', offset: [0.5, -6]},
    });
    board.create('angle', [C, D, A], {
      radius: 0.4, fillOpacity: 0,  withLabel: false,
    });
  });
};
</script>
