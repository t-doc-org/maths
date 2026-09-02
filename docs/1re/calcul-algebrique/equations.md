% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Équations

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/equations.xopp>`
```

## Théorie

````{admonition} Définition
:class: note
Une **équation du premier degré à une inconnue** $x$ est une équation du type

```{math}
:class: align-center
ax + b = 0
```
avec $a \text{, }b \in \mathbb{R} \text{ et } a  \ne 0

La ou les valeurs qui vérifient l'égalité sont appelées solutions de l'équation.<br>
Résoudre une équation, c'est trouver l'**ensemble des solutions**, noté $S$.
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $2x-5=6$ est une équation du premier degré et possède une seule solution:
    $x=\frac{11}{2}$. On écrit $S=\{\frac{11}{2}\}$
2. $x^2-5x+6=0$ est une équation du deuxième degré et possède deux solutions:
    $x_1=2$ et $x_2=3$. On écrit $S=\{2;3\}$
3. $\sqrt{3x+4}=5$ est une équation avec racine et possède une seule solution:
    $x=7$. On écrit $S=\{7\}$
```

```{admonition} Propriétés
:class: note
Pour résoudre une équation, on utilise les **règles d'équivalence**, celles-ci
transforment l'équation sans modifier son ensemble de solutions. Les trois
règles d'équivalence sont:

{.lower-alpha-paren}
1.  Effectuer du calcul littéral dans ses membres.
2.  Additionner (ou soustraire) un même nombre, un même monôme ou un même
    polynôme aux deux membres de l'équation.
3.  Multiplier (ou diviser) les deux membres de l'équation par un même nombre
    **non nul**.
```

```{container} frame noprint
# Exemple {num2}`exemple`

$$
3x-7 &= -2x+8 \qquad &|& +2x \text{ (addition du même monôme)}& \\
5x-7 &= 8 &|& +7  \text{ (addition du même nombre)}&\\
5x &= 15 &|& :5 \text{ (division par le même nombre)}&\\
x &= 3 && &\\
S &= \{3\}  && \text{ (ensemble des solutions)}&
$$
```

```{container} frame
# Remarques

Les équations du premier degré peuvent toujours être résolues grâce aux règles
d'équivalence et possèdent en général qu'une seule solution. Il existe néanmoins
deux cas particuliers:

-   Si on obtient l'équation $0=0$, alors l'équation est **indéterminée**. Dans
    ce cas, tout nombre est solution de l'équation et on écrit $S=\mathbb{R}$.
    $$
    2(x+15) &= 8x-6(x-5) \qquad &|& \text{CL (Calcul littéral)} &\\
    2x+30 &= 8x-6x+30 &|& \text{CL (Calcul littéral)} &\\
    2x+30 &= 2x+30 &|& -2x  &\\
    30 &= 30 &&  \text{Cette équation est toujours vraie!} \implies S = \mathbb{R}
    $$

-   Si on obtient l'équation $0=a \text{, où }a \neq 0$, alors l'équation est
    **impossible**, on écrit $S=\varnothing$.
    $$
    4(1-9x) &= -3(12x+1) \qquad &|& \text{CL (Calcul littéral)} &\\
    4-36x &= -36x-3  &|& +36x  &\\
    4 &= -3 &&  \text{Cette équation est toujours fausse!} \implies S = \varnothing
    $$
```

```{container} frame noprint
# Exemple {num2}`exemple`

Résolvez l'équation suivante:

