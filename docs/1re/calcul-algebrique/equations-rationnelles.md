% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Fractions rationnelles

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/equations-rationnelles.xopp>`
```

## Théorie

### Équations avec fractions rationnelles

````{admonition} Définition
:class: note
Une **fraction rationnelle** est une expression de la forme $\dfrac{P(x)}{Q(x)}$
où $P(x)$ et $Q(x)$ sont des polynômes et $Q(x) \ne 0$.
````

```{container} frame
# Exemple {num2}`exemple`

$\dfrac{x + 1}{3}$, $\quad \dfrac{4}{2x + 5}$, $\quad \dfrac{3x - 2}{6 - x}$,
$\quad  \dfrac{x^2 - 1}{x + 7}$
```

````{admonition} Définition
:class: note
Le **domaine de définition** d'une fraction rationnelle $\dfrac{P(x)}{Q(x)}$ est
l'ensemble des valeurs de la ou des variables pour lesquelles $Q(x) \ne 0$.
C'est donc l'ensemble des valeurs pour lesquelles la fraction rationnelle existe.
Il est noté $D$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez le domaine de définition des fractions rationnelles suivantes.

{.lower-alpha-paren}
1.  $\dfrac{4 - 5x}{12}$

    Le dénominateur vaut $12$, il n'est jamais nul, donc $D = \mathbb{R}$.

2.  $\dfrac{4 - 5x}{2x -6}$

    Le dénominateur ne doit pas être nul:
    $$2x -6 &\neq 0  \quad &|& + 6\\
    2x &\neq 6  \quad &|& :2\\
    x &\neq {\color{orange}3} $$

    $\implies D = \mathbb{R} \setminus \{{\color{orange}3}\}$

3.  $\dfrac{4 - 5x}{x^2 + 3x + 2}$

    Le dénominateur ne doit pas être nul:
    $$x^2 + 3x + 2 &\neq 0  \quad &|& \text{factorisation}\\
    (x + 2)(x + 1) &\neq 0  $$

    $x + 2 \neq 0 \implies x \neq {\color{orange}-2}$ et $x+1 \neq 0 \implies x \neq {\color{violet}-1}$

    $\implies D = \mathbb{R} \setminus \{{\color{orange}-2}; {\color{violet}-1}\}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-rat-ex1>`
```

```{admonition} Marche à suivre - Équation de degré 1 et 2
:class: note
Pour résoudre une équation du premier degré ou du deuxième degré contenant des
fractions rationnelles, il faut:
1.  Déterminer le domaine de définition.
2.  Mettre au même dénominateur.
3.  Multiplier par ce même dénominateur. Cela nous donne une équation du premier
    ou du deuxième degré sans fraction algébrique.
4.  Résoudre l'équation.
5.  Vérifier que les solutions appartiennent au domaine de définition.
```

