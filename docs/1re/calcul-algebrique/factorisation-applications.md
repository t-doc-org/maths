% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Factorisation - Applications

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/factorisation-applications.xopp>`
```

## Théorie

```{admonition} Simplification de fractions rationnelles
:class: note
1. Factorisez le numérateur et le dénominateur.
2. Simplifiez les facteurs communs au numérateur et au dénominateur s'il y en a.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $\dfrac{x^2+x}{x^2+2x+1}=\dfrac{x \cancel{(x+1)}}{(x+1)^{\cancel{2}}}=\dfrac{x}{x+1}$
2. $\dfrac{x^3-x^2-2x}{x^2+x}=\dfrac{x(x^2-x-2)}{x(x+1)}=\dfrac{\bcancel{x}(x-2)\cancel{(x+1)}}{\bcancel{x}\cancel{(x+1)}}=x-2$
3. $\dfrac{c^2-c}{c^2+c} \cdot \dfrac{c+1}{c^2-2c+1}=\dfrac{\bcancel{c}\xcancel{(c-1)}}{\bcancel{c}\cancel{(c+1)}} \cdot  \dfrac{\cancel{c+1}}{(c-1)^{\xcancel{2}}}=\dfrac{1}{c-1}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-appl-fact-ex1>`,
{numref}`exercice %s<exercice:1-appl-fact-ex2>`,
{numref}`exercice %s<exercice:1-appl-fact-ex3>` et
{numref}`exercice %s<exercice:1-appl-fact-ex4>`.
```

````{admonition} Résolution d'équations de degré supérieur ou égal à 2
:class: note
1.  Mettez tous les termes du même côté ($ax^2 + bx + c = 0$).
2.  Factorisez.
3.  Résolvez l'équation en utilisant la propriété suivante:
    ```{math}
    :class: align-center
    a \cdot b = 0 \iff a = 0 \quad \text{ou} \quad b = 0
    ```
````

````{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $$4x^2+12x+9 &=0 \quad \quad \quad &|& \text{factorisez}\\
    (2x+3)^2 &=0  &|& a \cdot b = 0 \iff a = 0 \quad \text{ou} \quad b = 0\\
    2x+3 &=0 &|& -3\\
    2x &=-3 &|& :2\\
    x &= -\dfrac{3}{2}$$
    $\implies S=\{ -\dfrac{3}{2}\}$
2.  $$x^3+x^2-6x&=0  \quad \quad \quad &|& \text{factorisez}\\
    x(x^2+x-6)&=0 &|& \text{factorisez}\\
    x(x+3)(x-2)&=0 &|& a \cdot b = 0 \iff a = 0 \quad \text{ou} \quad b = 0$$
    ```{list-grid}
    :style: grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
    - $x = 0$
    - ou
    - $(x+3)=0$
    - ou
    - $(x-2)=0$
    - $x_1=0$
    - ou
    - $x_2 = -3$
    - ou
    - $x_3=2$
    ```
    $\implies S=\{0;-3;2\}$
````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-appl-fact-ex5>` et
{numref}`exercice %s<exercice:1-appl-fact-ex6>`.
```

```{admonition} Addition/soustraction de fractions rationnelles
:class: note
1. Trouvez le plus petit dénominateur commun.
2. Mettez toutes les fractions sur ce dénominateur commun.
3. Additionnez/soutrayez les numérateurs.
4. Vérifiez que la fraction est irréductible, sinon simplifiez-la.
```

```{admonition} Rappel - PPMC
:class: tip, dropdown, noprint
Pour touver le ppmc de $180$ et $2625$, il faut
1.  décomposer ces nombres en produit de facteurs premiers:<br>
    $180 = {\color{red}2^2} \cdot {\color{green}3^2} \cdot 5$ et $2625 = 3 \cdot {\color{magenta}5^3} \cdot {\color{orange}7}$
2.  prendre chaque facteur qui apparaît au moins une fois dans l'une ou l'autre
    des décompositions **avec le plus grand exposant**.
