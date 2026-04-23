% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Géométrie dans le plan 1

```{metadata}
subject: "Mathématiques 2e année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} /_import/informatique/_include/entete-examen.export.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin.\
Réponse sous forme de valeur exacte simplifiée.\
Calculatrice et formulaires et tables autorisés.**
```
---

## Question {nump}`question`{points}`8`

Soit l'équation cartésienne $d_1: x + 2y - 9 = 0$.

{.lower-alpha-paren .vsep-2}
1.  Déterminez l'équation vectorielle de $d_1$.
2.  Déterminez l'équation vectorielle de la droite $d_2$, perpendiculaire à
    $d_1$ et qui passe par l'origine.
3.  Vérifiez par un calcul que ces deux droites sont bien perpendiculaires.
4.  Le point $B(-2, -3)$ appartient-il à la droite $d_2$?
5.  Calculez le point d'intersection $I$ des droites $d_1$ et $d_2$.

```{solution}
{.lower-alpha-paren .vsep-2}
1.  $\vec{d_1} = \begin{pmatrix} -b\\ a \end{pmatrix} = \begin{pmatrix} -2\\ 1 \end{pmatrix}$ et
    $A(0, \dfrac{9}{2}) \in d_1$ (ordonnée à l'origine)<br>
    $d_1: \begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} 0\\ \frac{9}{2} \end{pmatrix} + \lambda \cdot \begin{pmatrix} -2\\ 1 \end{pmatrix}$ avec $\lambda \in \mathbb{R}$
2.  $d_1$ et $d_2$ sont perpendiculaires, $\vec{d_2} = \begin{pmatrix} -1\\ -2 \end{pmatrix}$<br>
    $d_2: \begin{pmatrix} x\\ y \end{pmatrix} = \mu \cdot \begin{pmatrix} -1\\ -2 \end{pmatrix}$ avec $\mu \in \mathbb{R}$
3.  $\vec{d_1} \cdot \vec{d_2} = -2 \cdot (-1) + 1 \cdot (-2) = 2 - 2 = 0$
4.  $\left\{
    \begin{aligned}
         -2 &=  \lambda \cdot (-1)   \\
         -3 &=  \lambda \cdot (-3)
    \end{aligned}
    \right.
    \Longleftrightarrow \left\{
    \begin{aligned}
         \lambda &=  2   \\
         \lambda &=  1
    \end{aligned}
    \right.$<br>
    Le point $B(-2, -3)$ n'appartient pas à la droite $d_2$.
5.  $$
    \left \{
      \begin{aligned}
         0 - 2\lambda &= -1\mu\\
         \frac{9}{2} + \lambda &= -2\mu
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -2\lambda + \mu &= 0\\
         \lambda + 2\mu &= \frac{9}{2}
      \end{aligned}
    \right. \Longleftrightarrow
    \left \{
      \begin{aligned}
         -2\lambda + \mu &= 0\\
         2\lambda + 4\mu &= 9
      \end{aligned}
    \right.$$
    $$
    \Longleftrightarrow
    \left \{
      \begin{aligned}
        \mu &= 2\lambda\\
        5\mu &= 9
      \end{aligned}
    \right. \Longleftrightarrow
    \mu = \frac{9}{5} \quad \text{ et } \quad \lambda = \dfrac{9}{10}
    $$
    $$
    \left \{
      \begin{aligned}
         x &= -1\mu = -1 \cdot \frac{9}{5} = - \frac{9}{5}\\
         y &= -2\mu = -2 \cdot \frac{9}{5} = - \frac{18}{5}
      \end{aligned}
    \right. \Longleftrightarrow
    I(- \frac{9}{5}; - \frac{18}{5})
    $$

```

## Question {nump}`question`{points}`10`

Soient trois points $A(6, -10)$, $B(8, 16)$ et $C(-2, 6)$.

