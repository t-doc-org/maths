% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Vecteurs

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/vecteurs.xopp>`
```

## Théorie

```{admonition} Définition
:class: note
Un **vecteur** est un segment de droite orienté (une flèche). Il est défini par
une **longueur** (distance entre l'origine et l'extrémité de la flèche), une
**direction** (représentée par la droite sur laquelle se trouve la flèche) et un
**sens** (sens de la flèche).

Le vecteur dont la norme est $0$ est le vecteur nul, noté $\vec{0}$.

Des vecteurs de même direction sont dits **colinéaires**.
```

````{container} frame noprint
# Exemple {num2}`exemple`

Voici plusieurs représentations d'un seul et même vecteur
$\vec{v} = \begin{pmatrix} 3\\ 2\\ \end{pmatrix}$

En effet, ils ont tous la même longueur, la même direction et le même sens.

```{jsxgraph} vecteurs1
:style: width: 50%;
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Les vecteurs suivants sont colinéaires, car ils ont tous la même direction, mais
ils n'ont pas forcément le même sens.

```{jsxgraph} vecteurs2
:style: width: 50%;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, {
  boundingBox: [-5, 5, 4, -2],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  defaults: {
    arrow: {highlight: true,fixed: false},
  },
}];
render.vecteurs1 = el => {
  return initBoard(el, battrs, board => {
    board.create('arrow', [[0, 0], [3,2]], {name: `\\(\\vec{v_1}\\)`});
    board.create('arrow', [[-4,-1], [-1,1]], {name: `\\(\\vec{v_2}\\)`});
    board.create('arrow', [[-5, 1], [-2,3]], {name: `\\(\\vec{v_3}\\)`});
    board.create('arrow', [[-2,2], [1,4]], {name: `\\(\\vec{v_4}\\)`});
  });
};
render.vecteurs2 = el => {
  return initBoard(el, battrs, board => {
    board.create('arrow', [[0, 0], [3,2]], {
      name: `\\(\\vec{v_1}\\)`,
    });
    board.create('arrow', [[-4,1], [-2.5,2]], {
      name: `\\(\\vec{v_2}\\)`,
    });
    board.create('arrow', [[3, 3], [-3,-1]], {
      name: `\\(\\vec{v_3}\\)`, label: {position: '0.45fr right'},
    });
    board.create('arrow', [[-2,4], [-3.5,3]], {
      name: `\\(\\vec{v_4}\\)`, label: {position: '0.6fr right'},
    });
  });
};
render.vecteurs3 = el => {
  return initBoard(el, [attrs.print, {boundingBox: [-4, 3, 7, -5],
    }], board => {
    board.create('arrow', [[0, 0], [-3,2]], {
      name: `\\(\\vec{v_1}\\)`, label: {position: '0.45fr right', offset: [0, -5]},
    });
    board.create('arrow', [[0,0], [6,-4]], {
      name: `\\(\\vec{v_2}\\)`, label: {position: '0.45fr right', offset: [0, -5]},
    });
  });
};
render.vecteurs4 = el => {
  return initBoard(el, [attrs.print, {boundingBox: [-2, 5, 7, -1],
    }], board => {
    board.create('arrow', [[0, 0], [1,4]], {
      name: `\\(\\vec{v_1}\\)`, label: {position: '0.5fr right'},
    });
    board.create('arrow', [[0,0], [5,2]], {
      name: `\\(\\vec{v_2}\\)`, label: {position: '0.5fr right'},
    });
  });
};
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

`````{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  ````{list-grid}
    :style: grid-template-columns: 1fr 1fr
    - Soient les vecteurs $\vec{u} = \begin{pmatrix} -3 \\2 \\ \end{pmatrix}$ et
      $\vec{v} = \begin{pmatrix} 6 \\-4 \\ \end{pmatrix}$.

      $$Det(\vec{u}, \vec{v}) &= \begin{vmatrix} -3 & 6 \\ 2 & -4 \end{vmatrix} \\
      &= -3 \cdot (-4) - 2 \cdot 6 = 12 - 12 = 0$$

      $\vec{u}$ et $\vec{v}$ sont colinéaires.
    - ```{jsxgraph} vecteurs3
      :style: width: 80%;
      ```
    ````
2.  ````{list-grid}
    :style: grid-template-columns: 1fr 1fr
    - Soient les vecteurs $\vec{u} = \begin{pmatrix} 1\\4 \\ \end{pmatrix}$ et
      $\vec{v} = \begin{pmatrix} 5 \\2 \\ \end{pmatrix}$.

      $$Det(\vec{u}, \vec{v}) &= \begin{vmatrix} 1 & 5 \\ 4 & 2 \end{vmatrix} \\
      &= 1 \cdot 2 - 4 \cdot 5 = 2 - 20 =  -18 \neq 0$$

      $\vec{u}$ et $\vec{v}$ ne sont pas colinéaires.
    - ```{jsxgraph} vecteurs4
      :style: width: 80%;
      ```
    ````
`````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-vect-ex1>`
```

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

