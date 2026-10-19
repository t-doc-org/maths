% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Droite dans le plan

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/droite.xopp>`
```

## Théorie

### Différents types d'équations

````{admonition} Définition
:class: note
L'**équation cartésienne explicite** de la droite $d$ du plan est donnée par
```{math}
:class: align-center
d: y = mx + h
```
avec $m$ et $h \in \mathbb{R}$. $m$ est la **pente** et $h$ est l'**ordonnée à
l'origine**.
````

`````{container} frame noprint
# Exemple {num2}`exemple:2-droites`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   Soit la droite $d$ dont l'équation est donnée par
    ```{math}
    :class: align-center
    d: y = -\dfrac{2}{3}x + 1
    ```
    Cette droite a pour pente $-\dfrac{2}{3}$ et comme ordonnée à l'origine $1$.

-   ```{jsxgraph} droite
    :style: width: 80%;
    ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.droite = el => {
  return initBoard(el, [attrs.screen, {
    boundingBox: [-5, 5, 5, -5],
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  }], board => {
    board.create('functiongraph', [x => - 2 / 3 * x + 1] , {
      name: `\\(d\\)`, withLabel: true,
      label: {position: '0.2fr right', offset: [15, 15]},
    });
  });
};
render.vectDirecteur1 = el => {
  return initBoard(el, [attrs.print, {
    boundingBox: [-5, 5, 5, -5],
  }], board => {
    board.create('functiongraph', [x => - 2 / 3 * x + 1] , {
      name: `\\(d\\)`, withLabel: true, strokeWidth: 1,
      label: {position: '0.2fr right', offset: [15, 15]},
    });
    const A = board.create('point', [0, 1] , {
      name: `\\(A\\)`, withLabel: true, size: 1,
      label: {offset: [5, 10]},
    });
    const B = board.create('point', [3, -1] , {
      name: `\\(B\\)`, withLabel: true, size: 1,
      label: {offset: [-5, -15]},
    });
    board.create('arrow', [A, B] , {
      name: `\\(\\vec{d}\\)`, withLabel: true,
      strokeColor: JXG.palette.red,
      label: {position: '0.5fr left', offset: [0, 0],
                strokeColor: JXG.palette.red,},
    });
  });
};
</script>

````{admonition} Définition
:class: note
L'**équation cartésienne implicite** de la droite $d$ du plan est donnée par
```{math}
:class: align-center
d: ax + by + c = 0
```
avec $a$, $b$ et $c \in \mathbb{R}$.
````

````{container} frame noprint
# Exemple {num2}`exemple`

Reprenons la droite de l'{numref}`exemple %s<exemple:2-droites>`:
```{math}
    :class: align-center
d: y = -\dfrac{2}{3}x + 1
```
Cette équation est sous la forme cartésienne explicite. En mettant tout dans
le même membre, nous obtenons l'équation cartésienne implicite.
$$ y &= -\dfrac{2}{3}x + 1 \qquad \qquad &|& \cdot 3\\
3y &= -2x + 3 &|& +2x - 3\\
2x + 3y -3 &= 0$$
````

````{container} frame noprint
# Exemple {num2}`exemple`

Soit l'équation de la droite $d$ donnée sous forme cartésienne implicite:
```{math}
    :class: align-center
d: -3x + 4y + 2 = 0
```
En isolant $y$, nous obtenons l'équation cartésienne explicite.
$$ -3x + 4y + 2 &= 0 \qquad \qquad &|& +3x - 2\\
4y &= 3x - 2 &|& :4\\
y &= \dfrac{3}{4}x - \dfrac{1}{2}$$
````

```{admonition} Définition
:class: note
Un **vecteur directeur** d'une droite $d$ est tout vecteur $\overrightarrow{AB}$
tels que $A$ et $B$ sont deux points distincts de $d$.
```

