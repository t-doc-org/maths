% Copyright 2025 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions - Révisions

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

{.allow-break-inside}
### Fonctions, domaine de définition, ordonnée à l'origine et zéros

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

````{container} frame noprint
# Exemple {num2}`exemple`

{.columns-2 .lower-alpha-paren}
1.  La représentation graphique suivante est une fonction.
    ```{jsxgraph} fonction
    :style: width: 80%;
    ```
2.  La représentation graphique suivante n'est pas une fonction.
    ```{jsxgraph} nonFonction
    :style: width: 80%;
    ```
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-rev-polyn-ex1>`.
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
    const c = board.create('point', [0, 4], {withLabel: false});
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

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   L'image de $5$ est 1, car $f(5)=1$<br>
    La préimage ou l'antécédent de 3 est $-3$, car $f(-3) = 3$.<br>
    L'ensemble des images est $Im_f = ]-\infty; 6]$
-   ```{jsxgraph} fonctionRacine
    :style: width: 80%;
    ```
`````

<script type="module">
const {attrs, initBoard, JXG, render, withAxesLabels} =
  await tdoc.import('jsxgraph.js');
const battrs = [attrs.screen, attrs.nonInteractive, withAxesLabels([1], [1]), {
  boundingBox: [-4, 4, 7, -2],
  defaultAxes: {
    x: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
    y: {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}},
  },
  defaults: {
    segment: {dash: 2, strokeColor: JXG.palette.red},
    point: {size: 1, withLabel: false,
      strokeColor: JXG.palette.red, fillColor: JXG.palette.red},
  },
}];
render.fonctionRacine = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => Math.sqrt(-x+6)], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.2fr right', offset: [0, 5]},
    });
    board.create('segment', [[5,0],[5,1]]);
    board.create('segment', [[5,1],[0,1]]);
    board.create('segment', [[-3,0],[-3,3]]);
    board.create('segment', [[-3,3],[0,3]]);
});
};
render.droite = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => -x / 3 + 2], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.2fr right', offset: [0, 3]},
    });
    board.create('point', [0,2]);
    board.create('point', [6,0]);
});
};
render.constante = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => 3/2], {
      name: `\\(f\\)`, withLabel: true,
      label: {position: '0.2fr right', offset: [0, 3]},
    });
    board.create('point', [0,1.5]);
});
};
</script>

```{admonition} Définition
:class: note
Le **domaine de définition** d'une fonction réelle $f$, noté $D_f$, est
l'ensemble des éléments de l'ensemble de départ qui ont une image par $f$,
c'est-à-dire l'ensemble des $x$ pour lesquels $f(x)$ est définie.
```

```{container}
# Remarques

- Le domaine de définition des fonctions du premier et du deuxième degré est
  $\mathbb{R}$, car leur expression algébrique est un polynôme et pour toutes
  valeurs de $x$, $f(x)$ existe.

- Le domaine de définition d'une fonction rationnelle de la forme
  $f(x) = \dfrac{A(x)}{B(x)}$ est $\mathbb{R}$ auquel il faut enlever les
  valeurs de $x$ qui posent problème, c'est-à-dire les valeurs pour lesquels
  $B(x)$ s'annule.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Calculez le domaine de définition de $f(x) = \dfrac{2x + 1}{4x + 3}$.

Le dénominateur **ne doit pas être nul**:

$4x + 3 \neq 0 \Longleftrightarrow 4x \neq -3 \Longleftrightarrow x = -\frac{3}{4}$

$\Longrightarrow D_f = \mathbb{R} \setminus \{-\frac{3}{4}\}$
```

```{container} frame noprint
# Exemple {num2}`exemple`

Calculez le domaine de définition de $f(x) = \sqrt{7-x}$.

La partie sous la racine **doit être positive ou nulle**:

$$
7 - x &\geq 0 \qquad &&| -7\\
   -x &\geq -7 \qquad &&| {\color{red}\cdot (-1)}\\
    x\, &{\color{red}\leq} \,7
$$

:Rappel: Lorsqu'on multiplie ou divise une inéquation par un nombre négatif,
le signe d'inégalité change de sens.

$\Longrightarrow D_f = ] -\infty; 7 ]$
```

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

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   $f(x) = - \dfrac{1}{3}x + 2$

    L'ordonnée à l'origine est 2.<br>
    Graphiquement, c'est l'intersection avec l'axe des $y$.<br>
    Algébriquement, l'ordonnée à l'origine correspond à
    $f(0) = - \dfrac{1}{3} \cdot 0 + 2 = 2$.
