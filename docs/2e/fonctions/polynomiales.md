% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions polynomiales

```{metadata}
subject: "Mathématiques 2e année"
```

## Théorie

```{admonition} Définition
:class: note
Un **monôme** est une expression obtenue par multiplication d'un nombre réel et
de lettres avec exposants naturels (entier et positif). Sous sa forme réduite,
un monôme se compose de deux parties: son **coefficient** et sa **partie
littérale**.
```

````{admonition} Définition
:class: note
Un **polynôme** est un monôme ou une somme de monômes. Les monômes qui composent
le polynôme sont les termes du polynôme. On peut réduire un polynôme en
additionnant les **monômes semblables** (de même partie littérale) qui le
composent.

Un polynôme composé d'une seule lettre, appelée variable, s'écrit sous la forme:

```{math}
:class: align-center
a_n \cdot x^n + a_{n-1} \cdot x^{n-1} + \cdots + a_1x + a_0
```

où les coefficients $a_n$, $a_{n-1}$, $\dots$, $a_1$, $a_0$ sont des nombres réels
avec $a_n \neq 0$ et $n \in \mathbb{N}$.
````

```{admonition} Définition
:class: note
Le **degré** d'un polynôme est le degré de son terme de plus haut degré, appelé
terme dominant. Le coefficient du terme dominant est le **coefficient
dominant**.
```

```{admonition} Définition
:class: note
Une **fonction polynomiale** est une fonction $f$ dont l'expression algébrique
est un polynôme.

Le domaine de définition d'une telle fonction est $D_f = \mathbb{R}$.
```

```{admonition} Théorème
:class: note
Une fonction polynomiale de degré $n$ possède au plus $n$ zéros.
```

```{admonition} Théorème
:class: note
Si le nombre $a$ est un zéro de la fonction polynomiale $f$ de degré $n$, alors
l'expression algébrique $f(x)$ de cette fonction peut s'écrire sous la forme
$f(x) = (x - a) \cdot g(x)$, où $g(x)$ est un polynôme de degré $n-1$.
```

```{admonition} Théorème
:class: note
Soit $f(x)$ un polynôme de coefficient dominant $1$ et dont tous les
coefficients sont des nombres entiers, alors les zéros potentiels entiers de $f$
sont des diviseurs du terme constant de la fonction.
```

````{admonition} Définition
:class: note
Une fonction dont la représentation graphique est symétrique par rapport à l'axe
des $y$ est appelée **fonction paire**.

Les fonctions paires satisfont, pour tout $x \in D_f$, l'égalité

```{math}
:class: align-center
f(-x) = f(x).
```

Une fonction dont la représentation graphique est symétrique par rapport à
l'origine $O$ est appelée **fonction impaire**.

Les fonctions impaires satisfont, pour tout $x \in D_f$, l'égalité

```{math}
:class: align-center
f(-x) = -f(x).
```
````

```{admonition} Théorème
:class: note
Une fonction polynomiale dont tous les exposants sont pairs est paire.

Une fonction polynomiale dont tous les exposants sont impairs est impaire.
```
