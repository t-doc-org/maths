% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 David Rueda
% Copyright 2025 Nicolas Martignoni
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions polynomiales

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

### Monômes, polynômes, degré

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

```{container} frame noprint
# Exemple {num2}`exemple`

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
```

```{admonition} Définition
:class: note
Le **degré** d'un polynôme est le degré de son terme de plus haut degré, appelé
terme dominant. Le coefficient du terme dominant est le **coefficient
dominant**.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Le degré de $-3x^2-8x+6$ est $2$ et son coefficient dominant est $-3$.
2.  Le degré de $3+2x^2-8x+x^4$ est $4$ et son coefficient dominant est $1$.
3.  $4x^2y^3+y^4-2x^5y$ est un polynôme composé de 3 termes.\
    $4x^2y^3$ est un monôme de degré $5$.\
    $y^4$ est un monôme de degré $4$.\
    $-2x^5y$ est un monôme de degré $6$.\
    $4x^2y^3+y^4-2x^5y$ est donc de degré $6$ et son coefficient dominant $-2$.
```

```{admonition} Définition
:class: note
Une **fonction polynomiale** est une fonction $f$ dont l'expression algébrique
est un polynôme.

Le domaine de définition d'une telle fonction est $D_f = \mathbb{R}$.
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:ex1>`
```

{.allow-break-inside}
### Zéros d'une fonction polynomiale

```{admonition} Théorème
:class: note
Une fonction polynomiale de degré $n$ possède au plus $n$ zéros.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $f(x) = 3x^2 + 6x + 3$ est une fonction polynomiale de degré 2. Cette
    fonction a donc 2 zéros au maximum.

    Coefficients: $a_2 = 3$, $a_1 = 6$ et $a_3 = 3$.

    $$f(x) &= 3x^2 + 6x + 3\\
    &= 3(x^2 + 2x + 1)\\
    &= 3(x+1)^2$$

    Zéros: $3(x+1)^2=0 \iff x+1 = 0 \iff x = -1$

    La fonction polynomiale $f$ a un seul zéro: $x = -1$.

2.  $g(x) = x^3 + 3x^2 + 2x$ est une fonction polynomiale de degré 3. Cette
    fonction a donc 3 zéros au maximum.

    Coefficients: $a_3 = 1$, $a_2 = 3$, $a_1 = 2$ et $a_0 = 0$.

    $$g(x) &= x^3 + 3x^2 + 2x\\
    &= x(x^2 + 3x + 2)\\
    &= x(x+1)(x+2)$$

    Zéros:
    $$x(x+1)(x+2) = 0 \iff x &= 0 \quad\quad \text{ ou } \quad\quad x+1 &=& 0 \quad\quad \text{ ou } \quad\quad x+2 &= 0\\
    x_1 &= 0 \quad\quad \text{ ou } \quad\quad x_2 &=& -1 \quad\quad \text{ ou } \quad\quad x_2 &= -2$$

    La fonction polynomiale $g$ a trois zéros: $x_1= 0$, $x_2=-1$ et $x_2=-2$.
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:ex2>` et {numref}`exercice %s<exercice:ex3>`
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

```{container} frame noprint
# Exemple {num2}`exemple`

Soit la fonction $f(x)=x^3+x^2+x-3$.\
$f(1)=1^3+1^2+1-3=1+1+1-3=0 \implies$ $1$ est un zéro de
$f \implies f(x) = (x-1) \cdot g(x)$.

Pour trouver $g(x)$, effectuez la division polynomiale de $x^3+x^2+x+1$ par $x-1$

$\begin{array}{r|l}
x^3+\phantom{0}x^2+\phantom{0}x-3\phantom{0} & \underline{\phantom{0}x-1\phantom{00000}} \\
\underline{-(x^3 - x^2)}\phantom{000000000} & x^2 + 2x +3 \\
2x^2 + \phantom{0}x\phantom{00000} & \\
\underline{-(2x^2 - 2x)}\phantom{0000} & \\
3x - 3 \phantom{0}& \\
\underline{-(3x -3)} & \\
0\phantom{0}& \\
\end{array}$

