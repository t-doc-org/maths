% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Trigonométrie dans le triangle rectangle

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/trigo.xopp>`
```

## Théorie

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
    const alpha = board.create('angle', [B, A, C], {name: '\\(\\alpha\\)'});
    const beta = board.create('angle', [C, B, A], {name: '\\(\\beta\\)'});
    const gamma = board.create('angle', [A, C, B], {name: '\\(\\gamma\\)'});
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
    const alpha = board.create('angle', [B, A, C], {name: '\\(\\alpha\\)'});
    const beta = board.create('angle', [C, B, A], {name: '\\(\\beta\\)'});
    const gamma = board.create('angle', [A, C, B], {
      name: '\\(\\gamma\\)', radius: 0.6,
      label: {offset: [-15, -15]}
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
      name: '\\(8\\,cm\\)',
      label: {anchorX: 'middle', offset: [16, 16]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(b\\)',
          label: {anchorX: 'right', anchorY: 'top', offset: [0, 0]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(a\\)',
      label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const alpha = board.create('angle', [A, C, B], {
      radius: 0.6, withLabel: false,
    });
    const beta = board.create('angle', [C, B, A], {name: '\\(\\beta\\)'});
    const gamma = board.create('angle', [B, A, C], {name: '\\(27^\\circ\\)'});
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
      name: '\\(A\\)', label: {anchorX: 'right', offset: [-6, 0]}
    });
    const c = board.create('segment', [A, B], {
      name: '\\(7.6\\,cm\\)',
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const b = board.create('segment', [A, C], {
        name: '\\(3.4\\,cm\\)', label: {anchorX: 'right', offset: [-8, 0]}
    });
    const a = board.create('segment', [B, C], {
      name: '\\(a\\)',
        label: {anchorX: 'right', anchorY: 'middle', offset: [10, 10]}
    });
    const gamma = board.create('angle', [A, C, B], {name: '\\(\\gamma\\)'});
    const beta = board.create('angle', [C, B, A], {name: '\\(\\beta\\)'});
    const alpha = board.create('angle', [B, A, C], {
      radius: 0.6, withLabel: false,
    });
  });
};
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

````{list-grid} 5fr 3fr
-   Dans un triangle rectangle en $C$, $\alpha = 27^\circ$ et $c = 8$ cm.\
    Résolvez ce triangle.

    La somme des angles d'un triangle vaut $180^\circ$:

    $\beta = 180^\circ - 90^\circ - 27^\circ = 63^\circ$
-   ```{jsxgraph} triangleRectangleC
    :style: width: 100%; border: none;
    ```
````
En utilisant la trigonométrie dans le triangle rectangle:

$\sin(\alpha) = \dfrac{\text{opp}}{\text{adj}} \implies \sin(27^\circ) = \dfrac{a}{8} \implies a = 8 \cdot \sin(27^\circ) \simeq 3.6$ cm

$\cos(\alpha) = \dfrac{\text{adj}}{\text{hyp}} \implies \cos(27^\circ) = \dfrac{b}{8} \implies b = 8 \cdot \cos(27^\circ) \simeq 7.1$ cm

Remarque: Le côté $b$ peut aussi être calculé par Pythagore.
`````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-trigo-ex1>` (les 3 premiers)
```

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid} 5fr 3fr
-   Dans un triangle rectangle en $A$, $b =3.4$ cm et $c = 7.6$ cm.<br>
    Résolvez ce triangle.

    Par Pythagore:

    $b = \sqrt{b^2 + c^2} = \sqrt{3.4^2 + 7.6^2} = \sqrt{11.56 + 57.76} = \sqrt{69.32} \simeq 8.3$ cm
-   ```{jsxgraph} triangleRectangleA
    :style: width: 100%; border: none;
    ```
````
En utilisant la trigonométrie dans le triangle rectangle:

$\tan(\beta) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\beta) = \dfrac{3.4}{7.6} = \dfrac{17}{38} \implies \beta = \tan^{-1}\left(\dfrac{17}{38}\right) \simeq 24.1^\circ$

$\tan(\gamma) = \dfrac{\text{opp}}{\text{adj}} \implies \tan(\gamma) = \dfrac{7.6}{3.4} = \dfrac{38}{17} \implies \gamma = \tan^{-1}\left(\dfrac{38}{17}\right) \simeq 65.9^\circ$

Remarque: L'angle $\gamma$ peut aussi être calculé en utilisant que la somme des
angles d'un triangle vaut $180^\circ$.
`````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-trigo-ex1>` (les 3 derniers),
{numref}`exercice %s<exercice:1-trigo-ex2>`
{numref}`exercice %s<exercice:1-trigo-ex3>`
{numref}`exercice %s<exercice:1-trigo-ex4>`,
{numref}`exercice %s<exercice:1-trigo-ex5>`,
{numref}`exercice %s<exercice:1-trigo-ex6>`,
{numref}`exercice %s<exercice:1-trigo-ex7>`,
{numref}`exercice %s<exercice:1-trigo-ex8>`,
{numref}`exercice %s<exercice:1-trigo-ex9>` et
{numref}`exercice %s<exercice:1-trigo-ex10>`
```


## Exercices

### Exercice {num2}`exercice:1-trigo-ex1`

Soit un triangle rectangle en $C$, faites un schéma de la situation et complétez
le tableau.

<style>
.table.reset-print.longueur {
  table-layout: fixed;
}
@media print {
  .table.reset-print.longueur :is(th, td) {
    border-width: 1px;
    padding: 0.1rem;
  }
  .table.reset-print.longueur th {
    border-bottom-width: 2px;
  }
}
</style>

{.reset-print .longueur}
| $\alpha$ | $\beta$ | $a$ | $b$ | $c$ |
| :--: | :--: | :--: | :--: | :--: |
| $35^{\circ}$ | | $10$ | | |
| | $10^{\circ}$ | $15$ | | |
| $70^{\circ}$ | | | | $8$ |
| | | $3$ | $4$ | |
| | $100^{\circ}$ | | $5$ | |
| | | $8$ | | $10$ |

```{block} solution
{.reset-print .longueur}
| $\alpha$ | $\beta$ | $a$ | $b$ | $c$ |
| :--: | :--: | :--: | :--: | :--: |
|  |$55^{\circ}$ | | $14.28$ | $17.43$ |
| $80^{\circ}$| | | $2.64$ | $15.23$ |
| | $20^{\circ}$ | $7.52$ | $2.74$ | |
| $36.87^{\circ}$ | $53.13^{\circ}$ | | | $5$ |
| - |  | - |  | - |
| $53.13^{\circ}$ | $36.87^{\circ}$ | | $6$ | |
```

### Exercice {num2}`exercice:1-trigo-ex2`

Dans chacune des situations suivantes, déterminez l'aire du parallélogramme
$ABCD$ sachant que:

{.lower-alpha-paren}
1. $AB=118\,cm$, $AD=72\,cm$ et $\widehat{BAD}=26.5^{\circ}$.
2. $AB=57\,cm$, $AD=66\,cm$ et $\widehat{BAD}=61.4^{\circ}$.

```{block} solution
{.lower-alpha-paren}
1. $3\,790.9\,cm^2$
2. $3\,303\,cm^2$
```

### Exercice {num2}`exercice:1-trigo-ex3`

Un téléski d'une longueur de $900$ m possède un dénivelé de $230$ m. Quel est
l'angle d'élévation moyen de ce téléski?

```{block} solution
L'angle d'élévation moyen est de $14.8^{\circ}$.
```

### Exercice {num2}`exercice:1-trigo-ex4`

Au bord d'une route, un panneau indique une pente de $18\%$.

{.lower-alpha-paren}
1. Que signifie une pente de $18\%$?
2. Quel est l'angle d'élévation de cette route?
3. Quel est le dénivelé si nous roulons $1$ km sur cette route?

```{block} solution
{.lower-alpha-paren}
1.  Pour une distance horizontale de 100, le dénivelé (distance verticale) est de
    18.

{.lower-alpha-paren .columns-2}
2.  L'angle est de $10.2^{\circ}$
3.  Le dénivelé est de $177$ m.
```

### Exercice {num2}`exercice:1-trigo-ex5`

Une station météo fait monter un ballon pour des mesures météorologiques. Un
observateur, qui se trouve à $800$ m de la station, voit le ballon sous un angle
de $49^{\circ}$ (supposons la hauteur des yeux au niveau du sol). À quelle
hauteur se trouve le ballon météorologique?

```{block} solution
Le ballon se trouve à $920.3$ m.
```

### Exercice {num2}`exercice:1-trigo-ex6`

Un arbre d'une hauteur de $19$ m se trouve dans un pré. Quelle est la longueur
de son ombre, si les rayons du soleil forment à ce moment un angle de
$15^{\circ}$ avec le sol (supposé horizontal)?

```{block} solution
L'ombre fait $70.9$ m.
```

### Exercice {num2}`exercice:1-trigo-ex7`

Une personne se trouve à $30$ m d'un bâtiment. L'angle entre le regard vers le
pied du bâtiment et le regard vers le point le plus élevé du bâtiment vaut
$54^{\circ}$. Les yeux de cette personne se trouvent à une hauteur de $1.58\,m$.
Quelle est la hauteur du bâtiment?

```{block} solution
Le bâtiment fait $38.6$ m de haut.
```

### Exercice {num2}`exercice:1-trigo-ex8`

Calculez l'aire du triangle $ABC$ sachant que $\alpha = 36^\circ$, $b = 7\,cm$
et $c = 15\,cm$.

```{block} solution
$66.13\,cm^2$
```

### Exercice {num2}`exercice:1-trigo-ex9`

Le cercle inscrit d'un octogone régulier possède un rayon de $10$ cm. Déterminer
l'aire et le périmètre de cet octogone.

```{block} solution
$P=66.27\,cm$ et $A=331.4\,cm^2$
```

### Exercice {num2}`exercice:1-trigo-ex10`

Le côté de la base carrée de la grande pyramide d'Egypte vaut $230$ m, les faces
triangulaires de la pyramide forment avec la base un angle de $51.9^{\circ}$.

{.lower-alpha-paren}
1. Déterminez la hauteur $h$ de la pyramide.
2. Déterminez l'angle $\beta$ entre une arrête montante et la base.
3. Déterminez la longueur $s$ d'une arrête montante.
4. Déterminez le volume de la pyramide.

```{block} solution
{.lower-alpha-paren .columns-4}
1. $h=146.7$ m.
2. $\beta=42^{\circ}$.
3. $s=219$ m.
4. $v = 2\,586\,192\,m^3$.
```

### Challenge {nump}`challenge`

Sur un phare se trouvent deux marquages. Le premier se trouve à $7\,m$ en
dessous du deuxième. Depuis un bateau, l'angle l'horizontale et la 1ère marque
est de $2.6^{\circ}$ et celui entre l'horizontale et la 2e marque est de
$3.7^{\circ}$. À quelle distance du phare se trouve le bateau?


```{solution}
Le bateau se trouve à $363.5$ m du phare.
```

### Challenge {nump}`challenge`

Depuis un avion se trouvant à $9\,500$ m, nous voyons la piste d'atterrissage
sous un angle de $16.3^{\circ}$ (mesuré par rapport à l'horizon), une minute
plus tard l'avion se trouve toujours à $9500$ m et nous voyons la piste sous un
angle de $27.2^{\circ}$. Quelle est la vitesse de cet avion?


```{solution}
La vitesse est de env. $840 \, \frac{km}{h}$.
```




## Solutions

```{blocks} solution
:class: allow-break-inside
```

