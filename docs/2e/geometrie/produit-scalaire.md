% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Produit scalaire et angles de deux vecteurs

## Théorie

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/scalaire.xopp>`
```

### Angle de deux vecteurs

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

```{container} frame noprint
# Exemple {num2}`exemple`
Soient les deux vecteurs $\vec{u} = \begin{pmatrix} 7\\2 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 3\\ 5 \end{pmatrix}$. Calculez le produit scalaire de
$\vec{u}$ et $\vec{v}$.

$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 = 7 \cdot 3 + 2 \cdot 5 = 21 + 10 = 31$
```

````{admonition} Théorème
:class: note
Dans un repère orthonormé,

```{math}
:class: align-center
\cos(\varphi) = \dfrac{\vec{u} \cdot \vec{v}}{\| \vec{u} \| \cdot \| \vec{v} \|}
```
```{jsxgraph} angleVect
:style: width: 50%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = {
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  grid: true,
  defaults: {
    point: {
      size: 8, strokewidth: 0, fillOpacity: 0,
      highlight: true, highlightStrokeWidth: 0,
      withLabel: false, highlightFillOpacity: 0.7,
    },
    angle: {radius: 1},
  },
};
render.angleVect = el => {
  return initBoard(el, [attrs.screen, battrs, {
    boundingbox: [-2, 6, 9, -2],
    axis: false,
    defaults: {
      arrow: {label: {distance: 2}},
    },
  }], board => {
    const A = board.create('point', [7, 2], {fixed: false});
    const B = board.create('point', [3, 5], {fixed: false});
    const O = board.create('point', [0, 0], {highlight: false});
    const u = board.create('arrow', [O, A], {
      name: '\\(\\vec{u}\\)', label: {position: '0.5fr right'}});
    const v = board.create('arrow', [O, B], {name: '\\(\\vec{v}\\)'});
    board.create('angle', [A, O, B], {name: '\\(\\varphi\\)'});
  });
};
render.demoAngle = el => {
  return initBoard(el, [attrs.screen, battrs, {
    boundingbox: [-1, 4, 6, -1],
    defaultAxes: {
      x: {ticks: {
        drawLabels: false, insertTicks: false,
        ticksDistance: 1, minorTicks: 0,
      }},
      y: {ticks: {
        drawLabels: false, insertTicks: false,
        ticksDistance: 1, minorTicks: 0,
      }},
    },
    defaults: {
      arrow: {label: {position: '0.5fr right'}},
      point: {withLabel: true},
    },
  }], board => {
    const A = board.create('point', [5, 1], {
      fixed: false, name: `\\(A(a_1, a_2)\\)`, label: {offset: [-20, -15]},
    });
    const B = board.create('point', [2, 3], {
      fixed: false, name: `\\(B(b_1, b_2)\\)`, label: {offset: [-5, 10]},
    });
    const O = board.create('point', [0, 0], {
      highlight: false,  name: `\\(O\\)`, label: {offset: [-17, -17]},
    });
    board.create('arrow', [O, A], {
      name: `\\(\\overrightarrow{OA}\\)`,
    });
    board.create('arrow', [O, B], {
      name: `\\(\\overrightarrow{OB}\\)`, label: {position: '0.5fr left'}
    });
    board.create('arrow', [A, B], {
      name: `\\(\\overrightarrow{AB}\\)`, dash: 3,
    });
    board.create('angle', [A, O, B], {name: '\\(\\varphi\\)'});
  });
};
</script>

`````{admonition} Démonstration
:class: attention, dropdown

````{list-grid}
:style: grid-template-columns: 5fr 4fr
- Théorème du Cosinus dans le triangle $OAB$:

  $\|\overrightarrow{AB}\|^2 = \|\overrightarrow{OA}\|^2 + \|\overrightarrow{OB}\|^2 - 2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\| \cdot \cos(\varphi)$

- ```{jsxgraph} demoAngle
  :style: width: 90%; border: none;
  ```
