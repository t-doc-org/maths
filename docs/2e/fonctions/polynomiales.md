% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions polynomiales

```{metadata}
subject: "Mathématiques 2e année"
```

## Monômes, polynômes, degré

```{admonition} Définition
:class: note
Un **monôme** est une expression obtenue par multiplication d'un nombre réel et
de lettres avec exposants naturels (entier et positif). Sous sa forme réduite,
un monôme se compose de deux parties: son **coefficient** et sa **partie
littérale**.
```

````{admonition} Définition
:class: note
Un **polynôme** est un monôme ou une somme de monômes. Les monômes qui composent
le polynôme sont les termes du polynôme. On peut réduire un polynôme en
additionnant les **monômes semblables** (de même partie littérale) qui le
composent.

Un polynôme composé d'une seule lettre, appelée variable, s'écrit sous la forme:

```{math}
:class: align-center
a_n \cdot x^n + a_{n-1} \cdot x^{n-1} + \cdots + a_1x + a_0
```
où les coefficients $a_n$, $a_{n-1}$, $\dots$, $a_1$, $a_0$ sont des nombres réels
avec $a_n \neq 0$ et $n \in \mathbb{N}$.
````

### Exemple {num1}`exemple`

{.lower-alpha-paren}
1.  Simplifiez au maximum.\
    $4x^2+4-3x-7x^2-5x+2=-3x^2-8x+6 \qquad \textrm{addition des monômes semblables}$
2.  Simplifiez au maximum.\
    $$
    &16x^2y-(4xy^2+5xy-2x^2y)-6xy^2+5yx \qquad &&\textrm{suppression des parenthèses}\\
    &= 16x^2y-4xy^2-5xy+2x^2y-6xy^2+5yx \qquad &&\textrm{addition des monômes semblables}\\
    &= 18x^2y-10xy^2
    $$
