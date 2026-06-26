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

### Exemple {num2}`exemple`

{.columns-2 .lower-alpha-paren}
1.  La représentation graphique suivante est une fonction.
    ```{jsxgraph} fonction
    :style: width: 80%;
    ```
2.  La représentation graphique suivante n'est pas une fonction.
    ```{jsxgraph} nonFonction
    :style: width: 80%;
    ```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, {
  boundingBox: [-7, 11, 7, -2],
  defaultAxes: {
    x: {ticks: {drawLabels: false}},
    y: {ticks: {drawLabels: false}},
  },
}];
render.fonction = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => x ** 3 / 2 - 3 * x + 5]);
  });
};
render.nonFonction = el => {
  return initBoard(el, battrs, board => {
    const c = board.create('point', [0, 4], {visible: false, withLabel: false});
    board.create('circle', [c, 3.5]);
  });
};
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

### Exemple {num2}`exemple`

Calculez le domaine de définition de $f(x) = \dfrac{2x + 1}{4x + 3}$.

Le dénominateur **ne doit pas être nul**:

$4x + 3 \neq 0 \Longleftrightarrow 4x \neq -3 \Longleftrightarrow x = -\frac{3}{4}$

$\Longrightarrow D_f = \mathbb{R} \setminus \{-\frac{3}{4}\}$

### Exemple {num2}`exemple`

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
$f(x) = mx + h$ où les coefficients $m \neq 0$ et $h$ sont des nombres réels.\
La représentation graphique d'une fonction du premier degré est une droite.

Une **fonction linéaire** est une fonction dont $h = 0$. Elle est de la forme
$f(x) = mx$ et sa représentation graphique est une droite qui passe par
l'origine. Alors qu'une fonction dont $h \neq 0$ est une **fonction affine.**
```

### Exemple {num2}`exemple`

Déterminez l'expressions algébrique de la droite $f = mx + h$ qui passe par les
points $P(-2;-1)$ et $Q(3;2)$.

Pente:

$m=\dfrac{y_p-y_q}{x_p-x_q}=\dfrac{-1 - 2}{-2 - 3} = \dfrac{-3}{-5} =\dfrac{3}{5}$\
$f(x)= \dfrac{3}{5}x + h$.

Ordonnée à l'origine:

$$P \in f \quad\quad \Rightarrow \quad\quad\quad\quad f(-2) & = -1\\
\dfrac{3}{5} \cdot (-2) + h & = -1\\
-\dfrac{6}{5} + h & = -1$$
$h = -1 + \dfrac{6}{5} = -\dfrac{5}{5} + \dfrac{6}{5} = \dfrac{1}{5}$

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

### Exemple {num2}`exemple`

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
$f$ coupe l'axe des $x$ en $x_1$.

Si $\Delta < 0$
: $f$ ne possède pas de zéro. Forme factorisée n'existe pas. f ne
coupe pas l'axe des $x$.
```

### Exemple {num2}`exemple`

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

### Exemple {num2}`exemple`

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

```{jsxgraph} fctF
:style: width: 60%;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.fctF = el => {
  return initBoard(el, [attrs.screen, attrs.nonInteractive, {
    boundingBox: [-5, 2.5, 5, -7],
    defaults: {
      point: {
        label: {anchorX: 'right', anchorY: 'bottom', offset: [-7, 0]},
      },
    },
  }], board => {
    const f = x => 4 * x ** 2 - 2 * x -6;
    board.create('functiongraph', [f], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.635fr right'},
    });
    board.create('point', [0.25, f(0.25)], {
      name: `\\(S\\)`,
      label: {anchorX: 'middle', anchorY: 'top', offset: [0, -7]},
    });
    board.create('point', [-1, f(-1)], {name: `\\(x_1\\)`});
    board.create('point', [3 / 2, f(3 / 2)], {name: `\\(x_2\\)`});
  });
};
</script>

## Résolution d'inéquations

La résolution d'inéquation du 1<sup>er</sup> degré est identique à la résolution
d'équation à l'exception de la multiplication ou la division par un nombre
négatif qui change le sens de l'inégalité.

### Exemple {num2}`exemple`

$$
2x - 7 &< 5x + 4 \qquad &&| -5x\\
-3x - 7 &< 4 \qquad &&| +7\\
-3x &< 11 \qquad &&| {\color{red}:(-3)}\\
x &{\,\color{red}>\,} \dfrac{11}{-3}\\
x &> -\dfrac{11}{3}
$$

$S = ]-\dfrac{11}{3}; +\infty[$

Pour résoudre une inéquation du 2<sup>e</sup> degré ou plus, il faut faire un
tableau de signes.

### Exemple {num2}`exemple`

$$
x^2 + 4x - 12 &\leq 0 \qquad &&| \text{factorisation}\\
(x - 2)(x + 6) &\leq 0
$$

Zéros:\
$x - 2 = 0  \quad \text{ou}  \quad x - 6 = 0 \qquad \Rightarrow \qquad x = 2  \quad \text{ou} \quad  x = -6$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-6$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
|$x-2$|$-$||$-$|$0$|$+$
|$x+6$|$-$|$0$|$+$||$+$
|$(x - 2)(x + 6) \leq 0$|$+$|$0$|$-$|$0$|$+$
```
$S = [-6; 2]$

Pour résoudre une inéquation avec une fraction rationnelle, il faut faire un
tableau de signes.

### Exemple {num2}`exemple`

$\dfrac{2x-1}{2-3x} \leq 0$

Domaine de définition:\
$2-3x \neq 0 \qquad \Rightarrow \qquad 2 \neq 3x \qquad \Rightarrow \qquad \dfrac{2}{3} \neq x$\
$D = \mathbb{R} \setminus \{\dfrac{2}{3}\}$

Zéros:\
$2x - 1 = 0 \qquad \Rightarrow \qquad 2x = 1 \qquad \Rightarrow \qquad x = \dfrac{1}{2}$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$\frac{1}{2}$|{.w}|$\frac{2}{3}$|{.r .w}$\tiny+\;\infty$
|$2x-1$|$-$|$0$|$+$||$+$
|$2-3x$|$+$||$+$|{.g}$0$|$-$
|$\dfrac{2x-1}{2-3x} \leq 0$|$-$|$0$|$+$|{.g}|$-$
```
$S = ]-\infty; \frac{1}{2}] \: \cup \: ]\frac{2}{3}; +\infty[$


