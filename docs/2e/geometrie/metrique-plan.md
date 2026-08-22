% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Questions métriques dans le plan

## Distance d'un point à une droite

````{admonition} Définition
:class: note
Soient $d$ une droite d'équation $ax + by + c = 0$ et $A$ un point de cette
droite et soit $P(x_0;y_0)$ un point du plan. La distance de $P$ à $d$ est
donnée par

```{math}
:class: align-center
\delta(P;d) = \dfrac{\bigl| \overrightarrow{AP} \cdot \vec{n} \bigr|}{\| \vec{n} \|} = \dfrac{\bigl| ax_0 + by_0 + c \bigr|}{\sqrt{a^2+b^2}},
```
où le vecteur $\vec{n} = \begin{pmatrix} a\\ b \end{pmatrix}$ est un **vecteur
normal** (orthogonal) à $d$.
````

```{jsxgraph} distance
:style: width: 80%; border: none;
```

## Exemple {num2}`exemple`

Soit la droite $d$ d'équation $d: 3x + 4y - 5 = 0$, calculez la distance de la
droite au point $P(-2; 1)$.

$$
\delta(P;d) &= \dfrac{\bigl| ax_0 + by_0 + c \bigr|}{\sqrt{a^2+b^2}} \\
&= \dfrac{\bigl| 3 \cdot (-2) + 4 \cdot 1 - 5 \bigr|}{\sqrt{3^2+4^2}} \\
&= \dfrac{\bigl| -6 + 4 - 5 \bigr|}{\sqrt{9+16}} \\
&= \dfrac{\bigl| -7 \bigr|}{\sqrt{25}} \\
&= \dfrac{7}{5} = 1.4
$$

## Exemple {num2}`exemple`

Soit la droite d sous forme paramétrique
$d: \left\{
    \begin{aligned}
         x &=   3 - \lambda   \\
         y &=  1 + 2\lambda
    \end{aligned}
    \right.
$, calculez la distance de la droite $d$ au point $P(2; 0)$.

$\overrightarrow{OA} = \begin{pmatrix}  3\\ 1 \end{pmatrix}$

$\overrightarrow{AP} = \begin{pmatrix}  2 - 3\\ 0 - 1 \end{pmatrix} = \begin{pmatrix} -1\\ -1 \end{pmatrix}$

$\overrightarrow{d} = \begin{pmatrix}  -1\\ 2 \end{pmatrix}$

Un vecteur normal à $\vec{d}$ est $\vec{n} = \begin{pmatrix}  -d_2\\ d_1 \end{pmatrix} = \begin{pmatrix}  -2\\ -1 \end{pmatrix}$

$$\delta(P;d) &= \dfrac{\bigl| \overrightarrow{AP} \cdot \vec{n} \bigr|}{\| \vec{n} \|} \\
&=\dfrac{\bigl| \begin{pmatrix} -1\\ -1 \end{pmatrix} \cdot \begin{pmatrix}  -2\\ -1 \end{pmatrix} \bigr|}{\sqrt{(-2)^2 + (-1)^2}} \\
&= \dfrac{\bigl| -1 \cdot (-2) + (-1) \cdot (-1)|}{\sqrt{4 + 1}} \\
&= \dfrac{3}{\sqrt{5}} = \dfrac{3\sqrt{5}}{5} \simeq 1.34 \\
$$

## Bissectrices de deux droites

````{admonition} Définition
:class: note
Soient $d_1$ et $d_2$ deux droites sécantes, d'équations
$d_1: a_1x + b_1y + c_1 = 0$ et $d_2: a_2x + b_2y + c_2 = 0$.
Les équations des bissectrices de $d_1$ et $d_2$ sont données par

```{math}
:class: align-center
\dfrac{a_1x + b_1y + c_1}{\sqrt{a_1^2+b_1^2}} = \pm \dfrac{a_2x + b_2y + c_2}{\sqrt{a_2^2+b_2^2}}
```
````

```{jsxgraph} bissectrices
:style: width: 50%; border: none;
```

## Exemple {num2}`exemple`

Soient deux droites $d_1: 4x + 3y + 2 = 0$ et
$d_2: y = -\dfrac{3}{4}x + \dfrac{1}{8}$,
déterminez les équations des bissectrices $b_1$ et $b_2$ de ces deux droites.

Pour appliquer le théorème précédent, il est nécessaire d'utiliser les équations
cartésiennes implicites.

$$
d_2: \quad &y = -\dfrac{3}{4}x + \dfrac{1}{8}\\
&8y = -6x + 1\\
&6x + 8y - 1 = 0
$$

L'équation $b_1$:
$$
\dfrac{4x + 3y + 2}{\sqrt{4^2+3^2}} &= \dfrac{6x + 8y - 1}{\sqrt{6^2+8^2}}\\
\dfrac{4x + 3y + 2}{\sqrt{25}} &= \dfrac{6x + 8y - 1}{\sqrt{100}}\\
\dfrac{4x + 3y + 2}{5} &= \dfrac{6x + 8y - 1}{10}\\
2(4x + 3y + 2) &= 6x + 8y - 1\\
8x + 6y + 4 &= 6x + 8y - 1\\
b_1: \quad\quad 2x - 2y + 5 &= 0
$$

L'équation $b_2$:
$$
\dfrac{4x + 3y + 2}{\sqrt{4^2+3^2}} &= -\dfrac{6x + 8y - 1}{\sqrt{6^2+8^2}}\\
\dfrac{4x + 3y + 2}{\sqrt{25}} &= -\dfrac{6x + 8y - 1}{\sqrt{100}}\\
\dfrac{4x + 3y + 2}{5} &= -\dfrac{6x + 8y - 1}{10}\\
2(4x + 3y + 2) &= -(6x + 8y - 1)\\
8x + 6y + 4 &= -6x - 8y + 1\\
b_2: \quad\quad 14x + 14y + 3 &= 0
$$

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');

attrs.page = [attrs.screen, {
  axis: false, grid: false,
  defaults: {
    point: {label: {anchorX: 'middle', anchorY: 'top'}},
    angle: {withLabel: false, radius: 0.3, fillOpacity: 0},
    segment: {withLabel: false, strokeWidth: 1},
  },
}];

render.distance = el => {
  return initBoard(el, [attrs.page, {
    boundingbox: [-3, 5, 12, -2],
  }], board => {
    const A = board.create('point', [0, 0], {
      withLabel: true, name: `\\(A\\)`,
      label: {offset: [0, 0]},
    });
    const P = board.create('point', [5, 2], {
      withLabel: true, name: `\\(P\\)`,
      highlight: true, fixed: false, size: 1, strokewidth: 1,
      highlightStrokeWidth: 14, highlightStrokeOpacity: 0.2,
      highlightStrokeColor: JXG.palette.blue, highlightFillColor: JXG.palette.blue
    });
    const d = board.create('line', [A, [3, -0.5]], {
      name: '\\(d\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', position: '0.02fr left'},
    });
    const AP = board.create('arrow', [A, P], {withLabel: false});
    const Pd = board.create('orthogonalprojection', [P, d], {
      name: '\\(P\'\\)', label: {offset: [0, -5]},
    });
    board.create('segment', [P, Pd], {
      withLabel: true, name: '\\(\\delta(P;d)\\)', label: {offset: [5, -5]},
    });
    board.create('angle', [P, Pd, A]);
    const N1 = board.create('point', [10, 1], {
      fixed: false, highlight: true,
      size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
      highlightFillOpacity: 0.7,
    });
    const N2 = board.create('orthogonalprojection', [N1, d], {
      size: 0, withLabel: false,
    });
    board.create('arrow', [N2, N1], {
      name: '\\(\\vec{n}\\)', label: {position: '0.4fr right'},
    });
  });
};

