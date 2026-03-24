% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Produit scalaire et angles de deux vecteurs

```{metadata}
subject: "Mathématiques 2e année"
```

## Angle de deux vecteurs

````{admonition} Définition
:class: note
Soient $\vec{u}$ et $\vec{v}$ deux vecteurs dans le plan muni d'une base
orthonormée, avec
```{math}
:class: align-center
\vec{u} = \begin{pmatrix} u_1\\ u_2 \end{pmatrix} \quad\text{et}\quad
\vec{v} = \begin{pmatrix} v_1\\ v_2 \end{pmatrix}
```
Le **produit scalaire** de $\vec{u}$ et $\vec{v}$ est le nombre réel défini par
```{math}
:class: align-center
\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2
```
````

````{admonition} Théorème
:class: note
Dans un repère orthonormé,

```{math}
:class: align-center
\vec{u} \cdot \vec{v} = \| \vec{u} \| \cdot \| \vec{v} \| \cdot \cos(\varphi)
```
```{jsxgraph} angle-vect
:style: width: 50%; border: none;
```
````

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingbox: [-1, 6, 9, -1],
    axis: false, grid: true,
    defaults: {
        arrow: {highlight: false, fixed: true,
                withLabel: true,  strokeColor: JXG.palette.black,
                label: {anchorX: 'middle', anchorY: 'middle', offset: [-60, -20]}},
        segment: {withLabel: false, dash: 2,  strokeColor: JXG.palette.black},
        point: {size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
                withLabel: false, highlightFillOpacity: 0.5},
        angle: {withLabel: true, radius: 1.5, strokeColor: JXG.palette.black,
                fillColor: JXG.palette.black, fillOpacity: 0,
                label: {strokeColor: JXG.palette.black}},
    },
}];
initBoard('angle-vect', attrs, board => {
  const A = board.create('point', [7, 2]);
  const B = board.create('point', [3, 5]);
  const O = board.create('point', [0, 0], {size: 0, fixed: true});
  const u = board.create('arrow', [O, A],
    {name: '\\(\\vec{u}\\)',
    label: {position: '0.5fr right', offset: [0, 0]}});
  const v = board.create('arrow', [O, B], {
    name: '\\(\\vec{v}\\)',
    label: {position: '0.5fr left', offset: [-5, 5]}});
  board.create('segment', [A, B]);
  board.create('angle', [A, O, B],
    {name: '\\(\\varphi\\)',
    label: {offset: [-5, -5]}});
});
</script>

### Exemple {num2}`exemple`

Soient les deux vecteurs $\vec{u} = \begin{pmatrix} 7\\2 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 3\\ 5 \end{pmatrix}$.

Déterminez l'angle aigu $\varphi$ formé par les deux vecteurs.

D'après la définition du produit scalaire:

$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 = 7 \cdot 3 + 2 \cdot 5 = 21 + 10 = 31$

D'après le théorème précédent:

````{math}
\vec{u} \cdot \vec{v} &= \| \vec{u} \| \cdot \| \vec{v} \| \cdot \cos(\varphi) \\
&= \sqrt{7^2 + 2^2} \cdot \sqrt{3^2 + 5^2} \cdot \cos(\varphi) \\
&= \sqrt{49 + 4} \cdot \sqrt{9 + 25} \cdot \cos(\varphi) \\
&= \sqrt{53} \cdot \sqrt{34} \cdot \cos(\varphi) \\
&= \sqrt{53  \cdot 34} \cdot \cos(\varphi) \\
&= \sqrt{1802} \cdot \cos(\varphi)
````

Des deux égalités ci-dessus, nous déduisons:

