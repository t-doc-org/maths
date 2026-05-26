% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Indicateurs de position

```{metadata}
subject: "Mathématiques 2e année"
scripts:
  - src: jsxgraph.js
    type: module
```

Références: Cours de David Rueda et Nicolas Martignoni

## Théorie

{.allow-break}
### Indicateurs de tendance centrale

#### Moyenne arithmétique

````{admonition} Définition
:class: note
La **moyenne arithmétique** d'une variable statistique discrète d'effectif $N$
avec $k$ modalités est définie par

```{math}
:class: align-center
\mu = \dfrac{n_1x_1 + n_2x_2 + \cdots + n_kx_k}{N} = \dfrac{\displaystyle{\sum_{i=1}^k n_i x_i}}{N}
```

Pour une variable statistique continue, la moyenne arithmétique se calcule de
manière identique, en supposant que toutes les données sont situées au centre de
la classe.
````

#### Médiane

````{admonition} Définition
:class: note
La **médiane** d'une variable statistique discrète est la première modalité dont
la fréquence cumulée est plus grande ou égale à $\dfrac{1}{2}$. Elle est notée
$M$.

La **classe médiane** d'une variable statistique continue est la première classe
dont la fréquence cumulée est plus grande ou égale à $\dfrac{1}{2}$.
En utilisant les notations établies au [chapitre précédent](#notation), la
médiane est donnée alors par
```{math}
:class: align-center
M = b_{i-1} + L_i \cdot \frac{1/2 - F_{i-1}}{F_i - F_{i-1}} = b_{i-1} + L_i \cdot \frac{1/2 - F_{i-1}}{f_i}.
```
````

La médiane sépare la population en deux groupes: $50\%$ de la population est au
dessous de la médiane et $50\%$ en dessus.

#### Comparaison des indicateurs de tendance centrale

Moyenne:

- L'indicateur de tendance centrale le plus connu.
- La plus coûteuse à calculer, même si la formule est simple à exprimer.
- Très influencée par les valeurs extrêmes ou aberrantes.
- Peu influencée par le choix des classes.
- Très stable, c'est-à-dire qu'elle varie peu selon l'échantillon choisi de la population.
- L'indicateur de tendance centrale le plus utilisé.

Médiane:

- Issue d'une conception simple de la notion de centre.
- Détermination un peu plus compliquée.
- Peu influencée par les valeurs extrêmes ou aberrantes de la distribution.
- Peu influencée par le choix des classes.
- Assez stable, mais moins que la moyenne arithmétique.
- Moins utilisée que la moyenne.

### Quantiles

```{admonition} Définition
:class: note
Les **quantiles** sont les valeurs qui divisent une variable statistique en
intervalles de mêmes fréquences.

Si $n$ est le nombre de ces intervalles, l'**ordre** du quantile est l'inverse
$\dfrac{1}{n}$ de ce nombre.
```

````{admonition} Marche à suivre
:class: note
Cas discret:

Le $k$-ième quantile d'ordre $p$ est la première modalité dont la fréquence cumulée
est plus grande ou égale à $k \cdot p$.

Cas continue:

-   Trouvez la classe qui contient le quantile. La classe
    $\left[b_{i-1} ; b_i \right[$ contenant le $k$-ième quantile d'ordre $p$ est
    la première classe dont la fréquence cumulée est plus grande ou égale à
    $k \cdot p$.
-   Calculez $X_{kp}$:<br>
    ```{math}
    :class: align-center
    X_{kp} = b_{i-1} + L_i \cdot \frac{kp - F_{i-1}}{F_i - F_{i-1}} = b_{i-1} + L_i \cdot \frac{kp - F_{i-1}}{f_i}.
    ```
````



## Exercices

### Exercice {nump}`exercice`

{.lower-alpha-paren}
1.  Une entreprise composée de 15 employés paye les salaires suivants:
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    - $4\,500$ CHF
    - $1\,000$ CHF
    - $5\,500$ CHF
    - $6\,000$ CHF
    - $4\,500$ CHF
    - $10\,000$ CHF
    - $1\,000$ CHF
    - $6\,000$ CHF
    - $8\,500$ CHF
    - $10\,000$ CHF
    - $5\,500$ CHF
    - $4\,500$ CHF
    - $5\,500$ CHF
    - $7\,500$ CHF
    - $8\,500$ CHF
    ```
2.  Une autre entreprise composée de 15 employés paye les salaires suivants:
    ```{list-grid}
    :style: grid-template-columns: 1fr 1fr 1fr 1fr;
    - $4\,500$ CHF
    - $1\,000$ CHF
    - $5\,500$ CHF
    - $6\,000$ CHF
    - $4\,500$ CHF
    - $10\,000$ CHF
    - $1\,000$ CHF
    - $6\,000$ CHF
    - $8\,500$ CHF
    - $10\,000$ CHF
    - $5\,500$ CHF
    - $80\,000$ CHF
    - $4\,500$ CHF
    - $5\,500$ CHF
    - $7\,500$ CHF
    - $8\,500$ CHF
    ```


Calculez la moyenne et la médiane de ces deux variables statistiques.<br>
Que constatez-vous?

```{block} solution
{.lower-alpha-paren}
1.  $\mu = 5\,900$ et $M = $5\,500$
2.  $\mu = 10\,531.25$ et $M = $5\,750$

La moyenne est très sensible à la valeur extrême ($80\,000$).
```

### Exercice {nump}`exercice`

Déterminez la moyenne et la médiane de la variable statistique suivante.

```{math}
:class: align-center
\begin{array} {ccccccccc}
\hline
\text{Modalité} & 2 & 4 & 6 & 8 & 10 & 12 & 14 & 16 \\
\text{Effectif} & 11 & 9 & 2 & 2 & 3 & 5 & 0 & 1 \\
\hline
\end{array}
```

```{block} solution
$\mu = 5.82$ et $M = 4$
```

### Exercice {nump}`exercice`

Pour chaque élève inscrit dans une école, le nombre de lettres de leur prénom a
été déterminé. Les résultats varient entre 3 lettres (Ana, Zoé, Luc,…) et 13
lettres (Paul-Alexandre et Marcia-Andreia).

```{math}
:class: align-center
\begin{array} {cccccccccccc}
\hline
\text{Nombre de letttres} &  3 &  4 &   5 &   6 &   7 &   8 &  9 & 10 & 11 & 12 & 13 \\
\text{Effectif} & 10 & 52 & 155 & 198 & 156 & 102 & 45 & 17 &  7 &  2 &  2 \\
\hline
\end{array}
```

Déterminez la moyenne et la médiane de cette variable statistique.

```{block} solution
$\mu = 6.449$ et $M = 6$
```

### Exercice {nump}`exercice`

Sur un parking, le pays d'origine de la marque de chaque voiture a été
répertorié.

```{math}
:class: align-center
\begin{array} {ccccccc}
\hline
\text{Pays} & \text{FR} & \text{IT} & \text{JA} & \text{KR} & \text{DE} &
            \text{US} & \text{Autres} \\
\text{Effectif} & 11 &  4 & 14 &  7 & 20 & 5 & 6 \\
\hline
\end{array}
```
Déterminez la moyenne et la médiane de cette variable statistique.

```{block} solution
La moyenne et la médiane n'existent pas dans cette situation.
```

### Exercice {nump}`exercice:notes`

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
Pour chacune de ces variables statistiques,

{.lower-alpha-paren}
1.  Construisez le tableau de distribution des fréquences cumulées.
2.  Calculez la moyenne et la médiane.
3.  Représentez les fréquences au moyen d'un diagramme.
4.  Construisez la représentation graphique des fréquences cumulées.

````{block} solution
Classe 1:

{.lower-alpha-paren}
1.  $ $
    ```{math}
    \begin{array} {ccccccc}
    \hline
    x_i & 2.5 & 3 & 3.5 & 4 & 4.5 & 5 & 5.5 & 6 \\
    F_i & 0.179 & 0.393 & 0.536 & 0.571 & 0.607 & 0.714 & 0.821 & 1 \\
    \hline
    \end{array}
    ```
2.  $\mu = 4.089$ et $M = 3.5$
3.  $ $
    ```{chartjs} template:chart
    :style: width: 70%;
    type: 'bar',
    data: {
      labels: ['2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'],
      datasets: [{data: [5, 6, 4, 1, 1, 3, 3, 5]}],
    },
    options: {
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {
        y: {beginAtZero: true, title: {display: true, text: 'Effectif'}},
        x: {title: {display: true, text: 'Note'}},
      },
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Notes obtenues"},
      },
    },
    ```
4.  $ $
    ```{jsxgraph} template:discrete-cumulative-distribution
    :style: aspect-ratio: 2 / 1; width: 70%;
    board: {defaults: 'print'},
    samples: [2.5, 2.5, 2.5, 2.5, 2.5, 3, 3, 3, 3, 3, 3, 3.5, 3.5, 3.5, 3.5, 4,
    4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 6, 6],
    ```

Classe 2:

{.lower-alpha-paren}
1.  $ $
    ```{math}
    \begin{array} {ccccccc}
    \hline
    x_i & 2.5 & 3 & 3.5 & 4 & 4.5 & 5 & 5.5 & 6 \\
    F_i & 0.179 & 0.321 & 0.464 & 0.571 & 0.714 & 0.786 & 0.786 & 1 \\
    \hline
    \end{array}
    ```
2.  $\mu = 4.089$ et $M = 4$
3.  $ $
    ```{chartjs} template:chart
    :style: width: 70%;
    type: 'bar',
    data: {
      labels: ['2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'],
      datasets: [{data: [5, 4, 4, 3, 4, 2, 0, 6]}],
    },
    options: {
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {
        y: {beginAtZero: true, title: {display: true, text: 'Effectif'}},
        x: {title: {display: true, text: 'Note'}},
      },
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Notes obtenues"},
      },
    },
4.  $ $
    ```{jsxgraph} template:discrete-cumulative-distribution
    :style: aspect-ratio: 2 / 1; width: 70%;
    board: {defaults: 'print'},
    samples: [6, 6, 6, 6, 6, 6, 5, 5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4, 3.5, 3.5,
    3.5, 3.5, 3, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2.5],
    ```
````

### Exercice {nump}`exercice:course`

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
Calculez les indicateurs de tendance centrale de cette série statistique avec
des classes de largeur

{.lower-alpha-paren}
1. en utilisant les données brutes
2. en utilisant des classes de largeur $L = 15$
3. en utilisant des classes de largeur $L = 30$

Que constatez-vous?

```{block} solution
{.lower-alpha-paren}
1.  $\mu = 214.45$ et $M = 215$
2.  $\mu = 218.28$ et $M = 213.21$
3.  $\mu = 219.31$ et $M = 215.63$

En utilisant des classes, il y a une perte de précision. Par contre, cela permet
de stocker les données de manière compacte.
```

### Exercice {nump}`exercice`

En 2007 en Suisse, la taille moyenne des hommes était de $175.4$ cm et celle des
femmes de $164.0$ cm. En sachant que la population suisse, à cette date, était
de $7\,589\,141$ habitants et que la taille moyenne d'un habitant suisse (femmes
et hommes mélangés) était de $169.6$ cm, déterminez le nombre des femmes qu'il y
avait de plus que d'hommes à cette époque.

