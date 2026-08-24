% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Triangle quelconque

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

### Théorème du sinus

````{admonition} Théorème du sinus
Dans un triangle quelconque $ABC$, les rapports entre la longueur d'un côté
et le sinus de l'angle opposé sont égaux:

```{math}
:class: align-center
\dfrac{a}{\sin(\alpha)}=\dfrac{b}{\sin(\beta)}=\dfrac{c}{\sin(\gamma)}
```
````

````{container} frame noprint
# Démonstration

Dans un triangle quelconque, la hauteur $h_c$ issue de sommet C est abaissée.

```{jsxgraph} demoSinus
:style: width: 60%; border: none;
```

La trigonométrie appliquée dans le triangle rectangle $BCH$:
```{math}
:class: align-center
\sin(\beta) = \dfrac{h_c}{a} \iff h_c = a \cdot \sin(\beta)
```

La trigonométrie appliquée dans le triangle rectangle $AHC$:
```{math}
:class: align-center
\sin(\alpha) = \dfrac{h_c}{b} \iff h_c = b \cdot \sin(\alpha)
```
Des deux équations précédentes découle:
```{math}
:class: align-center
a \cdot \sin(\beta) &= b \cdot \sin(\alpha) \qquad \qquad \qquad \qquad  | \text{divisez par } \sin(\alpha) \cdot \sin(\beta)\\
\dfrac{a \cdot \sin(\beta)}{\sin(\alpha) \cdot \sin(\beta)} &= \dfrac{b \cdot \sin(\alpha)}{\sin(\alpha) \cdot \sin(\beta)}\\
\dfrac{a}{\sin(\alpha)} &= \dfrac{b}{\sin(\beta)}
```
Le même raisonnement avec la hauteur $h_a$ issue de A permet de démontrer la
deuxième égalité du théorème.
````

````{admonition} Cas d'utilisation du théorème du sinus
Le théorème du sinus peut être utilisé si dans un triangle, sont connus:
- deux angles et la longueur d'un côté, ou
- la longueur de deux côtés et l'angle opposé à un des côtés.

```{jsxgraph} utilisationSinus
:style: width: 60%; border: none;
```
````


<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.utilisationSinus = el => {
  return initBoard(el, [attrs.screen, {
    boundingbox: [-5, 4, 7, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
      segment: {strokeWidth: 1},
      angle: {withLabel: false, radius: 0.5},
    },
  }], board => {
    const A = board.create('point', [-4, 0]);
    const B = board.create('point', [-4.5, 3]);
    const C = board.create('point', [-1, 1.5]);

    board.create('segment', [A, C], {strokeWidth: 2});
    board.create('segment', [A, B], {dash: 2});
    board.create('segment', [B, C], {dash: 2});

    board.create('angle', [C, A, B]);
    board.create('angle', [B, C, A]);

    const D = board.create('point', [-0.5, 0]);
    const E = board.create('point', [0.5, 3]);
    const F = board.create('point', [2.5, 0.5]);

    board.create('segment', [E, F], {strokeWidth: 2});
    board.create('segment', [D, E], {dash: 2});
    board.create('segment', [F, D], {dash: 2});

    board.create('angle', [F, D, E]);
    board.create('angle', [E, F, D]);

    const G = board.create('point', [3, 2.5]);
    const H = board.create('point', [6, 3]);
    const I = board.create('point', [4.5, 0]);

    board.create('segment', [H, I], {strokeWidth: 2});
    board.create('segment', [G, I], {strokeWidth: 2});
    board.create('segment', [G, H], {dash: 2});

    board.create('angle', [I, G, H]);
  });
};
</script>

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');

function hauteur(fn) {
  return el => {
    return initBoard(el, [attrs.screen, {
      boundingbox: [-1.5, 2, 5, -1],
      axis: false, grid: false,
      pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
      defaults: {
        segment: {
          strokeWidth: 1, withLabel: true,
          label: {anchorX: 'middle',offset: [0, 0]},
        },
        point: {
          withLabel: true,
          label: {anchorX: 'middle', anchorY:'top' ,offset: [0, 0]},
        },
      },
      }], board => {
      const A = board.create('point', [-1, 0], {name: '\\(A\\)'});
      const B = board.create('point', [3, 0], {name: '\\(B\\)'});
      const C = board.create('point', [1.5, 1.5], {
          name: '\\(C\\)', label: {anchorY: 'bottom'},
      });
      const H = board.create('point', [1.5, 0], {
        name: '\\(H\\)', label: {anchorY: 'top'},
      });

      board.create('segment', [A, C], {
        name: '\\(b\\)', label: {anchorY:'bottom'},
      });
      board.create('segment', [B, C], {
        name: '\\(a\\)',
        label: {anchorY:'bottom', offset: [2, 0]},
      });
      board.create('segment', [H, C], {
        name: '\\(h_c\\)',
        label: {anchorX: 'right', anchorY:'middle', offset: [-5, 0]},
      });

      board.create('angle', [B, A, C], {
        name: '\\(\\alpha\\)', radius: 0.5,
      });
      board.create('angle', [B, H, C], {
        withLabel: false, fillOpacity: 0, radius: 0.2,
      });
      fn(board, A, B, C, H);
    });
  };
}