-   ```{jsxgraph} droite
    :style: width: 80%;
    ```
````
Le zéro de $f$ est 6.<br>
Graphiquement, c'est l'intersection avec l'axe des $x$.<br>
Algébriquement, le zéro correspond à la valeur de $x$ tel que $f(x)=0$:<br>
$- \dfrac{1}{3}x + 2 = 0 \implies -\dfrac{1}{3}x = -2 \implies x = -2 \cdot (-3) = 6$.
`````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-rev-polyn-ex2>`, {numref}`exercice %s<exercice:2-rev-polyn-ex3>` et
 {numref}`exercice %s<exercice:2-rev-polyn-ex4>`.
```

### Fonctions du premier degré

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

```{container} frame noprint
# Exemple {num2}`exemple`

Déterminez l'expressions algébrique de la droite $f = mx + h$ qui passe par les
points $P(-2;-1)$ et $Q(3;2)$.

Pente:

$m=\dfrac{y_p-y_q}{x_p-x_q}=\dfrac{-1 - 2}{-2 - 3} = \dfrac{-3}{-5} =\dfrac{3}{5}$\
$f(x)= \dfrac{3}{5}x + h$.

Ordonnée à l'origine:

$$P({\color{magenta}-2};{\color{orange}-1}) \in f \quad\quad \implies \quad\quad\quad\quad f({\color{magenta}-2}) & = {\color{orange}-1}\\
\dfrac{3}{5} \cdot (-2) + h & = -1\\
-\dfrac{6}{5} + h & = -1$$
$h = -1 + \dfrac{6}{5} = -\dfrac{5}{5} + \dfrac{6}{5} = \dfrac{1}{5}$

L'expression algébrique de cette fonction est donc
$f(x)=\dfrac{3}{5}x+\dfrac{1}{5}$
```

### Fonctions constantes

```{admonition} Définition
:class: note
Une **fonction constante** est une fonction dont l'expression algébrique peut
s'écrire sous la forme $f(x) = p$, ce qui signifie que l'image de $x$ par $f$
est toujours la même. Sa représentation graphique est une droite parallèle à
l'axe des $x$.
```

`````{container} frame noprint
# Exemple {num2}`exemple`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   $f(x) = \dfrac{3}{2}$

    L'ordonnée à l'origine vaut $\dfrac{3}{2}$.<br>
    La fonction $f$ n'a pas de zéro.

-   ```{jsxgraph} constante
    :style: width: 80%;
    ```
````
`````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-rev-polyn-ex5>` et {numref}`exercice %s<exercice:2-rev-polyn-ex6>`.
```

{.allow-break-inside}
### Fonctions quadratiques

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

```{container} frame noprint
# Exemple {num2}`exemple`

$f(x) = 4x^2 - 2x - 6$ est une fonction quadratique dont les coefficients sont
$a = 4$, $b = -2$ et $c = -6$.
Commme $a > 0$, la représentation graphique de $f$ sera une parabole convexe.
```

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

```{container} frame noprint
# Exemple {num2}`exemple`

Reprenez $f(x) = 4x^2 - 2x - 6$ et calculez les zéros, c'est-à-dire résolvez
$4x^2 - 2x - 6 = 0$.

$\Delta = (-2)^2 - 4 \cdot 4 \cdot (-6) = 4 + 96 = 100$\
$x_{1,2}=\dfrac{2 \pm \sqrt{100}}{2 \cdot 4} = \dfrac{2 \pm 10}{8}$\
$x_1 = \dfrac{12}{8} = \dfrac{3}{2}$ et $x_2 = \dfrac{-8}{8} = -1$

$f$ a donc deux zéros et coupe l'axe des $x$ en $-1$ et en $\dfrac{3}{2}$.