$$
\frac{x}{4}+\frac{1}{2} &= \frac{x-1}{2}-\frac{3x}{2} \qquad \qquad &|& \text{même dénominateur}\\
\frac{x}{4}+\frac{2}{4} &= \frac{2(x-1)}{4}-\frac{6x}{4} &|& \cdot 4\\
x + 2 &= 2(x-1) - 6x &|& \text{CL}\\
x + 2 &= 2x -2 - 6x &|& \text{CL}\\
x + 2 &= -4x - 2 &|& +4x\\
5x + 2 &= - 2 &|& -2\\
5x &= - 4 &|& : 5\\
x &= -\dfrac{4}{5} && \\
$$
$S = \left\{-\dfrac{4}{5}\right\}$
```

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-equ-ex1>`,
{numref}`exercice %s<exercice:1-equ-ex2>`,
{numref}`exercice %s<exercice:1-equ-ex3>`,
{numref}`exercice %s<exercice:1-equ-ex4>` et
{numref}`exercice %s<exercice:1-equ-ex5>`
```


## Exercices

### Exercice {num2}`exercice:1-equ-ex1`

Déterminez l'ensemble des solutions des équations suivantes.

{.lower-alpha-paren .columns-2}
1. $8x-34=5x-13$
2. $-x+2(x+9)=5x-4(x-\frac{9}{2})$
3. $12x-(4(42-x)-9(5-x))=7x$
4. $(9-2x)^2=(4x-1)(5+x)-24$
5. $x-\frac{1}{2}x-\frac{1}{3}x-\frac{1}{4}x=\frac{5}{6}-\frac{1}{12}x$
6. $\frac{7x}{3}+\frac{3x-5}{6}=\frac{23x-15}{6}-\frac{9x}{10}+\frac{3}{2}$
7. $5-(2x+3)=-2(x+1)$
8. $x+5=2x+3-(x-2)$


```{block} solution
{.lower-alpha-paren .columns-4}
1. $S=\{7\}$
2. $S=\mathbb{R}$
3. $S=\varnothing$
4. $S=\{2\}$
5. $S=\varnothing$
6. $S=\{\frac{5}{3}\}$
7. $S=\varnothing$
8. $S=\mathbb{R}$
```

### Exercice {num2}`exercice:1-equ-ex2`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1.  $13-(y+3)=7$
2.  $3x-(8-x)=0$
3.  $5+(d-3)=2-(d+2)$
4.  $0=14+2x-(3x+6)-8x$
5.  $7u+(4-u)=-2-(u+8)$
6.  $(5m+3)+(2m-4)=9-(2-3m)$
7.  $110-(9y-15)+2y=15-18y$
8.  $x-\left((3-6x)-(12x-9)\right)=x+15$
9.  $3x+100=\dfrac{x}{3}+\dfrac{x}{2}-4$
10.  $\dfrac{5x-11}{4}-\dfrac{x-1}{10}=\dfrac{11x-1}{12}$
11.  $\dfrac{x+1}{2}-\dfrac{6x+7}{8}=\dfrac{4-3x}{5}-\dfrac{1}{8}$
12.  $\dfrac{x}{2}+\dfrac{x}{3}=10$
13.  $\dfrac{2x}{7}+\dfrac{x}{11}=4+\dfrac{1}{7}$
14.  $\dfrac{1}{2}\left(3x-1\right)-\dfrac{1}{4}\left(4-x\right)=0$
15.  $\dfrac{12-3x}{4}-\dfrac{3x-11}{3}=1$
16.  $\dfrac{x}{4}+\dfrac{943}{1000}=\dfrac{19x}{10}-\dfrac{1703}{250}$
17.  $\dfrac{5}{6}(3x-7)=\dfrac{3}{4}x+4+\dfrac{2}{3}$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $S=\left\{ 3\right\} $
2. $S=\left\{ 2\right\} $
3. $S=\left\{ -1\right\} $
4. $S=\left\{ \frac{8}{9}\right\} $
5. $S=\left\{ -2\right\} $
6. $S=\left\{ 2\right\} $
7. $S=\left\{ -10\right\} $
8. $S=\left\{ \frac{3}{2}\right\} $
9. $S=\{-48\}$
10. $S=\{11\}$
11. $S=\{3\}$
12. $S=\{12\}$
13. $S=\{11\}$
14. $S=\{\frac{6}{7}\}$
15. $S=\{\frac{68}{21}\}$
16. $S=\{4.7\} $
17. $S=\{6\}$
```

### Exercice {num2}`exercice:1-equ-ex3`

Résolvez les problèmes suivants à l'aide d'équations du premier degré.

{.lower-alpha-paren}
1.  Si on multiplie un nombre par dix et qu'on lui soustrait dix, on obtient le
    même résultat que si on multiplie ce même nombre par six et qu'on lui
    additionne deux. Que vaut ce nombre?