render.demoSinus = hauteur((board, A, B, C, H) => {
  board.create('segment', [A, B], {
    name: '\\(c\\)', label: {anchorY:'top'},
  });
  board.create('angle', [C, B, A], {
    name: '\\(\\beta\\)', radius: 0.5, label: {offset: [0, 0]},
  });
});

render.demoCosinus = hauteur((board, A, B, C, H) => {
  board.create('segment', [A, H], {
    name: '\\(b_1\\)', label: {anchorY:'top'},
  });
  board.create('segment', [H, B], {
    name: '\\(a_1\\)', label: {anchorY:'top'},
  });
});

function triangle_exemple({a, b, c, alpha, beta, gamma}) {
  return el => {
    return initBoard(el, [attrs.screen, {
      boundingbox: [-0.5, 3.5, 5.5, -0.5],
      axis: false, grid: false,
      pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
      defaults: {
        segment: {strokeWidth: 1, withLabel: true},
        point: {withLabel: true},
        angle: {withLabel: false, radius: 0.5},
      },
    }], board => {
      const A = board.create('point', [0, 0], {
        name: '\\(A\\)',
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
      });
      const B = board.create('point', [5, 0], {
        name: '\\(B\\)',
        label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
      });
      const C = board.create('point', [2, 3], {
        name: '\\(C\\)',
        label: {anchorX: 'middle', anchorY: 'bottom', offset: [0, 0]},
      });

      board.create('segment', [A, C], {
        name: `\\(${b ?? ''}\\)`,
        label: {anchorX:'right', anchorY:'middle', offset: [-8, 0]},
      });
      board.create('segment', [A, B], {
        name: `\\(${c ?? ''}\\)`,
        label: {anchorX:'middle', anchorY:'top', offset: [0, 0]},
      });
      board.create('segment', [C, B], {
        name: `\\(${a ?? ''}\\)`,
        label: {anchorX:'left', anchorY:'middle', offset: [10, 0]},
      });

      if (alpha !== undefined) {
        board.create('angle', [B, A, C], {
          name: `\\(${alpha}\\)`, withLabel: true,
          label: {offset: [3, 0]},
        });
      }
      if (beta !== undefined) {
        board.create('angle', [C, B, A], {
          name: `\\(${beta}\\)`, withLabel: true,
        });
      }
      if (gamma !== undefined) {
        board.create('angle', [A, C, B], {
          name: `\\(${gamma}\\)`, withLabel: true,
        });
      }
    });
  };
}

render.sinusExemple1 = triangle_exemple(
  {b: '5.3', alpha: '35^\\circ', gamma: '60^\\circ'});
render.sinusExemple2 = triangle_exemple(
  {a: '4.5', b: '6.8', alpha: '23^\\circ'});
render.cosinusExemple1 = triangle_exemple({b: '5', c: '7', alpha: '34^\\circ'});
</script>

````{container} frame noprint
# Exemple {num2}`exemple`

Soit le triangle ABC avec $b = 5.3$, $\alpha = 35^\circ$ et $\gamma = 60^\circ$.

```{jsxgraph} sinusExemple1
:style: width: 40%; border: none;
```

Un côté et deux angles sont connus, le théorème du sinus peut être utilisé.

Déterminez le troisième angle:
$$\beta = 180^\circ - \alpha - \gamma = 180^\circ - 35^\circ - 60^\circ = 85^\circ$$

