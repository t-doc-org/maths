% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Équations avec fractions rationnelles

<!-- ```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/equations-rationnelles.xopp>`
``` -->

## Théorie

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


## Exercices

### Exercice {num2}`exercice:1-equ-rat-ex1`


### Exercice {num2}`exercice:1-equ-rat-ex2`



## Solutions

```{blocks} solution
:class: allow-break-inside
```