```{container}
# Remarque

La troisième règle d'équivalence pour la résolution d'équation:

"Multiplier (ou diviser) les deux membres de l'équation par un même nombre non
nul."

Grâce au domaine de définition, nous nous sommes assurés que dénominateur n'est
pas nul.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez les équations suivantes.

{.lower-alpha-paren}
1.  $\dfrac{3x + 7}{x -2}=0$

    Domaine de définition:<br>
    $x-2 \neq 0 \implies x \neq {\color{magenta}2} \implies D = \mathbb{R} \setminus \{{\color{magenta}2}\}$

    Résolution:
    $$\dfrac{3x+7}{x-2} &= 0 \qquad &|& \cdot (x-2)\\
    3x + 7 &= 0 \cdot (x-2) &|& \text{ CL}\\
    3x + 7 &= 0 &|& -7\\
    3x &= -7 &|& :3\\
    x &= {\color{orange}-\dfrac{7}{3}} \in D &|& \text{ Vérifiez que la solution appartient au domaine de définition}$$

    $\implies S = \left\{{\color{orange}-\dfrac{7}{3}}\right\}$

    ```{container} frame instructor noprint
    -> {numref}`exercice %s<exercice:1-equ-rat-ex2>` a) et b)
    ```
2.  $\dfrac{x^2+4x-5}{x+5}=2x-1$

    Domaine de définition:<br>
    $x+5 \neq 0 \implies x \neq {\color{magenta}-5} \implies D = \mathbb{R} \setminus \{{\color{magenta}-5}\}$

    Résolution:
    $$\dfrac{x^2+4x-5}{x+5} &= (2x-1) \cdot \dfrac{x+5}{x+5} \qquad &|& \text{ Mise au même dénominateur}\\
    \dfrac{x^2+4x-5}{x+5} &= \dfrac{(2x-1) \cdot (x+5)}{x+5} &|& \cdot (x+5)\\
    x^2+4x-5 &= (2x-1)(x+5) &|& \text{ CL}\\
    x^2+4x-5 &= 2x^2-x+10x-5 &|& \text{ CL}\\
    x^2+4x-5 &= 2x^2+9x-5 &|& -x^2-4x+5\\
    0 &= x^2+5x &|& \text{ Factorisation}\\
    0 &= x(x+5) $$


    $x = {\color{orange}0} \in D$ et $x + 5 = 0 \implies x = {\color{red}-5 \notin D}$

    $\implies S = \{{\color{orange}0}\}$

    ```{container} frame instructor noprint
    -> {numref}`exercice %s<exercice:1-equ-rat-ex2>` c) à f)
    ```
3.  $\dfrac{4x^2-9}{(4x+3)(x-2)}=0$

    Domaine de définition:<br>
    $(4x+3)(x-2) \neq 0$<br>
    $\implies 4x + 3 \neq 0 \implies 4x \neq -3 \implies x \neq {\color{magenta}-\dfrac{3}{4}}$<br>
    $\implies x-2 \neq 0 \implies x \neq {\color{green}2}$<br>
    $D = \mathbb{R} \setminus \left\{{\color{magenta}-\dfrac{3}{4}}; {\color{green}2}\right\}$

    Résolution:
    $$\dfrac{4x^2-9}{(4x+3)(x-2)} &= 0 \qquad &|& \cdot (4x+3)(x-2) \\
    4x^2-9 &= 0 \cdot (4x+3)(x-2) \quad  &|& \text{ CL} \\
    4x^2-9 &= 0  &|& \text{ Factorisation} \\
    (2x+ 3)(2x -3) &= 0$$

    $\implies 2x + 3 = 0 \implies 2x = -3 \implies x = {\color{orange}-\dfrac{3}{2}} \in D$<br>
    $\implies 2x - 3 = 0 \implies 2x = 3 \implies x = {\color{violet}\dfrac{3}{2}} \in D$

    $\implies S = \left\{{\color{orange}-\dfrac{3}{2}}; {\color{violet}\dfrac{3}{2}}\right\}$
4.  $\dfrac{x+1}{x-2}=\dfrac{x+3}{x-4}$

    Domaine de définition:<br>
    $x-2 \neq 0 \implies x \neq {\color{magenta}2}$<br>
    $x-4 \neq 0 \implies x \neq {\color{green}4}$<br>
    $\implies D = \mathbb{R} \setminus \{{\color{magenta}2}; {\color{green}4}\}$

    Résolution:
    $$\dfrac{x+1}{x-2} \cdot \dfrac{x-4}{x-4} &= \dfrac{x+3}{x-4} \cdot \dfrac{x-2}{x-2} \qquad &|& \text{ Mise au même dénominateur}\\
    \dfrac{(x+1)(x-4)}{(x-2)(x-4)} &= \dfrac{(x+3)(x-2)}{(x-4)(x-2)} &|& \cdot (x-2)(x-4)\\
    (x+1)(x-4) &= (x+3)(x-2) &|& \text{ CL}\\
    x^2-3x-4 &= x^2+x-6 &|& -x^2\\
    -3x-4 &= x-6 &|& -x +4\\
    -4x &= -2 &|& :(-4)\\
    x &= \dfrac{-2}{-4} = {\color{orange}\dfrac{1}{2}} \in D$$


    $\implies S = \left\{{\color{orange}\dfrac{1}{2}}\right\}$
5.  $\dfrac{2}{x-3}= \dfrac{3}{x+1}+\dfrac{4}{x^2-2x-3}$

    Factorisation des dénominateurs:<br>
    $\dfrac{2}{x-3}= \dfrac{3}{x+1}+\dfrac{4}{(x-3)(x+1)}$

    Domaine de définition:<br>
    $x-3 \neq 0 \implies x \neq {\color{magenta}3}$<br>
    $x+1 \neq 0 \implies x \neq {\color{green}-1}$<br>
    $\implies D = \mathbb{R} \setminus \{{\color{magenta}-1}; {\color{green}3}\}$

    Résolution:
    $$\dfrac{2}{x-3} \cdot \dfrac{x+1}{x+1} &= \dfrac{3}{x+1} \cdot \dfrac{x-3}{x-3} +\dfrac{4}{(x-3)(x+1)} \qquad &|& \text{ Mise au même dénominateur}\\
    \dfrac{2(x+1)}{(x-3)(x+1)} &= \dfrac{3(x-3)}{(x+1)(x-3)} +\dfrac{4}{(x-3)(x+1)} &|& \cdot (x-3)(x+1)\\
    2(x+1) &= 3(x-3) +4 &|& \text{ CL}\\
    2x+2 &= 3x-9 + 4 &|& \text{ CL}\\
    2x+2 &= 3x-5 &|& -2x + 5\\
    {\color{orange}-7} &= x \in D $$


    $\implies S = \{{\color{orange}-7}\}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-rat-ex3>`,
{numref}`exercice %s<exercice:1-equ-rat-ex4>` et
{numref}`exercice %s<exercice:1-equ-rat-ex5>`.
```

### Inéquations avec fractions rationnelles

```{admonition} Marche à suivre - Inéquation
:class: note
Pour résoudre une inéquation contenant des fractions rationnelles, il faut:
1.  Utiliser les règles d'équivalence pour regrouper tous les termes dans le
    membre de gauche afin que celui de droite soit égal à 0.