La forme factorisée est
$f(x) = 4(x - (-1))(x - \dfrac{3}{2}) = 4(x + 1)(x - \dfrac{3}{2})$
```

````{admonition} Théorème
:class: note
Le point **maximum** ou **minimum** d'une parabole est appelé **sommet**.
Les coordonnées du sommet $S(x_s;y_s)$ d'une fonction quadratique $f$ sont

```{math}
:class: align-center
x_s=-\frac{b}{2a} \text{ et } y_s=f(x_s)=- \dfrac{\Delta}{4a}
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

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
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-rev-polyn-ex7>`, {numref}`exercice %s<exercice:2-rev-polyn-ex8>` et
{numref}`exercice %s<exercice:2-rev-polyn-ex9>`.
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.fctF = el => {
  return initBoard(el, [attrs.screen, attrs.nonInteractive, {
    boundingBox: [-5, 2.5, 5, -7],
    defaults: {
      point: {
        size: 2,
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

### Résolution d'inéquations

La résolution d'inéquation du 1<sup>er</sup> degré est identique à la résolution
d'équation à l'exception de la multiplication ou la division par un nombre
négatif qui change le sens de l'inégalité.

```{container} frame noprint
# Exemple {num2}`exemple`

$$
2x - 7 &< 5x + 4 \qquad &&| -5x\\
-3x - 7 &< 4 \qquad &&| +7\\
-3x &< 11 \qquad &&| {\color{red}:(-3)}\\
x &{\,\color{red}>\,} \dfrac{11}{-3}\\
x &> -\dfrac{11}{3}
$$

