% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions rationnelles

```{metadata}
subject: "Mathématiques 2e année"
```

## Fractions rationnelles

```{admonition} Définition
:class: note
Une **fraction rationnelle** est expression algébrique qui peut être transformée
en une fraction où le numérateur et le dénominateur sont des polynômes.
```

### Exemple {num1}`exemple`

Les expressions suivantes sont des fractions rationnelles:

$2x^2 - 3x$, $\qquad\dfrac{1}{3x+2}\qquad$ et $\qquad\dfrac{4x^2+1}{x-5}$

Les expressions suivantes ne sont pas des fractions rationnelles:

$\dfrac{5^x}{4}$, $\qquad\dfrac{\sqrt{x-1} + 2}{6x^2-2x+1}\qquad$ et
$\qquad\dfrac{sin(x)}{3x^2}$

### Plus petit multiple commun d'un polynôme

Pour trouver le ppmc d'un polynôme, il faut:

1.  factoriser chacun des polynômes en facteurs irréductibles;
2.  prendre chaque facteurs irréductibles distincts avec l'exposant le plus
    élevé;
3.  le ppmc est le produit de ces facteurs.

#### Exemple {num1}`exemple`

Déterminez le ppmc de $2x^3 - 4x^2$ et $x^3-3x^2+2x$.

1.  Commencez par factoriser chacun des polynômes:\
    $2x^3 - 4x^2 = 2 \cdot x^2 \cdot (x-2)$\
    $x^3-3x^2+2x=x \cdot (x^2-3x+2) = x \cdot (x-2) \cdot (x-1)$
2.  Les facteurs irréductibles distincts sont:\
    $2, \qquad x^2, \qquad (x-2), \qquad (x-1)$
3.  Le ppmc de $2x^3 - 4x^2$ et $x^3-3x^2+2x$ est: $\qquad 2x^2(x-2)(x-1)$.

### Opération avec des fractions rationnelles

Le ppmc permet d'effectuer des opérations sur les fractions rationnelles et de
les simplifier.

#### Exemple {num1}`exemple`

Pour calculer $\dfrac{a}{a+b}-\dfrac{a^2}{a^2-b^2}+\dfrac{b}{a-b}$, il faut
trouver le dénominteur commun.

Pour cela, déterminez le ppmc de $a+b$, $\quad a^2-b^2 \quad$ et $\quad a-b \:$:

- $a+b$ et $a-b$ sont déjà irréductibles.

- Factorizez $a^2-b^2$: $\qquad a^2-b^2=(a+b)(a-b)$

Le dénominteur commun est donc: $\qquad (a+b)(a-b)$

$$
\dfrac{a}{a+b}-\dfrac{a^2}{a^2-b^2}+\dfrac{b}{a-b}
&=\dfrac{a}{a+b} \cdot {\color{red}\dfrac{a-b}{a-b}}-\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b}{a-b}\cdot {\color{red}\dfrac{a+b}{a+b}}\\
&=\dfrac{a(a-b)}{(a+b)(a-b)}{\color{red}-}\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b(a+b)}{(a+b)(a-b)}\\
&=\dfrac{a(a-b){\color{red}-}a^2+b(a+b)}{(a+b)(a-b)}\\
&=\dfrac{a^2-ab-a^2+ab+b^2}{(a+b)(a-b)}\\
&= \dfrac{b^2}{(a+b)(a-b)}
$$

Pour calculer $\dfrac{\dfrac{c^2-c}{c^2+c}}{\dfrac{c^2-2c+1}{c+1}}$:
1.  Transformez la division en multiplication;
2.  Factoriser au maximum;
3.  Simpifiez.

$$
\dfrac{\dfrac{c^2-c}{c^2+c}}{\dfrac{c^2-2c+1}{c+1}}
&=\dfrac{c^2-c}{c^2+c} \cdot \dfrac{c+1}{c^2-2c+1}\\
&=\dfrac{c(c-1)}{c(c+1)} \cdot  \dfrac{c+1}{(c-1)^2}\\
&=\dfrac{1}{c-1}
$$

## Domaine de définition, zéros et tableau de signes

```{admonition} Définition
:class: note
Une **fonction rationnelle** est une fonction $f$ dont l'expression algébrique
est une fraction rationnelle.
```

### Exemple {num1}`exemple`

Déterminez le domaine de définition de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$.

Le dénominateur ne doit pas être nul:

$x^2-9 \neq 0 \Longleftrightarrow (x+3)(x-3) \neq 0 \Longleftrightarrow
x_1 \neq -3 \quad \text{et} \quad x_2 \neq 3$

$\Longrightarrow D_f = \mathbb{R} \setminus \{-3; 3\}$

Pour résoudre une inéquation du deuxième degré, utilisez un tableau de signes:


### Exemple {num1}`exemple`

Pour déterminer les zéros de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$, résolvez
$f(x)=0$.

$$
\dfrac{x^2-7x+10}{x^2-9} &= 0 \qquad\qquad &&\text{multipliez par } x^2-9\\
x^2-7x+10 &= 0 \qquad\qquad &&\text{factorisez (trinôme)}\\
(x-2)(x-5) &= 0
$$

$$
x-2 &= 0 \quad &&\text{ou} \quad x-5&=0\\
x_1 &= 2 \quad &&\text{ou} \quad \quad\: x_2&=5
$$

### Exemple {num1}`exemple`

Pour faire un tableau de signes de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$, utilisez
le domaine de définition et les zéros calculés dans les exemples précédents.

Écrivez $f$ sous forme factorisée:

$f(x) = \dfrac{x^2-7x+10}{x^2-9}=\dfrac{(x-2)(x-5)}{(x+3)(x-3)}$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$2$|{.w}|$3$|{.w}|$5$|{.r .w}$\tiny+\;\infty$
|$x-2$|$-$||$-$|$0$|$+$||$+$||$+$
|$x-5$|$-$||$-$||$-$||$-$|$0$|$+$
|$x+3$|$-$|{.g}$0$|$+$||$+$||$+$||$+$
|$x-3$|$-$||$-$||$-$|{.g}$0$|$+$||$+$
|$\dfrac{(x-2)(x-5)}{(x+3)(x-3)}$|$+$|{.g}|$-$|$0$|$+$|{.g}|$-$|$0$|$+$
```

La représentation graphique de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$ est:

```{jsxgraph} fonction-rationnelle
:style: width: 80%;
```

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-10.5, 10.5, 10.5, -10.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
        y: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: true, size: 1.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};
initBoard('fonction-rationnelle', attrs, board => {
    const f = x => (x ** 2 - 7 * x + 10)/(x ** 2 -9);
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('point', [2, f(2)], {name: `\\(x_1\\)`});
    board.create('point', [5, f(5)], {name: `\\(x_2\\)`});
    board.create('curve', [t => 3, t => t, -1000, 1100], {dash: 2});
    board.create('curve', [t => -3, t => t, -1100, 1100], {dash: 2});
});
</script>


