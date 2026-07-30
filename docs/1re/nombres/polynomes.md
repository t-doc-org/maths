% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Polynômes

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

```{admonition} Définition
:class: note
Un **monôme** est une expression obtenue par multiplication d'un nombre réel et
de lettres avec exposants naturels (entier et positif). Sous sa forme réduite,
un monôme se compose de deux parties: son **coefficient** et sa **partie
littérale**.

Un **polynôme** est un monôme ou une somme de monômes. Les monômes qui composent
le polynôme sont les termes du polynôme. Un polynôme peut être réduit en
additionnant les monômes semblables (de même partie littérale) qui le composent.
```


```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $3x^3-2x^2+0.2x-4$ est un polynôme à une variable, $x$.
2.  $3a^2xy-2x^2y+4y$ est un polynôme à plusieurs variables: $a$, $x$ et $y$.
3.  $\sqrt{a^2-b^2}$, $\dfrac{3}{x}+x^2-4x$ et $3x^{\frac{2}{3}}+x^{0.5}$ ne
    sont pas des polynômes, car les exposants ne sont pas des entiers naturels.
4.  Tout nombre, comme par exemple $-10.5$, est un polynôme, appelé polynôme constant.
```

```{admonition} Définition
:class: note
L'exposant le plus élevé d'un polynôme à une variable est appelé **degré** du polynôme.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $x^3+2x-3$ est un polynôme de degré 3.
2. $3x^6+4x^4-2x$ est un polynôme de degré 6.
3. $5$ est un polynôme de degré $0$.
```

```{container} frame noprint
# Exemple {num2}`exemple`

1. Supprimez les parenthèses en faisant attention au signe qui se trouve devant:
    - s'il est positif, la parenthèse peut être supprimée sans autre.
    - s'il est négatif, il faut inverser le signe de chaques monômes qui se
      trouvent dans la parenthèse.
2. Reduisez en additionnant/soustrayant les mônomes semblables.

{.lower-alpha-paren}
1.  $(x^3+6x^2+3x-10) {\color{green}+} (2x^3-6x^2+1)$<br>
    $= {\color{blue}x^3} {\color{magenta}{+6x^2}} + 3x {\color{orange} - 10}{\color{blue}+2x^3} {\color{magenta}-6x^2}{\color{orange}+1}$<br>
    $={\color{blue}3x^3}+3x{\color{orange}-9}$
2.  $(x^3+6x^2+3x-10){\color{red}-}(x^3-3x^2+4x-7)$<br>
    $=x^3+6x^2+3x-10{\color{red}-}x^3{\color{red}+}3x^2{\color{red}-}4x{\color{red}+}7$<br>
    &=9x^2-x-3$
```

```{container} frame noprint
# Exemple {num2}`exemple`

1.  Multipliez chaque terme du premier polynôme avec chaque terme du deuxième en
    utilisant les règles de calcul des puissances.
2. Reduisez en additionnant/soustrayant les mônomes semblables.

{.lower-alpha-paren}
1.  $(x^2+3x-7) \cdot (5x-2)$<br>
    $=5x^3-2x^2+15x^2-6x-35x+14$<br>
    $=5x^3+13x^2-41x+14$
2.  $(ax+x) \cdot (a-x+1)$<br>
    $=a^2x-ax^2+ax+ax-x^2+x$<br>
    $=a^2x-ax^2+2ax-x^2+x$
```

```{container} frame noprint instructor
-> ex 46 à ex 49.
```

````{admonition} Définition
:class: note
Les trois équations suivantes sont appelées **identités remarquables**.

```{math}
:class: align-center
(a+b)^2 &= a^2+2ab+b^2 \\
(a-b)^2 &= a^2-2ab+b^2 \\
(a+b)(a-b) &=  a^2-b^2
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $(2x-5)^2=(2x)^2 - 2 \cdot 2x \cdot 5 + 5^2 = 4x^2-20x+25$
2. $(3b+a^2)^2=(3b)^2 + 2 \cdot 3b \cdot a^2 + (a^2)^2 = 9b^2+6a^2b+a^4$
3. $(4f+ \dfrac{1}{2})(4f-\dfrac{1}{2})= (4f)^2 - \left(\dfrac{1}{2}\right)^2 = 16f^2-\dfrac{1}{4}$
```

