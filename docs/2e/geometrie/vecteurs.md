% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Vecteurs

```{metadata}
subject: "Mathématiques 2e année"
```

## Notion de vecteurs

```{admonition} Définition
:class: note
Un **vecteur** est un segment de droite orienté (une flèche). Il est défini par
une **longueur** (distance entre l'origine et l'extrémité de la flèche), une
**direction** (représentée par la droite sur laquelle se trouve la flèche) et un
**sens** (sens de la flèche).

Le vecteur dont la norme est $0$ est le vecteur nul, noté $\vec{0}$.

Des vecteurs de même direction sont dits **colinéaires**.
```

### Exemple {num2}`exemple`

Voici plusieurs représentations d'un seul et même vecteur
$\vec{v} = \begin{pmatrix} 3\\ 2\\ \end{pmatrix}$

En effet, ils ont tous la même longueur, la même direction et le même sens.

```{jsxgraph} vecteurs-1
:style: width: 50%;
```

### Exemple {num2}`exemple`

Les vecteurs suivants sont colinéaires, car ils ont tous la même direction.

```{jsxgraph} vecteurs-2
:style: width: 50%;
```

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-5, 5, 4, -2],
    defaults: {
        arrow: {withLabel: true,
                label: {anchorX: 'middle', anchorY: 'middle', offset: [-60, -20]}
        },
    },
}];
initBoard('vecteurs-1', attrs, board => {
    board.create('arrow', [[0, 0], [3,2]], {
        name: `\\(\\vec{v_1}\\)`,
    });
    board.create('arrow', [[-4,-1], [-1,1]], {
        name: `\\(\\vec{v_2}\\)`,
    });
    board.create('arrow', [[-5, 1], [-2,3]], {
        name: `\\(\\vec{v_3}\\)`,
    });
    board.create('arrow', [[-2,2], [1,4]], {
        name: `\\(\\vec{v_4}\\)`,
    });
});
initBoard('vecteurs-2', attrs, board => {
    board.create('arrow', [[0, 0], [3,2]], {
        name: `\\(\\vec{v_1}\\)`,
    });
    board.create('arrow', [[-4,1], [-2.5,2]], {
        name: `\\(\\vec{v_2}\\)`, label: {offset: [-35, -5]}
    });
    board.create('arrow', [[3, 3], [-3,-1]], {
        name: `\\(\\vec{v_3}\\)`, label: {offset: [-130, -60]}
    });
    board.create('arrow', [[-2,4], [-3.5,3]], {
        name: `\\(\\vec{v_4}\\)`, label: {offset: [-35, -5]}
    });
});
</script>

````{admonition} Définition
:class: note
Soient les vecteurs $\vec{u}= \begin{pmatrix} u_1\\ u_2 \end{pmatrix}$ et
$\vec{v}= \begin{pmatrix} v_1\\ v_2 \end{pmatrix}$. Le **déterminant** de
$\vec{u}$ et $\vec{v}$ est le nombre réel

```{math}
:class: align-center
Det(\vec{u}, \vec{v}) = \begin{vmatrix} u_1 & v_1 \\ u_2 & v_2 \end{vmatrix} = u_1v_2 - u_2v_1
```
````

````{admonition} Théorème
:class: note
Soient deux vecteurs $\vec{u}$ et $\vec{v}$.

```{math}
:class: align-center
 \vec{u} \text{ et } \vec{v} \text{ sont colinéaires } \iff Det(\vec{u}, \vec{v}) = 0
```
````

### Exemple {num2}`exemple`

Soient les vecteurs $\vec{u} = \begin{pmatrix} 3 \\2 \\ \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} -6 \\-4 \\ \end{pmatrix}$.

$Det(\vec{u}, \vec{v}) = \begin{vmatrix} 3 & -6 \\ 2 & -4 \end{vmatrix} = 3 \cdot (-4) - 2 \cdot (-6) = -12 - (-12) = 0$

Les deux vecteurs sont donc colinéaires.


```{admonition} Définition
:class: note
Un couple $(\vec{e_1}; \vec{e_2})$ constitué des vecteurs non colinéaires
$\vec{e_1}$ et $\vec{e_2}$ est appelé une **base** du plan vectoriel.
La base est dite **orthonormée** si les vecteurs $\vec{e_1}$ et $\vec{e_2}$ sont
orthogonaux et ont la même norme.

Un repère du plan est un couple $(O,\vec{e_1},\vec{e_2})$, où $O$ est un point
et $(\vec{e_1}; \vec{e_2})$ une base.
Le repère est dit **orthonormé** si la base est orthonormée.
```

````{admonition} Définition
:class: note
Tout vecteur $\vec{v}$ du plan peut être décomposé en deux **composantes**
par rapport à la base $(\vec{e_1};\vec{e_2})$.

