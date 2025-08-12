% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions - Révisions

```{metadata}
subject: "Mathématiques 2e année"
```

## Fonctions, domaine de définition, ordonnée à l'origine et zéros

````{admonition} Définition
:class: note
Une **fonction** $f: A \longrightarrow B$ d'un ensemble $A$ dans un ensemble $B$
est une relation qui associe à chaque élément de $A$ au plus un élément de $B$.

```{math}
:class: align-center
f: A & \to B\\
   x & \mapsto f(x)
```

$A$ est appelé l'**ensemble de départ** de $f$ et $B$ est appelé l'**ensemble
d'arrivée** de $f$.
````

### Exemple {num1}`exemple`

{.columns-2 .lower-alpha-paren}
1.  La représentation graphique suivante est une fonction.
    ```{jsxgraph} fonction
    :style: width: 80%;
    ```
2.  La représentation graphique suivante n'est pas une fonction.
    ```{jsxgraph} non-fonction
    :style: width: 80%;
    ```

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-7, 11, 7, -2], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {drawLabels: false}},
        y: {ticks: {drawLabels: false}},
    },
    defaults: {
        circle: {strokeWidth: 2},
        functiongraph: {strokeWidth: 2},
    },
};
initBoard('fonction', attrs, board => {
    board.create('functiongraph', [x => x ** 3 / 2 - 3 * x + 5]);
});
initBoard('non-fonction', attrs, board => {
    const c = board.create('point', [0, 4], {visible: false});
    board.create('circle', [c, 3.5]);
});
</script>

```{admonition} Définition
:class: note
Soit la **fonction** $f: x  \mapsto f(x)$, si $x$ est un élément de $A$, alors
$f(x)$, si elle existe, est unique et est appelée l'**image** de $x$ par $f$.
$f(x)$ est un élément de $B$.

Inversement $x$ est appelé la **préimage** ou l'**antécédent** de $f(x)$. Une
valeur $f(x)$ peut avoir plusieurs préimages.

L'**ensemble image** par $f$, noté $Im_f$, est l'ensemble des images de
l'ensemble de départ.
```

```{admonition} Définition
:class: note
Le **domaine de définition** d'une fonction réelle $f$, noté $D_f$, est
l'ensemble des éléments de l'ensemble de départ qui ont une image par $f$,
c'est-à-dire l'ensemble des $x$ pour lesquels $f(x)$ est définie.
```

Le domaine de définition des fonctions du premier et du deuxième degré est
$\mathbb{R}$, car leur expression algébrique est un polynôme et pour toutes
valeurs de $x$, $f(x)$ existe.

Le domaine de définition d'une fonction rationnelle de la forme
$f(x) = \dfrac{A(x)}{B(x)}$ est $\mathbb{R}$ auquel il faut enlever les valeurs
de $x$ qui posent problème, c'est-à-dire les valeurs pour lesquels $B(x)$
s'annule.

### Exemple {num1}`exemple`

Calculez le domaine de définition de $f(x) = \dfrac{2x + 1}{4x + 3}$.

Le dénominateur **ne doit pas être nul**:

$4x + 3 \neq 0 \Longleftrightarrow 4x \neq -3 \Longleftrightarrow x = -\frac{3}{4}$

$\Longrightarrow D_f = \mathbb{R} \setminus \{-\frac{3}{4}\}$

### Exemple {num1}`exemple`

Calculez le domaine de définition de $f(x) = \sqrt{7-x}$.

La partie sous la racine **doit être positive ou nulle**:

$$
7 - x &\geq 0 \qquad &&| -7\\
   -x &\geq -7 \qquad &&| \cdot (-1)\\
    x &\leq 7
$$

:Remarque: Lorsqu'on multiplie ou divise une inéquation par un nombre négatif,
le signe d'inégalité change de sens.

$\Longrightarrow D_f = ] -\infty; 7 ]$