2.  Mettre au même dénominateur.
3.  Calculer et simplifier le numérateur.
    Factoriser le dénominateur.
4.  Déterminer le domaine de définition. (Déterminer les racines du
    dénominateur).
5.  Déterminer les racines (zéros) du numérateur.
6.  Étudier le signe du numérateur et de chaques facteurs du dénominateur dans
    un tableau de signes.
7.  Déterminer le signe du polynôme en appliquant la règle des signes.
8.  En déduire l'ensemble des solutions S de l'inéquation.
```


```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez les équations suivantes.

{.lower-alpha-paren}
1.  $\dfrac{4 - x}{2x + 3} \geq 0$

    Domaine de définition:<br>
    $2x + 3 \neq 0 \implies 2x \neq -3 \implies x \neq {\color{magenta}-\dfrac{3}{2}} \implies D = \mathbb{R} \setminus \left\{{\color{magenta}-\dfrac{3}{2}}\right\}$

    Racines du numérateur:<br>
    $4-x = 0 \implies x = {\color{orange}4}$

    Tableau de signes:

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{magenta}-\frac{3}{2}}$|{.w}|${\color{orange}4}$|{.r .w}$\tiny+\;\infty$
    |$4-x$|$+$||$+$|$0$|$-$
    |$2x+3$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{4 - x}{2x + 3} \geq 0$|$-$|{.g}|${\color{red}+}$|${\color{red}0}$|$-$
    ```

    Solution:<br>
    $S = \left]-\dfrac{3}{2};4 \right]$


    ```{container} frame instructor noprint
    -> {numref}`exercice %s<exercice:1-equ-rat-ex6>` a) -> d)
    ```
2.  $\dfrac{-14x + 7}{x^2 - x -20} \leq 0$

    Factorisation du dénominateur:<br>
    $\dfrac{-14x + 7}{(x-5)(x+4)} \leq 0$

    Domaine de définition:<br>
    $(x-5)(x+4) \neq 0$<br>
    $\implies x - 5 \neq 0 \implies x \neq {\color{magenta}5}$<br>
    $\implies x + 4 \neq 0 \implies x \neq {\color{violet}-4}$<br>
    $\implies D = \mathbb{R} \setminus \{{\color{violet}-4}, {\color{magenta}5}\}$

    Racines du numérateur:<br>
    $$-14x + 7 &= 0 \qquad &|& + 14x\\
    7 &= 14x  &|& :14\\
    \dfrac{7}{14} &= x  &|& \text{ simplification}\\
    x &= {\color{orange}\dfrac{1}{2}}$$

    Tableau de signes:

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{violet}-4}$|{.w}|${\color{orange}\frac{1}{2}}$|{.w}|${\color{magenta}5}$|{.r .w}$\tiny+\;\infty$
    |$-14x+7$|$+$||$+$|$0$|$-$||$-$
    |$x-5$|$-$||$-$||$-$|{.g}$0$|$+$
    |$x+4$|$-$|{.g}$0$|$+$||$+$||$+$
    |$\dfrac{-14x + 7}{x^2 - x -20} \leq 0$|$+$|{.g}|${\color{red}-}$|${\color{red}0}$|$+$|{.g}|${\color{red}-}$
    ```

    Solution:<br>
    $S = \left]-4;\dfrac{1}{2} \right] \cup ]5; +\infty[$


    ```{container} frame instructor noprint
    -> {numref}`exercice %s<exercice:1-equ-rat-ex6>` e) -> i)
    ```
3.  $\dfrac{2x + 5}{x + 1} > 3$

    Mise sous la bonne forme:

    $$\dfrac{2x + 5}{x + 1} &> 3 \qquad &|& -3 \text{ tout mettre dans le même membre}\\
    \dfrac{2x + 5}{x + 1} - 3 &> 0  &|& -3\\
    \dfrac{2x + 5}{x + 1} - 3 \cdot \dfrac{x+1}{x+1} &> 0  &|& \text{ mettre au même dénominateur}\\
    \dfrac{2x + 5 - 3(x+1)}{x + 1} &> 0  &|& \text{ CL}\\
    \dfrac{2x + 5 - 3x - 3}{x + 1} &> 0  &|& \text{ CL}\\
    \dfrac{-x + 2}{x + 1} &> 0
    $$

    Maintenant qu'il y à $0$ dans un des membres et une fraction simplifiée
    dans l'autre, résolvez l'inéquation.

    Domaine de définition:<br>
    $x+1 \neq 0 \implies x \neq {\color{magenta}-1} \implies D = \mathbb{R} \setminus \{{\color{magenta}-1}\}$

    Racines du numérateur:<br>
    $-x + 2 = 0 \implies x = {\color{orange}2}$

    Tableau de signes:

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{magenta}-1}$|{.w}|${\color{orange}2}$|{.r .w}$\tiny+\;\infty$
    |$-x+2$|$+$||$+$|$0$|$-$
    |$x+1$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{-x + 2}{x + 1}>0$|$-$|{.g}|${\color{red}+}$|$0$|$-$
    ```

    Solution:<br>
    $S = ]-1;2[$


```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-rat-ex7>`
```