```{block} solution
Il y avait $133\,143$ femmes de plus que d'hommes.
```

### Exercice {nump}`exercice`

Depuis 1919, le coureur qui mène le Tour de France cycliste au temps porte un
maillot distinctif jaune. Le nombre de porteurs différents sur une édition d'un
Tour de France varie entre $1$ (1924, 1928, 1935, 1999 et 2005) et $8$ coureurs
différents (1958 et 1987). Le Tour ne s'est pas disputé entre 1940 et 1946.
Déterminez $C_{57}$, $D_3$, $Q_3$, ainsi que la moyenne et la médiane de la
distribution ci-dessous.

```{math}
:class: align-center
\begin{array} {cccccccc}
\hline
\text{Porteurs} & 1 & 2 &  3 &  4 &  5 &  6 & 7 & 8 \\
\text{Éditions} & 5 & 9 & 20 & 23 & 17 & 13 & 8 & 2 \\
\hline
\end{array}
```

````{block} solution
Il s'agit d'une variable discrète.
```{math}
\begin{array} {ccccc}
\hline
x_i & n_i & f_i & F_i \\
\hline
1 &  5 & 0.052 & 0.052 \\
2 &  9 & 0.093 & 0.144 \\
3 & 20 & 0.206 & 0.351 \\
4 & 23 & 0.237 & 0.588 \\
5 & 17 & 0.175 & 0.763 \\
6 & 13 & 0.134 & 0.897 \\
7 &  8 & 0.082 & 0.979 \\
8 &  2 & 0.021 & 1.000 \\
\hline
\text{Total} & 97 & 1 & \\
\hline
\end{array}
```
$C_{57} = 4$; $D_3 = 3$; $Q_3 = 5$; $\mu = 4.23$; $M = 4$.
````

