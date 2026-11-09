% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 David Rueda
% Copyright 2025 Nicolas Martignoni
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Fonctions rationnelles

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/rationnelles.xopp>`
```

## Théorie

### Rappel

````{admonition} Définition
:class: note
Les **identités algébriques** suivantes sont utiles pour la factorisation:

```{math}
:class: align-center
a^2+2ab+b^2 &= (a+b)^2 \\
a^2-2ab+b^2 &= (a-b)^2\\
a^3+3a^2b+3ab^2+b^3 &= (a+b)^3\\
a^3-3a^2b+3ab^2-b^3 &= (a-b)^3\\
a^2-b^2 &= (a+b)(a-b)\\
a^3-b^3 &= (a-b)(a^2+ab+b^2)\\
a^3+b^3 &= (a+b)(a^2-ab+b^2)
```

Remarque: $a^2+b^2$ n'est pas factorisable.
````

{.allow-break-inside}
### Fractions rationnelles

```{admonition} Définition
:class: note
Une **fraction rationnelle** est expression algébrique qui peut être transformée
en une fraction où le numérateur et le dénominateur sont des polynômes.
```

```{container} frame
# Exemple {num2}`exemple`

Les expressions suivantes sont des fractions rationnelles:

$2x^2 - 3x$ , $\qquad\dfrac{1}{3x+2}\qquad$ et $\qquad\dfrac{4x^2+1}{x-5}$

Les expressions suivantes ne sont pas des fractions rationnelles:

$\dfrac{5^x}{4}$ , $\qquad\dfrac{\sqrt{x-1} + 2}{6x^2-2x+1}\qquad$ et
$\qquad\dfrac{\sin(x)}{3x^2}$
```

#### Opération avec des fractions rationnelles

```{Admonition} Marche à suivre - Quotient ou produit de fractions rationnelles
:class: tip
Pour multiplier / diviser des frations rationnelles, il faut:

1.  transformer les divisions en multiplications;
2.  factoriser au maximum les numérateurs et les dénominateurs;
3.  simplifiez.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Calculez $\dfrac{\dfrac{c^2-c}{c^2+c}}{\dfrac{c^2-2c+1}{c+1}}$.

$$
\dfrac{\dfrac{c^2-c}{c^2+c}}{\dfrac{c^2-2c+1}{c+1}}
&=\dfrac{c^2-c}{c^2+c} : \dfrac{c^2-2c+1}{c+1}\\
&=\dfrac{c^2-c}{c^2+c} \cdot \dfrac{c+1}{c^2-2c+1}\\
&=\dfrac{\cancel{c}\bcancel{(c-1)}}{\cancel{c}\xcancel{(c+1)}} \cdot  \dfrac{\xcancel{c+1}}{(c-1)^\bcancel{2}}\\
&=\dfrac{1}{c-1}
$$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-ration-ex1>`
```

Le ppmc permet d'effectuer des opérations sur les fractions rationnelles et de
les simplifier.

```{container} frame noprint
# Exemple {num2}`exemple`

Calculez le ppmc de $44$ et $33$.

Décomposition en facteurs premiers:

$44 = 2^2 \cdot 11$<br>
$30 = 2 \cdot 3 \cdot 5$

$\text{ppmc}(44; 30) = 2^2 \cdot 3 \cdot 5 \cdot 11$

$\dfrac{1}{44} + \dfrac{1}{30} = \dfrac{1}{44} \cdot \dfrac{3 \cdot 5}{3 \cdot 5} + \dfrac{1}{30} \cdot \dfrac{2 \cdot 11}{2 \cdot 11} = \dfrac{15}{660} + \dfrac{22}{660} = \dfrac{37}{660}$

```

```{Admonition} Marche à suivre - PPMC de deux polynômes
:class: tip
Pour trouver le ppmc de deux polynômes, il faut:

1.  factoriser chacun des polynômes en facteurs irréductibles;
2.  prendre chaque facteurs irréductibles distincts avec l'exposant le plus
    élevé;
3.  le ppmc est le produit de ces facteurs.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez le ppmc de $2x^3 - 4x^2$ et $x^3-3x^2+2x$.