```{math}
:class: align-center
\vec{v} = a \cdot \vec{e_1} + b \cdot \vec{e_2} = \begin{pmatrix} a\\ b\\ \end{pmatrix}
```
où $a$ et $b$ sont des nombres réels.
````

### Exemple {num2}`exemple`

$\vec{v} = 3 \cdot \vec{e_1} + 2 \cdot \vec{e_2} = \begin{pmatrix} 3\\ 2\\ \end{pmatrix}$

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   # Base du plan
    ```{jsxgraph} base
    :style: width: 60%;
    ```

-   # Base orthonormée du plan
    ```{jsxgraph} base-orthonormée
    :style: width: 60%;
    ```
````

<script type="module">
const {defaults, initBoard, JXG, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
    boundingBox: [-2, 4, 4, -2],
    axis: false, grid: false,
    defaults: {
        arrow: {withLabel: true, strokeWidth: 2,
                label: {anchorX: 'middle', anchorY: 'middle',
                        position: '0.3fr left'},
        },
        point: {visible: false},
        parallel: {strokeOpacity: 0.1},
    },
}];
initBoard('base', attrs, board => {
    const incl = 6;
    const Ox = board.create('axis', [[0, 0], [incl, 1]], {
        ticks: {drawLabels: false, insertTicks: false, ticksDistance: 0, minorTicks: 0},
    });
    const Oy = board.create('axis', [[0, 0], [1, incl]], {
        ticks: {drawLabels: false, insertTicks: false, ticksDistance: 0, minorTicks: 0},
    });
    const alpha = Math.atan(1/incl);
    const beta = Math.PI/2 - alpha;
    const a = 1;
    const b = 1;
    const e1 = [a * Math.cos(alpha), a * Math.sin(alpha)];
    const e2 = [b * Math.cos(beta), b * Math.sin(beta)];

    for (let i = -3; i < 5; i ++) {
        board.create('parallel', [Ox, [e1[0] + i * e2[0], e1[1] + i * e2[1]]]);
        board.create('parallel', [Oy, [i * e1[0] + e2[0], i * e1[1] +e2[1]]]);
    }

    board.create('arrow', [[0, 0], [e1[0],e1[1]]], {
        name: `\\(\\vec{e_1}\\)`, label: {position: '0.4fr right', offset: [0, -3]}
    });
    board.create('arrow', [[0,0], [e2[0], e2[1]]], {
        name: `\\(\\vec{e_2}\\)`, label: {offset: [-3, 0]}
    });
    board.create('arrow', [[0,0], [3*e1[0]+2*e2[0], 3*e1[1]+2*e2[1]]], {
        name: `\\(\\vec{v}\\)`});
     });
</script>

<script type="module">
const {defaults, initBoard, JXG, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
    boundingBox: [-2, 4, 4, -2],
    defaultAxes: {
        x: {withLabel: false,
            ticks: {drawLabels: false, insertTicks: false,
                    ticksDistance: 1, minorTicks: 0}},
        y: {withLabel: false,
            ticks: {drawLabels: false, insertTicks: false, ticksDistance: 1,
                    minorTicks: 0}},
    },
    defaults: {
        arrow: {withLabel: true, strokeWidth: 2,
                label: {anchorX: 'middle', anchorY: 'middle',
                        position: '0.3fr left'},
        },
    },
}];
initBoard('base-orthonormée', attrs, board => {
    board.create('arrow', [[0, 0], [1,0]], {
        name: `\\(\\vec{e_1}\\)`, label: {position: '0.4fr right', offset: [0, -3]}
    });
    board.create('arrow', [[0,0], [0,1]], {
        name: `\\(\\vec{e_2}\\)`, label: {offset: [-3, 0]}
    });
    board.create('arrow', [[0,0], [3,2]], {name: `\\(\\vec{v}\\)`});

});
</script>

````{admonition} Théorème
:class: note
Soient un repère $(O;\vec{e_1};\vec{e_2})$ du plan et deux points $A(a_1;a_2)$
et $B(b_1;b_2)$. Les composantes du vecteur $\overrightarrow{AB}$ sont

```{math}
:class: align-center
\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} =
\begin{pmatrix} b_1\\ b_2\\ \end{pmatrix} - \begin{pmatrix} a_1\\ a_2\\ \end{pmatrix} &= \begin{pmatrix} b_1 - a_1\\ b_2 - a_2\\ \end{pmatrix}\\
```
````

### Exemple {num2}`exemple`

Soient les points $A(4;-3)$ et $B(0;7)$.

$\overrightarrow{OA} = \begin{pmatrix} 4\\ -3\\ \end{pmatrix}$

$\overrightarrow{OB} = \begin{pmatrix} 0\\ 7\\ \end{pmatrix}$