## Exercices

### Exercice {num2}`exercice:1-equ-rat-ex1`

Déterminez le domaine de définition.

{.lower-alpha-paren .columns-3 .vsep-1}
1. $2x + 1$
2. $\dfrac{4x - 2}{3x - 7}$
3. $\dfrac{5x - 2}{x^2 -9}$
4. $\dfrac{9 - 6x}{x^2 - 4x + 4}$
5. $\dfrac{x^2 - 25}{14}$
6. $\dfrac{3x + 2}{x^3 - 7x^2 + 12x}$

```{block} solution
{.lower-alpha-paren .columns-3 .vsep-1}
1. $D= \mathbb{R}$
2. $D= \mathbb{R} \setminus \{\frac{7}{3}\}$
3. $D= \mathbb{R} \setminus \{-3; 3\}$
4. $D= \mathbb{R} \setminus \{2\}$
5. $D= \mathbb{R}$
6. $D= \mathbb{R} \setminus \{0; 3; 4\}$
```

### Exercice {num2}`exercice:1-equ-rat-ex2`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{2x-5}{x+7}=0$
2. $\dfrac{5-4x}{3x-2}=0$
3. $x + \dfrac{8}{x}=6$
4. $\dfrac{x^2-9}{x+4}=x-2$
5. $\dfrac{x+3}{x-1}=\dfrac{2x-7}{x-1}$
6. $\dfrac{x^2+3}{x-8}=x$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= \mathbb{R} \setminus \{-7\}$ et  $S=\{\frac{5}{2}\}$
2. $D= \mathbb{R} \setminus \{\frac{2}{3}\}$ et $S=\{\frac{5}{4}\}$
3. $D= \mathbb{R} \setminus \{0\}$ et $S=\{2; 4\}$
4. $D= \mathbb{R} \setminus \{-4\}$ et $S=\{-\frac{1}{2}\}$
5. $D= \mathbb{R} \setminus \{1\}$ et $S=\{10\}$
6. $D= \mathbb{R} \setminus \{8\}$ et $S=\{-\frac{3}{8}\}$
```

### Exercice {num2}`exercice:1-equ-rat-ex3`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{2x-1}{x-1}=3$
2. $\dfrac{5}{5x+2}=\dfrac{2}{2x-3}$
3. $\dfrac{8}{x^2-1} -\dfrac{4}{x+1}=\dfrac{2}{x-1}$
4. $\dfrac{5}{x-5}+6=\dfrac{x}{x-5}$
5. $\dfrac{2}{x^2-9}+\dfrac{5}{x-3}=\dfrac{3}{x+3}$
6. $\dfrac{2x}{x-4}=\dfrac{8}{x-4}-3$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= \mathbb{R} \setminus \{1\}$ et  $S=\{2\}$
2. $D= \mathbb{R} \setminus \{-\frac{2}{5}; \frac{3}{2}\}$ et $S=\varnothing$
3. $D= \mathbb{R} \setminus \{-1; 1\}$ et $S=\{\frac{5}{3}\}$
4. $D= \mathbb{R} \setminus \{5\}$ et $S=\varnothing$
5. $D= \mathbb{R} \setminus \{-3; 3\}$ et $S=\{-13\}$
6. $D= \mathbb{R} \setminus \{4\}$ et $S=\varnothing$
```

