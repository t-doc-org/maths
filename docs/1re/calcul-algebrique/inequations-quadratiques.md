% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Inéquations quadratiques

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/inequations-quadratiques.xopp>`
```

## Théorie

````{admonition} Définition
:class: note
Une **inéquation de degré 2** est une inéquation qui peut être écrite sous la
forme

```{math}
:class: align-center
ax^2 + bx + c \geq 0
```
avec $a \text{, }b \text{ et c } \in \mathbb{R} \text{ et } a  \ne 0$
````

````{admonition} Marche à suivre - Résolution d'inéquations quadratiques
:class: note
1.  Utilisez les règles d'équivalence pour regrouper tous les termes dans le
    membre de gauche afin que celui de droite soit égal à $0$.
2.  Factorisez le polynôme.
3.  Étudiez le signe de chacun des facteurs dans un tableau et déterminez le
    signe du polynôme en appliquant la règle des signes.
4.  Notez l'ensemble des solutions S de l'inéquation.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez $x^2 + 4 \geq 5x$.

1.  Mettez tous les termes dans le même membre:
    $$x^2 + 4 &\geq 5x \qquad &| -5x\\
    x^2 -5x + 4 &\geq 0$$
2.  Factorisez le trinôme avec la méthode de décomposition (somme-produit):
    $x^2 -5x + 4 = (x-4)(x-1)$
3.  Étudiez le signe de $(x-4)(x-1)$

    {.lower-alpha-paren}
    1.  Calculez les zéros en résolvant
        $(x-4)(x-1) = 0 \implies x_1 = {\color{red}4}$ et $x_2 = {\color{orange}1}$
    2.  Faites un tableau de signes:
        ```{flex-table}
        :class: function-table
        |$x$|{.l .w}$\tiny-\;\infty$|${\color{orange}1}$|{.w}|${\color{red}4}$|{.r .w}$\tiny+\;\infty$
        |$(x-4)$|$-$||$-$|$0$|$+$
        |$(x-1)$|$-$|$0$|$+$||$+$
        |$(x-4)(x-1) {\color{violet}\geq 0}$|${\color{violet}+}$|${\color{violet}0}$|$-$|${\color{violet}0}$|${\color{violet}+}$
        ```
4.  Le polynôme est positif ou nul de $-\infty$ à $1$ compris et de $4$ compris
    à $+\infty$:<br>
    $S = ]-\infty; 1] \cup [4; +\infty[$

```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-inequ-quad-ex1>` et
{numref}`exercice %s<exercice:1-inequ-quad-ex2>`
```

```{container} frame
# Remarque

Pour résoudre une inéquation quadratique dont vous n'avez pas trouvé de
factorisation, il faut calculer les zéros du polynôme, ainsi vous pourrez écrire
la forme factorisée.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}

1.  Résolvez $5x^2 -3x - 2 \leq 0$.

    Zéros du polynôme:<br>
    $a = 5$, $b = -3$ et $c = -2$<br>
    $\Delta = (-3)^2 - 4 \cdot 5 \cdot (-2) = 9 + 40 = 49 \implies \sqrt{\Delta} = \sqrt{49} = 7$

    $x_{1,2} = \dfrac{3 \pm 7}{2 \cdot 5} = \dfrac{3 \pm 7}{10}$

    $x_1 = \dfrac{3 + 7}{10} = \dfrac{10}{10} = {\color{orange}1}$<br>
    $x_2 = \dfrac{3 - 7}{10} = -\dfrac{4}{10} = {\color{magenta}-\dfrac{2}{5}}$

    Factorisation: ${\color{green}5}x^2 -3x - 2 = {\color{green}5}(x - {\color{orange}1})(x - ({\color{magenta}-\dfrac{2}{5}})) = 5(x-1)(x + \dfrac{2}{5})$

    Tableau de signes:
    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{magenta}-\dfrac{2}{5}}$|{.w}|${\color{orange}1}$|{.r .w}$\tiny+\;\infty$
    |${\color{green}5}$|$+$||$+$||$+$
    |$(x-1)$|$-$||$-$|$0$|$+$
    |$(x + \dfrac{2}{5})$|$-$|$0$|$+$||$+$
    |$5(x-1)(x + \dfrac{2}{5}) {\color{violet}\leq 0}$|$+$|${\color{violet}0}$|${\color{violet}-}$|${\color{violet}0}$|$+$
    ```
    $S = \left[-\dfrac{2}{5}; 1 \right]$

2.  Résolvez $-9x^2 -30x > 25$.

    Mettez tous les termes dans le même membre: $-9x^2 -30x -25 > 0$

    Zéros du polynôme:<br>
    $a = -9$, $b = -30$ et $c = -25$<br>
    $\Delta = (-30)^2 - 4 \cdot (-9) \cdot (-25) = 900 - 900 = 0$

    $x_1 = \dfrac{30}{2 \cdot (-9)} = -\dfrac{30}{18} = {\color{orange}-\dfrac{5}{3}}$

    Factorisation: ${\color{green}-9}x^2 -30x -25 = {\color{green}-9}(x - ({\color{orange}-\dfrac{5}{3}}))^2 = -9(x +\dfrac{5}{3})^2$

    Tableau de signes:
    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{orange}-\dfrac{5}{3}}$|{.r .w}$\tiny+\;\infty$
    |${\color{green}-9}$|$-$||$-$
    |$(x +\dfrac{5}{3})$|$-$|$0$|$+$
    |$(x +\dfrac{5}{3})$|$-$|$0$|$+$
    |$-9(x +\dfrac{5}{3})^2 {\color{violet}> 0}$|$-$|$0$|$-$
    ```
    $S = \varnothing$