2.  Un père a 38 ans et son fils a 11 ans. Après combien d'années le père aura
    exactement le double de l'âge de son fils?
3.  Un cycliste fait un parcours sur deux jours:
        -   le 1<sup>er</sup> jour il fait $\frac{1}{5}$ du parcours et encore
            $70$ km de plus.
        -   le 2<sup>e</sup> jour il fait $\frac{1}{4}$ du parcours et encore
            $62$ km de plus.
    Quelle est la longueur totale du parcours?
4.  Si on augmente le côté d'un carré de $5$ cm, alors son aire augmente de
    $225$ cm$^2$. Quelle est la longueur du côté du carré initial?
5.  Un parcours à vélo de $4000\,m$ passe par un pré, par une colline et par un
    pont. La colline est 28 fois plus longue que le pont et le pré 11 fois plus
    long que le pont. Quelle est la longueur du pont?
6.  La somme de trois nombres est 30. Le deuxième nombre est obtenu en ajoutant
    3 au  premier et le troisième en ajoutant 3 au deuxième. Quels sont ces
    trois nombres?
7.  La différence entre le quadruple et le quart d'un nombre est 30. Quel est ce
    nombre?
8.  Jean dépense un cinquième, un quart et un tiers de ce montant. À la fin, il
    lui reste CHF 520.-. Quel était le montant initial?
9.  On demande son âge à une personne. Elle répond: "Si je double mon âge, que
    j'y ajoute la moitié et un quart de mon âge et que j'ajoute encore une
    année, alors j'ai 100 ans." Quel est son âge réel?
10. Le périmètre d'un triangle vaut $43$ cm. Le côté $b$ vaut $2$ cm de plus que
    le côté $a$ et le côté $c$ vaut $6$ cm de plus que le côté $b$. Déterminez
    la longueur de chaque côté.
11. Dans un triangle, l'angle $\beta$ vaut $15^\circ$ de plus que l'angle
    $\alpha$ et l'angle $\gamma$ vaut $15^\circ$ de plus que l'angle $\beta$.
    Déterminez les angles de ce triangle.
12. Un sapin pousse d'environ 12 cm par année et un chêne d'environ 45 cm. On
    plante un sapin de 2.5 m et un chêne de 85 cm. Après combien d'années les
    deux arbres ont-ils la même taille?
13. Un homme lègue à sa femme, sa fille et ses deux fils 3600 pièces d'or. Dans
    son testament, il est écrit que sa fille doit recevoir deux fois plus que sa
    femme et sa femme deux fois plus que chacun des fils. Déterminez le montant
    que chaque membre de la famille reçoit.

```{block} solution
{.lower-alpha-paren .columns-2}
1.  Le nombre est 3.
2.  Dans 16 ans.
3.  $240\,km$
4.  $20\,cm$
5.  $100\,m$
6.  7, 10 et 13.
7.  Le nombre est 8.
8.  Il avait CHF 2400.-
9.  La personne a 36 ans.
10.  Les côtés valent $11\,cm$, $13\,cm$ et $19\,cm$.
11.  Les angles mesurent $45^\circ$, $60^\circ$ et $75^\circ$.
12.  Après 5 ans.
13.  La femme reçoit 900, la fille 1800 et les fils chacun 450 pièces d'or.
```

### Exercice {num2}`exercice:1-equ-ex4`

Un cycliste s'entraîne progressivement. Il fait une petite sortie le lundi,
puis, du mardi au vendredi, il double chaque jour la distance parcourue la
veille. Le samedi, il réduit de moitié la distance parcourue le vendredi et se
repose le dimanche. En une semaine, le cycliste fait au total 195 km. Quelle
distance a-t-il parcourue le mercredi?

```{block} solution
$20\,km$
```

