% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Théorèmes métriques

<!-- ```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/thm-metriques.xopp>`
```
 -->
## Théorie

`````{admonition} Droites remarquables d'un triangle
:class: note
# Les médianes
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Les médianes sont les segments qui relient un sommet et le milieu du côté
  opposé à ce sommet.

  Le point d'intersection des médianes d'un triangle est le **centre de
  gravité**.
- ```{figure} images/medianes.png
  :width: 90%
  ```
````
# Les médiatrices
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Les médiatrices sont les droites perpendiculaires aux côtés qui passent par
  leur milieu.

  Le point d'intersection des médiatrices d'un triangle est le **centre du
  cercle circonscrit**.
- ```{figure} images/mediatrices.png
  :width: 90%
  ```
````
# Les bissectrices
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Les bissectrices sont les droites qui passent par les sommets et qui coupent
  les angles du triangle en deux angles isométriques.

  Le point d'intersection des bissectrices d'un triangle est le **centre du
  cercle inscrit**.
- ```{figure} images/bissectrices.png
  :width: 90%
  ```
````
# Les hauteurs
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Les hauteurs sont les segments qui relient un sommet au côté opposé, et qui
  sont perpendiculaires à ce côté opposé.
- ```{figure} images/hauteurs.png
  :width: 90%
  ```
````
`````

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
    boundingBox: [-3.5, 4, 3.5, -0.5],
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
      name: 'hypoténuse',
      label: {anchorX: 'left', anchorY: 'middle', offset: [8, 8]}
    });
    const b = board.create('segment', [A, C], {
        name: 'cathète', label: {anchorX: 'middle', offset: [0, -12]}
    });
    const a = board.create('segment', [B, C], {
      name: 'cathète',
      label: {anchorX: 'right', anchorY: 'middle', offset: [-8, 0]}
    });
    const gamma = board.create('angle', [A, C, B], {radius: 0.6, withLabel: false});
  });
};
render.pythagore = el => {
  return initBoard(el, [attrs.page, withLabels, {
    boundingBox: [-3.5, 4, 3.5, -0.5],
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
    const gamma = board.create('angle', [A, C, B], {
      withLabel: false, radius: 0.6,
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

````{admonition} Propriétés
:class: note
- La somme des angles d'un triangle vaut toujours $180^{\circ}$:
  ```{math}
  :class: align-center
  \alpha + \beta + \gamma = 180^{\circ}
  ```
- Dans un triangle, la somme des longueurs de deux côtés est toujours supérieure
  à la longueur du troisième côté.
- Pour déterminer l'aire $A$ d'un triangle, il faut connaître la longueur d'un
  côté ainsi que la hauteur correspondante:
  ```{math}
  :class: align-center
  A = \frac{a\cdot h_a}{2} = \frac{b \cdot h_b}{2} = \frac{c\cdot h_c}{2}
  ```
- Deux triangles qui ont des angles isométriques sont des **triangles
  semblables**.
````

`````{admonition} Définition
:class: note
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Dans un triangle rectangle, l'**hypoténuse** est le côté opposé à l'angle
  droit et les **cathètes** sont les côtés adjacents à l'angle droit.
- ```{jsxgraph} triangleRectangle
  :style: width: 100%; border: none;
  ```
````
`````

`````{admonition} Théorème de Pythagore
:class: note
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Dans un triangle rectangle, la somme des carrés des cathètes est égal au carré
  de l'hypoténuse.
  ```{math}
  :class: align-center
  a^2 + b^2 =c^2
  ```
- ```{jsxgraph} pythagore
  :style: width: 100%; border: none;
  ```
````
`````


`````{admonition} Théorème de la hauteur
:class: note
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Le carré de la hauteur est égal au produit des segments allant du pied de la
  hauteur aux sommets adjacents.
  ```{math}
  :class: align-center
  h_c^2 = c_{1} \cdot c_{2}
  ```
- ```{figure} images/thm-hauteur.png
  :width: 100%
  ```
````
`````

```{container} noprint frame
# Démonstation

Le théorème de la hauteur peut être démontré à l'aide du théorème de Pythagore.

Pythagore dans le triangle $HBC$: $a^2 = h_c^2 + c^2 (1)$<br>
Pythagore dans le triangle $AHC$: $b^2 = c_1^2 + h_c^2 (2)$

$$h_c^2 &= a^2 -c_2^2 &(1)\\
+ h_c^2 &= b^2 - c_1^2 &(2)\\
2h_c^2 &= a^2-c_2^2+b^2-c_1^2 \quad &(1)+(2)$$

$$2h_c^2 &= a^2-c_2^2+b^2-c_1^2 \qquad \qquad \qquad &|& \text{réarrangement}\\
&= (a^2+b^2) - c_1^2 - c_2^2  &|& a^2 + b^2 = c^2\\
&= c^2 - c_1^2 - c_2^2  &|& c = c_1 + c_ 2\\
&= (c_1 + c_ 2)^2 - c_1^2 - c_2^2  &|& \text{CL}\\
&= (c_1^2 + 2c_1c_2 + c_ 2^2) - c_1^2 - c_2^2  &|& \text{CL}\\
&= \cancel{c_1^2} + 2c_1c_2 +\bcancel{c_ 2^2} -\cancel{c_1^2} -\bcancel{c_2^2}  &|& \text{simplification}\\
&= 2c_1c_2$$

