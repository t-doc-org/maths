% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Factorisation

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

La factorisation est l'opération réciproque de la distribution d'un produit
de polynômes.

```{figure} images/schema.png
:width: 50%
```

Pour contrôler si une factorisation est correcte, il suffit de distribuer le
résultat obtenu et de comparer avec la donnée initiale!

### Mise en évidence

```{admonition} Mise en évidence
:class: note
Pour la mise en évidence, il faut:
1. trouver le facteur commun à chaque monôme qui compose le polynôme,
2. mettre en évidence ce facteur commun.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $x^2y+xy^5-x^2y^2=xy(x+y^4 - xy)$
2.  $4a^2b+12az^6-8a=4a(ab+3z^6-2)$
3.  $5nm^2-25n^2m^3+20m^5=5m^2(n-5n^2m+4m^3)$
4.  $−6x^2y+18xy^2−12y^4=−6y(x^2−3xy+2y^3)$
```

`````{container} frame noprint
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   # Vidéo - Théorie
    ```{youtube} r3AzqvgLcI8
    ```
-   # Vidéo - Exercices résolus
    ```{youtube} WXNLyUjQvCo
    ```
-   # Exercices supplémentaires
    [Série d'exercices de mise en évidence](mathelot.eu-mise-en-evidence.pdf)<br>
    source: (<https://www.mathelot.eu/>)
`````

La mise en évidence simultanée de tous les termes est parfois impossible, mais
cela devient faisable en les regroupant judicieusement.

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}

1.  $3(x+1)+y(x+1)=(3+y)(x+1)$
2.  $a(x-y)-2(x-y)=(a-2)(x-y)$
3.  $x(x-3)+(x-3)=(x-3)(x+1)$
4.  Regroupez les termes deux à deux:
    $$
    x^2y-xy^2+x-y &=(x^2y-xy^2)+(x-y)\\
                  &=xy(x-y)+1(x-y)\\
                  &=(xy+1)(x-y)
    $$
5.  Regroupez les termes deux à deux:
    $$
    3y+6+xy+2x  &=(3y+6)+(xy+2x)\\
                &=3(y+2)+x(y+2)\\
                &=(3+x)(y+2)
    $$
```

`````{container} frame noprint
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   # Vidéo - Théorie
    ```{youtube} 5dCsR85qd3k
    ```
-   # Vidéo - Exercices résolus
    ```{youtube} sXCg6l795C4
    ```
`````

```{container} frame instructor noprint
-> ex 54 et ex 55
```

### Identités remarquables

````{admonition} Identités remarquables
:class: note
Il faut connaître les identités remarquables suivantes par coeur et les
appliquer. Certaines sont très faciles à reconnaître.

```{math}
:class: align-center
a^2+2ab+b^2 &= (a+b)^2 \\
a^2-2ab+b^2 &= (a-b)^2\\
a^2-b^2 &= (a+b)(a-b)\\
a^3+3a^2b+3ab^2+b^3 &= (a+b)^3\\
a^3-3a^2b+3ab^2-b^3 &= (a-b)^3
```

Remarque: $a^2+b^2$ n'est pas factorisable.
````

````{container} frame noprint
# Exemple {num2}`exemple`

```{list-grid}
:style: grid-template-columns: 4fr 1fr 4fr; gap: 0.3rem; padding-left: 1rem;
- a) $\; a^2+8a+16=(a+4)^2$
- utilisez
- $a^2+2ab+b^2 = (a+b)^2$
- b) $\;4x^2-12x+9=(2x-3)^2$
- utilisez
- $a^2-2ab+b^2 = (a-b)^2$
- c) $\;25x^2-y^2=(5x+y)(5x-y)$
- utilisez
- $a^2-b^2 = (a+b)(a-b)$
- d) $\;x^3-1=(x-1)(x^2+x+1)$
- utilisez
- $a^3-b^3 = (a-b)(a^2+ab+b^2)$
```
````

`````{container} frame noprint
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   # Vidéo - Théorie
    ```{youtube} T9T4IeYGEe4
    ```
