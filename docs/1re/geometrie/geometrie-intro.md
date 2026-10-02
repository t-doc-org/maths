% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Introduction - Géométrie

```{metadata}
page-break-avoid-inside: 2
scripts:
  - src: chart.js
    type: module
```

## Exercice {nump}`exercice`

Dans l'exemple ci-dessous, les droites $BC$ et $DE$ sont parallèles.

```{figure} images/angles.png
:width: 50%
```

{.lower-alpha-paren .vsep-2}
1.  Nommez un angle **aigu**, un angle **obtu** et un angle **droit**.
    {leader}`.|100%`

2.  Donnez un angle **adjacents** à $\widehat{DAG}$. {leader}`.`

3.  Donnez un angle **complémentaires** à $\widehat{FAC}$. {leader}`.`

4.  Donnez un angle **supplémentaires** à $\widehat{AFB}$. {leader}`.`

5.  Donnez un angle **opposés par le sommet** à $\widehat{GAE}$. {leader}`.`

6.  Donnez un angle **alternes-internes** à $\widehat{GDA}$. {leader}`.`

7.  Représentez sur le dessin deux angles **alternes-externes**. {leader}`.`

8.  Représentez sur le dessin deux angles **correspondants**. {leader}`.`

9.  Calculez la mesure des angles des triangles $ABC$ et $ADE$, si
    $\widehat{ACB}$ mesure $35^{\circ}$.
    {leader}`.|100%`

```{solution}
{.lower-alpha-paren .columns-2}
1.  aigu: $\widehat{ACB}$, obtu: $\widehat{CFA}$ et droit:  $\widehat{CAD}$
2.  $\widehat{GAE}$
3.  $\widehat{BAF}$
4.  $\widehat{CFA}$
5.  $\widehat{FAC}$
6.  $\widehat{FBA}$
```

## Exercice {nump}`exercice`

Il existe plusieurs façons de démontrer le **théorème de Pythagore**.
La démonstration ci-dessous a été donnée par le président américain James A.
Garfield (1831-1881). L'idée est de placer deux triangles rectangles identiques
$ABC$ de façon à obtenir un trapèze rectangle (voir figure) pour ensuite
calculer l'aire du trapèze de deux manières différentes.

```{figure} images/demo-pythagore.png
:width: 50%
```

{.lower-alpha-paren}
1.  Montrez que le triangle blanc est un trangle rectangle.
2.  Calculez l'aire en utilisant la formule de l'aire d'un trapèze.
    {vspace}`3lh`
3.  Calculez l'aire comme la somme de l'aire des trois triangles qui forment le
    trapèze.
    {vspace}`3lh`
4.  Posez l'égalité entre les deux aires calculées précédemment et simplifiez,
    ainsi vous tomberez sur la formule du Théorème de Pythagore.
    {vspace}`6lh`

```{solution}
{.lower-alpha-paren}
1.  angle: $180`\circ - \alpha - \beta = 90^\circ$
2.  $A_{trapèze} = \dfrac{(GD-base + pt-base) \cdot h}{2} = \dfrac{(b + a)(b + a)}{2} = \dfrac{(a + b)^2}{2}$
3.  $A = 2 \cdot \dfrac{ab}{2} + \dfrac{c^2}{2} = ab + \dfrac{c^2}{2}$
4.  $$\dfrac{(a + b)^2}{2} &= ab + \dfrac{c^2}{2} \qquad &|& \text{même dénominateur}\\
    \dfrac{(a + b)^2}{2} &= \dfrac{2ab}{2} + \dfrac{c^2}{2} \qquad &|& \cdot 2\\
    (a + b)^2 &= 2ab + c^2  &|& \text{développez}\\
    a^2 + 2ab + b^2 &= 2ab + c^2  &|&  - 2ab\\
    a^2 + b^2 &= c^2$$
```