$2h_c^2 = 2c_1c_2 \iff h_c^2 = c_1c_2$
```

`````{admonition} Théorème d'Euclide
:class: note
````{list-grid}
:style: grid-template-columns: 3fr 2fr;
- Le carré de la cathète est égal au produit de l'hypoténuse et du segment
  allant du pied de la hauteur au sommet adjacent.
  ```{math}
  :class: align-center
  a^2 = c \cdot c_{2} \, \, \text{ et } \, \, b^2 = c \cdot c_{1}
  ```
- ```{figure} images/thm-euclide.png
  :width: 100%
  ```
````
`````

````{container} noprint frame
# Démonstation

Le théorème d'Euclie peut être démontré à l'aide du théorème de Pythagore et du
théorème de la hauteur.

```{figure} images/triangle-rectangle.png
:width: 40%
```

Pythagore dans le triangle $HBC$: $a^2 = h_c^2 + c^2 (1)$<br>
Théorème de la hauteur: $h_c^2 = c_1 \cdot c_2 (2)$

Substituez (2) dans (1):

$$a^2 &= h_c^2 + c^2 &|& h_c^2 = c_1 \cdot c_2 \\
&= c_1 \cdot c_2 - c_1^2 &|& \text{mise en évidence}\\
&= c_2 \cdot (c_1 + c_2) &|& c = c_1 + c_2\\
&= c_2 \cdot c
$$

Le raisonnement est le même pour montrer $b^2 = c \cdot c_1$.
````


<!-- ```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-ex1>`,
{numref}`exercice %s<exercice:1-equ-ex2>`,
{numref}`exercice %s<exercice:1-equ-ex3>`,
{numref}`exercice %s<exercice:1-equ-ex4>` et
{numref}`exercice %s<exercice:1-equ-ex5>`
```  -->


## Exercices

### Exercice {num2}`exercice:1-tm-met-ex1`

Soit le triangle rectangle suivants:

```{figure} images/thm-metrique.png
:width: 30%
```

<style>
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

{.lower-alpha-paren}
1.  Notez la formule du théorème de la hauteur en fonction du schéma ci-dessus
    et calculez les valeurs manquantes.

    {.reset-print .longueur}
    | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: |
    | | $78$ | $19$ |
    | $49.8$ |  | $40$ |
    | $65.4$ | $91$ |  |
    | $43.27$ | $39$ |  |
    | $55.56$ | | $49$  |

2.  Notez les formules du théorème d'Euclide en fonction du schéma ci-dessus et
    calculez les valeurs manquantes.

    {.reset-print .longueur}
    | $AB$ | $AC$ | $BC$ | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    | - |  | $89$ | - | - | $75$ |
    |  | - | $93$ | - | $22$ | - |
    | $59.14$ | - |  | - | $53$ | - |
    | - | $66.48$ |  | - | - | $52$ |
    | - | $60.87$ | $65$ | - | - |  |

3.  Calculez les valeurs manquantes en choisissant le théorème adéquat.

    {.reset-print .longueur}
    | $AB$ | $AC$ | $BC$ | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    |  | - | $77$ | - | $45$ | - |
    | - | $19.21$ |  | - | - | $9$ |
    | - | - | - | $14.66$ | $5$ |  |
    | - | - | - | $22.72$ |  | $12$ |
    | $49.95$ | - |  | - | $29$ | - |
    | - |  | $46$ | - | - | $31$ |


```{block} solution
{.lower-alpha-paren}
1.  $AH^2 = BH \cdot CH$

    {.reset-print .longueur}
    | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: |
    | $\mathbf{38.5}$ | $78$ | $19$ |
    | $49.8$ | $\mathbf{62}$ | $40$ |
    | $65.4$ | $91$ | $\mathbf{47}$ |
    | $43.27$ | $39$ | $\mathbf{48}$  |
    | $55.56$ | $\mathbf{63}$ | $49$  |

2.  $AB^2 = BH \cdot BC$ et $AC^2 = CH \cdot BC$

    {.reset-print .longueur}
    | $AB$ | $AC$ | $BC$ | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    | - | $\mathbf{81.7}$ | $89$ | - | - | $75$ |
    | $\mathbf{45.23}$ | - | $93$ | - | $22$ | - |
    | $59.14$ | - | $\mathbf{66}$ | - | $53$ | - |
    | - | $66.48$ | $\mathbf{85}$ | - | - | $52$ |
    | - | $60.87$ | $65$ | - | - | $\mathbf{57}$ |

3.  {.reset-print .longueur}
    | $AB$ | $AC$ | $BC$ | $AH$ | $BH$ | $CH$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    | $\mathbf{58.86}$ | - | $77$ | - | $45$ | - |
    | - | $19.21$ | $\mathbf{41}$ | - | - | $9$ |
    | - | - | - | $14.66$ | $5$ | $\mathbf{43}$ |
    | - | - | - | $22.72$ | $\mathbf{43}$ | $12$ |
    | $49.95$ | - | $\mathbf{86}$ | - | $29$ | - |
    | - | $\mathbf{37.76}$ | $46$ | - | - | $31$ |
```