Utilisez le théorème du sinus pour calculer $a$ et $c$:
$$\dfrac{a}{\sin(\alpha)}&=&\dfrac{b}{\sin(\beta)}&=&\dfrac{c}{\sin(\gamma)}\\
\dfrac{a}{\sin(35^\circ)}&=&\dfrac{5.3}{\sin(85^\circ)}&=&\dfrac{c}{\sin(60^\circ)}
$$
$$
\implies a &= \dfrac{5.3 \cdot \sin(35^\circ)}{\sin(85^\circ} = 3.1\\
\implies c &= \dfrac{5.3 \cdot \sin(60^\circ)}{\sin(85^\circ} = 4.6
$$
````
````{container} frame noprint
# Exemple {num2}`exemple`

Soit le triangle $ABC$ avec $a = 4.5$, $b = 6.8$ et $\alpha = 23^\circ$.

```{jsxgraph} sinusExemple2
:style: width: 40%; border: none;
```

Deux côtés et l'angle opposé à un des côtés sont connus, le théorème du sinus
peut être utilisé.

Utilisez le théorème du sinus pour calculer $\beta$:
$$\dfrac{a}{\sin(\alpha)}&=&\dfrac{b}{\sin(\beta)}&=&\dfrac{c}{\sin(\gamma)}\\
\dfrac{4.5}{\sin(23^\circ)}&=&\dfrac{6.8}{\sin(\beta)}&=&\dfrac{c}{\sin(\gamma)}\\
$$
$$
\implies \sin(\beta) = \dfrac{6.8 \cdot \sin(23^\circ)}{4.5} \iff \beta_1 = \arcsin\left(\dfrac{6.8 \cdot \sin(23^\circ)}{4.5}\right) = 36.2^\circ
$$

Le dessin ci-dessous montre qu'il y a deux solutions possibles:

```{jsxgraph} sinus2Sol
:style: width: 100%; border: none;
```

$\beta_2 = 180^\circ - \beta_1 = 180^\circ - 36.2^\circ = 143.8^\circ$

Calculez les deux solutions pour $\gamma$:

$$\gamma_1 = 180^\circ - \alpha - \beta_1 = 180^\circ - 23^\circ - 36.2^\circ = 120.8^\circ\\
\gamma_2 = 180^\circ - \alpha - \beta_2 = 180^\circ - 23^\circ - 143.8^\circ = 13.2^\circ$$

Calculez les deux solutions pour $c$:

$\dfrac{a}{\sin(\alpha)}=\dfrac{c}{\sin(\gamma)}$

$$
\dfrac{4.5}{\sin(23^\circ)}&=\dfrac{c}{\sin(120.8^\circ)}\\
\implies c_1 &= \dfrac{4.5 \cdot \sin(120.8^\circ)}{\sin(23^\circ)} = 9.9
$$
$$
\dfrac{4.5}{\sin(23^\circ)}&=\dfrac{c}{\sin(13.2^\circ)}\\
\implies c_2 &= \dfrac{4.5 \cdot \sin(13.2^\circ)}{\sin(23^\circ)} = 2.6
$$
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.sinus2Sol = el => {
  return initBoard(el, [attrs.screen, {
    boundingbox: [-4.5, 5, 7.5, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
      segment: {strokeWidth: 1},
      angle: {radius: 0.5},
    },
  }], board => {
    const A = board.create('point', [6.8, 0], {
      name: '\\(A\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
    });
    const B = board.create('point', [0, Math.tan(23 / 360 * 2 * Math.PI) * 6.8]);
    const C = board.create('point', [0, 0], {
      name: '\\(C\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]},
    });
    const D = board.create('point', [4.5, 0]);
    const E = board.create('point', [-4.5, 0]);

    board.create('segment', [A, C], {
      name: '\\(6.8\\)', withLabel: true,
      label: {anchorX:'middle', anchorY:'top', offset: [0, -5]},
    });
    const l = board.create('line', [A, B], {straightFirst: false});
    board.create('angle', [B, A, C], {
      name: '\\(23^\\circ\\)', label: {offset: [0, -2]},
    });
    const c1 = board.create('arc', [C, D, E], {dash: 2, strokeWidth: 1});
    const B1 = board.create('intersection', [c1, l, 0], {
      size: 2, strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
      name: '\\(B_1\\)', withLabel: true,
      label: {
        strokeColor: JXG.palette.red,
        anchorX: 'middle', anchorY: 'bottom', offset: [0, 1],
      },
    });
    const B2 = board.create('intersection', [c1, l, 1], {
      size: 2, strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
      name: '\\(B_2\\)', withLabel: true,
      label: {
        strokeColor: JXG.palette.red,
        anchorX: 'left', anchorY: 'bottom', offset: [0, 1],
      },
    });
    board.create('segment', [C, B1], {
      dash: 2, strokeColor: JXG.palette.red, strokeWidth: 2,
      name: '\\(a\\)', withLabel: true,
      label: {
        strokeColor: JXG.palette.red,
        anchorX: 'left', anchorY: 'middle', offset: [8, 0],
      },
    });
    board.create('segment', [C, B2], {
      dash: 2, strokeColor: JXG.palette.red, strokeWidth: 2,
      name: '\\(a\\)', withLabel: true,
      label: {
        strokeColor: JXG.palette.red,
        anchorX: 'middle', anchorY: 'bottom', offset: [0, 0],
      },
    });
    board.create('angle', [C, B1, A], {
      name: '\\(\\beta_1\\)',
      strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
      label: {strokeColor: JXG.palette.red},
    });
    board.create('angle', [C, B2, A], {
      name: '\\(\\beta_2\\)',
      strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
      label: {strokeColor: JXG.palette.red},
    });
  });
};
</script>

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-trigo-thm-ex1>` (les 4 premiers),
{numref}`exercice %s<exercice:2-trigo-thm-ex2>`
```

### Théorème du cosinus

````{admonition} Théorème du cosinus
Tout triangle quelconque $ABC$ satisfait les relations suivantes:

```{math}
:class: align-center
a^2 &= b^2 + c^2 - 2bc \cdot \cos(\alpha) \\
b^2 &= a^2 + c^2 - 2ac \cdot \cos(\beta) \\
c^2 &= a^2 + b^2 - 2ab \cdot \cos(\gamma)
```
````

````{container} frame
# Remarque

Que se passe-t-il si $\alpha = 90^\circ$?

$$
a^2 &= b^2 + c^2 - 2bc \cdot \cos(90^\circ)\\
&= b^2 + c^2 - 2bc \cdot 0\\
&= b^2 + c^2
$$

Cela donne le théorème de Pythagore.
````


````{container} frame noprint
# Démonstration

Dans un triangle quelconque, la hauteur $h_c$ issue de sommet C est abaissée.

$a_1 = HB$ et $b_1 = AH$

```{jsxgraph} demoCosinus
:style: width: 60%; border: none;
```

Le théorème de Pythagore appliqué au triangle $AHC$ donne:
```{math}
:class: align-center
h_c^2 = b^2 -b_1^2
```
Comme $a_1 = c - b_1$:
```{math}
:class: align-center
a_1^2 = (c - b_1)^2 = c^2 - 2cb_1 + b_1^2
```

Le théorème de Pythagore appliqué au triangle $BCH$ donne:
```{math}
:class: align-center
a^2 = h_c^2 + a_1^2
```

Des équations précédentes découle:
```{math}
:class: align-center
a^2 = h_c^2 + a_1^2 = (b^2 - b_1^2) + (c^2 - 2cb_1 + b_1^2) = b^2 + c^2 - 2cb_1
```

La trigonométrie appliquée dans le triangle rectangle $AHC$ donne:
```{math}
:class: align-center
\cos(\alpha) = \dfrac{b_1}{b} \implies b_1 = b \cdot \cos(\alpha)\\
\implies a^2 = b^2 + c^2 - 2cb_1 = b^2 + c^2 - 2cb \cdot \cos(\alpha)
```

Les autres relations du thèorème s'obtiennent avec le même raisonnement appliqué
aux deux autres hauteurs.
````

````{admonition} Cas d'utilisation du théorème du cosinus
Le théorème du cosinus peut être utilisé si dans un triangle, sont connus:
- la longueur de deux côtés et l'angle formé par ces deux côtés, ou
- la longueur de ses trois côtés.
```{jsxgraph} utilisationCosinus
:style: width: 50%; border: none;
```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.utilisationCosinus = el => {
  return initBoard(el, [attrs.screen, {
    boundingbox: [-5, 4, 5, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
      angle: {radius: 0.5, withLabel: false},
    },
  }], board => {
    const A = board.create('point', [-4, 0]);
    const B = board.create('point', [-4.5, 3]);
    const C = board.create('point', [-1, 1.5]);

    board.create('segment', [A, C]);
    board.create('segment', [A, B]);
    board.create('segment', [B, C], {dash: 2, strokeWidth: 1});

    board.create('angle', [C, A, B]);

    const D = board.create('point', [1.5, 0]);
    const E = board.create('point', [2.5, 3]);
    const F = board.create('point', [4.5, 0.5]);

    board.create('segment', [E, F]);
    board.create('segment', [D, E]);
    board.create('segment', [F, D]);
  });
};
</script>

````{container} frame noprint
# Exemple {num2}`exemple`

Soit le triangle $ABC$ avec $b = 5$, $c = 7$ et $\alpha = 34^\circ$.

```{jsxgraph} cosinusExemple1
:style: width: 40%; border: none;
```

Deux côtés et l'angle par ces deux côtés sont connus, le théorème du cosinus
peut être utilisé.

Utilisez le théorème du cosinus pour calculer $a$:
$$
a^2 &= b^2 + c^2 - 2bc \cdot \cos(\alpha)\\
a^2 &= 5^2 + 7^2 - 2 \cdot 5 \cdot 7 \cdot \cos(34^\circ)\\
a^2 &= 25 + 49 - 70 \cdot 0.83\\
a^2 &= 15.97\\
a &= \sqrt{15.97} = 4
$$

Utilisez le théorème du cosinus pour calculer $\beta$:
$$
b^2 &= a^2 + c^2 - 2ac \cdot \cos(\beta) \\
\cos(\beta) &= \dfrac{a^2 + c^2 - b^2}{2ac}\\
\cos(\beta) &= \dfrac{4^2 + 7^2 - 5^2}{2 \cdot 4 \cdot 7} = 0.71\\
\beta &= \arccos(0.71) = 44.4^\circ
$$

Remarque: Le théorème du sinus aurait pu être utilisé pour calculer $\beta$.
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-trigo-thm-ex1>` (les 2 derniers),
{numref}`exercice %s<exercice:2-trigo-thm-ex3>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex4>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex5>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex6>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex7>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex8>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex9>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex10>`,
{numref}`exercice %s<exercice:2-trigo-thm-ex11>`
```

## Exercices

### Exercice {num2}`exercice:2-trigo-thm-ex1`

Calculez les grandeurs manquantes des triangles $ABC$ donnés dans le tableau
ci-dessous.

<style>
.angle td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
    text-align: center;
    width: 100px;
}
</style>

```{flex-table}
:class: angle
|$a$    | $b$   | $c$   | $\alpha$      | $\beta$       | $\gamma$
|$7.5$  |       |       | $45.76^\circ$ | $110.58^\circ$|
|       |$8.22$ |       | $39.07^\circ$ |               |$83.96^\circ$
|$15.83$|$12.41$|       | $75.59^\circ$ |               |
|$13.6$ |       |$24.35$| $30.28^\circ$ |               |
|       |$11.24$|$6.03$ | $15.62^\circ$ |               |
|$13$   |$14$   |$15$   |               |               |
```

````{block} solution
```{flex-table}
:class: angle
|$a$    | $b$   | $c$   | $\alpha$      | $\beta$       | $\gamma$
|$7.5$ | $9.8$ | $4.2$ |  $45.76^\circ$ | $110.58^\circ$ |  $23.66^\circ$
|$6.18$ | $8.22$ | $9.75$ | $39.07^\circ$ | $56.97^\circ$ | $83.96^\circ$
|$15.83$ | $12.41$ | $13.39$ | $75.59^\circ$ | $49.4^\circ$ | $55.01^\circ$
|$13.6$ | $26.88$ ou $15.18$ | $24.35$ | $30.28^\circ$ | $85.19^\circ$ ou $34.25^\circ$ | $64.53^\circ$ ou $115.47^\circ$
|$5.67$ | $11.24$ | $6.03$ | $15.62^\circ$ | $147.74^\circ$ | $16.64^\circ$
|$13$ | $14$ | $15$ | $53.13^\circ$ | $59.49^\circ$ | $67.38^\circ$
```
````

### Exercice {num2}`exercice:2-trigo-thm-ex2`

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
- Sur une rive d'un canal rectiligne, la longueur entre deux points $A$ et $B$
  est de $96$ m. Sur l'autre rive se trouve le point $C$. L'angle $\alpha$
  est l'angle entre les directions $AB$ et $AC$, l'angle $\beta$ est celui
  entre les directions $BA$ et $BC$.<br>
  $\alpha=40^\circ$ et $\beta=61^\circ$.

  Déterminez la largeur du canal.
- ```{jsxgraph} canal
  :style: width: 80%; border: none;
  ```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.canal = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-2.5, 7.5, 9, -1],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1},
      point: {
        withLabel: true,
        label: {anchorX: 'middle', anchorY:'top', offset: [0, 0]},
      },
      angle: {radius: 1},
    },
  }], board => {
    const A = board.create('point', [-1, 0],
      {name: '\\(A\\)', withLabel: true});
    const B = board.create('point', [7.5, 1],
      {name: '\\(B\\)', withLabel: true});
    const C = board.create('point', [5, 6], {
      name: '\\(C\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom'},
    });

    const AB = board.create('line', [A, B]);
    board.create('segment', [A, C]);
    board.create('segment', [B, C]);
    board.create('parallel', [AB, C]);

    board.create('angle', [B, A, C], {name: '\\(\\alpha\\)'});
    board.create('angle', [C, B, A], {name: '\\(\\beta\\)'});
  });
};
</script>