````{admonition} Définition
:class: note
Les équations suivantes sont appelées **identités remarquables de degré 3**.

```{math}
:class: align-center
(a+b)^3 &= a^3+3a^2b+3ab^2+b^3 \\
(a-b)^3 &= a^3-3a^2b+3ab^2-b^3 \\
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $$(x+1)^3 &= x^3 + 3 \cdot x^2 \cdot 1 + 3 \cdot x \cdot 1^2 + 1^3 \qquad\qquad\qquad &|& \text{appliquez la bonne identité: } (a+b)^3\\
    &= x^3 + 3 \cdot x^2 \cdot 1 + 3 \cdot x \cdot 1 + 1 &|& \text{effectuez les puissances}\\
    &= x^3 + 3x^2 + 3x + 1 &|& \text{simplifiez}$$
2.  $$(2b+5)^3 &= (2b)^3 + 3 \cdot (2b)^2 \cdot 5 + 3 \cdot 2b \cdot 5^2 + 5^3 \qquad\quad &|& \text{appliquez la bonne identité: } (a+b)^3\\
    &= 8b^3 + 3 \cdot 4b^2 \cdot 5 + 3 \cdot 2b \cdot 25 + 125 &|& \text{effectuez les puissances}\\
    &= 8b^3 + 60b^2 + 150b + 125 &|& \text{simplifiez}$$
3.  $$(a-2)^3 &= a^3 - 3 \cdot a^2 \cdot 2 + 3 \cdot a \cdot 2^2 - 2^3 \qquad\qquad\qquad &|& \text{appliquez la bonne identité: } (a-b)^3\\
    &= a^3 - 3 \cdot a^2 \cdot 2 + 3 \cdot a \cdot 4 - 8 &|& \text{effectuez les puissances}\\
    &= a^3 - 6a^2 + 12a - 8 &|& \text{simplifiez}$$
```

```{container} frame noprint instructor
-> ex 50 à ex 51.
```