$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \begin{pmatrix} 0\\ 7\\ \end{pmatrix} - \begin{pmatrix} 4\\ -3\\ \end{pmatrix} = \begin{pmatrix} 0 - 4\\ 7 - (-3)\\ \end{pmatrix} = \begin{pmatrix} -4\\ 10\\ \end{pmatrix}$

$\overrightarrow{BA} = \overrightarrow{OA} - \overrightarrow{OB} = \begin{pmatrix} 4\\ -3\\ \end{pmatrix} - \begin{pmatrix} 0\\ 7\\ \end{pmatrix} = \begin{pmatrix} 4 - 0\\ -3 - 7\\ \end{pmatrix} = \begin{pmatrix} 4\\ -10\\ \end{pmatrix}$

$\overrightarrow{AB} = - \overrightarrow{BA}$



```{admonition} Définition
:class: note
La longueur d'un vecteur $\vec{v}$ est appelée la **norme** du vecteur
$\vec{v}$, notée $||\vec{v}||$.
```

````{admonition} Théorème
:class: note
Soit $\vec{v} = \begin{pmatrix} v_1\\ v_2\\ \end{pmatrix}$.
Dans un repère orthonormé,

```{math}
:class: align-center
\| \vec{v} \| = \sqrt{v_1^2 + v_2^2}
```
````

### Exemple {num2}`exemple`

Soit le vecteur $\vec{v} = \begin{pmatrix} -4\\ 7\\ \end{pmatrix}$

$\| \vec{v} \| = \sqrt{(-4)^2 + 7^2} = \sqrt{16 + 49} = \sqrt{65} \simeq 8.1$


```{admonition} Définition
:class: note
Un **vecteur unitaire** est un vecteur de norme 1.
```

### Exemple {num2}`exemple`

Soient les vecteur $\vec{u} = \begin{pmatrix} 1\\ 0\\ \end{pmatrix}$,
$\vec{v} = \begin{pmatrix} \dfrac{1}{2}\\ \dfrac{\sqrt{3}}{2}\\ \end{pmatrix}$
et $\vec{w} = \begin{pmatrix} 2\\ -3\\ \end{pmatrix}$.

$\vec{u}$ est un vecteur unitaire: $\| \vec{u} \| = \sqrt{1^2 + 0^2} = \sqrt{1} = 1$

$\vec{v}$ est un vecteur unitaire: $\|\vec{v}\| = \sqrt{\left(\dfrac{1}{2}\right)^2 + \left(\dfrac{\sqrt{3}}{2}\right)^2} = \sqrt{\dfrac{1}{4} + \dfrac{3}{4}} = \sqrt{\dfrac{4}{4}} = \sqrt{1} = 1$

$\vec{w}$ n'est pas un vecteur unitaire: $\|\vec{w}\| = \sqrt{2^2 + (-3)^2} = \sqrt{4 + 9} = \sqrt{13} \neq 1$


````{admonition} Définition
:class: note
Soient $\vec{u}$ et $\vec{v}$ des vecteurs dans un repère orthonormé du plan et
$\lambda \in \mathbb{R}$.

```{math}
:class: align-center
\vec{u} + \vec{v} &= \begin{pmatrix} u_1\\ u_2\\ \end{pmatrix} + \begin{pmatrix} v_1\\ v_2\\ \end{pmatrix} &&= \begin{pmatrix} u_1 + v_1\\ u_2 + v_2\\ \end{pmatrix}\\
\lambda \cdot \vec{u} &= \lambda \cdot \begin{pmatrix} u_1\\ u_2\\ \end{pmatrix}
&&= \begin{pmatrix} \lambda u_1\\ \lambda u_2\\ \end{pmatrix}
```
````

### Exemple {num2}`exemple`

Soient les vecteur $\vec{u} = \begin{pmatrix} 4\\ -5\\ \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} -2\\ -3\\ \end{pmatrix}$.

$\vec{u} + \vec{v} = \begin{pmatrix} 4\\ -5\\ \end{pmatrix} + \begin{pmatrix} -2\\ -3\\ \end{pmatrix} = \begin{pmatrix} 4 + (-2)\\ -5 + (-3)\\ \end{pmatrix} = \begin{pmatrix} 2\\ -8\\ \end{pmatrix}$

$-2 \cdot \vec{u} = -2 \cdot \begin{pmatrix} 4\\ -5\\ \end{pmatrix} = \begin{pmatrix} -8\\ 10\\ \end{pmatrix}$


```{admonition} Propriétés de l'addition vectorielle
:class: note
Soient $\vec{u}$, $\vec{v}$ et $\vec{w}$ des vecteurs.

1.  $\vec{u} + \vec{v} = \vec{v} + \vec{u}$
2.  $\vec{u} + \vec{0} = \vec{0} + \vec{u} = \vec{u}$
3.  $\vec{u} + (-\vec{u}) = \vec{0}$
4.  $\big( \vec{u} + \vec{v} \big) + \vec{w} = \vec{u} + \big( \vec{v} + \vec{w} \big)$
```