```{block} solution
La largeur est d'environ $55$ m.
```

### Exercice {num2}`exercice:2-trigo-thm-ex3`

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
- Sous quel angle $\alpha$ doit être incliné un rayon lumineux venant du point
  $A$ pour que ce rayon soit reflété vers le point $B$ (voir figure
  ci-contre)? <br>
  $AP = 6.69$ cm, $BP = 5.82$ cm et
  $AB = 3.75$ cm.
- ```{jsxgraph} rayonLumineux
  :style: width: 80%; border: none;
  ```
````

`````{tip}
:class: dropdown noprint
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # Loi de la réflexion
  $\alpha_1 = \alpha^{'}_1$
- ```{figure} images/reflexion.png
  :width: 80%
  ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.rayonLumineux = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-1.5, 5, 9, -1],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1},
      point: {
        withLabel: true,
        label: {anchorX: 'middle', anchorY:'top', offset: [0, 0]},
      },
      angle: {radius: 1},
    },
  }], board => {
    const A = board.create('point', [-1, 0], {name: '\\(A\\)'});
    const B = board.create('point', [8.5, 1], {name: '\\(B\\)'});
    const P = board.create('point', [6, 4], {
      name: '\\(P\\)',label: {anchorY: 'bottom'},
    });
    const P1 = board.create('point', [2, 4.5], {withLabel: false});

    board.create('segment', [A, B], {dash: 3});
    board.create('segment', [A, P]);
    board.create('segment', [B, P]);
    board.create('line', [P, P1], {strokeWidth: 2});

    board.create('angle', [P1, P, A], {name: '\\(\\alpha\\)'});
  });
};
</script>