1.  Commencez par factoriser chacun des polynômes:\
    $2x^3 - 4x^2 = 2 \cdot x^2 \cdot (x-2)$\
    $x^3-3x^2+2x=x \cdot (x^2-3x+2) = x \cdot (x-2) \cdot (x-1)$
2.  Les facteurs irréductibles distincts sont:\
    $2, \qquad x^2, \qquad (x-2), \qquad (x-1)$
3.  Le ppmc de $2x^3 - 4x^2$ et $x^3-3x^2+2x$ est: $\qquad 2x^2(x-2)(x-1)$.
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-ration-ex2>`
```

```{Admonition} Marche à suivre - Somme / différence de fractions rationnelles
:class: tip
Pour addition ou soustraire des frations rationnelles, il faut:

1.  déterminer le ppmc des dénominateurs;
2.  mettre au même dénominateur (amplifier les fractions);
3.  additioner / soustraire les numérateurs.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Calculez $\dfrac{a}{a+b}-\dfrac{a^2}{a^2-b^2}+\dfrac{b}{a-b}$.

Il faut trouver le dénominteur commun. Pour cela, déterminez le ppmc de
$a+b$, $\quad a^2-b^2 \quad$ et $\quad a-b \:$:

- $a+b$ et $a-b$ sont déjà irréductibles.

- Factorizez $a^2-b^2$: $\qquad a^2-b^2=(a+b)(a-b)$

Le dénominateur commun est donc: $\qquad (a+b)(a-b)$

$$
\dfrac{a}{a+b}-\dfrac{a^2}{a^2-b^2}+\dfrac{b}{a-b}
&=\dfrac{a}{a+b} \cdot {\color{red}\dfrac{a-b}{a-b}}-\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b}{a-b}\cdot {\color{red}\dfrac{a+b}{a+b}}\\
&=\dfrac{a(a-b)}{(a+b)(a-b)}{\color{red}-}\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b(a+b)}{(a+b)(a-b)}\\
&=\dfrac{a(a-b){\color{red}-}a^2+b(a+b)}{(a+b)(a-b)}\\
&=\dfrac{a^2-ab-a^2+ab+b^2}{(a+b)(a-b)}\\
&= \dfrac{b^2}{(a+b)(a-b)}
$$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-ration-ex3>` et
{numref}`exercice %s<exercice:2-ration-ex4>`
```

### Fonctions rationnelles

```{admonition} Définition
:class: note
Une **fonction rationnelle** est une fonction $f$ dont l'expression algébrique
est une fraction rationnelle.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Déterminez le domaine de définition de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$.

    Le dénominateur ne doit pas être nul:

    $x^2-9 \neq 0 \Longleftrightarrow (x+3)(x-3) \neq 0 \Longleftrightarrow
    x_1 \neq -3 \quad \text{et} \quad x_2 \neq 3$

    $\Longrightarrow D_f = \mathbb{R} \setminus \{-3; 3\}$

