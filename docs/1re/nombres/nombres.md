% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Nombres

```{metadata}
subject: "Mathématiques 1re année"
```

## Théorie

````{admonition} Définition
:class: note
L'**ensemble des nombres naturels** est l'ensemble des entiers positifs, noté
$\mathbb{N}$ et défini en extension ainsi:
```{math}
:class: align-center
 \mathbb{N} = \{0; 1; 2; 3; 4; \dots\}
```
$\mathbb{N^*} = \mathbb{N} \setminus \{0\} = \{1; 2; 3; 4; \dots\}$

L'**ensemble des nombres entiers relatifs** est l'ensemble des entiers positifs et négatifs, noté $\mathbb{Z}$ et défini en extension ainsi:
```{math}
:class: align-center
\mathbb{Z} = \{\dots; -4; -3; -2; -1; 0; 1; 2; 3; 4; \dots\}
```

L'**ensemble des nombres rationnels** est l'ensemble des nombres qui peuvent être écrit sous forme de fraction, noté $\mathbb{Q}$ et défini en compréhension ainsi:
```{math}
:class: align-center
\mathbb{Q} = \{\frac{a}{b} \, \mid \, a \text{ et } b \in \mathbb{Z} \text{ et } b \ne 0\}
```
L'**ensemble des nombres réels** est l'ensemble des nombres à virgule (périodique, fini ou infini), noté $\mathbb{R}$.

L'**ensemble des nombres irrationnels** est l'ensemble des nombres réels qui ne sont pas rationnels, c'est-à-dire l'ensemble $\mathbb{R} \setminus \mathbb{Q}$.
````

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

### Exercice {num2}`exercice`

Corrigez les erreurs dans ce diagramme. (Il y en a 8)

```{figure} images/diagramme-nombres.png
:width: 50%
```

````{block} solution
```{figure} images/diagramme-nombres-sol.png
:width: 50%
```
````

### Exercice {num2}`exercice`

Répondez aux questions suivantes et justifiez.

{.lower-alpha-paren}
1.  Tous les nombres entiers sont rationnels. Vrai ou faux?
2.  À quels ensembles de nombres appartient le nombre $1.345$?
3.  Quels ensembles de nombres contiennent le nombre $-2$?
4.  $-11$ est un nombre entier naturel. Vrai ou faux?
5.  $\pi$ est un nombre rationnel. Vrai ou faux?
6.  $1.\overline{45}$ est un nombre réel? Vrai ou faux?

```{block} solution
{.lower-alpha-paren .columns-3}
1. Vrai
2. $\mathbb{Q}$ et $\mathbb{R}$
3. $\mathbb{Z}$, $\mathbb{Q}$ et $\mathbb{R}$
4. Faux
5. Faux
6. Vrai
```

### Exercice {num2}`exercice`

Déterminez si le nombre $\in$ ou $\notin$ à l'ensemble donné.

{.lower-alpha-paren .columns-3}
1. $-2$ {leader}`.|3em` $\mathbb{N}$
2. $101$ {leader}`.|3em` $ \mathbb{N}$
3. $-7$ {leader}`.|3em` $ \mathbb{Z}$
4. $-\frac{3}{5}$ {leader}`.|3em` $ \mathbb{Z}$
5. $\sqrt{5}$ {leader}`.|3em` $ \mathbb{R}$
6. $\frac{3}{4}$ {leader}`.|3em` $ \mathbb{R}$
7. $1.345$ {leader}`.|3em` $ \mathbb{Q}$
8. $\sqrt{81}$ {leader}`.|3em` $ \mathbb{Z}$
9. $4.\overline{234}$ {leader}`.|3em` $\mathbb{Q}$
10. $\sqrt{3}$ {leader}`.|3em` $\mathbb{Q}$
11. $\pi$ {leader}`.|3em` $ \mathbb{R}$
12. $10009$ {leader}`.|3em` $ \mathbb{R}$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $-2 \notin \mathbb{N}$
2. $101 \in \mathbb{N}$
3. $-7 \in\mathbb{Z}$
4. $-\frac{3}{5}\notin \mathbb{Z}$
5. $\sqrt{5} \in \mathbb{R}$
6. $\frac{3}{4} \in \mathbb{R}$
7. $1.345 \in \mathbb{Q}$
8. $\sqrt{81} \in \mathbb{Z}$
9. $4.\overline{234} \in \mathbb{Q}$
10. $\sqrt{3} \notin\mathbb{Q}$
11. $\pi \in \mathbb{R}$
12. $10009 \in\mathbb{R}$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivants en extension.

