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

### Exercice {nump}`exercice`

Après une évaluation où la moyenne de classe était mauvaise, bien qu'un élève
ait obtenu la note de $5.5$, un professeur décide d'ajouter un demi-point à la
note de chaque élève. Déterminez l'influence de cette opération sur

{.lower-alpha-paren .columns-3}
1. la médiane
2. la moyenne
3. l'étendue
4. l'écart interquartile
5. la variance
6. l'écart type

```{block} solution
{.lower-alpha-paren .columns-2}
1. La médiane augmente de $0.5$.
2. La moyenne augmente de $0.5$.
3. L'étendue reste inchangée.
4. L'écart interquartile reste inchangé.
5. La variance reste inchangée.
6. L'écart type reste inchangé.
```

### Exercice {nump}`exercice`

{.lower-alpha-paren}
1.  Une série de données A représente l'âge d'une famille de cinq personnes
    (2 parents et 3 enfants) et une série B l'âge des étudiants d'une classe du
    Collège Sainte-Croix. Laquelle de ces deux séries a le plus grand écart
    type?
2.  Un professeur fait passer la même évaluation dans deux de ses classes. Il
    obtient la même moyenne, mais l'écart type de la classe A est nettement plus
    grand que celui de la classe B. Laquelle de ces deux classes est la plus
    homogène?
3.  Entre le 1<sup>er</sup> février 2022 et le 17 mars de la même année, on a
    enregistré les précipitations quotidiennes d'une localité. La moyenne est
    égale à $0$ mm. Que vaut l'écart type?
4.  Au même endroit, on a enregistré les températures moyennes quotidiennes sur
    les 60 premiers jours de l'année 2022. La moyenne des températures moyennes
    est égale à $0\,\celsius$. Que vaut l'écart type?
5.  L'âge moyen des joueurs de football présents à la Coupe du monde 1998 était
    de 27 ans et 8 mois et l'écart type était de 4 ans et 1 mois.
    Quel était l'âge moyen et l'écart type de ces mêmes joueurs en 2010, en
    imaginant qu'aucun d'entre eux ne soit décédé.


```{block} solution
{.lower-alpha-paren}
1.  La série A, car les âges sont certainement plus dispersés par rapport à la
    moyenne.
2.  La classe B, car les données sont plus proches de la moyenne.
3.  L'écart type vaut $0$ mm, car les modalités ne peuvent pas être négatives.
4.  On ne peut rien dire de l'écart type, si ce n'est qu'il est positif ou nul
    si la température moyenne était chaque jour de $0\,\celsius$; en effet les
    modalités peuvent ici être négatives.
5.  L'âge moyen a augmenté de 12 ans (39 ans et 8 mois) alors que l'écart type
    n'a pas changé (4 ans et 1 mois).
```

### Exercice {nump}`exercice`

L'illustration ci-dessous présente les boîtes à moustaches des salaires payés
dans une université.

```{figure} images/moustaches-uni.png
:width: 80%
```
{.lower-alpha-paren}
1. Que vaut le salaire minimal en statistiques?
2. Que vaut le premier quartile en physique?
3. Que vaut le salaire médian en droit?
4. Que vaut le troisième quartile en chimie?
5. Que vaut le salaire maximal en droit?
6. Que vaut le salaire aberrant en histoire?
7. Combien y a-t-il de salariés en histoire?
8. Combien y a-t-il de salariés gagnant moins de $74\,000$ en anglais?
9. Combien y a-t-il de salariés gagnant plus de $72\,000$ en mathématiques?
10. Combien y a-t-il de salariés gagnant moins de $30\,000$ en statistiques?

```{block} solution
{.lower-alpha-paren .columns-5}
1. $30\,000$
2. $46\,000$
3. $55\,000$
4. $93\,500$
5. $300\,000$
6. $170\,000$
7. $51$
8. $78$
9. $49$
10. $0$
```

### Exercice {nump}`exercice`

À l'aide d'un compteur Geiger, le nombre de désintégrations radioactives d'un
échantillon de $^{226}\text{Ra}$ est mesuré durant une minute. L'expérience est
répétée 30 fois. Les résultats sont donnés ci-dessous, triés par ordre croissant.

```{math}
:class: align-center
\begin{array} {cccccccccc}
\hline
275 & 283 & 284 & 284 & 286 & 287 & 287 & 289 & 292 & 292 \\
293 & 295 & 296 & 298 & 303 & 303 & 304 & 305 & 309 & 309 \\
310 & 310 & 313 & 313 & 314 & 315 & 320 & 324 & 329 & 329 \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  Calculez la médiane, le premier quartile, le troisième quartile, le premier
    décile et le neuvième décile de cette distribution.
2.  Déterminez sa variance et son écart type.
3.  Dessinez la boîte à moustache correspondante.

```{block} solution
{.lower-alpha-paren}
1. $M = Q_2 = 303$; $Q_1 = 289$; $Q_3 = 313$; $D_1 = 284$; $D_9 = 320$.
2. $V = 201.81$; $\sigma = 14.206$.
3.  $ $
    ```{figure} images/sol-moustaches-desintegration.png
    :width: 60%
    ```
```


## Solutions

```{blocks} solution
:class: allow-break
```