$f(x)=x^3+x^2+x-3 =(x-1)(x^2+2x+3)$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:ex4>` et {numref}`exercice %s<exercice:ex5>`
```


```{admonition} Théorème
:class: note
Soit $f(x)$ un polynôme de coefficient dominant $1$ et dont tous les
coefficients sont des nombres entiers, alors les zéros potentiels entiers de $f$
sont des diviseurs du terme constant de la fonction.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Soit la fonction $f(x)=x^3+6x^2+3x−10$.
Comme le coefficient dominant de $f$ est $1$, les zéros potentiels sont des
diviseurs de $-10$:\
$2$ et $-5$, $-2$ et $5$, $1$ et $-10$, $-1$ et $10$\
$f(2)=2^3+6\cdot2^2+3\cdot2−10=8+24+6-10=28$\
$f(-5)=(-5)^3+6\cdot(-5)^2+3\cdot(-5)−10=-125+150-15-10=0$\
$\implies -5$ est un zéro de $f$.

Divisez $f$ par $x-(-5)=x+5$

$\begin{array}{r|l}
x^3+6x^2+3x-10\phantom{0} & \underline{\phantom{0}x+5\phantom{00000}} \\
\underline{-(x^3 + 5x^2)}\phantom{000000000} & x^2 + x -2 \\
x^2 + 3x\phantom{000000} & \\
\underline{-(x^2 + 5x)}\phantom{00000} & \\
-2x - 10 \phantom{0}& \\
\underline{-(-2x -10)} & \\
0\phantom{0}& \\
\end{array}$

$f(x)=x^3+6x^2+3x−10=(x+5)(x^2+x-2)=(x+5)(x+2)(x-1)$
```

### Fonctions paires et impaires

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

````{container} frame noprint
# Exemple {num2}`exemple`

$f(x) = x^4-2x^2-2$ est-elle une fonction paire, une fonction impaire, ni l'une
ni l'autre?

$f(-x) = (-x)^4-2\cdot(-x)^2-2 = x^4-2x^2-2=f(x)$<br>
$\implies$ La fonction $f$ est une fonction paire.

La fonction $f$ est symétrique par rapport à l'axe des $y$.

```{jsxgraph} fctPaire
:style: width: 50%;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

$g(x) = x^5-2x^3-3x$ est-elle une fonction paire, une fonction impaire, ni l'une
ni l'autre?

$g(-x) = (-x)^5-2\cdot(-x)^3-3\cdot(-x)=-x^5+2x^3+3x=-(x^5-2x^3-3\cdot x)=-g(x)$<br>
$\implies$ La fonction $g$ est une fonction paire.

La fonction $g$ est symétrique par rapport à l'origine $O$.

```{jsxgraph} fctImpaire
:style: width: 50%;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

$h(x) = x^2+2x-3$ est-elle une fonction paire, une fonction impaire, ni l'une
ni l'autre?

$h(-x) = (-x)^2+2\cdot(-x)-3 = x^2-2x-3$<br>
$\implies$ La fonction $h$ n'est ni paire, ni impaire.

```{jsxgraph} fctRien
:style: width: 50%;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
attrs.page = [attrs.screen, {
  boundingBox: [-5.2, 5.2, 5.2, -5.2],
  defaults: {
    functiongraph: {withLabel: true, label: {position: '0.65fr right'}},
  },
}];
render.fctPaire = el => {
  return initBoard(el, attrs.page, board => {
    board.create('functiongraph', [x => x ** 4 - 2 * x ** 2 - 2], {
      name: `\\(f\\)`,
    });
  });
};
render.fctImpaire = el => {
  return initBoard(el, attrs.page, board => {
    board.create('functiongraph', [x => x ** 5 - 2 * x ** 3 - 3 * x], {
      name: `\\(g\\)`,
    });
  });
};
render.fctRien = el => {
  return initBoard(el, attrs.page, board => {
    board.create('functiongraph', [x => x ** 2 + 2 * x - 3], {
      name: `\\(h\\)`,
    });
  });
};
</script>

```{admonition} Théorème
:class: note
Une fonction polynomiale dont tous les exposants sont pairs est paire.

