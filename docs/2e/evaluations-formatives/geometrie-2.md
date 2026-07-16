% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Géométrie dans le plan 2

```{include} /_import/informatique/_include/entete-examen.export.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin.\
Réponse sous forme de valeur exacte simplifiée.\
Calculatrice et formulaires et tables autorisés.**
```
---

## Question {nump}`question`{points}`5`

Soient le point $P(4; -3)$ et une droite dont les équations paramétriques sont
$d: \left\{
    \begin{aligned}
         x &=  2 - 3\lambda   \\
         y &=  1 + 2\lambda
    \end{aligned}
    \right.$

Calculez la distance du point $P$ à la droite $d$. Arrondissez au centième.

```{solution}
$d: 2x + 3y - 7 = 0$

$\delta(P, d) = \dfrac{|2 \cdot 4 + 3 \cdot (-3) - 7|}{\sqrt{2^2 + 3^2}} = \dfrac{|-8|}{\sqrt{13}} = \dfrac{8\sqrt{13}}{13} \simeq 2.22$
```

## Question {nump}`question`{points}`5`

Soient les droites $d_1: y = -\dfrac{4}{3}x + 4$ et $d_2: \begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} -5\\ 7 \end{pmatrix} + \lambda \cdot \begin{pmatrix} 5\\ -12 \end{pmatrix}$ avec $\lambda \in \mathbb{R^*}$.

Déterminez les équations des bissectrices de $d_1$ et $d_2$.


```{solution}
$d_1: 4x + 3y - 12 = 0$ et $d_2: 12x + 5y + 25 = 0$<br>
$$b1: \dfrac{4x + 3y - 12}{\sqrt{4^2+3^2}} &= \dfrac{12x + 5y + 25}{\sqrt{12^2+5^2}}\\
\dfrac{4x + 3y - 12}{5} &= \dfrac{12x + 5y + 25}{13}\\
13(4x + 3y - 12) &= 5(12x + 5y + 25)\\
52x + 39y - 156 &= 60x + 25y + 125\\
-8x + 14y - 281 &= 0\\
8x - 14y + 281 &= 0$$
$$b2: 52x + 39y - 156 &= -(60x + 25y + 125)\\
52x + 39y - 156 &= -60x - 25y - 125\\
112x + 64y - 31 &= 0$$
```

## Question {nump}`question`{points}`5`

Soient un cercle d'équation $\Gamma: x^2 + y^2 + 2x - 4y - 8 = 0$, une droite
d'équation  $d: x + y = 0$ et un point $T(2;4)$.

{.lower-alpha-paren .vsep-2}
1.  Déterminez le centre et le rayon du cercle.
2.  Déterminez le(s) point(s) d'intersection de la droite $d$ et du cercle
    $\Gamma$.
3.  Montrez que le point $T$ appartient au cerlce $\Gamma$.
4.  Déterminez l'équation de la tangente au cercle en $T$.


```{solution}
{.lower-alpha-paren .vsep-2}
1.  $$
    x^2 + y^2 + 2x - 4y - 8 &= 0\\
    (x^2 + 2x + 1) - 1 + (y^2 - 4y + 4) -4 - 8 &= 0\\
    (x + 1)^2 - 1 + (y - 2)^2 - 4 - 8 &= 0\\
    (x + 1)^2 + (y - 2)^2 - 13 &= 0\\
    (x + 1)^2 + (y - 2)^2 &= 13\\
    $$
    Centre: $C(-1;2)$ Rayon: $r = \sqrt{13}$
2.  $$\left\{
    \begin{aligned}
         x + y &= 0  \\
         x^2 + y^2 + 2x - 4y - 8 &= 0
    \end{aligned}
    \right. \implies
    \left\{
    \begin{aligned}
         y &= -x  \\
         x^2 + (-x)^2 + 2x - 4 \cdot (-x) - 8 &= 0
    \end{aligned}
    \right.$$
    $$\implies
    \left\{
    \begin{aligned}
         y &= -x  \\
         2x^2 + 6x - 8 &= 0
    \end{aligned}
    \right. \implies
    \left\{
    \begin{aligned}
         y &= -x  \\
         2(x^2 + 3x - 4) &= 0
    \end{aligned}
    \right.$$
    $$
    \implies
    \left\{
    \begin{aligned}
         y &= -x  \\
         2(x + 4)(x -1) &= 0
    \end{aligned}
    \right.$$
    $I_1(-4; 4)$ et $I_2(1; -1)$
3.  $2^2 + 4^2 + 2 \cdot 2 - 4 \cdot 4 - 8 = 4 + 16 + 4 - 16 - 8 = 0$<br>
    L'équation est vérifiée, le point $T(2; 4)$ appartient bien au cercle.
4.  $$(2 + 1)(x + 1) + (4 - 2)(y - 2) &=13 \\
    3(x + 1) + 2(y - 2) &=13 \\
    3x + 3 + 2y - 4 &=13 \\
    3x + 2y - 14 &= 0
    $$
    $t: 3x + 2y - 14 = 0$
```

