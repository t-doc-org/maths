% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Droite dans le plan

```{metadata}
subject: "Mathématiques 2e année"
```

## Différents types d'équations

````{admonition} Définition
:class: note
L'**équation cartésienne explicite** de la droite $d$ du plan est donnée par
```{math}
:class: align-center
d: y = mx + h
```
avec $m$ et $h \in \mathbb{R}$. $m$ est la **pente** et $h$ est l'**ordonnée à
l'origine**.
````

### Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   Soit la droite $d$ dont l'équation est donnée par
    ```{math}
    :class: align-center
    d: y = -\dfrac{2}{3}x + 1
    ```
    Cette droite a pour pente $-\dfrac{2}{3}$ et comme ordonnée à l'origine $1$.

-   ```{jsxgraph} droite
    :style: width: 100%;
    ```
````

<script type="module">
const {initBoard, JXG, nonInteractive, screen} =
    await tdoc.import('jsxgraph.js');
const attrs = [screen, {
    boundingBox: [-5, 5, 5, -5],
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
}];
initBoard('droite', attrs, board => {
    board.create('functiongraph', [x => - 2 / 3 * x + 1] , {
        name: `\\(d\\)`, withLabel: true,
        label: {position: '0.2fr right', offset: [15, 15]},
    });
});
</script>

````{admonition} Définition
:class: note
L'**équation cartésienne implicite** de la droite $d$ du plan est donnée par
```{math}
:class: align-center
d: ax + by + c = 0
```
avec $a$, $b$ et $c \in \mathbb{R}$.
````

### Exemple {num2}`exemple`

Reprenons la droite de l'exercice précédent:
```{math}
    :class: align-center
d: y = -\dfrac{2}{3}x + 1
```
Cette équation est sous la forme cartésienne explicite. En mettant tout dans
le même membre, nous obtenons l'équation cartésienne implicite.
$$ y &= -\dfrac{2}{3}x + 1 \qquad \qquad &|& \cdot 3\\
3y &= -2x + 3 &|& +2x - 3\\
2x + 3y -3 &= 0$$

## Exemple {num2}`exemple`

Soit l'équation de la droite $d$ donnée sous forme cartésienne implicite:
```{math}
    :class: align-center
d: -3x + 4y + 2 = 0
```
En isolant $y$, nous obtenons l'équation cartésienne explicite.
$$ -3x + 4y + 2 &= 0 \qquad \qquad &|& +3x - 2\\
4y &= 3x - 2 &|& :4\\
y &= \dfrac{3}{4}x - \dfrac{1}{2}$$

```{admonition} Définition
:class: note
Un **vecteur directeur** d'une droite $d$ est tout vecteur $\overrightarrow{AB}$
tels que $A$ et $B$ sont deux points distincts de $d$.
```

### Exemple {num2}`exemple`

Cherchons un vecteur directeur de la droite $d: y = -\dfrac{2}{3}x + 1$.
1.  Trouvez deux points $A$ et $B$ qui appartiennent à la droite:<br>
    $A(0; 1)$ et $B(3; -1)$ sont deux points de la droite.
2.  Déterminez les composantes du vecteur $\overrightarrow{AB}$:<br>
    $\overrightarrow{AB} = \begin{pmatrix} 3\\ -1\\ \end{pmatrix} - \begin{pmatrix} 0\\ 1\\ \end{pmatrix} = \begin{pmatrix} 3\\ -2\\ \end{pmatrix}$

$\begin{pmatrix} 3\\ -2\\ \end{pmatrix}$ est un vecteur directeur de $d$.

````{admonition} Définition
:class: note
Pour tout point $P$ de la droite $d$ donnée par le point $A \in d$ et le vecteur
directeur $\vec{d}$, l'**équation vectorielle** de la droite $d$ du plan est
donnée par
```{math}
:class: align-center
\overrightarrow{OP} = \overrightarrow{OA} + \lambda \cdot \vec{d}
```
avec $\lambda \in \mathbb{R}$.
````

### Exemple {num2}`exemple`

L'équation vectorielle de la droite $d: y = -\dfrac{2}{3}x + 1$ est donnée par
```{math}
:class: align-center
\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix}
```

Pour tous points $(x; y)$ de $d$, il existe $\lambda$ tel que l'équation
vectorielle est vérifiée:

Soit $P(-3; 3)$ appartenant à $d$.

$\begin{pmatrix} -3\\ 3\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} \Longleftrightarrow
\left\{
\begin{aligned}
     -3 &=  0 + \lambda \cdot 3   \\
     3 &=  1 + \lambda \cdot (-2)
\end{aligned}
\right.
\Longleftrightarrow \left\{
\begin{aligned}
     \lambda &=  -1   \\
     \lambda &=  -1
\end{aligned}
\right.
\Longleftrightarrow \lambda = -1$

$\overrightarrow{OP} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} - 1 \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix}$