-   # Exercices supplémentaires
    [Série d'exercices de factorisation avec les identités remarquables](gomaths.ch-produits-remarquables.pdf)

    source: (<https://gomaths.edu-vd.ch/alg_calc_litt.php>)
````
`````

```{container} frame instructor noprint
-> ex 56 et ex 57
```

### Décomposition du trinôme de deuxième degré

```{admonition} Définition
:class: note
Un **trinôme** est un polynôme composé de trois monômes. Des trinômes du type
$x^2+ax+b$, où $a$ et $b$ sont des nombres entiers, peuvent souvent être
factorisés grâce à une simple astuce.
```

```{admonition} Trinômes avec $a=1$
:class: note
$x^2+bx+c$\
Il faut trouver les deux nombres tel que:
$$ \dots \:\: \cdot \:\, \dots &= c\\
\dots \: + \: \dots &= b$$

Si $c > 0$ et $b > 0$, alors les deux nombres cherchés sont positifs.
Si $c > 0$ et $b < 0$, alors les deux nombres cherchés sont négatifs.
Si $c < 0$, alors les deux nombres cherchés sont de signes différents.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Pour factoriser $x^2+7x+12$, il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= 12\\
    \dots \: + \: \dots &= 7$$
    $x^2+7x+12=(x+3)(x+4)$
2.  Pour factoriser $x^2-8x+15$, il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= 15\\
    \dots \: + \: \dots &= -8$$
    $x^2-8x+15=(x-3)(x-5)$
3.  Pour factoriser $x^2+3x-18$, il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -18\\
    \dots \: + \: \dots &= 3$$
    $x^2+3x-18=(x+6)(x-3)$
```

```{container} frame noprint
# Exercices supplémentaires

[Série d'exercices de factorisation de trinômes 1](gomaths.ch-trinomes-simples.pdf)

source: (<https://gomaths.edu-vd.ch/alg_calc_litt.php>)
```

```{admonition} Trinômes avec $a \neq 1$
:class: note
$ax^2+bx+c$\
Si $a \neq 1$, la méthode est la suivante:
1. Trouvez les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= a \cdot c\\
    \dots \: + \: \dots &= b$$
2.  Décomposez le terme du x en 2 termes en utilisant les nombres trouvés en 1.
3.  Mettez en évidence en regroupant les termes deux par deux.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Pour factoriser $2x^2 + 13x - 7$, il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -14\\
    \dots \: + \: \dots &= 13$$
    Comme $c < 0$, alors les deux nombres cherchés sont de signes différents.\
    Les deux nombres sont $-1$ et $14$.\
    Remplacez $13x$ par $-x + 14x$, ensuite mettez en évidence en regroupant les
    termes deux par deux.
    $$
    2x^2 + 13x - 7  &=2x^2-x+14x-7\\
                    &=(2x^2-x)+(14x-7)\\
                    &=x(2x-1)+7(2x-1)\\
                    &=(x+7)(2x-1)
    $$
2.  Pour factoriser $3x^2 - 2x - 8$, il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -24\\
    \dots \: + \: \dots &= -2$$
    Comme $c < 0$, alors les deux nombres cherchés sont de signes différents.\
    Les deux nombres sont $-6$ et $4$.\
    Remplacez $-2x$ par $-6x + 4x$, ensuite mettez en évidence en regroupant les
    termes deux par deux.
    $$3x^2 - 2x - 8 &=3x^2-6x+4x-8\\
                    &=(3x^2-6x)+(4x-8)\\
                    &=3x(x-2)+4(x-2)\\
                    &=(3x+4)(x-2)
    $$
```

```{container} frame noprint
# Exercices supplémentaires

[Série d'exercices de factorisation de trinômes 2](gomaths.ch-trinomes-complexes.pdf)

source: (<https://gomaths.edu-vd.ch/alg_calc_litt.php>)
```

### Substitution

```{admonition} Substitution
:class: tip
1.  Remplacez $x^2$ (ou $x^3$) par $y$.
2.  Factorisez avec une autre méthode.
3.  Remplacez $y$ par $x^2$ (ou $x^3$).
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Posez $x^2 = y$.
    $$
    x^4-5x^2-6 &= y^2-5y-6 \qquad && \textrm{remplacez } x^2 \textrm{ par } y\\
                &=(y+1)(y-6) \qquad && \textrm{factorisez}\\
                &=(x^2+1)(x^2-6) \qquad && \textrm{remplacez } y \textrm{ par } x^2
    $$
2.  Posez $x^3 = y$.
    $$
    x^6-7x^3+12 &=y^2-7y+12 \qquad && \textrm{remplacez } x^3 \textrm{ par } y\\
                &=(y-3)(y-4) \qquad && \textrm{factorisez}\\
                &=(x^3-3)(x^3-4) \qquad && \textrm{remplacez } y \textrm{ par } x^3
    $$
```

```{container} frame instructor noprint
-> ex 58 et ex 59
```

### Combinaison de méthodes

```{admonition} Marche à suivre
:class: tip
Pour factoriser complètement un polynôme, il faut parfois appliquer plusieurs
méthodes à la suite.

1.  Mettez en évidence au maximum en regroupant éventuellement des termes.
2.  Utilisez les identités remarquables.
3.  Utilisez les trinômes.
4.  Retournez à 1.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Appliquez plusieurs méthodes en commençant par la mise en évidence.
    $$
    5x^2 - 10x + 5 &= 5(x^2-2x+1) \qquad && \textrm{mise en évidence}\\
    &= 5(x-1)^2 && \textrm{identités algébriques}
    $$
2.  Appliquez plusieurs méthodes en commençant par la mise en évidence.
    $$
    -x^2 + 5x - 6 &= -(x^2-5x+6) \qquad && \textrm{mise en évidence}\\
    &= -(x-2)(x-3) && \textrm{décomposition du trinôme}
    $$
3.  Appliquez plusieurs méthodes en commençant par le regroupement de termes.
    $$
    3x^3+6x^2+3x-(x+1)^2 &=(3x^3+6x^2+3x)-(x+1)^2 \qquad && \textrm{regroupement}\\
    &= 3x(x^2+2x+1)-(x+1)^2 && \textrm{mise en évidence}\\
    &= 3x(x+1)^2-(x+1)^2 && \textrm{identités algébriques}\\
    &= (3x-1)(x+1)^2 && \textrm{mise en évidence}
    $$
```

```{container} frame instructor noprint
-> ex 60 et ex 61
```


## Exercices

<style>
.factorisation td {
    border: 1px solid black;
    border-collapse: collapse;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
}
</style>

### Exercice {num2}`exercice`

Utilisez la mise en évidence pour factoriser le plus possible.

{.lower-alpha-paren .columns-2}
1. $10xy-20x^{2}y+30xy^{2}=$
2. $9x^{3}-12x^{2}-15x=$
3. $9xy+6yz+3xz=$
4. $24b^{3}c^{5}-36bc^{2}=$
5. $3a^{3}b^{4}-12a^{2}b^{5}=$
6. $4x(x-y)+5y(x-y)=$
7. $35x^{2}y-28xy^{2}+7xy=$
8. $(x+2)^{2}-5(x+2)=$
9. $14x^{5}-7x^{4}+21x^{3}-35x^{2}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $10xy(1-2x+3y)$
2. $3x(3x^{2}-4x-5)$
3. $3(3xy+2yz+xz)$
4. $12bc^{2}(2b^{2}c^{3}-3)$
5. $3a^{2}b^{4}(a-4b)$
6. $(x-y)(4x+5y)$
7. $7xy(5x-4y+1)$
8. $(x+2)(x-3)$
9. $7x^{2}(2x^{3}-x^{2}+3x-5)$
```

### Exercice {num2}`exercice`

Mettez en évidence par regroupement.

{.lower-alpha-paren .columns-2}
1. $3(a+b)+x(a+b)=$
2. $(x+1)x+2(x+1)=$
3. $a(x-y)-(x-y)=$
4. $(x-y)(b-a)+a(x-y)=$
5. $4a(x-2y)-2a(x-2y)=$
6. $3y+6+xy+2x=$
7. $ay-by+az-bz=$
8. $x^2+ax+bx+ab=$
9. $2ax+2ay-bx-by=$
10. $x^3-x^2+2x-2=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $(a+b)(3+x)$
2. $(x+1)(x+2)$
3. $(x-y)(a-1)$
4. $b(x-y)$
5. $2a(x-2y)$
6. $(y+2)(x+3)$
7. $(a-b)(y+z)$
8. $(x+a)(x+b)$
9. $(x+y)(2a-b)$
10. $(x-1)(x^2+2)$
```

### Exercice {num2}`exercice`

Factorisez à l'aide des identités remarquables.

{.lower-alpha-paren .columns-2}
1. $x^{2}+2x+1=$
2. $x^{2}-2xy+y^{2}=$
3. $9y^{2}+6y+1=$
4. $4x^{2}-9y^{2}=$
5. $1-16z^{4}=$
6. $49x^{2}-28x+4=$
7. $0.01x^{2}-4=$
8. $z^{2}-8z+16=$
9. $4x^{2}y^{2}-9=$
10. $y^{4}-2y^{2}+1=$
11. $x^3+3x^2y+3xy^2+y^3=$
12. $8x^3+12x^2+6x+1=$
13. $x^3-3x^2+3x-1=$
14. $27y^3-27y^2x+9yx^2-x^3=$

```{block} solution
{.lower-alpha-paren .columns-2}
1. $(x+1)^{2}$
2. $(x-y)^{2}$
3. $(3y+1)^{2}$
4. $(2x-3y)(2x+3y)$
5. $(1+4z^{2})(1+2z)(1-2z)$
6. $(7x-2)^{2}$
7. $(0.1x-2)(0.1x+2)$
8. $(z-4)^{2}$
9. $(2xy-3)(2xy+3)$
10. $(y^{2}-1)^{2}=(y-1)^{2}(y+1)^{2}$
11. $(x+y)^3$
12. $(2x+1)^3$
13. $(x-1)^3$
14. $(3y-x)^3$
```

### Exercice {num2}`exercice`

Complétez le tableau ci-dessous.

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{flex-table}
    :class: factorisation
    || $x^2-64$
    |$(x+5)(x-5)$ |
    |$(x+1)^2$ |
    || $x^2+12x+36$
    || $x^2+4x+4$
    |$(x-2)^2$  |
    || $x^2-6x+9$
    || $x^2-169$
    ```
-   ```{flex-table}
    :class: factorisation
    || $x^2-100$
    |$(x+8)^2$ |
    || $x^2+6x+9$
    | $(x+9)(x-9)$ |
    |$(x+10)^2$ |
    |  | $x^2+10x+25$
    |  | $x^2-49$
    |$(x+7)^2$  |
    ```
````

`````{block} solution
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{flex-table}
    :class: factorisation
    |$(x+8)(x-8)$| $x^2-64$
    |$(x+5)(x-5)$ | $x^2-25$
    |$(x+1)^2$ | $x^2 +2x +1$
    |$(x+6)^2$| $x^2+12x+36$
    |$(x+2)^2$| $x^2+4x+4$
    |$(x-2)^2$| $x^2-4x+4$
    |$(x-3)^2$| $x^2-6x+9$
    |$(x+13)(x-13)$| $x^2-169$
    ```
-   ```{flex-table}
    :class: factorisation
    |$(x+10)(x-10)$| $x^2-100$
    |$(x+8)^2$ | $x^2+16x+64$
    |$(x+3)^2$| $x^2+6x+9$
    | $(x+9)(x-9)$ |$x^2-81$
    |$(x+10)^2$ | $x^2+20x+100$
    | $(x+5)^2$ | $x^2+10x+25$
    | $(x+7)(x-7)$ | $x^2-49$
    |$(x+7)^2$  | $x^2+14x+49$
    ```
````
`````

### Exercice {num2}`exercice`

Complétez le tableau ci-dessous.

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{flex-table}
    :class: factorisation
    | | $x^2+7x-8$
    | $(x-9)(x+10)$ |
    | $(x-3)(x+6)$ |
    | | $x^2-x-12$
    | | $x^2-x-20$
    | $(x-9)(x-8)$  |
    | | $x^2+14x+45$
    | | $x^2+3x-28$
    ```
-   ```{flex-table}
    :class: factorisation
    | | $x^2+3x-10$
    | $(x-1)(x-2)$ |
    | | $x^2-12x+35$
    | $(x-4)(x-5)$ |
    | $(x-3)(x+9)$ |
    | | $x^2-11x+24$
    | | $x^2+10x+16$
    | $(x-8)(x+5)$  |
    ```
````

`````{block} solution
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{flex-table}
    :class: factorisation
    | $(x+8)(x-1)$ | $x^2+7x-8$
    | $(x-9)(x+10)$ | $x^2+x-90$
    | $(x-3)(x+6)$ | $x^2+3x-18$
    | $(x-4)(x+3)$ | $x^2-x-12$
    | $(x-5)(x+4)$ | $x^2-x-20$
    | $(x-9)(x-8)$ | $x^2-17x+72$
    | $(x+9)(x+5)$ | $x^2+14x+45$
    | $(x+7)(x-4)$ | $x^2+3x-28$
    ```
-   ```{flex-table}
    :class: factorisation
    | $(x+5)(x-2)$ | $x^2+3x-10$
    | $(x-1)(x-2)$ | $x^2-3x+2$
    | $(x-7)(x-5)$ | $x^2-12x+35$
    | $(x-4)(x-5)$ | $x^2-9x+20$
    | $(x-3)(x+9)$ | $x^2+6x-27$
    | $(x-3)(x-8)$ | $x^2-11x+24$
    | $(x+2)(x+8)$ | $x^2+10x+16$
    | $(x-8)(x+5)$ | $x^2-3x-40$
    ```
````
`````

### Exercice {num2}`exercice`

Factorisez les trinômes suivants.

{.lower-alpha-paren .columns-2}
1. $x^2-7x+6=$
2. $x^2+7x+6=$
3. $x^2-14x-15=$
4. $x^2+8x+15=$
5. $x^2-9x+20=$
6. $x^2+7x+12=$
7. $x^2-13x+12=$
8. $2x^2+14x+20=$
9. $44+x^2-15x=$
10. $x^{4}-13x^2+36=$
11. $x^{6}+11x^{3}+18=$
12. $2x^2-5x-3=$
13. $3x^2+14x+8=$
14. $2x^2+x-15=$

```{block} solution
{.avoid-break-inside}

{.lower-alpha-paren .columns-2}
1. $ (x-1)(x-6)$
2. $ (x+1)(x+6)$
3. $ (x-15)(x+1)$
4. $ (x+3)(x+5)$
5. $ (x-4)(x-5)$
6. $ (x+3)(x+4)$
7. $ (x-1)(x-12)$
8. $ 2(x+2)(x+5)$
9. $ (x-4)(x-11)$
10. $ (x-2)(x+2)(x-3)(x+3)$
11. $ (x^3+9)(x^3+2)$
12. $ (2x+1)(x-3)$
13. $ (3x+2)(x+4)$
14. $ (2x-5)(x+3)$
```

### Exercice {num2}`exercice`

Factorisez le plus possible.

{.lower-alpha-paren .columns-2}
1. $12uv^3+18u^2v=$
2. $9m^4n^2-3m^2n-m^3n^2=$
3. $abc^2-ab^3c+a^4bc=$
4. $18ab^2c^4-24a^3b^2c=$
5. $x^2-1=$
6. $4a^2+4a+1=$
7. $9y^2+6y+1=$
8. $25z^2+20yz+4y^2=$
9. $16t^2-1=$
10. $x^2+6x+8=$
11. $m^2-2m-15=$
12. $4c^2-14c+10=$
13. $3x^2+7x+2=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $6uv(2v^2+3u)$
2. $m^2n(9m^2n-3-mn)$
3. $abc(c-b^2+a^3)$
4. $6ab^2c(3c^3-4a^2)$
5. $(x+1)(x-1)$
6. $(2a+1)^2$
7. $(3y+1)^2$
8. $(5z+2y)^2$
9. $(4t-1)(4t+1)$
10. $(x+2)(x+4)$
11. $(m-5)(m+3)$
12. $2(2c-5)(c-1)$
13. $(3x+1)(x+2)$
```

### Exercice {num2}`exercice`

Factorisez le plus possible en utilisant plusieurs méthodes.

{.lower-alpha-paren .columns-2}
1. $-16x^5+x=$
2. $-3z^4+6z^3+24z^2=$
3. $3x^3-18x^2+24x=$
4. $x^{4}-x^{6}=$
5. $x^{4}-1=$
6. $2x^{3}y-18xy=$
7. $3x^{2}+2x-8=$
8. $6x^{2}+13x+6=$
9. $36x^{4}-13x^{2}+1=$
10. $2a^2x-15abx+18b^2x=$

```{block} solution
{.lower-alpha-paren .columns-2}
1. $-x(4x^2+1)(2x+1)(2x-1)$
2. $-3z^2(z-4)(z+2)$
3. $3x(x-2)(x-4)$
4. $ x^{4}(1+x)(1-x)$
5. $ (x^{2}+1)(x+1)(x-1)$
6. $ 2xy(x-3)(x+3)$
7. $ (3x-4)(x+2)$
8. $ (3x+2)(2x+3)$
9. $ (3x+1)(3x-1)(2x+1)(2x-1)$
10. $x(2a-3b)(a-6b)$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
