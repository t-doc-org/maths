% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Représentation des données

```{metadata}
subject: "Mathématiques 2e année"
scripts:
  - src: jsxgraph.js
    type: module
```

{.allow-break}
## Introduction

```{admonition} Définition
:class: note
Une **population** est un ensemble fini d'objets appelés **individus** sur
lesquels une étude se porte et dont les éléments répondent à une ou plusieurs
caractéristiques communes.
```

```{admonition} Définition
:class: note
La **taille** ou l'**effectif** d'une population, notée généralement $N$
(majuscule), est le nombre d'éléments de cette population.
```

```{admonition} Définition
:class: note
Un **échantillon** est un sous-ensemble d'une population.
```

```{admonition} Définition
:class: note
Une **variable statistique** est une qualité, un attribut ou une caractéristique
que possède chacun des individus observés.
Une variable statistique se dénote au moyen d'une lettre majuscule, par exemple
$X$, $Y$, etc.

Les différents états ou valeurs que peut prendre une variable statistique sont
appelés les **modalités** ou simplement les valeurs de cette variable.
Les différentes modalités d'une variable statistique sont notées au moyen de la
même lettre que la variable correspondante, mais minuscule, et avec un indice:
$x_1$, $x_2$, $\dots{}$, $x_n$ désignent les $n$ modalités de la variable $X$.
```

### Exemple {num2}`exemple:civil`

Une enquête est effectuée auprès des 40 employés de la compagnie d'assurance
Mondass afin de déterminer leur état civil.

La population correspond aux employés de la compagnie d'assurance Mondass.

La taille ou l'effectif est de $N = 40$.

Il y a 4 modalités: "célibataire", "marié.e", "divorcé.e" et "veuf/veuve".

### Exemple {num2}`exemple:taille`

Une enquête est effectuée auprès de 200 élèves du collège Sainte-Croix pour
déterminer leur taille en centimètres.

La population correspond aux élèves du collège Sainte-Croix.

La taille ou l'effectif est de $N = 200$.

Les modalités sont dans l'intervalle $[140, 210]$


```{admonition} Définition
:class: note
Une variable statistique est **quantitative**, si ses modalités sont des nombres.

Dans le cas contraire, elle est **qualitative**.
```

### Exemple {num2}`exemple`

La variable statistique de l'{numref}`exemple %s<exemple:civil>` est qualitative,
car les modalités sont des noms.

La variable statistique de l'{numref}`exemple %s<exemple:taille>` est
quantitative, car les modalités sont des nombres.

```{admonition} Définition
:class: note
Une variable statistique quantitative est **discrète** ou discontinue si chacune
de ses modalités est une valeur isolée, réduite à un seul nombre.
```

### Exemple {num2}`exemple`

Le nombre d'enfants d'un couple est une variable  quantitative discrète dont
les modalités sont les nombres entiers de $0$ à $30$.

```{admonition} Le saviez-vous?
:class: caution, dropdown
Record historique (le plus grand nombre d'enfants) : Valentina Vassilyeva
(Russie) a donné naissance à 69 enfants en 27 grossesses (16 paires de jumeaux,
  7 triplés et 4 quadruplés) entre 1725 et 1765.
```

```{admonition} Définition
:class: note
Une variable statistique quantitative est **continue**, lorsque l'ensemble ses
modalités est un intervalle de l'ensemble des nombres réels.
```

### Exemple {num2}`exemple`

La température en degrés Celsius du corps humain est une variable statistique
continue dont les modalités sont n'importent quelle valeur réelle dans
l'intervalle [35; 42].

{.allow-break}
## Variables statistiques discrètes ou qualitatives

```{admonition} Définition
:class: note
Soit une variable statistique discrète ou qualitative $X$. L'**effectif** d'une
modalité $x_i$ de $X$ est le nombre d'individus $n_i$ qui ont cette modalité.
```

````{admonition} Définition
:class: note
La **fréquence** d'une modalité $x_i$, notée $f_i$, le rapport de son effectif
$n_i$ avec l'effectif de la population ou de l'échantillon.

```{math}
:class: align-center
f_i = \dfrac{n_i}{N}
```
````

### Exemple {num2}`exemple`

Lors de l'enquête effectuée à l'{numref}`exemple %s<exemple:civil>`, les données
ci-dessous ont été récoltées avec les modalités suivantes: célibataire "C",
marié.e "M", divorcé.e "D" et veuf/veuve "V".

```{math}
:class: align-center
\begin{array} {cccccccc}
\hline
\text{M} & \text{D} & \text{V} & \text{D} & \text{M} & \text{M} & \text{M} & \text{C}\\
\text{M} & \text{V} & \text{C} & \text{M} & \text{D} & \text{C} & \text{V} & \text{M}\\
\text{C} & \text{M} & \text{M} & \text{C} & \text{M} & \text{V} & \text{M} & \text{M}\\
\text{D} & \text{C} & \text{M} & \text{M} & \text{M} & \text{D} & \text{M} & \text{M}\\
\text{M} & \text{M} & \text{C} & \text{M} & \text{C} & \text{C} & \text{D} & \text{C}\\
\hline
\end{array}
```

