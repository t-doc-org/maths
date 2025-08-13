% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 David Rueda
% Copyright 2025 Nicolas Martignoni
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions réciproques et fonctions composées

```{metadata}
subject: "Mathématiques 2e année"
```

Références: Cours de David Rueda et Nicolas Martignoni

## Fonctions réciproques

```{admonition} Définition
:class: note
La **réciproque** de la fonction $f: A \to B$ est la relation $g: B \to A$ telle
que  si $f(x) = y$, alors $g(y) = x$.
```

### Exemple {num1}`exemple`

Soit la fonction $f(x) = 2x - 1$.

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-7.5, 7.5, 7.5, -7.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            // TODO: Trouver comment utiliser "labels"
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[1]
                                               - zero.usrCoords[1]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
        y: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[2]
                                               - zero.usrCoords[2]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: false, size: 0.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};
initBoard('droite-theorie', attrs, board => {
    const f = x => 2 * x - 1;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.35fr right'}
    });
    board.create('point', [-3, f(-3)]);
    board.create('point', [-2, f(-2)]);
    board.create('point', [-1, f(-1)]);
    board.create('point', [0, f(0)]);
    board.create('point', [1, f(1)]);
    board.create('point', [2, f(2)]);
    board.create('point', [3, f(3)]);
});