```


```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-inequ-quad-ex3>`,
{numref}`exercice %s<exercice:1-inequ-quad-ex4>`,
{numref}`exercice %s<exercice:1-inequ-quad-ex5>` et
{numref}`exercice %s<exercice:1-inequ-quad-ex6>`.
```


## Exercices

### Exercice {num2}`exercice:1-inequ-quad-ex1`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2}
1. $(x-2)(x+6) < 0$
2. $(2-5x)(x-3) \geq 0$
3. $(x-2)(x+4)(1-x) \geq 0$
4. $(x+7)(2x+1)(3-x) < 0$
5. $x^3-4x \geq 0$
6. $(2x-5)(3x+4)(1-2x) \geq 0$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=]-6;2[$
2. $S=[\frac{2}{5};3]$
3. $S=]-\infty; -4] \cup[1;2]$
4. $S=]-7;-\frac{1}{2}[\cup]3; +\infty[$
5. $S=[-2;0]\cup[2;+\infty[$
5. $S=]-\infty;-\frac{4}{3}]\cup[\frac{1}{2};\frac{5}{2}]$
```

### Exercice {num2}`exercice:1-inequ-quad-ex2`

Résolvez les inéquations suivantes en factorisant au moyen des identités
remarquables, en décomposant le trinôme (somme-produit) ou en regroupant.

{.lower-alpha-paren .columns-2}
1. $x^2+4 \geq 5x$
2. $(2x+1)(5-3x) > 0$
3. $3x^2-7x \leq 2x^2-12$
4. $(x-2)(5x+7)>(2x-3)(x-2)$
5. $x^3-9x < 0$
6. $(2x+1)(x-2)-4x^2+1 \leq 0$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=]-\infty;1] \cup [4;+\infty[$
2. $S=]-\dfrac{1}{2};\dfrac{5}{3}[$
3. $S=[3; 4]$
4. $S=]-\infty;-\dfrac{10}{3}[\cup]2; +\infty[$
5. $S=]-\infty;-3[\cup]0;+3[$
6. $S=]-\infty;-1]\cup[-\dfrac{1}{2};+\infty[$
```

### Exercice {num2}`exercice:1-inequ-quad-ex3`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2}
1. $4x^2 + 7x -2 \geq 0$
2. $5x^2 + 13x -6 > 0$
3. $x^2 \leq -4x-2$
4. $x^2 + 6x + 5 > 2x^2 + 8x - 10$
5. $ 4x^2 + 81 < 36x$
6. $24x + 9 \geq -16x^2$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=]-\infty;-2] \cup [\dfrac{1}{4};+\infty[$
2. $S=]-\infty;-3[ \cup ]\dfrac{2}{5};+\infty[$
3. $S=[-2-\sqrt{2}; -2+\sqrt{2}]$
4. $S=]-5; 3[$
5. $S= \varnothing$
6. $S=\mathbb{R}$
```

### Exercice {num2}`exercice:1-inequ-quad-ex4`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2}
1. $9x^2 + 6x -2 \leq 0$
2. $x^2 < 3x - 1$
3. $16x^2 -40x + 25 > 0$
4. $-7x^2 + 5x > -2$
5. $ 3x^2 < 7$
6. $2x - 1 \geq -2x^2$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $S=[\dfrac{-1-\sqrt{3}}{3};\dfrac{-1+\sqrt{3}}{3}]$
2. $S=]\dfrac{3-\sqrt{5}}{2};\dfrac{3+\sqrt{5}}{2}[$
3. $S=\mathbb{R} \setminus \left \{\dfrac{5}{4} \right\} = ]-\infty; \dfrac{5}{4}[ \cup ]\dfrac{5}{4}; +\infty[$
4. $S=]-\dfrac{2}{7}; 1[$
5. $S=]-\dfrac{\sqrt{21}}{3};\dfrac{\sqrt{21}}{3}[$
6. $S=]-\infty; \dfrac{-1-\sqrt{3}}{2}] \cup [\dfrac{-1+\sqrt{3}}{2}; +\infty[$
```

### Exercice {num2}`exercice:1-inequ-quad-ex5`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   Sur la figure ci-contre, $AB=4\,cm$, $M$ est un point mobile sur le segment
    $AB$. $AMNP$ Et $MBQR$ sont des carrés.

    Que vaut $AM$ pour que la surface constituée par les deux carrés soit supérieure
    ou égale à $10\,cm^2$?
-   ```{figure} images/inequation1.png
    :width: 65%
    ```
````

```{block} solution
$S=[0;1]\cup[3;4]$ et donc $AM$ doit mesurer entre 0 et 1 cm ou entre 3 et 4 cm.
```

### Exercice {num2}`exercice:1-inequ-quad-ex6`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   $ABCD$ est un carré dont les coté mesurent $10\,cm$. G est un point du
    segment $AD$. Les points $E$, $F$, $G$, $H$ et $I$ sont placés de telle
    manière que $AEFG$ et $FHCI$ soient des carrés.

    Que vaut $AG$ pour que la surface grisée soit strictement inférieure à
    $58\,cm^2$?
-   ```{figure} images/inequation2.png
    :width: 50%
    ```
````

```{block} solution
$S=]3;7[$ et donc $AG$ doit mesurer plus de 3 cm, mais moins de 7 cm.
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