### Exercice {num2}`exercice:1-equ-ex5`

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1. $z+(z-5)=3$
2. $4x-(2-x)=x-8$
3. $5t+(7-t)=-1$
4. $8t-(9+4t)-5=7t-6$
5. $-9z=(7z+15)-(10z-8+5z)$
6. $(5x+3)-(2x-2)=23$
7. $(x+1)+(x-2)-(x+3)=0$
8. $-(10-8u)-(6-12u)=2-4u$
9. $-\left(-(12x-9)+8x-60\right)=-(9+x)$
10. $(7x-6)+(6x-4)-(2-3x)=-4$
11. $3x-\dfrac{1}{2}(4-x)=x-\dfrac{1}{3}$
12. $\dfrac{2x}{5}-\dfrac{1}{3}\left(\dfrac{5x}{4}-4\right)=x+\dfrac{27}{5}$
13. $\dfrac{x-2}{3}-\dfrac{12-x}{2}=\dfrac{5x-36}{4}-1$
14. $\dfrac{5x-1}{7}-\dfrac{9x-7}{5}+\dfrac{9x-5}{11}=0$
15. $x+\dfrac{x}{2}+\dfrac{x}{3}=11$
16. $\dfrac{x}{2}-2-\dfrac{x}{4}+\dfrac{x}{5}=1$
17. $\dfrac{3x-1}{2}+\dfrac{1-4x}{8}=x-\dfrac{3}{8}$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $S=\left\{ 4\right\} $
2. $S=\left\{ -\frac{3}{2}\right\} $
3. $S=\left\{ -2\right\} $
4. $S=\left\{ -\frac{8}{3}\right\} $
5. $S=\left\{ -23\right\} $
6. $S=\left\{ 6\right\} $
7. $S=\left\{ 4\right\} $
8. $S=\left\{ \frac{3}{4}\right\} $
9. $S=\left\{ -12\right\} $
10. $S=\left\{ \frac{1}{2}\right\} $
11. $S=\left\{ \frac{2}{3}\right\} $
12. $S=\{-4\}$
13. $S=\{8\}$
14. $S=\{3\}$
15. $S=\{6\}$
16. $S=\left\{ \frac{20}{3}\right\} $
17. $S=\mathbb{R}$
```

### Challenge

Résolvez les équations suivantes.

{.lower-alpha-paren .columns-2}
1. $b+\dfrac{3b}{2}-2=\dfrac{3b}{4}-\dfrac{1}{4}$
2. $\dfrac{3t}{8}-18-\dfrac{5t}{6}-\dfrac{4t}{5}+\dfrac{3t}{7}+\dfrac{2}{3}=\dfrac{13t}{14}$
3. $\dfrac{x}{3}-\dfrac{1}{3}-\dfrac{x}{4}+\dfrac{1}{4}=\dfrac{x}{5}-\dfrac{1}{5}+\dfrac{1}{6}-\dfrac{x}{6}$
4. $18x+\dfrac{x}{4}+\dfrac{5x}{6}-36-8x=360+\dfrac{x}{12}$
5. $\dfrac{2}{3}x-\dfrac{7}{4}x-5=\dfrac{5}{6}x+\dfrac{x}{2}-\dfrac{39}{2}$
6. $x+\dfrac{3x}{4}+\dfrac{9x}{16}+\dfrac{27x}{64}+\dfrac{81x}{256}=8591$
7. $\dfrac{2x+1}{3}+\dfrac{3x+1}{4}=28-\dfrac{5x-2}{7}$
8. $\dfrac{1}{8}=\dfrac{6x+7}{8}-\dfrac{x+1}{2}+\dfrac{4-3x}{5}$
9. $\dfrac{10x+11}{6}-\dfrac{14x-13}{3}-4=\dfrac{7-6x}{4}$
10. $\dfrac{9(134-25x)}{40}+\dfrac{71}{10}=\dfrac{317}{8}-\dfrac{7x}{8}$

```{solution}
{.lower-alpha-paren .columns-4}
1. $S=\{1\}$
2. $S=\left\{ -\frac{2080}{211}\right\} $
3. $S=\{1\}$
4. $S=\{36\}$
5. $S=\{6\}$
6. $S=\{2816\}$
7. $S=\{13\}$
8. $S=\{3\}$
9. $S=\left\{ \frac{5}{18}\right\} $
10. $S=\left\{ -\frac{1}{2}\right\} $
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
