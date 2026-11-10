% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 David Rueda
% Copyright 2025 Nicolas Martignoni
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/reciproques-composees.xopp>`
```

# Fonctions réciproques et fonctions composées

## Théorie

### Fonctions réciproques

```{admonition} Définition
:class: note
La **réciproque** de la fonction $f: A \to B$ est la relation $g: B \to A$ telle
que si $f(x) = y$, alors $g(y) = x$.
```

`````{container} frame noprint
# Exemple {num2}`exemple`

Soit la fonction $f(x) = 2x - 1$.

````{list-grid} 4fr 3fr
- # Tableau de valeurs
  ```{flex-table} function-table
  |$x$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$
  |$f(x)=2x-1$|$-7$|$-5$|$-3$|$-1$|$1$|$3$|$5$
  ```
- # Représentation graphique
  ```{jsxgraph} droiteTheorie
  :style: width: 80%;
  ```
````

La réciproque de $f$, notée ici $g(x)$, est le symétrique de $f$ par
rapport à la droite identité $y = x$.

````{list-grid} 4fr 3fr
- # Tableau de valeurs
  ```{flex-table} function-table
  |$x$|$-7$|$-5$|$-3$|$-1$|$1$|$3$|$5$
  |$g(x)$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$
  ```
- # Représentation graphique
  ```{jsxgraph} reciproqueTheorie
  :style: width: 80%;
  ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, withAxesLabels([1], [1]), {
  boundingBox: [-7.5, 7.5, 7.5, -7.5],
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    line: {dash: 2, strokeOpacity: 0.3},
    point: {size: 0.5},
  },
}];
render.droiteTheorie = el => {
  return initBoard(el, battrs, board => {
    const f = x => 2 * x - 1;
    board.create('functiongraph', [f], {
      name: `\\(f\\)`, label: {position: '0.35fr right'}
    });
    for (const x of [-3, -2, -1, 0, 1, 2, 3]) {
      board.create('point', [x, f(x)]);
    }
  });
};
render.reciproqueTheorie = el => {
  return initBoard(el, battrs, board => {
    const g = x => x / 2 + 1 / 2;
    board.create('functiongraph', [g], {
      name: `\\(g\\)`, strokeColor: JXG.palette.red,
      label: {position: '0.1fr left', strokeColor: JXG.palette.red}
    });
    for (const x of [-7, -5, -3, -1, 1, 3, 5]) {
      board.create('point', [x, g(x)]);
    }
    board.create('functiongraph', [x => 2 * x - 1], {
      strokeOpacity: 0.3,
      name: `\\(f\\)`,
      label: {position: '0.35fr right'}
    });
    board.create('line', [0, 1, -1]);
  });
};
</script>

````{container} frame noprint
# Exemple {num2}`exemple`

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

```{jsxgraph} reciproqueEx1
:style: width: 40%;
```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex1>`
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

`````{container} frame noprint
### Exemple {num2}`exemple`

````{list-grid} 3fr 3fr
- La fonction $f(x) = -x^2+4$ n'est pas une bijection, car $f(-1)=f(1)=3$.
- ```{jsxgraph} nonBijection
  :style: width: 50%;
  ```
- En resteignant le domaine de définition à $D_f=\mathbb{R_+}$, la fonction
  $f(x) = -x^2+4$ devient une bijection.
- ```{jsxgraph} bijection1
  :style: width: 50%;
  ```
- De même en resteignant le domaine de définition à $D_f=\mathbb{R_-}$, la
  fonction $f(x) = -x^2+4$ devient une bijection.