### Exemple {num2}`exemple`

Vérifions si un point appartient à une droite dont nous connaissons l'équation
vectorielle:

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ -5\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -1\\ 2\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

1. Le point $Q(-4; 5)$ appartient-il à la droite $d$?<br>
    Remplacez les coordonnées du point $Q$ dans l'équation vectorielle de $d$:<br>
    $$\left\{
    \begin{aligned}
        -4 &=  2 + \lambda \cdot (-1)   \\
        5 &=  -5 + \lambda \cdot 2
    \end{aligned}
    \right.
    \Longleftrightarrow \left\{
    \begin{aligned}
         \lambda &=  6   \\
         \lambda &=  5
    \end{aligned}
    \right.$$
    Comme les deux valeurs de $\lambda$ ne sont pas les mêmes, $Q$ n'appartient
    pas à la droite $d$.

2. Le point $R(-1; 1)$ appartient-il à la droite $d$?<br>
    Remplacez les coordonnées du point $R$ dans l'équation vectorielle de $d$:<br>
    $$\left\{
    \begin{aligned}
        -1 &=  2 + \lambda \cdot (-1)   \\
        1 &=  -5 + \lambda \cdot 2
    \end{aligned}
    \right.
    \Longleftrightarrow \left\{
    \begin{aligned}
         \lambda &=  3   \\
         \lambda &=  3
    \end{aligned}
    \right.$$
    Comme les deux valeurs de $\lambda$ sont les mêmes, $R$ appartient à la droite
    $d$.

````{admonition} Définition
:class: note
Les **équations paramétriques** de la droite $d$ du plan sont données par
```{math}
:class: align-center
\left \{
  \begin{aligned}
     x &= a_1 + \lambda \cdot d_1\\
     y &= a_2 + \lambda \cdot d_2
  \end{aligned}
\right.
```
avec $\lambda \in \mathbb{R}$.
````

### Exemple {num2}`exemple`

Depuis l'équation vectorielle de la droite $d: y = -\dfrac{2}{3}x + 1$, il est
facile de définir les équations paramétriques:

$\begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 3\\ -2\\ \end{pmatrix} \Longleftrightarrow
\left \{
  \begin{aligned}
     x &= 0 + \lambda \cdot 3\\
     y &= 1 + \lambda \cdot (-2)
  \end{aligned}
\right.$

## Transformation d'équations

### Exemple {num2}`exemple`

Comment passez d'une équation vectorielle à une équation cartésienne?

1.  Le vecteur directeur permet de calculer la pente $m$.
2.  Le point d'ancrage permet de calculer l'ordonnée à l'origine $h$.

Soit l'équation vectorielle d'une droite

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} -3\\ 4\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 5\\ -1\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

La pente de la droite:
$m = \dfrac{\Delta y}{\Delta x} = \dfrac{-1}{5} = -\dfrac{1}{5}$

$d: y = -\dfrac{1}{5}x + h$

Le point d'ancrage est (-3; 4). En remplaçant ces valeurs dans l'équation, nous
pouvons déterminer $h$:

$4 = -\dfrac{1}{5} \cdot (-3) + h \implies 4 = \dfrac{3}{5} + h \implies 4 - \dfrac{3}{5} = h \implies h = \dfrac{17}{5}$

L'équation cartésienne explicite de la droite $d$ est
$d: y = -\dfrac{1}{5}x + \dfrac{17}{5}$.

L'équation cartésienne implicite de la droite $d$ est

$$ y &= -\dfrac{1}{5}x + \dfrac{17}{5} \qquad \qquad &|& \cdot 5\\
5y &= -x + 17 &|& +x - 17\\
x + 5y - 17 &= 0$$

Remarque: Le coefficient du $x$ est l'opposé de la deuxième composante du
vecteur directeur et celui du $y$ correspond à la première.

````{admonition} Théorème
:class: note
Soit $d$ une droite d'équation $ax+by+c=0$. Un vecteur directeur de $d$ est
```{math}
:class: align-center
\vec{d} = \begin{pmatrix} -b\\ a\\ \end{pmatrix}
```
````

### Exemple {num2}`exemple`

Comment passez d'une équation cartésienne à une équation vectorielle?

1.  N'importe quel point de la droite peut servir de point d'ancrage.
2.  Utilisez le théorème ci-dessus pour trouver le vecteur directeur.

Soit l'équation cartésienne explicite d'une droite $d: y = \dfrac{1}{3}x - 2$

Prenons l'ordonnée à l'origine comme point d'ancrage: $A(0; -2)$.

L'équation cartésienne implicite:

$$ y &= \dfrac{1}{3} - 2 \qquad \qquad &|& \cdot 3\\
3y &= x -6 &|& -x + 6\\
-x + 3y + 6 &= 0$$

Le vecteur directeur est donc $\vec{d} = \begin{pmatrix} -b\\ a\\ \end{pmatrix} = \begin{pmatrix} -3\\ -1\\ \end{pmatrix}$

L'équation vectorielle:

$d : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ -2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} -3\\ -1\\ \end{pmatrix} \text{ avec } \lambda \in \mathbb{R}$

La forme paramétrique:

$
\left \{
  \begin{aligned}
     x &= -3\lambda\\
     y &= -2 - \lambda
  \end{aligned}
\right.$

## Position relaive de deux droites

```{admonition} Propriétés
Deux droites sont **parallèles** si leurs vecteurs directeurs sont colinéaires
et si elles n'ont aucun point commun.

Deux droits sont **confondues** si leurs vecteurs directeurs sont colinéaires et
si elles ont (au moins) un point commun.

Deux droites sont **sécantes** si elles ont un unique point commun.
```

### Exemple {num2}`exemple`

Soient deux droites $d_1 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 2\\ 2\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 2\\ 1\\ \end{pmatrix}$ et $d_2 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 5\\ 4\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} 6\\ 3\\ \end{pmatrix}$

1.  Vérifiez si les vecteurs directeurs sont colinéaires (ou si les pentes sont
    les mêmes.)
2.  Vérifiez si le point d'ancrage d'un des droites appartient à l'autre.

Les deux vecteurs directeurs sont colinéaires, car $3 \cdot \begin{pmatrix} 2\\ 1\\ \end{pmatrix} = \begin{pmatrix} 6\\ 3\\ \end{pmatrix}$. Les deux droites sont donc parallèles ou confondues.

Vérifions si le point d'ancrage de $d_1$ $(2; 2)$ appartient à $d_2$:

$$\left \{
  \begin{aligned}
     2 &= 5 + \mu \cdot 6\\
     2 &= 4 + \mu \cdot 3
  \end{aligned}
\right. \Longleftrightarrow
\left \{
  \begin{aligned}
     -3 &= 6\mu\\
     -2 &= 3\mu
  \end{aligned}
\right. \Longleftrightarrow
\left \{
  \begin{aligned}
     -\dfrac{1}{2} &= \mu\\
     -\dfrac{2}{3} &= \mu
  \end{aligned}
\right.
$$
$(2; 2) \notin d_2$, les deux droites sont donc parallèles.

### Exemple {num2}`exemple`

Soient deux droites $d_1 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ \end{pmatrix} + \lambda \cdot \begin{pmatrix} 4\\ -2\\ \end{pmatrix}$ et $d_2 : \begin{pmatrix} x\\ y\\ \end{pmatrix} = \begin{pmatrix} 3\\ -1\\ \end{pmatrix} + \mu \cdot \begin{pmatrix} -1\\ -3\\ \end{pmatrix}$

Les deux vecteurs directeurs sont-ils colnéaires?

$Det(\vec{d_1}, \vec{d_2}) = \begin{vmatrix} 4 & -1 \\ -2 & -3 \end{vmatrix} = 4 \cdot (-3) - (-2) \cdot (-1) = -12 -2 = --14 \neq 0$

Les deux vecteurs ne sont pas colinéaires. Les deux droites sont donc sécantes.

Déterminons le point d'intersection:

$$
\left \{
  \begin{aligned}
     0 + 4\lambda &= 3 - \mu\\
     1 -2\lambda &= -1 -3\mu
  \end{aligned}
\right. \Longleftrightarrow
\left \{
  \begin{aligned}
     4\lambda + \mu &= 3\\
     -2\lambda + 3\mu &= -2
  \end{aligned}
\right. \Longleftrightarrow
\left \{
  \begin{aligned}
     4\lambda + \mu &= 3\\
     -4\lambda + 6\mu &= -4
  \end{aligned}
\right. \Longleftrightarrow
$$

Nous obtenons $\mu = -\dfrac{1}{7}$ et $\lambda = \dfrac{3 + \dfrac{1}{7}}{4} = \dfrac{11}{14}$
$$
\left \{
  \begin{aligned}
     x &= 3 - \mu = 3 - (-\dfrac{1}{7})= 3 + \dfrac{1}{7} = \dfrac{22}{7}\\
     y &= -1 - 3\mu = -1 - 3 \cdot (-\dfrac{1}{7}) = -1 + \dfrac{3}{7} = -\dfrac{4}{7}
  \end{aligned}
\right.
$$
Le point d'intersection est $I(\dfrac{22}{7}; \dfrac{4}{7})$
