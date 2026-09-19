% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 4
```

# Systèmes d'équations

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/systemes.xopp>`
```

## Théorie

### Systèmes d'équations 2x2

````{admonition} Définition
:class: note
Une **équation linéaire à deux inconnues** est une équation de la forme

```{math}
:class: align-center
a x + b y =c
```
avec $a \text{, } b \text{, } c \in \mathbb{R} \text{, } a \ne 0 \text{ et } b \ne 0$.


Deux équations linéaires à deux inconnues considérées simultanément forment un
**système de deux équations linéaires à deux inconnues**:

```{math}
:class: align-center
\begin{cases}
a_1 x+b_1 y &= c_1 \quad &(1)\\
a_2 x+b_2 y &= c_2 &(2)
\end{cases}
```
avec $a_1 \text{, } a_2 \text{, } b_1 \text{, } b_2 \text{, } c_1 \text{, } c_2 \in \mathbb{R}

Une **solution** d'un tel système est un couple $(x;y)$ de nombres qui sont
solutions des équations $(1)$ et $(2)$.
````

```{container} frame
# Exemple {num2}`exemple`

Soit le système
$\begin{cases}
3x+2 y &= 1 \\
 x- 3 y &= -7
\end{cases}$

En résolvant ce système, les valeurs $x=-1$ et $y=2$ sont obtenues. La solution
se note $S = \{(-1;2)\}$.

La parenthèse est obligatoire, car la solution est un couple $(x; y)$ et non pas
deux valeurs distinctes.
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, attrs.nonInteractive, {
  boundingBox: [-4, 4, 4, -2],
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    functiongraph: {withlabel: false},
    point: {size: 2, label: {anchorX: 'right'},},
  },
}];
render.systeme1 = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => - 3 / 2 * x  + 1 / 2 ]);
    board.create('functiongraph', [x => 1 / 3 * x  + 7 / 3 ]);
    board.create('point', [-1, 2], {
      name: `\\((-1; 2)\\)`, withlabel: true,
      label: {offset: [-15, 5]},
    });
  });
};
render.systeme2 = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 1 / 2 * x  - 3 / 2 ], {
      name: `\\((1)\\)`, withlabel: true,
      label: {position: '0.55fr right'},
    });
    board.create('functiongraph', [x => 1 / 2 * x  + 5 / 2 ], {
      name: `\\((2)\\)`, withlabel: true,
      label: {position: '0.2fr left'},
    });
  });
};
render.systeme3 = el => {
  return initBoard(el, [battrs, {boundingBox: [-4, 2, 4, -4]}], board => {
    board.create('functiongraph', [x => 1 / 2 * x  - 3 / 2 ], {
      name: `\\((1)\\)`, withlabel: true,
      label: {position: '0.2fr right'},
    });
    board.create('functiongraph', [x => 1 / 2 * x  - 3 / 2 ], {
      name: `\\((2)\\)`, withlabel: true,
      label: {position: '0.2fr left'},
    });
  });
};
</script>


`````{container} frame avoid-break-inside
# Remarque

Résoudre un système de deux équations linéaires à deux inconnues revient à
trouver le point d'intersection entre deux droites.

Soit le même système $\begin{cases}
3x+2 y &= 1 \quad &(1)\\
 x- 3 y &= -7 &(2)
\end{cases}$

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   En isolant $y$ dans les deux équations, nous obtenons
    $$\begin{cases}
    y &= -\dfrac{3}{2}x+\dfrac{1}{2} \quad &(1') \\
     y &= \dfrac{1}{3}x+\dfrac{7}{3} &(2')
    \end{cases}
    $$

    En représentant les deux droites, nous obtenons le point d'intersection
    $(-1; 2)$ qui est la solution du système d'équations.


-   ```{jsxgraph} systeme1
    :style: width: 80%;
    ```
````
`````

````{admonition} Marche à suivre - Méthode par substitution
:class: note
Pour résoudre un système d'équations par substitution, il faut:

1. exprimer une inconnue en fonction de l'autre dans une des équations
2. remplacer, dans l'autre équation, l'inconnue par l'expression obtenue
3. résoudre l'équation à une inconnue
4. calculer la valeur de la deuxième inconnue
5. écrire l'ensemble des solutions
````

