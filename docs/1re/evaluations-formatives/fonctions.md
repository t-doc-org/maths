% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid-inside: 2
```

```{include} /_import/informatique/_include/entete-examen.export.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice autorisée.\
Réponse sous forme de valeur exacte simplifiée.**
```
---

## Question {nump}`question`{points}`5`

Pour la fonction représentée ci-dessous,

```{figure} images/fonction1.png
:width: 60%
:align: center
```
{.lower-alpha-paren}
1.  Déterminez l'ordonnée à l'origine de la fonction $f(x)$.
2.  Déterminez les zéros de la fonction $f(x)$.
3.  Déterminez l'image de 1 par la fonction $f(x)$.
4.  Déterminez la préimage de -1 de la fonction $f(x)$.
5.  Sur quels intervalles de x, la fonction $f(x)$ est-elle croissante?
6.  Déterminez le domaine de définition de la fonction $f(x)$.

```{solution}
{.lower-alpha-paren}
1.  L'ordonnée à l'origine vaut environ $3.8$.
2.  Les zéros sont $x_1=-3$ et $x_2=5$.
3.  $f(1)=4$
4.  Il n'y a pas de préimage de 1.
5.  La fonction est croissante sur $[-3; 1]$.
6.  $D_f = [-3; 5]$
```

## Question {nump}`question`{points}`5`

Soient les fonctions $f(x) = -x + 5$ et $g(x) = -\dfrac{1}{3}x - 3$

{.lower-alpha-paren}
1. Quelle est la pente de la fonction $f(x)$?
2. Quelle est l'ordonnée à l'origine de la fonction $g(x)$?
3. La fonction $f(x)$ est-elle affine? Justifier.
4. Calculez le point d'intersection de ces deux droites.
5. Calculez l'angle entre les deux droites (arrondir seulement la réponse au
    dixième).
6. Représentez ces deux fonctions dans un système d'axes sans utiliser de
    tableau de correspondance.

```{solution}
{.lower-alpha-paren}
1.  La pente de $f(x)$ est de $-1$.
2.  L'ordonnée à l'origine de $g(x)$ est $-3$.
3.  La fonction $f(x)$ est affine, car c'est une fonction du premier degré et
    elle ne passe pas par l'origine.
4.  $I(12; -7)$
5.  $\alpha = 26.6^\circ$.
6.  sans corrigé
```

## Question {nump}`question`{points}`4`

Cet exercice est à résoudre algébriquement (sans représentation graphique de la
situation).

{.lower-alpha-paren}
1.  Déterminez l'expression algébrique de la fonction $f(x)$ de la droite qui
    passe par les points $A(-14; -5)$ et $B(-15; -12)$.
2.  Déterminez l'expression algébrique de la fonction $g(x)$ de la droite qui
    est parallèle à $h(x) = -\dfrac{1}{3}x + 2$ et qui intersecte l'axe des x en
    $4$.

```{solution}
{.lower-alpha-paren}
1.  $f(x) = 7x + 93$
2.  $g(x) = -\dfrac{1}{3}x + \dfrac{4}{3}$
```

## Question {nump}`question`{points}`6`

Soit la fonction quadratique $f(x) = 3x^2 + 18x + 15$

{.lower-alpha-paren}
1.  Écrivez la fonction $f(x)$ sous forme canonique en utilisant la complétion du
    carré et déterminez le sommet de $f(x)$.
2.  Écrivez la fonction $f(x)$ sous forme factorisée et déterminez les zéros de
    $f(x)$.
3.  Quelle est l'ordonnée à l'origine de cette fonction?
4.  En plaçant les points déterminés en a), b) et c), faites une esquisse la
    fonction $f(x)$.


```{solution}
{.lower-alpha-paren}
1.  $f(x) = 3(x+3)^2-12$ et $S=(-3; -12)$
2.  $f(x) = 3(x+5)(x+1)$, $x_1 = -5$ et $x_2=-1$
3.  L'ordonnée à l'origine est 15.
4.  Sans corrigé
```

## Question {nump}`question`{points}`3`

Déterminez l'expression algébrique de la parabole qui passe par les points
$P = (0; -2)$, $Q = (-2; 0)$ et $R = (1; 3)$.

```{solution}
$f(x) = 2x^2+3x-2$
```

## Question {nump}`question`{points}`5`

Une voiture a un réservoir d'essence d'une capacité de $45$ litres. Elle a une
consommation de $6.5$ litres pour $100$ kilomètres.<br>
**Arrondissez les réponses finales au dixième.**

{.lower-alpha-paren}
1.  Trouvez l'expression algébrique de la fonction qui détermine la quantité
    d'essence restante en fonction du nombre de kilomètres parcourus?
2.  Après combien de kilomètres, le réservoir sera-t-il vide? Justifiez par un
    calcul.
3.  Combien reste-t-il d'essence dans le réservoir après avoir parcouru
    $470$ km? Justifiez par un calcul.
4.  Un voyant lumineux s'allume quand il reste $5$ litres dans le réservoir.
    Combien de kilomètres peuvent être encore parcourus jusqu'à la panne sèche?
    Justifiez par un calcul.

```{solution}
{.lower-alpha-paren}
1.  $f(x) = 45 - \dfrac{65}{1000}x$
2.  Le réservoir est vide après $692.3$ km (résolvez $f(x) = 0$).
3.  Il reste $14.45$ litres (calculez $f(470)$)
4.  Il reste $76.9$ km jusqu'à la panne sèche.
```

## Question {nump}`question`{points}`6`

Une joueuse effectue un lancer franc au basket. La trajectoire du ballon est
donnée par l'équation $f(x) = -0.3x^2 + 1.6x + 2$.<br>
**Arrondissez les réponses finales au dixième.**

```{figure} images/basket.png
:width: 60%
:align: center
```

{.lower-alpha-paren}
1.  Quelle est la hauteur maximale du ballon? Justifiez par un calcul.
2.  Sachant que la ligne de lancer franc est à $4.6$ mètre du panier, quelle est
    la hauteur du panier? Justifiez par un calcul.
3.  Supposons qu'il n'y ait pas de panier, à quelle distance de la joueuse, le
    ballon toucherait-il le sol? Justifiez par un calcul.
4.  Un pigeon se trouve dans la salle et vole avec une trajectoire donnée par
    $g(x) = 0.875x + 2.5$.<br>
    Peut-il y avoir collision entre le ballon et le pigeon? Justifiez par un
    calcul.

```{solution}
{.lower-alpha-paren}
1.  La hauteur maximale est d'environ $4.1$ mètres (calculez le sommet).
2.  La hauteur du panier est d'environ $3$ mètres (calculez $f(4.6)$).
3.  Le ballon toucherait le sol à environ $6.4$ mètres (calculez $f(0)$).
4.  Il n'y aura pas de collision (trouvez l'intersection).
```