```{container}
# Remarques

{.lower-alpha-paren}
1.  La division polynomiale est très semblable à la division en colonne avec
    reste.
1.  Avant d'effectuer une division polynomiale, ordonnez le dividende et le
    diviseur de la plus grande à la plus petite puissance.
2.  Si une division polynomiale possède un reste, alors le degré de celui-ci
    doit être inférieur au degré du diviseur.
3.  Pour contrôler le résultat d'une division polynomiale, il suffit de
    multiplier le résultat (sans le reste) avec le diviseur et d'ajouter le
    reste. Le résultat obtenu doit être égal au dividende.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $({\color{magenta}x^3+6x^2+3x-10}):({\color{red}x+5})=$<br>
    {vspace}`1lh`
    $\begin{array}{r|l}
    {\color{magenta}x^3+6x^2+3x-10}\phantom{0} & \underline{\phantom{0}{\color{red}x+5}\phantom{00000}} \\
    \underline{-(x^3 + 5x^2)}\phantom{000000000} & {\color{green}x^2 + x - 2} \\
    x^2 + 3x\phantom{000000} & \\
    \underline{-(x^2 + 5x)}\phantom{00000} & \\
    -2x - 10 \phantom{0}& \\
    \underline{-(-2x -10)} & \\
    {\color{orange}0}\phantom{0}& \\
    \end{array}$<br>
    {vspace}`1lh`
    $({\color{magenta}x^3+6x^2+3x-10}):({\color{red}x+5})= {\color{green}x^2 + x - 2}$ reste: ${\color{orange}0}$<br>
    Vérification:<br>
    $({\color{red}x+5})({\color{green}x^2 + x - 2}) = x^3 + 5x^2+ x^2+ 5x -2x -10 = {\color{magenta}x^3+6x^2+3x-10}$

2.  $({\color{magenta}3x^3-5x+1}):({\color{red}x^2-x})=$<br>
    {vspace}`1lh`
    $\begin{array}{r|l}
    {\color{magenta}3x^3+0x^2-5x+1}\phantom{0} & \underline{\phantom{0}{\color{red}x^2-x}\phantom{00000}} \\
    \underline{-(3x^3 - 3x^2)}\phantom{00000000} & {\color{green}3x + 3} \\
    3x^2 - 5x\phantom{0000} & \\
    \underline{-(3x^2 - 3x)}\phantom{000} & \\
    {\color{orange}-2x + 1}& \text{Le degré de } {\color{orange}-2x + 1} \text{ est plus petit que celui de } {\color{red}x^2-x} \text{-> stop}\\
    \end{array}$
    {vspace}`1lh`
    $({\color{magenta}3x^3-5x+1}):({\color{red}x^2-x})= {\color{green}3x + 3}$ reste: ${\color{orange}-2x + 1} $<br>
    Vérification:<br>
    $({\color{red}x^2-x})({\color{green}3x + 3}) + ({\color{orange}-2x + 1})  = 3x^3 + 3x^2 -3x^2 - 3x - 2x+1 = {\color{magenta}3x^3-5x+1}$
3.  $({\color{magenta}x^5+x^4-7x^3-x^2+10x+7}):({\color{red}x^3-2x})=$<br>
    {vspace}`1lh`
    $\begin{array}{r|l}
    {\color{magenta}x^5+x^4-7x^3-x^2+10x+7}\phantom{0} & \underline{\phantom{0}{\color{red}x^3-2x}\phantom{00000}} \\
    \underline{-(x^5 \phantom{0000} + 2x^3)}\phantom{00000000000000} & {\color{green}x^2 + x - 5} \\
    x^4 - 5x^3 - x^2\phantom{0000000000} & \\
    \underline{-(x^4  \phantom{00000} - 2x^2)}\phantom{000000000} & \\
    -5x^3 + x^2 + 10x \phantom{00000}& \\
    \underline{-(-5x^3  \phantom{00000} + 10x)}\phantom{0000} & \\
    {\color{orange}x^2 + \phantom{0}0x + 7}\phantom{00}& \text{Le degré de } {\color{orange}x^2 + 7} \text{ est plus petit que celui de } {\color{red}x^3-2x} \text{-> stop}\\
    \end{array}$<br>
    {vspace}`1lh`
    $({\color{magenta}x^5+x^4-7x^3-x^2+10x+7}):({\color{red}x^3-2x})= {\color{green}x^2 + x - 5}$ reste: ${\color{orange}x^2 + 7}$<br>
    Vérification:<br>
    $({\color{red}x^3-2x})({\color{green}x^2 + x - 5}) + ({\color{orange}x^2 + 7}) = x^5 + x^4 - 5x^3 - 2x^3 - 2x^2 + 10x + x^2 + 7 = {\color{magenta}x^5+x^4-7x^3-x^2+10x+7}$
```

```{container} frame noprint instructor
-> ex 52 à ex 53.
```


## Exercices

### Exercice {num2}`exercice`

Simplifiez.

{.lower-alpha-paren .columns-2}
1. $a^2+b^2-(a^2-b^2+3ab)-(b^2+a^2b)=$
2. $5xy+y^2-(3xy-(-y^2-xy))=$
3. $a+b-c-(-(b-3c))=$
4. $3a^2+a^4-5a^2-3a^4+a^0$=


```{block} solution
{.lower-alpha-paren .columns-4}
1. $b^2-3ab-a^2b$
2. $xy$
3. $a+2b-4c$
4. $-2a^4-2a^2+1$
```

### Exercice {num2}`exercice`

Calculez