`````{container} frame
### Exemple {num2}`exemple`

$\vec{v} = 3 \cdot \vec{e_1} + 2 \cdot \vec{e_2} = \begin{pmatrix} 3\\ 2\\ \end{pmatrix}$

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # Base du plan
  ```{jsxgraph} base
  :style: width: 80%;
  ```
- # Base orthonormée du plan
  ```{jsxgraph} baseOrthonormée
  :style: width: 80%;
  ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, {
  boundingBox: [-2, 4, 4, -2],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  axis: false, grid: false,
  defaults: {
    parallel: {strokeOpacity: 0.1},
  },
}];
render.base = el => {
  return initBoard(el, battrs, board => {
    const incl = 6;
    const Ox = board.create('axis', [[0, 0], [incl, 1]], {
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 0, minorTicks: 0,
      },
    });
    const Oy = board.create('axis', [[0, 0], [1, incl]], {
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 0, minorTicks: 0},
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
      name: `\\(\\vec{e_1}\\)`,
      label: {position: '0.4fr right', offset: [0, -3]},
    });
    board.create('arrow', [[0,0], [e2[0], e2[1]]], {
      name: `\\(\\vec{e_2}\\)`, label: {offset: [-3, 0]},
    });
    board.create('arrow', [[0,0], [3*e1[0]+2*e2[0], 3*e1[1]+2*e2[1]]], {
      name: `\\(\\vec{v}\\)`,
    });
  });
};
</script>

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, {
  boundingBox: [-2, 4, 4, -2],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  defaultAxes: {
    x: {
      withLabel: false,
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 1, minorTicks: 0,
      },
    },
    y: {
      withLabel: false,
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 1, minorTicks: 0,
      },
    },
  },
  defaults: {
  },
}];
render.baseOrthonormée = el => {
  return initBoard(el, battrs, board => {
    board.create('arrow', [[0, 0], [1,0]], {
      name: `\\(\\vec{e_1}\\)`,
      label: {position: '0.5fr right', offset: [0, -3]},
    });
    board.create('arrow', [[0,0], [0,1]], {
      name: `\\(\\vec{e_2}\\)`, label: {offset: [-3, 0]},
    });
    board.create('arrow', [[0,0], [3,2]], {name: `\\(\\vec{v}\\)`});
  });
};
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

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr
- Soient les points $A(4;1)$ et $B(-2;3)$.

  Les composantes des vecteurs positions de $A$ et $B$ sont:

  $\overrightarrow{OA} = \begin{pmatrix} 4\\ 1\\ \end{pmatrix}$ et
  $\overrightarrow{OB} = \begin{pmatrix} -2\\ 3\\ \end{pmatrix}$

  Les composantes du vecteur $AB$ sont:
  $$\overrightarrow{AB} &= \overrightarrow{OB} - \overrightarrow{OA}\\
   &= \begin{pmatrix} -2\\ 3\\ \end{pmatrix} - \begin{pmatrix} 4\\ 1\\ \end{pmatrix} = \begin{pmatrix} -2 - 4\\ 3 - 1\\ \end{pmatrix} = \begin{pmatrix} -6\\ 2\\ \end{pmatrix}$$
- ```{jsxgraph} composantes
  :style: width: 80%;
  ```