3.  $\text{ppmc}(180; 2625) = {\color{red}2^2} \cdot {\color{green}3^2} \cdot {\color{magenta}5^3} \cdot {\color{orange}7} = 31\,500$.
```

````{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}

1.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $$\dfrac{x}{2} + \dfrac{3}{2x} &= \dfrac{x}{2} \cdot {\color{red}{\dfrac{x}{x}}} + \dfrac{3}{2x} \\
      &= \dfrac{x^2}{2x} + \dfrac{3}{2x} \\
      &= \dfrac{x^2 + 3}{2x}$$
    - Il faut trouver le $\text{ppmc}(2; 2x)$:<br>
      $2 = {\color{magenta}2}$ et $2x = 2 \cdot {\color{orange}x}$<br>
      $\text{ppmc}(2; 2x) = {\color{magenta}2} \cdot {\color{orange}x} = 2x$
    ```
2.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $$\dfrac{1}{a} + \dfrac{1}{b} &= \dfrac{1}{a} \cdot {\color{red}{\dfrac{b}{b}}} + \dfrac{1}{b} \cdot {\color{red}{\dfrac{a}{a}}} \\
      &= \dfrac{b}{ab} + \dfrac{a}{ab} \\
      &= \dfrac{a + b}{ab}$$
    - Il faut trouver le $\text{ppmc}(a; b)$:<br>
      $a = {\color{magenta}a}$ et $b = {\color{orange}b}$<br>
      $\text{ppmc}(a; b) = {\color{magenta}a} \cdot {\color{orange}b} = ab$
    ```
3.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $$\dfrac{1}{x} + \dfrac{2}{x^2} &= \dfrac{1}{x} \cdot {\color{red}{\dfrac{x}{x}}} + \dfrac{2}{x^2} \\
      &= \dfrac{x}{x^2} + \dfrac{2}{x^2} \\
      &= \dfrac{x + 2}{x^2}$$
    - Il faut trouver le $\text{ppmc}(x; x^2)$:<br>
      $x = x$ et $x^2 = {\color{orange}x^2}$<br>
      $\text{ppmc}(x; x^2) = {\color{orange}x^2}$
    ```
4.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $$\dfrac{x}{x + 1} - \dfrac{x + 1}{x} &= \dfrac{x}{x + 1} \cdot {\color{red}{\dfrac{x}{x}}} - \dfrac{x + 1}{x} \cdot {\color{red}{\dfrac{x + 1}{x + 1}}} \\
      &= \dfrac{x^2}{(x + 1)x} - \dfrac{(x + 1)(x + 1)}{x(x + 1)} \\
      &= \dfrac{x^2 -(x + 1)^2}{x(x + 1)} \\
      &= \dfrac{x^2 -(x^2 + 2x + 1)}{x(x + 1)} \\
      &= \dfrac{x^2 - x^2 - 2x - 1}{x(x + 1)} \\
      &= \dfrac{- 2x - 1}{x(x + 1)}$$
    - Il faut trouver le $\text{ppmc}(x+1; x)$:<br>
      $x+1 = {\color{magenta}x+1}$ (ne peut pas être factorisé) et $x = {\color{orange}x}$<br>
      $\text{ppmc}(x+1; x) = {\color{magenta}(x+1)} \cdot {\color{orange}x} = x(x+1)$
    ```
5.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $$\dfrac{n}{m-n}-\dfrac{mn+1}{m^2-mn} &=\dfrac{n}{m-n}-\dfrac{mn+1}{m(m-n)}\\
      &=\dfrac{{\color{red}m}n}{{\color{red}m}(m-n)}-\dfrac{mn+1}{m(m-n)} \\
      &=\dfrac{mn-(mn+1)}{m(m-n)} \\
      &=\dfrac{mn-mn-1}{m(m-n)} \\
      &= \dfrac{-1}{m(m-n)}$$
    - Il faut trouver le $\text{ppmc}(m-n; m^2-mn)$:<br>
      $m-n = {\color{magenta}m-n}$ (ne peut pas être factorisé)<br>
      et $m^2-mn = {\color{orange}m}(m-n)$<br>
      $\text{ppmc}(m-n; m^2-mn) = {\color{magenta}(m-n)} \cdot {\color{orange}m} = m(m-n)$
    ```