```{admonition} Propriétés de la multiplication par un scalaire
:class: note
Soient $\vec{u}$ et $\vec{v}$ des vecteurs, $\lambda$ et $\mu \in \mathbb{R}$.

1.  $\lambda \cdot (\vec{u} + \vec{v}) = \lambda \cdot\vec{u} + \lambda \cdot\vec{v}$
2.  $(\lambda + \mu) \cdot \vec{u} = \lambda \cdot \vec{u} + \mu \cdot \vec{u}$
3.  $\lambda \cdot (\mu\vec{u}) =  (\lambda \mu) \cdot \vec{u}$
4.  $1 \cdot \vec{u} = \vec{u} \quad$ et $\quad(-1) \cdot \vec{u} = -\vec{u}$
5.  $\lambda \cdot (-\vec{u}) = (-\lambda) \cdot \vec{u} = -(\lambda \vec{u})$
6.  $0 \cdot \vec{u} = \vec{0}$
7.  $\lambda \cdot \vec{0} = \vec{0}$
```

````{admonition} Théorème
:class: note
Soient trois points $A$, $B$ et $C$ du plan.

1.  $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC} \quad$ (relation de Chasles)
2.  $\overrightarrow{AB} = -\overrightarrow{BA}$
3.  $\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{OB} - \overrightarrow{OA}$
````

### Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr 1fr;
-   # $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC} \quad$
    ```{jsxgraph} chasle
    :style: width: 80%;
    ```

-   # $\overrightarrow{AB} = -\overrightarrow{BA}$
    ```{jsxgraph} oppose
    :style: width: 80%;
    ```
-   # $\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB}$
    ```{jsxgraph} vecteur
    :style: width: 80%;
    ```
````

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-1, 8, 8, -1],
    axis: false,
    defaults: {
        arrow: {highlight: false, fixed: true, withLabel: true, strokeWidth: 2,
                label: {anchorX: 'middle', anchorY: 'middle',
                        position: '0.5fr left', distance: 1.2},
        },
        point: {size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
                withLabel: false, highlightFillOpacity: 0.5},
    }
}];
initBoard('chasle', attrs, board => {
    const p1 = board.create('point', [0, 1]);
    const p2 = board.create('point', [4, 7]);
    const p3 = board.create('point', [6, 0]);
    board.create('arrow', [p1, p2], {
        name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]}
    });
    board.create('arrow', [p2, p3], {
        name: `\\(\\overrightarrow{BC}\\)`, label: {offset: [0, 0]}
    });
    board.create('arrow', [p1, p3], {
        name: `\\(\\overrightarrow{AC}\\)`, label: {offset: [0, 0]}
    });
});
initBoard('oppose', attrs, board => {
    const p1 = board.create('point', [0, 3]);
    const p2 = board.create('point', [6, 7]);
    board.create('arrow', [p1, p2], {
        name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]}
    });
    const d = [1, -2];
    board.create('arrow', [() => [p2.X() + d[0], p2.Y() + d[1]],
                           () => [p1.X() + d[0], p1.Y() + d[1]]], {
        name: `\\(\\overrightarrow{BA}\\)`, label: {offset: [0, 0]}
    });
});
</script>
<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
const attrs = [defaults, {
    boundingBox: [-1, 8, 8, -1],
    defaultAxes: {
        x: {withLabel: false,
            ticks: {drawLabels: false, insertTicks: false, ticksDistance: 1,
            minorTicks: 0}
        },
        y: {withlabel: false,
            ticks: {drawLabels: false, insertTicks: false, ticksDistance: 1,
             minorTicks: 0}
        },
    },
    defaults: {
        arrow: {highlight: false, fixed: true, withLabel: true, strokeWidth: 2,
                label: {anchorX: 'middle', anchorY: 'middle',
                        position: '0.5fr right', distance: 1.2},
        },
        point: {size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
                withLabel: false, highlightFillOpacity: 0.5},
    }
}];
initBoard('vecteur', attrs, board => {
    const p1 = board.create('point', [0, 0], {size: 0, fixed: true});
    const p2 = board.create('point', [7, 1]);
    const p3 = board.create('point', [3, 6]);
    board.create('arrow', [p2, p1], {
        name: `\\(\\overrightarrow{AO}\\)`, label: {offset: [0, 0]}
    });
    board.create('arrow', [p1, p3], {
        name: `\\(\\overrightarrow{OB}\\)`, label: {offset: [0, 0]}
    });
    board.create('arrow', [p2, p3], {
        name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]}
    });
});
</script>