`````{container} frame noprint
# Exemple {num2}`exemple`

```{list-grid}
:style: grid-template-columns: 1fr 1fr
-   Trouvez un vecteur directeur de la droite $d: y = -\dfrac{2}{3}x + 1$.
    1.  Trouvez deux points $A$ et $B$ qui appartiennent à la droite:<br>
        $A(0; 1)$ et $B(3; -1)$ sont deux points de la droite.
    2.  Déterminez les composantes du vecteur $\overrightarrow{AB}$:<br>
        $\overrightarrow{AB} = \begin{pmatrix} 3\\ -1\\ \end{pmatrix} - \begin{pmatrix} 0\\ 1\\ \end{pmatrix} = \begin{pmatrix} 3\\ -2\\ \end{pmatrix}$

    $\begin{pmatrix} 3\\ -2\\ \end{pmatrix}$ est un vecteur directeur de $d$.
-   ```{jsxgraph} vectDirecteur1
    :style: width: 80%;
    ```
`````

````{admonition} Définition
:class: note
Pour tout point $P$ de la droite $d$ donnée par le point $A \in d$ et le vecteur
directeur $\vec{d}$, l'**équation vectorielle** de la droite $d$ du plan est
donnée par
```{math}
:class: align-center
\overrightarrow{OP} = \overrightarrow{OA} + \lambda \cdot \vec{d}
```
avec $\lambda \in \mathbb{R}$.
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-3, 7, 10, -1],
  axis: false,
},];
render.vectDirecteur2 = el => {
  return initBoard(el, battrs, board => {
    const O = board.create('point', [0, 0], {
      withLabel: true, name: `\\(O\\)`,
      label: {offset: [-5, -10]},
    });
    const A = board.create('point', [-2, 3], {
      withLabel: true, name: `\\(A\\)`,
      label: {offset: [-5, 10]},
    });
    const B = board.create('point', [4, 5], {
      withLabel: true, name: `\\(B\\)`,
      label: {offset: [-5, 10]},
    });
    const P = board.create('point', [7, 6], {
      withLabel: true, name: `\\(P\\)`,
      label: {offset: [-5, 10]},
    });
    board.create('functiongraph', [x => 1 / 3 * x + 11 / 3] , {
      name: `\\(d\\)`, withLabel: true, strokeWidth: 1,
      label: {position: '0.85fr right', offset: [0, 0]},
    });
    board.create('arrow', [O, P], {
      name: `\\(\\overrightarrow{OP}\\)`,
      label: {position: '0.5fr right', offset: [0, 0]},
    });
    board.create('arrow', [O, A], {
      name: `\\(\\overrightarrow{OA}\\)`,
      label: {position: '0.5fr left', offset: [-10, 0]},
    });
    board.create('arrow', [A, B], {
      name: `\\(\\vec{d}\\)`, label: {offset: [0, 0]},
    });
  });
};
</script>

`````{container} frame noprint
# Démonstration

```{list-grid}
:style: grid-template-columns: 1fr 1fr
-   $P, A \in d$ et $\vec{d}$ est le vecteur directeur $\implies \overrightarrow{AP} = \lambda \cdot \vec{d}$, car $\overrightarrow{AP} \text{ et } \vec{d}$ sont colinéaires.

    $\overrightarrow{AP} = \overrightarrow{AO} + \overrightarrow{OP} \implies \overrightarrow{AO} + \overrightarrow{OP} = \lambda \cdot \vec{d}$

    $\overrightarrow{AO} = - \overrightarrow{OA} \implies - \overrightarrow{OA} + \overrightarrow{OP} = \lambda \cdot \vec{d} \implies$ <br>
    $\overrightarrow{OP} = \overrightarrow{OA} + \lambda \cdot \vec{d}$

-   ```{jsxgraph} vectDirecteur2
    :style: width: 80%;
    ```
`````

````{container} frame noprint
# Exemple {num2}`exemple`

L'équation vectorielle de la droite $d: y = -\dfrac{2}{3}x + 1$ est donnée par
```{math}
:class: align-center
\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix}
```

Pour déterminer des points qui appartiennent à la droite, il suffit dans
remplacer $\lambda$ par des valeurs.

-   Avec $\lambda = 0 \text{, } \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + 0 \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix}$<br>
    Le point $(0; 1) \in d$.

