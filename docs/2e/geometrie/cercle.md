% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cercle

```{metadata}
subject: "Mathématiques 2e année"
```

## Équation du cercle

````{admonition} Définition
:class: note
Dans un repère orthonormé, le cercle $\Gamma$ de centre $C(x_0 ; y_0)$ et de
rayon $r > 0$ est l'ensemble des points $P(x ; y)$ du plan situés à la distance
$r$ du centre $C$.

```{math}
:class: align-center
P \in \Gamma \iff \| \overrightarrow{CP} \| = r.
```

L'équation cartésienne canonique du cercle est de la forme:

```{math}
:class: align-center
\Gamma: (x - x_0)^2 + (y-y_0)^2 = r^2
```

L'équation développée est de la forme:
```{math}
:class: align-center
\Gamma: x^2 + y^2 + ax + by + c = 0
```
````

```{jsxgraph} def-cercle
:style: width: 40%; border: none;
```

### Exemple {num2}`exemple`

Le cercle centré en $C(1; 2)$ et de rayon $4$ a pour équation cartésienne
canonique

$$(x - 1)^2 + (y - 2)^2 = 4^2 \implies (x - 1)^2 + (y - 2)^2 = 16$$

L'équation développée est

$$
(x - 1)^2 + (y - 2)^2 &= 16\\
x^2 - 2x + 1 + y^2 - 4y + 4 &= 16\\
x^2 + y^2 - 2x - 4y - 11 &= 0
$$

### Exemple {num2}`exemple`

Déterminez le centre et le rayon du cercle dont l'équation cartésienne est
$x^2 + y^2 + 6x - 2y + 14 = 0$.

Pour cela, il faut utiliser la complétition du carré.

$$
x^2 + y^2 + 6x - 2y + 6 &= 0 \qquad &|& \text{ réarranger}\\
x^2 + 6x + ...  + y^2 - 2y + ... + 6 &= 0 \qquad &|& \text{ compléter les carrés}\\
x^2 + 6x + 9 {\color{red} - 9}  + y^2 - 2y + 1 {\color{red} - 1} + 6 &= 0\\
(x^2 + 6x + 9) - 9  + (y^2 - 2y + 1) - 1 + 6 &= 0 \qquad &|& \text{ factoriser}\\
(x^2 + 3)^2 - 9  + (y^2 - 1)^2 - 1 + 6 &= 0 \qquad &|& \text{ réduire}\\
(x^2 + 3)^2   + (y^2 - 1)^2  - 4 &= 0 \qquad &|& + 4\\
(x^2 {\color{blue}+ 3})^2   + (y^2 {\color{green}- 1})^2 &= {\color{violet}4} \qquad &|& \text{ pour le rayon prendre la racine}
$$

Le centre est $C({\color{blue}-3}; {\color{green}1})$ et le rayon est de ${\color{violet}2}$.

## Position relative d'une droite et d'un cercle

```{admonition} Propriétés
- Si $\delta(C,d) < r$, la droite $d$ coupe le cercle $\Gamma$ et il y a deux
  points d'intersection $I_1$ et $I_2$.
- Si $\delta(C,d) = r$, la droite $d$ est tangente au cercle $\Gamma$ en un
  point de contact qui forme l'unique point d'intersection $T$.
- Si $\delta(C,d) > r$, la droite $d$ est extérieure au cercle $\Gamma$, ils
  n'ont aucun point commun.
```

````{list-grid}
:style: grid-template-columns: 1fr 1fr 1fr;
- # $\delta(C,d) < r$
  ```{jsxgraph} intersection1
  :style: width: 90%; border: none;
  ```
- # $\delta(C,d) = r$
  ```{jsxgraph} intersection2
  :style: width: 90%; border: none;
  ```
- # $\delta(C,d) > r$
  ```{jsxgraph} intersection3
  :style: width: 90%; border: none;
  ```
````

### Exemple {num2}`exemple`

Soient le cercle d'équation $\Gamma: (x + 2)^2 + (y - 1) = 16$ et la droite
d'équation $d: x + y -3 = 0$, calculez la distance de la droite $d$ au centre
du cercle $C$.

Le cercle est de centre $C(-2; 1)$ et de rayon 4.

$$
\delta(C, d) &= \dfrac{|-2 + 1 -3|}{\sqrt{1^2 + 1^2}}\\
&= \dfrac{|-4|}{\sqrt{2}}\\
&= \dfrac{4}{\sqrt{2}} \cdot \dfrac{\sqrt{2}}{\sqrt{2}}\\
&= \dfrac{4\sqrt{2}}{2} = 2\sqrt{2} \simeq 2.83
$$

$\delta(C, d) < 4$, le droite coupe le cercle en deux points.


### Exemple {num2}`exemple`

Calculez les points d'intersection du cercle d'équation
$\Gamma: (x + 2)^2 + (y - 1) = 16$ et de la droite d'équation
$d: x - 2y + 8 = 0$.