### Exercice {num2}`exercice:1-tm-met-ex2`

Soit un triangle rectangle en $C$ avec une partie de l'hypoténuse
$c_{1} = 9\,cm$ et la cathète $b = 15\,cm$. Déterminez la longueur de la cathète
$a$, de l'hypoténuse $c$, de l'autre partie de l'hypoténuse $c_{2}$ et la
hauteur $h_c$.

```{block} solution
$a=20\,cm$, $c=25\,cm$, $c_{2}=16\,cm$ et $h=12\,cm$
```

### Exercice {num2}`exercice:1-tm-met-ex3`

Est-ce qu'une planche en bois de $2.4\,m$ de long et $1.9\,m$ de large peut
passer par une fenêtre haute de $1.4\,m$ et large de $1.2\,m$?

```{block} solution
Non, la diagonale de la fenêtre vaut que $1.84\,m$ et la planche a une largeur
de $1.9\,m$.
```

### Exercice {num2}`exercice:1-tm-met-ex4`

Déterminez $x$, $y$ et $z$.

{.lower-alpha-paren .columns-2}
1.  ```{figure} images/hauteur1.png
    :width: 80%
    ```
2.  ```{figure} images/hauteur3.png
    :width: 60%
    ```
3.  ```{figure} images/hauteur2.png
    :width: 80%
    ```
4.  ```{figure} images/hauteur4.png
    :width: 60%
    ```

```{block} solution
{.lower-alpha-paren .columns-2}
1. $x=8.66\,dm$
2. $x=35.6\,mm$
3. $x=10.25\,cm$
4. $x=6\,m$, $y=9.17\,m$, $z=10.95\,m$
```

### Exercice {num2}`exercice:1-tm-met-ex5`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- Soit le quadrilatère $ABCD$ ci-contre.<br>
  Que valent le périmètre et l'aire de ce quadrilatère?
- ```{figure} images/aireABCD.png
  :width: 100%
  ```
````

```{block} solution
$P=267.8\,cm$ et $A=4056.1\,cm^2$
```

### Exercice {num2}`exercice:1-tm-met-ex6`

La pyramide du Louvre a une hauteur de $22\,m$ et une base carré de $35\,m$ de
côté. Faites un petit croquis de cette pyramide et calculez la facture du
vitrier qui demande 280 CHF par mètre carré pour recouvrir la pyramide avec du
nouveau verre.

```{block} solution
La facture s'élève à $550\,983.16$ CHF.
```

### Exercice {num2}`exercice:1-tm-met-ex7`

Une montgolfière vole à une hauteur de $500\,m$ au-dessus de la mer
méditerranée. À quelle distance se trouve l'horizon pour les passagers si le
rayon de la terre vaut $6400\,km$?

```{block} solution
La distance est de $80\,km$.
```

### Exercice {num2}`exercice:1-tm-met-ex8`

Deux randonneurs partent d'une cabane en marchant tout droit vers une rivière
rectiligne. Le premier atteint la rivière après $112\,m$ et le deuxième après
$156\,m$. L'angle entre les deux chemins vaut $90^{\circ}$.

{.lower-alpha-paren}
1.  À quelle distance se trouvent les randonneurs quand ils atteignent la
    rivière?
2.  À quelle distance de la rivière se trouve la cabane?

```{block} solution
{.lower-alpha-paren .columns-2}
1.  La distance est de ~$192\,m$.
2.  La distance est de ~$91\,m$.
```

### Exercice {num2}`exercice:1-tm-met-ex9`

Déterminez l'aire et le périmètre d'un parallélogramme dont nous connaissons

{.lower-alpha-paren}
1.  la longueur de la diagonale $e=11\,cm$, le côté $b=4\,cm$ et la
    hauteur $h=3\,cm$.
2.  la longueur des diagonales $e = 5.5\,cm$ et $f = 4\,cm$ ainsi que la
    hauteur $h = 2.5\,cm$.

```{figure} images/parallelogramme.png
:width: 38%
```

```{block} solution
{.lower-alpha-paren}
1.  $P=23.87\,cm$ et $A=23.81\,cm^2$
2.  $P=13.33\,cm$ et $A=10.03\,cm^2$
```

### Exercice {num2}`exercice:1-tm-met-ex10`

Les longueurs des côtés d'un rectangle sont $8\,cm$ et $15\,cm$.<br>
Quelle est la distance entre un sommet et la diagonale ne passant pas par ce
sommet?

```{block} solution
$d = \sim 7.1\,cm$
```

### Challenge

Déterminez l'aire et le périmètre de la surface grise. Chaque demi-cercle a sa
diagonale sur un côté du triangle. $R=5\,m$ et $r=3\,m$.
```{figure} images/demicercle.png
:width: 35%
```

```{solution}
$P=37.7\,m$ et $A=24\,m^2$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```