````

```{math}
\cos(\varphi) &= \dfrac{\|\overrightarrow{OA}\|^2 + \|\overrightarrow{OB}\|^2 - \|\overrightarrow{AB}\|}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{\left(\sqrt{a_1^2 + a_2^2}\right)^2 + \left(\sqrt{b_1^2 + b_2^2}\right)^2 - \left(\sqrt{(b_1-a_1)^2 + (b_2-a_2)^2}\right)^2}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{a_1^2 + a_2^2 + b_1^2 + b_2^2 - ((b_1-a_1)^2 + (b_2-a_2)^2)}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{a_1^2 + a_2^2 + b_1^2 + b_2^2 - (b_1^2 - 2a_1b_1 + a_1^2 + b_2^2 - 2a_2b_2 + a_2^2)}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{a_1^2 + a_2^2 + b_1^2 + b_2^2 - b_1^2 + 2a_1b_1 - a_1^2 - b_2^2 + 2a_2b_2 - a_2^2}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{2a_1b_1 + 2a_2b_2}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{2(a_1b_1 + a_2b_2)}{2 \cdot \|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{a_1b_1 + a_2b_2}{\|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
&= \dfrac{\overrightarrow{OA} \cdot \overrightarrow{OB}}{\|\overrightarrow{OA}\| \cdot \|\overrightarrow{OB}\|}\\
```

`````

````{container} frame noprint
# Exemple {num2}`exemple`

Soient les deux vecteurs $\vec{u} = \begin{pmatrix} 7\\2 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 3\\ 5 \end{pmatrix}$.

Déterminez l'angle aigu $\varphi$ formé par les deux vecteurs.

D'après le théorème précédent:

```{math}
\cos(\varphi) &= \dfrac{\vec{u} \cdot \vec{v}}{\| \vec{u} \| \cdot \| \vec{v} \|}\\
&= \dfrac{7 \cdot 3 + 2 \cdot 5}{\sqrt{7^2 + 2^2} \cdot \sqrt{3^2 + 5^2}}\\
&= \dfrac{21 + 10}{\sqrt{49 + 4} \cdot \sqrt{9 + 25}}\\
&= \dfrac{31}{\sqrt{53} \cdot \sqrt{34}}\\
&= \dfrac{31}{\sqrt{53  \cdot 34}}\\
&= \dfrac{31}{\sqrt{1802}}\\
\varphi &= \cos^{-1}\left(\dfrac{31}{\sqrt{1802}}\right) \simeq 43.1^\circ
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-scalaire-ex1>`,
{numref}`exercice %s<exercice:2-scalaire-ex2>` et
{numref}`exercice %s<exercice:2-scalaire-ex3>`.
```

{.allow-break-inside}
### Vecteur orthogonal

````{admonition} Théorème
:class: note
Dans un repère orthonormé, deux vecteurs $\vec{u}$ et $\vec{v}$ sont
orthogonaux si, et seulement si, leur produit scalaire est nul:

```{math}
:class: align-center
\vec{u} \perp \vec{v} \quad \iff \quad \vec{u} \cdot \vec{v} = 0
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

Soient les deux vecteurs $\vec{u} = \begin{pmatrix} -3\\4 \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} 8\\6  \end{pmatrix}$.

$\vec{u}$ et $\vec{v}$ sont orthogonaux, car

$\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 = -3 \cdot 8 + 4 \cdot 6 = -24 + 24 = 0$
```

````{container} frame noprint
# Exemple {num2}`exemple`

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
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-scalaire-ex4>` et
{numref}`exercice %s<exercice:2-scalaire-ex5>`.
```

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

````{admonition} Démonstration
:class: attention, dropdown

