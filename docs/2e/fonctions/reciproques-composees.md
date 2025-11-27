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

### Exemple {num2}`exemple`

Soit la fonction $f(x) = 2x - 1$.

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

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive,  withAxesLabels([1], [1]), {
    boundingBox: [-7.5, 7.5, 7.5, -7.5],
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
        line: {dash: 2, strokeOpacity: 0.3},
        point: {size: 0.5, withLabel: false},
    },
}];
initBoard('droite-theorie', attrs, board => {
    const f = x => 2 * x - 1;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.35fr right'}
    });
    for (const x of [-3, -2, -1, 0, 1, 2, 3]) {
        board.create('point', [x, f(x)]);
    }
});
initBoard('reciproque-theorie', attrs, board => {
    const g = x => x / 2 + 1 / 2;
    board.create('functiongraph', [g], {
        name: `\\(g\\)`, withLabel: true, strokeColor: JXG.palette.red,
        label: {position: '0.1fr left', strokeColor: JXG.palette.red}
    });
    for (const x of [-7, -5, -3, -1, 1, 3, 5]) {
        board.create('point', [x, g(x)]);
    }
    board.create('functiongraph', [x => 2 * x - 1], {
        strokeOpacity: 0.3,
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.35fr right'}
    });
    board.create('line', [0, 1, -1]);
});
</script>

### Exemple {num2}`exemple`

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

La réciproque de $f$ est $g(x) = 3x-3$. Dans ce cas, $g$ est aussi une fonction.

```{jsxgraph} reciproque-ex1
:style: width: 40%;
```

### Exemple {num2}`exemple:reciproque`

Déterminez la réciproque de $f(x)=x^2-3$.

$$
f(x)&=x^2-3 \qquad \qquad &&\text{remplacez } f(x) \text{ par } y
\text{ et isolez } x\\
y&= x^2-3 \qquad \qquad &&|+3\\
y+3&= x^2 \qquad \qquad &&| \text{prendre la racine carré de chaque côté}\\
\pm \sqrt{y+3} &=x \qquad \qquad &&\text{la réciproque est le membre qui
contient le } y \text{ en remplaçant } y \text{ par } x
$$

La réciproque de $f$ est $\pm \sqrt{x+3}$. Ce n'est pas une fonction!

```{jsxgraph} reciproque-ex2
:style: width: 40%;
```

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, withAxesLabels([1], [1]), {
    boundingBox: [-4.5, 4.5, 4.5, -4.5],
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
        line: {dash: 2, strokeOpacity: 0.3},
    },
}];
initBoard('reciproque-ex1', attrs, board => {
    board.create('functiongraph', [x => x / 3 + 1], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('functiongraph', [x => 3 * x - 3], {
        strokeColor: JXG.palette.red,
        name: `\\(g\\)`, withLabel: true,
        label: {position: '0.5fr right', strokeColor: JXG.palette.red}
    });
    board.create('line', [0, 1, -1]);
});
initBoard('reciproque-ex2', attrs, board => {
    const f = x => x ** 2 - 3;
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.27fr right'}
    });
    board.create('curve', [t => f(t), t => t, -100, 100], {
        strokeColor: JXG.palette.red,
    });
    board.create('text', [1, -3, `réciproque de \\(f\\)`], {
        strokeColor: JXG.palette.red,
    });
    board.create('line', [0, 1, -1]);
});
</script>

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

### Exemple {num2}`exemple`

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

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, withAxesLabels([1], [1]), {
    boundingBox: [-4, 5.5, 4, -2.5],
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
        segment: {dash: 2},
    },
}];
const f = x => -1 * x ** 2 + 4;
initBoard('non-bijection', attrs, board => {
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.75fr right'}
    });
    board.create('segment', [[-1, 0], [-1, 3]]);
    board.create('segment', [[1, 0], [1, 3]]);
    board.create('segment', [[-1, 3], [1, 3]]);
});
initBoard('bijection1', attrs, board => {
    board.create('functiongraph', [f, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.5fr right'}
    });
    board.create('segment', [[1, 0], [1, 3]]);
    board.create('segment', [[0, 3], [1, 3]]);
});
initBoard('bijection2', attrs, board => {
    board.create('functiongraph', [f, undefined, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.5fr right'}
    });
    board.create('segment', [[-1, 0], [-1, 3]]);
    board.create('segment', [[-1, 3], [0, 3]]);
});
</script>