````
`````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-vect-ex2>`,
{numref}`exercice %s<exercice:2-vect-ex3>` et
{numref}`exercice %s<exercice:2-vect-ex4>`
```

````{admonition} Théorème
:class: note
Soient trois points $A$, $B$ et $C$ du plan.

1.  $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC} \quad$ (relation de Chasles)
2.  $\overrightarrow{AB} = -\overrightarrow{BA}$
3.  $\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = \overrightarrow{OB} - \overrightarrow{OA}$
````

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr 1fr;
-   # $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC} \quad$
    ```{jsxgraph} chasles
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
`````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, {
  boundingBox: [-1, 8, 8, -1],
  pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: true,
  axis: false,
  defaultAxes: {
    x: {
      withLabel: false,
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 1, minorTicks: 0,
      },
    },
    y: {
      withlabel: false,
      ticks: {
        drawLabels: false, insertTicks: false, ticksDistance: 1, minorTicks: 0,
      }
    },
  },
  defaults: {
    arrow: {
      label: {position: '0.5fr left', distance: 1.2, },
    },
    point: {
      withLabel: false, fixed: false, highlight: true,
      size: 8, strokewidth: 0, fillOpacity: 0, highlightStrokeWidth: 0,
      highlightFillOpacity: 0.7,
    },
  },
}];
render.composantes = el => {
  return initBoard(el, [battrs, attrs.print, {
    axis: true,
    boundingBox: [-3, 4, 5, -1],
  }],
  board => {
    const O = board.create('point', [0, 0], {
      withLabel: true, name: `\\(O\\)`,
      label: {offset: [-15, -12]},
    });
    const A = board.create('point', [4, 1], {
      withLabel: true, name: `\\(A\\)`,
    });
    const B = board.create('point', [-2, 3], {
      withLabel: true, name: `\\(B\\)`,
    });
    board.create('arrow', [O, A], {
      name: `\\(\\overrightarrow{OA}\\)`,
      label: {position: '0.5fr right', offset: [0, 0]},
    });
    board.create('arrow', [O, B], {
      name: `\\(\\overrightarrow{OB}\\)`,
      label: {offset: [-5, 0], position: '0.5fr left'}
    });
    board.create('arrow', [A, B], {
      name: `\\(\\overrightarrow{AB}\\)`,
      label: {offset: [0, 0], position: '0.5fr right'},
    });
  });
};
render.exOppose1 = el => {
  return initBoard(el, [battrs, attrs.print, {
    axis: true,
    boundingBox: [-1, 4, 6, -4],
  }],
  board => {
    const O = board.create('point', [0, 0], {
      withLabel: true, name: `\\(O\\)`,
      label: {offset: [-15, -12]},
    });
    const A = board.create('point', [4, -3], {
      withLabel: true, name: `\\(A\\)`, label: {offset: [-12, -10]},
    });
    const B = board.create('point', [1, 3], {
      withLabel: true, name: `\\(B\\)`, label: {offset: [-15, 5]},
    });
    const D = board.create('point', [5, 0]);
    board.create('arrow', [D, B], {
      name: `\\(-\\overrightarrow{OA}\\)`, dash: 3,
      label: {position: '0.5fr right', offset: [0, 0]},
    });
    board.create('arrow', [A, D], {
      name: `\\(\\overrightarrow{OB}\\)`, dash: 3,
      label: {offset: [0, 0], position: '0.5fr right'}
    });
    board.create('arrow', [A, B], {
      name: `\\(\\overrightarrow{AB}\\)`, strokeColor: JXG.palette.red,
      label: {offset: [0, 0], position: '0.45fr left', strokeColor: JXG.palette.red},
    });
  });
};
render.exOppose2 = el => {
  return initBoard(el, [battrs, attrs.print, {
    axis: true,
    boundingBox: [-1, 4, 6, -4],
  }],
  board => {
    const O = board.create('point', [0, 0], {
      withLabel: true, name: `\\(O\\)`,
      label: {offset: [-15, -12]},
    });
    const A = board.create('point', [4, -3], {
      withLabel: true, name: `\\(A\\)`, label: {offset: [-12, -10]},
    });
    const B = board.create('point', [1, 3], {
      withLabel: true, name: `\\(B\\)`, label: {offset: [-15, 5]},
    });
    const D = board.create('point', [5, 0]);
    board.create('arrow', [B, D], {
      name: `\\(\\overrightarrow{OA}\\)`, dash: 3,
      label: {position: '0.5fr left', offset: [0, 0],},
    });
    board.create('arrow', [D, A], {
      name: `\\(-\\overrightarrow{OB}\\)`, dash: 3,
      label: {offset: [0, 0], position: '0.5fr left',}
    });
    board.create('arrow', [B, A], {
      name: `\\(\\overrightarrow{AB}\\)`, strokeColor: JXG.palette.red,
      label: {offset: [0, 0], position: '0.55fr right', strokeColor: JXG.palette.red},
    });
  });
};
render.exChasles = el => {
  return initBoard(el, [battrs, attrs.print, {
    axis: true,
    boundingBox: [-1, 5, 5, -4],
  }],
  board => {
    const O = board.create('point', [0, 0], {
      withLabel: true, name: `\\(O\\)`,
      label: {offset: [-15, -12]},
    });
    const A = board.create('point', [4, -3], {
      withLabel: true, name: `\\(A\\)`, label: {offset: [-12, -10]},
    });
    const B = board.create('point', [1, 3], {
      withLabel: true, name: `\\(B\\)`, label: {offset: [-15, 5]},
    });
    const C = board.create('point', [2, 4], {
      withLabel: true, name: `\\(C\\)`, label: {offset: [0, 5]},
    });
    board.create('arrow', [A, B], {
      name: `\\(\\overrightarrow{AB}\\)`, dash: 3,
      label: {position: '0.45fr left', offset: [0, 0],},
    });
    board.create('arrow', [B, C], {
      name: `\\(\\overrightarrow{BC}\\)`, dash: 3,
      label: {offset: [0, 0], position: '0.45fr left',}
    });
    board.create('arrow', [A, C], {
      name: `\\(\\overrightarrow{AC}\\)`, strokeColor: JXG.palette.red,
      label: {offset: [0, 0], position: '0.5fr right', strokeColor: JXG.palette.red},
    });
  });
};
render.chasles = el => {
  return initBoard(el, battrs, board => {
    const p1 = board.create('point', [0, 1]);
    const p2 = board.create('point', [4, 7]);
    const p3 = board.create('point', [6, 0]);
    board.create('arrow', [p1, p2], {
      name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]},
    });
    board.create('arrow', [p2, p3], {
      name: `\\(\\overrightarrow{BC}\\)`, label: {offset: [0, 0]},
    });
    board.create('arrow', [p1, p3], {
      name: `\\(\\overrightarrow{AC}\\)`, label: {offset: [0, 0]},
    });
  });
};
render.oppose = el => {
  return initBoard(el, battrs, board => {
    const p1 = board.create('point', [0, 3]);
    const p2 = board.create('point', [6, 7]);
    board.create('arrow', [p1, p2], {
      name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]},
    });
    const d = [1, -2];
    board.create('arrow', [() => [p2.X() + d[0], p2.Y() + d[1]],
                           () => [p1.X() + d[0], p1.Y() + d[1]]], {
      name: `\\(\\overrightarrow{BA}\\)`, label: {offset: [0, 0]},
    });
  });
};
render.vecteur = el => {
  return initBoard(el, [battrs, {
    axis: true,
    defaults: {arrow: {label: {position: '0.5fr right'}}},
  }], board => {
    const p1 = board.create('point', [0, 0], {size: 0, fixed: true});
    const p2 = board.create('point', [7, 1]);
    const p3 = board.create('point', [3, 6]);
    board.create('arrow', [p2, p1], {
      name: `\\(\\overrightarrow{AO}\\)`, label: {offset: [0, 0]},
    });
    board.create('arrow', [p1, p3], {
      name: `\\(\\overrightarrow{OB}\\)`, label: {offset: [0, 0]},
    });
    board.create('arrow', [p2, p3], {
      name: `\\(\\overrightarrow{AB}\\)`, label: {offset: [0, 0]},
    });
  });
};
</script>

`````{container} frame noprint
# Exemple {num2}`exemple`

