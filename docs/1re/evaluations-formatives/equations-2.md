% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Équations et inéquations 2

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} /_import/informatique/_include/entete-examen.export.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice autorisée.\
Réponse sous forme de valeur exacte simplifiée.**
```
---

## Question {nump}`question`{points}`8`

Résolvez les équations suivantes:

{.lower-alpha-paren}
1.  $\dfrac{5 - 4x}{3x - 2} = 0$
2.  $\dfrac{x^2 - 1}{x + 5} = x - 1$

```{solution}
{.lower-alpha-paren}
1.  $D = \mathbb{R} \setminus \left\{\dfrac{2}{3}\right\}$ et $S = \left\{\dfrac{5}{4}\right\}$
2.  $D = \mathbb{R} \setminus \{-5\}$ et $S = \{1\}$

```

## Question {nump}`question`{points}`12`

Résolvez les inéquations suivantes:

{.lower-alpha-paren}
1.  $\dfrac{-3x}{x^2 - 16} \leq 0$
2.  $\dfrac{2x + 1}{2x - 1} > \dfrac{7}{6}$

```{solution}
{.lower-alpha-paren}
1.  Domaine de définition: $D = \mathbb{R} \setminus \{-4; 4\}$<br>
    Zéros du numérateur: $x=0$<br>
    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-4$|{.w}|$0$|{.w}|$4$|{.r .w}$\tiny+\;\infty$
    |$-3x$|$+$||$+$|$0$|$-$||$-$
    |$x-4$|$-$||$-$||$-$|{.g}$0$|$+$
    |$x+4$|$-$|{.g}$0$|$+$||$+$||$+$
    |$\dfrac{-3x}{(x-4)(x+4)}\leq 0$|$+$|{.g}|$-$|$0$|$+$|{.g}|$-$
    ```
    $S = ]-4;0] \cup ]4;+\infty[$
2.  Domaine de définition: $D = \mathbb{R} \setminus \left\{\dfrac{1}{2}\right\}$<br>
    Bonne forme: $\dfrac{-2x+13}{6(2x-1)} > 0$<br>
    Zéros du numérateur: $x=\dfrac{13}{2}$<br>
    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$\dfrac{1}{2}$|{.w}|$\dfrac{13}{2}$|{.r .w}$\tiny+\;\infty$
    |$-2x+13$|$+$||$+$|$0$|$-$
    |$6$|$+$||$+$||$+$
    |$2x-1$|$-$|{.g}$0$|$+$||$+$
    |$\dfrac{-2x+13}{6(2x-1)} > 0$|$-$|{.g}|$+$|$0$|$-$
    ```
    $S = ]\dfrac{1}{2}; \dfrac{13}{2}[$

```

## Question {nump}`question`{points}`10`

Résolvez les équations suivantes:

{.lower-alpha-paren}
1.  $\sqrt{3 - 2x} = x$
2.  $\sqrt{x + 5} = \sqrt{4 - x}$

```{solution}
{.lower-alpha-paren}
1.  $D = \left]-\infty; \dfrac{3}{2}\right]$ et $S = \left\{1\right\}$
2.  $D = \left[-5; 4\right]$ et $S = \left\{-\dfrac{1}{2}\right\}$

```