```{block} solution
$\alpha = 73^\circ$
```

### Exercice {num2}`exercice:2-trigo-thm-ex4`

Les côtés d'un cerf-volant ont les mesures $a=b=52.3$ et $c=d=93.4$.
L'angle formé par les côtés $a$ et $b$ est de $115.4^\circ$.

{.lower-alpha-paren}
1. Déterminez les autres angles intérieurs de ce cerf-volant.
2. Calculez son aire.

```{block} solution
{.lower-alpha-paren .columns-2}
1. $115.4^\circ$, $56.5^\circ$ et $94.05^\circ$
2. $4872.7$
```

### Exercice {num2}`exercice:2-trigo-thm-ex5`

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
- En se référant à l'illustration ci-contre, calculez les longueurs des
  segments $BC$, $BD$, $AD$ et
  $AC$, sachant que $AB = 42.5$ cm.

- ```{jsxgraph} trianglesExo
  :style: width: 90%; border: none;
  ```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.trianglesExo = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-2.5, 7, 7, -1],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1},
      point: {
        label: {anchorX: 'middle', anchorY:'top', offset: [0, 0]},
      },
      angle: {radius: 1},
    },
  }], board => {
    const A = board.create('point', [-1, 0], {
      name: '\\(A\\)', withLabel: true
    });
    const B = board.create('point', [4, 0], {
      name: '\\(B\\)', withLabel: true
    });
    const C = board.create('point', [6, 6], {
      name: '\\(C\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom'},
    });
    const AB = board.create('line', [A, B]);
    const P = board.create('point', [0, 2]);
    const y = board.create('parallel', [AB, P], {visible: false});
    const BC = board.create('segment', [B, C]);
    const D = board.create('intersection', [BC, y, 0], {
      name: '\\(D\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [3, 0]},
    });

    board.create('line', [A, B], {straightFirst: false});
    board.create('segment', [A, C]);
    board.create('segment', [A, D]);

    board.create('angle', [B, A, D], {
      radius: 2,
      name: '\\(25^\\circ\\)',
      label: {offset: [0, -2]},
    });
    board.create('angle', [D, A, C], {radius: 2.5, name: '\\(18^\\circ\\)'});
    board.create('angle', [[7,0], B, C], {name: '\\(70^\\circ\\)'});
  });
};
</script>