Soient les points $A(4;-3)$, $B(1;3)$ et $C(2; 4)$.

Les vecteurs positions sont:

$\overrightarrow{OA} = \begin{pmatrix} 4\\ -3\\ \end{pmatrix}$,
$\overrightarrow{OB} = \begin{pmatrix} 1\\ 3\\ \end{pmatrix}$ et
$\overrightarrow{OC} = \begin{pmatrix} 2\\ 4\\ \end{pmatrix}$

{.lower-alpha-paren}
1.  $\overrightarrow{AB} = - \overrightarrow{BA}$

    ````{list-grid}
    :style: grid-template-columns: 1fr 1fr
    -   $$\overrightarrow{AB} &= \overrightarrow{OB} - \overrightarrow{OA} \\
        &= \begin{pmatrix} 1\\ 3\\ \end{pmatrix} - \begin{pmatrix} 4\\ -3\\ \end{pmatrix} = \begin{pmatrix} 1 - 4\\ 3 - (-3)\\ \end{pmatrix} = \begin{pmatrix} -3\\ 6\\ \end{pmatrix}$$

    -   ```{jsxgraph} exOppose1
        :style: width: 60%;
        ```
    -   $$\overrightarrow{BA} &= \overrightarrow{OA} - \overrightarrow{OB} \\
        &= \begin{pmatrix} 4\\ -3\\ \end{pmatrix} - \begin{pmatrix} 1\\ 3\\ \end{pmatrix} = \begin{pmatrix} 4 - 1\\ -3 - 3\\ \end{pmatrix} = \begin{pmatrix} 3\\ -6\\ \end{pmatrix}$$
    -   ```{jsxgraph} exOppose2
        :style: width: 60%;
        ```
    ````