- ```{jsxgraph} bijection2
  :style: width: 50%;
  ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, withAxesLabels([1], [1]), {
  boundingBox: [-4, 5.5, 4, -2.5],
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    segment: {dash: 2, strokeWidth: 1},
  },
}];
const f = x => -1 * x ** 2 + 4;
render.nonBijection = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [f], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.75fr right'}
    });
    board.create('segment', [[-1, 0], [-1, 3]]);
    board.create('segment', [[1, 0], [1, 3]]);
    board.create('segment', [[-1, 3], [1, 3]]);
  });
};
render.bijection1 = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [f, 0], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.5fr right'}
    });
    board.create('segment', [[1, 0], [1, 3]]);
    board.create('segment', [[0, 3], [1, 3]]);
  });
};
render.bijection2 = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [f, undefined, 0], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.5fr right'}
    });
    board.create('segment', [[-1, 0], [-1, 3]]);
    board.create('segment', [[-1, 3], [0, 3]]);
  });
};
</script>

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex2>`,
{numref}`exercice %s<exercice:2-recip-ex3>`,
{numref}`exercice %s<exercice:2-recip-ex4>` et
{numref}`exercice %s<exercice:2-recip-ex5>`
```

````{admonition} Définition
:class: note
La **fonction réciproque**  de la fonction bijective $f: A \to B$ est la
fonction $f^{-1}: B \to A$ telle que si $f(x) = y$, alors $f^{-1}(y) = x$.

Remarque:
$f^{-1}$ est parfois notée ${}^r\!f$
````

````{container} frame noprint
# Exemple {num2}`exemple`

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
````

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.bijection4 = el => {
  return initBoard(el, [attrs.screen, attrs.nonInteractive, {
    boundingBox: [-7.5, 7.5, 7.5, -7.5],
    defaultAxes: {
      x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
      y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    },
    defaults: {
      line: {dash: 2, strokeOpacity: 0.3},
    },
  }], board => {
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
};
</script>


````{container} frame noprint
# Exemple {num2}`exemple:reciproque`

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

```{jsxgraph} reciproqueEx2
:style: width: 40%;
```
````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, withAxesLabels([1], [1]), {
  boundingBox: [-4.5, 4.5, 4.5, -4.5],
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    line: {dash: 2, strokeOpacity: 0.3},
  },
}];
render.reciproqueEx1 = el => {
  return initBoard(el, battrs, board => {
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
};
render.reciproqueEx2 = el => {
  return initBoard(el, battrs, board => {
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
};
</script>


`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid} 3fr 3fr
- En reprenant l'{numref}`exemple %s<exemple:reciproque>`, nous constatons que
  la fonction $f(x) = x^2 - 3$ n'est pas bijective, car $f(-2)=f(2)=1$.\
  Nous pouvons restreindre le domaine de définition $D_f=\mathbb{R_+}$ pour
  qu'elle le devienne. Ainsi nous pouvons déterminer la fonction réciproque:
   $f^{-1}(x)=\sqrt{x+3}$.

  Nous pouvons faire de même avec $D_f=\mathbb{R_-}$. Dans ce cas,
  $f^{-1}(x)=-\sqrt{x+3}$.

- ```{jsxgraph} bijection3
  :style: width: 100%;
  ```
````
`````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.bijection3 = el => {
  return initBoard(el, [attrs.screen, attrs.nonInteractive,
                           withAxesLabels([1], [1]), {
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
};
</script>

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex6>` et
{numref}`exercice %s<exercice:2-recip-ex7>`
```

````{admonition} Propriétés
:class: note
- Une fonction réelle est bijective si et seulement si toute droite horizontale
  coupe sa représentation graphique au plus une fois.
- La fonction réciproque de la fonction réciproque d'une fonction $f$ est
  égale à la fonction originale $f$:

  ```{math}
  :class: align-center
  f^{-1}\bigl( f^{-1}(x) \bigr) = f(x).
  ```
- Le représentation graphique d'une fonction bijective $f$ et celle de sa
  fonction réciproque $f^{-1}$ sont symétriques par rapport à la bissectrice
  du premier et du troisième quadrant, c'est-à-dire à par rapport à la droite
  identité $y = x$.
- Les fonctions paires ne sont pas bijectives, puisque que $f(x) = f(-x)$, ce
  qui signifie que $x$ et $-x$ ont la même image.\
  Les fonctions impaires ne sont pas toutes bijectives.
- Les fonctions dont l'expression est un monôme sont bijectives si l'exposant
  est impair et non bijectives si l'exposant est pair.\
  En restreignant l'ensemble de définition d'une fonction monôme avec exposant
  pair sur $\mathbb{R_+}$ ou sur $\mathbb{R_-}$, on obtient deux fonctions
  bijectives.
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex8>`,
{numref}`exercice %s<exercice:2-recip-ex9>`,
{numref}`exercice %s<exercice:2-recip-ex10>` et
{numref}`exercice %s<exercice:2-recip-ex11>`
```

### Fonctions composées

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

```{container} frame noprint
# Exemple {num2}`exemple`

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
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex12>`,
{numref}`exercice %s<exercice:2-recip-ex12>` et
{numref}`exercice %s<exercice:2-recip-ex14>`
```

