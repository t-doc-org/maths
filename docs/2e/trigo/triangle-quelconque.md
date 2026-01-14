% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Triangle quelconque

```{metadata}
subject: "Mathématiques 2e année"
```

## Théorème du sinus

````{admonition} Théorème du sinus
Dans un triangle quelconque $ABC$, les rapports entre la longueur d'un côté
et le sinus de l'angle opposé sont égaux:

```{math}
:class: align-center
\dfrac{a}{\sin(\alpha)}=\dfrac{b}{\sin(\beta)}=\dfrac{c}{\sin(\gamma)}
```
````

### Démonstration

Dans un triangle quelconque, la hauteur $h_c$ issue de sommet C est abaissée.

```{jsxgraph} demo-sinus
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

### Utilisation

````{admonition} Cas d'utilisation du théorème du sinus
Le théorème du sinus peut être utilisé si dans un triangle, sont connus:
- deux angles et la longueur d'un côté, ou
- la longueur de deux côtés et l'angle opposé à un des côtés.
````

```{jsxgraph} utilisation-sinus
:style: width: 80%; border: none;
```

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
initBoard('utilisation-sinus', [defaults, {
    boundingbox: [-5, 4, 7, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1,
                  name: {withLabel: false}
                },
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, withLabel: true, fixed: true,
                showInfobox: false, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1, withLabel: false, radius: 0.5,
                },
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
</script>

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');

function hauteur(name, fn) {
  initBoard(name, [defaults, {
    boundingbox: [-1.5, 2, 5, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1,
                  label: {anchorX: 'middle',offset: [0, 0]}
                },
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, withLabel: true, fixed: true, showInfobox: false,
                label: {anchorX: 'middle', anchorY:'top' ,offset: [0, 0]}
              },
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1,
                label: {strokeColor: JXG.palette.black,
                        anchorX: 'middle',
                        anchorY: 'middle'},
                name: {withLabel: true},
                },
    },
    }], board => {
    const A = board.create('point', [-1, 0], {name: '\\(A\\)', withLabel: true});
    const B = board.create('point', [3, 0], {name: '\\(B\\)', withLabel: true});
    const C = board.create('point', [1.5, 1.5], {
          name: '\\(C\\)', withLabel: true,
          label: {anchorY: 'bottom'}
      });
    const H = board.create('point', [1.5, 0], {
          name: '\\(H\\)', withLabel: true,
          label: {anchorY: 'top'}
      });

    board.create('segment', [A, C], {
      name: '\\(b\\)', withLabel: true,
      label: {anchorY:'bottom'}
    });
    board.create('segment', [B, C], {
      name: '\\(a\\)', withLabel: true,
      label: {anchorY:'bottom', offset: [2, 0]}
    });
    board.create('segment', [H, C], {
      name: '\\(h_c\\)', withLabel: true,
      label: {anchorX: 'right', anchorY:'middle', offset: [-5, 0]}
    });

    board.create('angle', [B, A, C], {
          name: '\\(\\alpha\\)',
          label: {offset: [-23, -5]}
    });
    board.create('angle', [B, H, C], {
      withLabel: false, fillOpacity: 0, radius: 0.2
    });
    fn(board, A, B, C, H);
  });
}

hauteur('demo-sinus', (board, A, B, C, H) => {
  board.create('segment', [A, B], {
    name: '\\(c\\)', withLabel: true,
    label: {anchorY:'top'}
  });
  board.create('angle', [C, B, A], {
        name: '\\(\\beta\\)',
        label: {offset: [23, -12]}
  });
});

hauteur('demo-cosinus', (board, A, B, C, H) => {
  board.create('segment', [A, H], {
    name: '\\(b_1\\)', withLabel: true,
    label: {anchorY:'top'}
    });
  board.create('segment', [H, B], {
    name: '\\(a_1\\)', withLabel: true,
    label: {anchorY:'top'}
    });
});


function triangle_exemple(name, {a, b, c, alpha, beta, gamma}) {
  initBoard(name, [defaults, {
      boundingbox: [-0.5, 3.5, 5.5, -0.5],
      axis: false, grid: false,
      pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
      defaults: {
          segment: {strokeColor: JXG.palette.black, strokeWidth: 1,
                    name: {withLabel: false}
                  },
          line: {strokeColor: JXG.palette.black, strokeWidth: 1},
          point: {size: 0, withLabel: true, fixed: true, showInfobox: false,
                  withLabel: false
                },
          angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                  fillOpacity: 0.2, strokeWidth: 1, withLabel: false,
                  radius: 0.5,
                  label: {strokeColor: JXG.palette.black,
                          anchorX: 'middle',
                          anchorY: 'middle'},
                  },
      },
  }], board => {
    const A = board.create('point', [0, 0], {
      name: '\\(A\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const B = board.create('point', [5, 0], {
      name: '\\(B\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
    });
    const C = board.create('point', [2, 3], {
      name: '\\(C\\)', withLabel: true,
      label: {anchorX: 'middle', anchorY: 'bottom', offset: [0, 0]}
    });

    board.create('segment', [A, C], {
      name: `\\(${b ?? ''}\\)`, withLabel: true,
      label: {anchorX:'right', anchorY:'middle', offset: [-8, 0]}
    });
    board.create('segment', [A, B], {
      name: `\\(${c ?? ''}\\)`, withLabel: true,
      label: {anchorX:'middle', anchorY:'top', offset: [0, 0]}
    });
    board.create('segment', [C, B], {
      name: `\\(${a ?? ''}\\)`, withLabel: true,
      label: {anchorX:'left', anchorY:'middle', offset: [10, 0]}
    });

    if (alpha !== undefined) {
      board.create('angle', [B, A, C], {
        name: `\\(${alpha}\\)`, withLabel: true,
        label: {offset: [3, 0]}
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
}

triangle_exemple('sinus-exemple-1',
                 {b: '5.3', alpha: '35^\\circ', gamma: '60^\\circ'});
triangle_exemple('sinus-exemple-2', {a: '4.5', b: '6.8', alpha: '23^\\circ'});
triangle_exemple('cosinus-exemple-1', {b: '5', c: '7', alpha: '34^\\circ'});
</script>


### Exemple {num2}`exemple`

Soit le triangle ABC avec $b = 5.3$, $\alpha = 35^\circ$ et $\gamma = 60^\circ$.

```{jsxgraph} sinus-exemple-1
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