```{block} solution
$BC = 63.8$ m; $BD = 25.4$ m; $AD = 56.5$ m;
$AC = 88.0$ m.
```

### Exercice {num2}`exercice:2-trigo-thm-ex6`

````{list-grid}
:style: grid-template-columns: 36fr 64fr;
- ```{figure} images/carte-lac-noir.png
  :width: 100%
  ```
- La carte ci-contre, à l'échelle $1:70\,000$, représente la région du
  Lac Noir (Schwarzsee), dans le canton de Fribourg.<br>
  Les altitudes suivantes peuvent être lues sur la carte:

    - Schwarzsee ($S$): $1046$ m
    - Kaiseregg ($K$): $2185$ m
    - Ättenberg ($A$): $1615$ m

  Sur la carte, les segments suivants ont été mesurés:

    - $SK = 4.2$ cm<br>
    - $SA = 4.9$ cm<br>
    - $AK = 5.5$ cm
````
{.lower-alpha-paren}
1.  Déterminez l'angle d'élévation d'une personne qui regarde le sommet du
    Kaiseregg depuis le Lac Noir.
2.  Calculez la distance entre le Lac Noir et le sommet du Kaiseregg.
3.  Déterminez l'angle formé par les segments $SK$ et $SA$ sur le terrain.

````{tip}
:class: dropdown noprint
# Plan avec relief
```{figure} images/carte-relief.png
:width: 100%
```
````

