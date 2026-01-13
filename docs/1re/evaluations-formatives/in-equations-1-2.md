% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Équations et inéquations du premier et du deuxième degré

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} ../../entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice non
autorisée.**
```
---

## Question {nump}`question`{points}`4`

Résolvez les équations suivantes.

{.lower-alpha-paren}
1.  $8x + 3(4 - 2x) = 2x - 21$
2.  $\dfrac{x+2}{3} - \dfrac{x-4}{5} = \dfrac{4x-3}{15}$


```{solution}
```{list-grid}
:style: grid-template-columns: 1fr 1fr;
-  a)
    $$8x + 3(4 - 2x) &=& 2x - 21\\
    8x + 12 - 6x &=& 2x - 21\\
    2x + 12&=& 2x - 21\\
    12 &=& 21
    $$
    $S = \emptyset$
-   b)
    $$\dfrac{x+2}{3} - \dfrac{x-4}{5} &=& \dfrac{4x-3}{15}\\
    \dfrac{5(x+2)}{3} - \dfrac{3(x-4)}{5} &=& \dfrac{4x-3}{15}\\
    5x+10 - 3x+12 &=& 4x-3\\
    2x+22 &=& 4x-3\\
    -2x &=& -25\\
    x &=& \dfrac{25}{2}
    $$
    $S = \left\{\dfrac{25}{2}\right\}$
```

## Question {nump}`question`{points}`5`

Résolvez les inéquations suivantes.

{.lower-alpha-paren}
1.  $2x -5 \geq 7x + 10$
2.  $-4 < \dfrac{4x-1}{2} < 5$

```{solution}
```{list-grid}
:style: grid-template-columns: 1fr 1fr;
-  a)
    $$2x -5 &\geq& 7x + 10\\
    -5x &\geq& 15\\
    x &\leq& -3
    $$
    $S = ]-\infty; -3]$