```{math}
 \sqrt{1802} \cdot \cos(\varphi) &= 31 \\
 \cos(\varphi) &= \dfrac{31}{\sqrt{1802}} \\
 \varphi &= cos^{-1}\left(\dfrac{31}{\sqrt{1802}}\right) \simeq 43.1^\circ
````

````{admonition} Théorème
:class: note
Dans un repère orthonormé, deux vecteurs $\vec{u}$ et $\vec{v}$ sont
orthogonaux si, et seulement si, leur produit scalaire est nul:

```{math}
:class: align-center
\vec{u} \perp \vec{v} \quad \iff \quad \vec{u} \cdot \vec{v} = 0
```
````

### Exemple {num2}`exemple`

Soient les deux vecteurs $\vec{u} = \begin{pmatrix} -3\\4 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 8\\6  \end{pmatrix}$.

$\vec{u}$ et $\vec{v}$ sont orthogonaux, car

$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 = -3 \cdot 8 + 4 \cdot 6 = -24 + 24 = 0$

### Exemple {num2}`exemple`

Soient les deux vecteurs $\vec{u} = \begin{pmatrix} 5\\-1 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 2\\z  \end{pmatrix}$.

Cherchez $z$ pour que $\vec{u}$ et $\vec{v}$ soient orthogonaux:

```{math}
\vec{u} \cdot \vec{v} &= 0\\
u_1v_1 + u_2v_2 &= 0 \\
5 \cdot 2 + (-1) \cdot z &= 0\\
10 - z &= 0\\
10 &= z
```


## Vecteur orthognonal

````{admonition} Théorème
:class: note
Soit $\vec{u}$ un vecteur non nul du plan vectoriel muni d'une base orthonormée,
avec $\vec{u} = \begin{pmatrix} u_1\\ u_2 \end{pmatrix}$

```{math}
:class: align-center
\vec{v} \perp \vec{u} \quad \iff \quad \vec{v} =  \lambda \cdot \begin{pmatrix} -u_2\\ u_1 \end{pmatrix}
\qquad \qquad  \text{ avec } \lambda \in \mathbb{R^*}
```
````

### Exemple {num2}`exemple`

Soit le vecteur $\vec{u} = \begin{pmatrix} 4\\ -3 \end{pmatrix}$.

Cherchez un vecteur orthogonal à $\vec{u}$.

D'après le théorème précédent:

$\vec{v} =  \lambda \cdot \begin{pmatrix} -(-3)\\ 4 \end{pmatrix} =
\lambda \cdot \begin{pmatrix} 3\\ 4 \end{pmatrix}$ avec $\lambda \in \mathbb{R^*}$

Avec $\lambda = 1$, $\begin{pmatrix}4\\ -3 \end{pmatrix} \perp \begin{pmatrix} 3\\ 4 \end{pmatrix}$




````{admonition} Théorème
:class: note
Soient deux droites $d_1$ de pente $m_1$ et $d_2$ de pente $m_2$.

```{math}
:class: align-center
d_1 \perp d_2 \iff m_1 \cdot m_2 = -1
```
````

## Projection orthogonale

````{admonition} Définition
:class: note
La **projection orthogonale** d'un point $P$ sur une droite $d$ est le point
$P'$ de $d$ tel que le segment $PP'$ soit perpendiculaire à $d$.
```{jsxgraph} projection
:style: width: 50%; border: none;
```
````

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingbox: [-1, 6, 8, -0.5],
    axis: false, grid: false,
    defaults: {
        line: {highlight: false, withLabel: true, fixed: true,
              strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {withLabel: true, size: 1, label: {anchorY:'top'}},
        angle: {highlight: false, withLabel: false, radius: 0.3,
                strokeColor: JXG.palette.black,
                fillColor: JXG.palette.black, fillOpacity: 0},
    },
}];
initBoard('projection', attrs, board => {
  const O = board.create('point', [0,0], {size: 0, withLabel: false});
  const P = board.create('point', [2, 5], {name: `\\(P\\)`});
  const d = board.create('line', [[0, 0], [3,1]], {name: `\\(d\\)`});
  const Pd = board.create('orthogonalprojection', [P, d], {
    whithLabel: true, name: '\\(P\'\\)', label: {offset: [0, -5]}
  });
  board.create('segment', [P, Pd], {
    dash: 3, withLabel: false, fixed: false
  });
  board.create('angle', [P, Pd, O]);
});
</script>


````{admonition} Théorème
:class: note
Dans un repère orthonormé, la **projection orthogonale** d'un vecteur $\vec{u}$
sur un autre vecteur $\vec{v}$ est le vecteur $\vec{u}'$ donné par
```{math}
:class: align-center
\vec{u}' = \frac{\vec{u} \cdot \vec{v}}{\| \vec{v} \|^2} \cdot \vec{v}
```
````

### Exemple {num2}`exemple`

Soient $A(-3;2)$, $B(4;-1)$ et $P(1;5)$ trois points du plan.

Calculez la projection orthogonale $P'$ de $P$ sur la droite $AB$.

Composantes de $\overrightarrow{AB}$:

$\overrightarrow{AB} = \begin{pmatrix} 4\\ -1 \end{pmatrix} - \begin{pmatrix} -3\\ 2 \end{pmatrix} = \begin{pmatrix} 4-(-3)\\ -1-2 \end{pmatrix} = \begin{pmatrix} 7\\ -3 \end{pmatrix}$

Composantes de $\overrightarrow{AP}$:

$\overrightarrow{AP} = \begin{pmatrix} 1\\ 5 \end{pmatrix} - \begin{pmatrix} -3\\ 2 \end{pmatrix} = \begin{pmatrix} 1-(-3)\\ 5-2 \end{pmatrix} = \begin{pmatrix} 4\\ 3 \end{pmatrix}$


Calculez $\overrightarrow{AP'}$ avec le théorème ci-dessus:

```{math}
\overrightarrow{AP'} &= \dfrac{\overrightarrow{AB} \cdot \overrightarrow{AP}}{\| AP \|^2} \cdot \overrightarrow{AB}\\
&= \dfrac{7 \cdot 4 + (-3) \cdot 3}{(\sqrt{7^2 + (-3)^2})^2} \cdot \overrightarrow{AB} \\
&= \dfrac{28 - 9}{49 + 9} \cdot \overrightarrow{AB} \\
&= \dfrac{19}{58} \cdot \overrightarrow{AB} \\
&= \dfrac{19}{58} \cdot \begin{pmatrix} 7\\ -3 \end{pmatrix}  \\
&= \begin{pmatrix} \frac{133}{58}\\ -\frac{57}{58} \end{pmatrix}
```

Trouvez les coordonnées de $P'$:

$\overrightarrow{OP'} = \overrightarrow{OA} + \overrightarrow{AP'} = \begin{pmatrix} -3\\ 2 \end{pmatrix} + \begin{pmatrix} \frac{133}{58}\\ -\frac{57}{58} \end{pmatrix} = \begin{pmatrix} -\frac{41}{58}\\ \frac{59}{58} \end{pmatrix}$

$\implies P'(-\frac{41}{58};\frac{59}{58})$

```{jsxgraph} exemple
:style: width: 100%; border: none;
```

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingbox: [-8, 10, 10, -2],
    axis: false, grid: true,
    defaults: {
        arrow: {highlight: false, fixed: true,
                withLabel: true,  strokeColor: JXG.palette.black,
                label: {anchorX: 'middle', anchorY: 'middle',
                        position: '0.5fr left', offset: [5, -10]}},
        segment: {highlight: false, withLabel: false, dash: 2,
                strokeColor: JXG.palette.black},
        line: {highlight: false, fixed: true,
              withLabel: false,  strokeColor: JXG.palette.black},
        point: {size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
                withLabel: true, highlightFillOpacity: 0.5},
        angle: {withLabel: false, strokewidth: 1, radius: 0.3, strokeColor: JXG.palette.black,
                fillColor: JXG.palette.black, fillOpacity: 0},

    },
}];
initBoard('exemple', attrs, board => {
  const O = board.create('point', [0,0], {name: `\\(0\\)`, fixed: true,
            size: 1, strokewidth: 1, fillOpacity: 1, label: {offset: [-10, 10]}});
  const A = board.create('point', [-3,2], {name: `\\(A\\)`, label: {offset: [-10, 10]}});
  const B = board.create('point', [4, -1], {name: `\\(B\\)`, label: {offset: [-10, 10]}});
  const P = board.create('point', [1, 5], {name: `\\(P\\)`, label: {offset: [0,10]}});
  board.create('line', [A, B], {dash: 3});
  const AB = board.create('arrow', [A, B], {name: `\\(\\overrightarrow{AB}\\)`});
  const AP = board.create('arrow', [A, P], {name: `\\(\\overrightarrow{AP}\\)`, strokeColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}});
  const OA = board.create('arrow', [O, A], {name: `\\(\\overrightarrow{OA}\\)`, strokeColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}});
  const Pd = board.create('orthogonalprojection', [P, AB], {
    whithLabel: true, name: '\\(P\'\\)', fixed: true,
    size: 1, strokewidth: 1, fillOpacity: 1,  label: {offset: [-5, -15]}
  });
  const APd = board.create('arrow', [A, Pd], {name: `\\(\\overrightarrow{AP'}\\)`, strokeColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}});
  const OPd = board.create('arrow', [O, Pd], {name: `\\(\\overrightarrow{OP'}\\)`, strokeColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}});
  board.create('segment', [P, Pd], {
    dash: 3, withLabel: false
  });
  board.create('angle', [P, Pd, A]);
});
</script>