```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équation suivant: $\begin{cases}\phantom{-0}x+\phantom{0}y &= 2 \quad &(1)\\
    -3x-4y &= 5 &(2)
    \end{cases}$

1.  Isolez le $y$ dans la 1re équation:<br>
    $\begin{cases}y = 2-x\\
    -3x -4y = 5
    \end{cases}$

2.  Remplacez $y$ par $2-x$ dans l'équation (2):<br>
    $\begin{cases}y = {\color{orange}2-x}\\
    -3x -4({\color{orange}2-x}) = 5
    \end{cases}$

3.  Résolvez la 2e équation:
    $$-3x -4(2 - x) &= 5 \qquad &|& \text{CL} \\
    -3x -8 + 4x &= 5 &|& \text{CL}\\
    x -8 &= 5 &|& +8\\
    x &= {\color{red}13}$$

4.  Remplacez $x$ par sa valeur dans la 1re équation:<br>
    $y = 2-{\color{red}13} = {\color{magenta}-11}$

5.  Notez la solution:<br>
    $S=\{({\color{red}13};{\color{magenta}-11}) \}$
```

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équation suivant: $\begin{cases}2x-3y &= 4 \quad &(1)\\
    2x + \phantom{0}y &=-1 &(2)
    \end{cases}$

```{tip}
Pour faciliter les calculs, isolez, si possible, une variable dont le
coefficient est 1. Dans cet exemple, il faut isoler le $y$ de l'équation (2).
```

1.  Isolez le $y$ dans la 2e équation:<br>
    $\begin{cases}2x-3y = 4\\
    y = -3 - 2x
    \end{cases}$

2.  Remplacez $y$ par $-3 -2x$ dans l'équation (1):<br>
    $\begin{cases}2x -3({\color{orange}-3-2x}) = 4\\
    y = {\color{orange}-3-2x}
    \end{cases}$

3.  Résolvez la 2e équation:
    $$2x -3(-3-2x) &= 4 \qquad &|& \text{CL} \\
    2x + 9 + 6x &= 4 &|& \text{CL}\\
    8x + 9 &= 4 &|& -9\\
    8x &= -5 &|& :8\\
    x &= {\color{red}-\dfrac{5}{8}}$$

4.  Remplacez $x$ par sa valeur dans la 2e équation:<br>
    $y = -3 - 2{\color{red}-\dfrac{5}{8}} = -3 + \dfrac{5}{4} = -\dfrac{12}{4} + \dfrac{5}{4} =  {\color{magenta}-\dfrac{7}{4}}$

5.  Notez la solution:<br>
    $S=\{({\color{red}-\dfrac{5}{8}};{\color{magenta}-\dfrac{7}{4}}) \}$
````

````{admonition} Marche à suivre - Méthode par combinaison linéaire (addition)
:class: note
Pour résoudre un système d'équations par combinaison linéaire, il faut:

1.  transformer les deux équations pour les mettre sous la forme $ax + by = c$
2.  multiplier (ou diviser) les deux membres de la première équation par un même
    nombre et ceux de la deuxième équation par un même nombre pour que les
    coefficients d'une des inconnues soient opposés.
3.  additionner les deux équations (une des inconnue doit disparaître)
4.  résoudre l'équation à une inconnue
5.  remplacer la valeur de l'inconnue dans une des équations de départ pour trouver l'autre inconnue
6.  noter l'ensemble de solutions
````

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équation suivant: $\begin{cases}2x = 5y - 4 \quad &(1)\\
3x - 6y =-3 &(2)\end{cases}$


1.  Mettez la 1re équation sous la bonne forme:<br>
    $\begin{cases}2x-5y = 4\\
    3x - 6y = -3
    \end{cases}$

2.  Pour pouvoir supprimer les $x$, multipliez la 1re équation par $3$ et la
    2e par $-2$:<br>
    $\begin{cases}2x-5y = 4 \qquad &|& \cdot 3\\
    3x - 6y = -3 &|& \cdot (-2)
    \end{cases}$

    $\begin{cases}\phantom{-}6x-15y = 12\\
    -6x + 12y = 6
    \end{cases}$