2.  Déterminer les zéros de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$.

    Il faut résoudre $f(x)=0$.

    $$
    \dfrac{x^2-7x+10}{x^2-9} &= 0 \qquad\qquad &&\text{pour qu'une fraction soit nulle, il faut le numérateur soir nul}\\
    x^2-7x+10 &= 0 \qquad\qquad &&\text{factorisez (trinôme)}\\
    (x-2)(x-5) &= 0
    $$

    $$
    x-2 &= 0 \quad &&\text{ou} \quad x-5&=0\\
    x_1 &= 2 \quad &&\text{ou} \quad \quad\: x_2&=5
    $$


3.  Faites un tableau de signes de $f(x) = \dfrac{x^2-7x+10}{x^2-9}$.

    Il faut utiliser le domaine de définition et les zéros calculés dans les
    exemples précédents.

    Écrivez $f$ sous forme factorisée:

    $f(x) = \dfrac{x^2-7x+10}{x^2-9}=\dfrac{(x-2)(x-5)}{(x+3)(x-3)}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$2$|{.w}|$3$|{.w}|$5$|{.r .w}$\tiny+\;\infty$
    |$x-2$|$-$||$-$|$0$|$+$||$+$||$+$
    |$x-5$|$-$||$-$||$-$||$-$|$0$|$+$
    |$x+3$|$-$|{.g}$0$|$+$||$+$||$+$||$+$
    |$x-3$|$-$||$-$||$-$|{.g}$0$|$+$||$+$
    |$\dfrac{(x-2)(x-5)}{(x+3)(x-3)}$|$+$|{.g}|$-$|$0$|$+$|{.g}|$-$|$0$|$+$
    ```

4.  Représentez graphiquement $f(x) = \dfrac{x^2-7x+10}{x^2-9}$:

    ```{jsxgraph} fonctionRationnelle
    :style: width: 80%;
    ```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-ration-ex5>` et
{numref}`exercice %s<exercice:2-ration-ex6>`
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.fonctionRationnelle = el => {
  return initBoard(el, [attrs.screen, attrs.nonInteractive, {
    boundingBox: [-10.5, 10.5, 10.5, -10.5],
    grid: {majorStep: 1},
    defaults: {
      line: {dash: 2},
      point: {
        withLabel: true, size: 2,
        label: {anchorX: 'right', anchorY: 'bottom', offset: [-7, 0]}
      },
    },
  }], board => {
    const f = x => (x ** 2 - 7 * x + 10) / (x ** 2 - 9);
    board.create('functiongraph', [f], {
      name: `\\(f\\)`,
      label: {position: '0.1fr left'}
    });
    board.create('point', [2, f(2)], {name: `\\(x_1\\)`});
    board.create('point', [5, f(5)], {name: `\\(x_2\\)`});
    board.create('line', [3, 1, 0]);
    board.create('line', [-3, 1, 0]);
  });
};
</script>

## Exercices

### Exercice {num2}`exercice:2-ration-ex1`

Simplifiez les fractions rationnelles suivantes.

{.columns-3 .lower-alpha-paren .vsep-2}
1.  $\dfrac{3x^2-6x}{x^2-4}$
2.  $\dfrac{x^2-9}{x^2+6x+9}$
3.  $\dfrac{7x^2-700}{14x+140}$
4.  $\dfrac{x^3+8x^2+15x}{x^3-25x}$
5.  $\dfrac{x^2-4}{x^3+8}$
6.  $\dfrac{x^2-7x+12}{x^2-8x+15}$
7.  $\dfrac{7x^3-10x^2+7x-10}{2x^3-x^2+2x-1}$
8.  $\dfrac{x-x^3}{x^4+2x^3+x^2}$
9.  $\dfrac{3x^2+10x+3}{9x^2-1}$
10. $\dfrac{2-18x^2}{4-24x+36x^2}$
11. $\dfrac{6x^2-36x}{x^2-12x+36}$
12. $\dfrac{6x^2+2x}{27x^3+1}$
13. $\dfrac{x^3-27}{3x^2-3x-18}$
14. $\dfrac{x^4-81}{(x^3-27)(x^2+9)}$
15. $\dfrac{1-x^2+x^3-x^5}{x+x^2-x^3-x^4}$
16. $\dfrac{x^3+x^2-x-1}{x^3+2x^2-x-2}$
17. $\dfrac{4x^3-8x^2-16x+32}{x^4-4x^2+8x-16}$
18. $\dfrac{x^2-6x+8}{x^3-5x^2+2x+8}$
19. $\dfrac{x^3+8x^2+x+8}{8x^3+8x^2+8x+8}$
20. $\dfrac{x^4-13x^2+36}{2x^3+6x^2-8x-24}$

```{block} solution
{.columns-3 .lower-alpha-paren .vsep-2}
1.  $\dfrac{3x}{x+2}$
2.  $\dfrac{x-3}{x+3}$
3.  $\dfrac{x-10}{2}$
4.  $\dfrac{x+3}{x-5}$
5.  $\dfrac{x-2}{x^2-2x+4}$
6.  $\dfrac{x-4}{x-5}$
7.  $\dfrac{7x-10}{2x-1}$
8.  $\dfrac{1-x}{x(x+1)}$
9.  $\dfrac{x+3}{3x-1}$
10. $\dfrac{1+3x}{2(1-3x)}$
11. $\dfrac{6x}{x-6}$
12. $\dfrac{2x}{9x^2-3x+1}$
13. $\dfrac{x^2+3x+9}{3(x+2)}$
14. $\dfrac{x+3}{x^2+3x+9}$
15. $\dfrac{1-x+x^2}{x}$
16. $\dfrac{x+1}{x+2}$
17. $\dfrac{4(x-2)(x+2)}{x^3+2x^2+8}$
18. $\dfrac{1}{x+1}$
19. $\dfrac{x+8}{8(x+1)}$
20. $\dfrac{x-3}{2}$
```

### Exercice {num2}`exercice:2-ration-ex2`

Calculez le ppmc des polynômes donnés.

{.lower-alpha-paren .vsep-1}
1.  $9xy$; $\quad$ $x^2$; $\quad$ $6y^2$.
2.  $6x^2z$; $\quad$ $15xy^2$.
3.  $3x(x+2)$; $\quad$ $2x(x-1)$; $\quad$ $(x-1)(x+2)$; $\quad$ $3(x+2)^2$.
4.  $12x^2(x-y)$; $\quad$ $15(x-y)(x+y)$; $\quad$ $8(x-y)^{2}$.
5.  $(x-1)^{2}(x+1)(x+2)$; $\quad$ $(x-1)(x+1)^{2}$; $\quad$ $(x-1)(x+2)^{2}$.
6.  $2x^{3}$; $\quad$ $8x^2+24x$; $\quad$ $4x^{3}+12x^2$.
7.  $9x^2-6xy+y^2$; $\quad$ $9x^2+6xy+y^2$; $\quad$ $81x^{4}-y^{4}$.
8.  $x^2-x$; $\quad$ $x^{3}-3x^2+2x$; $\quad$ $x^{3}-4x^2+3x$.
9.  $3x^{3}-18x^2y+27xy^2$; $\quad$ $9x^{3}-81xy^2$; $\quad$ $18x^2y-6x^{3}$.
10. $x^2-11x+30$; $\quad$ $x^2-x-20$; $\quad$ $x^{3}-5x^2-16x+80$.
11. $(x^2+x+1)(x^2-x+1)$; $\quad$ $x^{3}+1$; $\quad$ $x^{3}-x^2+x$.

```{block} solution
{.columns-2 .lower-alpha-paren .vsep-1}
1.  $18x^2y^2$
2.  $30x^2y^2z$
3.  $6x(x-1)(x+2)^2$
4.  $120x^2(x-y)^2(x+y)$
5.  $(x-1)^2(x+1)^2(x+2)^2$
6.  $8x^3(x+3)$
7.  $(3x-y)^2(3x+y)^2(9x^2+y^2)$
8.  $x(x-1)(x-2)(x-3)$
9.  $-18x^2(x-3y)^2(x+3y)$
10. $(x-6)(x-5)(x-4)(x+4)$
11. $x(x+1)(x^2+x+1)(x^2-x+1)$
```

### Exercice {num2}`exercice:2-ration-ex3`

Effectuez les opérations suivantes et simplifiez le résultat.

{.columns-2 .lower-alpha-paren .vsep-2}
1.  $\dfrac{13a}{4}-\dfrac{9}{4} a$
2.  $\dfrac{8a}{15}+\dfrac{21b}{10}-\dfrac{5a}{12}+\dfrac{3(a-2b)}{30}$
3.  $\dfrac{x-1}{3}-\dfrac{x+1}{4}$
4.  $\dfrac{3x-2y}{3}+\dfrac{9x-22y}{15}-\dfrac{2x+4y}{5}$
5.  $\dfrac{1}{x+y}+\dfrac{2y}{x^2-y^2}$
6.  $\dfrac{a}{a-b}+\dfrac{ab}{b^2-a^2}$
7.  $\dfrac{1}{x+1}-\dfrac{2}{x+2}+\dfrac{1}{x+3}$
8.  $\dfrac{1}{x+3}+\dfrac{1}{x-3}-\dfrac{6}{x^2-9}$
9.  $\dfrac{a^2}{a-b}+\dfrac{b^2}{b-a}$
10. $\dfrac{a-1}{a+3}-\dfrac{a-3}{a+1}$
11. $\dfrac{a^2+b^2}{a^2-b^2}+\dfrac{a}{a+b}+\dfrac{b}{b-a}$
12. $\dfrac{1}{(a-1)^2}+\dfrac{1}{(a+1)^2}-\dfrac{1}{a^2-1}$

```{block} solution
{.columns-3 .lower-alpha-paren .vsep-2}
1.  $a$
2.  $\dfrac{13a+114b}{60}$
3.  $\dfrac{x-7}{12}$
4.  $\dfrac{2(9x-22y)}{15}$
5.  $\dfrac{1}{x-y}$
6.  $\dfrac{a^2}{(a-b)(a+b)}$
7.  $\dfrac{2}{(x+1)(x+2)(x+3)}$
8.  $\dfrac{2}{x+3}$
9.  $a+b$
10. $\dfrac{8}{(a+3)(a+1)}$
11. $\dfrac{2a}{a+b}$
12. $\dfrac{a^2+3}{(a-1)^2(a+1)^2}$
```

### Exercice {num2}`exercice:2-ration-ex4`

Effectuez les opérations suivantes et simplifiez le résultat.

{.lower-alpha-paren .vsep-2}
1.  $\dfrac{\dfrac{1}{x} + \dfrac{1}{y+z}}{\dfrac{1}{x} - \dfrac{1}{y+z}} \cdot \dfrac{(y+z)^{2} - (y-z)^{2}}{x+y+z}$
2.  $ \Bigl(\dfrac{x}{y}+\dfrac{y}{x}\Bigr)^{2}-\Bigl(\dfrac{x}{y}-\dfrac{y}{x}\Bigr)^{2}$
3.  $\dfrac{\dfrac{2xy}{x+y} - x}{\dfrac{1}{y} + \dfrac{1}{x-2y}}$
4.  $\dfrac{\dfrac{x+y}{1-xy} + \dfrac{x-y}{1+xy}}{1 - \dfrac{x^2-y^2}{1-x^2y^2}}$
5.  $\dfrac{20x}{4x^2-9} + \dfrac{8x-12}{4x^2-12x+9} - \dfrac{5x}{2x^2+3x}$
6.  $\dfrac{ 1 - \dfrac{x-y}{x+y}}{\dfrac{x-y}{x+y} - \dfrac{x+y}{x-y}}$
7.  $\dfrac{4(x+3)^{2}}{(3x+5)^{2}-4x^2} - \dfrac{x^2-25}{9x^2-(2x+5)^{2}} - \dfrac{(2x+3)^{2} - x^2}{(4x+15)^{2} - x^2}$
8.  $\dfrac{\dfrac{1}{x} + 1}{\dfrac{1}{x}} \cdot \dfrac{\dfrac{1}{x}+x-1}{x^2-x+1}$
9.  $\dfrac{x^{3}}{(x-y)(x-z)}+\dfrac{y^{3}}{(y-z)(y-x)}+\dfrac{z^{3}}{(z-x)(z-y)}$

```{block} solution
{.columns-3 .lower-alpha-paren .vsep-2}
1.  $\dfrac{4yz}{y+z-x}$
2.  $4$
3.  $\dfrac{2xy^2-x^2y}{x+y}$
4.  $\dfrac{2x}{1-x^2}$
5.  $\dfrac{9}{2x-3}$
6.  $\dfrac{y-x}{2x}$
7.  $\dfrac{2}{5}$
8.  $\dfrac{1+x}{x}$
9.  $x+y+z$
```

### Exercice {num2}`exercice:2-ration-ex5`

Déterminez le domaine de définition, les zéros et l'ordonnée à l'origine des
fonctions suivantes, puis établissez leur tableau de signes.

{.columns-2 .lower-alpha-paren .vsep-2}
1.  $f(x) = \dfrac{2x - 3}{3x + 2}$
2.  $f(x) = \dfrac{1 - 2x}{x + 3}$
3.  $f(x) = \dfrac{3 - 5x}{\frac{1}{2} + \frac{5x}{3}}$
4.  $f(x) = \dfrac{7x - 8}{3x + 1}$
5.  $f(x) = \dfrac{3x + 1}{2x^2 + 1}$
6.  $f(x) = \dfrac{x - 1}{3x^2 + 2x - 1}$

````{block} solution
{.lower-alpha-paren .vsep-2 .avoid-break-items}
1.  $f(x) = \dfrac{2x-3}{3x+2}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-\frac{2}{3}$|{.w}|$\frac{3}{2}$|{.r .w}$\tiny+\;\infty$
    |$2x-3$|$-$||$-$|$0$|$+$
    |$3x+2$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{2x-3}{3x+2}$|$+$|{.g}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -\frac{2}{3} \right\}$;
    $x_1 = \frac{3}{2}$; ordonnée à l'origine vaut $-\frac{3}{2}$.

