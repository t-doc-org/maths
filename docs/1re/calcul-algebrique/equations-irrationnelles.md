% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Équations irrationnelles

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/equations-irrationnelles.xopp>`
```

## Théorie

### Équations avec fractions rationnelles

````{admonition} Définition
:class: note
Une équation où l'inconnue se trouve sous une racine est appelée **équation
irrationnelle**.
````

```{container} frame
# Exemple {num2}`exemple`

$\sqrt{x - 3} + 7 = 5x$
```

````{admonition} Définition
:class: note
Le **domaine de définition** d'une équation irrationnelle est l'ensemble des
valeurs de la ou des variables pour lesquelles la racine existe. Il est noté
$D$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez le domaine de définition des équations irrationnelles suivantes.

{.lower-alpha-paren}
1.  $\sqrt{x+5}=6$

    $x+5 \geq 0 \implies x \geq -5 \implies D = [-5; +\infty[$

2.  $\sqrt{x^2 + 3}=x-9$

    $x^2 + 3 \geq 0 \implies x^2 \geq -3$<br>
    Un nombre au carré est toujours positif, donc cette inégalité est
    toujours vraie.

    $\implies D = \mathbb{R}$

3.  $\sqrt{x^2-9} + 8 = x^2 + 4x - 1$

    $$x^2-9 &\geq 0 \quad &|& \text{ factorisation}\\
    (x-3)(x+3) &\geq 0
    $$

    Pour résoudre une inéquation du deuxième degré, il faut toujours passer par
    un tableau de signes:

    Zéros du polynôme:

    $x - 3 = 0 \implies x = {\color{orange}3}$<br>
    $x + 3 = 0 \implies x = {\color{magenta}-3}$

    Tableau de signes:

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|${\color{magenta}-3}$|{.w}|${\color{orange}3}$|{.r .w}$\tiny+\;\infty$
    |$x-3$|$-$||$-$|$0$|$+$
    |$x+3$|$-$|$0$|$+$||$+$
    |$(x-3)(x+3) \geq 0 $|${\color{red}+}$|${\color{red}0}$|$-$|${\color{red}0}$|${\color{red}+}$
    ```

    $\implies D = ]-\infty; -3] \cup [3; +\infty[$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-irrat-ex1>`
```

```{admonition} Marche à suivre - Équation irrationnelle
:class: note
Pour résoudre une équation irrationnelle, il faut:
1.  Déterminer le domaine de définition.
2.  Isoler la racine dans un des membres ou s'il y a deux racines en mettre une
    dans chaque membre.
3.  Élever les deux membres au carré.
4.  Résoudre l'équation.
5.  Vérifier que les solutions appartiennent au domaine de définition.
6.  Vérifier que les solutions sont bien des solutions en remplaçant les valeurs
    obtenues dans l'équation de départ.
```

```{container}
# Remarque

La vérification est obligatoire dans le cas des équations irrationnelles, car
élever les deux membres au carré, ne fait pas partie des règles d'équivalence.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez les équations irrationnelles suivantes.

{.lower-alpha-paren}
1.  $\sqrt{x - 9}=0$

    Domaine de définition:

    $x-9 \geq 0 \implies x \leq 9 \implies D = [9; +\infty[$

    Résolution:

    $$\sqrt{x - 9} &= 0 \quad &|& \text{ élevation au carré de chaque membre}\\
    (\sqrt{x - 9})^2 &= 0^2 \quad &|& \text{ CL}\\
    x - 9 &= 0 \quad &|& + 9\\
    x = 9 \in D
    $$

    Vérification:

    Remplacez les solutions dans l'équation l'équation de départ.<br>
    $x = 9$<br>
    $$\sqrt{9 - 9} &= 0 \quad &&\text{ ?}\\
    0 &= 0  &&\text{ l'équation est vérifiée}$$

    Solution:

    $S = \{9\}$



2.  $\sqrt{x + 1} - \sqrt{4 - 3x} = 0$

    Domaine de définition:

    Il faut traiter chaque racine carrée.

    $x + 1 \geq 0 \implies x \geq -1$<br>
    et<br>
    $4 - 3x 0 \implies 4 \geq 3x \implies \dfrac{4}{3} \geq 3x \implies x \leq \dfrac{4}{3}$

    $\implies D = \left[-1; \dfrac{4}{3}\right]$

    Résolution:

    Lorsqu'il y a deux racines carrés, il faut en mettre une dans chaque membre.

    $$\sqrt{x + 1} - \sqrt{4 - 3x} &= 0 \quad &|& +\sqrt{4 - 3x}\\
    \sqrt{x + 1} &= \sqrt{4 - 3x}  &|& \text{ élevation au carré}\\
    (\sqrt{x + 1})^2 &= (\sqrt{4 - 3x})^2  &|& \text{ CL}\\
    x + 1 &= 4 - 3x  &|& +3x - 1\\
    4x &= 3 &|& :4\\
    x = \dfrac{3}{4} \in D
    $$

    Vérification:

    Remplacez les solutions dans l'équation l'équation de départ.<br>
    $x = \dfrac{3}{4}$<br>
    $$\sqrt{\dfrac{3}{4} + 1} - \sqrt{4 - 3 \cdot \dfrac{3}{4}} &= 0 \quad &&\text{ ?}\\
    \sqrt{\dfrac{7}{4}} - \sqrt{4 - \dfrac{9}{4}} &= 0 \quad &&\text{ ?}\\
    \sqrt{\dfrac{7}{4}} - \sqrt{\dfrac{16}{4} - \dfrac{9}{4}} &= 0 \quad &&\text{ ?}\\
     \sqrt{\dfrac{7}{4}} - \sqrt{\dfrac{7}{4}} &= 0 \quad &&\text{ ?}\\
    0 &= 0  &&\text{ l'équation est vérifiée}$$

    Solution:

    $S = \left\{\dfrac{3}{4}\right\}$

3.  $\sqrt{8-x}=2x -1$

    Domaine de définition:

    $8-x \geq 0 \implies 8 \geq x \implies x \leq 8 \implies D = ]-\infty; 8]$

    Résolution:

    $$\sqrt{8-x} &= 2x -1 \quad &|& \text{ élevation au carré de chaque membre}\\
    (\sqrt{8-x})^2 &= (2x -1)^2 \quad &|& \text{ CL}\\
    8-x &= 4x^2 -4x + 1 \quad &|& -8 + x\\
    0 &= 4x^2 - 3x - 7
    $$

    $\Delta = (-3)^2 - 4 \cdot 4 \cdot (-7) = 121$

    $x_{1, 2} = \dfrac{3 \pm \sqrt{121}}{2 \cdot 4} = \dfrac{3 \pm 11}{8}$

    $x_1 = \dfrac{14}{8} = \dfrac{7}{4}  \in D$ et $x_2 = -\dfrac{8}{8} = -1 \in D$.

    Vérification:

    Remplacez les solutions dans l'équation l'équation de départ.<br>
    ```{list-grid} 1fr 1fr
    -   $x = \dfrac{7}{4}$<br>
        $$\sqrt{8-\dfrac{7}{4}} &=2 \cdot \dfrac{7}{4} -1 \quad &&\text{ ?}\\
        \sqrt{\dfrac{32}{4}-\dfrac{7}{4}} &= \dfrac{7}{2} - \dfrac{2}{2} \quad &&\text{ ?}\\
        \sqrt{\dfrac{25}{4}} &= \dfrac{5}{2} \quad &&\text{ ?}\\
        \dfrac{\sqrt{25}}{\sqrt{4}} &= \dfrac{5}{2} \quad &&\text{ ?}\\
        \dfrac{5}{2} &= \dfrac{5}{2}  &&\text{ l'équation est vérifiée}$$
    -   $x = -1$<br>
        $$\sqrt{8-(-1)} &=2 \cdot (-1) -1 \quad &&\text{ ?}\\
        \sqrt{9} &= -2 - 1 \quad &&\text{ ?}\\
        3 &\neq -3 \quad &&\text{ l'équation n'est pas vérifiée}$$
    ```

    Solution:

    $S = \left\{\dfrac{7}{4}\right\}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-irrat-ex2>`,
{numref}`exercice %s<exercice:1-equ-irrat-ex3>` et
{numref}`exercice %s<exercice:1-equ-irrat-ex4>`.
```

## Exercices

### Exercice {num2}`exercice:1-equ-irrat-ex1`

Déterminez le domaine de définition.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\sqrt{3x} = 7$
2. $\sqrt{x+3} + x = -5$
3. $\sqrt{2 -x} = 2x$
4. $-\sqrt{4x - 2} = -x + 2$
5. $\sqrt{x^2 - 4} = 0$
6. $\sqrt{x^2-3x+2} = 4$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= [0; +\infty[$
2. $D= [-3; +\infty[$
3. $D= ]-\infty; 2]$
4. $D= [\frac{1}{2}; +\infty[$
5. $D= ]-\infty; -2] \cup [2; +\infty[$
6. $D= ]-\infty; 1] \cup [2; +\infty[$
```

### Exercice {num2}`exercice:1-equ-irrat-ex2`

Déterminez l'ensemble de solution (le domaine de définition a été déterminé à l'exercice prédédent).

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\sqrt{3x} = 7$
2. $\sqrt{x+3} + x = -5$
3. $-\sqrt{4x - 2} = -x + 2$
4. $\sqrt{x^2 - 4} = 0$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= [0; +\infty[$ et $S=\left\{\frac{49}{3}\right\}$
2. $D= [-3; +\infty[$ et $S=\varnothing$
3. $D= [\frac{1}{2}; +\infty[$ et $S = \{4 + \sqrt{10}\}$
4. $D= ]-\infty; -2] \cup [2; +\infty[$ et $S = \{-2; 2\}$
```
### Exercice {num2}`exercice:1-equ-irrat-ex3`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\sqrt{x+5} = \sqrt{4-x}$
2. $\sqrt{2-x}= \sqrt{x-8}$
3. $\sqrt{1-x} = 5$
4. $\sqrt{3x} - \sqrt{3+x}=0$
5. $\sqrt{x^2 + 5} = x + 2$
6. $x = 3 \sqrt{x^2-64}$

```{block} solution
{.lower-alpha-paren .columns-2 .vsep-1}
1. $D= [-5; 4]$ et $S=\left \{-\frac{1}{2} \right \}$
2. $D= \varnothing$ et $S=\varnothing$
3. $D= ]-\infty; 1]$ et $S=\{-24\}$
4. $D= [0; +\infty[$ et $S = \left \{\frac{3}{2} \right\}$
5. $D= \mathbb{R}$ et $S = \left \{\frac{1}{4} \right\}$
6. $D= ]-\infty; -8] \cup [8; +\infty[$ et $S= \{6\sqrt{2}\}$
```

### Exercice {num2}`exercice:1-equ-irrat-ex4`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2 .vsep-1}
1. $\sqrt{2 -x} = 2x$
2. $\sqrt{x^2-3x+2} = 4$
3. $\sqrt{x(x+4)} = 2\sqrt{1-x}$
4. $4 + 9\sqrt{x^2 -9}= 49$
5. $\sqrt{x+8} = \sqrt{2} + \sqrt{6}$
6. $6\sqrt{x}+7 =  8\sqrt{x}-9$
7. $\sqrt{x + 243} - \sqrt{x} =\sqrt{x}$
8. $x-4 = \sqrt{5x^2-8x}$
9. $\sqrt{x^2-49} = x$
10. $\sqrt{x} + 3 = \sqrt{x+11}$

```{block} solution
{.lower-alpha-paren .vsep-1}
1. $D= ]-\infty; 2]$ et $S=\left \{\frac{-1+\sqrt{33}}{8} \right\}$
2. $D= ]-\infty; 1] \cup [2; +\infty[$ et $S= \left \{\frac{3-\sqrt{65}}{2}; \frac{3+\sqrt{65}}{2} \right\}$
3. $D= ]-\infty; -4] \cup [0; 1]$ et $S= \{-4-2\sqrt{5}; -4+2\sqrt{5}\}$
4. $D= ]-\infty; -3] \cup [3; +\infty[$ et $S=\{-\sqrt{34}; \sqrt{34}\}$
5. $D= [-8; +\infty[$ et $S=\{4\sqrt{3}\}$
6. $D= [0; +\infty[$ et $S=\{64\}$
7. $D= [0; +\infty[$ et $S = \{81\}$
8. $D= ]-\infty; 0] \cup [\frac{8}{5}; +\infty[$ et $S=\varnothing$
9. $D= ]-\infty; -7] \cup [7; +\infty[$ et $S=\varnothing$
10. $D= [0; +\infty[$ et $S = \left\{\frac{1}{9} \right\}$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