3.  Additionnez les deux équations:
    $$6x & - & 15y & = & 12\\
    -6x & + & 12y & = & 6\\
    \hline
    & &-3y & = & 18\\$$

4.  Résolvez l'équation:<br>
    $$-3y &= 18 \qquad &|& :(-3)\\
    y &= -\dfrac{18}{3} = {\color{magenta}-6}$$

4.  Remplacez $y$ par sa valeur dans une des équations de départ:<br>
    $$2x-5 \cdot ({\color{magenta}-6}) &= 4 \qquad &|& \text{CL}\\
    2x+30 &= 4 &|& - 30\\
    2x &= 26 &|& :2\\
    x &= {\color{red}13}\\
    $$

5.  Notez la solution:<br>
    $S=\{({\color{red}13};{\color{magenta}-6}) \}$
````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-sys-ex1>`
```

```{container} frame
# Remarque

Comme lors de la résolution d'équations du premier degré, un système peut ne
pas avoir des solution ou en avoir une infinité:

- S'il n'a pas de solution, la solution est notée: $S = \varnothing$.
- S'il y a une infinité de solutions, la solution sera composée de tous les
  point d'une droite, $y = ax + b$.

  La solution sera notée: $ S = \{(x; ax + b) | x \in \mathbb{R}\}$.
```

`````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équation suivant: $\begin{cases}2x = 4y + 6 \quad &(1)\\
-x + 2y = 5 &(2)\end{cases}$

````{list-grid}
:style: grid-template-columns: 1fr 1fr;

-   # Graphiquement

    $\begin{cases}y &= \dfrac{1}{2}x - \dfrac{3}{2}\\
    y &= \dfrac{1}{2}x + \dfrac{5}{2}\end{cases}$

    Les deux droites sont parallèles, il n'y a donc pas d'intersection entre les
    deux droites.

    ```{jsxgraph} systeme2
    :style: width: 90%;
    ```

-   # Par combinaison linéaire

    $\begin{cases}2x - 4y &= 6\\
    -x + 2y &= 5 \quad &|& \cdot 2\end{cases}$

    $$2x & - & 4y & = & 6\\
    -2x & + & 4y & = & 10\\
    \hline
    & &0 & \neq & 16\\$$

    $S = \varnothing$
````
`````

`````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équation suivant: $\begin{cases}2x - 4y &=  6 \quad &(1)\\
-x + 2y &= -3 &(2)\end{cases}$

````{list-grid}
:style: grid-template-columns: 1fr 1fr;

-   # Graphiquement

    Les deux droites sont confondues, la solution est tous les points de la
    droite $y = \dfrac{1}{2}x - \dfrac{3}{2}$.

    ```{jsxgraph} systeme3
    :style: width: 90%;
    ```

-   # Par combinaison linéaire

    $\begin{cases}2x - 4y &= 6\\
    -x + 2y &= -3 \quad &|& \cdot 2\end{cases}$

    $$2x & - & 4y & = & 6\\
    -2x & + & 4y & = & -6\\
    \hline
    & &0 & = & 0\\$$

    $\begin{cases}y &= {\color{red}\dfrac{1}{2}x - \dfrac{3}{2}}\\
    y &= \dfrac{1}{2}x - \dfrac{3}{2}\end{cases}$

    $S = \{(x; {\color{red}\frac{1}{2}x - \frac{3}{2}}) | x \in \mathbb{R}\}$

````
`````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-sys-ex2>`,
{numref}`exercice %s<exercice:1-sys-ex3>`,
{numref}`exercice %s<exercice:1-sys-ex4>`,
{numref}`exercice %s<exercice:1-sys-ex5>`,
{numref}`exercice %s<exercice:1-sys-ex6>`,
{numref}`exercice %s<exercice:1-sys-ex7>`,
{numref}`exercice %s<exercice:1-sys-ex8>`,
{numref}`exercice %s<exercice:1-sys-ex9>`,
{numref}`exercice %s<exercice:1-sys-ex10>` et
{numref}`exercice %s<exercice:1-sys-ex11>`.
```

### Systèmes d'équations 3x3 et plus

````{admonition} Définition
:class: note
Une **équation linéaire à trois inconnues** est une équation de la forme