Le tableau des effectifs $n_i$ et des fréquences $f_i$ est le suivant.

```{math}
:class: align-center
\begin{array} {ccc}
\hline
x_i & n_i & f_i \\
\hline
\text{C}  & 10  & 0.25 \\
\text{M}  & 20  & 0.5 \\
\text{D} &  6  & 0.15 \\
\text{V}  & 4  & 0.1 \\
\hline
\text{Total}    & 40 & 1 \\
\hline
\end{array}
```


````{admonition} Définition
:class: note
Un **diagramme en barres** ou à bâtons est un diagramme dans lequel sont
représentés les effectifs ou les fréquences des modalités.

```{chartjs} template:chart
:style: width: 80%;
type: 'bar',
data: {
  labels: ['célibataire', 'marié.e', 'divorcé.e', 'veuf / veuve'],
  datasets: [{axis: 'y', data: [10, 20, 6, 4]}],
},
options: {
  indexAxis: 'y',
  borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
  scales: {
    y: {beginAtZero: true, title: {display: true, text: 'État civil'}},
    x: {title: {display: true, text: 'Effectif'}},
  },
  plugins: {
    legend: {display: false},
    title: {
      display: true,
      text: "Effectif du personnel de la compagnie d'assurance Mondass en fonction de leur état civil",
    },
  },
},
```
````

````{admonition} Définition
:class: note
Un **diagramme circulaire** ou à secteurs est un diagramme dans lequel sont
représentés les fréquences des modalités d'une variable statistique.

```{chartjs} template:chart
:style: width: 60%;
type: 'pie',
data: {
  labels: ['célibataire', 'marié.e', 'divorcé.e', 'veuf/veuve'],
  datasets: [{data: [10, 20, 6, 4]}],
},
options: {
  aspectRatio: 1.5,
  layout: {padding: 20},
  borderWidth: 1, borderColor: 'black',
  backgroundColor: ['#000F', '#000B', '#0007', '#0003'],
  plugins: {legend: {display: true, position: 'right'}},
},
```
````

```{admonition} Définition
:class: note
La **fréquence cumulée** d'une modalité d'une variable statistique discrète est
la somme des fréquences de cette modalité et des fréquences de toutes les
modalités inférieures. La fréquence cumulée de la modalité $x_i$ est notée $F_i$.
```

### Exemple {num2}`exemple:matu`

Voici les notes obtenues à l'examen écrit de maturité en mathématiques.

```{math}
:class: align-center
\begin{array} {cccccccc}
\hline
3 & 4.5 & 4 & 3.5 & 5 & 6 & 6 & 4 & 4.5 & 5 \\
5 & 4 & 4.5 & 5.5 & 5 & 6 & 5.5 & 4.5 & 2 & 4.5 \\
5.5 & 4 & 4 & 4 & 4.5 & 5.5 & 4 & 5 & 3 & 5 \\
\hline
\end{array}
```

Le tableau des effectifs $n_i$, des fréquences $f_i$  et des fréquences cumulées
$F_i$ est le suivant.

```{math}
:class: align-center
\begin{array} {cccc}
\hline
x_i & n_i & f_i & F_i \\
\hline
2 & 1 & 0.033 & 0.033\\
2.5 & 0 & 0 & 0.033 \\
3 & 2 & 0.067 & 0.1 \\
3.5 & 1 & 0.033 & 0.133 \\
4 & 7 & 0.233 & 0.367 \\
4.5 & 6 & 0.2 & 0.567 \\
5 & 6 & 0.2 & 0.767 \\
5.5 & 4 & 0.133 & 0.9 \\
6 & 3 & 0.1 & 1 \\
\hline
 \text{Total} & 30 & 1 &  \\
\hline
\end{array}
```

````{admonition} Définition
:class: note
Une **fonction de répartition** est une fonction discontinue, en escalier, qui
représente les fréquences cumulées d'une variable statistique discrète.

```{jsxgraph} template:discrete-cumulative-distribution
:style: aspect-ratio: 2 / 1; width: 80%;
board: {defaults: 'print'},
samples: [3, 4.5, 4, 3.5, 5, 6, 6, 4, 4.5, 5, 5, 4, 4.5, 5.5, 5, 6, 5.5, 4.5, 2,
4.5, 5.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5],
```
````

{.allow-break}
## Variables statistiques continues

Pour représenter les données de variables statistiques continues avec un
histogramme, il faut les regrouper en classes.