-   b)
    $$-4 &<& \dfrac{4x-1}{2} &<& 5\\
    -8 &<& 4x-1 &<& 10\\
    -7 &<& 4x &<& 11\\
    -\dfrac{7}{4} &<& x &<& \dfrac{11}{4}
    $$
    $S = \left ]-\dfrac{7}{4}; \dfrac{11}{4}\right [$
```

## Question {nump}`question`{points}`5`

Résolvez les systèmes d'équations suivants.

{.lower-alpha-paren}
1.  $\begin{cases}
    \begin{aligned}
    x + 3y &= 8  \\  2x - 5y &= -17
    \end{aligned}
    \end{cases}$

2.  $\begin{cases}
    \begin{aligned}
    x + y + 2z &= 3  \\  x + 2y + z &= 1 \\ 2x + y + z &= 0
    \end{aligned}
    \end{cases}$

```{solution}
```{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   a)
    $\begin{cases}
    \begin{aligned}
    x + 3y &= 8  \\  2x - 5y &= -17
    \end{aligned}
    \end{cases}$

    $\begin{cases}
    \begin{aligned}
    2x + 6y &= 16  \\  -2x + 5y &= 17
    \end{aligned}
    \end{cases}$

    $11y = 33 \implies y = \dfrac{33}{11}= 3$

    $x + 3 \cdot 3 = 8 \implies x + 9 = 8 \implies x = -1$

    $S = \{(-1; 3)\}$
-   b)
    $\begin{cases}
    \begin{aligned}
    x + y + 2z &= 3  \\  x + 2y + z &= 1 \\ 2x + y + z &= 0
    \end{aligned}
    \end{cases}$

    $\begin{cases}
    \begin{aligned}
    2x + 2y + 4z &= 6  \\  2x + 4y + 2z &= 2 \\ 2x + y + z &= 0
    \end{aligned}
    \end{cases}$

    $\begin{cases}
    \begin{aligned}
    -2y + 2z &= 4  \\  3y + z &= 2
    \end{aligned}
    \end{cases}$

    $\begin{cases}
    \begin{aligned}
    y - z &= -2  \\  3y + z &= 2
    \end{aligned}
    \end{cases}$

    $4y = 0 \implies y = 0$

    $0 - z = -2 \implies z = 2$

    $x + 0 + 2 \cdot 2 = 3 \implies x + 4 = 3 \implies x = -1$

    $S = \{(-1; 0; 2)\}$


```

## Question {nump}`question`{points}`4`

Résolvez le problème suivant **au moyen d'une inéquation**.

Des boîtes de conserve de $200\,g$ doivent être rangées dans un carton. Le
carton d'emballage pèse $500\,g$. Le tout ne doit pas dépasser $9\,kg$.

Combien de boîtes peut-on mettre au plus dans le carton?

```{solution}
Soit $x$ le nombre de boîtes de conserve.
$$
200x + 500 &\leq& 9000\\
200x &\leq& 8500\\
x &\leq& 42.5\\
$$
$S = ]-\infty; 42.5]$

Nous pouvons mettre au maximum 42 boîtes.
```

## Question {nump}`question`{points}`4`

Résolvez le problème suivant en utilisant les équations.

Dans un magasin, tous les articles d'une même catégorie sont au même prix.
Pierre et Clothilde décident d'y acheter des DVD et des bandes dessinées. Ils
possèdent chacun $70$ CHF. Pierre achète un DVD et 4 bandes dessinées; il lui
reste $17.50$ CHF. Clothilde dépense $65$ CHF pour l'achat de 2 DVD et 3 bandes
dessinées.

Quel est le prix de chaque article?

````{solution}
Soient x le prix d'un DVD et y le prix d'une BD.

$\begin{cases}
\begin{aligned}
x + 4y &= 70 - 17.50  \\  2x + 3y &= 65
\end{aligned}
\end{cases}$

$\begin{cases}
\begin{aligned}
x + 4y &= 52.5  \\  2x + 3y &= 65
\end{aligned}
\end{cases}$

$\begin{cases}
\begin{aligned}
2x + 8y &= 105  \\  -2x - 3y &= -65
\end{aligned}
\end{cases}$

$5y = 40 \implies y = 8$

$x + 4 \cdot 8 = 52.5 \implies x + 32 = 52.5 \implies x = 20.5$

$S = \{(20.5; 8)\}$

Un DVD coûte 20.50 CHF et une BD 8 CHF.
````

## Question {nump}`question`{points}`5`

Résolvez l'équation suivante.

{.lower-alpha-paren}
1.  $2x^2 - 2x - 1 = 0$
2.  $\dfrac{1}{3}x^2 - x = 1$

````{solution}
{.lower-alpha-paren}
1.  $2x^2 - 2x - 1 = 0$

    $\Delta = (-2)^2 - 4 \cdot 2 \cdot (-1) = 4 + 8 = 12 \implies \sqrt{\Delta} = \sqrt{12} = 2\sqrt{3}$

    $x_{1,2} = \dfrac{2 \pm 2\sqrt{3}}{2 \cdot 2} = \dfrac{2(1 \pm \sqrt{3})}{4} = \dfrac{1 \pm \sqrt{3}}{2}$

    $S = \left\{\dfrac{1 - \sqrt{3}}{2}; \dfrac{1 + \sqrt{3}}{2} \right\}$

2.  $\dfrac{1}{3}x^2 - x = 1 \implies x^2 - 3x = 3 \implies x^2 - 3x - 3 = 0$

    $\Delta = (-3)^2 - 4 \cdot 1 \cdot (-3) = 9 + 12 = 21 \implies \sqrt{\Delta} = \sqrt{21}$

    $x_{1,2} = \dfrac{3 \pm \sqrt{21}}{2}$

    $S = \left\{\dfrac{3 - \sqrt{21}}{2}; \dfrac{3 + \sqrt{21}}{2}\right\}$
````

## Question {nump}`question`{points}`5`

Résolvez les inéquations suivantes.

{.lower-alpha-paren}
1.  $2x^2 - x - 3 \leq 0$
2.  $-8x < 3 + 5x^2$

````{solution}
{.lower-alpha-paren}
1.  $2x^2 - x - 3 \leq 0$

    Factorisation:

    $\Delta = (-1)^2 - 4 \cdot 2 \cdot (-3) = 1 + 24 = 25 \implies \sqrt{\Delta} = \sqrt{25} = 5$

    $x_{1,2} = \dfrac{1 \pm 5}{2 \cdot 2} = \dfrac{1 \pm 5}{4} \implies x_1 = \dfrac{3}{2} \quad x_2 = -1$

    $2x^2 - x - 3 = 2(x - \dfrac{3}{2})(x - (-1)) = 2(x - \dfrac{3}{2})(x + 1)$

    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-1$|{.w}|$\dfrac{3}{2}$|{.r .w}$\tiny+\;\infty$
    |$2$|$+$||$+$||$+$
    |$x - \dfrac{3}{2}$|$-$||$-$|$0$|$+$
    |$x + 1$|$-$|$0$|$+$||$+$
    |$2(x - \dfrac{3}{2})(x + 1) \leq 0$|$+$|$0$|$-$|$0$|$+$
    ```
    $S = \left [-1; \dfrac{3}{2} \right]$

2.  $-8x < 3 + 5x^2 \implies -5x^2 - 8x - 3 < 0$

    Factorisation:

    $\Delta = (-8)^2 - 4 \cdot (-5) \cdot (-3) = 64 - 60 = 4 \implies \sqrt{\Delta} = \sqrt{4} = 2$

    $x_{1,2} = \dfrac{8 \pm 2}{2 \cdot (-5)} = \dfrac{8 \pm 2}{-10} \implies x_1 = -\dfrac{3}{5} \quad x_2 = -1$

    $-5x^2 - 8x - 3 = -5(x - (-\dfrac{3}{5})(x - (-1)) = -5(x + \dfrac{3}{5})(x + 1)$

    ```{flex-table}
    :class: function-table
    |$x$|{.l .w}$\tiny-\;\infty$|$-1$|{.w}|$-\dfrac{3}{5}$|{.r .w}$\tiny+\;\infty$
    |$-5$|$-$||$-$||$-$
    |$x + \dfrac{3}{5}$|$-$||$-$|$0$|$+$
    |$x + 1$|$-$|$0$|$+$||$+$
    |$-5(x + \dfrac{3}{5})(x + 1)<0$|$-$|$0$|$+$|$0$|$-$
    ```
    $S = ]-\infty; -1[ \cup \left ]-\dfrac{3}{5}; +\infty \right[$


````