```{math}
:class: align-center
ax + by + cz=d
```
avec $a \text{, } b \text{, } c \text{, } d \in \mathbb{R} \text{, } a \ne 0 \text{, } b \ne 0 \text{ et } c \ne 0$.

Trois équations linéaires à trois inconnues considérées simultanément forment un
**système de trois équations linéaires à trois inconnues**:

```{math}
:class: align-center
\begin{cases}
a_1x+b_1y+c_1z&= d_1 \quad &(1)\\
a_2x+b_2y+c_2z &= d_2 &(2)\\
a_2x+b_2y+c_2z &= d_2 &(3)
\end{cases}
```
avec $a_1 \text{, } a_2 \text{, } a_3 \text{, } b_1 \text{, } b_2 \text{, } \text{, } b_3 c_1 \text{, } c_2 \text{, } c_3 \in \mathbb{R}$

Une **solution** d'un tel système est un triplet $(x;y;z)$ de nombres qui sont
solutions des équations $(1)$, $(2)$ et $(3)$.
````

````{admonition} Marche à suivre - Résolution système 3x3
:class: note
Pour résoudre un système d'équations 3x3, il faut:

1.  Éliminer à deux reprises **la même inconnue** en utilisant la méthode de
    combinaison linéaire sur deux des trois équations.

    Les deux équations trouvées nous donnent un système 2x2 (2 équations, 2
    inconnues).
2.  Résoudre le système 2x2.
3.  Insérer les valeurs trouvées dans une des équations de départ pour
    déterminer la troisième inconnue.
4.  Noter la solution.
````

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équations suivant:
$\begin{cases}
\phantom{0}x+ \phantom{0}y+ \phantom{0}z&= 60 & (1)\\
\phantom{0}x- 3y + 2z &= -4 & (2)\\
2x + 5y- 5z&= 68 & (3)
\end{cases}$

1.  Supprimez $x$ dans les équations (1) et (2):
    $$\begin{cases}
    \phantom{0}x+ \phantom{0}y+ \phantom{0}z&= 60\\
    \phantom{0}x- 3y + 2z &= -4  \quad &|& \cdot (-1)\\
    \end{cases}$$
    $$x & + & y & + & z & = & 60 &\\
    -x & + & 3y & - & 2z & = & 4 &\\
    \hline
    & & 4y & - & z & =& 64 & \quad (4)\\$$

    Supprimez $x$ dans les équations (1) et (3):
    $$\begin{cases}
    \phantom{0}x+ \phantom{0}y+ \phantom{0}z&= 60 \quad &|& \cdot 2\\
    2x + 5y - 5z&= 68  \quad &|& \cdot (-1)\\
    \end{cases}$$
    $$2x & + & 2y & + & 2z & = & 120 &\\
    -2x & - & 5y & + & 5z & = & -68 &\\
    \hline
    & & -3y & + & 7z & =& 52 & \quad (5)\\$$
2.  Résolvez le système 2x2 des équations (4) et (5):
    $\begin{cases}\phantom{-}4y - \phantom{0}z &= 64 &(4) &|& \cdot 3\\
    -3y + 7y &= 52 &(5) &|& \cdot 4\end{cases}$

    $$12y & - & 3z & = & 192\\
    -12y & + & 28z & = & 208\\
    \hline
    & &25z & = & 400$$
    $z = \dfrac{400}{25} = {\color{orange}16}$

    Remplacez z dans (4): $4y - 16 = 64$ => $4y = 80$ => $y = {\color{magenta}20}$
3.  Insérez les valeurs de $y$ et $z$ dans l'équation (1):
    $$x + 20 +16 &= 60\\
    x + 36 &= 60\\
    x &= {\color{red}24}$$
4.  Notez la solution:<br>
    $S=\{({\color{red}24};{\color{magenta}20};{\color{orange}16})\}$
````

````{container} frame noprint
# Exemple {num2}`exemple`

Résolvez le système d'équations suivant:
$\begin{cases}
3x + 4y+ 2z&= 9 & (1)\\
4x + 3y  &= 8 & (2)\\
\phantom{0x0+} 2y+ 3z&= 7 & (3)
\end{cases}$