2.  $f(x) = \dfrac{1 - 2x}{x + 3}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$\frac{1}{2}$|{.r .w}$\tiny+\;\infty$
    |$1-2x$|$+$||$+$|$0$|$-$
    |$x+3$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{1 - 2x}{x + 3}$|$-$|{.g}|$+$|$0$|$-$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -3 \right\}$;
    $x_1 = \frac{1}{2}$; ordonnée à l'origine vaut $\frac{1}{3}$.

3.  $f(x) = \dfrac{3 - 5x}{\frac{1}{2} + \frac{5x}{3}}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-\frac{3}{10}$|{.w}|$\frac{3}{5}$|{.r .w}$\tiny+\;\infty$
    |$3 -5x$|$+$||$+$|$0$|$-$
    |$\frac{1}{2}+\frac{5x}{3}$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{3-5x}{\frac{1}{2}+\frac{5x}{3}}$|$-$|{.g}|$+$|$0$|$-$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -\frac{3}{10} \right\}$;
    $x_1 = \frac{3}{5}$; ordonnée à l'origine vaut $6$.

4.  $f(x) = \dfrac{7x - 8}{3x + 1}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-\frac{1}{3}$|{.w}|$\frac{8}{7}$|{.r .w}$\tiny+\;\infty$
    |$7x-8$|$-$||$-$|$0$|$+$
    |$3x+1$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{7x-8}{3x+1}$|$+$|{.g}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -\frac{1}{3} \right\}$;
    $x_1 = \frac{8}{7}$; ordonnée à l'origine vaut $-8$.