````{admonition} Définition
:class: note
La **fonction réciproque**  de la fonction bijective $f: A \to B$ est la
fonction $f^{-1}: B \to A$ telle que si $f(x) = y$, alors $f^{-1}(y) = x$.

Remarque:
$f^{-1}$ est parfois notée ${}^r\!f$
````

### Exemple {num2}`exemple`

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

<script type="module">
const {defaults, initBoard, JXG, withAxesLabels, nonInteractive} =
    await tdoc.import('jsxgraph.js');
initBoard('bijection3', [defaults, nonInteractive, withAxesLabels([1], [1]), {
    boundingBox: [-4.5, 4.5, 4.5, -4.5],
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
        line: {dash: 2, strokeOpacity: 0.3},
    },
}], board => {
    board.create('functiongraph', [x => x ** 2 - 3, 0], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr right'}
    });
    board.create('functiongraph', [x => Math.sqrt(x + 3)], {
        strokeColor: JXG.palette.red,
        name: `\\(f^{-1}\\)`, withLabel: true,
        label: {position: '0.24fr left', strokeColor: JXG.palette.red}
    });
    board.create('line', [0, 1, -1]);
});
</script>

### Exemple {num2}`exemple`

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

$f^{-1}(x)=-\dfrac{x}{2x-3}$

```{jsxgraph} bijection4
:style: width: 70%;
```

<script type="module">
const {defaults, initBoard, JXG, nonInteractive} =
    await tdoc.import('jsxgraph.js');
const attrs = [defaults, nonInteractive, {
    boundingBox: [-7.5, 7.5, 7.5, -7.5],
    defaultAxes: {
        x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
        y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
        line: {dash: 2, strokeOpacity: 0.3},
    },
}];
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
    board.create('line', [0, 1, -1]);
});
</script>

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

### Exemple {num2}`exemple`

1.  Soient les fonctions $f(x) = x + 1$ et $g(x) = 3x$, calculez $(f \circ g)(x)$.
    $$
    (f \circ g)(x)  &= f(g(x))  \qquad \qquad &&\text{remplacez } g(x) \text{ par sa valeur} \\
                    &= f({\color{red}3x})  \qquad \qquad &&\text{remplacez la valeur de } x \text{ de } f(x) \text{ par } 3x\\
                    &= {\color{red}3x} + 1
    $$
2.  Soient les fonctions $f(x) = x^2 + 2$ et $g(x) = 2x - 3$, calculez $(f \circ g)(x)$.
    $$
    (f \circ g)(x)  &= f(g(x))  \qquad \qquad &&\text{remplacez } g(x) \text{ par sa valeur} \\
                    &= f({\color{red}2x - 3})  \qquad \qquad &&\text{remplacez la valeur de } x \text{ de } f(x) \text{ par } 2x-3\\
                    &= ({\color{red}2x - 3})^2 + 2\\
                    &= 4x^2-12x+9 + 2\\
                    &= 4x^2-12x+11
    $$
2.  Soient les fonctions $f(x) = \dfrac{1}{2}x$ et $g(x) = \sqrt{x}$, calculez $(f \circ g)(x)$.
    $$
    (f \circ g)(x)  &= f(g(x))  \qquad \qquad &&\text{remplacez } g(x) \text{ par sa valeur} \\
                    &= f({\color{red}\sqrt{x}})  \qquad \qquad &&\text{remplacez la valeur de } x \text{ de } f(x) \text{ par } \sqrt{x}\\
                    &= \dfrac{1}{2}{\color{red}\sqrt{x}}\\
                    &= \dfrac{\sqrt{x}}{2}
    $$

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

### Exemple {num2}`exemple`

Soient les fonctions $f(x) = 3x+5$ et $g(x) = (x+1)^2$, calculez $(f \circ g)(x)$.
$$
(f \circ g)(x)  &= f(g(x))  \\
                &= f({\color{red}(x+1)^2})\\
                &= 3{\color{red}(x+1)^2} + 5\\
                &=3(x^2+2x+1)+5\\
                &=3x^2+6x+3+5\\
                &=3x^2+6x+8