1.  L'équation ne contient pas de $x$, elle a déjà la bonne forme.

    Supprimez $x$ dans les équations (1) et (2):
    $$\begin{cases}
    3x + 4y+ 2z&= 9 \quad &|& \cdot 4\\
    4x + 3y  &= 8  \quad &|& \cdot (-3)\\
    \end{cases}$$
    $$12x & + & 16y & + & 8z & = & 36 &\\
    -12x & - & 9y &  & & = & -24 &\\
    \hline
    & & 7y & + & 8z & =& 12 & \quad (4)\\$$
2.  Résolvez le système 2x2 des équations (3) et (4):
    $\begin{cases}2y+ 3z&= 7 &(3) &|& \cdot 7\\
    7y + 8z &= 12 &(4) &|& \cdot (-2)\end{cases}$

    $$14y & + & 21z & = & 49\\
    -14y & - & 16z & = & -24\\
    \hline
    & &5z & = & 25$$
    $z = \dfrac{25}{5} = {\color{orange}5}$

    Remplacez z dans (3):  $2y + 15 = 7$ => $2y = -8$ => $y = {\color{magenta}-4}$
3.  Insérez les valeurs de $y$ et $z$ dans l'équation (2):
    $$4x - 12 &= 8\\
    4x &= 20\\
    x &= {\color{red}5}$$
4.  Notez la solution:<br>
    $S=\{({\color{red}5};{\color{magenta}-4};{\color{orange}5})\}$
````

```{container} frame
# Remarque

Avec la méthode ci-dessus, il est possible de résoudre des systèmes linéaires de
$n$ équations à $n$ inconnues!
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-sys-ex12>`,
{numref}`exercice %s<exercice:1-sys-ex13>` (à faire en exemple),
{numref}`exercice %s<exercice:1-sys-ex14>`,
{numref}`exercice %s<exercice:1-sys-ex15>` et
{numref}`exercice %s<exercice:1-sys-ex16>`.
```

## Exercices

### Exercice {num2}`exercice:1-sys-ex1`

Résolvez les systèmes suivants en utilisant la méthode la plus adaptée.

{.lower-alpha-paren .columns-2}
1. $\begin{cases}\phantom{0}3x-8y &= 49\\  10x+4y &= 10\end{cases}$
2. $\begin{cases}12x-5y &= 45\\ \phantom{0}8x+7y &= -1\end{cases}$
3. $\begin{cases}2x+11y &= 5\\ 2x+\phantom{1}6y &= 0\end{cases}$
4. $\begin{cases}\phantom{0}2x+\phantom{0}3y &= \phantom{0}7\\ 30x-12y &= 67\end{cases}$
5. $\begin{cases}6x-3y &= -9\\ 8x-\phantom{0}y &= \phantom{-}0\end{cases}$
6. $\begin{cases}4x+\phantom{0}y &= 26\\ 7x-8y &= 13\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{(3;-5)\}$
2. $S=\{(\frac{5}{2};-3)\}$
3. $S=\{(-3;1)\}$
4. $S=\{(\frac{5}{2};\frac{2}{3})\}$
5. $S=\{(\frac{1}{2};4)\}$
6. $S=\{(\frac{17}{3};\frac{10}{3})\}$
```

### Exercice {num2}`exercice:1-sys-ex2`

Les systèmes suivants n'ont aucune, une ou une infinité de solutions. Résolvez
et notez l'ensemble des solutions correctement.