6.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $\dfrac{a}{a+b}-\dfrac{a^2}{a^2-b^2}+\dfrac{b}{a-b}$<br>
      $$&=\dfrac{a}{a+b}-\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b}{a-b} \\
      &=\dfrac{a{\color{red}(a-b)}}{(a+b){\color{red}(a-b)}}-\dfrac{a^2}{(a+b)(a-b)}+\dfrac{b{\color{red}(a+b)}}{{\color{red}(a+b)}(a-b)}\\
      &=\dfrac{a(a-b)-a^2+b(a+b)}{(a+b)(a-b)}\\
      &=\dfrac{a^2-ab-a^2+ab+b^2}{(a+b)(a-b)}\\
      &= \dfrac{b^2}{(a+b)(a-b)}$$
    - Il faut trouver le $\text{ppmc}(a+b; a^2-b^2; a-b)$:<br>
      $a+b = {\color{magenta}a+b}$ (ne peut pas être factorisé)<br>
      $a^2-b^2 = (a+b){\color{orange}(a-b)}$<br>
      $a-b = a-b$ (ne peut pas être factorisé)<br>
      $\text{ppmc}(a+b; a^2-b^2; a-b) = {\color{magenta}(a+b)} \cdot {\color{orange}(a-b)} = (a+b)(a-b)$
    ```
7.  ```{list-grid}
    :style: grid-template-columns: 6fr 4fr;
    - $\dfrac{1}{x}-\dfrac{1}{x^2-2x}+\dfrac{5}{x^2-4x+4}$
      $$&=\dfrac{1}{x}-\dfrac{1}{x(x-2)}+\dfrac{5}{(x-2)^2}\\
      &=\dfrac{1(x-2)^2-1(x-2)+5x}{x(x-2)^2}\\
      &=\dfrac{x^2-4x+4-x+2+5x}{x(x-2)^2}\\
      &=\dfrac{x^2+6}{x(x-2)^2}$$
    - Il faut trouver le $\text{ppmc}(x; x^2-2x; x^2-4x+4)$:<br>
      $x= {\color{magenta}x}$ (ne peut pas être factorisé)<br>
      $x^2-2x = x(x-2)$<br>
      $x^2-4x+4 = {\color{orange}(x-2)^2}$<br>
      $\text{ppmc}(x; x^2-2x; x^2-4x+4)= {\color{magenta}x} \cdot {\color{orange}(x-2)^2} = x(x-2)^2$
    ```
````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-appl-fact-ex7>`,
{numref}`exercice %s<exercice:1-appl-fact-ex8>` et
{numref}`exercice %s<exercice:1-appl-fact-ex9>`.
```


## Exercices

### Exercice {num2}`exercice:1-appl-fact-ex1`

Simplifiez les fractions suivantes.

{.lower-alpha-paren .columns-3}
1. $\dfrac{12x-13y}{24x^2-26xy}=$
2. $\dfrac{a^2-ab}{4a-4ab}=$
3. $\dfrac{4x+10y}{5y+2x}=$
4. $\dfrac{x-y}{3y-x}=$
5. $\dfrac{1-x}{1-2x+x^2}=$
6. $\dfrac{16x^2-25y^2}{8x-10y}=$
7. $\dfrac{x^2-y^2}{x-y}=$
8. $\dfrac{x^2+2xy+y^2}{ax+ay}=$
9. $\dfrac{x^2-1}{2x+2}=$
10. $\dfrac{36x^3-x}{6x^2-x}=$
11. $\dfrac{c^2-ac}{a^2-ac}=$
12. $\dfrac{a^2-2ab+b^2}{a^2-b^2}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\frac{1}{2x}$
2. $\frac{a-b}{4-4b}$
3. $2$
4. $\frac{x-y}{3y-x}$
5. $\frac{1}{1-x}$
6. $\frac{4x+5y}{2}$
7. $x+y$
8. $\frac{x+y}{a}$
9. $\frac{x-1}{2}$
10. $6x+1$
11. $\frac{-c}{a}$
12. $\frac{a-b}{a+b}$
```

### Exercice {num2}`exercice:1-appl-fact-ex2`