2.  $\overrightarrow{AB} + \overrightarrow{BC} =  \overrightarrow{AC}$

    ````{list-grid}
    :style: grid-template-columns: 1fr 1fr
    -   $$\overrightarrow{AB} + \overrightarrow{BC} &= \begin{pmatrix} -3\\ 6\\ \end{pmatrix} + \left(\begin{pmatrix} 2\\ 4\\ \end{pmatrix} - \begin{pmatrix} 1\\ 3\\ \end{pmatrix}\right)\\
        &= \begin{pmatrix} -3\\ 6\\ \end{pmatrix} + \begin{pmatrix} 1\\ 1\\ \end{pmatrix} \\
        &= \begin{pmatrix} -3 + 1\\ 6 + 1\\ \end{pmatrix} = \begin{pmatrix} -2\\ 7\\ \end{pmatrix}$$

        $$\overrightarrow{AC} &= \overrightarrow{OC} - \overrightarrow{OA}\\
         &= \begin{pmatrix} 2\\ 4\\ \end{pmatrix} - \begin{pmatrix} 4\\ -3\\ \end{pmatrix} = \begin{pmatrix} 2 - 4\\ 4 - (-3)\\ \end{pmatrix} = \begin{pmatrix} -2\\ 7\\ \end{pmatrix}$$

    -   ```{jsxgraph} exChasles
        :style: width: 60%;
        ```
    ````
`````

```{admonition} Définition
:class: note
La longueur d'un vecteur $\vec{v}$ est appelée la **norme** du vecteur
$\vec{v}$, notée $\|\vec{v}\|$.
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

```{container} frame noprint
# Exemple {num2}`exemple`

Soit le vecteur $\vec{v} = \begin{pmatrix} -4\\ 7\\ \end{pmatrix}$

$\| \vec{v} \| = \sqrt{(-4)^2 + 7^2} = \sqrt{16 + 49} = \sqrt{65} \simeq 8.1$
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-vect-ex5>` et
{numref}`exercice %s<exercice:2-vect-ex6>`
```

```{admonition} Définition
:class: note
Un **vecteur unitaire** est un vecteur de norme 1.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Soient les vecteur $\vec{u} = \begin{pmatrix} 1\\ 0\\ \end{pmatrix}$,
    $\vec{v} = \begin{pmatrix} \dfrac{1}{2}\\ \dfrac{\sqrt{3}}{2}\\ \end{pmatrix}$
    et $\vec{w} = \begin{pmatrix} 3\\ 4\\ \end{pmatrix}$, lesquels sont unitaires?

    $\vec{u}$ est un vecteur unitaire: $\| \vec{u} \| = \sqrt{1^2 + 0^2} = \sqrt{1} = 1$

    $\vec{v}$ est un vecteur unitaire: $\|\vec{v}\| = \sqrt{\left(\dfrac{1}{2}\right)^2 + \left(\dfrac{\sqrt{3}}{2}\right)^2} = \sqrt{\dfrac{1}{4} + \dfrac{3}{4}} = \sqrt{\dfrac{4}{4}} = \sqrt{1} = 1$

    $\vec{w}$ n'est pas un vecteur unitaire: $\|\vec{w}\| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \neq 1$
2.  Comment rendre $\vec{w}$ unitaire?

    Il suffit de diviser chacune des composantes par sa norme.

    $\vec{w}_{\text{unitaire}} = \dfrac{1}{\|\vec{w}\|} \cdot \vec{w}= \dfrac{1}{5} \cdot \begin{pmatrix} 3\\ -4\\ \end{pmatrix}= \begin{pmatrix} \dfrac{3}{5}\\ -\dfrac{4}{5}\\ \end{pmatrix}$

    Vérification:<br>
    $\|\vec{w}_{\text{unitaire}}\| = \sqrt{\left(\dfrac{3}{5}\right)^2 + \left(-\dfrac{4}{5}\right)^2} = \sqrt{\dfrac{9}{25} + \dfrac{16}{25}} = \sqrt{\dfrac{25}{25}}= \sqrt{1} = 1$

```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-vect-ex7>` et
{numref}`exercice %s<exercice:2-vect-ex8>`
```

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

```{container} frame noprint
### Exemple {num2}`exemple`

Soient les vecteur $\vec{u} = \begin{pmatrix} 4\\ -5\\ \end{pmatrix}$ et
$\vec{v} = \begin{pmatrix} -2\\ -3\\ \end{pmatrix}$.