{.lower-alpha-paren .columns-2}
1. $\begin{cases}2x-3y &= 5   \\  4x-6y &= 10\end{cases}$
2. $\begin{cases}6x+y &= -4  \\  2x+5y &= 10\end{cases}$
3. $\begin{cases}\frac{3}{2}x+y &= -2  \\  -6x-4y &= 8\end{cases}$
4. $\begin{cases}7x-3y &= -5   \\   14x-6y &= 2\end{cases}$
5. $\begin{cases}2x+2y &= -6  \\  3x+3y &= 3\end{cases}$
6. $\begin{cases} x+y &= 9  \\  4x-5y &= 2\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=\{(x;\frac{2}{3}x-\frac{5}{3}) | x \in \mathbb{R}\}$
2. $S=\{(-\frac{15}{14};\frac{17}{7})\}$
3. $S=\{(x;-\frac{3}{2}x - 2) | x \in \mathbb{R}\}$
4. $S=\varnothing$
5. $S=\varnothing$
6. $S=\{(\frac{47}{9};\frac{34}{9})\}$
```

### Exercice {num2}`exercice:1-sys-ex3`

Résolvez les systèmes suivants

{.lower-alpha-paren .columns-2}
1. $\begin{cases}6(x+y+2) +13x = 98 \\ x+y+2  = 6x\end{cases}$
1. $\begin{cases}6(x+y) +7(x-y)-19 = 0 \\ (x+y) -4(x-y) + 2= 0\end{cases}$
1. $\begin{cases}4(x-7) +9y = 80 \\   2(x-7) = \frac{11}{2}y\end{cases}$
1. $\begin{cases}(x+2)(y-3)= xy \\ xy+15= (x+3)(y+2)\end{cases}$
1. $\begin{cases}(x+5)(y+7) = (x+1)(y-9)+112 \\ 2(x+5) = 3y+1\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{(2;8)\}$
2. $S=\{(\frac{3}{2};\frac{1}{2})\}$
3. $S=\{(18;4)\}$
4. $S=\{(0;3)\}$
5. $S=\{(3;5)\}$
```

### Exercice {num2}`exercice:1-sys-ex4`

Un marchand veut mélanger des cacahuètes coûtant CHF 6.- le kilo et des noix de
cajou coûtant CHF 16.- le kilo, pour obtenir 60 kilos d'un mélange coûtant
CHF 10.- le kilo. Combien de kilos de chaque sorte faudrait-il mélanger?


```{block} solution
Il faut mélanger 36 kilos de cacahuètes et 24 kilos de noix de cajou.
```

### Exercice {num2}`exercice:1-sys-ex5`

Une petite société d'ameublement fabrique des canapés et des fauteuils. Chaque
canapé nécessite 8 heures de travail et CHF 120.- de matériel, alors qu'un
fauteuil peut être construit pour CHF 70.- en 6 heures. La société dispose de
340 heures de travail par semaine et peut se permettre d'acheter pour CHF
4'500.- de matériel. Combien de fauteuils et de canapés peut-on fabriquer en
utilisant toutes les heures de travail et tout le matériel?


```{block} solution
20 canapés et 30 fauteuils peuvent être fabriqués.
```

### Exercice {num2}`exercice:1-sys-ex6`

6 kg de confiture sont répartis dans 14 pots. Certains ont une contenance de
500 g, les autres ne contiennent que 375 g. Quel est le nombre de pots de chaque
sorte?


```{block} solution
Il y a 8 pots de 375 g et 6 pots de 500 g.
```

### Exercice {num2}`exercice:1-sys-ex7`

Le cirque KNIE se produit ce soir dans votre ville. Le clou du spectacle est un
numéro de dressage de chameaux et de dromadaires (dix en tout). Sur chaque bosse
de ces animaux se trouve un ouistiti qui jongle avec des boules. On compte
treize ouistitis. Combien y a-t-il de chameaux et de dromadaires sur la piste du
cirque KNIE?


```{block} solution
Il y a 3 chameaux et 7 dromadaires.
```

### Exercice {num2}`exercice:1-sys-ex8`

Un rectangle a un périmètre de $60\,cm$. Si sa longueur augment de $5\,cm$
et sa largeur diminue de $2\,cm$, son aire reste la même. Quelles sont les
dimensions de ce rectangle?


```{block} solution
La longueur du rectangle mesure 20 cm et sa largeur 10 cm.
```

### Exercice {num2}`exercice:1-sys-ex9`

Chez "Mon fleuriste" un bouquet composé de 3 roses et de 5 iris coûte CHF 14.50
tandis qu'un bouquet composé de 7 roses et de 3 iris coûte CHF 16.50. Quel est
le prix d'une rose et celui d'un iris?


```{block} solution
Une rose coûte CHF 1.50 et un iris CHF 2.-.
```

### Exercice {num2}`exercice:1-sys-ex10`

Luc et Thomas ont ensemble 34 ans. Dans une année, Luc aura le double de l'âge
de Thomas (aussi dans une année). Quel est l'âge de chacun aujourd'hui?


```{block} solution
Ils ont 11 et 23 ans.
```

### Exercice {num2}`exercice:1-sys-ex11`

