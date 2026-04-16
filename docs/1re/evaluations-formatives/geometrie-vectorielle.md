% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Géométrie vectorielle

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} /_cache/entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice autorisée.\
Réponse sous forme de valeur exacte simplifiée.**
```
---

## Question {nump}`question`{points}`4`

Exprimez, si possible, les vecteurs suivants en fonction des vecteurs $\vec{u}$, $\vec{v}$ et $\vec{w}$.

```{figure} images/vecteurs1.png
:width: 60%
:align: center
```
{.lower-alpha-paren}
1.  $\overrightarrow{AB} = $ {leader}`.`
2.  $\overrightarrow{AC} = $ {leader}`.`
3.  $\overrightarrow{AD} = $ {leader}`.`
4.  $\overrightarrow{EF} = $ {leader}`.`

```{solution}
{.lower-alpha-paren}
1.  $\overrightarrow{AB} = -\vec{u}$
2.  $\overrightarrow{AC} = \vec{u} + \vec{v}$
3.  $\overrightarrow{AD} = \vec{u} - 2 \vec{w}$
4.  $\overrightarrow{EF} = \vec{v} + \vec{w}$
```

## Question {nump}`question`{points}`4`

En utilisant les vecteurs $\vec{u}$, $\vec{v}$ et $\vec{w}$ de l'exercice 1,
tracez les vecteurs suivants (sur une feuille quadrillée):
{.lower-alpha-paren}
1. $\vec{a} = \vec{u} + \vec{v} + \vec{w}$
2. $\vec{b} = \dfrac{1}{2} \vec{u} - \vec{v}$
3. $\vec{c} = \vec{u} - (\vec{v} - \vec{w})$

````{solution}
```{figure} images/vect-sol.png
:width: 100%
:align: center
```
````

## Question {nump}`question`{points}`4`

Soient les points $A(-2; 5)$ et $B(-1; -3)$.

{.lower-alpha-paren}
1.  Calculez les composantes du vecteur $\overrightarrow{AB}$.
2.  Calculez la norme du vecteur $\overrightarrow{AB}$.
3.  Calculez le point milieu du vecteur $\overrightarrow{AB}$.
4.  Transformez le vecteur $\overrightarrow{AB}$ en vecteur unitaire.

```{solution}
{.lower-alpha-paren}
1.  $\overrightarrow{AB} = \begin{pmatrix} -1 \\-3 \\ \end{pmatrix} - \begin{pmatrix} -2 \\5 \\ \end{pmatrix} = \begin{pmatrix} 1 \\-8 \\ \end{pmatrix}$
2.  $||\overrightarrow{AB}|| = \sqrt{1^2 + (-8)^2} = \sqrt{1 + 64} = \sqrt{65}$
3.  $M = \left(\frac{-2 + (-1)}{2} ; \frac{5 + (-3)}{2} \right) = \left(-\frac{3}{2}; 1\right)$
4.  $\vec{u} = \dfrac{1}{\sqrt{65}} \cdot \begin{pmatrix} 1 \\-8\\ \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{65}} \\-\frac{8}{\sqrt{65}} \\ \end{pmatrix}$
```

## Question {nump}`question`{points}`4`

Soient $\vec{v_1} = \begin{pmatrix} 1 \\ -4 \end{pmatrix}$ et $\vec{v_2} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ et $\vec{v_3} = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$

{.lower-alpha-paren}
1.  Les vecteurs $\vec{v_1}$ et $\vec{v_2}$  sont-ils colinéaires? Justifiez par
    un calcul.
2.  Trouvez, si possible, $a$ et $b$ tel que $\vec{v_3} = a \vec{v_1} + b \vec{v_2}$.
    Justifiez.


```{solution}
{.lower-alpha-paren}
1.  $Det(\vec{v_1}, \vec{v_2}) = \begin{vmatrix} 1 & -1 \\ -4 & 2 \end{vmatrix} = 1 \cdot 2 - (-1) \cdot (-4) = 2 - 4 = -4  \neq 0$<br>
    $\vec{v_1}$ et $\vec{v_2}$ ne sont pas colinéaires.
2.  De a), nous savons qu'il existe $a$ et $b$ tels que $\begin{pmatrix} 7 \\ 0 \end{pmatrix} = a \cdot \begin{pmatrix} 1 \\ -4 \end{pmatrix} + b \cdot \begin{pmatrix} -1 \\ 2 \end{pmatrix}$<br>
    $\left\{
    \begin{aligned}
         7 &=  a - b  \\
         0 &=  -4a + 2b
    \end{aligned}
    \right.
    \implies \left\{
    \begin{aligned}
         14 &=  2a - 2b   \\
         0 &= -4a + 2b
    \end{aligned}
    \right.
    \implies 14 = -2a \implies a = -7$<br>
    $7 = -7 - b \implies b = -14$<br>
    $\vec{v_3} = -7\vec{v_1} - 14 \vec{v_2}$


```

## Question {nump}`question`{points}`4`

**Cet exercice doit être résolu par calculs.**

Soient les points $A(-8; 2)$, $B(-4; 1)$, $C(-3; 5)$ et $D(-7; 6)$.

{.lower-alpha-paren}
1.  Calculez le périmètre du quadrilatère $ABCD$.
2.  De quel type est ce quadrilatère (le plus précis possible)? Justifiez.


```{solution}
{.lower-alpha-paren}
1.  $||\overrightarrow{AB}|| = \sqrt{(-4 -(-8))^2 + (1-2)^2} = \sqrt{4^2 + (-1)^2} = \sqrt{16 + 1} = \sqrt{17}$<br>
    $||\overrightarrow{BC}|| = \sqrt{(-3 -(-4))^2 + (5-1)^2} = \sqrt{1^2 + 4^2} = \sqrt{1 + 16} = \sqrt{17}$<br>
    $||\overrightarrow{CD}|| = \sqrt{(-7 -(-3))^2 + (6-5)^2} = \sqrt{(-4)^2 + 1^2} = \sqrt{16 + 1} = \sqrt{17}$<br>
    $||\overrightarrow{DA}|| = \sqrt{(-8 -(-7))^2 + (2-6)^2} = \sqrt{(-1)^2 + (-4)^2} = \sqrt{1 + 16} = \sqrt{17}$<br>
    Périmètre: $4 \cdot \sqrt{17} = 4\sqrt{17}$
2.  De a), nous savons que $ABCD$ a quatre côtés isométriques, c'est soit un
    carré, soit un losange. Pour les différencier, il faut calculer la longueur
    des diagonales (isométriques pour un carré).<br>
    $||\overrightarrow{AC}|| = \sqrt{(-3 -(-8))^2 + (5-2)^2} = \sqrt{5^2 + 3^2} = \sqrt{25 + 9} = \sqrt{34}$<br>
    $||\overrightarrow{BD}|| = \sqrt{(-7 -(-4))^2 + (6-1)^2} = \sqrt{(-3)^2 + 5^2} = \sqrt{9 + 25} = \sqrt{34}$<br>
    Comme les diagonales sont isométriques, c'est un carré.

```