### Exercice {nump}`exercice`

Voici le nombre $\pi$ avec ses 59 premières décimales:
```{math}
\pi = 3.1415926535\,8979323846\,2643383279\,5028841971\,6939937510\,582097494
```
Après avoir construit le tableau complet de la distribution,
déterminez $C_{77}$, $D_2$ et $Q_2$ ainsi que les indicateurs de tendance
centrale.

````{block} solution
Il s'agit d'une variable discrète.
```{math}
\begin{array} {ccccc}
\hline
x_i & n_i & f_i & F_i \\
\hline
0 &  3 & 0.050 & 0.050 \\
1 &  5 & 0.083 & 0.133 \\
2 &  6 & 0.100 & 0.233 \\
3 &  9 & 0.150 & 0.383 \\
4 &  6 & 0.100 & 0.483 \\
5 &  6 & 0.100 & 0.583 \\
6 &  4 & 0.067 & 0.650 \\
7 &  5 & 0.083 & 0.733 \\
8 &  6 & 0.100 & 0.833 \\
9 & 10 & 0.167 & 1.000 \\
\hline
\text{Total} & 60 & 1 \\
\hline
\end{array}
```
$C_{77} = 8$; $D_2 = 2$; $Q_2 = M = 5$; $\mu = 4.917$.
````

## Solutions

```{blocks} solution
:class: allow-break
```