````{admonition} Propriétés
:class: note
- De manière générale,
  ```{math}
  :class: align-center
  f\bigl(g(x)\bigr) \neq g\bigl(f(x)\bigr) \quad \text{ou}\quad
  \bigl( f \circ g \bigr)(x) \neq \bigl( g \circ f \bigr)(x).
  ```
- La composition de fonctions est associative, c'est-à-dire
  ```{math}
  :class: align-center
  f \circ (g \circ h) = (f \circ g) \circ h.
  ```
````

```{container} frame noprint
# Exemple {num2}`exemple`

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
```

```{container} frame noprint
# Exemple {num2}`exemple`

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
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex15>`et
{numref}`exercice %s<exercice:2-recip-ex16>`
```

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

```{container} frame noprint
# Exemple {num2}`exemple`

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
```

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-recip-ex17>`et
{numref}`exercice %s<exercice:2-recip-ex18>`
```

## Exercices

### Exercice {num2}`exercice:2-recip-ex1`

Déterminez la fonction réciproque des fonctions suivantes.

{.columns-3 .lower-alpha-paren .vsep-2}
1.  $f(x) = 4x-2$
2.  $f(x) = 6x-1$
3.  $f(x) = \dfrac{2}{3}x-\dfrac{3}{2}$

```{block} solution
{.columns-3 .lower-alpha-paren .vsep-2}
1.  $f^{-1}(x) = \dfrac{1}{4}x+\dfrac{1}{2}$
2.  $f^{-1}(x) = \dfrac{1}{6}x + \dfrac{1}{6}$
3.  $f^{-1}(x) = \dfrac{3}{2}x+\dfrac{9}{4}$
```

### Exercice {num2}`exercice:2-recip-ex2`

Pour chacun des énoncés ci-dessous, déterminez
-   s'il représente une fonction,
-   si sa réciproque est une fonction,
-   si c'est une fonction bijective.

{.lower-alpha-paren .vsep-1}
1.  À chaque produit dans un supermarché est associé un code barre.
2.  À chaque élève d'une classe est associé sa note de mathématiques de
    2{sup}`e` année dans le bulletin.
3.  À chaque être humain est associé l'empreinte digitale de son index droit.
4.  À chaque être humain est associé sa nationalité.

```{block} solution
{.lower-alpha-paren .avoid-break-items}
1.  C'est une fonction, car chaque produit a (au plus) un code barre.\
    La réciproque est une fonction, car un code barre correspond à (au plus) un
    produit.\
    C'est une fonction bijective, car chaque produit a un et un seul code barre.
2.  C'est une fonction, car chaque élève a (au plus) une note de maths de
    2{sup}`e` année dans son bulletin.\
    La réciproque n'est pas une fonction, car une note peut être la même pour
    plusieurs élèves.\
    Ce n'est donc pas une fonction bijective.