```{block} solution
{.lower-alpha-paren .columns-3}
1. $21.18^\circ$
2. $3152.92$ m
3. $71.71^\circ$
```

### Exercice {num2}`exercice:2-trigo-thm-ex7`

Une tour de $50$ m de hauteur est située sur une pente rectiligne. Si depuis le
pied de la tour, on s'éloigne de $220$ m le long de la pente, on voit la tour
sous un angle vertical de $12.5^\circ$.

Calculez l'angle d'inclinaison de la colline par rapport à un plan horizontal.

```{block} solution
$5.3^\circ$
```

### Exercice {num2}`exercice:2-trigo-thm-ex8`

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
- Un avion parcourt le trajet $ABCD$ suivant: $AB = 30$ km,
  $BC = 50$ km, $CD = 40$ km.<br>
  $\widehat{ABC} = 110^\circ$ et $\widehat{BCD} = 80^\circ$ (voir figure
      ci-contre).

  Calculer la distance à vol d'oiseau entre $A$ et $D$.
- ```{jsxgraph} avion
  :style: width: 100%; border: none;
  ```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.avion = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-0.5, 4, 8, -2],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1},
      point: {withLabel: true, label: {anchorY: 'middle'}},
      angle: {radius: 0.7},
    },
  }], board => {
    const A = board.create('point', [0, 0], {
      name: '\\(A\\)',
      label: {anchorX: 'right', offset: [-5,0]},
    });
    const B = board.create('point', [1.5, 3], {
      name: '\\(B\\)',
      label: {anchorX: 'right', offset: [-5,0]},
    });
    const C = board.create('point', [7, 2.5], {
      name: '\\(C\\)',
      label: {anchorX: 'left', offset: [5,0]},
    });
    const D = board.create('point', [6, -1.5], {
      name: '\\(D\\)',
      label: {anchorX: 'left', offset: [5,0]},
    });

    board.create('segment', [A, B]);
    board.create('segment', [B, C]);
    board.create('segment', [C, D]);

    board.create('angle', [A, B, C], {name: '\\(110^\\circ\\)'});
    board.create('angle', [B, C, D], {name: '\\(80^\\circ\\)'});
  });
};
</script>

```{block} solution
$AD = 54.48$ km.
```

### Exercice {num2}`exercice:2-trigo-thm-ex9`

Soit un triangle isocèle $ABC$ où $c$ est la base et $a = b$. $\alpha$ et
$\beta$ sont les angles adjacents à la base et $\gamma$ son angle opposé.

{.lower-alpha-paren}
1. Déterminez les angles d'un tel triangle si $a = b = 2c$.
2. Déterminez à l'aide du théorème du cosinus le lien entre $c$, $a$ et $\gamma$.
3. Déterminez à l'aide du théorème du cosinus le lien entre $c$, $a$ et $\alpha$.
4. Déterminez $a$ si $c = 6$ et $\alpha = 54^\circ$.
5. Déterminez $c$ si $a = 10.5$ et $\alpha = 38^\circ$.


```{block} solution
{.lower-alpha-paren .columns-2}
1. $\alpha = \beta \approx 75.5^\circ$ et $\gamma \approx 29^\circ$
2. $c^2 = 2a^2 (1- \cos(\gamma))$
3. $0 = c^2 - 2ac \cdot \cos(\alpha)$
4. $a \approx 5.1$
5. $c \approx 16.55$
```

### Exercice {num2}`exercice:2-trigo-thm-ex10`

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
- Soient un trapèze isocèle dont la base $a = 5$, les côtés $b = d = 3$ et
  $\alpha=65^\circ$. Les droites $AD$ et $BC$ se coupent en $E$.

  Calculez la hauteur $h$ du triangle $DCE$.
