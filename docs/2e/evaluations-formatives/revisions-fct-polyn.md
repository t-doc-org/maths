% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Révisions et fonctions polynomiales

```{include} /_import/informatique/_include/entete-examen.export.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice non
autorisée.\
Réponse sous forme de fraction simplifiée**
```
---

## Question {nump}`question`{points}`10`

Soit la fonction $f(x) = 4x^2 - 28x + 48$.

{.lower-alpha-paren}
1.  Factorisez entièrement $f$.
2.  Déterminez les zéros de $f$.
3.  Calculez les coordonnées du sommet de $f$.
4.  Résolvez $f(x) > 0$.



````{solution}
{.lower-alpha-paren}
1.  $f(x) = 4(x^2 -7x + 12) = 4(x-3)(x-4)$
2.  $x_1 = 3$ et $x_2 = 4$
3.  $x_s = \dfrac{28}{8} = \dfrac{7}{2}$\
    $y_s = f(x_s) = f(\dfrac{7}{2}) = 4 \cdot \left( \dfrac{7}{2} \right)^2 - 28 \cdot \left( \dfrac{7}{2} \right) + 48 = -1$\
    $S = \left(\dfrac{7}{2}; -1 \right)$
4.  ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$3$|{.w}|$4$|{.r .w}$\tiny+\;\infty$
    |$4$|$+$||$+$||$+$
    |$x-3$|$-$|$0$|$+$||$+$
    |$x-4$|$-$||$-$|$0$|$+$
    |$4(x-3)(x-4) > 0$|$+$|$0$|$-$|$0$|$+$
    ```

    $S = ]-\infty; 3[ \;\cup\; ]4; +\infty[$
````

## Question {nump}`question`{points}`7`

Soit la fonction $g(x) = x^3+6x^2+3x-10$

{.lower-alpha-paren}
1.  Factorisez entièrement $g$.
2.  Déterminez les zéros de $g$.

```{solution}
{.lower-alpha-paren}
1.  $g(x)= (x+2)(x-1)(x+5)$
2.  $x_1 = 1$, $x_2 = -2$ et $x_3 = -5$
```

## Question {nump}`question`{points}`8`

Soit la fonction $h(x) = |-x + 3| - 2$

{.lower-alpha-paren}
1.  Représentez la fonction $h(x)$.
2.  Déterminez le domaine de définition, l'ensemble des images, les zéros et
    l'ordonnée à l'origine de $h(x)$.

<script type="module">
const {attrs, initBoard, JXG, render} = await tdoc.import('jsxgraph.js');
render.valAbs = el => {
  return initBoard(el, [attrs.print, {
      boundingBox: [-4.5, 5.5, 7.5, -3],
      defaultAxes: {
        x: {ticks: {ticksDistance: 2, minorTicks: 1}},
        y: {ticks: {ticksDistance: 2, minorTicks: 1}},
      },
      grid: {majorStep: 1},
    }], board => {
      board.create('functiongraph', [x => Math.abs(- x + 3) - 2], {
        name: `\\(h\\)`, label: {position: '0.85fr left', offset: [0, 5]}
      });
  });
};
</script>

```{solution}
{.lower-alpha-paren}
1.  ```{jsxgraph} valAbs
    :style: width: 58%;
    ```
2.  $D_h = \mathbb{R}$, $Im_h = ]-2; + \infty[$, zéros: $x_1 = 1$ et $x_2 = 5$,
    ordonnée à l'origine: $1$

```