3.  C'est une fonction, car chaque personne a (au plus) une empreinte digitale
    de son index droit.\
    La réciproque est une fonction, car une empreinte digitale de l'index droit
    correspond à (au plus) une personne.\
    C'est une fonction bijective, car chaque personne a une et une seule
    empreinte digitale de son index droit.
4.  Ce n'est pas une fonction, car une personne peut avoir plusieurs
    nationalités.\
    La réciproque n'est pas une fonction, car une nationalité peut correspondre
    à plusieurs personnes.\
    Elle n'est donc pas bijective.
```

### Exercice {num2}`exercice:2-recip-ex3`

Indiquez si les diagrammes sagittaux ci-dessous représentent une fonction, et,
si oui, si ce sont des fonctions bijectives (leur réciproque est aussi une
fonction).

{.columns-2 .lower-alpha-paren}
1.  ```{figure} images/diag2a.png
    :width: 60%
    ```
2.  ```{figure} images/diag2b.png
    :width: 60%
    ```
3.  ```{figure} images/diag2c.png
    :width: 60%
    ```
4.  ```{figure} images/diag2d.png
    :width: 60%
    ```

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  Fonction bijective.
2.  Pas une fonction.
3.  Fonction non bijective.
4.  Fonction bijective.
```

### Exercice {num2}`exercice:2-recip-ex4`

Les fonctions du premier degré, c'est-à-dire les fonctions définies par
$f(x)=mx+p$ avec $m$, $p \in \mathbb{R}$, sont-elles bijectives?

Déterminez la fonction réciproque $f^{-1}$ de la fonction $f(x) = mx+p$.

```{block} solution
Les fonctions du premier degré $f(x)=mx+p$ sont toujours bijectives, si
$m \neq 0$. La réciproque d'une telle fonction est
$f^{-1}(x) = \dfrac{x}{m} - \dfrac{b}{m}$.
```

### Exercice {num2}`exercice:2-recip-ex5`

Indiquez pour chaque représentation graphique ci-dessous si elle représente une
bijection.

{.columns-3 .lower-alpha-paren}
1.  ```{jsxgraph} fctBij5a
    :style: width: 80%;
    ```
2.  ```{jsxgraph} fctBij5b
    :style: width: 80%;
    ```
3.  ```{jsxgraph} fctBij5c
    :style: width: 80%;
    ```
4.  ```{jsxgraph} fctBij5d
    :style: width: 80%;
    ```
5.  ```{jsxgraph} fctBij5e
    :style: width: 80%;
    ```
6.  ```{jsxgraph} fctBij5f
    :style: width: 80%;
    ```

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, withAxesLabels([1], [1]), {
  boundingBox: [-1.2, 7.2, 7.2, -1.2], grid: false,
}];
render.fctBij5a = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (x / 2 - 1) ** 3 + 2.8]);
  });
};
render.fctBij5b = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (-x - 1 / 2) * (x - 5.5) / 1.5]);
  });
};
render.fctBij5c = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (x / 2 - 1.3) ** 3 - 0.5 * x + 4.8]);
  });
};
render.fctBij5d = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => -x / 2 + 4.5]);
  });
};
render.fctBij5e = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (x - 1) ** 2 / 3 + 1, 1]);
  });
};
render.fctBij5f = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph',
      [x => 4.2 * Math.exp(-1 * (x - 1.5) ** 2 / 4) + 1]);
  });
};
</script>

```{block} solution
{.columns-6 .lower-alpha-paren .vsep-1}
1.  Oui
2.  Non
3.  Non
4.  Oui
5.  Oui
6.  Non
```

### Exercice {num2}`exercice:2-recip-ex6`

Tracez la représentation graphique de la fonction réciproque $f^{-1}$, dans le
même système d'axes.

{.columns-2 .lower-alpha-paren}
1.  ```{jsxgraph} fctBij6a
    :style: width: 70%;
    ```
2.  ```{jsxgraph} fctBij6b
    :style: width: 70%;
    ```
3.  ```{jsxgraph} fctBij6c
    :style: width: 70%;
    ```