Une fonction polynomiale dont tous les exposants sont impairs est impaire.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $-7x^{12} + 3x^8 + 2x^6 -x^2 -5$ est une fonction paire.
2. $3x^{11}-2x^7+4x^3$ et une fonction impaire.
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:ex6>`, {numref}`exercice %s<exercice:ex7>`
{numref}`exercice %s<exercice:ex8>`
```

### Factorisation d'un polynôme de degré supérieur à 2

```{admonition} Marche à suive
:class: tip
1.  Trouvez un zéro du polynôme, noté $x_1$.
2.  Effectuez la division du polynôme par $(x - x_1)$.
3.  Répétez les points 1) et 2) autant que nécessaire.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Factorisez au maximum $f(x) = x^4 -x^3-7x^2+x+6$.

Le coefficient du coefficient dominant est $1$, les zéros potentiels de $f$ sont
des diviseur de $6$: $1$, $2$, $3$ et $6$.

$f(1) = 1^4-1^3-7 \cdot 1^2 + 1 + 6 = 1 - 1 - 7 + 1 + 6 =0 \implies 1$ est un
zéro de $f$. $f(x) = (x-1) \cdot g(x)$.

Effectuez la division polynomiale de $f(x)$ par $x-1$.

$\begin{array}{r|l}
x^4-x^3-7x^2+x+6\phantom{0} & \underline{\phantom{0}x-1\phantom{00000}} \\
\underline{-(x^4 - x^3)}\phantom{0000000000000} & x^3 - 7x - 6 \\
0 - 7x^2 + x\phantom{00000} & \\
\underline{-(-7x^2 + 7x)}\phantom{0000} & \\
-6x + 6 \phantom{0}& \\
\underline{-(-6x +6)} & \\
0\phantom{0}& \\
\end{array}$

$f(x) = (x-1)(x^3-7x-6)$

Factorisez au maximum $g(x) = x^3-7x-6$.

Le coefficient du coefficient dominant est $1$, les zéros potentiels de $g$ sont
des diviseur de $-6$: $1$, $2$, $3$ et $6$.

$g(1)=1^3 -7 \cdot 1 - 6 = 1-7-6=-12$<br>
$g(2)=2^3 -7 \cdot 2 - 6 = 8-14-6=12$<br>
$g(3)=3^3 -7 \cdot 3 - 6 = 27-21-6=-0 \implies 3$ est un zéro de $g$.
$g(x) = (x-3) \cdot h(x)$

Effectuez la division polynomiale de $g(x)$ par $x-3$.

$\begin{array}{r|l}
x^3+{\color{red}0x^2}-7x-6\phantom{00} & \underline{\phantom{0}x-3\phantom{00000}} \\
\underline{-(x^3 - 3x^2)}\phantom{000000000} & x^2 + 3x + 2 \\
3x^2 - 7x\phantom{00000} & \\
\underline{-(3x^2 - 9x)}\phantom{0000} & \\
2x - 6 \phantom{0}& \\
\underline{-(2x -6)} & \\
0\phantom{0}& \\
\end{array}$

$g(x) = (x-3)(x^2+3x+2)$<br>
$f(x) = (x-1)(x-3)(x^2+3x+2) = (x-1)(x-3)(x+1)(x+2)$


$f$ est une fonction polynomiale de degré 4 qui a 4 zéros: $x_1=1$, $x_2=3$,
$x_3=-1$ et $x_4=-2$.
```


```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:ex9>`, {numref}`exercice %s<exercice:ex10>`
{numref}`exercice %s<exercice:ex11>`
```


## Exercices

### Exercice {num2}`exercice:ex1`

Indiquez si les fonctions suivantes sont polynomiales. Si oui, donnez leur degré
et leurs coefficients.

{.columns-2 .lower-alpha-paren}
1. $f(x)=2+x^5-2x^3$
2. $f(x)=x^2-\frac{x}{3}$
3. $f(x)=x^2+2^x$
4. $f(x)=5x^{\frac{1}{2}}+3x$
5. $f(x)=1+\sqrt{5}x$
6. $f(x)=(x-1)^2(x-7)$

```{block} solution
{.lower-alpha-paren}
1.  Fonction polynomiale de degré $5$; $a_5=1$, $a_3=-2$, $a_0=2$, les autres
    coefficients sont nuls.