5.  $f(x) = \dfrac{3x + 1}{2x^2 + 1}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-\frac{1}{3}$|{.r .w}$\tiny+\;\infty$
    |$3x+1$|$-$|$0$|$+$
    |$2x^2+1$|$+$||$+$
    |$\dfrac{3x + 1}{2x^2 + 1}$|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R}$; $x_1 = -\frac{1}{3}$; ordonnée à l'origine vaut $1$.

6.  $f(x) = \dfrac{x - 1}{3x^2 + 2x - 1} = \dfrac{x - 1}{(3x-1)(x+1)}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-1$|{.w}|$\frac{1}{3}$|{.w}|$1$|{.r .w}$\tiny+\;\infty$
    |$x-1$|$-$||$-$||$-$|$0$|$+$
    |$3x-1$|$-$||$-$|{.g}$0$|$+$||$+$
    |$x+1$|$-$|{.g}$0$|$+$||$+$||$+$
    |$\dfrac{x - 1}{(3x-1)(x+1)}$|$-$|{.g}|$+$|{.g}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -1; \frac{1}{3} \right\}$;
    $x_1 = 1$; ordonnée à l'origine vaut $1$.
````

### Exercice {num2}`exercice:2-ration-ex6`

Déterminez le domaine de définition, les zéros et l'ordonnée à l'origine des
fonctions suivantes, puis établissez leur tableau de signes.