$\vec{u} + \vec{v} = \begin{pmatrix} 4\\ -5\\ \end{pmatrix} + \begin{pmatrix} -2\\ -3\\ \end{pmatrix} = \begin{pmatrix} 4 + (-2)\\ -5 + (-3)\\ \end{pmatrix} = \begin{pmatrix} 2\\ -8\\ \end{pmatrix}$

$-2 \cdot \vec{u} = -2 \cdot \begin{pmatrix} 4\\ -5\\ \end{pmatrix} = \begin{pmatrix} -8\\ 10\\ \end{pmatrix}$
```

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

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-vect-ex9>`,
{numref}`exercice %s<exercice:2-vect-ex10>` et
{numref}`exercice %s<exercice:2-vect-ex11>`
```

## Exercices

### Exercice {num2}`exercice:2-vect-ex1`

Parmi les vecteurs suivants, lesquels sont colinéaires?

{.columns-4 .lower-alpha-paren}
1.  $\vec{f}=\begin{pmatrix} 1\\ 3\\ \end{pmatrix}$
2.  $\vec{g}=\begin{pmatrix} 0\\ -1\\ \end{pmatrix}$
3.  $\vec{h}=\begin{pmatrix} -2\\ 3\\ \end{pmatrix}$
4.  $\vec{l}=\begin{pmatrix} 2\\ 6\\ \end{pmatrix}$
5.  $\vec{m}=\begin{pmatrix} 6\\ -2\\ \end{pmatrix}$
6.  $\vec{n}=\begin{pmatrix} 1\\ -\frac{3}{2}\\ \end{pmatrix}$
7.  $\vec{o}=\begin{pmatrix} -\frac{1}{9}\\ -\frac{1}{3}\\ \end{pmatrix}$
8.  $\vec{p}=\begin{pmatrix} 0\\ \frac{2}{3}\\ \end{pmatrix}$

```{block} solution
$\vec{f}$, $\vec{l}$ et $\vec{o}$ sont colinéaires;
$\vec{p}$ et $\vec{g}$ sont colinéaires;
$\vec{h}$ et $\vec{n}$ sont colinéaires.
```

### Exercice {num2}`exercice:2-vect-ex2`

Calculez les composantes du vecteur $\overrightarrow{AB}$.

{.columns-2 .lower-alpha-paren}
1.  $A(6;-2)$ et $B(1;5)$
2.  $A(2;7)$ et $B(-3;-3)$
3.  $A(-4;1)$ et $B(5;5)$
4.  $A(4.5;6.5)$ et $B(10.5;5.5)$

```{block} solution
{.columns-4 .lower-alpha-paren}
1.  $\overrightarrow{AB}=\begin{pmatrix} -5\\ 7\\ \end{pmatrix}$
2.  $\overrightarrow{AB}=\begin{pmatrix} -5\\ -10\\ \end{pmatrix}$
3.  $\overrightarrow{AB}=\begin{pmatrix} 9\\ 4\\ \end{pmatrix}$
4.  $\overrightarrow{AB}=\begin{pmatrix} 6\\ -1\\ \end{pmatrix}$
```

### Exercice {num2}`exercice:2-vect-ex3`

Tracez les points $A(2;-3)$, $B(1;4)$ et $C(-1;-2)$ dans un repère orthonormé,
puis déterminez les composantes des vecteurs ci-dessous.

{.columns-4 .lower-alpha-paren}
1.  $\overrightarrow{AB}$
2.  $\overrightarrow{BC}$
3.  $\overrightarrow{CA}$
4.  $\overrightarrow{BA}$

```{block} solution
{.columns-4 .lower-alpha-paren}
1.  $\overrightarrow{AB} = \begin{pmatrix} -1\\ 7\\ \end{pmatrix}$
2.  $\overrightarrow{BC} = \begin{pmatrix} -2\\ -6\\ \end{pmatrix}$
3.  $\overrightarrow{CA} = \begin{pmatrix} 3\\ -1\\ \end{pmatrix}$
4.  $\overrightarrow{BA} = \begin{pmatrix} 1\\ -7\\ \end{pmatrix}$
```


### Exercice {num2}`exercice:2-vect-ex4`

Les points $P$, $Q$ et $R$ suivants sont-ils alignés?

{.columns-2 .lower-alpha-paren}
1.  $P(5;2)$, $Q(6;-3)$ et $R(7;8)$
2.  $P(5;-6)$, $Q(3;8)$ et $R(-1;36)$

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  Non
2.  Oui
```

### Exercice {num2}`exercice:2-vect-ex5`