2.  Fonction polynomiale de degré $2$; $a_2=1$, $a_1=-\frac{1}{3}$.
3.  Pas une fonction polynomiale.
4.  Pas une fonction polynomiale.
5.  Fonction polynomiale de degré $1$; $a_1=\sqrt{5}$, $a_0=1$.
6.  Fonction polynomiale de degré $3$; $a_3=1$, $a_2=-9$, $a_1=15$, $a_0=-7$.
```

### Exercice {num2}`exercice:ex2`

Calculez les zéros des fonctions suivantes.

{.columns-2 .lower-alpha-paren}
1. $f(x) = \frac{2}{3}x^2 + \frac{1}{2}x$
2. $f(x) = (1-2x)(x-2)$
3. $f(x) = \Bigl(\frac{2}{5}x - \frac{6}{5} \Bigr)(x^2+4)$
4. $f(x) = x^3-x^2-6x$

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $x_1=-\frac{3}{4}$; $x_2=0$
2. $x_1=\frac{1}{2}$; $x_2=2$
3. $x_1=3$
4. $x_1=0$; $x_2=-2$; $x_3=3$
```

### Exercice {num2}`exercice:ex3`

Trouvez une fonction polynomiale qui possède les zéros donnés.

{.columns-2 .lower-alpha-paren}
1. $x_1=5$; $x_2=-4$
2. $x_1=\sqrt{2}$; $x_2=1$; $x_3=8$
3. $x_1=-3$; $x_2=0$; $x_3=3$
4. $x_1=2$; $x_2=-10$; $x_3=\frac{1}{2}$; $x_4=\frac{9}{2}$

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $f(x)=(x-5)(x+4)$
2. $f(x)=(x-\sqrt{2})(x-1)(x-8)$
3. $f(x)=x(x+3)(x-3)$
4. $f(x)=(x-2)(x+10)(x-\frac{1}{2})(x-\frac{9}{2})$
```

### Exercice {num2}`exercice:ex4`

Effectuez les divisions polynomiales de $f(x)$ par $g(x)$.

{.lower-alpha-paren .vsep-1}
1.  $f(x) = x^3+2x^2-17x+6$\
    $g(x) = x-3$
2.  $f(x) = 2x^3+2x^2-21x+12$\
    $g(x) = x+4$
3.  $f(x) = 2x^3-7x^2-x+2$\
    $g(x) = 2x-1$
4.  $f(x) = x^4+2x^3-4x^2-9x-2$\
    $g(x) = x+2$

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $f(x) = (x-3)(x^2+5x-2)$
2. $f(x) = (x+4)(2x^2-6x+3)$
3. $f(x) = (2x-1)(x^2-3x-2)$
4. $f(x) = (x+2)(x^3-4x-1)$
```

### Exercice {num2}`exercice:ex5`

Effectuez les divisions polynomiales de $f(x)$ par $g(x)$.

{.lower-alpha-paren .vsep-1}
1.  $f(x)=x^3-8x^2+16x+4$\
    $g(x)=x-5$
2.  $f(x)=x^5-8x^3+8x^2-7x+6$\
    $g(x)=x^2+3x-2$
3.  $f(x)=5x^3-2x^2+4x-4$\
    $g(x)=x-1$
4.  $f(x)=6x^5-x^4-35x^3+31x^2-10x+6$\
    $g(x)=2x^2-5x+2$
5.  $f(x)=3x^4-23x^3+26x^2+28x-24$\
    $g(x)=x^2-5x-6$
6.  $f(x)=-x^3-x^2+5$\
    $g(x)=2x-3$
7.  $f(x)=x^4+x^3-8x^2-3x+19$\
    $g(x)=-x^2+x+2$