$S = ]-\dfrac{11}{3}; +\infty[$
```

Pour résoudre une inéquation du 2<sup>e</sup> degré ou plus, il faut passer par
la factorisation et faire un tableau de signes.

````{container} frame noprint
# Exemple {num2}`exemple`

$$
(7-x)(2x + 3) < 0
$$

Zéros:\
$7-x = 0  \quad \text{ou}  \quad 2x + 3 = 0 \qquad \implies \qquad x = 7  \quad \text{ou} \quad  x = -\dfrac{3}{2}$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-\frac{3}{2}$|{.w}|$7$|{.r .w}$\tiny+\;\infty$
|$7-x$|$+$||$+$|$0$|$-$
|$2x+3$|$-$|$0$|$+$||$+$
|$(7-x)(2x + 3) < 0$|$-$|$0$|$+$|$0$|$-$
```
$S = ]-\infty; -\frac{3}{2}[ \: \cup \: ]7; +\infty[$
````

````{container} frame noprint
# Exemple {num2}`exemple`

$$
x^2 + 4x - 12 &\leq 0 \qquad &&| \text{factorisation}\\
(x - 2)(x + 6) &\leq 0
$$

Zéros:\
$x - 2 = 0  \quad \text{ou}  \quad x - 6 = 0 \qquad \implies \qquad x = 2  \quad \text{ou} \quad  x = -6$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-6$|{.w}|$2$|{.r .w}$\tiny+\;\infty$
|$x-2$|$-$||$-$|$0$|$+$
|$x+6$|$-$|$0$|$+$||$+$
|$(x - 2)(x + 6) \leq 0$|$+$|$0$|$-$|$0$|$+$
```
$S = [-6; 2]$
````

Pour résoudre une inéquation avec une fraction rationnelle, il faut faire un
tableau de signes.

````{container} frame noprint
# Exemple {num2}`exemple`

$\dfrac{2x-1}{2-3x} \leq 0$

Domaine de définition:\
$2-3x \neq 0 \qquad \implies \qquad 2 \neq 3x \qquad \implies \qquad \dfrac{2}{3} \neq x$\
$D = \mathbb{R} \setminus \{\dfrac{2}{3}\}$

Zéros:\
$2x - 1 = 0 \qquad \implies \qquad 2x = 1 \qquad \implies \qquad x = \dfrac{1}{2}$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$\frac{1}{2}$|{.w}|$\frac{2}{3}$|{.r .w}$\tiny+\;\infty$
|$2x-1$|$-$|$0$|$+$||$+$
|$2-3x$|$+$||$+$|{.g}$0$|$-$
|$\dfrac{2x-1}{2-3x} \leq 0$|$-$|$0$|$+$|{.g}|$-$
```
$S = ]-\infty; \frac{1}{2}] \: \cup \: ]\frac{2}{3}; +\infty[$
````

````{container} frame noprint
# Exemple {num2}`exemple`

$\dfrac{-2}{x^2-1} \leq 0$

Domaine de définition:\
$x^2-1 \neq 0 \qquad \implies \qquad (x+1)(x-1) \neq 0 \qquad \implies \qquad x \neq 1 \text{ et } x \neq -1 $\
$D = \mathbb{R} \setminus \{-1; 1\}$

Zéro:\
Le numérateur ne s'annule jamais.

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-1$|{.w}|$1$|{.r .w}$\tiny+\;\infty$
|$-2$|$-$||$-$||$-$
|$x-1$|$-$||$-$|{.g}$0$|$+$
|$x+1$|$-$|{.g}$0$|$+$||$+$
|$\dfrac{-2}{(x+1)(x-1)} \leq 0$|$-$|{.g}|$+$|{.g}|$-$
```
$S = ]-\infty; -1[ \: \cup \: ]1; +\infty[$
````

```{container} frame noprint instructor
-> {numref}`exercice %s<exercice:2-rev-polyn-ex10>`.
```


## Exercices

### Exercice {num2}`exercice:2-rev-polyn-ex1`

Les représentations graphiques suivantes sont-elles celles d'une fonction?

{.columns-2 .lower-alpha-paren}
1.  ```{jsxgraph} fct1a
    :style: width: 80%;
    ```
2.  ```{jsxgraph} fct1b
    :style: width: 80%;
    ```
3.  ```{jsxgraph} fct1c
    :style: width: 80%;
    ```
4.  ```{jsxgraph} fct1d
    :style: width: 80%;
    ```
5.  ```{jsxgraph} fct1e
    :style: width: 80%;
    ```
6.  ```{jsxgraph} fct1f
    :style: width: 80%;
    ```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-5.2, 5.2, 5.7, -5.2],
  defaultAxes: {
    x: {ticks: {drawLabels: false}},
    y: {ticks: {drawLabels: false}},
  },
}];
render.fct1a = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => x ** 3 / 4 - 2 * x - 1]);
  });
};
render.fct1b = el => {
  return initBoard(el, battrs, board => {
    board.create('curve', [t => t ** 3 / 4 - 2 * t - 1, t => t, -6, 6]);
  });
};
render.fct1c = el => {
  return initBoard(el, battrs, board => {
    board.create('curve', [t => 3, t => t, -6, 6]);
  });
};
render.fct1d = el => {
  return initBoard(el, battrs, board => {
    board.create('functiongraph', [x => -3]);
  });
};
render.fct1e = el => {
  return initBoard(el, battrs, board => {
    board.create('curve', [t => (t + 1) ** 2 - 4, t => t, -6, 6]);
  });
};
render.fct1f = el => {
  return initBoard(el, battrs, board => {
    const f1 = x => 1 / (x + 1) + 2;
    const f2 = x => x - 2;
    board.create('functiongraph', [x => x < -1.3 ? f1(x): f2(x)]);
    board.create('point', [-1.3, f1(-1.3)], {size: 2});
    board.create('point', [-1.3, f2(-1.3)], {
      size: 2, fillColor: JXG.palette.white
    });
  });
};
</script>

```{block} solution
{.columns-3 .lower-alpha-paren}
1. oui
2. non
3. non
4. oui
5. non
6. oui
```

### Exercice {num2}`exercice:2-rev-polyn-ex2`

Pour chacune des fonctions suivantes, répondez aux questions ci-dessous:

{.decimal-paren}
1.  Quel est le domaine de définition de $f$?
2.  Quel est  l'ensemble des images de $f$?
3.  Que vaut $f(-1)$? Et $f(0)$?
4.  Si l'image de $x$ est $2$, alors que vaut $x$?
5.  Déterminez l'ensemble des solutions de $f(x)=1$.
6.  Quel est l'ensemble des valeurs de $x$ pour lesquelles la fonction est
    positive?
7.  Quel est l'ensemble des solutions de l'inéquation $f(x)\leq 2$?
8.  De quelle valeur 2 est-il l'antécédent (ou la préimage)?
9.  Quelle est la valeur du maximum (absolu) de $f$?
10. Sur quel(s) intervalle(s) la fonction est-elle décroissante?

{.columns-2 .lower-alpha-paren}
1.  ```{jsxgraph} fct2a
    :style: width: 80%;
    ```
2.  ```{jsxgraph} fct2b
    :style: width: 80%;
    ```
3.  ```{jsxgraph} fct2c
    :style: width: 80%;
    ```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
const battrs = [attrs.print, {
  boundingBox: [-6.2, 4.5, 6.2, -5.7],
  defaultAxes: {
    x: {ticks: {ticksPerLabel: 5}},
    y: {ticks: {ticksPerLabel: 5}},
  },
  defaults: {
    point: {size: 2}
  },
}];
render.fct2a = el => {
  return initBoard(el, battrs, board => {
    const f1 = x => -((x + 3) ** 2);
    const f2 = x => 0.25 * (x + 3) ** 2;
    const f3 = x => x + 2;
    const f4 = x => -0.6 * x * (x - 2) + 2;
    const f5 = x => -x + 4;
    const f6 = x => 0.25 * (x - 5) ** 2;
    board.create('functiongraph', [
      x => x <= -3 ? f1(x) : x <= -1 ? f2(x) : x <= 0 ? f3(x) :
           x <= 2 ? f4(x) : x <= 3 ? f5(x) : f6(x),
      -5, 5,
    ]);
    board.create('point', [-5, f1(-5)]);
    board.create('point', [5, f6(5)]);
  });
};
render.fct2b = el => {
  return initBoard(el, battrs, board => {
    const f1 = x => (-1 / 6 * x ** 3 - 3 / 2 * x ** 2 - 5 * x - 6) / 2.33 + 1;
    const f2 = x => -2 * x - 2;
    const f3 = x => (1 / 3 * x ** 3 - 1 / 2 * x ** 2 - 2 * x) * 9 / 10 - 2;
    const f4 = x => (x - 5) * (x + 1) * 5 / 9;
    board.create('functiongraph', [
      x => x <= -1 ? f1(x) : x <= 0 ? f2(x) : x <= 2 ? f3(x) : f4(x),
      -5, 5,
    ]);
    board.create('point', [-5, f1(-5)]);
    board.create('point', [5, f4(5)]);
  });
};
render. fct2c= el => {
  return initBoard(el, battrs, board => {
    const f1 = x => -x - 2;
    const f2 = x => (x + 2) * (x - 15) / 15;
    const f3 = x => x ** 2 * (x - 2) ** 2 - 2;
    const f4 = x => (x - 3) * (x - 1) * 2;
    const f5 = x => -(x - 3) * (x - 7) / 2;
    board.create('functiongraph', [
      x => x <= -2 ? f1(x) : x <= 0 ? f2(x) : x <= 2 ? f3(x) :
           x <= 3 ? f4(x) : f5(x),
      -5, 5,
    ]);
    board.create('point', [-5, f1(-5)]);
    board.create('point', [5, f5(5)]);
  });
};
</script>

```{block} solution
{.columns-2 .lower-alpha-paren .hsep-0 .vsep-2}
1.  {.decimal-paren}
    1.  $D_f=\left[-5;5\right] $
    2.  $Im_f=\left[ -4;2.5\right]$
    3.  $f(-1)=1$, $f(0)=2$
    4.  $x = 0$ ou $2$
    5.  $S=\left\{ -1; 3\right\rbrace $
    6.  $x \in \left[ -3; 5 \right] $
    7.  $S=\left[ -5; 0\right] \cup \left[ 2; 5\right]$
    8.  $2$ est l'antécédent de $2$
    9.  Le maximum (absolu) est $(1; 2.5)$
    10. $x\in\left[ 1; 5\right] $
2.  {.decimal-paren}
    1.  $D_f=\left[-5;5\right] $
    2.  $Im_f=\left[ -5;2\right]$
    3.  $f(-1)=0$, $f(0)=-2$
    4.  $x = -5$
    5.  $S=\left\{ -3\right\rbrace $
    6.  $x \in \left[ -5; -1\right] \cup \{5\} $
    7.  $S=\left[ -5; 5\right] $
    8.  $2$ est l'antécédent de $-5$
    9.  Le maximum (absolu) est $(-5; 2)$
    10. $x\in\left[ -5; 2\right]$
3.  {.decimal-paren}
    1.  $D_f=\left[-5;5\right] $
    2.  $Im_f=\left[ -2;3\right]$
    3.  $f(-1)=-1$, $f(0)=-2$
    4.  $x = -4$ ou $5$
    5.  $S=\left\{ -3; 3.5\right\} $
    6.  $x \in \left[ -5; -2\right] \cup \left[ 3; 5\right] $
    7.  $S=\left[ -4; 5\right] $
    8.  2 est l'antécédent de -2
    9.  Le maximum (absolu) est $(-5; 3)$
    10. $x \in \left[ -5; 0\right] \cup \left[ 1; 2\right]  $
```

### Exercice {num2}`exercice:2-rev-polyn-ex3`

Déterminez le domaine de définition des fonctions suivantes.

{.columns-2 .lower-alpha-paren .vsep-2}
1. $f(x)=\dfrac{1}{x^2-4}$
2. $f(x)=\sqrt{x+4}$
3. $f(x)=\dfrac{2x+4}{1+x^2}$
4. $f(x)=\dfrac{4x+7}{x}$
5. $f(x)=\sqrt{x^2+6x+5}$
6. $f(x)=\sqrt{6x-4}$
7. $f(x)=\sqrt{5-3x}$

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $D_f = \mathbb{R} \setminus \left\{ -2; 2 \right\}$
2. $D_f = \left[-4; +\infty\right[$
3. $D_f = \mathbb{R}$
4. $D_f = \mathbb{R}^* = \mathbb{R} \setminus \left\{ 0 \right\}$
5. $D_f = \left] -\infty; -5\right] \cup \left[ -1; +\infty\right[$
6. $D_f = \left[ \frac{2}{3}; +\infty \right[$
7. $D_f = \left] -\infty; \frac{5}{3} \right]$
```

### Exercice {num2}`exercice:2-rev-polyn-ex4`

Déterminez le domaine de définition et les zéros des fonctions suivantes.

{.columns-2 .lower-alpha-paren .vsep-2}
1. $f(x)=5x-1$
2. $f(t)=t^2+2t$
3. $g(x)=\dfrac{x-4}{4-2x}$
4. $h(s)=s^2-4s+3$
5. $j(x)=\dfrac{x+3}{2x-4}$
6. $k(t)=\sqrt{(t+2)(3-t)}$
7. $m(t)=\dfrac{t^2-3t-4}{t}$
8. $f(x)=\dfrac{\sqrt{-x+2}}{4x^2+2x}$

{.avoid-break-inside}
````{block} solution
{.lower-alpha-paren .columns-2}
1.  Zéro: $x=\frac{1}{5}$; $D_f=\mathbb{R}$.
2.  Zéros: $t_1=-2$ et $t_2=0$; $D_f=\mathbb{R}$.
3.  Zéro: $x=4$; $D_g=\mathbb{R} \setminus \left\{ 2 \right\}$.
4.  Zéros: $s_1=1$ et $s_2=3$; $D_h=\mathbb{R}$.
5.  Zéro: $x=-3$; $D_j=\mathbb{R} \setminus \left\{ 2 \right\}$.
6.  Zéros: $t_1=-2$ et $t_2=3$; $D_k=\left[ -2;3 \right]$.
7.  $m(t)=\dfrac{t^2-3t-4}{t}=\dfrac{(t+1)(t-4)}{t}$<br>
    Zéros: $t_1=-1$ et $t_2=4$;<br>
    $D_m = \mathbb{R}^* = \mathbb{R} \setminus \left\{ 0 \right\}$.
8.  $f(x)=\dfrac{\sqrt{-x+2}}{4x^2+2x} = \dfrac{\sqrt{-x+2}}{2x(2x + 1)}$<br>
    Zéro: $x=2$;<br>
    $D_f = \left] -\infty;2 \right] \setminus \left\{ -\frac{1}{2}; 0 \right\}$.
````

### Exercice {num2}`exercice:2-rev-polyn-ex5`

Déterminez les expressions algébriques des fonctions dont ces droites sont les
représentations graphiques.

{.columns-2 .lower-alpha-paren}
```{jsxgraph} droites
:style: width: 80%;
```

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.droites = el => {
  return initBoard(el, [attrs.print, {
    boundingBox: [-6.2, 5.4, 6.2, -4.2],
    defaultAxes: {
      x: {ticks: {ticksPerLabel: 5}},
      y: {ticks: {ticksPerLabel: 5}},
    },
  }], board => {
    const fns = {
      a: [4.8, -1.5, x => -x / 2 + 1 / 2],
      b: [-2.4, 3.8, x => -x + 2],
      c: [0.8, 3.9, x => 3 * x],
      d: [3.7, 4.1, x => 3 * x / 2 - 1],
      e: [-3.8, 1.3, x => -x - 2],
      f: [4.8, 2.7, x => x / 3 + 3 / 2],
      g: [-4.8, -3.3, x => -3],
    };
    for (const [name, [x, y, fn]] of Object.entries(fns)) {
      board.create('functiongraph', [fn]);
      board.create('text', [x, y, `\\(${name}\\)`]);
    }
    board.create('curve', [t => 2, t => t]);
    board.create('text', [2.2, -1.8, `\\(h\\)`]);
  });
};
</script>

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $a(x) = -\frac{x}{2} + \frac{1}{2}$
2. $b(x) = -x+2$
3. $c(x) = 3x$
4. $d(x) = \frac{3x}{2} - 1$
5. $e(x) = -x-2$
6. $f(x) = \frac{x}{3} + \frac{3}{2}$
7. $g(x) = -3$
8. N'est pas une fonction
```

### Exercice {num2}`exercice:2-rev-polyn-ex6`

Déterminez l'expression algébrique de la fonction dont la représentation
graphique est une droite...

{.lower-alpha-paren}
1.  ... qui passe par les points $A(2;4)$ et $B(3;6)$.
2.  ... qui passe par les points $A(2;-1)$ et $B(-2;-1)$.
3.  ... qui passe par le point $P(3;1)$ et dont l'ordonnée à l'origine vaut
    $\frac{5}{2}$.
4.  ... qui passe par les points $K(2;3)$ et $L(-17;3)$.
5.  ... de pente $2$ et d'ordonnée à l'origine $-1$.
6.  ... de pente $0$ et d'ordonnée à l'origine $2$.
7.  ... qui coupe l'axe des $x$ en $-1$ et passe par le point $A(2;3)$.

```{block} solution
{.columns-2 .lower-alpha-paren}
1. $f(x) = 2x$
2. $f(x) = -1$
3. $f(x) = -\frac{x}{2} + \frac{5}{2}$
4. $f(x) = 3$
5. $f(x) = 2x-1$
6. $f(x) = 2$
7. $f(x) = x+1$
```

### Exercice {num2}`exercice:2-rev-polyn-ex7`

Factorisez si possible les expressions algébriques des fonctions suivantes, puis
calculez les coordonnées du sommet $S$ de leur représentation graphique, en
précisant s'il s'agit d'un minimum ou d'un maximum.

{.columns-2 .lower-alpha-paren}
1.  $f(x)=x^2+12x+11$
2.  $f(x)=x^2+4x$
3.  $f(x)=x^2-2x-3$
4.  $f(x)=-x^2+2x-1$
5.  $f(x)=x^2+x+1$
6.  $f(x)=-\frac{1}{3}x^2-\frac{1}{3}x-\frac{1}{3}$
7.  $f(x)=2x^2-x+2$
8.  $f(x)=3x^2-12x+12$
9.  $f(x)=-x^2+\frac{4}{3}x-\frac{4}{9}$
10. $f(x)=\frac{1}{2}x^2+x+1$
11. $f(x)=-2x^2-5x+3$
12. $f(x)=2x^2-x+4$
13. $f(x)=7x^2+8x+1$
14. $f(x)=15x^2+x-2$
15. $f(x)=-x^2+8x+20$
16. $f(x)=x^2-5$
17. $f(x)=x^2+4x-6$
18. $f(x)=3x^2+5x-4$

```{block} solution
{.lower-alpha-paren .vsep-1}
1.  $f(x) = (x + 11)(x + 1)$; $S(-6;-25)$ minimum
2.  $f(x) = x(x + 4)$; $S(-2;-4)$ minimum
3.  $f(x) = (x + 1)(x - 3)$; $S(1;-4)$ minimum
4.  $f(x) = -(x - 1)^2$; $S(1;0)$ maximum
5.  Pas factorisable; $S\Bigl(-\frac{1}{2};\frac{3}{4}\Bigr)$ minimum
6.  Pas factorisable; $S\Bigl(-\frac{1}{2};-\frac{1}{4}\Bigr)$ maximum
7.  Pas factorisable; $S\Bigl(\frac{1}{4};\frac{15}{8}\Bigr)$ minimum
8.  $f(x) = 3(x - 2)^2$; $S(2;0)$ minimum
9.  $f(x) = -\Bigl(x - \frac{2}{3}\Bigr)^2$; $S\Bigl(\frac{2}{3};0\Bigr)$ maximum
10. Pas factorisable; $S\Bigl(-1;\frac{1}{2}\Bigr)$ minimum
11. $f(x) = -2(x + 3)\Bigl(x - \frac{1}{2}\Bigr)$; $S\Bigl(-\frac{5}{4};\frac{49}{8}\Bigr)$ maximum
12. Pas factorisable; $S\Bigl(\frac{1}{4};\frac{31}{8}\Bigr)$ minimum
13. $f(x) = 7(x + 1)\Bigl(x + \frac{1}{7}\Bigr)$; $S\Bigl(-\frac{4}{7};-\frac{9}{7}\Bigr)$ minimum
14. $f(x) = 15\Bigl(x + \frac{2}{5}\Bigr)\Bigl(x - \frac{1}{3}\Bigr)$; $S\Bigl(-\frac{1}{30};-\frac{121}{60}\Bigr)$ maximum
15. $f(x) = -(x + 2)(x - 10)$; $S(4;36)$ maximum
16. $f(x) = (x + \sqrt{5})(x - \sqrt{5})$; $S(0;-5)$ minimum
17. $f(x) = (x + 2-\sqrt{10})(x + 2+\sqrt{10})$; $S(-2;-10)$ minimum
18. $f(x) = 3\Bigl(x - \frac{-5-\sqrt{73}}{6}\Bigr)\Bigl(x - \frac{-5+\sqrt{73}}{6}\Bigr)$; $S\Bigl(-\frac{5}{6};-\frac{73}{12}\Bigr)$ minimum
```

### Exercice {num2}`exercice:2-rev-polyn-ex8`

Représentez graphiquement les paraboles de l'exercice précédent.

```{block} solution
Correction en ligne avec Desmos (<https://www.desmos.com/calculator?lang=fr>) ou
Geogebra (<https://www.geogebra.org/cas?lang=fr>).
```

### Exercice {num2}`exercice:2-rev-polyn-ex9`

Déterminez l'expression fonctionnelle de la parabole qui passe par les points
$A(2; 9)$, $B(-6; -7)$ et $C(1; 0)$.

```{block} solution
$f(x) = x^2 + 6x - 7$
```

### Exercice {num2}`exercice:2-rev-polyn-ex10`

Déterminez à l'aide d'un tableau de signes l'ensemble des solutions des
inéquations suivantes.

{.columns-2 .lower-alpha-paren .vsep-2}
1. $(3x+1)(2x+3) > 0$
2. $(5-x)(2x+1) < 0$
3. $\dfrac{5+2x}{4x+1} \leq 0$
4. $\dfrac{2x+1}{2-x} \geq 0$

```{block} solution
{.columns-2 .lower-alpha-paren .vsep-2}
1. $S = \Bigl] -\infty;-\frac{3}{2} \Bigr[ \cup \Bigl] -\frac{1}{3}; +\infty \Bigr[$
2. $S = \Bigl] -\infty;-\frac{1}{2} \Bigr[ \cup \left] 5; +\infty \right[$
3. $S = \Bigl[ -\frac{5}{2};-\frac{1}{4} \Bigr[$
4. $S = \Bigl[ -\frac{1}{2};2 \Bigr[$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```