$$
\left\{
\begin{aligned}
     x + y - 3 &=  0  \\
     (x + 2)^2 + (y - 1)^2 &=  16
\end{aligned}
\right.
\Longleftrightarrow
\left\{
\begin{aligned}
     y &=  -x + 3  \\
     (x + 2)^2 + (-x + 3 - 1)^2 &=  16
\end{aligned}
\right.
$$

$$
(x + 2)^2 + (-x + 3 - 1)^2 &=  16\\
(x + 2)^2 + (-x + 2)^2 &=  16\\
x^2 + 4x + 4 + x^2 - 4x + 4 &=  16\\
2x^2 + 8 &=  16\\
2x^2 - 8 &=  0\\
2(x^2 - 4) &=  0\\
2(x^2 - 4) &=  0 \implies x_{1,2} = \pm 2
$$

$y_1 = -2 + 3 = 1 \implies I_1(2; 1)$<br>
$y_2 = -(-2) + 3 = 5 \implies I_2(-2; 5)$<br>


## Tangente à un cercle

````{admonition} Définition
:class: note
L'équation de la  tangente au cercle $\Gamma$ de centre $C(x_0 ; y_0)$ et de
rayon $r > 0$ au point $T(x_1; y_1)$ est donnée par

```{math}
:class: align-center
(x_1-x_0)(x-x_0) + (y_1-y_0)(y-y_0) = r^2
```
````

```{jsxgraph} def-tangente
:style: width: 80%; border: none;
```

### Exemple {num2}`exemple`

Soit le cercle $\Gamma: (x + 2)^2 + (y - 4)^2 = 25$, calculez la droite
tangente à ce cercle au point $T({\color{blue}2}; {\color{green}1})$.

Le centre du cercle est $C(-2; 4)$.

Selon la définition ci-dessus:

$$
({\color{blue}2} - (-2))(x - (-2)) + ({\color{green}1} - 4)(y - 4) &= 25\\
4(x + 2) - 3(y - 4) &= 25\\
4x + 8 - 3y + 12 &= 25\\
4x - 3y - 5 &= 0
$$

L'équation de la tangente au cercle au point $T(2; 1)$ est $4x - 3y - 5 = 0$.

<script type="module">
const {attrs, initBoard, JXG} = await tdoc.import('jsxgraph.js');

function cercle(board) {
  const r = 3;
  const O = board.create('point', [0, 0], {
    name: `\\(C(x_0;y_0)\\)`,
    label: {offset: [-5, -5]}, fixed: true,
  });
  const c = board.create('circle', [O, r], {
    name: `\\(\\Gamma\\)`, label: {offset: [5, 5]}, fixed: true,
  });
  board.create('segment', [O, [r, 0]], {dash: 3,
    name: `\\(r\\)`, label: {offset: [0, 10]},
  });
  return c;
}

attrs.page = [attrs.screen, {
    boundingbox: [-4.5, 4.5, 4.5, -4.5],
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    axis: false, grid: false,
    defaults: {
        line: {highlight: false, fixed: true, withLabel: true,
                strokeColor: JXG.palette.black, withLabel: true, strokeWidth: 2
              },
        point: {highlight: false, fixed: true, withLabel: true, size: 1,
                label: {anchorY:'top', anchorx: 'middle'}
              },
        angle: {highlight: false, fixed: true, withLabel: false,
                strokeColor: JXG.palette.black, radius: 0.3,
                fillColor: JXG.palette.black, fillOpacity: 0
              },
        circle: {highlight: false, fixed: true, withLabel: true,
                  strokeColor: JXG.palette.black,
                  label: {strokeColor: JXG.palette.black}
              },
    },
}];

initBoard('def-cercle', [attrs.nonInteractive, attrs.page], board => {
  const c = cercle(board);
  board.create('point', [3, 0], {
    name: `\\(P\\)`, label: {offset: [10, 10]},
  });
});

initBoard('intersection1', [attrs.nonInteractive, attrs.page], board => {
  const c = cercle(board);
  const d = board.create('line', [[-2, 1.5], [3, -1]], {
    name: `\\(d\\)`, label: {offset: [0, 0]},
  });
  board.create('intersection', [c, d, 1], {
    name: `\\(I_1\\)`, label: {offset: [-16, 5]},
  });
  board.create('intersection', [c, d, 0], {
    name: `\\(I_2\\)`, label: {offset: [5, -5]},
  });
});

initBoard('intersection2', [attrs.nonInteractive, attrs.page], board => {
  const c = cercle(board);
  const x = -1;
  const y = Math.sqrt(3 * 3 - x * x);
  const T = board.create('point', [x, y], {
    name: `\\(T\\)`, label: {offset: [0, 20]},
  });
  const r = board.create('segment', [[0, 0], T], {dash: 3,
    name: `\\(r\\)`, label: {offset: [10, 0]},
  });
  const d = board.create('perpendicular', [r, T], {
    name: `\\(d\\)`, label: {offset: [0, 0]},
  });
  board.create('angle', [d, r, [-3,2.5], [0,0]]);
});

initBoard('intersection3', [attrs.nonInteractive, attrs.page], board => {
  const c = cercle(board);
  const d = board.create('line', [[-3, 2], [0, 4]], {
    name: `\\(d\\)`, label: {offset: [0, 0]},
  });
});

initBoard('def-tangente', [attrs.page, {
  boundingbox: [-8, 5, 8, -4],
}], board => {
  const rayon = 3;
  const O = board.create('point', [0, 0], {
    name: `\\(C\\)`,
    label: {offset: [-5, -5]}, fixed: true,
  });
  const c = board.create('circle', [O, rayon], {
    name: `\\(\\Gamma\\)`, label: {offset: [5, 5]}, fixed: true,
  });
  let T = board.create('glider', [-1, 2, c], {
    highlight: true, fixed: false,
    name: `\\(T\\)`, label: {offset: [-15, 15]},
    size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
    highlightFillOpacity: 0.5, showInfobox: false,
  });
  const r = board.create('segment', [[0, 0], T], {dash: 3,
    name: `\\(r\\)`, label: {offset: [10, 0]},
  });
  const d = board.create('perpendicular', [r, T], {
    name: `\\(d\\)`, label: {position: '0.1fr left', offset: [0, 0]},
  });
  board.create('angle', [d, r, [-3,2.5], [0,0]]);
});
</script>