1.  Montrons $\vec{v} \perp \vec{u} \implies \vec{v} =  \lambda \cdot \begin{pmatrix} -u_2\\ u_1 \end{pmatrix}$:

    ```{math}
    \vec{v} \perp \vec{u} \quad &\implies \quad \vec{v} \cdot \vec{u} = 0 \\
    &\implies \quad v_1u_1 + v_2u_2 = 0 \\
    &\implies \quad  v_1u_1 = -v_2u_2 \quad (1)\\
    &\implies \quad v_1 = -\dfrac{v_2u_2}{u_1} = \dfrac{v_2}{u_1} \cdot (-u_2) \text{ et }
    v_2 = - \dfrac{v_1u_1}{u_2} = - \dfrac{v_1}{u_2} \cdot u_1 \\
    &\implies \quad \text{De (1), } \dfrac{v_2}{u_1} = - \dfrac{v_1}{u_2} = \lambda \\
    &\implies \quad v_1 = \lambda \cdot (-u_2) \text{ et }
    v_2 = \lambda \cdot u_1 \\
    &\implies \quad \vec{v} =  \lambda \cdot \begin{pmatrix} -u_2\\ u_1 \end{pmatrix}
    ```

2.  Montrons  $\vec{v} =  \lambda \cdot \begin{pmatrix} -u_2\\ u_1 \end{pmatrix} \implies \vec{v} \perp \vec{u}$:

    ```{math}
    \vec{v} \cdot \vec{u} = \lambda \cdot \begin{pmatrix} -u_2\\ u_1 \end{pmatrix} \cdot \begin{pmatrix} u_1\\ u_2 \end{pmatrix} = \lambda (-u_2u_1 + u_1u_2) = \lambda \cdot 0 = 0 \\
    ```
    $\implies \vec{v} \perp \vec{u}$
````

```{container} frame noprint
# Exemple {num2}`exemple`

Soit le vecteur $\vec{u} = \begin{pmatrix} 4\\ -3 \end{pmatrix}$.

Cherchez un vecteur orthogonal à $\vec{u}$.

D'après le théorème précédent:

$\vec{v} =  \lambda \cdot \begin{pmatrix} -(-3)\\ 4 \end{pmatrix} =
\lambda \cdot \begin{pmatrix} 3\\ 4 \end{pmatrix}$ avec $\lambda \in \mathbb{R^*}$

Avec $\lambda = 1$, $\begin{pmatrix}4\\ -3 \end{pmatrix} \perp \begin{pmatrix} 3\\ 4 \end{pmatrix}$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-scalaire-ex6>`.
```

````{admonition} Théorème
:class: note
Soient deux droites $d_1$ de pente $m_1$ et $d_2$ de pente $m_2$.

```{math}
:class: align-center
d_1 \perp d_2 \iff m_1 \cdot m_2 = -1
```
````

````{admonition} Démonstration
:class: attention, dropdown

1.  Montrons $d_1 \perp d_2 \implies m_1 \cdot m_2 = -1$:

    Soit $d_1 = \begin{pmatrix}x_1\\ y_1 \end{pmatrix}$

    ```{math}
    d_1 \perp d_2 \quad &\implies \vec{d_2} =  \begin{pmatrix}-y_1\\ x_1 \end{pmatrix}\\
    &\implies m_1 = \dfrac{y_1}{x_1} \text{ et } m_2 = \dfrac{x_1}{-y_1} = -\dfrac{x_1}{y_1}\\
    &\implies m_1 \cdot m_2 = \dfrac{y_1}{x_1}  \cdot \left(-\dfrac{x_1}{y_1}\right) = -1
    ```

2.  Montrons $m_1 \cdot m_2 = -1 \implies d_1 \perp d_2$:

    ```{math}
    m_1 \cdot m_2 = -1 &\implies m_2 = -\dfrac{1}{m_1} = -\dfrac{1}{\dfrac{y_1}{x_1}} = -1 : \dfrac{y_1}{x_1} = -1 \cdot \dfrac{x_1}{y_1} = -\dfrac{x_1}{y_1}\\
    &\implies \vec{d_2} = \begin{pmatrix}-y_1\\ x_1 \end{pmatrix}\\
    &\implies d_1 \perp d_2
    ```
````

### Projection orthogonale

````{admonition} Définition
:class: note
La **projection orthogonale** d'un point $P$ sur une droite $d$ est le point
$P'$ de $d$ tel que le segment $PP'$ soit perpendiculaire à $d$.
```{jsxgraph} projection
:style: width: 50%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.projection = el => {
  return initBoard(el, [attrs.screen, {
    boundingbox: [-1, 6, 8, -0.5],
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    axis: false, grid: false,
    defaults: {
      point: {label: {anchorY:'top'}},
    },
  }], board => {
    const O = board.create('point', [0,0]);
    const P = board.create('point', [2, 5], {
      name: `\\(P\\)`, withLabel: true,
      highlight: true, fixed: false, size: 1, strokewidth: 1,
      highlightStrokeWidth: 14, highlightStrokeOpacity: 0.2,
      highlightStrokeColor: JXG.palette.blue, highlightFillColor: JXG.palette.blue
    });
    const d = board.create('line', [[0, 0], [3,1]], {
      name: `\\(d\\)`, withLabel: true, strokeWidth: 2});
    const Pd = board.create('orthogonalprojection', [P, d], {
      withLabel: true, name: '\\(P\'\\)', label: {offset: [0, -5]},
    });
    board.create('segment', [P, Pd], {
      dash: 3, withLabel: false,
    });
    board.create('angle', [P, Pd, O], {
      withLabel: false, radius: 0.3, fillOpacity: 0,
    });
  });
};
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