- ```{jsxgraph} trapeze
  :style: width: 80%; border: none;
  ```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.trapeze = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-0.5, 7, 6, -1],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1, withLabel: true},
      point: {withLabel: true, anchorY: 'middle'},
      angle: {radius: 0.7},
    },
  }], board => {
    const A = board.create('point', [0, 0], {
      name: '\\(A\\)',
      label: {anchorX: 'right', offset: [-3,0]},
    });
    const B = board.create('point', [5, 0], {
      name: '\\(B\\)',
      label: {anchorX: 'left', offset: [3,0]},
    });
    const C = board.create('point', [4, 2.5], {
      name: '\\(C\\)',
      label: {anchorX: 'left', offset: [3,0]},
    });
    const D = board.create('point', [1, 2.5], {
      name: '\\(D\\)',
      label: {anchorX: 'right', offset: [-3,0]},
    });

    board.create('segment', [A, B], {
      name: '\\(a\\)',
      label: {anchorX: 'middle', anchorY: 'top', offset: [0,-3]},
    });
    const BC = board.create('segment', [B, C], {
      name: '\\(b\\)',
      label: {anchorX: 'left', anchorY: 'middle', offset: [5,5]},
    });
    const AD = board.create('segment', [A, D], {
      name: '\\(d\\)',
      label: {anchorX: 'right', anchorY: 'middle', offset: [-5,5]},
    });
    const DC = board.create('segment', [D, C], {withLabel: false});
    board.create('angle', [B, A, D], {name: '\\(\\alpha\\)'});
    const E = board.create('intersection', [BC, AD, 0], {
      name: '\\(E\\)',
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0,2]},
    });
    board.create('segment', [D, E], {dash: 2, withLabel: false});
    board.create('segment', [C, E], {dash: 2, withLabel: false});
    const H = board.create('orthogonalprojection', [E, DC], {withlabel: false});
    board.create('segment', [H, E], {
      name: '\\(h\\)', dash: 2,
      label: {anchorX: 'right', anchorY: 'middle', offset: [-3,-10]},
    });
  });
};
</script>

```{block} solution
$h = 2.64$
```

### Exercice {num2}`exercice:2-trigo-thm-ex11`

````{list-grid}
:style: grid-template-columns: 3fr 5fr;
- Déterminez les longueurs $x$ et $y$ dans la figure ci-contre.

- ```{jsxgraph} triangles4Exo
  :style: width: 80%; border: none;
  ```
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.triangles4Exo = el => {
  return initBoard(el, [attrs.print, {
    boundingbox: [-2, 5.5, 9, -1],
    axis: false, grid: false,
    defaults: {
      segment: {strokeWidth: 1},
      point: {withLabel: true, label: {anchorY: 'middle'}},
      angle: {radius: 0.7 },
    },
  }], board => {
    const A = board.create('point', [0, 0], {
      name: '\\(A\\)',
      label: {anchorX: 'right', offset: [-3,0]},
    });
    const B = board.create('point', [8, 0], {
      name: '\\(B\\)',
      label: {anchorX: 'left', offset: [3,0]},
    });
    const C = board.create('point', [0, 5], {
      name: '\\(C\\)',
      label: {anchorX: 'right', offset: [-3,0]},
    });
    const D = board.create('point', [0, 3], {
      name: '\\(D\\)',
      label: {anchorX: 'right', offset: [-3,0]},
    });
    const P = board.create('point', [0, 2], {withLabel: false});
    const AB = board.create('segment', [A, B], {
      name: '\\(244\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0,-3]},
    });
    const y = board.create('parallel', [AB, P], {visible:false});
    const BC = board.create('segment', [B, C]);
    const E = board.create('intersection', [y, BC, 0], {
      name: '\\(E\\)',
      label: {anchorX: 'left', anchorY: 'middle', offset: [5,5]},
    });
    board.create('segment', [A, D], {
      name: '\\(87.5\\)', withLabel: true,
      label: {anchorX: 'right', anchorY: 'middle', offset: [-5,5]},
    });
    board.create('segment', [C, D], {
      name: '\\(y\\)', withLabel: true,
      label: {anchorX: 'right', anchorY: 'middle', offset: [-5,5]},
    });
    board.create('segment', [A, E], {
      name: '\\(163\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0,0]},
    });
    board.create('segment', [D, E], {
      name: '\\(150\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0,0]},
    });
    board.create('segment', [B, E], {
      name: '\\(112.5\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [5,5]},
    });
    board.create('segment', [C, E], {
      name: '\\(x\\)', withLabel: true,
      label: {anchorX: 'left', anchorY: 'middle', offset: [5,5]},
    });
  });
};
</script>

```{block} solution
$x \approx 175.28$ et $y \approx 72.47$
```

### Challenge

Calculez le côté et les angles inconnus d'un triangle $ABC$, connaissant
$a = 5$, $c = 7$ et sachant de plus que la longueur de la bissectrice issue de
$B$ est égale à $4.5$.

```{solution}
$\alpha = 39.1^\circ$; $\beta = 79^\circ$; $\gamma = 61.9^\circ$; $b = 7.8$.
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```

