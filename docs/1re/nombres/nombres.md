% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Nombres

```{metadata}
subject: "Mathématiques 1re année"
```

## Théorie

```{admonition} Définition
:class: note
L'**ensemble des nombres naturels** est l'ensemble des entiers positifs, noté
$\mathbb{N}$ et défini en extension ainsi:
$$ \mathbb{N} = \{0; 1; 2; 3; 4; \dots\}$$
$\mathbb{N^*} = \mathbb{N} \setminus \{0\} = \{1; 2; 3; 4; \dots\}$\par
L'**ensemble des nombres entiers relatifs** est l'ensemble des entiers positifs et négatifs, noté $\mathbb{Z}$ et défini en extension ainsi:
$$ \mathbb{Z} = \{\dots; -4; -3; -2; -1; 0; 1; 2; 3; 4; \dots\}$$\par
L'**ensemble des nombres rationnels** est l'ensemble des nombres qui peuvent être écrit sous forme de fraction, noté $\mathbb{Q}$ et défini en compréhension ainsi:
$$ \mathbb{Q} = \{\frac{a}{b} \, \mid \, a \text{ et } b \in \mathbb{Z} \text{ et } b \ne 0\}$$\par
L'**ensemble des nombres réels** est l'ensemble des nombres à virgule (périodique, fini ou infini), noté $\mathbb{R}$.\par
L'**ensemble des nombres irrationnels** est l'ensemble des nombres réels qui ne sont pas rationnels, c'est-à-dire l'ensemble $\mathbb{R} \setminus \mathbb{Q}$.
```

$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$

L'ensemble grisé représente l'ensemble des nombres irrationnels dans lequel se
trouvent les nombres tels que $\pi$, $\sqrt{2}$, $1.010010001\ldots$.

```{figure} images/ens-nombres-1.png
:width: 40%
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $\dfrac{4}{3} = 1. \overline{3} = 1.333333\ldots \in \mathbb{Q}$
2.  $\pi = 3.14159\ldots \text{ et } \sqrt{2} = 1.4142\ldots \in \mathbb{R}$ sont
    des nombres irrationnels.
3.  $-\sqrt{3} \in \mathbb{R}$, mais $\sqrt{-3} \notin \mathbb{R}$, car la
    racine carrée d'un nombre négatif n'existe pas dans $\mathbb{R}$.
4.  $6 \in \mathbb{N}$ et $\mathbb{Z} \quad$
    $6 = \dfrac{6}{1} \in \mathbb{Q} \quad$ et  $\quad 6 = 6.0 \in \mathbb{R}$
````

```{admonition} Théorème
:class: note
Toute fraction est un nombre décimal fini ou périodique. Réciproquement, tout
nombre décimal fini ou périodique est une fraction.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren .columns-4}
1. $0.75=\dfrac{3}{4}$
2. $\dfrac{7}{3}=2.\overline{3}$
3. $2.\overline{714285}=\dfrac{19}{7}$
4. $\dfrac{9}{22}=0.40\overline{90}$
````

````{container} frame noprint
### Exemple {num2}`exemple`

Pour transformer une fraction en nombre décimal, il faut effectuer la division
et s'arrêter:
1. quand le reste vaut $0$.
2. quand le reste est identique à un reste précédent, cela signifie que le
    nombre est périodique.

$\begin{array}{r|l}
264\phantom{0000000000} & \underline{\phantom{0}7\phantom{00000000}} \\
\underline{-21}\phantom{00000000000} & 37.\overline{714285} \\
   54\phantom{0000000000} & \\
   \underline{-49}\phantom{0000000000} & \\
   \color{red}50 \phantom{000000000}& \\
   \underline{-49}\phantom{000000000} & \\
   10\phantom{00000000}& \\
   \underline{-7}\phantom{00000000} & \\
   30\phantom{0000000}& \\
   \underline{-28}\phantom{0000000} & \\
   20\phantom{000000}& \\
   \underline{-14}\phantom{000000} & \\
   60\phantom{00000}& \\
   \underline{-56}\phantom{00000} & \\
   40\phantom{0000}& \\
   \underline{-35}\phantom{0000} & \\
   \color{red}50 \phantom{000}& \\
   \ldots\phantom{000} & \\
\end{array}$

$\dfrac{264}{7} = 37.\overline{714285}$
````

````{container} frame noprint
### Exemple {num2}`exemple`

Pour transformer un nombre décimal en fraction, il y a deux situations:

1.  Le nombre décimal est fini:<br>
    Le numérateur et le dénominateur doivent être des nombres entiers.<br>
    $5.0862 = \dfrac{5.0862}{1} \overset{\color{red}\cdot10\,000}{=} \dfrac{50\,862}{10\,000} \overset{\color{red}simplifier}{=} \dfrac{25\,432}{5\,000}$

2.  Le nombre est périodique:<br>
    Idée: soutraire deux multiples de ce nombre pour faire disparaître la
    période.

    {.lower-alpha-paren}
    1.  $x = 0.\overline{2} \qquad \qquad$ Multipliez par $10$, car la période est de 1
        chiffre.
        $$ 10x &= 2.\overline{2}\\
            -x &= 0.\overline{2}\\
            9x &= 2\\
            x &= \dfrac{2}{9}$$
        $0.\overline{2} =  \dfrac{2}{9}$

    2.  $x = 5.\overline{412} \qquad \qquad$ Multipliez par $1000$, car la période est de 3
        chiffres.
        $$ 1000x &= 5412.\overline{412}\\
            -x &= \phantom{000}5.\overline{412}\\
            999x &= 5407\\
            x &= \dfrac{5407}{999}$$
        $5.\overline{412} =  \dfrac{5407}{999}$
    3.  Si la période n'est pas directement après la virgule, il faut se ramenez
        au cas a).<br>
        $x = 1.79\overline{54} \qquad \qquad$ Multipliez la première valeur par
        $10\,000$, car il y a 4 chiffres après la virgule et la seconde par
        $100$ afin de ramener la période directement après la virgule.
        $$ 10000x &= 17954.\overline{54}\\
            -100x &= \phantom{00}179.\overline{54}\\
            9\,900x &= 17\,775\\
            x &= \dfrac{17\,775}{9\,900}$$
        $1.79\overline{54}  =  \dfrac{17\,775}{9\,900} \overset{\color{red}:25}{=} \dfrac{711}{396} \overset{\color{red}:9}{=} \dfrac{79}{44}$