Simplifiez les fractions suivantes.

{.lower-alpha-paren .columns-3}
1. $\dfrac{24a^2b^2c+12b^2}{12ab^3c^2-6b^2}=$
2. $\dfrac{1-x^2}{1+x}=$
3. $\dfrac{9x^2+12x+4}{3x+2}=$
4. $\dfrac{a^2-4}{5ab+10b}=$
5. $\dfrac{25x^2-9y^2}{25x^2-30xy+9y^2}=$
6. $\dfrac{x^3-9y^2x}{2x^2-12xy+18y^2}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\frac{2(2a^2c+1)}{2abc^2-1}$
2. $1-x$
3. $3x+2$
4. $\frac{a-2}{5b}$
5. $\frac{5x+3y}{5x-3y}$
6. $\frac{x(x+3y)}{2(x-3y)}$
```

### Exercice {num2}`exercice:1-appl-fact-ex3`

Écrivez le résultat comme une seule fraction simplifiée.

{.lower-alpha-paren .columns-2}
1. $\dfrac{3a}{2b}: 2a=$
2. $\dfrac{(a+b)^2}{c} \cdot \dfrac{c^2}{a^2-b^2}=$
3. $\dfrac{a+b}{a+1} : \dfrac{ca+cb}{2a+2}=$
4. $4(a-4) : \dfrac{2a-8}{5}=$
5. $\dfrac{p^2-q^2}{p^2+2pq+q^2} \cdot \dfrac{p+q}{p-q}=$
6. $\dfrac{w^2-w-12}{t^2} : \dfrac{w-4}{t^2-t}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\frac{3}{4b}$
2. $\frac{c(a+b)}{a-b}$
3. $\frac{2}{c}$
4. $10$
5. $1$
6. $\frac{(w+3)(t-1)}{t}$
```

### Exercice {num2}`exercice:1-appl-fact-ex4`

Simplifiez les fractions suivantes.

{.lower-alpha-paren .columns-3}
1. $\dfrac{x^2-3x-10}{x^2-6x+5}=$
2. $\dfrac{x^2-4x-21}{x^2+10x+21}=$
3. $\dfrac{x^2-1}{x^2+3x-4}=$
4. $\dfrac{x^2+6x-16}{x^2+3x-10}=$
5. $\dfrac{2x^2-2x-12}{3x^2-12x-36}=$
6. $\dfrac{5x^2+15x-20}{5x^2+5x-60}=$
7. $\dfrac{5x^2-5x}{3x^2-3}=$
8. $\dfrac{2x^3-8x^2+8x}{8x^2(x-2)^3}=$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $\frac{x+2}{x-1}$
2. $\frac{x-7}{x+7}$
3. $\frac{x+1}{x+4}$
4. $\frac{x+8}{x+5}$
5. $\frac{2(x-3)}{3(x-6)}$
6. $\frac{x-1}{x-3}$
7. $\frac{5x}{3(x+1)}$
8. $\frac{1}{4x(x-2)}$
```

### Exercice {num2}`exercice:1-appl-fact-ex5`

Résolvez les équations suivantes par factorisation.

{.lower-alpha-paren .columns-2}
1. $(x+4)(x-3)= 0$
2. $(x-2)(3x+1)(2x+8)=0$
3. $x^2-6x=0$
4. $x^2+2x+1=0$
5. $x^2+5x+6=0$
6. $x^3+2x^2-3x=0$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{-4;3\}$
2. $S=\{-4;\frac{1}{3};2\}$
3. $S=\{0;6\}$
4. $S=\{-1\}$
5. $S=\{-3;-2\}$
6. $S=\{-3;0;1\}$
```

### Exercice {num2}`exercice:1-appl-fact-ex6`

Résolvez les équations suivantes par factorisation.