`````{admonition} Démonstration
:class: attention, dropdown

````{list-grid}
:style: grid-template-columns: 5fr 4fr
- Supposons que $\varphi < 90^\circ$.

  Par définition:
  ```{math}
  \vec{u} \cdot \vec{v} = \|\vec{u}\| \cdot \|\vec{v}\| \cdot \cos(\varphi)\\
  \implies \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{v}\|} = \|\vec{u}\| \cdot \cos(\varphi) \quad (1)
  ```

  Trigonomie dans le triangle rectangle:
  ```{math}
  \cos(\varphi) = \dfrac{\|\vec{u}'\|}{\|\vec{u}\|}
  \implies \|\vec{u}'\| = \|\vec{u}\| \cdot \cos(\varphi) \quad (2)
  ```

- ```{jsxgraph} demoProj
  :style: width: 90%; border: none;
  ```
````
Des équations (1) et (2), nous obtenons $\|\vec{u}'\| = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{v}\|}$

$\vec{v}$ n'est pas forcément unitaire $\vec{v}_{unitaire} = \dfrac{1}{\|\vec{v}\|} \cdot \vec{v}$

Par construction, $\vec{u}'$ et $\vec{v}$ sont colinéaires (ils ont la même
  direction) et donc:
```{math}
\vec{u}' = \|\vec{u}'\| \cdot \vec{v}_{unitaire} = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{v}\|} \cdot \dfrac{\vec{v}}{\|\vec{v}\|} = \frac{\vec{u} \cdot \vec{v}}{\| \vec{v} \|^2} \cdot \vec{v}
```
`````

````{container} frame noprint
# Exemple {num2}`exemple`

Soient $A(-2;1)$, $B(4;5)$ et $P(-1;6)$ trois points du plan.

Calculez la projection orthogonale $P'$ de $P$ sur la droite $AB$.

Composantes de $\overrightarrow{AB}$:

$\overrightarrow{AB} = \begin{pmatrix} 4\\ 5 \end{pmatrix} - \begin{pmatrix} -2\\ 1 \end{pmatrix} = \begin{pmatrix} 4-(-2)\\ 5-1 \end{pmatrix} = \begin{pmatrix} 6\\ 4 \end{pmatrix}$

Composantes de $\overrightarrow{AP}$:

$\overrightarrow{AP} = \begin{pmatrix} -1\\ 6 \end{pmatrix} - \begin{pmatrix} -2\\1  \end{pmatrix} = \begin{pmatrix} -1-(-2)\\ 6-1 \end{pmatrix} = \begin{pmatrix} 1\\ 5 \end{pmatrix}$

Calculez $\overrightarrow{AP'}$ avec le théorème ci-dessus:

```{math}
\overrightarrow{AP'} &= \dfrac{\overrightarrow{AB} \cdot \overrightarrow{AP}}{\| \overrightarrow{AB}\|^2} \cdot \overrightarrow{AB}\\
&= \dfrac{1 \cdot 6 + 5 \cdot 4}{(\sqrt{6^2 + 4^2})^2} \cdot \overrightarrow{AB} \\
&= \dfrac{6 + 20}{36 + 12} \cdot \overrightarrow{AB} \\
&= \dfrac{26}{52} \cdot \overrightarrow{AB} \\
&= \dfrac{1}{2} \cdot \overrightarrow{AB} \\
&= \dfrac{1}{2} \cdot \begin{pmatrix} 6\\ 4 \end{pmatrix} = \begin{pmatrix} 3\\ 2 \end{pmatrix}
```

Trouvez les coordonnées de $P'$:

$\overrightarrow{OP'} = \overrightarrow{OA} + \overrightarrow{AP'} = \begin{pmatrix} -2\\ 1 \end{pmatrix} + \begin{pmatrix} 3\\ 2 \end{pmatrix} = \begin{pmatrix} 1\\ 3 \end{pmatrix}$

$\implies P'(1;3)$

```{jsxgraph} exemple
:style: width: 100%; border: none;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-scalaire-ex7>`,
{numref}`exercice %s<exercice:2-scalaire-ex8>` et
{numref}`exercice %s<exercice:2-scalaire-ex9>`.
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.exemple = el => {
  return initBoard(el, [attrs.screen, {
    boundingbox: [-8, 8, 10, -2],
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
    axis: false, grid: true,
    defaults: {
      segment: {dash: 2, strokeWidth: 1},
      point: {
        highlight: true, fixed: false, size: 1, strokewidth: 1,
        highlightStrokeWidth: 14, highlightStrokeOpacity: 0.2,
        highlightStrokeColor: JXG.palette.blue, highlightFillColor: JXG.palette.blue
      },
      angle: {
        withLabel: false, radius: 0.3, fillOpacity: 0,
      },
    },
  }], board => {
    const A = board.create('point', [-3,2], {
      name: `\\(A\\)`, label: {offset: [-10, 20]},
    });
    const B = board.create('point', [4, -1], {
      name: `\\(B\\)`, label: {offset: [-10, 20]},
    });
    const P = board.create('point', [1, 5], {
      name: `\\(P\\)`, label: {offset: [0, 10]},
    });
    board.create('line', [A, B], {dash: 3});
    const AB = board.create('arrow', [A, B], {
      name: `\\(\\overrightarrow{AB}\\)`,
      label: {position: '0.55fr right', distance: 2.5},
    });
    const AP = board.create('arrow', [A, P], {
      name: `\\(\\overrightarrow{AP}\\)`, strokeColor: JXG.palette.red,
      label: {strokeColor: JXG.palette.red},
    });
    const Pd = board.create('orthogonalprojection', [P, AB], {
      withLabel: true, name: '\\(P\'\\)', fixed: true, highlight: false,
      size: 1, strokewidth: 1, fillOpacity: 1,  label: {offset: [-10, -20]},
    });
    const APd = board.create('arrow', [A, Pd], {
      name: `\\(\\overrightarrow{AP'}\\)`, strokeColor: JXG.palette.red,
      label: {strokeColor: JXG.palette.red, position: '0.5fr right', distance: 2.5},
    });
    board.create('segment', [P, Pd], {dash: 3});
    board.create('angle', [P, Pd, A]);
  });
};
render.demoProj = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-1, 5, 7, -1],
    axis: false, grid: true,
    defaults: {
      segment: {dash: 2, strokeWidth: 1},
      angle: {
        withLabel: false, radius: 0.3, fillOpacity: 0,
      },
    },
  }], board => {
    const A = board.create('point', [0,0], {
      name: `\\(A\\)`, label: {offset: [-10, 20]},
    });
    const B = board.create('point', [6, 1], {
      name: `\\(B\\)`, label: {offset: [-10, 20]},
    });
    const P = board.create('point', [4, 4], {
      name: `\\(P\\)`, label: {offset: [0, 10]},
    });
    board.create('line', [A, B], {dash: 3});
    const AB = board.create('arrow', [A, B], {
      name: `\\(\\vec{v}\\)`,
      label: {position: '0.55fr right', distance: 2.5},
    });
    const AP = board.create('arrow', [A, P], {
      name: `\\(\\vec{u}\\)`,
    });
    const Pd = board.create('orthogonalprojection', [P, AB], {
      withLabel: false,
    });
    const APd = board.create('arrow', [A, Pd], {
      name: `\\(\\vec{u}'\\)`, strokeColor: JXG.palette.red,
      label: {strokeColor: JXG.palette.red, position: '0.5fr left', distance: 0.5},
    });
    board.create('segment', [P, Pd], {dash: 3});
    board.create('angle', [P, Pd, A]);
    board.create('angle', [B, A, P], {
      withLabel: true, name: '\\(\\varphi\\)', radius: 0.8, fillOpacity: 0.2,
    });
  });
};
</script>