4.  ```{jsxgraph} fctBij6d
    :style: width: 70%;
    ```

````{block} solution
{.columns-2 .lower-alpha-paren}
1.  ```{jsxgraph} fctBij6aSol
    :style: width: 70%;
    ```
2.  ```{jsxgraph} fctBij6bSol
    :style: width: 70%;
    ```
3.  ```{jsxgraph} fctBij6cSol
    :style: width: 70%;
    ```
4.  ```{jsxgraph} fctBij6dSol
    :style: width: 70%;
    ```
````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, withAxesLabels([1], [1]), {
  boundingBox: [-4.8, 4.8, 4.8, -4.8],
  defaults: {
    functiongraph: {name: "\\(f\\)", withLabel: true, label: {distance: 1}},
  },
}];
render.fctBij6a = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => x / 2 - 1],
      {label: {position: '0.12fr left'}});
  });
};
render.fctBij6b = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 2 ** x],
      {label: {position: '0.62fr right'}});
  });
};
render.fctBij6c = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (x - 2) ** 3 + 1],
      {label: {position: '0.52fr right'}});
  });
};
render.fctBij6d = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 1 / (x - 2)],
      {label: {position: '0.12fr left'}});
  });
};
render.fctBij6aSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => x / 2 - 1],
      {label: {position: '0.12fr left'}});
    board.create('functiongraph', [x => 2 * x + 2], {
      name: "\\(f^{-1}\\)",
      label: {position: '0.23fr right', strokeOpacity: 0.4},
      strokeOpacity: 0.4,
    });
  });
};
render.fctBij6bSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 2 ** x],
      {label: {position: '0.62fr right'}});
    board.create('functiongraph', [x => Math.log(x) / Math.log(2)], {
      name: "\\(f^{-1}\\)",
      label: {position: '0.75fr left', strokeOpacity: 0.4},
      strokeOpacity: 0.4,
    });
  });
};
render.fctBij6cSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => (x - 2) ** 3 + 1],
      {label: {position: '0.52fr right'}});
    board.create('curve', [t => (t - 2) ** 3 + 1, t => t, -7, 7],
      {strokeOpacity: 0.4});
    board.create('text', [-4, 1, "\\(f^{-1}\\)"], {strokeOpacity: 0.4});
  });
};
render.fctBij6dSol = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 1 / (x - 2)],
      {label: {position: '0.12fr left'}});
    board.create('functiongraph', [x => 1 / x + 2], {
      name: "\\(f^{-1}\\)",
      label: {position: '0.12fr left', strokeOpacity: 0.4},
      strokeOpacity: 0.4,
    });
  });
};
</script>

### Exercice {num2}`exercice:2-recip-ex7`

Déterminez les réciproques des fonctions suivantes, en restreignant au besoin le
domaine de définition.

{.columns-4 .lower-alpha-paren .vsep-2}
1.  $f(x) = \dfrac{1}{x}$
2.  $f(x) = \dfrac{x+3}{3x-2}$
3.  $f(x) = \dfrac{x-2}{4x+1}$
4.  $f(x) = x^2$
5.  $f(x) = x^6$
6.  $f(x) = \dfrac{1}{x^4}$
7.  $f(x) = x^{-8}$

```{block} solution
{.columns-2 .lower-alpha-paren .vsep-2}
1.  $f^{-1}(x) = \dfrac{1}{x}$
2.  $f^{-1}(x) = \dfrac{2x+3}{3x-1}$
3.  $f^{-1}(x) = \dfrac{-x-2}{4x-1}$
4.  $f^{-1}(x) = \sqrt{x}$, avec $D_f = \mathbb{R}_+$
5.  $f^{-1}(x) = \sqrt[6]{x}$, avec $D_f = \mathbb{R}_+$
6.  $f^{-1}(x) = \dfrac{1}{\sqrt[4]{x}}$, avec $D_f = \mathbb{R}^*_+$
7.  $f^{-1}(x) = \dfrac{1}{\sqrt[8]{x}}$, avec $D_f = \mathbb{R}^*_+$
```