{.lower-alpha-paren .columns-2}
1. $6x^2+12x=0$
2. $x^2-9=0$
3. $x^5-5x^4=0$
4. $x^2+4x-12=0$
5. $x^2+2x=35$
6. $x^2+5x=24$
7. $5x^2+15x+10=0$
8. $4x^2-4x+1=0$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $S=\{0;-2\}$
2. $S=\{-3;3\}$
3. $S=\{0;5\}$
4. $S=\{-6;2\}$
5. $S=\{5;-7\}$
6. $S=\{-8;3\}$
7. $S=\{-1;-2\}$
8. $S=\{\frac{1}{2}\}$
```

### Exercice {num2}`exercice:1-appl-fact-ex7`

Écrivez le résultat comme une seule fraction simplifiée.

{.lower-alpha-paren .columns-2}
1. $\dfrac{3}{x} + \dfrac{4}{x^2}=$
2. $\dfrac{2x}{y} + \dfrac{y}{x}=$
3. $\dfrac{5}{3x} - \dfrac{2}{x^2}=$
4. $\dfrac{1}{x} - \dfrac{1}{x^2+x}=$
5. $\dfrac{4}{z-1}+\dfrac{z}{z^2-1}=$
6. $\dfrac{a}{a^2-4}-\dfrac{a}{a^2-4a+4}=$
7. $\dfrac{2}{2w+1}-\dfrac{2}{4w^2-1} +\dfrac{1}{2w-1}=$
8. $\dfrac{1}{x}-\dfrac{1}{x^2+x} - \dfrac{1}{x^2+2x+1}=$
9. $\dfrac{3}{x+y}+\dfrac{2}{x} =$
10. $\dfrac{b-a}{6a+2b} - \dfrac{a+b}{3a+b}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\frac{3x+4}{x^2}$
2. $\frac{2x^2+y^2}{xy}$
3. $\frac{5x-6}{3x^2}$
4. $\frac{1}{x+1}$
5. $\frac{5z+4}{(z-1)(z+1)}$
6. $\frac{-4a}{(a-2)^2(a+2)}$
7. $\frac{3}{2w+1}$
8. $\frac{x}{(x+1)^2}$
9. $\frac{5x+2y}{x(x+y)}$
10. $-\frac{1}{2}$
```

### Exercice {num2}`exercice:1-appl-fact-ex8`

Écrivez le résultat comme une seule fraction simplifiée.

{.lower-alpha-paren .columns-2}
1. $\dfrac{5x}{2y}-\dfrac{3y}{10x}=$
2. $\dfrac{ab-b^2}{a^3+a^2}:\dfrac{a^2b-b^3}{a^2+a}=$
3. $\dfrac{a}{2b}-\dfrac{b}{5c}=$
4. $\dfrac{18m^2np}{18m^2n^2p+54m^2np^2}=$
5. $(2a-b) \cdot \dfrac{1}{b-2a}=$
6. $\dfrac{a^2+6a+9}{4}:(2a+6)=$
7. $\dfrac{5}{x-3} - \dfrac{7}{x+5} + \dfrac{3x-40}{x^2+2x-15}=$
8. $ \dfrac{3(x+4)}{8xy} : \dfrac{x^2-16}{x^2y^2}=$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $\frac{25x^2-3y^2}{10xy}$
2. $\frac{1}{a(a+b)}$
3. $\frac{5ac-2b^2}{10bc}$
4. $\frac{1}{n+3p}$
5. $-1$
6. $\frac{a+3}{8}$
7. $\frac{x+6}{(x-3)(x+5)}$
8. $\frac{3xy}{8(x-4)}$
```

### Exercice {num2}`exercice:1-appl-fact-ex9`

Écrivez le résultat comme une seule fraction simplifiée.

{.lower-alpha-paren .columns-3}
1. $\dfrac{\dfrac{a}{a^2-1}}{\dfrac{1}{a+1}-\dfrac{1}{a-1}}=$
2. $\dfrac{\dfrac{m-n}{m+n} -\dfrac{m}{m-n}}{\dfrac{m+n}{m-n}-\dfrac{n}{m+n}}=$
3. $\dfrac{\dfrac{a}{a+1} -\dfrac{a}{a+2}}{\dfrac{a}{a+2}-\dfrac{2a}{a-1}}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $-\frac{a}{2}$
2. $\frac{n^2-3mn}{m^2+mn+2n^2}$
3. $\frac{1-a}{(a+1)(a+5)}$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