{.columns-2 .lower-alpha-paren .vsep-2}
1.  $f(x) = \dfrac{x^2+4x+4}{x-2}$
2.  $f(x) = \dfrac{x+1}{x^2+x-6}$
3.  $f(x) = \dfrac{x^2-1}{(x+1)^2}$
4.  $f(x) = \dfrac{4}{x^2-4}$
5.  $f(x) = \dfrac{4}{x^2+4}$
6.  $f(x) = \dfrac{2x^2-1}{x^2+4}$
7.  $f(x) = \dfrac{x^3-9x}{x+1}$
8.  $f(x) = \dfrac{x^3-9x}{x^2-1}$
9.  $f(x) = \dfrac{x^3-9x}{x^3-1}$
10. $f(x) = \dfrac{x^4}{x^4-5x^2+4}$

````{block} solution
{.lower-alpha-paren .vsep-2 .avoid-break-items}
1.  $f(x) = \dfrac{x^2+4x+4}{x-2} = \dfrac{(x+2)^2}{x-2}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-2$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
    |$(x+2)^2$|$+$|$0$|$+$||$+$
    |$x-2$|$-$||$-$|{.g}$0$|$+$
    |$\dfrac{(x+2)^2}{x-2}$|$-$|$0$|$-$|{.g}|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ 2 \right\}$;
    $x_1 = -2$; ordonnée à l'origine vaut $-2$.