### Exemple {num2}`exemple`

Soit le triangle $ABC$ avec $a = 4.5$, $b = 6.8$ et $\alpha = 23^\circ$.

```{jsxgraph} sinus-exemple-2
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

```{jsxgraph} sinus-2-sol
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


<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
initBoard('sinus-2-sol', [defaults, {
    boundingbox: [-4.5, 5, 7.5, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1,
                  name: {withLabel: false}
                },
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, withLabel: true, fixed: true, showInfobox: false,
                withLabel: false
              },
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1, withLabel: false, radius: 0.5,
                label: {strokeColor: JXG.palette.black,
                        anchorX: 'middle',
                        anchorY: 'middle'},
                },
    },
}], board => {
  const A = board.create('point', [6.8, 0], {
    name: '\\(A\\)', withLabel: true,
    label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
  });
  const B = board.create('point', [0, Math.tan(23 / 360 * 2 * Math.PI) * 6.8]);
  const C = board.create('point', [0, 0], {
    name: '\\(C\\)', withLabel: true,
    label: {anchorX: 'middle', anchorY: 'top', offset: [0, 0]}
  });
  const D = board.create('point', [4.5, 0]);
  const E = board.create('point', [-4.5, 0]);

  board.create('segment', [A, C], {
    name: '\\(6.8\\)', withLabel: true,
    label: {anchorX:'middle', anchorY:'top', offset: [0, -5]}
  });
  const l = board.create('line', [A, B], {straightFirst: false});
  board.create('angle', [B, A, C], {
    name: '\\(23^\\circ\\)', withLabel: true, label: {offset: [0, -2]}
  });
  const c1 = board.create('arc', [C, D, E], {dash: 2, strokeWidth: 1});
  const B1 = board.create('intersection', [c1, l, 0], {
    size: 2, strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
    name: '\\(B_1\\)', withLabel: true,
    label: {strokeColor: JXG.palette.red,
            anchorX: 'middle', anchorY: 'bottom', offset: [0, 1]
          }
  });
  const B2 = board.create('intersection', [c1, l, 1], {
    size: 2, strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
    name: '\\(B_2\\)', withLabel: true,
    label: {strokeColor: JXG.palette.red,
            anchorX: 'left', anchorY: 'bottom', offset: [0, 1]
          }
  });
  board.create('segment', [C, B1], {
    dash: 2, strokeColor: JXG.palette.red, strokeWidth: 2,
    name: '\\(a\\)', withLabel: true,
    label: {strokeColor: JXG.palette.red,
            anchorX: 'left', anchorY: 'middle', offset: [8, 0]
          }
  });
  board.create('segment', [C, B2], {
    dash: 2, strokeColor: JXG.palette.red, strokeWidth: 2,
    name: '\\(a\\)', withLabel: true,
    label: {strokeColor: JXG.palette.red,
            anchorX: 'middle', anchorY: 'bottom', offset: [0, 0]
          }
  });
  board.create('angle', [C, B1, A], {
    name: '\\(\\beta_1\\)', withLabel: true,
    strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}
  });
  board.create('angle', [C, B2, A], {
    name: '\\(\\beta_2\\)', withLabel: true,
    strokeColor: JXG.palette.red, fillColor: JXG.palette.red,
    label: {strokeColor: JXG.palette.red}
  });
});
</script>