### Exercice {num2}`exercice:1-equ-rat-ex4`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{x-1}{2x+1}=\dfrac{3x+2}{x+18}$
2. $\dfrac{x^2+12x+13}{x^2+10x+9}=0$
3. $\dfrac{3x+3}{x^2+5x}+\dfrac{x+4}{x+5}=\dfrac{x+1}{x}$
4. $\dfrac{2}{x}-\dfrac{1}{x-1}=1$
5. $\dfrac{12}{x}=7+\dfrac{12}{1-x}$
6. $\dfrac{1}{x}+\dfrac{1}{x+5}=\dfrac{1}{6}$

```{block} solution
{.lower-alpha-paren .vsep-1}
1. $D= \mathbb{R} \setminus \{-18;-\frac{1}{2}\}$ et $S=\varnothing$
2. $D= \mathbb{R} \setminus \{-9; -1\}$ et $S=\{-6-\sqrt{23};-6+\sqrt{23}\}$
3. $D= \mathbb{R} \setminus \{-5; 0\}$ et $S=\{2\}$
4. $D= \mathbb{R} \setminus \{0; 1\}$ et $S=\varnothing$
5. $D= \mathbb{R} \setminus \{0; 1\}$ et $S=\{\frac{3}{7};4\}$
6. $D= \mathbb{R} \setminus \{-5; 0\}$ et $S=\{-3;10\}$
```