-   Avec $\lambda = 1 \text{, }\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + 1 \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \begin{pmatrix} 3\\ -2\\ \end{pmatrix} = \begin{pmatrix} 3\\ -1\\ \end{pmatrix}$<br>
    Le point $(3; -1) \in d$.

-   Avec $\lambda = -5 \text{, } \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + (-5) \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \begin{pmatrix} -15\\ 10\\ \end{pmatrix} = \begin{pmatrix} -15\\ 11\\ \end{pmatrix}$<br>
    Le point $(-15; 11) \in d$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Pour vérifier si un point appartient à une droite dont l'équation vectorielle est
connue:

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ -5\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -1\\ 2\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

1. Le point $Q(-4; 5)$ appartient-il à la droite $d$?<br>
    Remplacez les coordonnées du point $Q$ dans l'équation vectorielle de $d$:<br>
    $$\left\{
    \begin{aligned}
        -4 &=  2 + \lambda \cdot (-1)   \\
        5 &=  -5 + \lambda \cdot 2
    \end{aligned}
    \right.
    \Longleftrightarrow \left\{
    \begin{aligned}
         \lambda &=  6   \\
         \lambda &=  5
    \end{aligned}
    \right.$$
    Comme les deux valeurs de $\lambda$ ne sont pas les mêmes, $Q$ n'appartient
    pas à la droite $d$.

2. Le point $R(-1; 1)$ appartient-il à la droite $d$?<br>
    Remplacez les coordonnées du point $R$ dans l'équation vectorielle de $d$:<br>
    $$\left\{
    \begin{aligned}
        -1 &=  2 + \lambda \cdot (-1)   \\
        1 &=  -5 + \lambda \cdot 2
    \end{aligned}
    \right.
    \Longleftrightarrow \left\{
    \begin{aligned}
         \lambda &=  3   \\
         \lambda &=  3
    \end{aligned}
    \right.$$
    Comme les deux valeurs de $\lambda$ sont les mêmes, $R$ appartient à la droite
    $d$.
```

````{admonition} Définition
:class: note
Les **équations paramétriques** de la droite $d$ du plan sont données par
```{math}
:class: align-center
\left \{
  \begin{aligned}
     x &= a_1 + \lambda \cdot d_1\\
     y &= a_2 + \lambda \cdot d_2
  \end{aligned}
\right.
```
avec $\lambda \in \mathbb{R}$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Les équations paramétriques découlent directement de l'équation vectorielle.

$\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} \iff
\left \{
  \begin{aligned}
     x &= 0 + \lambda \cdot 3\\
     y &= 1 + \lambda \cdot (-2)
  \end{aligned}
\right. \iff
\left \{
  \begin{aligned}
     x &= 3\lambda\\
     y &= 1 - 2\lambda
  \end{aligned}
\right.$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-droites-ex1>`,
{numref}`exercice %s<exercice:2-droites-ex2>`,
{numref}`exercice %s<exercice:2-droites-ex3>`,
{numref}`exercice %s<exercice:2-droites-ex4>`,
{numref}`exercice %s<exercice:2-droites-ex5>` et
{numref}`exercice %s<exercice:2-droites-ex6>`.
```

### Transformation d'équations

```{admonition} Marche à suive: équation vectorielle -> équation cartésienne
:class: tip
Pour passer de l'équation vectorielle à l'équation cartésienne.

1.  Déterminer la pente en utilisant le vecteur directeur.
2.  Calculez l'ordonnée à l'origine en utilisant le point d'ancrage.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez l'équation cartésienne de la droite $d$ dont l'équation vectorielle
est

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} -3\\ 4\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 5\\ -1\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

1.  **Pente de la droite**<br>
    $m = \dfrac{\Delta y}{\Delta x} = \dfrac{-1}{5} = -\dfrac{1}{5} \implies
    d: y = -\dfrac{1}{5}x + h$
2.  **Ordonnée à l'origine**<br>
    Le point d'ancrage est (-3; 4). En remplaçant ces valeurs dans l'équation,
    déterminez $h$:

    $4 = -\dfrac{1}{5} \cdot (-3) + h \implies 4 = \dfrac{3}{5} + h \implies 4 - \dfrac{3}{5} = h \implies h = \dfrac{17}{5}$

L'équation cartésienne explicite de la droite $d$ est
$d: y = -\dfrac{1}{5}x + \dfrac{17}{5}$.

L'équation cartésienne implicite de la droite $d$ est

$$ y &= -\dfrac{1}{5}x + \dfrac{17}{5} \qquad \qquad &|& \cdot 5\\
5y &= -x + 17 &|& +x - 17\\
x + 5y - 17 &= 0$$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-droites-ex7>`
```

````{admonition} Théorème
:class: note
Soit $d$ une droite d'équation $ax+by+c=0$. Un vecteur directeur de $d$ est
```{math}
:class: align-center
\vec{d} = \begin{pmatrix} -b\\ a\\ \end{pmatrix}
```
````

```{admonition} Marche à suive: équation cartésienne -> équation vectorielle
:class: tip
Pour passer de l'équation catésienne à une équation vectorielle.

1.  Trouvez un point qui appartient à la droite (par exemple l'ordonnée à
    l'origine) et prenez-le comme point d'ancrage.
2.  Déterminez le vecteur directeur en utilisant le théorème ci-dessus.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez une équation vectorielle de la droite $d$ dont l'équation cartésienne
explicite est $d: y = \dfrac{1}{3}x - 2$

1.  **Point d'ancrage**<br>
    Prenez, par exemple, l'ordonnée à l'origine comme point d'ancrage: $A(0; -2)$.

2.  **Vecteur directeur**<br>
    L'équation cartésienne implicite:

    $$ y &= \dfrac{1}{3} - 2 \qquad \qquad &|& \cdot 3\\
    3y &= x -6 &|& -x + 6\\
    -x + 3y + 6 &= 0$$

    Le vecteur directeur est donc $\vec{d} = \begin{pmatrix} -b\\ a\\ \end{pmatrix} = \begin{pmatrix} -3\\ -1\\ \end{pmatrix}$

L'équation vectorielle:

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ -2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -3\\ -1\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

La forme paramétrique:

$
\left \{
  \begin{aligned}
     x &= -3\lambda\\
     y &= -2 - \lambda
  \end{aligned}
\right.$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-droites-ex8>` et
{numref}`exercice %s<exercice:2-droites-ex9>`.
```

### Position relative de deux droites

```{admonition} Propriétés
Deux droites sont **parallèles** si leurs vecteurs directeurs sont colinéaires
et si elles n'ont aucun point commun.

Deux droits sont **confondues** si leurs vecteurs directeurs sont colinéaires et
si elles ont (au moins) un point commun.

Deux droites sont **sécantes** si elles ont un unique point commun.
```

```{admonition} Marche à suivre: déterminer la position relative entre deux droites
:class: tip
1.  Vérifiez si les deux vecteurs directeurs sont colinéaires.

    - Si oui, les deux droites sont soit parallèles, soit confondues -> passez
        au point 2a).
    - Si non, les deux droites sont sécantes -> passez au point 2b).
2.  {.lower-alpha-paren}
    1. Vérifiez si le point d'ancrage d'une des droites appartient à l'autre (si
        les deux vecteurs sont colinéaires).

        - Si oui, les deux droites sont confondues.
        - Si non, les deux droites sont parallèles.

    {.lower-alpha-paren}
    2. Déterminez le point d'intersection $I$ (si les deux doites sont sécantes).
```

```{container} frame noprint
# Exemple {num2}`exemple`

Soient deux droites $d_1 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ 2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ 1\\ \end{pmatrix}$ et $d_2 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 5\\ 4\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 6\\ 3\\ \end{pmatrix}$

1.  Vérifiez si les vecteurs directeurs sont colinéaires (ou si les pentes sont
    les mêmes.)

    Les deux vecteurs directeurs sont colinéaires, car $3 \cdot \begin{pmatrix} 2\\ 1\\ \end{pmatrix} = \begin{pmatrix} 6\\ 3\\ \end{pmatrix}$.

    Les deux droites sont donc parallèles ou confondues.
2.  Vérifiez si le point d'ancrage d'une des droites appartient à l'autre.

    Le point d'ancrage de $d_1$ est $(2; 2)$ appartient-il à $d_2$?

    $$\left \{
      \begin{aligned}
         2 &= 5 + \mu \cdot 6\\
         2 &= 4 + \mu \cdot 3
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -3 &= 6\mu\\
         -2 &= 3\mu
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -\dfrac{1}{2} &= \mu\\
         -\dfrac{2}{3} &= \mu
      \end{aligned}
    \right.
    $$
    $(2; 2) \notin d_2$, les deux droites sont donc parallèles.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Soient deux droites $d_1 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} -2\\ 3\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -2\\ 1\\ \end{pmatrix}$ et $d_2 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 1\\ 4\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 1\\ -3\\ \end{pmatrix}$

1.  Vérifiez si les vecteurs directeurs sont colinéaires.

    $Det(\vec{d_1}, \vec{d_2}) = \begin{vmatrix} -2 & 1 \\ 1 & -3 \end{vmatrix} = -2 \cdot (-3) - 1 \cdot 1 = 6 -1 = 5 \neq 0$

    Les deux vecteurs ne sont pas colinéaires. Les deux droites sont donc sécantes.

2.  Déterminez le point d'intersection.

    $$
    \left \{
      \begin{aligned}
         -2 - 2\lambda &= 1 + \mu\\
         3 + \lambda &= 4 -3\mu
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -2\lambda - \mu &= 3\\
         \lambda + 3\mu &= 1
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -2\lambda - \mu &= 3\\
         2\lambda + 6\mu &= 2
      \end{aligned}
    \right. \Longleftrightarrow
    $$

    Nous obtenons $\mu = 1$ et $\lambda = -2$
    $$
    \left \{
      \begin{aligned}
         x &= 1 + \mu = 1 + 1= 2\\
         y &= 4 - 3\mu = 4 - 3 \cdot 1 = 4 - 3 = 1
      \end{aligned}
    \right.
    $$
    Le point d'intersection est $I(2; 1)$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-droites-ex10>`,
{numref}`exercice %s<exercice:2-droites-ex11>`,
{numref}`exercice %s<exercice:2-droites-ex12>` et
{numref}`exercice %s<exercice:2-droites-ex13>`.
```

## Exercices

### Exercice {nump}`exercice:2-droites-ex1`

Soit la droite
$\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} -3\\ 2\\ \end{pmatrix} +
\lambda \cdot \begin{pmatrix} 3\\ 2\\ \end{pmatrix} \quad \text{avec} \quad
\lambda \in \mathbb{R}$

Déterminez les points de cette droite pour $\lambda = -3$, $-2$, $-1$, $0$, $1$,
$2$ et $3$, puis tracez cette droite dans un repère orthonormé.

```{block} solution
Sans corrigé.
```

### Exercice {nump}`exercice:2-droites-ex2`

Soit la droite
$d: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ -5\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ 3\\ \end{pmatrix} \quad
\text{avec} \quad \lambda \in \mathbb{R}$

Les points $A(5;4)$, $B(0;7)$ et $C(7.5;11.5)$ appartiennent-ils à la droite
$d$?

```{block} solution
$A \in d$; $\quad B \not\in d$; $\quad C\in d$.
```

### Exercice {nump}`exercice:2-droites-ex3`

Déterminez les équations vectorielles des axes $Ox$ et $Oy$.

```{block} solution
% vérifier cette solution
$Ox: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \lambda \cdot \begin{pmatrix} 1\\
0\\ \end{pmatrix}$;
$\quad Oy: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \lambda \cdot \begin{pmatrix}
0\\ 1\\ \end{pmatrix}$.
```

### Exercice {nump}`exercice:2-droites-ex4`

Déterminez l'équation vectorielle de la droite passant par

{.lower-alpha-paren}
1.  $A(-4;0)$ et $B(3;2)$.
2.  $A(2;-1)$ et qui coupe l'axe $Ox$ en $x=5$.
3.  $A(4;3)$ et parallèle à l'axe $Ox$.
4.  $A(7;5)$ et parallèle à l'axe $Oy$.
5.  $A(5;-1)$ et parallèle à la droite d'équation $\begin{pmatrix} x\\ y\\
    \end{pmatrix} = \begin{pmatrix} -4\\ 8\\ \end{pmatrix} +
    \lambda \cdot \begin{pmatrix} 2\\ -3\\ \end{pmatrix}$.
6.  $A(-1;3)$ et par l'origine.

```{block} solution
Les solutions de cet exercice ne sont pas uniques. Voici des solutions possibles,
avec $\lambda \in \mathbb{R}$.

{.columns-2 .lower-alpha-paren}
1.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} -4\\ 0\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 7\\ 2\\ \end{pmatrix}$
2.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ -1\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ 1\\ \end{pmatrix}$
3.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 4\\ 3\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ 0\\ \end{pmatrix}$
4.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 7\\ 5\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 0\\ 1\\ \end{pmatrix}$
5.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 5\\ -1\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ -3\\ \end{pmatrix}$
6.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \lambda \cdot \begin{pmatrix} -1\\
    3\\ \end{pmatrix}$
```

### Exercice {nump}`exercice:2-droites-ex5`

Une droite $d$ passe par le point $A(3;-2)$ et est parallèle à la droite passant
par $C(1;4)$ et $D(5;6)$.

{.lower-alpha-paren}
1.  Déterminez une équation vectorielle de cette droite.
2.  Vérifiez si le point $B(-2;-8)$ appartient à $d$.

```{block} solution
{.lower-alpha-paren}
1.  Solution possible: $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix}
3\\ -2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ 1\\ \end{pmatrix}
\text{ , } \quad \lambda \in \mathbb{R}$.
2.  $B \not\in d$.
```

### Exercice {nump}`exercice:2-droites-ex6`

Une droite $d$ coupe les axes en $A(0;2)$ et $B(4;0)$. Déterminez l'équation
vectorielle de $d$.

```{block} solution
$\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 4\\ 0\\ \end{pmatrix} +
\lambda \cdot \begin{pmatrix} 4\\ -2\\ \end{pmatrix}$
```

### Exercice {nump}`exercice:2-droites-ex7`

Calculez une équation cartésienne des droites données ci-dessous.

{.columns-2  .lower-alpha-paren}
1.  $d_1: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ 1\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} -1\\ 3\\ \end{pmatrix}$
2.  $d_2: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 5\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 4\\ 4\\ \end{pmatrix}$
3.  $d_3: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix}-4\\ 3\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 6\\ 5\\ \end{pmatrix}$

```{block} solution
Les solutions ne sont pas uniques. Voici des solutions possibles.

{.columns-3 .lower-alpha-paren}
1.  $y=-3x+7$
2.  $y=x+5$
3.  $y=\dfrac{5}{6}x+\dfrac{19}{3}$
```

### Exercice {nump}`exercice:2-droites-ex8`

Calculez une équation vectorielle des droites données ci-dessous.

{.columns-3  .lower-alpha-paren}
1.  $d_1: y=3x-2$
2.  $d_2: 4x-3y+1=0$
3.  $d_3: -2x+y+3=0$

```{block} solution
Les solutions ne sont pas uniques. Voici des solutions possibles.

{.columns-2 .lower-alpha-paren}
1.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ -2\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ 3\\ \end{pmatrix}$
2.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ \frac{1}{3}\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ 4\\ \end{pmatrix}$
3.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ -3\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ 2\\ \end{pmatrix}$
```

### Exercice {nump}`exercice:2-droites-ex9`

Montrez que les six équations ci-dessous représentent la même droite.

```{list-grid}
:style: grid-template-columns: 3fr 3fr 3fr;
-   $3x+2y=11$
-   $\dfrac{9-x}{2} = \dfrac{y+8}{3}$
-   $\begin{pmatrix} x\\ y\\ \end{pmatrix} =\begin{pmatrix} 5\\ -2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -2\\ 3\\ \end{pmatrix}$
-   $\left \{ \begin{aligned} x &= 3 + 2\lambda \\ y &= 1 - 3\lambda \end{aligned} \right.$
-   $y = -\dfrac{3}{2}x + \dfrac{11}{2}$
-   $6x+4y-22 = 0$
```


```{block} solution
Toutes les équations peuvent être transformées pour obtenir
$y = -\dfrac{3}{2}x + \dfrac{11}{2}$.
```

### Exercice {nump}`exercice:2-droites-ex10`

Déterminez si les deux équations vectorielles représentent la même droite.

{.lower-alpha-paren}
1.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ 3\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ 5\\ \end{pmatrix} \quad
\text{ et } \quad \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 4\\
8\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 4\\ 10\\ \end{pmatrix}$
2.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 1\\ 1\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} -1\\ 2\\ \end{pmatrix} \quad
\text{ et } \quad \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\
4\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} -1\\ 5\\ \end{pmatrix}$
3.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 5\\ -2\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ 1 \\ \end{pmatrix} \quad
\text{ et } \quad \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 7\\
0\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 2\\ 2 \\ \end{pmatrix}$
4.  $\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ 2\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} \quad
\text{ et } \quad \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 8\\
-2\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 6\\ -4\\ \end{pmatrix}$


```{block} solution
{.columns-2 .lower-alpha-paren}
1.  Mêmes droites.
2.  Droites différentes.
3.  Mêmes droites.
4.  Mêmes droites.
```

### Exercice {nump}`exercice:2-droites-ex11`

Déterminez si les droites suivantes sont confondues, strictement parallèles ou
sécantes. Dans ce cas, déterminez leur point d'intersection $I$.

{.lower-alpha-paren}
1.  $d_1: 3x + 2y - 1 = 0 \quad \text{ et } \quad d_2: \left\{ \begin{aligned}
  x &=  2 -  \lambda \\
  y &= -1 + 2\lambda
\end{aligned}\right.$
2.  $d_1: 15x - 5y - 1 = 0 \quad \text{ et } \quad d_2: 12x-4y + 3 = 0$
3.  $d_1: y = -\dfrac{2}{3}x +3 \quad \text{ et } \quad d_2: 7x - 12y - 9 = 0$
4.  $d_1: \left\{ \begin{aligned}
  x &= 1 + \lambda \\
  y &= 2 - \lambda
\end{aligned}\right. \quad \text{ et } \quad d_2: x + y = 3$
5.  $d_1: 4x - 6y = 3 \quad \text{ et } \quad d_2: -2x + 3y = 5$
6.  $d_1: 5x - 6y = -2 \quad \text{ et } \quad d_2: -3x + 4y = 8$

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  Sécantes; $I(5;-7)$
2.  Strictement parallèles
3.  Sécantes; $I(3;1)$
4.  Confondues
5.  Strictement parallèles
6.  Sécantes; $I(20;17)$
```

### Exercice {nump}`exercice:2-droites-ex12`

Soient les points $A(3;1)$ et $B(4;-1)$.

{.lower-alpha-paren}
1.  Déterminez une équation vectorielle de la droite $d$ qui passe par $A$ et
    $B$.
2.  Calculez les points d'intersection de $d$ avec les deux axes $Ox$ et $Oy$.

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  $d: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 3\\ 1\\
\end{pmatrix} + \lambda \cdot \begin{pmatrix} 1\\ -2\\ \end{pmatrix}$, $\lambda
\in \mathbb{R}$.
2.  $P(\frac{7}{2};0)$; $\quad Q(0;7)$.
```

### Exercice {nump}`exercice:2-droites-ex13`

Soit la droite $d: \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 3\\
-1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ 5\\ \end{pmatrix}$,
$\lambda \in \mathbb{R}$.

{.lower-alpha-paren}
1.  Déterminez trois points de cette droite.
2.  Donnez trois points qui n'appartiennent pas à cette droite.
3.  Calculez les points d'intersection de $d$ avec les deux axes $Ox$ et $Oy$.

```{block} solution
{.columns-3 .lower-alpha-paren}
1.  Sans corrigé.
2.  Sans corrigé.
3.  $P(\frac{17}{5};0)$; $Q(0;-\frac{17}{2})$.
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
