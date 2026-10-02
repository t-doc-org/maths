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

<!-- ```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez l'équation suivante:

$$
\frac{x}{4}+\frac{1}{2} &= \frac{x-1}{2}-\frac{3x}{2} \qquad \qquad &|& \text{même dénominateur}\\
\frac{x}{4}+\frac{2}{4} &= \frac{2(x-1)}{4}-\frac{6x}{4} &|& \cdot 4\\
x + 2 &= 2(x-1) - 6x &|& \text{CL}\\
x + 2 &= 2x -2 - 6x &|& \text{CL}\\
x + 2 &= -4x - 2 &|& +4x\\
5x + 2 &= - 2 &|& -2\\
5x &= - 4 &|& : 5\\
x &= -\dfrac{4}{5} && \\
$$
$S = \left\{-\dfrac{4}{5}\right\}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-ex1>`,
{numref}`exercice %s<exercice:1-equ-ex2>`,
{numref}`exercice %s<exercice:1-equ-ex3>`,
{numref}`exercice %s<exercice:1-equ-ex4>` et
{numref}`exercice %s<exercice:1-equ-ex5>`
``` -->

<!--
## Exercices

### Exercice {num2}`exercice:1-tm-met-ex1`

Déterminez l'ensemble des solutions des équations suivantes.

{.lower-alpha-paren .columns-2}
1. $8x-34=5x-13$
2. $-x+2(x+9)=5x-4(x-\frac{9}{2})$
3. $12x-(4(42-x)-9(5-x))=7x$
4. $(9-2x)^2=(4x-1)(5+x)-24$
5. $x-\frac{1}{2}x-\frac{1}{3}x-\frac{1}{4}x=\frac{5}{6}-\frac{1}{12}x$
6. $\frac{7x}{3}+\frac{3x-5}{6}=\frac{23x-15}{6}-\frac{9x}{10}+\frac{3}{2}$
7. $5-(2x+3)=-2(x+1)$
8. $x+5=2x+3-(x-2)$


```{block} solution
{.lower-alpha-paren .columns-4}
1. $S=\{7\}$
2. $S=\mathbb{R}$
3. $S=\varnothing$
4. $S=\{2\}$
5. $S=\varnothing$
6. $S=\{\frac{5}{3}\}$
7. $S=\varnothing$
8. $S=\mathbb{R}$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
 -->