Résolvez les systèmes suivants

{.lower-alpha-paren .columns-2}
1. $\begin{cases}x+\dfrac{2y}{3} &=& 7\\   x-y &=& 2\end{cases}$

2. $\begin{cases}\dfrac{x-1}{3} &=& \dfrac{y-2}{5}\\ 3x + \dfrac{y}{2} &=& 4\end{cases}$

3. $\begin{cases}\dfrac{x-1}{2} +\dfrac{y-2}{4} &=& 1\\ \dfrac{x-3}{3} - \dfrac{y+2}{2} &=& -2\end{cases}$

4. $\begin{cases} \dfrac{3}{4}x + \dfrac{4}{5}y &=& 35\\ \dfrac{9}{10}x -\dfrac{7}{5}y +17 &=& 0\end{cases}$

5. $\begin{cases}  2x + \dfrac{2}{3}y &=& 44 \\ 3x - \dfrac{5}{6}y &=& 33\end{cases}$

6. $\begin{cases} \dfrac{9x}{4} &=& \dfrac{10y}{3} +4 \\ \dfrac{11y}{5} &=&  \dfrac{10x}{3} -47\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{(5;3)\}$
2. $S=\{(1;2)\}$
3. $S=\{(3;2)\}$
4. $S=\{(20;25)\}$
5. $S=\{(16;18)\}$
6. $S=\{(24;15)\}$
```

{.avoid-break-inside}
### Challenge {num2}`challenge`

Une grande table de conférence doit être fabriquée en forme de rectangle avec
deux demi-cercles à ses extrémités (voir la figure). La table doit avoir un
périmètre de 12 mètres, et l'aire de sa partie rectangulaire doit être le double
de la somme des aires de ses deux parties en demi-cercle. Que mesurent la
longueur $l$ et la largeur $b$ de la partie rectangulaire de la table de
conférence.

```{figure} images/table.png
:width: 30%
```

```{solution}
$l = 3$m und  $b = \dfrac{6}{\pi} \approx 1.91m$
```

### Challenge {num2}`challenge`

Une piscine a une longueur de 12 m, une largueur de 5 m et une profondeur de
4.5 m. Elle peut être remplie à l'aide de deux conduites d'eau $A$ et $B$. Si on
ouvre la conduite $A$ pendant deux heures et la conduite $B$ pendant une heure
et demie, alors le niveau de l'eau monte de 1.28 mètres. Si on inverse les temps
d'ouverture des conduite, alors le niveau monte que de 1.205 mètres. Quel est le
débit (en litres par minute) des deux conduites?


```{solution}
$v_A=430\,\frac{litres}{minute}$, $v_B=280\,\frac{litres}{minute}$
```

### Exercice {num2}`exercice:1-sys-ex12`

Résolvez les systèmes suivants

{.lower-alpha-paren .columns-2}
1. $\begin{cases}
 2x+ 5y+ \phantom{0}z&=-7 &\text{(1)} \\
 2x-4 y -2 z &= 11 & \text{(2)}\\
 2x+ 2y + 3z&= 8 & \text{(3)}
\end{cases}$

2. $\begin{cases}
 \phantom{-}4x- \phantom{0}y- \phantom{0}z&=-4  & \text{(1)}\\
 -3x+ 2y + 8z &= \frac{9}{2} & \text{(2)} \\
 20x-3 y + 3z&= -14 & \text{(3)}
\end{cases}$

3. $\begin{cases}
5x \phantom{+ 0y}+ 2z&= 1 &\text{(1)}\\
\phantom{0x +} \phantom{0}y - 3z &= 2 &\text{(2)}\\
 2x+ y &=3 &\text{(3)}
\end{cases}$

4. $\begin{cases}
 \phantom{0}6x+ 8y+ 2z&= -7 &\text{(1)} \\
 \phantom{0}2x -2y + 6z &= 4 &\text{(2)} \\
 -3x-3y + z &= 10 &\text{(3)}
\end{cases}$

5. $\begin{cases}
 2x+ 3y - \phantom{0}z&= 4 &\text{(1)}  \\
 4x \phantom{+ 00y} + \phantom{0}z &= 0 &\text{(2)}\\
 \phantom{00x +} 6y - 5z &= 12 &\text{(3)}
\end{cases}$

6. $\begin{cases}
 \phantom{0}3x+ 2y+  1z&= 23 &\text{(1)} \\
 \phantom{0}5x+ 2y + 4z &= 46 &\text{(2)} \\
 10x+ 5y + 4z&=  75 &\text{(3)}
\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{(\frac{5}{2};-3;3) \}$
2. $S=\{(\frac{1}{2};7;-1) \}$
3. $S=\{(\frac{1}{11};\frac{31}{11};\frac{3}{11}) \}$
4. $S=\{(-4;\frac{3}{2};\frac{5}{2}) \}$
5. $S=\{(\frac{1}{2};\frac{1}{3};-2) \}$
6. $S=\{(4;3;5)\}$
```