{.lower-alpha-paren}
1. $\{x \in \mathbb{Z} \, \mid \, -5 \leq x \leq 5\}$
2. $\{x \in \mathbb{N} \, \mid \, x \text{ est un multiple de } 6\}$
3. $\{x \in \mathbb{N} \, \mid \, x \text{ est un diviseur de } 24\}$
4. $\{x \in \mathbb{Z} \, \mid \, x^2 \leq 18\}$

```{block} solution
{.lower-alpha-paren}
1. $\{-5;-4;-3;-2,;-1;0;1;2;3;4;5\}$
2. $\{6;12;18;24;30; \dots \}$
3. $\{1;2;3;4;6;8;12;24\}$
4. $\{-4;-3;-2;-1;0;1;2;3;4\}$
```

### Exercice {num2}`exercice`

Représentez les ensembles suivants en compréhension.

{.lower-alpha-paren}
1. L'ensemble des nombres réels qui ne sont pas des nombres entiers.
2. L'ensemble des nombres entiers relatifs sans $-3$.
3. L'ensemble des nombres réels qui sont strictement supérieur à $5$.
4. L'ensemble des nombres réels dont la racine carrée est inférieure ou égale à $20$.
5. L'ensemble des nombres réels entre $-25$ et $8$.

```{block} solution
{.lower-alpha-paren .columns-2}
1. $\mathbb{R} \setminus \mathbb{Z}$
2. $\mathbb{Z} \setminus \{-3\}$
3. $\{ x \in  \mathbb{R} \,\mid\, x > 5\}$
4. $\{ x \in  \mathbb{R} \,\mid\, \sqrt{x} \leq 20\}$
5. $\{ x \in  \mathbb{R} \,\mid\, -25 \leq x \leq 8\}$
```

### Exercice {num2}`exercice`

Écrivez les fractions suivantes comme nombres décimaux (sans calculatrice).

{.lower-alpha-paren .columns-3}
1. $\dfrac{13}{5}=$
2. $\dfrac{5}{6}=$
3. $\dfrac{7}{4}=$
4. $\dfrac{8}{3}=$
5. $\dfrac{7}{11}=$
6. $\dfrac{8}{13}=$
7. $\dfrac{9}{7}=$
8. $\dfrac{133}{20}=$
9. $\dfrac{785}{60}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $2.6$
2. $0.8\overline{3}$
3. $1.75$
4. $2.\overline{6}$
5. $0.\overline{63}$
6. $0.\overline{615384}$
7. $1.\overline{285714}$
8. $6.65$
9. $13.08\overline{3}$
```

### Exercice {num2}`exercice`

Écrivez les nombres décimaux comme fractions simplifiées. (sans calculatrice)

{.lower-alpha-paren .columns-3}
1. $0.62=$
2. $2.345=$
3. $0.\overline{7}=$
4. $1.0\overline{83}=$
5. $5.\overline{135}=$
6. $2.4\overline{2}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\dfrac{31}{50}$
2. $\dfrac{469}{200}$
3. $\dfrac{7}{9}$
4. $\dfrac{1073}{990}$
5. $\dfrac{190}{37}$
6. $\dfrac{109}{45}$
```

### Exercice {num2}`exercice`

Calculez (sans calculatrice).