2.  $f(x) = \dfrac{x+1}{x^2+x-6} = \dfrac{x+1}{(x+3)(x-2)}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$-1$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
    |$x+1$|$-$||$-$|$0$|$+$||$+$
    |$x+3$|$-$|{.g}$0$|$+$||$+$||$+$
    |$x-2$|$-$||$-$||$-$|{.g}$0$|$+$
    |$\dfrac{x+1}{(x+3)(x-2)}$|$-$|{.g}|$+$|$0$|$-$|{.g}|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -3; 2 \right\}$;
    $x_1 = -1$; ordonnée à l'origine vaut $-\frac{1}{6}$.

3.  $f(x) = \dfrac{x^2-1}{(x+1)^2} = \dfrac{(x+1)(x-1)}{(x+1)^2}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-1$|{.w}|$1$|{.r .w}$\tiny+\;\infty$
    |$(x+1)$|$-$|$0$|$+$||$+$
    |$(x-1)$|$-$||$-$|$0$|$+$
    |$(x+1)^2$|$+$|{.g}$0$|$+$||$+$
    |$\dfrac{(x+1)(x-1)}{(x+1)^2}$|$+$|{.g}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -1 \right\}$;
    $x_1 = 1$; ordonnée à l'origine vaut $-1$.


4.  $f(x) = \dfrac{4}{x^2-4} = \dfrac{4}{(x+2)(x-2)}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-2$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
    |$4$|$+$||$+$||$+$
    |$(x+2)$|$-$|{.g}$0$|$+$||$+$
    |$(x-2)$|$-$||$-$|{.g}$0$|$+$
    |$\dfrac{4}{(x+2)(x-2)}$|$+$|{.g}|$-$|{.g}|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -2 ; 2 \right\}$; pas de zéro;
    ordonnée à l'origine vaut $-1$.

5.  $f(x) = \dfrac{4}{x^2+4}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty \qquad\qquad +\;\infty$
    |$4$|$+$
    |$x^2+4$|$+$
    |$\dfrac{4}{x^2+4}$|$+$
    ```
    $D_f=\mathbb{R}$; pas de zéro; ordonnée à l'origine vaut $1$.

6.  $f(x) = \dfrac{2x^2-1}{x^2+4} = \dfrac{(x + \frac{\sqrt{2}}{2})(x - \frac{\sqrt{2}}{2})}{x^2+4}$

    ```{flex-table} function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-\frac{\sqrt{2}}{2}$|{.w}|$\frac{\sqrt{2}}{2}$|{.r .w}$\tiny+\;\infty$
    |$x + \frac{\sqrt{2}}{2}$|$-$|$0$|$+$||$+$
    |$x - \frac{\sqrt{2}}{2}$|$-$||$-$|$0$|$+$
    |$x^2+4$|$+$||$+$||$+$
    |$\dfrac{(x + \frac{\sqrt{2}}{2})(x - \frac{\sqrt{2}}{2})}{x^2+4}$|$+$|$0$|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R}$; $x_1 = -\frac{\sqrt{2}}{2}$, $x_2 = \frac{\sqrt{2}}{2}$;
    ordonnée à l'origine vaut $-\frac{1}{4}$.