$$
$$
(g \circ f)(x)  &= g(f(x))  \\
                &= g({\color{red}3x+5})\\
                &= (({\color{red}3x+5}) + 1)^2\\
                &=(3x+6)^2\\
                &=9x^2+36x+36
$$
$\Rightarrow (f \circ g)(x) \neq (g \circ f)(x)$

### Exemple {num2}`exemple`

Soient les fonctions $f(x) = x^2$, $g(x) = 3x$ et $h(x) =x-1$, calculez $(f \circ g \circ h)(x)$,
$(f \circ (g \circ h))(x)$ et $((f \circ g) \circ h)(x)$.
$$
(f \circ g \circ h)(x)  &= f(g(h(x)))  \\
                        &= f(g(x-1))\\
                        &= f(3(x-1))\\
                        &=(3(x-1))^2\\
                        &=(3x-3)^2\\
                        &=9x^2-18x+9
$$

$$
(g \circ h)(x)  &= g(h(x))  \\
                &= g(x-1)\\
                &= 3(x-1)\\
                &=3x-3
$$

$$
(f \circ (g \circ h))(x)    &= f((g \circ h)(x))\\
                            &= f(3x-3)  \\
                            &=(3x-3)^2\\
                            &=9x^2-18x+9
$$

$$
(f \circ g)(x)  &= f(g(x))  \\
                &= f(3x)\\
                &= (3x)^2\\
                &= 9x^2
$$

$$
((f \circ g) \circ h)(x)    &= (f \circ g)(h(x)) \\
                            &= (f \circ g)(x-1)\\
                            &= 9(x-1)^2\\
                            &=9(x^2-2x+1)\\
                            &=9x^2-18x+9
$$
$\Rightarrow (f \circ g \circ h)(x) = (f \circ (g \circ h))(x) = ((f \circ g) \circ h)(x)$

````{admonition} Théorème
:class: note
Soient deux fonctions réelles $f \colon A \to B$ et $g \colon B \to A$, la
fonction $g$ est la réciproque de $f$ si et seulement si les fonctions
composées $f \circ g$ et $g \circ f$ sont égales à la fonction identité:

```{math}
:class: align-center
g(x) = f^{-1}(x) \Longleftrightarrow f\bigl(g(x)\bigr) = g\bigl(f(x)\bigr) = x.
```
````

### Exemple {num2}`exemple`

1.  Soient les fonctions $f(x) = 3x+1$ et $g(x) = \dfrac{1}{3}x-\dfrac{1}{3}$.\
    $g$ est-elle la fonction réciproque de $f$?

    $$
    (f \circ g)(x)  &= f(g(x))  \\
                    &= f(\dfrac{1}{3}x-\dfrac{1}{3})\\
                    &= 3(\dfrac{1}{3}x-\dfrac{1}{3})+1\\
                    &=x-1+1\\
                    &=x
    $$

    $$
    (g \circ f)(x)  &= g(f(x))  \\
                    &= g(3x+1)\\
                    &= \dfrac{1}{3}(3x+1)-\dfrac{1}{3}\\
                    &=x+\dfrac{1}{3}-\dfrac{1}{3}\\
                    &=x
    $$
    $(f \circ g)(x) = (g \circ f)(x) = x \Longleftrightarrow g$ est la
    fonction réciproque de $f$ et donc $g(x)=f^{-1}(x)$..

2.  Soient les fonctions $f(x) = \dfrac{1}{2}x+1$ et $g(x) = -2x-2$.\
    $g$ est-elle la fonction réciproque de $f$?

    $$
    (f \circ g)(x)  &= f(g(x))  \\
                    &= f(-2x-2)\\
                    &= \dfrac{1}{2}(-2x-2)+1\\
                    &=-x-1+1\\
                    &=-x
    $$

    $$
    (g \circ f)(x)  &= g(f(x))  \\
                    &= g(\dfrac{1}{2}x+1)\\
                    &= -2(\dfrac{1}{2}x+1)-2\\
                    &=-x-2-2\\
                    &=-x-4
    $$
    $(f \circ g)(x) \neq (g \circ f)(x) = x \Longleftrightarrow g$ n'est pas la
    fonction réciproque de $f$.