```{admonition} Définition
:class: note
L'**ordonnée à l'origine** d'une fonction $f$ est la valeur de $f$ lorsque
$x=0$, c'est-à-dire $f(0)$.\
Graphiquement l'ordonnée à l'origine représente l'intersection du graphe de $f$
avec l'axe des $y$.
```

```{admonition} Définition
:class: note
Les **zéros** d'une fonction $f$ sont les valeurs $x$ pour lesquelles la
fonction s'annule, c'est-à-dire pour lesquelles nous avons $f(x)=0$.\
Graphiquement les zéros représentent les intersections du graphe de $f$ avec
l'axe des $x$.
```

## Fonctions du premier degré

```{admonition} Définition
:class: note
Une **fonction du premier degré** est une fonction dont l'expression
algébrique peut s'écrire sous la forme d'un polynôme du premier degré
$f(x) = mx +p$ où les coefficients $m \neq 0$ et $p$ sont des nombres réels.\
La représentation graphique d'une fonction du premier degré est une droite.

Une **fonction linéaire** est une fonction dont $p = 0$. Elle est de la forme
$f(x) = mx$ et sa représentation graphique est une droite qui passe par
l'origine. Alors qu'une fonction dont $p \neq 0$ est une **fonction affine.**
```

## Exemple {num1}`exemple`

Déterminez l'expressions algébrique de la droite $f = mx + p$ qui passe par les
points $P(-2;-1)$ et $Q(3;2)$.

Pente:

$m=\dfrac{y_p-y_q}{x_p-x_q}=\dfrac{-1 - 2}{-2 - 3} = \dfrac{-3}{-5} =\dfrac{3}{5}$\
$f(x)= \dfrac{3}{5}x + p$.

Ordonnée à l'origine:

$$P \in f \quad\quad \Rightarrow \quad\quad\quad\quad f(-2) & = -1\\
\dfrac{3}{5} \cdot (-2) + p & = -1\\
-\dfrac{6}{5} + p & = -1$$
$p = -1 + \dfrac{6}{5} = -\dfrac{5}{5} + \dfrac{6}{5} = \dfrac{1}{5}$

L'expression algébrique de cette fonction est donc
$f(x)=\dfrac{3}{5}x+\dfrac{1}{5}$

## Fonctions constantes

```{admonition} Définition
:class: note
Une **fonction constante** est une fonction dont l'expression algébrique peut
s'écrire sous la forme $f(x) = p$, ce qui signifie que l'image de $x$ par $f$
est toujours la même. Sa représentation graphique est une droite parallèle à
l'axe des $x$.
```

## Fonctions quadratiques

```{admonition} Définition
:class: note
Une **fonction quadratique** ou **fonction du deuxième degré** est une fonction
dont l'expression algébrique peut s'écrire sous la forme d'un polynôme du
deuxième degré $f(x) = ax^2 + bx + c$ où les coefficients $a \neq 0$, $b$ et $c$
sont des nombres réels.\
La représentation graphique d'une fonction quadratique est une parabole.

Si $a > 0$, la parabole est **convexe** (elle "sourit").\
Si $a < 0$, la parabole est **concave** (elle "fait la tête").
```

## Exemple {num1}`exemple`

$f(x) = 4x^2 - 2x - 6$ est une fonction quadratique dont les coefficients sont
$a = 4$, $b = -2$ et $c = -6$.
Commme $a > 0$, la représentation graphique de $f$ sera une parabole convexe.

```{admonition} Théorème
:class: note
Soit la fonction $f(x) = ax^2 + bx + c$ une fonction du deuxième degré.\
Le **discriminant** est $\Delta = b^2-4ac$

Si $\Delta > 0$
: $f$ possède deux zéros: $x_{1,2}=\dfrac{-b \pm \sqrt{\Delta}}{2a}$\
Forme factorisée: $f(x) = a(x - x_1)(x - x_2).$\
$f$ coupe l'axe des $x$ en $x_1$ et $x_2$.

Si $\Delta = 0$
: $f$ possède un seul zéro: $x_1=-\dfrac{b}{2a}$\
Forme factorisée: $f(x) = a(x - x_1)^2$.\
f coupe l'axe des $x$ en $x_1$.

Si $\Delta < 0$
: $f$ ne possède pas de zéro. Forme factorisée n'existe pas. f ne
coupe pas l'axe des $x$.
```

