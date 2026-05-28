% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Indicateurs de dispersion
```{metadata}
subject: "Mathématiques 2e année"
```

Références: Cours de David Rueda et Nicolas Martignoni

## Théorie

{.allow-break}
### Définitions

```{admonition} Définition
:class: note
L'**étendue** d'une variable statistique discrète est la différence entre la
plus grande et la plus petite modalité.

L'**étendue** d'une variable statistique continue est la différence entre la
borne supérieure de la dernière classe et la borne inférieure de la première
classe.

```

````{admonition} Définition
:class: note
L'**écart interquartile** d'une variable statistique, noté $EI$, est la
différence entre le troisième et le premier quartiles:
```{math}
:class: align-center
EI = Q_3 - Q_1
```
````

````{admonition} Définition
:class: note
La **variance** d'une variable statistique, notée $V$, est la moyenne du carré des écarts à la moyenne.
```{math}
:class: align-center
V = \frac{\sum_{i=1}^k n_i  (x_i - \mu)^2}{N} = \sum_{i=1}^k f_i (x_i - \mu)^2
```
````

````{admonition} Définition
:class: note
L'**écart type** d'une variable statistique, noté $\sigma$, est la racine carrée
de sa variance $V$.
```{math}
:class: align-center
\sigma = \sqrt{V}
```
````

````{admonition} Théorème
:class: note
```{math}
:class: align-center
V = \sum_{i=1}^k f_ix_i^2 - \mu^2
```
````

````{admonition} Définition
:class: note
La **boîte à moustaches** d'une variable statistique discrète ou continue est un
graphique qui représente l'étendue et les différents quartiles ($Q_0$, ...
$Q_4$).
````

<!-- todo ajouter un exemple -->

