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

## Exercices

### Exercice {nump}`exercice`

Lors de la Coupe du Monde de football 2022, le nombre buts marqués lors de
chaque rencontre a été répertorié.

```{math}
:class: align-center
\begin{array} {ccccccccc}
\hline
\text{Buts}   & 0 &  1 &  2 &  3 & 4 & 5 & 6 & 7 & 8 \\
\text{Matchs} & 7 & 10 & 17 & 14 & 4 & 6 & 3 & 2 & 1 \\
\hline
\end{array}
```

Déterminez l'étendue, l'écart interquartile, la variance et l'écart type de
cette variable statistique.


```{block} solution
Étendue = $8$; $EI = 2$; $\mu = 2.685$, $V = 3.53$; $\sigma = 1.88$
```

### Exercice {nump}`exercice`

Reprenez l'{numref}`exercice %s<exercice:notes>` du chapitre "Indicateurs de
position".

Voici les notes obtenues à une évaluation par une classe durant l'année 2021-2022.

```{math}
:class: align-center
\begin{array} {ccccccc}
\hline
2.5 & 2.5 & 2.5 & 2.5 & 2.5 & 3 & 3 \\
3 & 3 & 3 & 3 & 3.5 & 3.5 & 3.5 \\
3.5 & 4 & 4.5 & 5 & 5 & 5 & 5.5 \\
5.5 & 5.5 & 6 & 6 & 6 & 6 & 6 \\
\hline
\end{array}
```
La même année, une autre classe a obtenu les notes suivantes à une évaluation de
difficulté comparable.

```{math}
:class: align-center
\begin{array} {ccccccc}
\hline
6 & 6 & 6 & 6 & 6 & 6 & 5 \\
5 & 4.5 & 4.5 & 4.5 & 4.5 & 4 & 4 \\
4 & 3.5 & 3.5 & 3.5 & 3.5 & 3 & 3 \\
3 & 3 & 2.5 & 2.5 & 2.5 & 2.5 & 2.5 \\
\hline
\end{array}
```
{.lower-alpha-paren}

1.  Déterminez l'étendue, l'écart interquartile, la variance et l'écart type de
    ces deux variables statistiques.
2.  Dessinez la boîte à moustache de ces deux variables statistiques.

```{block} solution
{.lower-alpha-paren}
1.  Classe 1: étendue = $3.5$; $EI = 2.5$; $\mu = 4.09$, $V = 1.72$; $\sigma = 1.31$<br>
    Classe 2: étendue = $3.5$; $EI = 2$; $\mu = 4.09$, $V = 1.54$; $\sigma = 1.24$
2.  Sans solution <!-- Ajouter la solution -->
```

### Exercice {nump}`exercice`

Reprenez l'{numref}`exercice %s<exercice:course>` du chapitre "Indicateurs de
position".

Lors d'une journée sportive, des élèves ont participé à une course de
$800$ m, dont voici les résultats, en secondes.

```{math}
:class: align-center
\begin{array} {ccccccccccccccc}
\hline
152 & 153 & 175 & 175 & 175 & 180 & 185 & 185 & 188 & 188 & 190 & 190 & 190 &
191 & 194 \\
194 & 195 & 197 & 199 & 200 & 200 & 200 & 200 & 208 & 208 & 208 & 210 & 215 &
215 & 215 \\
215 & 217 & 217 & 217 & 218 & 218 & 218 & 220 & 220 & 222 & 228 & 235 & 245 &
245 & 245 \\
252 & 253 & 260 & 260 & 260 & 261 & 265 & 265 & 268 & 278 & 292 & 292 & 292 \\
\hline
\end{array}
```

Déterminez l'étendue, l'écart interquartile, la variance et l'écart type de
cette variable statistique.

```{block} solution
À corriger pour l'échantillon complet.
Étendue = $140$; $EI = 51.55$; $\mu = 218.28$, $EM = 26.42$; $V = 1120.52$;
$\sigma = 33.47$
```
