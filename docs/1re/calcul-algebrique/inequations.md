% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Inéquations

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/inequations.xopp>`
```

## Théorie

````{admonition} Définition
:class: note
Une **inéquation du premier degré à une inconnue** $x$ est une inéquation du
type

```{math}
:class: align-center
ax + b < 0 \quad \text{ ou } \quad ax + b \leq 0  \quad \text{ ou }
\quad ax + b > 0 \quad \text{ ou } \quad ax + b \geq 0

```
avec $a \text{, }b \in \mathbb{R} \text{ et } a  \ne 0$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $3x+ 2 > 6$ est une inéquation du premier degré.
2. $7-2x \leq 5$ est une inéquation du deuxième degré.
```

```{admonition} Propriétés
:class: note
Pour résoudre une inéquation, on utilise les mêmes outils et règles que pour
résoudre une équation. Mais il y a deux différences importantes:

{.lower-alpha-paren}
1.  Une inéquation possède une infinité de solutions. Son ensemble de solution
    est donc un intervalle ou la réunion d'intervalles.
2.  Lorsque l'on multiplie (ou divise) les deux membres d'une inéquation par un
    nombre négatif, le signe d'inégalité change de sens.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Pour résoudre $3x < x+5$, il faut isoler le $x$ dans un des membres de
    l'inéquation.
    $$
    3x & <   x+5 \qquad &|& -x\\
    2x & <  5  &|& :2  \\
    x & <  \dfrac{5}{2} &&  \\
    $$
    $S = ]-\infty; \dfrac{5}{2}[$
2.  Pour résoudre $4x + 2  \leq  8x-3$, il faut isoler le $x$ dans un des
    membres de l'inéquation.
    $$
    4x + 2 & \leq  8x-3 \qquad &|& -8x \\
    -4x + 2 & \leq -3  &|& -2 \\
    -4x & \leq -5  &|& {\color{red}:(-4)}  \\
    x & \:{\color{red}\geq} \: \dfrac{-5}{-4} &&  \\
    x & \geq \dfrac{5}{4} &&  \\
    $$
    $S = [\dfrac{5}{4}; +\infty[$
```

```{container} frame
# Remarques

Comme pour les équations, certaines inéquations peuvent être **indéterminées**
ou **impossibles**:

-   $$
    7x - 8 & \geq   4(3x-4)-5x \qquad &|& \text{CL (Calcul littéral)} \\
    7x - 8 & \geq   12x-16-5x  &|& \text{CL (Calcul littéral)} \\
    7x - 8 & \geq  7x -16  &|& -7x \\
    -8 & \geq  -16 &|& +16  \\
    8 & \geq  0 &&  \text{Cette équation est toujours vraie!} \implies S = \mathbb{R}\\
    $$

-   $$
    3(x - 4) & >   3x-6 \qquad &|& \text{CL (Calcul littéral)} \\
    3x -12 & >  3x-6  &|& -3x  \\
    -12 & >  -6  &|& +6  \\
    -6 & >  0 &&  \text{Cette inéquation est toujours fausse!} \implies S = \varnothing
    $$
```
```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-inequ-ex1>`,
{numref}`exercice %s<exercice:1-inequ-ex2>` et
{numref}`exercice %s<exercice:1-inequ-ex3>`.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Pour résoudre $5 \leq  \dfrac{4+3x}{2} \leq 1$, il faut isoler le $x$
    dans le membre du milieu de l'inéquation.
    $$
    -5 & \leq  \dfrac{4+3x}{2} & \leq & \: 1 \qquad \qquad &|& \text{même dénominateur} \\
    -\dfrac{10}{2} & \leq  \dfrac{4+3x}{2} & \leq & \dfrac{2}{2} \qquad \qquad &|& \cdot 2 \\
    -10 & \leq  4+3x & \leq & \: 2 &|& -4 \\
    -14 & \leq  3x & \leq & -2 &|& :3 \\
    -\dfrac{14}{3} & \leq  x & \leq & -\dfrac{2}{3} \\
    $$
    $S = [-\dfrac{14}{3}; -\dfrac{2}{3}]$
2.  Pour résoudre $-3 \leq \dfrac{1-2x}{4} < 7$, il faut isoler le $x$ dans le
    membre du milieu de l'inéquation.
    $$
    -3 & \leq \dfrac{1-2x}{4} & < & \: 7 \qquad \qquad &|& \cdot 4 \\
    -12 & \leq 1-2x & < & \: 28  &|& -1 \\
    -13 & \leq -2x & < & \: 27  &|& {\color{red}:(-2)} \\
    \dfrac{13}{2} &\:{\color{red}\geq} \:  x & {\color{red}>} & -\dfrac{27}{2} \\
    $$
    $S = ]-\dfrac{27}{2};\dfrac{13}{2}]$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-inequ-ex4>`
```


## Exercices

### Exercice {num2}`exercice:1-inequ-ex1`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2}
1.  $\dfrac{x}{5}+8 \leq 10$
2.  $12x-36 > 24$
3.  $3x-2+\dfrac{x}{2}+\dfrac{13}{2} < \dfrac{1}{4}x+12+7x$
4.  $\dfrac{1}{2}+\dfrac{x}{3}-\dfrac{1}{6} \geq \dfrac{x}{2}+\dfrac{1}{3}- \dfrac{1}{6}x $
5.  $10\left( \dfrac{3}{4}x-2 \right) -15 \left( \dfrac{x}{2}+5 \right) \leq 0$
6.  $11(4x+3)+9 \geq 3(1-6x)+70$
7.  $\dfrac{2}{9}(8x-3)+\dfrac{3}{5}(4x+\dfrac{7}{2}) < 3$
8.  $17x-8 > 3x +2(7x-2)$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=]-\infty;10]$
2. $S=]5;\infty[$
3. $S=]-2;\infty[$
4. $S=\mathbb{R}$
5. $S=\mathbb{R}$
6. $S=[\frac{1}{2};\infty[$
7. $S=]-\infty;\frac{3}{8}[$
8. $S=\varnothing$
```

### Exercice {num2}`exercice:1-inequ-ex2`

Associez à chaque inéquation son ensemble de solutions pour obtenir une phrase.

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   {.lower-alpha-paren}
    1. $7x+10 < 2x-5$
    2. $-3-\dfrac{3}{4}x \leq \dfrac{1}{4}x$
    3. $-14-\dfrac{5}{4}x > -\dfrac{3}{8}x-21$
    4. $0.6+0.8x > -0.5+x$
    5. $-\dfrac{1}{4}(4+8x) \leq \dfrac{1}{2}(x-1)$
    6. $22x-21-20x < -13+20-5x$
    7. $2-7x+5(1+x) > 4(1-2x)+3$
    8. $23x-45+55-25x \geq 0$
    9. $-3(1+3x) \leq 12x-24x-18-3$
    10. $(x-5)^2 \leq (x-7)(x-3)$
    11. $x+\dfrac{1}{3} \geq 0$
    12. $\dfrac{8+2x}{4} < 2 \cdot \dfrac{1-x}{-2}$
-   {.vsep-1}
    1. $]-\infty;5.5[ \longrightarrow$ E
    2. $]-\infty;-3[ \longrightarrow$ V
    3. $\varnothing \longrightarrow$ T
    4. $]0;\infty[ \longrightarrow$ S
    5. $]-\infty;-6] \longrightarrow$ A
    6. $]6;\infty[ \longrightarrow$ S
    7. $]-\infty;8[ \longrightarrow$ V
    8. $[-\frac{1}{3};\infty[ \longrightarrow$ H
    9. $[-0.2; \infty[ \longrightarrow$ L
    10. $[-3;\infty[ \longrightarrow$ I
    11. $]-\infty;4[ \longrightarrow$ E
    12. $]-\infty;5] \longrightarrow$ M
```

```{block} solution
VIVE LES MATHS
```

### Exercice {num2}`exercice:1-inequ-ex3`

Résolvez les problèmes suivants à l'aide d'inéquations du 1<sup>er</sup> degré.

{.lower-alpha-paren}
1.  Des boîtes de conserve de $300\,g$ doivent être rangées dans un carton. Le
    carton d'emballage pèse $500\,g$. Le tout ne doit pas dépasser $12\,kg$.
    Combien de boîtes peut-on mettre au plus dans le carton?
2.  Un arroseur automatique déverse $400$ litres par heure sur un terrain.
    Combien de temps faut-il le laisser encore allumé s'il est déjà enclenché
    depuis 2 heures et qu'on veut avoir déversé au moins $1800$ litres?
3.  Un propriétaire peut choisir entre deux tarifs pour l'électricité de sa
    maison. Le tarif A coûte CHF 0.22 par $kWh$ (kilowattheure) avec une taxe de
    base de CHF 18.-. Le tarif B coûte CHF 0.18 par $kWh$ avec une taxe de base
    de CHF 25.-. À partir de combien de $kWh$ le tarif B est-il meilleur marché?
4.  M. Hans von Siders habite Sierre et se rend fréquemment à Sion. Le billet de
    train Sierre Sion aller-retour coûte CHF $10.80.-$, mais s'il prend un
    abonnement demi-tarif à CHF $150.-$, il ne paie que CHF $5.40.-$. À partir
    de combien de courses a-t-il intérêt à prendre un abonnement demi-tarif?
5.  Lors du règlement d'un sinistre, l'assurance Alpha paie le 80 \% du montant
    du dommage avec une franchise de CHF 300.-. Quant à elle, l'assurance Bêta
    règle le 75 \% de la somme  avec une franchise de CHF 200.-.
    Pour quels montants un assuré a-t-il avantage à choisir l'assurance Alpha?<br>
    :Remarque: La franchise est la somme d'argent qui est à la charge de
    l'assuré. L'assureur indemnise les dommages dépassant ce montant.

```{block} solution
{.lower-alpha-paren .columns-2}
1. Au plus 38 boîtes de conserve.
2. Au moins 2.5 heures.
3. À partir de 175 kWh.
4. À partir de 28 voyages.
5. À partir de 2000.- CHF.
```

### Exercice {num2}`exercice:1-inequ-ex4`

Résolvez les inéquations suivantes.

{.lower-alpha-paren .columns-2}
1. $\dfrac{x-4}{2}<\dfrac{7x}{2}-(3x+2)${vspace}`0.1lh`
2. $\dfrac{x-5}{3}-\dfrac{x-8}{4}\leq 0${vspace}`0.1lh`
3. $\dfrac{3t}{2}-\dfrac{2t}{3}\geq5\left(\dfrac{t}{6}+1\right)-5${vspace}`0.1lh`
4. $\dfrac{5y+1}{3}-\dfrac{8y+1}{4}>\dfrac{10y+1}{12}$
5. $-3 < 2z - 5 < 7$
6. $4 \geq 3x + 5 > -1$
7. $11 > 5(3y - 2) > -11${vspace}`0.1lh`
8. $3 \leq \dfrac{2x-3}{5}<7${vspace}`0.1lh`
9. $-2 < \dfrac{4u+1}{3}\leq 0${vspace}`0.1lh`
10. $(x + 2)( x - 3) < (x + 5)( x - 4)$
11. $(3y -1)( y + 2) \geq 3y^2 + 9y - 2$
12. $\left(t-3\right)^2 \leq (t-4)(t-2)$
13. $(2x - 3)(4x + 5) \leq (8x +1)(x - 7)$


```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\varnothing$
2. $S=]-\infty;-4]$
3. $S=\mathbb{R}$
4. $S=]-\infty;0[$
5. $S=]1;6[$
6. $S=]-2;-\frac{1}{3}]$
7. $S=]-\frac{1}{15};\frac{7}{5}[$
8. $S=[9;19[$
9. $S=]-\frac{7}{4};-\frac{1}{4}]$
10. $S=]7;\infty[$
11. $S=]-\infty;0]$
12. $S=\varnothing$
13. $S=]-\infty;\frac{8}{53}]$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