```{block} solution
{.lower-alpha-paren .vsep-1}
1. $x^3 - 8x^2 + 16x + 4 = (x-5)(x^2 - 3x + 1) + 9$
2. $x^5 - 8x^3 + 8x^2 - 7x + 6 = (x^2 + 3x-2) (x^3 - 3x^2 + 3x - 7) + 20x - 8$
3. $5x^3 - 2x^2 + 4x - 4 = (x-1)(5x^2 + 3x + 7) + 3$
4. $6x^5 - x^4 - 35x^3 + 31x^2 - 10x + 6 = (2x^2 - 5x + 2) (3x^3 + 7x^2 - 3x + 1) + x + 4$
5. $3x^4 - 23x^3 + 26x^2 + 28x - 24 = (x^2 - 5x - 6)(3x^2 - 8x + 4)$
6. $-x^3 - x^2 + 5 = (2x-3) \Bigl( -\frac{1}{2}x^2 - \frac{5}{4}x - \frac{15}{8} \Bigr) - \frac{5}{8}$
7. $x^4 + x^3 - 8x^2 - 3x + 19 = (-x^2 + x + 2)(-x^2 - 2x + 4) - 3x + 11$
```

### Exercice {num2}`exercice:ex6`

Étudiez la parité des fonctions suivantes.

{.columns-2 .lower-alpha-paren}
1. $f(x)=-6x^2+1$
2. $f(x)=3x$
3. $f(x)=x^3-2x^2+x$
4. $f(x)=x^9-x^7+x^5-x^3$
5. $f(x)=4$
6. $f(x)=x-4$
7. $f(x)=4x^4+x^2$
8. $f(x)=x^{100}$

```{block} solution
{.columns-2 .lower-alpha-paren}
1. Paire
2. Impaire
3. Ni paire ni impaire
4. Impaire
5. Paire
6. Ni paire ni impaire
7. Paire
8. Paire
```

### Exercice {num2}`exercice:ex7`

Tracez soigneusement la représentation graphique d'une fonction $f$ possédant
les propriétés suivantes:

- $f$ est une fonction polynomiale impaire.
- $f$ a cinq zéros dont deux sont $x_1=-5$ et $x_2=2$.
- La représentation graphique de $f$ possède un minimum local en $(4;-5)$.

````{block} solution
```{jsxgraph} fonctionSolution
:style: width: 50%;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.fonctionSolution = el => {
  return initBoard(el, [attrs.print, {
      boundingBox: [-6.5, 5.5, 6.5, -5.5],
      defaultAxes: {
        x: {ticks: {ticksDistance: 2, minorTicks: 1}},
        y: {ticks: {ticksDistance: 2, minorTicks: 1}},
      },
      grid: {majorStep: 1},
    }], board => {
      board.create('functiongraph',
        [x => 5 / 432 * (100 * x - 29 * x ** 3 + x ** 5)], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.32fr right'}
      });
    });
};
</script>

### Exercice {num2}`exercice:ex8`

Les affirmations suivantes sont-elles vraies ou fausses? Justifiez les réponses.

{.lower-alpha-paren}
1. Une fonction polynomiale de degré 3 à toujours au moins un zéro.
2. Une fonction polynomiale de degré 4 à toujours au moins un zéro.
3. Une fonction polynomiale de degré 3 peut avoir exactement 2 zéros.
4. Les fonctions constantes sont paires.
5. Il n'existe pas de fonction à la fois paire et impaire.
6. Les fonctions polynomiales impaires passent toujours par l'origine.

```{block} solution
{.lower-alpha-paren}
1.  **Vrai:** la représentation graphique d'une fonction polynomiale de degré 3
    "vient du haut et part vers le bas", ou "vient du bas et part vers le haut"
    et par conséquent elle doit couper au moins une fois l'axe des abscisses.
2.  **Faux:** contre-exemple $f(x) = x^4+1$
3.  **Vrai:** par exemple $f(x) = (x+1)^2 (x-1)$
4.  **Vrai:** une fonction constante $f(x) = c$ possède toujours la propriété
    $f(x) = f(-x) = c$; de plus son degré est $0$, donc pair.
5.  **Faux:** il existe une seule fonction paire et impaire, la fonction
    constante nulle $f(x) = 0$.
6.  **Vrai:** sans cela la représentation graphique ne peut pas être symétrique
    par rapport à l'origine.