{.lower-alpha-paren .columns-2}
1. $(a-x)(b-y)=$
2. $(a-x)b-y=$
3. $(x-y-z)(2x+3y)=$
4. $(4a-5x)(5c+4b)4n=$
5. $\dfrac{2}{3}(x+1) - \dfrac{1}{2}(x-1)=$
6. $\dfrac{1}{3}(x-3)+(x+3)-\dfrac{1}{4}(x+4)=$
7. $(4y+6x)(3a-5b)-(2x-6y)(2a+3b)=$
8. $(x-5)(3x-1)-(x-6)(x+5)=$
9. $(4+9a-3c)d^5-(d^3-6b)9ad^2=$
10. $\left(\dfrac{x}{2} - \dfrac{1}{3}\right)^2=$
11. $\left(\dfrac{x}{3} + \dfrac{2}{5}\right)\left(\dfrac{x}{3} - \dfrac{2}{5}\right)=$
12. $\left(x + \dfrac{1}{4}\right)\left(\dfrac{x}{2} + 2 \right)=$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $ab-ay-bx+xy$
2. $ab-bx-y$
3. $2x^2-3y^2+xy-2xz-3yz$
4. $80acn+64abn-100cnx-80bnx$
5. $\dfrac{x}{6}+\dfrac{7}{6}$
6. $\dfrac{13}{12}x+1$
7. $-2by-36bx+14ax+24ay$
8. $2x^2-15x+35$
9. $4d^5-3cd^5+54abd^2$
10. $\dfrac{x^2}{4}-\dfrac{x}{3}+\dfrac{1}{9}$
11. $\dfrac{x^2}{9}-\dfrac{4}{25}$
12. $\dfrac{x^2}{2}+\dfrac{17}{8}x +\dfrac{1}{2}$
```

### Exercice {num2}`exercice`

Calculez et simplifiez.

{.lower-alpha-paren}
1. $3a(a^{2}-1)-4a^{2}(a+2)-3a+4(a^{2}-1)=$
2. $-3x^{2}(x^{3}-2x^{2}+4)+4x^{3}(1-2x)+x(x-1)+2x=$
3. $[x-(x^{2}+3)]2x^{2}+3(x-2)+4x^{2}=$
4. $3x(x-[2x^{2}-(-x+4)]+3)-3x^{2}(x-2)=$
5. $3a[ab-(b^{2}+a^{2})]-2b(2a^{2}-[3ab+b^{2}]+ab)=$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $-a^{3}-4a^{2}-6a-4$
2. $-3x^{5}-2x^{4}+4x^{3}-11x^{2}+x$
3. $-2x^{4}+2x^{3}-2x^{2}+3x-6$
4. $-9x^{3}+6x^{2}+21x$
5. $-3a^{3}-a^{2}b+ab^{2}+2b^{3}$
```

### Exercice {num2}`exercice`

Soient les polynômes suivants.
$$A=\dfrac{1}{2}x^{3}-\dfrac{2}{3}x^{2}+1, \hspace{1cm} B=x^{3}-\dfrac{4}{5}x,  \hspace{1cm} C=\dfrac{5}{2}x-\dfrac{2}{5}$$

Calculez.

{.lower-alpha-paren .columns-4}
1. $P=AB$
2. $Q=BC$
3. $R=C(A+B)$
4. $S=6A-5B$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $\dfrac{1}{2}x^{6}-\dfrac{2}{3}x^{5}-\dfrac{2}{5}x^{4}+\dfrac{23}{15}x^{3}-\dfrac{4}{5}x$
2. $\dfrac{5}{2}x^{4}-\dfrac{2}{5}x^{3}-2x^{2}+\dfrac{8}{25}x$
3. $\dfrac{15}{4}x^{4}-\dfrac{34}{15}x^{3}-\dfrac{26}{15}x^{2}+\dfrac{141}{50}x-\dfrac{2}{5}$
4. $-2x^{3}-4x^{2}+4x+6$
```

### Exercice {num2}`exercice`

Calculez à l'aide des identités remarquables.

{.lower-alpha-paren .columns-2}
1. $(x-y)^2=$
2. $(x-1)^2=$
3. $(2c+1)(2c-1)=$
4. $(x-2)(x+2)=$
5. $(2x+y)^2=$
6. $(qr-r)^2=$
7. $(ef^2-f^3)^2=$
8. $(z^3-1)(z^3+1)=$
9. $(x^3+x^2y)^2=$
10. $(5y+z)(5y-z)=$
11. $(x+y)^3=$
12. $(2x+y)^3=$
13. $(c-3d)^3=$
14. $(4a-5b)^3=$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $x^2-2xy+y^2$
2. $x^2-2x+1$
3. $4c^2-1$
4. $x^2-4$
5. $4x^2+4xy+y^2$
6. $q^2r^2-2qr^2+r^2$
7. $e^2f^4-2ef^5+f^6$
8. $z^6-1$
9. $x^6+2x^5y+x^4y^2$
10. $25y^2-z^2$
11. $x^3+3x^2y+3xy^2+y^3$
12. $8x^3+12x^2y+6xy^2+y^3$
13. $c^3-9c^2d+27cd^2-27d^3$
14. $64a^3-240a^2b+300ab^2-125b^3$
```