(notation)=
````{admonition} Définition
:class: note
Une **classe** est un intervalle semi-ouvert de la forme
$\left[b_{i-1} ; b_i \right[$ où $b_{i-1}$ s'appelle la **borne inférieure** de
cette $i$-ème classe et $b_i$ la **borne supérieure**.

La **largeur**, étendue ou amplitude d'une classe est la différence de ses
bornes:
```{math}
:class: align-center
L_i = b_i - b_{i-1}
```

Le **centre** ou milieu d'une classe est la moyenne arithmétique de ses bornes:
```{math}
:class: align-center
c_i = \frac{b_{i-1} + b_i}{2}
```
````

### Exemple {num2}`exemple:masse`

La masse de $140$ étudiants de sexe masculin a été mesurée. Les données sont les
suivantes.

```{math}
:class: align-center
\begin{array} {cccccccccccccc}
\hline
  46 & 49 & 51 & 53 & 55 & 55 & 55 & 57 & 58 & 58 & 58 & 60 & 60 & 60 \\
  60 & 60 & 61 & 61 & 61 & 61 & 61 & 61 & 61 & 61 & 61 & 61 & 61 & 61 \\
  62 & 62 & 62 & 62 & 62 & 63 & 63 & 63 & 63 & 63 & 63 & 64 & 64 & 64 \\
  64 & 64 & 64 & 65 & 65 & 65 & 65 & 65 & 65 & 65 & 65 & 65 & 66 & 66 \\
  66 & 66 & 66 & 66 & 66 & 67 & 67 & 67 & 67 & 67 & 67 & 67 & 67 & 67 \\
  67 & 67 & 67 & 67 & 67 & 67 & 68 & 68 & 68 & 68 & 68 & 68 & 68 & 68 \\
  68 & 68 & 68 & 68 & 68 & 69 & 69 & 69 & 69 & 70 & 70 & 70 & 70 & 70 \\
  70 & 70 & 71 & 71 & 71 & 71 & 72 & 72 & 72 & 72 & 72 & 72 & 72 & 73 \\
  73 & 73 & 73 & 73 & 73 & 73 & 74 & 74 & 75 & 75 & 75 & 76 & 76 & 77 \\
  77 & 78 & 78 & 79 & 79 & 79 & 79 & 81 & 83 & 83 & 85 & 86 & 88 & 89 \\
\hline
\end{array}
```

La masse a été arrondie à l'entier, mais c'est une variable statistique
quantitative continue.

Pour faciliter le stockage et la visualisation de ces données, il est possible
de les regrouper par classe de largeur $L = 5$.


```{math}
:class: align-center
\begin{array} {ccccc}
\hline
x_i & c_i & n_i & f_i & F_i \\
\hline
\left[ 45 ; 50 \right[ & 47.5 & 2  & 0.014 & 0.014 \\
\left[ 50 ; 55 \right[ & 52.5 & 2  & 0.014 & 0.029 \\
\left[ 55 ; 60 \right[ & 57.5 & 7  & 0.050 & 0.079 \\
\left[ 60 ; 65 \right[ & 62.5 & 34 & 0.243 & 0.321 \\
\left[ 65 ; 70 \right[ & 67.5 & 48 & 0.343 & 0.664 \\
\left[ 70 ; 75 \right[ & 72.5 & 27 & 0.193 & 0.857 \\
\left[ 75 ; 80 \right[ & 77.5 & 13 & 0.093 & 0.950 \\
\left[ 80 ; 85 \right[ & 82.5 & 3  & 0.021 & 0.971 \\
\left[ 85 ; 90 \right[ & 87.5 & 4  & 0.029 & 1.000 \\
\hline
 \text{Total} & & 140 & 1 &  \\
\hline
\end{array}
```


````{admonition} Définition
:class: note
Un **histogramme** est un diagramme dans lequel sont représentés les effectifs
ou les fréquences des classes d'une variable statistique continue.

```{chartjs} template:histogram
:style: width: 80%;
bins: {min: 40, max: 95, width: 5},
options: {
  borderWidth: 0.5, borderColor: 'black', backgroundColor: '#0003',
  scales: {
    x: {title: {display: true, text: 'Masse en kilogrammes'}},
    y: {title: {display: true, text: 'Effectif'}},
  },
  plugins: {
    legend: {display: false},
    title: {display: true, text: "Effectifs des étudiants en fonction de leur masse en kilogrammes"},
  },
},
samples: [
  46,49,51,53,55,55,55,57,58,58,58,60,60,60,
  60,60,61,61,61,61,61,61,61,61,61,61,61,61,
  62,62,62,62,62,63,63,63,63,63,63,64,64,64,
  64,64,64,65,65,65,65,65,65,65,65,65,66,66,
  66,66,66,66,66,67,67,67,67,67,67,67,67,67,
  67,67,67,67,67,67,68,68,68,68,68,68,68,68,
  68,68,68,68,68,69,69,69,69,70,70,70,70,70,
  70,70,71,71,71,71,72,72,72,72,72,72,72,73,
  73,73,73,73,73,73,74,74,75,75,75,76,76,77,
  77,78,78,79,79,79,79,81,83,83,85,86,88,89,
],
```
````