7.  $f(x) = \dfrac{x^3-9x}{x+1} = \dfrac{x(x^2-9)}{x+1} = \dfrac{x(x+3)(x-3)}{x+1}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$-1$|{.w}|$0$|{.w}|$3$|{.r .w}$\tiny+\;\infty$
    |$x$|$-$||$-$||$-$|$0$|$+$||$+$
    |$x+3$|$-$|$0$|$+$||$+$||$+$||$+$
    |$x-3$|$-$||$-$||$-$||$-$|$0$|$+$
    |$x+1$|$-$||$-$|{.}$0$|$+$||$+$||$+$
    |$\dfrac{x(x+3)(x-3)}{x+1}$|$+$|$0$|$-$|{.g}|$+$|$0$|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -1 \right\}$;
    $x_1 = -3$, $x_2 = 0$, $x_3 = 3$; ordonnée à l'origine vaut $0$.

8.  $f(x) = \dfrac{x^3-9x}{x^2-1} = \dfrac{x(x+3)(x-3)}{(x+1)(x-1)}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$-1$|{.w}|$0$|{.w}|$1$|{.w}|$3$|{.r .w}$\tiny+\;\infty$
    |$x$|$-$||$-$||$-$|$0$|$+$||$+$||$+$
    |$x+3$|$-$|$0$|$+$||$+$||$+$||$+$||$+$
    |$x-3$|$-$||$-$||$-$||$-$||$-$|$0$|$+$
    |$x+1$|$-$||$-$|{.}$0$|$+$||$+$||$+$||$+$
    |$x-1$|$-$||$-$||$-$||$-$|{.}$0$|$+$||$+$
    |$\dfrac{x(x+3)(x-3)}{(x+1)(x-1)}$|$-$|$0$|$+$|{.g}|$-$|$0$|$+$|{.g}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -1 ; 1 \right\}$;
    $x_1 = -3$, $x_2 = 0$, $x_3 = 3$; ordonnée à l'origine vaut $0$.

9.  $f(x) = \dfrac{x^3-9x}{x^3-1} = \dfrac{x(x+3)(x-3)}{(x-1)(x^2+x+1)}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$0$|{.w}|$1$|{.w}|$3$|{.r .w}$\tiny+\;\infty$
    |$x$|$-$||$-$|$0$|$+$||$+$||$+$
    |$x+3$|$-$|$0$|$+$||$+$||$+$||$+$
    |$x-3$|$-$||$-$||$-$||$-$|$0$|$+$
    |$x-1$|$-$||$-$||$-$|{.}$0$|$+$||$+$
    |$x^2+x+1$|$+$||$+$||$+$||$+$||$+$
    |$\dfrac{x(x+3)(x-3)}{(x-1)(x^2+x+1)}$|$+$|$0$|$-$|$0$|$+$|{.}|$-$|$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ 1 \right\}$;
    $x_1 = -3$, $x_2 = 0$, $x_3 = 3$; ordonnée à l'origine vaut $0$.

10. $f(x) = \dfrac{x^4}{x^4-5x^2+4} = \dfrac{x^4}{(x^2-4)(x^2-1)} = \dfrac{x^4}{(x+2)(x-2)(x+1)(x-1)}$

    ```{flex-table} function-table
    |$t$|{.l .w}$\tiny-\;\infty$|$-2$|{.w}|$-1$|{.w}|$0$|{.w}|$1$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
    |$x^4$|$+$||$+$||$+$|$0$|$+$||$+$||$+$
    |$x+2$|$-$|{.g}$0$|$+$||$+$||$+$||$+$||$+$
    |$x-2$|$-$||$-$||$-$||$-$||$-$|{.g}$0$|$+$
    |$x+1$|$-$||$-$|{.}$0$|$+$||$+$||$+$||$+$
    |$x-1$|$-$||$-$||$-$||$-$|{.}$0$|$+$||$+$
    |$\dfrac{x^4}{(x+2)(x-2)(x+1)(x-1)}$|$+$|{.g}$0$|$-$|{.g}|$+$|$0$|$+$|{.g}|$-$|{.g}$0$|$+$
    ```

    $D_f=\mathbb{R} \setminus \left\{ -2; -1 ; 1 ; 2 \right\}$;
    $x_1 = 0$; ordonnée à l'origine vaut $0$.
````

## Solutions

```{blocks} solution
:class: allow-break-inside
```
