% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions rationnelles, réciproques et composées

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
autorisée.\
Réponse sous forme de fraction simplifiée**
```
---

## Formulaire

```{math}
:class: align-center
a^3+3a^2b+3ab^2+b^3 &= (a+b)^3\\
a^3-3a^2b+3ab^2-b^3 &= (a-b)^3\\
a^3-b^3 &= (a-b)(a^2+ab+b^2)\\
a^3+b^3 &= (a+b)(a^2-ab+b^2)
```

## Question {nump}`question`{points}`10`

Déterminez le domaine de définition, les zéros et l'ordonnée à l'origine de la
fonction suivante, puis établissez le tableau de signes.

$f(x) = \dfrac{x^2 - 7x + 12}{x^3+27}$

````{solution}
$f(x) = \dfrac{x^2 - 7x + 12}{x^3+27} = \dfrac{(x-3)(x-4)}{(x+3)(x^2-3x+9)} = $

Domaine de définition: $D_f = \mathbb{R} \setminus \{-3\}$

Zéros: $x_1 = 3$ et $x_2 = 4$

Ordonnée à l'origine: $f(0) = \dfrac{0^2 - 7 \cdot 0 + 12}{0^3+27} = \dfrac{12}{27} = \dfrac{4}{9}$

```{flex-table}
:class: function-table
|$x$|{.l .w}$\tiny-\;\infty$|$-3$|{.w}|$3$|{.w}|$4$|{.r .w}$\tiny+\;\infty$
|$x-3$|$-$||$-$|$0$|$+$||$+$
|$x-4$|$-$||$-$||$-$|$0$|$+$
|$x+3$|$-$|{.g}$0$|$+$||$+$||$+$
|$x^2-3x+9$|$+$||$+$||$+$||$+$
|$\dfrac{(x-3)(x-4)}{(x+3)(x^2-3x+9)}$|$-$|{.g}|$+$|$0$|$-$|$0$|$+$
```
````

## Question {nump}`question`{points}`5`

Effectuez le calcul suivant et répondez sous forme simplifiée:

$\dfrac{\dfrac{1}{x} + 1}{\dfrac{1}{x}} \cdot \dfrac{\dfrac{1}{x}+x-1}{x^2-x+1}$

```{solution}
$\dfrac{\dfrac{1}{x} + 1}{\dfrac{1}{x}} \cdot \dfrac{\dfrac{1}{x}+x-1}{x^2-x+1}=\dfrac{1+x}{x}$
```

## Question {nump}`question`{points}`5`

Soient les fonctions $f(x) = 3x -4$ et $g(x) = (x + 1)^2$

{.lower-alpha-paren}
1.  Les fonctions suivantes sont-elles bijectives? Justifiez.
2.  Déterminez la fonction réciproque graphiquement et algébriquement en
    restreignant le domaine si nécessaire.
3.  Calculez $f \circ g$ et $g \circ f$.

```{solution}
{.lower-alpha-paren}
1.  $f(x) = 3x -4$ est une droite, elle est donc bijective.
    $g(x) = (x + 1)^2$ est une parabole, elle n'est donc pas bijective.
2.  $f^{-1}(x) = \dfrac{x+4}{3}$
    $g^{-1}(x) = \sqrt{x} - 1$ pour $D_f = ]-1; \infty[$ ou
    $g^{-1}(x) = -\sqrt{x} - 1$ pour $D_f = ]-\infty; -1[$
3.  $(f \circ g)(x) = f(g(x)) = 3(x + 1)^2 - 4 = 3x^2 + 6x -1$
    $(g \circ f)(x) = g(f(x)) = (3x-3)^2 = 9x^2 -18x + 9$
```