## Exercices

### Exercice {nump}`exercice:2-scalaire-ex1`

Calculez le produit scalaire $\vec{v} \cdot \vec{w}$ et l'angle $\varphi$ des
vecteurs $\vec{v}$ et $\vec{w}$ avec

{.columns-2  .lower-alpha-paren}
1. $\vec{v}=\begin{pmatrix}1\\-1\end{pmatrix}$ et $\vec{w}=\begin{pmatrix}1\\1\end{pmatrix}$
2. $\vec{v}=\begin{pmatrix}2\\1\end{pmatrix}$ et $\vec{w}=\begin{pmatrix}1\\2\end{pmatrix}$
3. $\vec{v}=\begin{pmatrix}1\\-1\end{pmatrix}$ et $\vec{w}=\begin{pmatrix}4\\-3\end{pmatrix}$
4. $\vec{v}=\begin{pmatrix}2\\2\end{pmatrix}$ et $\vec{w}=\begin{pmatrix}1\\2\end{pmatrix}$
5. $\vec{v}=\begin{pmatrix}3\\-4\end{pmatrix}$ et $\vec{w}=\begin{pmatrix}1\\1\end{pmatrix}$

```{block} solution
{.columns-2  .lower-alpha-paren}
1. $\vec{v}\cdot\vec{w}=0$ et $\varphi= 90^\circ$
2. $\vec{v}\cdot\vec{w}=4$ et $\varphi= 36.87^\circ$
3. $\vec{v}\cdot\vec{w}=7$ et $\varphi= 8.13^\circ$
4. $\vec{v}\cdot\vec{w}=6$ et $\varphi= 18.43^\circ$
5. $\vec{v}\cdot\vec{w}=-1$ et $\varphi= 98.13^\circ$
```

### Exercice {nump}`exercice:2-scalaire-ex2`

Déterminez les angles du triangle $ABC$: $A(2;-2)$, $B(4;2)$, $C(-2;5)$.

```{block} solution
$\alpha = 56.31^\circ$, $\beta = 90^\circ$ et $\gamma = 33.69^\circ$
```

### Exercice {nump}`exercice:2-scalaire-ex3`

Quels sont les angles engendrés par le vecteur
$\vec{v} =\begin{pmatrix}4\\-2\end{pmatrix}$ et les axes $Ox$ et $Oy$?

```{block} solution
$\varphi_x = 26.57^\circ$, $\varphi_y = 63.43^\circ$.
```