### Exercice {num2}`exercice`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   Une boîte rectangulaire avec couvercle peut être construite en coupant les
    parties grisées d'un carton carré comme dans la figure ci-contre et en
    pliant ensuite le long des lignes pointillées.

    {.lower-alpha-paren}
    1.  Déterminer le polynôme donnant le volume de la boîte, si la longueur des
        côtés du carton vaut $50$ cm.
    2.  Quel est le volume de la boîte si $x=2$ cm?
-   ```{figure} images/boite.png
    :width: 80%
    ```
````

```{block} solution
{.lower-alpha-paren .columns-2}
1. $V=2x^3-100x^2+1250x$
2. $2116\,cm^3$
```

### Exercice {num2}`exercice`

Effectuez la division polynomiale avec reste.

{.lower-alpha-paren}
1. $(6x^3-17x^2+14x-3):(2x-3)=$
2. $(135a^2+77-30a+26a^3):(7-4a+13a^2)=$
3. $(6x^5+5x^4-25x^3+31x^2-12x+5):(2x^2-3x+2)=$
4. $(3m^4+6-2m^2+m^3):(m^2+2m)=$
5. $x^4:(x+1)=$


```{block} solution
{.lower-alpha-paren .columns-2}
1. $3x^2-4x+1$
2. $2a+11$
3. $3x^3+7x^2-5x+1$ reste: $x+3$
4. $3m^2-5m+8$ reste: $-16m+6$
5. $x^3-x^2+x-1$ reste: $1$
```

### Exercice {num2}`exercice`

Effectuez la division polynomiale avec reste.

{.lower-alpha-paren}
1. $(x^{3}-8x^{2}+16x+4):(x-5)=$
2. $(x^{5}-8x^{3}+8x^{2}-7x+6):(x^{2}+3x-2)=$
3. $(5x^{3}-2x^{2}+4x-4):(x-1)=$
4. $(2x^{3}+7x^{2}+10x+8):(2x^{3}+7x)=$
5. $(3x^{2}-4x+12):(3x^{2}-4x+1)=$
6. $(x^{12}-1):(x^{4}-1)=$

```{block} solution
{.lower-alpha-paren .columns-2}
1. $x^2-3x+1$ reste: $9$
2. $x^3-3x^2+3x-7$ reste: $20x-8$
3. $5x^2+3x+7$ reste: $3$
4. $1$ reste: $7x^2+3x+8$
5. $1$ reste: $11$
6. $x^8+x^4+1$
```

### Challenge

Effectuez la division polynomiale avec reste.

{.lower-alpha-paren}
1. $\left(\dfrac{5}{8}x^{2}-\dfrac{7}{12}x-\dfrac{1}{3}\right):\left(\dfrac{5}{4}x+\dfrac{1}{2}\right)=$
2. $\left(-\dfrac{1}{3}x^{4}+2x^{2}-\dfrac{1}{2}\right):\left(\dfrac{3}{2}x^{2}+\dfrac{1}{3}\right)=$

```{solution}
{.lower-alpha-paren .columns-2}
7. $\dfrac{1}{2}x-\dfrac{2}{3}$
8. $-\dfrac{2}{9}x^2+\dfrac{112}{81}$ reste: $-\dfrac{467}{486}$
```



## Solutions

```{blocks} solution
:class: allow-break-inside
```