### Exercice {num2}`exercice:1-sys-ex13`

Il y a une année, Paul avait 3 fois l'âge de Emma aujourd'hui. Il y a deux ans,
Janine avait le double de l'âge à Emma (aussi il y a deux ans). Aujourd'hui ils
ont 23 ans au total. Quelle sont les âges d'Emma, Janine et Paul aujourd'hui?

```{block} solution
Emma a 4 ans, Janine 6 ans et Paul 13 ans.
```

### Exercice {num2}`exercice:1-sys-ex14`

Le FC Bulle a joué 44 matchs. Le nombre de matchs qu'ils n'ont pas perdu
(match-nuls et victoires) est 3 fois plus élevé que le nombre de défaites. De
plus, ils ont 14 victoires de plus que de défaites. Combien y a-t-il eu de
victoires, de match-nuls et de défaites?

```{block} solution
Il y a eu 25 victoires, 8 match-nuls et 11 défaites.
```

### Exercice {num2}`exercice:1-sys-ex15`

La somme des arêtes d'un parallélépipède rectangle est de $60\,cm$. Si on retire
$2\,cm$ à la plus grande arête et si on ajoute $2\,cm$ à la plus petite, on
obtient un cube. Quelles sont les longueurs des arêtes du parallélépipède?

```{block} solution
Les longueurs des arêtes sont $3\,cm$, $5\,cm$ et $7\,cm$.
```

### Exercice {num2}`exercice:1-sys-ex16`

Un téléphérique propose les prix suivants. Un aller-retour coûte CHF 6.-, la
montée seule coûte CHF 4.50 et la descente seule coûte CHF 3.-. Ce dimanche
680 personnes sont montées et 520 personnes sont descendues avec le téléphérique
et la caisse compte CHF 3930.-. Combien de billets de chaque sorte ont-ils été
vendus.

```{block} solution
460 aller-retour, 60 descentes et 220 montées ont été vendus.
```

### Challenge {num2}`challenge`

Résolvez les systèmes suivants

{.lower-alpha-paren .columns-2}
1.  $\begin{cases}
    x+ y+ z +u &=-3  & \text{(1)}\\
    2x+ y +2 z+u &= -4 & \text{(2)}\\
    -x+ 3y  - z+2u &= 0 & \text{(3)}\\
    3x+ y  - 3z- 3u &= 9 & \text{(4)}\\
    \end{cases}$

2.  $\begin{cases}
    2x+ y- z +u &=3  & \text{(1)}\\
    x+3y + z -u &= -4 & \text{(2)}\\
    x+ 2y  + 2z - u &= 1 & \text{(3)}\\
    2x+ 2y  + 2z + u &= 5 & \text{(4)}\\
    \end{cases}$


```{solution}
{.lower-alpha-paren .columns-2}
1. $S=\{(-2;3;1;-5)\}$
2. $S=\{(4;-\frac{13}{4};\frac{7}{4};0)\}$
```

### Challenge {num2}`challenge`

 La mère, le père, le fils et la fille d'une famille ont ensemble 100 ans. Le
 père a quatre fois l'âge de son fils et ensemble ils ont le même âge que la
 mère et la fille ensemble. Il y a deux ans, la mère avait exactement le double
 de l'âge des deux enfants cumulé (aussi il y a deux ans). Quelle est l'âge de
 chaque membre de cette famille?


```{solution}
Le père a 40 ans, la mère 38 ans, le fils 10 ans et la fille 12 ans.
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