### Exercice {nump}`exercice:2-scalaire-ex4`

Calculez la valeur de $m$ pour que $\vec{u}$ et $\vec{v}$ soient orthogonaux.

{.columns-2  .lower-alpha-paren}
1. $\vec{u} = \begin{pmatrix}-5\\6\end{pmatrix}$, $\vec{v} = \begin{pmatrix}m\\2\end{pmatrix}$
2. $\vec{u} = \begin{pmatrix}m-6\\4m\end{pmatrix}$, $\vec{v} = \begin{pmatrix}2\\3m-1\end{pmatrix}$

```{block} solution
{.columns-2  .lower-alpha-paren}
1. $m = \dfrac{12}{5}$
2. $m_{1,2} = \dfrac{1 \pm \sqrt{145}}{12}$
```

### Exercice {nump}`exercice:2-scalaire-ex5`

Soient les points $A(2;3)$, $B(7;0)$, $C(11.5;7.5)$ et $D(6.5;10.5)$.
Montrez que le polygone $ABCD$ est un rectangle.

```{block} solution
Il suffit de montrer que $\overrightarrow{AB} = \overrightarrow{DC}$,
$\overrightarrow{AD} = \overrightarrow{BC}$ et que l'un des angles vaut
$90^\circ$.
```

### Exercice {nump}`exercice:2-scalaire-ex6`

Déterminez les composantes des vecteurs $\vec{v}$ de norme $\dfrac{13}{2}$ et
orthogonal à $\vec{u} = \begin{pmatrix}5\\-12\end{pmatrix}$.

```{block} solution
$\vec{v}= \pm\begin{pmatrix}6\\ \frac{5}{2}\end{pmatrix}$
```

### Exercice {nump}`exercice:2-scalaire-ex7`

Soient les points $A$, $B$ et $P$, calculez la projection orthogonale $P'$ du
point $P$ sur la droite $d$ passant par $A$ et $B$, puis déterminez le point
$P''$ symétrique du point $P$ par rapport à la droite $d$.

{.columns-2  .lower-alpha-paren}
1. $A(1;3)$, $B(5;-1)$ et $P(2;6)$
2. $A(1;2)$, $B(3;6)$ et $P(2;1)$
3. $A(10;-2)$, $B(3;5)$ et $P(-4;3)$

```{block} solution
{.columns-2  .lower-alpha-paren}
1. $P'(0;4)$, $P''(-2;2)$
2. $P'(\frac{4}{5};\frac{8}{5})$, $P''(-\frac{2}{5};\frac{11}{5})$
3. $P'(\frac{1}{2};\frac{15}{2})$, $P''(5;12)$
```

### Exercice {nump}`exercice:2-scalaire-ex8`

Déterminez l'aire du triangle $ABC$.

{.columns-2  .lower-alpha-paren}
1. $A(3;-2)$, $B(-1;2)$ et $C(7;5)$
2. $A\left(\dfrac{9}{2};3\right)$, $B\left(6;\dfrac{21}{2}\right)$ et $C\left(12;\dfrac{33}{2}\right)$

```{block} solution
{.columns-2  .lower-alpha-paren}
1.  $22$
2.  $18$
```

### Exercice {nump}`exercice:2-scalaire-ex9`

Dans le plan, soient l'équation d'une droite $d$ et un point$P$ donnés.
Calculez une équation cartésienne de la droite $d'$ perpendiculaire à $d$ et
passant par $P$.

{.columns-2  .lower-alpha-paren}
1. $d: 3x + 2y - 1 = 0$; $P(4;2)$
2. $d: y = -2x + 4$; $P(7;2)$
3. $d: x = 2$; $P(-1;1)$
4. $d: y = 3x - 8$; $P(6;-7)$

```{block} solution
{.columns-2  .lower-alpha-paren}
1. $d': 2x - 3y - 2 = 0$
2. $d': x - 2y - 3 = 0$
3. $d': y = 1$
4. $d': x + 3y + 15 = 0$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