3.  Simplifiez au maximum et ordonnez.\
    $$
    &8+7x-3x^2+5x(2x-1)-6x^2-(3-2x)  \qquad &&\textrm{suppression des parenthèses}\\
    &= 8+7x-3x^2+10x^2-5x-6x^2-3+2x \qquad &&\textrm{addition des monômes semblables}\\
    &= 5+6x-x^2 \qquad &&\textrm{mise dans l'ordre}\\
    &= -x^2+6x+5
    $$


```{admonition} Définition
:class: note
Le **degré** d'un polynôme est le degré de son terme de plus haut degré, appelé
terme dominant. Le coefficient du terme dominant est le **coefficient
dominant**.
```

### Exemple {num1}`exemple`

{.lower-alpha-paren}
1.  Le degré de $-3x^2-8x+6$ est $2$ et son coefficient dominant est $-3$.
2.  Le degré de $3+2x^2-8x+x^4$ est $4$ et son coefficient dominant est $1$.
3.  $4x^2y^3+y^4-2x^5y$ est un polynôme composé de 3 termes.\
    $4x^2y^3$ est un monôme de degré $5$.\
    $y^4$ est un monôme de degré $4$.\
    $-2x^5y$ est un monôme de degré $6$.\
    $4x^2y^3+y^4-2x^5y$ est donc de degré $6$ et son coefficient dominant $-2$.

```{admonition} Définition
:class: note
Une **fonction polynomiale** est une fonction $f$ dont l'expression algébrique
est un polynôme.

Le domaine de définition d'une telle fonction est $D_f = \mathbb{R}$.
```

## Zéros d'une fonction polynomiale

```{admonition} Théorème
:class: note
Une fonction polynomiale de degré $n$ possède au plus $n$ zéros.
```

````{admonition} Théorème
:class: note
Si le nombre $a$ est un zéro de la fonction polynomiale $f$ de degré $n$, alors
l'expression algébrique $f(x)$ de cette fonction peut s'écrire sous la forme

```{math}
:class: align-center
f(x) = (x - a) \cdot g(x)
```

où $g(x)$ est un polynôme de degré $n-1$.
````

### Exemple {num1}`exemple`

Soit la fonction $f(x)=x^3+x^2+x-3$.\
$f(1)=1^3+1^2+1-3=1+1+1-3=0 \Longrightarrow$ $1$ est un zéro de $f$.

Effectuez la division polynomiale de $x^3+x^2+x+1$ par $x-1=x-1$
$$\begin{array}
 {rrrr|l}  x^3  & +x^2  &  +x   &  -3   &  x - 1\\
 \hline
           -x^3 & +x^2  &       &        &  x^2 + 2x + 3\\
                & +2x^2 &  +x   &        &               \\
                & -2x^2 &  +2x  &        &               \\
                &       &  +3x  &   -3   &               \\
                &       &  -3x  &   +3   &               \\
                &       &       &   0    &               \\
\end{array}$$
$f(x)=x^3+x^2+x-3 =(x-1)(x^2+2x+3)$

```{admonition} Théorème
:class: note
Soit $f(x)$ un polynôme de coefficient dominant $1$ et dont tous les
coefficients sont des nombres entiers, alors les zéros potentiels entiers de $f$
sont des diviseurs du terme constant de la fonction.
```

### Exemple {num1}`exemple`

Soit la fonction $f(x)=x^3+6x^2+3x−10$.
Comme le coefficient dominant de $f$ est $1$, les zéros potentiels sont des
diviseurs de $-10$:\
$2$ et $-5$, $-2$ et $5$, $1$ et $-10$, $-1$ et $10$\
$f(2)=2^3+6\dot2^2+3\cdot2−10=8+24+6-10=28$\
$f(-5)=(-5)^3+6\dot(-5)^2+3\cdot(-5)−10=-125+150-15-10=0$\
$-5$ est un zéro de $f$. Divisez $f$ par $x-(-5)=x+6$


$$\begin{array}
 {rrrr|l}  x^3  & +6x^2  &  +3x  &  −10   &  x + 5        \\
 \hline
           -x^3 & -5x^2  &       &        &  x^2 + x -2  \\
                &   x^2  &  +3x  &        &               \\
                &  -x^2  &  -5x  &        &               \\
                &        &  -2x  &  −10   &               \\
                &        &  -2x  &  -10   &               \\
                &        &       &    0   &               \\
\end{array}$$
$f(x)=x^3+6x^2+3x−10=(x+5)(x^2+x-2)=(x+5)(x+2)(x-1)$

## Fonctions paires et impaires

````{admonition} Définition
:class: note
Une fonction dont la représentation graphique est symétrique par rapport à l'axe
des $y$ est appelée **fonction paire**.

Les fonctions paires satisfont, pour tout $x \in D_f$, l'égalité

```{math}
:class: align-center
f(-x) = f(x).
```

Une fonction dont la représentation graphique est symétrique par rapport à
l'origine $O$ est appelée **fonction impaire**.

Les fonctions impaires satisfont, pour tout $x \in D_f$, l'égalité

```{math}
:class: align-center
f(-x) = -f(x).
```
````

```{admonition} Rappel
:class: tip
$$(-a)^n=
\begin{cases}
  \phantom{-}a^n & \text{si n est pair} \\ \\
  -a^n   & \text{si n est impair}
\end{cases}
\qquad \forall n \in \mathbb N
$$
```

### Exemple {num1}`exemple`

$f(x) = x^4-2x^2-2$ est une fonction paire:

$f(-x) = (-x)^4-2\cdot(-x)^2-2 = (x)^4-2\cdot(x)^2-2=f(x)$

La fonction $f$ est symétrique par rapport à l'axe des $y$.

```{jsxgraph} fct-paire
:style: width: 50%;
```

### Exemple {num1}`exemple`

$g(x) = x^5-2x^3-3x$ est une fonction impaire:

$g(-x) = (-x)^5-2\cdot(-x)^3-3\cdot(-x)=-x^5+2\cdot x^3+3\cdot x=-(x^5-2\cdot x^3-3\cdot x)=-g(x)$

La fonction $g$ est symétrique par rapport à l'origine $O$.

```{jsxgraph} fct-impaire
:style: width: 50%;
```

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-5.2, 5.2, 5.2, -5.2], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
        y: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
    },
};
initBoard('fct-paire', attrs, board => {
    const f = x => x ** 4 - 2 * x ** 2 - 2;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.65fr right'}
    });
});
initBoard('fct-impaire', attrs, board => {
    const g = x => x ** 5 - 2 * x ** 3 - 3 * x;
    board.create('functiongraph', [g], {
        name: `\\(g\\)`, withLabel: true,
        label: {position: '0.65fr right'}
    });
});
</script>


```{admonition} Théorème
:class: note
Une fonction polynomiale dont tous les exposants sont pairs est paire.

Une fonction polynomiale dont tous les exposants sont impairs est impaire.
```