````

```{admonition} Rappel - Critères de divisibilité
:class: tip, dropdown
Un nombre entier naturel est divisible par:

- 2, s'il se termine par $0$, $2$, $4$, $6$ ou $8$.
- 3, si la somme de ses chiffes est divisible par 3.
- 5, s'il se termine par $0$ ou $5$.
- 9, si la somme de ses chiffres est divisible par 9.
- 10, s'il se termine par $0$.
- 25, s'il se termine par $00$, $25$, $50$ ou $75$.
```

```{admonition} Propriétés
:class: note
- **Commutativité**
$$a+b=b+a \text{  et  } a \cdot b = b\cdot a$$
- **Associativité**
$$(a+b)+c=a+(b+c) \text{  et  } (a\cdot b) \cdot c=a \cdot (b \cdot c) $$
- **Distributivité}**
$$a\cdot (b+c) = a \cdot b + a \cdot c $$
- **Éléments neutres**  $$a+0=a \qquad \text{  et  } \qquad a\cdot 1=a $$
- **Éléments symétriques** $$a+(-a)=0 \qquad \text{  et  } \qquad a\cdot \frac{1}{a}=1 $$
Le nombre $-a$ est appelé l'**opposé** de $a$ et $\dfrac{1}{a}$ est appelé l'**inverse** de $a$.
- **Hiérarchie des opérations**
    1. Parenthèses
    2. Puissances et racines
    3. Multiplications et divisions
    4. Additions et soustractions
```

```{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $5 + 3 = 5 + 3 = 8$
2. $5 \cdot 3 = 5 \cdot 3 = 15$
3. $(3 + 5) + 4 = 3 + (5 + 4) = 12$
4. $(3 \cdot 5) \cdot 4 = 3 \cdot (5 \cdot 4) = 60$
5. $3 \cdot (5 + 4) = 3 \cdot 5 + 3 \cdot 4 = 27$
6. $3 \cdot \dfrac{1}{3} = 1$
```

```{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $1 + 2\cdot {\color{red}(5+3)}^2 = 1 + 2\cdot {\color{red}8}^2=1 + {\color{red}2\cdot64}= 1 + 128=129$
2.  Une double fraction n'est rien d'autre qu'une division de fraction.

    $\dfrac{\dfrac{7}{2}}{\dfrac{6}{5}}=\dfrac{7}{2} : \dfrac{6}{5} = \dfrac{7}{2} \cdot \dfrac{5}{6} =\dfrac{7 \cdot 5}{2 \cdot 6} =\dfrac{35}{12}$
3.  La puissance d'une fraction n'est rien d'autre que la fraction de
    puissances.<br>
    $\left(\dfrac{3}{2}\right)^2 =\dfrac{3^2}{2^2}=\dfrac{9}{4}$

    $\left(\dfrac{4}{3}\right)^3 =\dfrac{4^3}{3^3}=\dfrac{64}{27}$
4.  $\dfrac{1}{1 + \dfrac{3}{4}} = \dfrac{1}{\dfrac{4}{4} + \dfrac{3}{4}} = \dfrac{1}{\dfrac{7}{4}} = 1 : \dfrac{7}{4} = 1 \cdot \dfrac{4}{7} = \dfrac{4}{7}$
```


## Exercices

### Exercice {num2}`exercice`

Complétez le tableau par **vrai** ou **faux**.

<style>
@media print {
  /* Reset table styles. */
  table.table.table-reset-print {
    border: initial;
  }
  table.table.table-reset-print:not(.¶) > :not(caption) > :is(tr, tr:hover) {
    border: none;
    background-color: unset;
  }
  table.table.table-reset-print > :not(caption) > * > * {
    border: none;
    background-color: unset;
    box-shadow: initial;
  }

  table.table.table-reset-print > :not(caption) > * > * {
    border: 1px solid black;
  }
}
</style>

{.table-reset-print}
| | $x=-\frac{2}{3}$ | $x=\sqrt{9}$ | $x=\sqrt{3}$ | $x=0.45324$ | $x=-7$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x \in \mathbb{N}$ | |  |  |  |  |
| $x \in \mathbb{Z}$ | |  |  |  |  |
| $x \in \mathbb{Q}$ | |  |  |  |  |
| $x \in \mathbb{R}$ | |  |  |  |  |

```{block} solution
{.table-reset-print}
| | $x=-\frac{2}{3}$ | $x=\sqrt{9}$ | $x=\sqrt{3}$ | $x=0.45324$ | $x=-7$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x \in \mathbb{N}$ | Faux | Vrai | Faux | Faux | Faux |
| $x \in \mathbb{Z}$ | Faux | Vrai | Faux | Faux | Vrai |
| $x \in \mathbb{Q}$ | Vrai | Vrai | Faux | Vrai | Vrai |
| $x \in \mathbb{R}$ | Vrai | Vrai | Vrai | Vrai | Vrai |
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