## Exemple {num1}`exemple`

Reprenez $f(x) = 4x^2 - 2x - 6$ et calculez les zéros, c'est-à-dire résolvez
$4x^2 - 2x - 6 = 0$.

$\Delta = (-2)^2 - 4 \cdot 4 \cdot (-6) = 4 + 96 = 100$\
$x_{1,2}=\dfrac{2 \pm \sqrt{100}}{2 \cdot 4} = \dfrac{2 \pm 10}{8}$\
$x_1 = \dfrac{12}{8} = \dfrac{3}{2}$ et $x_2 = \dfrac{-8}{8} = -1$

$f$ a donc deux zéros et coupe l'axe des $x$ en $-1$ et en $\dfrac{3}{2}$.

La forme factorisée est
$f(x) = 4(x - (-1))(x - \dfrac{3}{2}) = 4(x + 1)(x - \dfrac{3}{2})$

````{admonition} Théorème
:class: note
Le point **maximum** ou **minimum** d'une parabole est appelé **sommet**.
Les coordonnées du sommet $S(x_s;y_s)$ d'une fonction quadratique $f$ sont

```{math}
:class: align-center
x_s=-\frac{b}{2a} \text{ et } y_s=f(x_s)=- \dfrac{\Delta}{4a}
```
````

## Exemple {num1}`exemple`

Comme la parabole est convexe, le sommet est un minimum. Calculez ses
coordonnées.

$x_s = -\dfrac{b}{2a} = -\dfrac{-2}{2 \cdot 4} = \dfrac{2}{8} = \dfrac{1}{4}$
$$
y_s = f(x_s) = f(\frac{1}{4}) &= 4 \cdot (\frac{1}{4})^2 - 2 \cdot \dfrac{1}{4} - 6\\
                              &= 4 \cdot \dfrac{1}{16} - \dfrac{2}{4} - 6 \\
                              &= \dfrac{4}{16} - \dfrac{2}{4} - 6\\
                              &= \dfrac{1}{4} - \dfrac{2}{4} - \dfrac{24}{4}\\
                              &= -\dfrac{25}{4}
$$
Sommet: $S\left(\dfrac{1}{4}, -\dfrac{25}{4}\right)$

Représentation graphique de la fonction $f(x) = 4x^2 - 2x - 6$ avec les points
calculés précédemment.

```{jsxgraph} fct-f
:style: width: 60%;
```

<script type="module">
const [{initBoard, JXG}] = await tdoc.imports('tdoc/jsxgraph.js');

const attrs = {
    boundingBox: [-5, 2.5, 5, -7], axis: true, grid: true,
    defaultAxes: {
        x: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
        y: {ticks: {drawLabels: true, insertTicks: false, ticksDistance: 1, minorTicks: 1}},
    },
    grid: {majorStep: 1},
    defaults: {
        functiongraph: {strokeWidth: 2},
        label: {strokeColor: JXG.palette.blue},
        point: {visible: true, withLabel: true, size: 1.5,
                fillColor: JXG.palette.black, strokeColor: JXG.palette.black,
                label: {strokeColor: JXG.palette.black, position: '0.5fr left',
                        anchorX: 'right', anchorY: 'bottom', distance: 0,
                        offset: [-7, 0],}},
    },
};
initBoard('fct-f', attrs, board => {
    const f1 = x => 4 * x ** 2 - 2 * x -6;
    board.create('functiongraph', [f1], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.635fr left'}
    });
    board.create('point', [0.25, f1(0.25)], {name: `\\(S\\)`, label: {
        anchorX: 'left',anchorY: 'top'}
    });
    board.create('point', [-1, f1(-1)], {name: `\\(x_1\\)`});
    board.create('point', [3/2, f1(3/2)], {name: `\\(x_2\\)`});
});
</script>