### Exercice {num2}`exercice:2-recip-ex8`

Soit la fonction $h(t) = 2t^2 - 3$.

{.lower-alpha-paren}
1.  Déterminez le domaine de définition $D_h$ et justifiez.
2.  Expliquez pourquoi $h(t)$ n'est pas bijective sur son domaine de définition.
3.  Si $D_h = \mathbb{R}_+$, la fonction $h(t)$ est-elle bijective? Si oui,
    déterminez sa fonction réciproque.

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $D_h = \mathbb{R}$, car la fonction est définie pour tout nombre réel:
    aucune opération de l'expression algébrique ne pose problème.
2.  Des valeurs différentes dans $D_h$ peuvent avoir la même image par $h$; par
    exemple $h(3) = h(-3) = 15$.
3.  Oui, et on a $h^{-1}(t) = \sqrt{\dfrac{t+3}{2}}$.
```

### Exercice {num2}`exercice:2-recip-ex9`

Soit la représentation graphique de la fonction $f$ ci-dessous.

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
render.fct9 = el => {
  return initBoard(el, [attrs.print, withAxesLabels([1], [1]), {
    boundingBox: [-4.5, 3.5, 5.5, -3],
  }], board => {
    board.create('functiongraph',
      [x => 0.1 * x ** 3 - 0.3 * x ** 2 - 0.9 * x + 2], {
      name: "\\(f\\)", withLabel: true,
      label: {position: '0.85fr right', distance: 1},
    });
  });
};
</script>

```{jsxgraph} fct9
:style: width: 70%;
```

{.lower-alpha-paren}
1.  Expliquez pourquoi cette fonction n'est pas bijective.
2.  Déterminez les domaines de définition possibles permettant de rendre cette
    fonction bijective.

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  Il est facile de constater que certaines images $f(x)$ ont jusqu'à trois
    préimages.
2.  $D_f = \left] -\infty;-1 \right]$; $D_f = \left[ -1;3 \right]$ ou
    $D_f = \left[ 3;\infty \right[$
```

### Exercice {num2}`exercice:2-recip-ex10`

Soit la fonction $f(x) = 4x^2 - 8$,

{.lower-alpha-paren}
1.  Expliquez pourquoi cette fonction n'est pas bijective.
2.  Déterminez les domaines de définition possibles permettant de rendre cette
    fonction bijective.
3.  Calculez les fonctions réciproques pour chacun des domaines trouvés.

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $f$ est une fonction quadratique, dont la représentation graphique est une
    parabole; il existe donc des images qui ont deux préimages.
2.  $D_f = \mathbb{R}_+$ ou $D_f = \mathbb{R}_-$.
3.  $f^{-1}(x)=\sqrt{\frac{1}{4}x+2}$ ou $f^{-1}(x)=-\sqrt{\frac{1}{4}x+2}$.
```

### Exercice {num2}`exercice:2-recip-ex11`

Soit la fonction $f(x) = (x-2)^2 + 1$.

{.lower-alpha-paren}
1.  Expliquez pourquoi cette fonction n'est pas bijective.
2.  Déterminez les domaines de définition possibles permettant de rendre cette
    fonction bijective.
3.  Calculez les fonctions réciproques pour chacun des domaines trouvés.

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $f$ est une fonction quadratique, dont la représentation graphique est une
    parabole; il existe donc des images qui ont deux préimages.
2.  $D_f = \left[ 2;\infty \right[$ ou $D_f = \left] -\infty;2 \right]$.
3.  $f^{-1}(x)=\sqrt{x-1}+2$ ou $f^{-1}(x)=-\sqrt{x-1}+2$.
```

### Exercice {num2}`exercice:2-recip-ex12`

Soient les fonctions $f(x) = 1 - 3x$ et $g(x) = 1+2x^2$, calculez les
expressions ci-dessous.