```

### Exercice {num2}`exercice:ex9`

Déterminez les zéros des fonctions suivantes à l'aide d'une substitution.

{.lower-alpha-paren}
1. $f(x) = x^4-13x^2+36$
2. $f(x) = 16x^4-40x^2+9$
3. $f(x) = x^6-19x^3-216$

```{block} solution
{.lower-alpha-paren .vsep-1}
1. $x_1=-3$; $x_2=3$; $x_3=-2$; $x_4=2$
2. $x_1=-\frac{3}{2}$; $x_2=\frac{3}{2}$; $x_3=-\frac{1}{2}$; $x_4=\frac{1}{2}$
3. $x_1=-2$; $x_2=3$
```

### Exercice {num2}`exercice:ex10`

Déterminez un zéro des polynômes suivants, puis factorisez-les entièrement.

{.columns-2 .lower-alpha-paren}
1.  $3x^3+2x^2-7x+2$
2.  $x^3-3x^2+3x-2$
3.  $x^3+2x^2-5x-6$
4.  $x^4-7x^3+17x^2-17x+6$
5.  $x^4+2x^3-16x^2-2x+15$
6.  $x^5+3x^4-16x-48$
7.  $6x^4+13x^3-13x-6$
8.  $x^4-3x^3+3x^2-3x+2$
9.  $12x^3-7x^2-8x+3$
10. $6x^4-5x^3-23x^2+20x-4$
11. $6x^4+4x^3-26x^2-16x+8$
12. $35x^4-57x^3-185x^2+129x-18$

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $3x^3+2x^2-7x+2 = (3x-1)(x-1)(x+2)$
2.  $x^3-3x^2+3x-2 = (x-2)\cdot(x^2-x+1)$
3.  $x^3+2x^2-5x-6 = (x-2)\cdot(x+1)\cdot(x+3)$
4.  $x^4-7x^3+17x^2-17x+6 = (x-1)^2\cdot(x-3)\cdot(x-2)$
5.  $x^4+2x^3-16x^2-2x+15 = (x-1)\cdot(x+1)\cdot(x-3)\cdot(x+5)$
6.  $x^5+3x^4-16x-48 = (x+3)\cdot(x-2)\cdot(x+2)\cdot(x^2+4)$
7.  $6x^4+13x^3-13x-6 = (x-1)\cdot(x+1)\cdot(2x+3)\cdot(3x+2)$
8.  $x^4-3x^3+3x^2-3x+2 = (x-1)\cdot(x-2)\cdot(x^2+1)$
9.  $12x^3-7x^2-8x+3 = (x-1)\cdot(4x+3)\cdot(3x-1)$
10. $6x^4-5x^3-23x^2+20x-4 = (x-2)\cdot(x+2)\cdot(2x-1)\cdot(3x-1)$
11. $6x^4+4x^3-26x^2-16x+8 = 2\cdot(x+1)\cdot(3x-1)\cdot(x-2)\cdot(x+2)$
12. $35x^4-57x^3-185x^2+129x-18 = (x+2)\cdot(x-3)\cdot(5x-1)\cdot(7x-3)$
```

### Exercice {num2}`exercice:ex11`

Déterminez l'expression algébrique des fonctions polynomiales ayant les
propriétés suivantes.

{.lower-alpha-paren}
1.  Une fonction $f$ de degré $3$ qui possède les zéros $x_1=4$, $x_2=-2$,
    $x_3=5$ et telle que $f(1)=72$.
2.  Une fonction $g$ de degré $4$ qui possède les zéros $x_1=0$, $x_2=-1$,
    $x_3=2$, $x_4=3$ et dont la représentation graphique passe par $(4;-20)$.
3.  Une fonction $h$ de degré $2$ qui possède un seul zéro $x_1=3$ et dont la
    représentation graphique passe par les points $(5;2)$ et $(-2;\frac{25}{2})$.
4.  Une fonction impaire $j$ de degré $3$ et dont la représentation graphique
    passe par les points $(1;2)$ et $(-\frac{1}{2}; \frac{1}{2})$.

```{block} solution
{.columns-2 .lower-alpha-paren .vsep-1}
1. $f(x) = 2(x-4)(x+2)(x-5)$
2. $g(x) = -\frac{1}{2}x(x+1)(x-2)(x-3)$
3. $h(x) = \frac{1}{2}(x-3)^2$
4. $j(x) = 4x^3 - 2x$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```