## Théorème du cosinus

````{admonition} Théorème du cosinus
Tout triangle quelconque $ABC$ satisfait les relations suivantes:

```{math}
:class: align-center
a^2 &= b^2 + c^2 - 2bc \cdot \cos(\alpha) \\
b^2 &= a^2 + c^2 - 2ac \cdot \cos(\beta) \\
c^2 &= a^2 + b^2 - 2ab \cdot \cos(\gamma)
```
````

### Démonstration

Dans un triangle quelconque, la hauteur $h_c$ issue de sommet C est abaissée.

$a_1 = \overline{HB}$ et $b_1 = \overline{AH}$

```{jsxgraph} demo-cosinus
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


### Utilisation

```{admonition} Cas d'utilisation du théorème du cosinus
Le théorème du cosinus peut être utilisé si dans un triangle, sont connus:
- la longueur de deux côtés et l'angle formé par ces deux côtés, ou
- la longueur de ses trois côtés.
```

```{jsxgraph} utilisation-cosinus
:style: width: 60%; border: none;
```

<script type="module">
const {defaults, initBoard, JXG} = await tdoc.import('jsxgraph.js');
initBoard('utilisation-cosinus', [defaults, {
    boundingbox: [-5, 4, 5, -1],
    axis: false, grid: false,
    pan: {enabled: false}, zoom: {enabled: false}, showFullscreen: false,
    defaults: {
        segment: {strokeColor: JXG.palette.black, strokeWidth: 1,
                  name: {withLabel: false}
                },
        line: {strokeColor: JXG.palette.black, strokeWidth: 1},
        point: {size: 0, withLabel: true, fixed: true,
                showInfobox: false, withLabel: false},
        angle: {strokeColor: JXG.palette.black, fillColor: JXG.palette.black,
                fillOpacity: 0.2, strokeWidth: 1, withLabel: false, radius: 0.5,
                },
    },
}], board => {
  const A = board.create('point', [-4, 0]);
  const B = board.create('point', [-4.5, 3]);
  const C = board.create('point', [-1, 1.5]);

  board.create('segment', [A, C], {strokeWidth: 2});
  board.create('segment', [A, B], {strokeWidth: 2});
  board.create('segment', [B, C], {dash: 2});

  board.create('angle', [C, A, B]);

  const D = board.create('point', [1.5, 0]);
  const E = board.create('point', [2.5, 3]);
  const F = board.create('point', [4.5, 0.5]);

  board.create('segment', [E, F], {strokeWidth: 2});
  board.create('segment', [D, E], {strokeWidth: 2});
  board.create('segment', [F, D], {strokeWidth: 2});

});
</script>

### Exemple {num2}`exemple`

Soit le triangle $ABC$ avec $b = 5$, $c = 7$ et $\alpha = 34^\circ$.

```{jsxgraph} cosinus-exemple-1
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