{.lower-alpha-paren .columns-2}
1. $12+4 \cdot 3 +2=$
2. $(12+4) \cdot 3 +2=$
3. $3 \cdot 5 + (2 \cdot 4 -2) \cdot 6=$
4. $(7-2)^2 :5 \cdot 2^3=$
5. $3 \cdot (2-7) \cdot (-1) - (6-9)^3-2^3+1=$
6. $\dfrac{5-(2-8)\cdot 2}{2 \cdot (6+3) -1}=$
7. $9+3 \cdot (2 \cdot (9-5)-(5-7))=$
8. $\sqrt{36+64}=$
9. $\sqrt{36}+\sqrt{64}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $26$
2. $50$
3. $51$
4. $40$
5. $35$
6. $1$
7. $39$
8. $10$
9. $14$
```

### Exercice {num2}`exercice`

Calculez et répondez sous forme simplifiée (sans calculatrice).

{.lower-alpha-paren .columns-2}
1. $\dfrac{1}{8}+\dfrac{2}{3}+\dfrac{1}{2}=$
2. $\dfrac{1}{2}+\dfrac{2}{3}+\dfrac{3}{4}=$
3. $\dfrac{1}{10}+\dfrac{1}{100}+\dfrac{1}{1000}=$
4. $\dfrac{3}{2} \cdot \left( \dfrac{2}{5}+\dfrac{5}{2} \right)=$
5. $1+\dfrac{1}{3} \cdot \dfrac{4}{5}-3=$
6. $\left( \dfrac{1}{3}+\dfrac{1}{2} \right) : \left( \dfrac{1}{4} + \dfrac{1}{5} \right)=$
7. $\left( \dfrac{1}{5} +\dfrac{5}{3}\right)^2 =$
8. $\dfrac{1}{1+\dfrac{1}{2+\frac{1}{3}}} =$
9. $\dfrac{1}{4-\dfrac{1}{3+\frac{2}{5}}} =$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\dfrac{31}{24}$
2. $\dfrac{23}{12}$
3. $\dfrac{111}{1000}$
4. $\dfrac{87}{20}$
5. $-\dfrac{26}{15}$
6. $\dfrac{50}{27}$
7. $\dfrac{784}{225}$
8. $\dfrac{7}{10}$
9. $\dfrac{17}{63}$
```

### Exercice {num2}`exercice`

Calculez et répondez sous forme simplifiée (sans calculatrice).

{.lower-alpha-paren .columns-2}
1. $\dfrac{18}{5} : \dfrac{14}{3} - \dfrac{8}{15}=$
2. $\dfrac{51}{4} : \dfrac{21}{2} - \dfrac{2}{15} \cdot \dfrac{20}{7}=$
3. $\left( \dfrac{4}{7} - \dfrac{3}{14} \right) \cdot \left( \dfrac{1}{3} + \dfrac{3}{5} \right)=$
4. $\dfrac{4}{5} : 2 - \dfrac{2}{5} : \dfrac{10}{3}=$
5. $\dfrac{11}{5} \cdot \left( \dfrac{11}{6} + \dfrac{2}{3} \right)=$
6. $\dfrac{5}{8} : \dfrac{1}{4} -\dfrac{5}{4}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\dfrac{5}{21}$
2. $\dfrac{5}{6}$
3. $\dfrac{1}{3}$
4. $\dfrac{7}{25}$
5. $\dfrac{11}{2}$
6. $\dfrac{5}{4}$
```

### Exercice {num2}`exercice`

Calculez et répondez sous forme simplifiée (sans calculatrice).

{.lower-alpha-paren .columns-4}
1. $\dfrac{\dfrac{5}{2}+\dfrac{13}{4}}{\dfrac{1}{2}}=$
2. $\dfrac{\dfrac{7}{5}-\dfrac{5}{7}}{\dfrac{3}{2}-\dfrac{2}{3}}=$
3. $\dfrac{\dfrac{5}{4}+\dfrac{1}{6}}{\dfrac{5}{12}+1}=$
4. $\dfrac{\dfrac{42}{5}-\dfrac{2}{3}}{\dfrac{7}{4}+\dfrac{11}{2}}=$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $\dfrac{23}{2}$
2. $\dfrac{144}{175}$
3. $1$
4. $\dfrac{16}{15}$
```

### Exercice {num2}`exercice`

Calculez et répondez sous forme simplifiée (sans calculatrice).

{.lower-alpha-paren}
1. $\left( 12+\dfrac{7}{4}-1 \right) \left( \dfrac{1}{2}-\dfrac{1}{3} \right)\left( \dfrac{2}{5}-1 \right)- (-3) \left( \dfrac{5}{3}-\dfrac{9}{4} \right) \left( 2+\dfrac{6}{7} \right)=$
2. $\dfrac{3}{2} - \dfrac{2}{3} \left( -\dfrac{3}{4}- \left( \dfrac{1}{2}-  \left( \dfrac{2}{3}-1 \right)  \right)  \right) =$
3. $\left( 4-\dfrac{2}{5}+\dfrac{4}{3}-\dfrac{2}{3} \right) : \left( -3-3 \cdot \dfrac{1}{2}-\dfrac{4}{5} +2 \right)=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $-\dfrac{251}{40}$
2. $\dfrac{23}{9}$
3. $-\dfrac{128}{99}$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