initBoard('reciproque-theorie', attrs, board => {
    const g = x => x / 2 + 1 / 2;
    board.create('functiongraph', [g], {
        name: `\\(g\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('point', [-7, g(-7)]);
    board.create('point', [-5, g(-5)]);
    board.create('point', [-3, g(-3)]);
    board.create('point', [-1, g(-1)]);
    board.create('point', [1, g(1)]);
    board.create('point', [3, g(3)]);
    board.create('point', [5, g(5)]);
    board.create('functiongraph', [x => 2*x-1], {
        strokeOpacity: 0.3,
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.35fr right'}
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});

</script>

````{list-grid}
:style: grid-template-columns: 4fr 3fr;
-   # Tableau de valeurs
    ```{flex-table}
    :class: function-table
    |$x$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$
    |$f(x)=2x-1$|$-7$|$-5$|$-3$|$-1$|$1$|$3$|$5$
    ```
-   # Représentation graphique
    ```{jsxgraph} droite-theorie
    :style: width: 80%;
    ```
````

La réciproque de $f$, notée ici $g(x)$, est le symétrique de $f$ par
rapport à la droite identité $y = x$.


````{list-grid}
:style: grid-template-columns: 4fr 3fr;
-   # Tableau de valeurs
    ```{flex-table}
    :class: function-table
    |$x$|$-7$|$-5$|$-3$|$-1$|$1$|$3$|$5$
    |$g(x)$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$
    ```
-   # Représentation graphique
    ```{jsxgraph} reciproque-theorie
    :style: width: 80%;
    ```
````

### Exemple {num1}`exemple`

Déterminez la réciproque de $f(x)=\dfrac{x}{3}+1$.

$$
f(x)&=\dfrac{x}{3}+1 \qquad \qquad &&\text{remplacez } f(x) \text{ par } y
\text{ et isolez } x\\
y&= \dfrac{x}{3}+1 \qquad \qquad &&|-1\\
y-1&= \dfrac{x}{3} \qquad \qquad &&| \cdot 3\\
3(y-1) &=x\\
3y-3 &=x \qquad \qquad &&\text{la réciproque est le membre qui contient le } y
\text{ en remplaçant } y \text{ par } x
$$

La réciproque de $f$ est $g(x) = 3x-3$. Dans ce cas, $g$ est une aussi fonction.

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-4.5, 4.5, 4.5, -4.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            // TODO: Trouver comment utiliser "labels"
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[1]
                                               - zero.usrCoords[1]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
        y: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[2]
                                               - zero.usrCoords[2]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: false, size: 0.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};
initBoard('reciproque-ex1', attrs, board => {
    const f = x => x /3 + 1;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('functiongraph', [x => 3 * x-3], {
        strokeColor: JXG.palette.red,
        name: `\\(g\\)`, withLabel: true,
        label: {position: '0.5fr right', strokeColor: JXG.palette.red}
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});
initBoard('reciproque-ex2', attrs, board => {
    const f = x => x ** 2 - 3;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.27fr right'}
    });
    board.create('curve', [t => t ** 2 - 3, t => t, -100, 100], {
        strokeColor: JXG.palette.red,
    });
    board.create('text', [1, -3, `réciproque de \\(f\\)`], {
        strokeColor: JXG.palette.red,
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});

</script>

```{jsxgraph} reciproque-ex1
:style: width: 40%;
```

### Exemple {num1}`exemple:reciproque`

Déterminez la réciproque de $f(x)=x^2-3$.

$$
f(x)&=x^2-3 \qquad \qquad &&\text{remplacez } f(x) \text{ par } y
\text{ et isolez } x\\
y&= x^2-3 \qquad \qquad &&|+3\\
y+3&= x^2 \qquad \qquad &&| \cdot 3\\
\pm \sqrt{y+3} &=x \qquad \qquad &&\text{la réciproque est le membre qui
contient le } y \text{ en remplaçant } y \text{ par } x
$$

La réciproque de $f$ est $\pm \sqrt{x+3}$. Ce n'est pas une fonction!

```{jsxgraph} reciproque-ex2
:style: width: 40%;
```

````{admonition} Définition
:class: note
Une **fonction bijective** ou **bijection**, $f$, est une fonction telle que
tous les éléments de l'ensemble de définition ont des images différentes par
$f$, c'est-à-dire:

```{math}
:class: align-center
\forall \, x_1 \, \text{et} \, x_2 \in D_f \, \text{, si} \,  x_1 \neq x_2
\Rightarrow f(x_1) \neq f(x_2)
```
````

### Exemple {num1}`exemple`

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-4, 5.5, 4, -2.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            // TODO: Trouver comment utiliser "labels"
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[1]
                                               - zero.usrCoords[1]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
        y: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[2]
                                               - zero.usrCoords[2]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: false, size: 0.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};
initBoard('non-bijection', attrs, board => {
    const f = x => -1 * x ** 2 + 4;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.75fr right'}
    });
    board.create('functiongraph', [x => 3, -1, 1], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
    board.create('curve', [t => -1, t => t, 0, 3], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
    board.create('curve', [t => 1, t => t, 0, 3], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
});
initBoard('bijection1', attrs, board => {
    const f = x => -1 * x ** 2 + 4;
    board.create('functiongraph', [f, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.5fr right'}
    });
    board.create('functiongraph', [x => 3, 0, 1], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
    board.create('curve', [t => 1, t => t, 0, 3], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
});
initBoard('bijection2', attrs, board => {
    const f = x => -1 * x ** 2 + 4;
    board.create('functiongraph', [f, undefined, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.5fr left'}
    });
    board.create('functiongraph', [x => 3, -1, 0], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
    board.create('curve', [t => -1, t => t, 0, 3], {
        strokeColor: JXG.palette.black, dash: 3, strokeWidth: 1
    });
});

</script>

````{list-grid}
:style: grid-template-columns: 3fr 3fr;
-   La fonction $f(x) = -x^2+4$ n'est pas une bijection, car $f(-1)=f(1)=3$.
-   ```{jsxgraph} non-bijection
    :style: width: 50%;
    ```
-   En resteignant le domaine de définition à $D_f=\mathbb{R_+}$, la fonction
    $f(x) = -x^2+4$ devient une bijection.
-   ```{jsxgraph} bijection1
    :style: width: 50%;
    ```
-   De même en resteignant le domaine de définition à $D_f=\mathbb{R_-}$, la fonction
    $f(x) = -x^2+4$ devient une bijection.
-   ```{jsxgraph} bijection2
    :style: width: 50%;
    ```
````

````{admonition} Définition
:class: note
La **fonction réciproque**  de la fonction bijective $f: A \to B$ est la
fonction $f^{-1}: B \to A$ telle que si $f(x) = y$, alors $f^{-1}(y) = x$.

Remarque:
$f^{-1}$ est parfois notée ${}^r\!f$
````

### Exemple {num1}`exemple`

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-4.5, 4.5, 4.5, -4.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            // TODO: Trouver comment utiliser "labels"
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[1]
                                               - zero.usrCoords[1]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
        y: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
            generateLabelText: function(tick, zero) {
                const v = this.formatLabelText(tick.usrCoords[2]
                                               - zero.usrCoords[2]);
                if (v !== '1') return '';
                return `\\(${v}\\)`;
            },
        }},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: false, size: 0.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};

initBoard('bijection3', attrs, board => {
    const f = x => x ** 2 - 3;
    board.create('functiongraph', [f, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr right'}
    });
    board.create('functiongraph', [x => Math.sqrt(x+3)], {
        strokeColor: JXG.palette.red,
        name: `\\(f^{-1}\\)`, withLabel: true,
        label: {position: '0.24fr left', strokeColor: JXG.palette.red}
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});

</script>

````{list-grid}
:style: grid-template-columns: 3fr 3fr;
-   En reprenant l'{numref}`exemple %s<exemple:reciproque>`, nous constatons que
    la fonction $f(x) = x^2 - 3$ n'est pas bijective, car $f(-2)=f(2)=1$.\
    Nous pouvons restreindre le domaine de définition $D_f=\mathbb{R_+}$ pour
    qu'elle le devienne. Ainsi nous pouvons déterminer la fonction réciproque:
     $f^{-1}(x)=\sqrt{x+3}$.

    Nous pouvons faire de même avec $D_f=\mathbb{R_-}$. Dans ce cas,
    $f^{-1}(x)=-\sqrt{x+3}$.

-   ```{jsxgraph} bijection3
    :style: width: 100%;
    ```
````

### Exemple {num1}`exemple`

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-7.5, 7.5, 7.5, -7.5], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
        }},
        y: {ticks: {
            drawLabels: true, insertTicks: false, ticksDistance: 1,
            minorTicks: 0,
        }},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeColor: JXG.palette.blue, strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: false, size: 0.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
        curve:  {strokeColor: JXG.palette.black, strokeWidth: 1.5},
    },
};

initBoard('bijection3', attrs, board => {
    const f = x => x ** 2 - 3;
    board.create('functiongraph', [f, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr right'}
    });
    board.create('functiongraph', [x => Math.sqrt(x+3)], {
        strokeColor: JXG.palette.red,
        name: `\\(f^{-1}\\)`, withLabel: true,
        label: {position: '0.24fr left', strokeColor: JXG.palette.red}
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});
initBoard('bijection4', attrs, board => {
    board.create('functiongraph', [x => (3*x)/(2*x+1)], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('functiongraph', [x => (-1*x)/(2*x-3)], {
        strokeColor: JXG.palette.red,
        name: `\\(f^{-1}\\)`, withLabel: true,
        label: {position: '0.1fr left', strokeColor: JXG.palette.red}
    });
    board.create('functiongraph', [x => x], {
        strokeOpacity: 0.3,
        strokeColor: JXG.palette.black,
        dash: 3,
    });
});

</script>

Déterminez la fonction réciproque de $f(x) = \dfrac{3x}{2x + 1}$.

Le domaine de définition est $D_f=\mathbb{R} \setminus \{-\frac{1}{2}\}$ (le
dénominateur ne doit pas être nul).

$$
y&=\dfrac{3x}{2x + 1} \qquad \qquad &&| \cdot (2x+1)\\
y(2x+1)&=3x \qquad \qquad &&| \text{ développez}\\
2xy+y&= 3x \qquad \qquad &&| -y - 3x\\
2xy-3x&= -y \qquad \qquad &&| \text{ mettre en évidence}\\
x(2y-3)&= -y \qquad \qquad &&| \div (2y-3)\\
x&= -\dfrac{y}{2y-3}
$$

$f(x)^{-1}=-\dfrac{x}{2x-3}$

```{jsxgraph} bijection4
:style: width: 70%;
```


````{admonition} Propriétés
:class: note
-   Une fonction réelle est bijective si et seulement si toute droite horizontale
    coupe sa représentation graphique au plus une fois.
-   La fonction réciproque de la fonction réciproque d'une fonction $f$ est
    égale à la fonction originale $f$:

    ```{math}
    :class: align-center
    f^{-1}\bigl( f^{-1}(x) \bigr) = f(x).
    ```
-   Le représentation graphique d'une fonction bijective $f$ et celle de sa
    fonction réciproque $f^{-1}$ sont symétriques par rapport à la bissectrice
    du premier et du troisième quadrant, c'est-à-dire à par rapport à la droite
    identité $y = x$.
-   Les fonctions paires ne sont pas bijectives, puisque que $f(x) = f(-x)$, ce
    qui signifie que $x$ et $-x$ ont la même image.\
    Les fonctions impaires ne sont pas toutes bijectives.
-   Les fonctions dont l'expression est un monôme sont bijectives si l'exposant
    est impair et non bijectives si l'exposant est pair.\
    En restreignant l'ensemble de définition d'une fonction monôme avec exposant
    pair sur $\mathbb{R_+}$ ou sur $\mathbb{R_-}$, on obtient deux fonctions bijectives.
````

## Fonctions composées

````{admonition} Définition
:class: note
Soient $A$, $B$ et $C$ trois sous-ensembles de $\mathbb{R}$ et $f:A \to B$ et
$g: B \to C$ deux fonctions réelles.

La **fonction composée** de $g$ et $f$ est la fonction qui associe à tout
élément $x \in A$, l'image $g\bigl(f(x)\bigr) \in C$.

Cette fonction se note $g \circ f$, qui se lit "$g$ rond $f$".
On a
```{math}
:class: align-center
g \circ f: A &\to C\\
x &\mapsto g \bigl(f(x) \bigr)
```
et donc $\bigl( g \circ f \bigr)(x) = g\bigl(f(x)\bigr)$.
````

````{admonition} Propriétés
:class: note
-   De manière générale,
    ```{math}
    :class: align-center
    f\bigl(g(x)\bigr) \neq g\bigl(f(x)\bigr) \quad \text{ou}\quad
    \bigl( f \circ g \bigr)(x) \neq \bigl( g \circ f \bigr)(x).
    ```
-   La composition de fonctions est associative, c'est-à-dire
    ```{math}
    :class: align-center
    f \circ (g \circ h) = (f \circ g) \circ h.
    ```
````

````{admonition} Théorème
:class: note
Soient deux fonctions réelles $f \colon A \to B$ et $g \colon B \to A$, la
fonction $g$ est la réciproque de $f$ si et seulement si les fonctions
composées $f \circ g$ et $g \circ f$ sont égale à la fonction identité:

```{math}
:class: align-center
g(x) = f^{-1}(x) \Longleftrightarrow f\bigl(g(x)\bigr) = g\bigl(f(x)\bigr) = x.
```
````
