% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Équations trigonométriques

```{metadata}
subject: "Mathématiques 2e année"
```

```{admonition} Définition
Une **équation trigonométrique** est une équation dans laquelle l'inconnue
apparaît comme argument d'une fonction trigonométrique.
```

````{admonition} Définition
Voici quelques relations trigonométriques utiles lors de la résolution
d'équations:

```{math}
:class: align-center
\cos(-\alpha) &= \cos(\alpha)\\
\sin(-\alpha) &= -\sin(\alpha)\\
\tan(-\alpha) &= -\tan(\alpha)\\
\cos^2(\alpha) + \sin^2(\alpha) &= 1\\
\sin(\alpha) &= \cos\left(\dfrac{\pi}{2} - \alpha\right)\\
\cos(\alpha) &= \sin\left(\dfrac{\pi}{2} - \alpha\right) = \sin\left(\dfrac{\pi}{2} + \alpha\right)\\
```
````

## Exemple {num2}`exemple`

Résolvez $\tan(x) - 2 = 3$. Travaillez en radians.

$$
\tan(x) - 2 &= 3 \qquad \qquad \qquad &|& +2\\
\tan(x) &= 5 &|& \arctan(...)\\
\tan(x) &= \arctan(5) &|& \text{calculer la valeur de l'}\arctan(x) \text{et ajouter la période de } \pi\\
x &= 1.3734 {\color{red} + k \cdot \pi} &|& \text{solution principale}
$$

$S = \{1.3734 + k\pi \bigm| k \in \mathbb{R}\}$

## Exemple {num2}`exemple`

Résolvez $\cos(5x) = \dfrac{\sqrt{2}}{2}$. Travaillez en radians.

$$
\cos(3x) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\cos(3x) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 2\pi\\
3x_1  &= \dfrac{\pi}{4} {\color{red} + k \cdot 2\pi} &|& :3 \\
x_1  &= \dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $x_2 = - x_1$.

$x_2 = -\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3}$

$S = \left\{\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{R} \right\} \cup
\left\{-\dfrac{\pi}{12} + k \cdot \dfrac{2\pi}{3} \bigm| k \in \mathbb{R} \right\}$

## Exemple {num2}`exemple`

Résolvez $\sin(x - \dfrac{\pi}{2}) + 1 = \dfrac{1}{2}$. Travaillez en radians.

$$
\sin(x - \dfrac{\pi}{2}) + 1 &= 0.5 \qquad \qquad \qquad &|& -1\\
\sin(x - \dfrac{\pi}{2}) &= -0.5 &|& \arcsin(...)\\
x - \dfrac{\pi}{2}  &= \arcsin(-0.5) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 2\pi\\
x_1 - \dfrac{\pi}{2}  &= -\dfrac{\pi}{6} {\color{red} + k \cdot 2\pi} &|& +\dfrac{\pi}{2} \\
x_1  &= -\dfrac{\pi}{3} + k \cdot 2\pi &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $x_2 = \pi - x_1$.

$x_2 = \pi - \dfrac{\pi}{3} + k \cdot 2\pi = \dfrac{2\pi}{3} + k \cdot 2\pi$

$S = \left\{-\dfrac{\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{R} \right\} \cup
\left\{\dfrac{2\pi}{3} + k \cdot 2\pi \bigm| k \in \mathbb{R} \right\}$

## Exemple {num2}`exemple`

Résolvez $\tan(\alpha) - 2 = 3$. Travaillez en degrés.

$$
\tan(\alpha) - 2 &= 3 \qquad \qquad \qquad \qquad &|& +2\\
\tan(\alpha) &= 5 &|& \arctan(...)\\
\tan(\alpha) &= \arctan(5) &|& \text{calculer la valeur de l'}\arctan(x) \text{et ajouter la période de } 180^\circ\\
\alpha &= 78.69^\circ {\color{red} + k \cdot 180^\circ} &|& \text{solution principale}
$$

$S = \{78.69^\circ + k \cdot 180^\circ \bigm| k \in \mathbb{R}\}$

## Exemple {num2}`exemple`

Résolvez $\cos(5\alpha) = \dfrac{\sqrt{2}}{2}$. Travaillez en degrés.

$$
\cos(3\alpha) &= \dfrac{\sqrt{2}}{2} \qquad \qquad \qquad &|& \arccos(...)\\
\cos(3\alpha) &= \arccos\left(\dfrac{\sqrt{2}}{2}\right) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 360^\circ\\
3\alpha_1  &= 45^\circ {\color{red} + k \cdot 360^\circ} &|& :3 \\
\alpha_1  &= 15^\circ + k \cdot 120^\circ &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $\alpha_2 = - \alpha_1$.

$\alpha_2 = -15^\circ + k \cdot 120^\circ$

$S = \left\{15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{R} \right\} \cup
\left\{-15^\circ + k \cdot 120^\circ \bigm| k \in \mathbb{R} \right\}$

## Exemple {num2}`exemple`

Résolvez $\sin(x - 90^\circ) + 1 = \dfrac{1}{2}$. Travaillez en degrés.

$$
\sin(x - 90^\circ) + 1 &= 0.5 \qquad \qquad \qquad &|& -1\\
\sin(x - 90^\circ) &= -0.5 &|& \arcsin(...)\\
x - 90^\circ  &= \arcsin(-0.5) &|& \text{calculer la valeur de l'}\arcsin(x) \text{et ajouter la période de } 360^\circ\\
\alpha_1 - 90^\circ  &= -30^\circ {\color{red} + k \cdot 360^\circ} &|& +90^\circ \\
\alpha_1  &= 60^\circ + k \cdot 360^\circ &|& \text{première solution principale}
$$

Par symétrie dans le cercle trigonométrique, une deuxième solution principale
est obtenue avec $\alpha_2 = \pi - \alpha_1$.

$\alpha_2 = 180^\circ - 60^\circ + k \cdot 360^\circ = 120^\circ + k \cdot 360^\circ$

$S = \left\{60^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{R} \right\} \cup
\left\{20^\circ + k \cdot 360^\circ \bigm| k \in \mathbb{R} \right\}$