Soient les points $A(1;3)$, $B(-8;12)$ et $C(1;2)$, déterminez le périmètre du
triangle $ABC$.

```{block} solution
$||\overrightarrow{AB}||=9 \sqrt{2}$,
$\quad ||\overrightarrow{BC}||= \sqrt{181}$,
$\quad ||\overrightarrow{AC}||=1$,
$\quad p \approx 27.18$.
```

### Exercice {num2}`exercice:2-vect-ex6`

Vérifiez que le triangle de sommets $A(3;2)$, $B(6;-1)$ et
$C\Big(\frac{17}{2}; \frac{9}{2}\Big)$ est isocèle, puis calculez son aire.


```{block} solution
Le triangle $ABC$ est isocèle en $C$ et son aire vaut $12$.
```

### Exercice {num2}`exercice:2-vect-ex7`

Montrez que les vecteurs suivants sont unitaires.

{.columns-3 .lower-alpha-paren}
1.  $\begin{pmatrix} \frac{4}{5}\\-\frac{3}{5}\\ \end{pmatrix}$
2.  $\begin{pmatrix} -1\\0\\ \end{pmatrix}$
3.  $\begin{pmatrix} -\frac{1}{2}\\ \frac{\sqrt{3}}{2}\\ \end{pmatrix}$

```{block} solution
Il faut vérifier que la norme du vecteur vaut 1.
```

### Exercice {num2}`exercice:2-vect-ex8`

Déterminez les composantes des vecteurs unitaires qui sont colinéaires aux
vecteurs suivants.

{.columns-3 .lower-alpha-paren}
1.  $\vec{a}=\begin{pmatrix} 1\\ -1\\ \end{pmatrix}$
2.  $\vec{b}=\begin{pmatrix} -5\\ 0\\ \end{pmatrix}$
3.  $\vec{c}=\begin{pmatrix} 4\\ -3\\ \end{pmatrix}$

```{block} solution
{.columns-3 .lower-alpha-paren}
1.  $\vec{a'} = \pm \begin{pmatrix} \frac{1}{\sqrt{2}}\\ -\frac{1}{\sqrt{2}}\\ \end{pmatrix}$
2.  $\vec{b'} = \pm \begin{pmatrix} -1\\ 0\\ \end{pmatrix}$
3.  $\vec{c'} = \pm \begin{pmatrix} \frac{4}{5}\\ -\frac{3}{5}\\ \end{pmatrix}$
```

### Exercice {num2}`exercice:2-vect-ex9`

Soient $\vec{v_1}=\begin{pmatrix} -1\\ 3\\ \end{pmatrix}$,
$\vec{v_2}=\begin{pmatrix} 5\\ 3\\ \end{pmatrix}$,
$\vec{v_3}=\begin{pmatrix} 0\\ -2\\ \end{pmatrix}$ et
$\vec{v_4}=\begin{pmatrix} 3\\ 4\\ \end{pmatrix}$.

Isolez le vecteur $\vec{v}$ dans les équations suivantes, puis déterminez ses
composantes.

{.columns-2 .lower-alpha-paren}
1.  $\vec{v}+2\vec{v_2}-5\vec{v_1}=\vec{0}$
2.  $\dfrac{5}{3}\vec{v}+\dfrac{3}{2}\vec{v_4}=\vec{v_3}-2\vec{v_2}$

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  $\vec{v} = \begin{pmatrix} -15\\ 9\\ \end{pmatrix}$
2.  $\vec{v} = \begin{pmatrix} -\frac{87}{10}\\ -\frac{42}{5}\\ \end{pmatrix}$
```

### Exercice {num2}`exercice:2-vect-ex10`

Dans le parallélépipède rectangle donné, exprimez chaque vecteur ci-dessous
comme vecteur entre deux points.

```{jsxgraph} parallelipipede
:style: width: 50%; border: none;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.parallelipipede = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-1, 3, 6, -0.5],
    axis: false, grid: false,
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
      point: {size: 0, withlabel: true, label: {anchorY: 'top'}},
    },
  }], board => {
    const a = 4, b = 1.6, c = 2.4;
    function proj(x, y, z) {
      return [x + 0.5 * z, y + 0.3 * z];
    }
    const A = board.create('point', proj(a, 0, 0),
      {name: '\\(A\\)', label: {offset: [5, 5]}});
    const B = board.create('point', proj(a, b, 0),
      {name: '\\(B\\)', label: {offset: [5, 5]}});
    const C = board.create('point', proj(0, b, 0),
      {name: '\\(C\\)', label: {anchorX: 'right', offset: [-8, 5]}});
    const D = board.create('point', proj(0, 0, 0),
      {name: '\\(D\\)', label: {anchorX: 'right', offset: [-8, 5]}});
    const E = board.create('point', proj(a, 0, c),
      {name: '\\(E\\)', label: {offset: [5, 5]}});
    const F = board.create('point', proj(a, b, c),
      {name: '\\(F\\)', label: {offset: [5, 5]}});
    const G = board.create('point', proj(0, b, c),
      {name: '\\(G\\)', label: {anchorX: 'right', offset: [-8, 15]}});
    const H = board.create('point', proj(0, 0, c),
      {name: '\\(H\\)', label: {anchorX: 'right', offset: [-8, 15]}});

    board.create('segment', [D, H], {strokeColor: 'lightgray'});
    board.create('segment', [E, H], {strokeColor: 'lightgray'});
    board.create('segment', [G, H], {strokeColor: 'lightgray'});
    board.create('segment', [A, B]);
    board.create('segment', [B, C]);
    board.create('segment', [C, D]);
    board.create('segment', [D, A]);
    board.create('segment', [A, E]);
    board.create('segment', [B, F]);
    board.create('segment', [E, F]);
    board.create('segment', [G, F]);
    board.create('segment', [C, G]);
  });
};
</script>