render.bissectrices = el => {
  return initBoard(el, [attrs.page, attrs.nonInteractive, {
    boundingbox: [-3, 5, 8, -2],
    axis: false, grid: false,
    defaults: {
      line: {withLabel: true},
      orthogonalprojection: {size: 0, withLabel: false},
    },
  }], board => {
    const O = board.create('point', [0, 0]);
    const A = board.create('point', [-2, 0.3]);
    const B = board.create('point', [-2, -1]);
    const C = board.create('point', [4, -0.6]);
    const d1 = board.create('line', [O, A], {
      name: '\\(d_1\\)', label: {offset: [0, 10]},
    });
    const d2 = board.create('line', [O, B], {
      name: '\\(d_2\\)', label: {offset: [0, -5]},
    });
    const b1 = board.create('bisector', [A, O, B], {
      dash: 3, strokeWidth: 2, name: '\\(b_1\\)', label: {offset: [0, 10]},
    });
    const b2 = board.create('bisector', [B, O, C], {
      dash: 3, strokeWidth: 2, name: '\\(b_2\\)',
      label: {position: '0.1fr right', offset: [15, 0]},
    });
    const l = board.create('line', [[5, 0], [4, 4]], {
      strokeWidth: 0, withLabel: false,
    });
    const P = board.create('intersection', [b1, l], {
      withLabel: true, size: 1, name: '\\(P\\)', label: {offset: [8, 0]},
    });
    const Pd1 = board.create('orthogonalprojection', [P, d1]);
    const l1 = board.create('segment', [P, Pd1]);
    board.create('ticks', [l1],
                 {ticksDistance: 0.75, face: '|', minorTicks: 0});
    board.create('angle', [P, Pd1, O]);
    const Pd2 = board.create('orthogonalprojection', [P, d2]);
    const l2 = board.create('segment', [P, Pd2]);
    board.create('ticks', [l2], {ticksDistance: 0.75, minorTicks: 0});
    board.create('angle', [O, Pd2, P]);
  });
};
</script>
