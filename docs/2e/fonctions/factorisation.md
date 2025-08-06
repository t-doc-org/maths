% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Factorisation

```{metadata}
subject: "Mathématiques 2e année"
```

```{admonition} Marche à suivre
:class: tip
Pour factoriser un polynôme, il existe plusieurs méthodes:

1. Mise en évidence
2. Identités algébriques
3. Décomposition du trinôme du deuxième degré
4. Substitution
5. Zéros du polynôme
```

## Mise en évidence

Pour la mise en évidence, il faut trouver le facteur commun à chaque monôme qui
compose le polynôme. Ce facteur commun est mis en évidence. On obtient ainsi le
produit de ce facteur avec le reste du polynôme.

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $x^2y+xy^5-x^2y^2=xy(x+y^4 - xy)$
2.  $4a^2b+12az^6-8a=4a(ab+3z^6-2)$
3.  $5nm^2-25n^2m^3+20m^5=5m^2(n-5n^2m+4m^3)$
4.  $x(x-3)-(x-3)=(x-3)(x-1)$

La mise en évidence simultanée de tous les termes est parfois impossible, mais
cela devient faisable en les regroupant judicieusement.

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $3(x+1)+y(x+1)=(3+y)(x+1)$
2.  $a(x-y)-2(x-y)=(a-2)(x-y)$
3.  $x^2y-xy^2+x-y=(x^2y-xy^2)+(x-y)=xy(x-y)+1(x-y) = (xy+1)(x-y)$
4.  $3y+6+xy+2x=(3y+6)+(xy+2x)=3(y+2)+x(y+2)=(3+x)(y+2)$

## Identités algébriques

Il faut connaître les identités algébriques suivantes par coeur et les
appliquer. Certaines sont faciles à reconnaître.

```{admonition} Définition
:class: note
Les **identités algébriques** suivantes sont utiles pour la factorisation:

$$a^2+2ab+b^2 &= (a+b)^2 \\
a^2-2ab+b^2 &= (a-b)^2\\
a^3+3a^2b+3ab^2+b^3 &= (a+b)^3\\
a^3-3a^2b+3ab^2-b^3 &= (a-b)^3\\
a^2-b^2 &= (a+b)(a-b)\\
a^3-b^3 &= (a-b)(a^2+ab+b^2)\\
a^3+b^3 &= (a+b)(a^2-ab+b^2)$$

$a^2+b^2$ n'est pas factorisable.
```

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $a^2+8a+16=(a+4)^2$ en utilisant $a^2+2ab+b^2 = (a+b)^2$
2.  $4x^2-12x+9=(2x-3)^2$ en utilisant $a^2+-ab+b^2 = (a-b)^2$
3.  $25x^2-y^2=(5x+y)(5x-y)$ en utilisant $a^2-b^2 = (a+b)(a-b)$
4.  $x^3-1=(x-1)(x^2+x+1)$ en utilisant $a^3-b^3 = (a-b)(a^2+ab+b^2)$

## Décomposition du trinôme du deuxième degré

Un **trinôme** est un polynôme composé de trois monômes. Des trinômes du type
$x^2+ax+b$, où $a$ et $b$ sont des nombres entiers, peuvent souvent être
factorisés grâce à une simple astuce.

```{admonition} Trinômes avec $a=1$
:class: tip
$x^2+bx+c$\
Il faut trouver les deux nombres tel que:
$$ \dots \:\: \cdot \:\, \dots &= c\\
\dots \: + \: \dots &= b$$

Si $c > 0$ et $b > 0$, alors les deux nombres cherchés sont positifs.
Si $c > 0$ et $b < 0$, alors les deux nombres cherchés sont négatifs.
Si $c < 0$, alors les deux nombres cherchés sont de signes différents.
```

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $x^2+7x+12=$\
    Il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= 12\\
    \dots \: + \: \dots &= 7$$
    $x^2+7x+12=(x+3)(x+4)$
2.  $x^2-8x+15=$\
    Il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= 15\\
    \dots \: + \: \dots &= -8$$
    $x^2-8x+15=(x-3)(x-5)$
3.  $x^2+3x-18=$\
    Il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -18\\
    \dots \: + \: \dots &= 3$$
    $x^2+3x-18=(x+6)(x-3)$

```{admonition} Trinômes avec $a \neq 1$
:class: tip
$ax^2+bx+c$\
Si $a \neq 1$, la méthode est la suivante:
1. Trouvez les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= a \cdot c\\
    \dots \: + \: \dots &= b$$
2.  Décomposez le terme du x en 2 termes en utilisant les nombres trouvés en 1.
3.  Mettez en évidence en regroupant les termes deux par deux.
```

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $2x^2 + 13x - 7=$
    Il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -14\\
    \dots \: + \: \dots &= 13$$
    Comme $c < 0$, alors les deux nombres cherchés sont de signes différents.\
    Les deux nombres sont $-1$ et $14$.\
    Remplacez $13x$ par $-x + 14x$, ensuite mettez en évidence en regroupant les
    termes deux par deux.\
    $2x^2 + 13x - 7=2x^2-x+14x-7=(2x^2-x)+(14x-7)$
    $=x(2x-1)+7(2x-1)=(x+7)(2x-1)$
2.  $3x^2 - 2x - 8=$
    Il faut trouver les deux nombres tel que:
    $$ \dots \:\: \cdot \:\, \dots &= -24\\
    \dots \: + \: \dots &= -2$$
    Comme $c < 0$, alors les deux nombres cherchés sont de signes différents.\
    Les deux nombres sont $-6$ et $4$.\
    Remplacez $-2x$ par $-6x + 4x$, ensuite mettez en évidence en regroupant les
    termes deux par deux.\
    $3x^2 - 2x - 8=3x^2-6x+4x-8=(3x^2-6x)+(4x-8)$
    $=3x(x-2)+4(x-2)=(3x+4)(x-2)$


## Substitution

```{admonition} Substitution
:class: tip
1.  Remplacez $x^2$ (ou $x^3$) par $y$.
2.  Factorisez avec une autre méthode.
3.  Remplacez $y$ par $x^2$ (ou $x^3$).
```

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  Posons $x^2 = y$.\
    $x^4-5x^2-6=y^2-5y-6=(y+1)(y-6)=(x^2+1)(x^2-6)$
2.  Posons $x^3 = y$.\
    $x^6-7x^3+12=y^2-7y+12=(y-3)(y-4)=(x^3-3)(x^3-4)$

## Combinaison de méthodes

Pour factoriser complètement un polynôme, il faut parfois appliquer plusieurs
méthodes à la suite.

### Exemple {num1}`exemple`

{.lower-alpha-paren .hsep-1}
1.  $$
    5x^2 - 10x + 5 &= 5(x^2-2x+1) \qquad && \textrm{mise en évidence}\\
    &= 5(x-2)^2 && \textrm{identités algébriques}
    $$
2.  $$
    -x^2 + 5x - 6 &= -(x^2-5x+6) \qquad && \textrm{mise en évidence}\\
    &= -(x-2)(x-3) && \textrm{décomposition du trinôme}
    $$
3.  $$
    3x^3+6x^2+3x-(x+1)^2 &=(3x^3+6x^2+3x)-(x+1)^2 \qquad && \textrm{regroupement}\\
    &= 3x(x^2+2x+1)-(x+1)^2 && \textrm{mise en évidence}\\
    &= 3x(x+1)^2-(x+1)^2 && \textrm{identités algébriques}\\
    &= (3x-1)(x+1)^2 && \textrm{mise en évidence}
    $$



