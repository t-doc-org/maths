% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Équations quadratiques

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/equations-quadratiques.xopp>`
```

## Théorie

````{admonition} Définition
:class: note
Une **équation du deuxième degré à une inconnue** $x$ est une équation du type

```{math}
:class: align-center
ax^2 + bx + c = 0
```
avec $a \text{, }b \text{ et c } \in \mathbb{R} \text{ et } a  \ne 0$
````

````{admonition} Théorème
:class: note
Toute équation quadratique donnée sous la forme $ax^2+bx+c=0$
peut être résolue à l'aide de la formule suivante

```{math}
:class: align-center
\underbrace{x_{1,2}}_{x_1 \text{ et }x_2}=\dfrac{-b \pm \sqrt{b^2-4ac}}{2a}
```

${x_1}$ et ${x_2}$ sont appelées les **racines** du trinôme.

L'expression sous la racine

```{math}
:class: align-center
\Delta=b^2-4ac
```
est appelée le **discriminant** et détermine le nombre de solutions d'une
équation quadratique:


:$\Delta>0$: L'équation a **deux solutions** réelles<br>
Le polynôme factorisé est de la forme: $ a(x - x_{1})(x - x_{2})$

:$\Delta=0$:L'équation a **une solution** réelle (solution double)<br>
Le polynôme factorisé est de la forme: $ a(x - x_{1})^2$

:$\Delta<0$: L'équation **n'a pas de solution** réelle<br>
Le polynôme ne peut pas être factorisé.


````

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez le nombre de solutions, les solutions et la forme factorisée des
équations suivantes:

{.lower-alpha-paren}
1.  $2x^2 + 6x - 8 = 0$<br>
    $a=2$, $b=6$ et $c=-8$<br>
    $ \Delta = b^2-4ac = 6^2-4 \cdot 2 \cdot (-8) = 36 + 64 = 100 \implies \sqrt{\Delta} = \sqrt{100} = 10$

    $x_{1,2}=\dfrac{-6 \pm 10}{2 \cdot 2} = \dfrac{-6 \pm 10}{4}$

    $x_1 = \dfrac{-6 + 10}{4} = \dfrac{4}{4} = {\color{orange}1}$<br>
    $x_2 = \dfrac{-6 - 10}{4} = -\dfrac{16}{4} = {\color{magenta}-4}$

    Cette équation possède deux solutions: $S = \{{\color{magenta}-4}; {\color{orange}1}\}$.

    Forme factorisée: ${\color{green}2}x^2 + 6x - 8 = {\color{green}2}(x -{\color{orange}1})(x-({\color{magenta}-4}))=2(x-1)(x+4)$
2.  $4x^2 + 2 = 4x$<br>
    Il faut d'abord tout mettre l'équation sous la bonne forme:
    $4x^2 -4x + 2 = 0$<br>

    $a=4$, $b=-4$ et $c=2$<br>
    $ \Delta = b^2-4ac = (-4)^2-4 \cdot 4 \cdot 2 = 16 - 32 = -16 < 0$.

    Cette équation n'a pas de solution: $S = \varnothing$

    La factorisation n'est pas possible.
3.  $\frac{3}{2}x^2 + 6x + 6 = 0$<br>
    Pour résoudre l'équation, il est préférable de se débarasser du dénominateur
    en multipliant les deux membres par $2$: $3x^2 + 12x + 12 = 0$

    $a=3$, $b=12$ et $c=12$<br>
    $ \Delta = b^2-4ac = 12^2-4 \cdot 3 \cdot 12 = 144 - 144 = 0$

    $x_{1}=-\dfrac{b}{2a} =-\dfrac{12}{2 \cdot 3} = -\dfrac{12}{6} = {\color{magenta}-2}$

    Cette équation possède une seule solution: $S = \{{\color{magenta}-2}\}$.

    Forme factorisée: ${\color{green}\frac{3}{2}}x^2 + 6x + 6 = {\color{green}\frac{3}{2}}(x -({\color{magenta}-2)})^2=\frac{3}{2}(x+2)^2$

    :Remarque: Pour la forme factorisée, il faut toujours prendre l'équation de
    départ.
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-quad-ex1>`,
{numref}`exercice %s<exercice:1-equ-quad-ex2>`,
{numref}`exercice %s<exercice:1-equ-quad-ex3>`,
{numref}`exercice %s<exercice:1-equ-quad-ex4>`,
{numref}`exercice %s<exercice:1-equ-quad-ex5>` et
{numref}`exercice %s<exercice:1-equ-quad-ex6>`.
```


## Exercices

### Exercice {num2}`exercice:1-equ-quad-ex1`

Résolvez les équations suivantes et écrivez le polynôme sous forme factorisée.

