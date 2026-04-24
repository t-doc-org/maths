% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Questions métriques dans le plan

```{metadata}
subject: "Mathématiques 2e année"
```

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


<script type="module">
const {initBoard, JXG, nonInteractive, screen} =
    await tdoc.import('jsxgraph.js');
initBoard('distance', [screen, {
    boundingbox: [-3, 5, 12, -2],
    axis: false, grid: false,
    defaults: {
        line: {
          highlight: false, fixed: true, withLabel: false,
          strokeColor: JXG.palette.black,
        },
        point: {
          size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
          withLabel: false, highlightFillOpacity: 0.5, showInfobox: false,
          label: {anchorX: 'middle', anchorY: 'top'}
        },
        angle: {
          highlight: false, withLabel: false, strokewidth: 1, radius: 0.3,
          strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
          fillOpacity: 0,
        },
        arrow: {
          highlight: false, fixed: true, withLabel: true,
          strokeColor: JXG.palette.black,
          label: {position: '0.4fr left'}
        },
        segment: {
            highlight: false, fixed: true, withLabel: true,
            strokeColor: JXG.palette.black,
        },
        orthogonalprojection: {
            highlight: false, fixed: true, withLabel: true,
            strokeColor: JXG.palette.black,
        },
    },
}], board => {
  const A = board.create('point', [0, 0], {
    withLabel: true, name: `\\(A\\)`,
    label: {offset: [0, 0]}
    });
  const P = board.create('point', [5, 2], {withLabel: true, name: `\\(P\\)`});
  const d = board.create('line', [A, [3, -0.5]], {
    name: '\\(d\\)', withLabel: true,
    label: {
        anchorX: 'middle', anchorY: 'top', position: '0.02fr left',
      },
  });
  const AP = board.create('arrow', [A, P], {withLabel: false});
  const Pd = board.create('orthogonalprojection', [P, d], {
    name: '\\(P\'\\)', label: {offset: [0, -5]}
  });
  board.create('segment', [P, Pd], {
    whithLabel: true, name: '\\(\\delta(P;d)\\)', label: {offset: [5, -5]}
  });
  board.create('angle', [P, Pd, A]);
  const N1 = board.create('point', [10, 1], {size: 0});
  const N2 = board.create('orthogonalprojection', [N1, d], {
    size: 0, withLabel: false
    });
  board.create('arrow', [N2, N1], {
    whithLabel: true, name: '\\(\\vec{n}\\)',
  });
});
initBoard('bissectrices', [screen, nonInteractive, {
    boundingbox: [-3, 5, 8, -2],
    axis: false, grid: false,
    defaults: {
        line: {withLabel: true, strokeColor: JXG.palette.black, strokeWidth: 2},
        point: {withLabel: false, size: 1,
            label: {anchorY:'top', anchorx: 'middle'}
        },
        angle: {withLabel: false, radius: 0.3, strokeColor: JXG.palette.black,
                fillColor: JXG.palette.black, fillOpacity: 0},
    },
}], board => {
  const O = board.create('point', [0, 0], {size: 0});
  const A = board.create('point', [-2, 0.3], {size: 0});
  const B = board.create('point', [-2, -1], {size: 0});
  const C = board.create('point', [4, -0.6], {size: 0});
  const d1 = board.create('line', [O, A], {
    name: '\\(d_1\\)', label: {offset: [0, 10]}
  });
  const d2 = board.create('line', [O, B], {
    name: '\\(d_2\\)', label: {offset: [0, -5]}
  });
  const b1 = board.create('bisector', [A, O, B], {
    dash: 3, name: '\\(b_1\\)', label: {offset: [0, 10]}
  });
  const b2 = board.create('bisector', [B, O, C], {
    dash: 3, name: '\\(b_2\\)', label: {position: '0.1fr right', offset: [15, 0]}
  });
  const l = board.create('line', [[5, 0], [4, 4]], {
    strokeWidth: 0, withLabel: false
  });
  const P = board.create('intersection', [b1, l], {
    withLabel: true, name: '\\(P\\)', label: {offset: [8, 0]}
  });
  const Pd1 = board.create('orthogonalprojection', [P, d1], {size: 0});
  const l1 = board.create('segment', [P, Pd1], {withLabel: false});
  board.create('ticks', [l1], {ticksDistance: 0.75, face: '|', minorTicks: 0});
  board.create('angle', [P, Pd1, O]);
  const Pd2 = board.create('orthogonalprojection', [P, d2], {size: 0});
  const l2 = board.create('segment', [P, Pd2], {withLabel: false});
  board.create('ticks', [l2], {ticksDistance: 0.75, minorTicks: 0});
  board.create('angle', [O, Pd2, P]);
});
</script>