{.lower-alpha-paren .vsep-2}
1.  Déterminez l'angle $\alpha$ formé par les vecteurs $\overrightarrow{AB}$ et
    $\overrightarrow{AC}$.
2.  Calculez le périmètre du triangle $ABC$.
3.  Calculez les coordonnées de la projection de $B$ sur la droite $AC$.
4.  Les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CB}$ sont-ils
    orthogonaux? Justifiez par un calcul.


```{solution}
{.lower-alpha-paren .vsep-2}
1.  $\overrightarrow{AB} = \begin{pmatrix} 8 - 6\\ 16 - (-10) \end{pmatrix} = \begin{pmatrix} 2\\ 26 \end{pmatrix}$<br>
    $\overrightarrow{AC} = \begin{pmatrix} -2 - 6\\ 6 - (-10) \end{pmatrix} = \begin{pmatrix} -8\\ 16 \end{pmatrix}$
    $$
    \cos(\alpha) &= \dfrac{\overrightarrow{AB} \cdot \overrightarrow{AC}}{||\overrightarrow{AB}|| \cdot ||\overrightarrow{AC}||}\\
    &= \dfrac{2 \cdot (-8) + 26 \cdot 16}{\sqrt{2^2 + 26^2} \cdot \sqrt{(-8)^2 + 16^2}}\\
    &= \dfrac{-16 + 416}{\sqrt{680} \cdot \sqrt{320}}\\
    &= \dfrac{400}{80\sqrt{34}} = \dfrac{5\sqrt{34}}{34}
    $$
    $ \implies \alpha = \cos^{-1}\left(\dfrac{5\sqrt{34}}{34}\right) = 30.96^\circ$
2.  $\overrightarrow{CB} = \begin{pmatrix} 8 - (-2)\\ 16 - 6 \end{pmatrix} = \begin{pmatrix} 10\\ 10 \end{pmatrix}$<br>
    Périmètre:<br>
    $$
    P &= ||\overrightarrow{AB}|| + ||\overrightarrow{AC}|| + ||\overrightarrow{CB}||\\
    &= \sqrt{2^2 + 26^2} + \sqrt{(-8)^2 + 16^2} + \sqrt{10^2 + 10^1}\\
    &= 2\sqrt{170} + 8\sqrt{5} + 10\sqrt{2} \simeq 58.11
    $$
3.  $\overrightarrow{CA} = \begin{pmatrix} 8\\ -16 \end{pmatrix}$
    $$
    \overrightarrow{CB'} &= \dfrac{\overrightarrow{CA} \cdot \overrightarrow{CB}}{||\overrightarrow{CA}||} \cdot \overrightarrow{CA}^2\\
    &= \dfrac{8 \cdot 10 + (-16) \cdot 10}{(\sqrt{8^2 + (-16)^2})^2} \cdot \overrightarrow{CA}\\
    &= \dfrac{-80}{320} \cdot \overrightarrow{CA} = -\dfrac{1}{4} \cdot \overrightarrow{CA}\\
    &= -\dfrac{1}{4} \cdot \begin{pmatrix} 8\\ -16 \end{pmatrix} = \begin{pmatrix} -2\\ 4 \end{pmatrix}
    $$
    $\overrightarrow{OB'} = \overrightarrow{OC} + \overrightarrow{CB'} = \begin{pmatrix} -2\\ 6 \end{pmatrix} + \begin{pmatrix} -2\\ 4 \end{pmatrix} = \begin{pmatrix} -4\\ 10 \end{pmatrix}$<br>
    $\implies P(-4; 10)$
4.  $\overrightarrow{AB} \perp \overrightarrow{CB} \quad \iff \quad \overrightarrow{AB} \cdot \overrightarrow{CB} = 0$<br>
    $\overrightarrow{AB} \cdot \overrightarrow{CB} = 2 \cdot 10 + 26 \cdot 10 = 280 \neq 0$<br>
    Les deux vecteurs ne sont pas orthogonaux.
```