{.columns-4 .lower-alpha-paren}
1.  $f\bigl(g(0)\bigr)$
2.  $g\bigl(f(0)\bigr)$
3.  $f\bigl(g(1)\bigr)$
4.  $g\bigl(g(2)\bigr)$
5.  $\bigl(f \circ g\bigr)(3)$
6.  $\bigl(g \circ f\bigr)(3)$
7.  $\bigl(f \circ f\bigr)(-2)$
8.  $\bigl(g \circ g\bigr)(-2)$

```{block} solution
{.columns-4 .lower-alpha-paren}
1.  $-2$
2.  $3$
3.  $-8$
4.  $163$
5.  $-56$
6.  $129$
7.  $-20$
8.  $163$
```

### Exercice {num2}`exercice:2-recip-ex13`

Déterminez les expressions algébriques de $f \circ g$ et de $g \circ f$ avec
les fonctions données.

{.columns-2 .lower-alpha-paren}
1.  $f(x) = 1+x$; $\quad g(x) = 3x+4$
2.  $f(x) = 2+x$; $\quad g(x) = x^2$
3.  $f(x) = 1-x^2$; $\quad g(x) = (1-x)^2$
4.  $f(x) = x^2+1$; $\quad g(x) = \dfrac{1}{x-1}$

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $\bigl(f \circ g\bigr) = 3x+5$; $\bigl(g \circ f\bigr) = 3x+7$
2.  $\bigl(f \circ g\bigr) = 2+x^2$; $\bigl(g \circ f\bigr) = (2+x)^2$
3.  $\bigl(f \circ g\bigr) = 1-(1-x)^4$; $\bigl(g \circ f\bigr) = x^4$
4.  $\bigl(f \circ g\bigr) = \dfrac{1}{(x-1)^2}+1$; $\bigl(g \circ f\bigr) = \dfrac{1}{x^2}$
```

### Exercice {num2}`exercice:2-recip-ex14`

Déterminez deux fonctions $f$ et $g$ telles que
$h(x) = \bigl(f \circ g\bigr)(x)$.

{.columns-2 .lower-alpha-paren}
1.  $h(x) = 2x + 5$
2.  $h(x) = \dfrac{1}{2}x + 1$
3.  $h(x) = 3(x - 5)$
4.  $h(x) = \dfrac{x - 2}{3}$
5.  $h(x) = \sqrt{x + 3}$
6.  $h(x) = \sqrt{x} - 2$
7.  $h(x) = \sqrt{2x+1} -5$
8.  $h(x) = \dfrac{1}{x^2}$
9.  $h(x) = \dfrac{2}{x^2+1}$
10.  $h(x) = 2(4x^2-2x)+1$

```{block} solution
Solutions possibles (il y en d'autres):

{.columns-2 .lower-alpha-paren .vsep-1}
1.  $f(x) = x+5$; $g(x) = 2x$
2.  $f(x) = x+1$; $g(x) = \dfrac{1}{2}x$
3.  $f(x) = 3x$; $g(x) = x-5$
4.  $f(x) = \dfrac{1}{3}x$; $g(x) = x - 2$
5.  $f(x) = \sqrt{x}$; $g(x) = x+3$
6.  $f(x) = x - 2$; $g(x) = \sqrt{x}$
7.  $f(x) = \sqrt{x}-5$; $g(x) = 2x+1$
8.  $f(x) = \dfrac{1}{x}$; $g(x) = x^2$
9.  $f(x) = \dfrac{2}{x}$; $g(x) = x^2+1$
10.  $f(x) = 2x+1$; $g(x) = 4x^2-2x$
```

### Exercice {num2}`exercice:2-recip-ex15`

Soit la fonction $f(x) = 3x+1$, déterminez l'expression des fonctions ci-dessous.

{.columns-4 .lower-alpha-paren}
1.  $f \circ f$
2.  $f \circ f \circ f$
3.  $f \circ f \circ f \circ f$
4.  $\underbrace{f \circ f \circ \dots \circ f}_\text{n fois}$

```{block} solution
{.columns-2 .lower-alpha-paren}
1.  $f(f(x)) = 9x+4$
2.  $f(f(f(x))) = 27x+13$
3.  $f(f(f(f(x)))) = 81x+40$
4.  $f(f( \dots (f(x)) \dots )) = 3^n x+ \dfrac{3^n-1}{2}$
```

### Exercice {num2}`exercice:2-recip-ex16`

Soient les expressions algébriques des fonctions $f$ et $g$ ci-dessous,
déterminez les domaines de définition des fonctions $f$, $g$, $f \circ g$ et
$g \circ f$.

{.columns-2 .lower-alpha-paren .vsep-2}
1.  $f(x) = \dfrac{1}{2}x - 4 \:$ et $\: g(x) = \dfrac{1}{x+3}$
2.  $f(x) = \sqrt{x-4}\:$ et $\: g(x) = x^2$

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $(f \circ g)(x) = - \dfrac{8x+23}{2x+6}$

    $(g \circ f)(x) = \dfrac{2}{x-2}$

    $D_f = \mathbb{R}$; $D_g = \mathbb{R} \setminus \{-3\}$;
    $D_{f \circ g} = \mathbb{R} \setminus \{-3\}$;
    $D_{g \circ f} = \mathbb{R} \setminus \{2\}$
2.  $(f \circ g)(x) = \sqrt{x^2-4}$

    $(g \circ f)(x) = x-4$

    $D_f = \left[4 ; \infty \right[$; $D_g = \mathbb{R}$,
    $D_{f \circ g} = \mathbb{R} \setminus \left] -2;2 \right[$;
    $D_{g \circ f} = \mathbb{R}$
```

### Exercice {num2}`exercice:2-recip-ex17`

Déterminez si la fonction $g$ est la réciproque de la fonction $f$, en calculant
 les compositions $f \circ g$ et $g \circ f$.

{.columns-2 .lower-alpha-paren .vsep-2}
1.  $f(x) = 2x+3 \:$ et $\: g(x) = \dfrac{x}{2}-3$
2.  $f(x) = \dfrac{4x}{5} + 10 \:$ et $\: g(x) = \dfrac{5x}{4} - \dfrac{25}{2}$
3.  $f(x) = 2x^2+3 \:$ et $\: g(x) = \sqrt{\dfrac{x-3}{2}}$

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $f(g(x)) = x-3$ et $g(f(x)) = x - \dfrac{3}{2}$ donc $g(x) \neq f^{-1}(x)$
2.  $f(g(x)) = x$ et $g(f(x)) = x$ donc $g(x) = f^{-1}(x)$
3.  $f(g(x)) = x$ et $g(f(x)) = x$ donc $g(x) = f^{-1}(x)$
```

### Exercice {num2}`exercice:2-recip-ex18`

Soient les fonctions $f(x)=x^2-1$, $g(x) = \dfrac{1}{x+1}$ et $h(x) = 2x$ (la
fonction valeur absolue), déterminez l'expression algébrique des fonctions
composées suivantes.

{.columns-3 .lower-alpha-paren}
1.  $f \circ g$
2.  $g \circ f$
3.  $f \circ h$
4.  $h \circ f$
5.  $g \circ h$
6.  $h \circ g$

```{block} solution
{.columns-2 .lower-alpha-paren .vsep-2}
1.  $(f \circ g)(x) = \dfrac{1}{x^2+2x+1}-1$
2.  $(g \circ f)(x) = \dfrac{1}{x^2}$
3.  $(f \circ h)(x) = 4x^2-1$
4.  $(h \circ f)(x) = 2x^2-2$
5.  $(g \circ h)(x) = \dfrac{1}{2x+1}$
6.  $(h \circ g)(x) = \dfrac{2}{x+1}$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