{.lower-alpha-paren .columns-3}
1. $2x^2=50$
2. $4x^2-9x=0$
3. $x^2+6x=-9$
4. $-\frac{3}{4}x^2+\frac{5}{2}x=4$
5. $3x^2-48=0$
6. $4x^2+\frac{1}{4}x=5x-3$
7. $6x^2-x=2$
8. $4x^2+81=36x$
9. $6x^2-13x-5 = 0$


```{block} solution
{.lower-alpha-paren}
1. $S=\{5;-5\}$ et $P(x) = 2(x-5)(x+5)$
2. $S= \{0;\frac{9}{4}\}$ et $P(x) = 4x (x-\frac{9}{4})= x(4x-9)$
3. $S=\{-3\}$  et $P(x) = (x+3)^2$
4. $S=\varnothing$ et P(x) ne peut pas être factorisé.
5. $S=\{4;-4\}$ et $P(x) = 3(x-4)(x+4)$
6. $S=\varnothing$ et P(x) ne peut pas être factorisé.
7. $S= \{-\frac{1}{2};\frac{2}{3} \}$ et $P(x) = 6(x+\frac{1}{2})(x-\frac{2}{3}) = (2x+1)(3x-2)$
8. $S= \{\frac{9}{2} \}$  et $P(x) = 4(x-\frac{9}{2})^2= (2x-9)^2$
9. $S= \{-\frac{1}{3}; \frac{5}{2} \}$ et $P(x) = 6(x+\frac{1}{3})(x-\frac{5}{2}) = (3x+1)(2x-5)$
```

### Exercice {num2}`exercice:1-equ-quad-ex2`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-3}
1. $5x^2+13x=6$
2. $14x^2+28x+21=0$
3. $6x^2+10x+2=0$
4. $\frac{3}{2}x^2-4x-1=0$
5. $\frac{5}{3}x^2+3x+1=0$
6. $225x^2+210x+49=0$
7. $6x^2-8x-10=0$
8. $\frac{1}{2}x+2x^2=3x^2-\frac{5}{6}$
9. $100x^2+25x-200=0$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=\{-3;\frac{2}{5}\}$
2. $S=\varnothing$
3. $S=\{\frac{-5 - \sqrt{13}}{6};\frac{-5 + \sqrt{13}}{6}\}$
4. $S=\{\frac{4 - \sqrt{22}}{3};\frac{4 + \sqrt{22}}{3}\}$
5. $S=\{\frac{-9 - \sqrt{21}}{10};\frac{-9 + \sqrt{21}}{10}\}$
6. $S=\{-\frac{7}{15}\}$
7. $S=\{\frac{2-\sqrt{19}}{3}; \frac{2+\sqrt{19}}{3}\}$
8. $S=\{\frac{3-\sqrt{129}}{12};\frac{3+\sqrt{129}}{12}\}$
9. $S=\{\frac{-1-\sqrt{129}}{8};\frac{-1+\sqrt{129}}{8}\}$
```

### Exercice {num2}`exercice:1-equ-quad-ex3`

En diminuant deux côtés parallèles d'un carré de $2\,cm$ et en prolongeant les
deux autres côtés de $5\,cm$, on obtient un rectangle dont l'aire vaut
$11\,cm^2$ de plus que celle du carré original.

Quelle est la longueur du côté du carré?


```{block} solution
La longueur du côté du carré mesure $7\,cm$.
```

### Exercice {num2}`exercice:1-equ-quad-ex4`

Quel nombre positif est de $48.75$ inférieur à son carré?


```{block} solution
Le nombre est $7.5$.
```

### Exercice {num2}`exercice:1-equ-quad-ex5`

Si on augmente de $30\,cm$ le rayon d'un cercle, son aire est triplée.

Que vaut le rayon initial?


```{block} solution
Le rayon inital mesure $40.981\,cm$.
```

### Exercice {num2}`exercice:1-equ-quad-ex6`

Résolvez les système suivants en utilisant la méthode de substitution.

{.lower-alpha-paren .columns-2}
1. $\begin{cases}x+y &= 7 \\ x \cdot y &= 12\end{cases}$
2. $\begin{cases}x-y &= 5 \\ x \cdot y &= -4\end{cases}$
3. $\begin{cases}x^2+y^2 &= 146 \\ x-y &= 6\end{cases}$
4. $\begin{cases}x^2+y^2 &= 13 \\ x^2-y^2 &= -5\end{cases}$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=\{(3;4);(4;3)\}$
2. $S=\{(1;-4);(4;-1)\}$
3. $S=\{(-5;-11);(11;5)\}$
4. $S=\{(2;3);(2;-3);(-2;3);(-2;-3)\}$
```

### Challenge

La figure ci-dessous est composée d'un rectangle et d'un triangle équilatéral.
Le périmètre vaut $20\,cm$ et l'aire $15.732\,cm^2$.

Que valent la longueur $l$ et la largeur $b$ du rectangle?

```{figure} images/figure1.png
:width: 30%
```

```{solution}
La longeur vaut $l = 7\,cm$ et la largeur $b = 2\,cm$.
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