{.columns-2 .lower-alpha-paren}
1.  $\vec{a}= \overrightarrow{EF} + \overrightarrow{BC}$
2.  $\vec{b}= \overrightarrow{HB} - \overrightarrow{FE} - \overrightarrow{AB}$
3.  $\vec{c}= \overrightarrow{HC} - \overrightarrow{AC}$
4.  $\vec{d}= \overrightarrow{AD} + \overrightarrow{HG} - \overrightarrow{EH}$
5.  $\vec{e}= \overrightarrow{AH} - \overrightarrow{BE}$
6.  $\vec{f}= \overrightarrow{DC} + \overrightarrow{BE} - \overrightarrow{BD} + \overrightarrow{FF}$

```{block} solution
{.columns-3 .lower-alpha-paren}
1.  $\vec{a} = \overrightarrow{AC} = \overrightarrow{EG}$
2.  $\vec{b} = \overrightarrow{HB}$
3.  $\vec{c} = \overrightarrow{HA}$
4.  $\vec{d} = \overrightarrow{AB}$
5.  $\vec{e} = \overrightarrow{AC}$
6.  $\vec{f} = \overrightarrow{DF}$
```

### Exercice {num2}`exercice:2-vect-ex11`

Soit $ABCD$ un carré de 4 cm de côté. Dessinez les points $E$, $F$, $G$ et $H$
tels que

{.columns-2 .lower-alpha-paren}
1.  $\overrightarrow{BE} = \overrightarrow{BD} + \overrightarrow{CD}$
2.  $\overrightarrow{BF} = \dfrac{1}{2} \cdot \overrightarrow{BA} - \overrightarrow{AD}$
3.  $\overrightarrow{DG} = 2\cdot\overrightarrow{DC} + \dfrac{1}{2} \cdot \overrightarrow{CA}$
4.  $\overrightarrow{AH} = -\sqrt{2} \cdot \overrightarrow{AC}$

````{block} solution
```{jsxgraph} carre
:style: width: 50%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.carre = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-7.2, 5.4, 8.2, -7.2],
    axis: false,
    defaults: {
      segment: {strokeColor: JXG.palette.black, strokeWidth: 2},
      point: {size: 2, withlabel: true, label: {anchorY: 'top'}},
    },
  }], board => {
    const x = -Math.sqrt(2) * 4;
    const A = board.create('point', [0, 0],
      {name: '\\(A\\)', label: {offset: [5, 5]}});
    const B = board.create('point', [4, 0],
      {name: '\\(B\\)', label: {offset: [5, 5]}});
    const C = board.create('point', [4, 4],
      {name: '\\(C\\)', label: {offset: [5, 5]}});
    const D = board.create('point', [0, 4],
      {name: '\\(D\\)', label: {offset: [5, 5]}});
    const E = board.create('point', [-4, 4],
      {name: '\\(E\\)', label: {offset: [5, 5]}});
    const F = board.create('point', [2, -4],
      {name: '\\(F\\)', label: {offset: [5, 5]}});
    const G = board.create('point', [6, 2],
      {name: '\\(G\\)', label: {offset: [5, 5]}});
    const H = board.create('point', [x, x],
      {name: '\\(H\\)', label: {offset: [5, 5]}});
  });
};
</script>


## Solutions

```{blocks} solution
:class: allow-break-inside
```