### Exercice {num2}`exercice:1-equ-rat-ex5`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{4}{2x+1}=\dfrac{3}{2x}$
2. $\dfrac{x}{x-3}=\dfrac{x+1}{9-3x}$
3. $\dfrac{x+1}{2(x-1)}+\dfrac{5x-8}{2x-2}=\dfrac{3(x-4)}{2(x-1)}$
4. $\dfrac{x-2}{x^2-x}=\dfrac{x}{x^2-1}$
5. $\dfrac{14}{x-14}=\dfrac{x-14}{14}$
6. $\dfrac{x+1}{x}-\dfrac{x}{x-8}=\dfrac{11}{8-x}$
7. $\dfrac{x+3}{x-2}-\dfrac{x+2}{x-3}=\dfrac{x-5}{x^2-5x+6}$
8. $\dfrac{x-1}{x+3}-\dfrac{x-4}{x+5}=\dfrac{7x+13}{x^2+8x+15}$
9. $\dfrac{3}{x-2}-\dfrac{1}{x+2}=\dfrac{2x+8}{x^2-4}$
10. $\dfrac{4(x-2)}{x-3}+\dfrac{3}{x}=-\dfrac{3}{x^2-3x}$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= \mathbb{R} \setminus \{-\frac{1}{2}; 0\}$ et $S=\{\frac{3}{2}\}$
2. $D= \mathbb{R} \setminus \{3\}$ et $S=\{-\frac{1}{4}\}$
3. $D= \mathbb{R} \setminus \{1\}$ et $S=\{-\frac{5}{3}\}$
4. $D= \mathbb{R} \setminus \{-1;0;1\}$ et $S=\{-2\}$
5. $D= \mathbb{R} \setminus \{14\}$ et $S=\{0;28\}$
6. $D= \mathbb{R} \setminus \{0; 8\}$ et $S=\{2\}$
7. $D= \mathbb{R} \setminus \{2; 3\}$ et $S=\{0\}$
8. $D= \mathbb{R} \setminus \{-5; -3\}$ et $S=\varnothing$
9. $D= \mathbb{R} \setminus \{-2; 2\}$ et $S=\mathbb{R} \setminus \{-2;2\}$
10. $D= \mathbb{R} \setminus \{0; 3\}$ et $S=\{-\frac{3}{4};2\}$
```

### Exercice {num2}`exercice:1-equ-rat-ex6`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{x}{x + 5} \leq 0$
2. $\dfrac{3x-4}{x+2} < 0$
3. $\dfrac{2x-1}{2-3x} \geq 0$
4. $\dfrac{5 - 3x}{x+3} > 0$
5. $\dfrac{1}{(x-2)(x-6)} > 0$
6. $\dfrac{4}{x^2-8x+15} \geq 0$
7. $\dfrac{-3}{x^2+5} < 0$
8. $\dfrac{x^2 - 2x - 15}{4x^2-16} \geq 0$
9. $\dfrac{x^2 - 25}{x^2 - x -2} > 0$


```{block} solution
{.lower-alpha-paren .vsep-1}
1. $D= \mathbb{R} \setminus \{-5\}$ et $S=]-5; 0]$
2. $D= \mathbb{R} \setminus \{-2\}$ et $S=]-2; \dfrac{4}{3}[$
3. $D= \mathbb{R} \setminus \{\dfrac{2}{3}\}$ et $S=[\dfrac{1}{2};\dfrac{2}{3}[$
4. $D= \mathbb{R} \setminus \{-3\}$ et $S=]-3;\dfrac{5}{3}[$
5. $D= \mathbb{R} \setminus \{2; 6\}$ et $S=]-\infty;2[ \cup ]6; +\infty[$
6. $D= \mathbb{R} \setminus \{3;5\}$ et $S=]-\infty;3[ \cup ]5;+\infty[$
7. $D= \mathbb{R}$ et $S=\mathbb{R}$
8. $D= \mathbb{R} \setminus \{-2;2\}$ et $S=]-\infty;-3] \cup ]-2;2[ \cup [5; +\infty[$
9. $D= \mathbb{R} \setminus \{-1;2\}$ et $S=]-\infty;-5[ \cup ]-1;2[ \cup ]5; +\infty[$
```

### Exercice {num2}`exercice:1-equ-rat-ex7`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\dfrac{6}{x-5} > \dfrac{1}{2}$
2. $\dfrac{1}{x} \geq 4$
3. $\dfrac{x+1}{x-8} < 4$
4. $\dfrac{3x}{x+1} \leq 3$
5. $\dfrac{2x-1}{2x+1}> \dfrac{7}{6}$
6. $\dfrac{x-3}{x+3} \geq 3$
7. $\dfrac{x+1}{x-2} \geq 1$
8. $\dfrac{x}{x+1} < \dfrac{x-1}{x-2}$
9. $\dfrac{x+1}{x+2} \geq \dfrac{x+3}{x+4}$

```{block} solution
{.lower-alpha-paren .vsep-1}
1. $D= \mathbb{R} \setminus \{5\}$ et $S=]5;17[$
2. $D= \mathbb{R} \setminus \{0\}$ et $S=]0;\dfrac{1}{4}]$
3. $D= \mathbb{R} \setminus \{8\}$ et $S=]-\infty;8[ \cup ]11; +\infty[$
4. $D= \mathbb{R} \setminus \{-1\}$ et $S=]-1; +\infty[$
5. $D= \mathbb{R} \setminus \{-\dfrac{1}{2}\}$ et $S=]-\dfrac{13}{2};-\dfrac{1}{2}[$
6. $D= \mathbb{R} \setminus \{-3\}$ et $S=[-6; -3[$
7. $D= \mathbb{R} \setminus \{2\}$ et $S=]2;+\infty[$
8. $D= \mathbb{R} \setminus \{-1;2\}$ et $S=]-1;\dfrac{1}{2}[ \cup ]2; +\infty[$
9. $D= \mathbb{R} \setminus \{-4; -2\}$ et $S=]-4;-2[$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
