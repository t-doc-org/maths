% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Équations trigonométriques

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} ../../entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin.\
Réponse sous forme de valeur exacte simplifiée.**
```
---

## Question {nump}`question`{points}`24`

Résolvez les équations suivantes (solutions exactes).

{.lower-alpha-paren .vsep-2}
1.  $\cos(\alpha) = -\dfrac{\sqrt{3}}{2}$
2.  $\tan(\alpha + 60^\circ) - 1 = 0$
3.  $\sin(3x) =  \sin(\dfrac{\pi}{3} + x)$
4.  $\tan(2x - \dfrac{\pi}{4}) = \sqrt{3}$
5.  $\sin(x) - \cos(3x) = 0$
6.  $2\cos^2(x) = 1 + \sin(x)$



`````{solution}
{.lower-alpha-paren .vsep-2}
1.  $\cos(\alpha) = -\dfrac{\sqrt{3}}{2}$<br>
    $\arccos(\cos(\alpha)) = \arccos(-\dfrac{\sqrt{3}}{2})$
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr;

    -   $\alpha_1  = 150^\circ +  k \cdot 360^\circ$

    -   $\alpha_2  = -150^\circ +  k \cdot 360^\circ$
    ```
    $S = \{150^\circ +  k \cdot 360^\circ | k \in \mathbb{Z}\} \cup \{-150^\circ +  k \cdot 360^\circ | k \in \mathbb{Z}\}$
2.  $\tan(\alpha + 60^\circ) - 1 = 0$<br>
    $\tan(\alpha + 60^\circ) = 1$<br>
    $$\arctan(\tan(\alpha + 60^\circ)) &= \arctan(1)\\
    \alpha + 60^\circ  &= 45^\circ +  k \cdot 180^\circ\\
    \alpha  &= -15^\circ +  k \cdot 180^\circ
    $$

    $S = \{-15^\circ +  k \cdot 180^\circ | k \in \mathbb{Z}\}$
3.  $\sin(3x) =  \sin(\dfrac{\pi}{3} + x)$<br>
    $\arcsin(\sin(3x)) =  \arcsin(\sin(\dfrac{\pi}{3} + x))$
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr;

    -   $$3x_1  &= \dfrac{\pi}{3} + x_1 +  k \cdot 2\pi\\
        2x_1  &= \dfrac{\pi}{3} + k \cdot 2\pi\\
        x_1  &= \dfrac{\pi}{6}  + k \cdot \pi
        $$

    -   $$3x_2  &= \pi - (\dfrac{\pi}{3} + x_2) +  k \cdot 2\pi\\
        3x_2  &= \pi - \dfrac{\pi}{3} - x_2 +  k \cdot 2\pi\\
        4x_2  &= \dfrac{2\pi}{3} +  k \cdot 2\pi\\
        x_2  &= \dfrac{\pi}{6} +  k \cdot \dfrac{\pi}{2}\\
        $$
    ```
    $S = \{\dfrac{\pi}{6} +  k \cdot \dfrac{\pi}{2} | k \in \mathbb{Z}\}$
4.  $\tan(2x - \dfrac{\pi}{4}) = \sqrt{3}$<br>
    $$\arctan(\tan(2x - \dfrac{\pi}{4})) &= \arctan(\sqrt{3})\\
    2x - \dfrac{\pi}{4}  &= \dfrac{\pi}{3} +  k \cdot \pi\\
    2x &= \dfrac{\pi}{4}  + \dfrac{\pi}{3} +  k \cdot \pi\\
    2x &= \dfrac{7\pi}{12} +  k \cdot \pi\\
    x &= \dfrac{7\pi}{24} +  k \cdot \dfrac{\pi}{2}\\
    $$

    $S = \{\dfrac{7\pi}{24} +  k \cdot \dfrac{\pi}{2} | k \in \mathbb{Z}\}$
5.  $\sin(x) - \cos(3x) = 0$<br>
    $\sin(x) = \cos(3x)$<br>
    $\cos(\dfrac{\pi}{2}-x) = \cos(3x)$<br>
    $\arccos(\cos(\dfrac{\pi}{2}-x)) =  \arccos(\cos(3x))$
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr;

    -   $$\dfrac{\pi}{2}-x_1 &= 3x_1 +  k \cdot 2\pi\\
        -4x_1  &= -\dfrac{\pi}{2} + k \cdot 2\pi\\
        x_1  &= \dfrac{\pi}{8}  + k \cdot \dfrac{\pi}{2}
        $$

    -   $$\dfrac{\pi}{2}-x_2 &= -3x_2 +  k \cdot 2\pi\\\
        2x_2  &= - \dfrac{\pi}{2} +  k \cdot 2\pi\\
        x_2  &= - \dfrac{\pi}{4} +  k \cdot \pi
        $$
    ```

    $S = \{\dfrac{\pi}{8}  + k \cdot \dfrac{\pi}{2} | k \in \mathbb{Z}\} \cup \{-\dfrac{\pi}{4} +  k \cdot \pi | k \in \mathbb{Z}\}$
6.  $2\cos^2(x) = 1 + \sin(x) \qquad \qquad \qquad$ avec $\cos^2(x) = 1 - \sin^2(x)$<br>
    $2(1- \sin^2(x)) = 1 + \sin(x)$<br>
    $2- 2\sin^2(x) = 1 + \sin(x)$<br>
    $0 = 2\sin^2(x) + \sin(x) - 1$<br>
    On pose $y = \sin(x)$<br>
    $2y^2 + y - 1 = 0 \implies (2y^2 + 2y - y - 1) = 0 \implies 2y(y + 1) - (y + 1) = 0 \implies (2y -1)(y + 1)=0$<br>
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr;

    -   $$2y -1 &= 0\\
        2\sin(x) -1 &= 0\\
        \sin(x)  &= \dfrac{1}{2}\\
        x_1 &= \dfrac{\pi}{6} + k \cdot 2\pi \quad \text{ou}\\
        x_2 &= \pi - \dfrac{\pi}{6} + k \cdot 2\pi \\
        &= \dfrac{5\pi}{6} + k \cdot 2\pi
        $$

    -   $$y + 1 &= 0\\\
        \sin(x) + 1 &= 0\\
        \sin(x)  &= -1\\
        x_3 &= -\dfrac{\pi}{2} + k \cdot 2\pi
        $$
    ```

    $S = \{\dfrac{\pi}{6} + k \cdot 2\pi | k \in \mathbb{Z}\} \cup \{\dfrac{5\pi}{6} + k \cdot 2\pi | k \in \mathbb{Z}\} \cup \{-\dfrac{\pi}{2} + k \cdot 2\pi | k \in \mathbb{Z}\}$
`````


