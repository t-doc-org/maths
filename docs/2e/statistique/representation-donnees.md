% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Représentation des données

```{metadata}
subject: "Mathématiques 2e année"
```

{.allow-break-inside}
## Introduction

```{admonition} Définition
:class: note
Une **population** est un ensemble fini d'objets appelés **individus** sur
lesquels une étude se porte et dont les éléments répondent à une ou plusieurs
caractéristiques communes.

Un **échantillon** est un sous-ensemble d'une population.
```

```{admonition} Définition
:class: note
La **taille** ou l'**effectif** d'une population, notée généralement $N$
(majuscule), est le nombre d'éléments de cette population.
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

```{container} frame noprint
# Exemple {num2}`exemple:civil`

Une enquête est effectuée auprès des 40 employés de la compagnie d'assurance
Mondass afin de déterminer leur état civil.

La population correspond aux employés de la compagnie d'assurance Mondass.

La taille ou l'effectif est $N = 40$.

Il y a 4 modalités: "célibataire", "marié.e", "divorcé.e" et "veuf/veuve".
```

```{container} frame noprint
# Exemple {num2}`exemple:taille`

Une enquête est effectuée auprès de 200 élèves du collège Sainte-Croix pour
déterminer leur taille en centimètres.

La population correspond aux élèves du collège Sainte-Croix.

La taille ou l'effectif est $N = 200$.

Les modalités sont dans l'intervalle $[140, 210]$.
```

```{admonition} Définition
:class: note
Une variable statistique est **quantitative**, si ses modalités sont des
nombres.

Dans le cas contraire, elle est **qualitative**.
```

```{container} frame noprint
# Exemple {num2}`exemple`

La variable statistique de l'{numref}`exemple %s<exemple:civil>` est
qualitative, car les modalités sont des noms.

La variable statistique de l'{numref}`exemple %s<exemple:taille>` est
quantitative, car les modalités sont des nombres.
```

```{admonition} Définition
:class: note
Une variable statistique quantitative est **discrète** ou discontinue si chacune
de ses modalités est une valeur isolée, réduite à un seul nombre.
```

````{container} frame noprint
# Exemple {num2}`exemple`

Le nombre d'enfants d'un couple est une variable  quantitative discrète dont
les modalités sont les nombres entiers de $0$ à $30$.

```{admonition} Le saviez-vous?
:class: caution, dropdown
Record historique (le plus grand nombre d'enfants) : Valentina Vassilyeva
(Russie) a donné naissance à 69 enfants en 27 grossesses (16 paires de jumeaux,
  7 triplés et 4 quadruplés) entre 1725 et 1765.
```
````

```{admonition} Définition
:class: note
Une variable statistique quantitative est **continue**, lorsque l'ensemble ses
modalités est un intervalle de l'ensemble des nombres réels.
```

```{container} frame noprint
# Exemple {num2}`exemple`

La température en degrés Celsius du corps humain est une variable statistique
continue dont les modalités sont n'importent quelle valeur réelle dans
l'intervalle [35; 42].
```

{.allow-break-inside}
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

````{container} frame noprint
# Exemple {num2}`exemple`

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
````

````{admonition} Définition
:class: note
Un **diagramme en barres** ou à bâtons est un diagramme dans lequel sont
représentés les effectifs ou les fréquences des modalités.

```{chartjs} template:chart
:style: width: 60%;
type: 'bar',
data: {
  labels: ["célibataire", "marié.e", "divorcé.e", "veuf / veuve"],
  datasets: [{axis: 'y', data: [10, 20, 6, 4]}],
},
options: {
  indexAxis: 'y',
  borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
  scales: {
    x: {title: {display: true, text: "Effectif"}},
    y: {beginAtZero: true, title: {display: true, text: "État civil"}},
  },
  plugins: {
    legend: {display: false},
    title: {
      display: true,
      text: "Répartition du personnel en fonction de leur état civil",
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
:style: width: 50%; aspect-ratio: 3 / 2;
type: 'pie',
data: {
  labels: ["célibataire", "marié.e", "divorcé.e", "veuf/veuve"],
  datasets: [{data: [10, 20, 6, 4]}],
},
options: {
  layout: {padding: 20},
  borderWidth: 1, borderColor: 'black',
  backgroundColor: ['#000F', '#0009', '#0005', '#0002'],
  plugins: {
    legend: {display: true, position: 'right'},
    title: {
      display: true,
      text: "Répartition du personnel en fonction de leur état civil",
    },
  },
},
```
````

```{admonition} Définition
:class: note
La **fréquence cumulée** d'une modalité d'une variable statistique discrète est
la somme des fréquences de cette modalité et des fréquences de toutes les
modalités inférieures. La fréquence cumulée de la modalité $x_i$ est notée
$F_i$.
```

````{container} frame noprint
# Exemple {num2}`exemple:matu`

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
````

````{admonition} Définition
:class: note
Une **fonction de répartition** est une fonction discontinue, en escalier, qui
représente les fréquences cumulées d'une variable statistique discrète.

```{chartjs} template:cumulative-distribution-function
:style: width: 80%;
sample: [
  3, 4.5, 4, 3.5, 5, 6, 6, 4, 4.5, 5, 5, 4, 4.5, 5.5, 5, 6, 5.5, 4.5, 2, 4.5,
  5.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5,
],
options: {
  borderColor: 'black',
  scales: {
    x: {title: {display: true, text: "Note"}},
    y: {title: {display: true, text: "Fréquence cumulée"}},
  },
  plugins: {
    legend: {display: false},
    title: {
      display: true,
      text: "Fréquences cumulées des notes des élèves",
    },
  },
},
```
````

{.allow-break-inside}
## Variables statistiques continues

Pour représenter les données de variables statistiques continues avec un
histogramme, il faut les regrouper en classes.

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

````{container} frame noprint
## Exemple {num2}`exemple:masse`

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
````

````{admonition} Définition
:class: note
Un **histogramme** est un diagramme dans lequel sont représentés les effectifs
ou les fréquences des classes d'une variable statistique continue.

```{chartjs} template:histogram
:style: width: 80%;
uniform: {min: 40, max: 95, width: 5},
options: {
  borderWidth: 0.5, borderColor: 'black', backgroundColor: '#0003',
  scales: {
    x: {title: {display: true, text: "Masse en kilogrammes"}},
    y: {title: {display: true, text: "Effectif"}},
  },
  plugins: {
    legend: {display: false},
    title: {
      display: true, text: "Répartition des étudiants en fonction de leur masse en kilogrammes",
    },
  },
},
sample: [
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

## Exercices

### Exercice {num2}`exercice:transports`

Dans un sondage réalisé auprès de 200 élèves du Collège Sainte-Croix âgés de
moins de 18 ans, on a demandé avec quel moyen de transport ils parcouraient le
plus de kilomètres pour venir au Collège. 72 ont répondu le train, 45 le bus,
15 la voiture, 31 un 2 roues à moteur, 21 le vélo et 16 aucun (à pied).

{.lower-alpha-paren}
1.  Déterminez la population.
2.  Déterminez la variable statistique.
3.  Déterminez l'ensemble des modalités de cette dernière.
4.  Cette variable statistique est-elle qualitative, discrète ou continue?

```{block} solution
{.lower-alpha-paren}
1.  200 élèves du Collège Sainte-Croix âgés de moins de 18 ans
2.  Le moyen de transport avec lequel l'élève parcourt le plus de kilomètres
3.  $\{ \text{train}, \text{bus}, \text{voiture}, \text{2 roues à moteur}, \text{vélo}, \text{aucun} \}$
4.  Qualitative
```

### Exercice {num2}`exercice:sang`

Dans l'entreprise ABO, on a demandé aux employés leur groupe sanguin.
Le tableau ci-dessous présente les données récoltées.

```{math}
:class: align-center
\begin{array} {ccccccccccccccc}
\hline
\text{A} & \text{A} & \text{AB} & \text{A} & \text{O} & \text{O} & \text{O} & \text{A} & \text{B} & \text{AB} & \text{A} & \text{O} & \text{O} & \text{O} & \text{A} \\
\text{A} & \text{A} & \text{A} & \text{O} & \text{B} & \text{B} & \text{AB} & \text{A} & \text{B} & \text{A} & \text{A} & \text{O} & \text{O} & \text{A} & \text{O} \\
\text{B} & \text{A} & \text{A} & \text{A} & \text{O} & \text{O} & \text{O} & \text{O} & \text{O} & \text{O} & \text{A} & \text{AB} & \text{A} & \text{O} & \text{B} \\
\text{A} & \text{A} & \text{O} & \text{A} & \text{O} & \text{B} & \text{AB} & \text{A} & \text{O} & \text{A} & \text{A} & \text{O} & \text{O} & \text{AB} & \text{B} \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  Déterminez la population.
2.  Déterminez la variable statistique.
3.  Déterminez l'ensemble des modalités de cette dernière.
4.  Cette variable statistique est-elle qualitative, discrète ou continue?

```{block} solution
{.lower-alpha-paren .columns-2}
1.  Les 60 employés de l'entreprise ABO
2.  Leur groupe sanguin
3.  $\{ \text{A} ; \text{B} ; \text{AB} ; \text{O} \}$
4.  Qualitative
```

### Exercice {num2}`exercice`

Soit un échantillon de $n$ oeufs.<br>
Pour chacune des situations suivantes, dire s'il s'agit d'une variable
statistique qualitative, discrète ou continue.

{.lower-alpha-paren}
1.  La masse de chaque oeuf est mesurée, arrondie au gramme.
2.  Les oeufs sont classés en trois catégories: les grands, les moyens et les petits.
3.  Les oeufs sont classés en trois catégories:
    - ceux dont la masse est inférieure à $53$ g;
    - parmi les restants, ceux dont la masse est inférieure à $63$ g;
    - les autres.
4.  Les oeufs sont classés en trois catégories:
    - classe C = ceux dont la masse appartient à l'intervalle $\left[ 33 \text{ g}; 53\text{ g} \right[$;
    - classe B = ceux dont la masse appartient à l'intervalle $\left[ 53\text{ g}; 63\text{ g} \right[$;
    - classe A = ceux dont la masse appartient à l'intervalle $\left[ 63\text{ g}; 83\text{ g} \right[$.

```{block} solution
{.lower-alpha-paren .columns-4}
1.  Discrète
2.  Qualitative
3.  Continue
4.  Continue
```

### Exercice {num2}`exercice`

Soit l'ensemble de toutes les personnes qui ont obtenu la maturité au Collège
Sainte-Croix.<br>
Pour chacune des situations suivantes, dire s'il s'agit d'une variable
statistique qualitative, discrète ou continue.

{.lower-alpha-paren}
1.  L'année de naissance de chaque élève qui a obtenu la maturité est analysée.
2.  L'âge auquel chaque élève a obtenu la maturité est analysé.
3.  L'année où chaque élève a obtenu la maturité est analysé.
4.  La mention obtenue par chaque élève à sa maturité est analysé.
5.  La note moyenne obtenue par chaque élève à sa maturité est analysée.
6.  La note moyenne obtenue par chaque élève à sa maturité est analysée. Elles
    sont groupées par intervalle: $\left[4;4.5 \right[$, $\left[4.5;5 \right[$, $\left[5;5.5 \right[$ et $\left[5.5;6 \right[$.

```{block} solution
{.lower-alpha-paren .columns-4}
1.  Discrète
2.  Continue
3.  Discrète
4.  Qualitative
5.  Discrète
6.  Continue
```

### Exercice {num2}`exercice`

Reprenez la donnée de l'{numref}`exercice %s<exercice:transports>`.

{.lower-alpha-paren}
1.  Calculez la fréquence de chaque modalité et établissez de tableau des
    fréquences.
2.  Représentez les effectifs dans un diagramme à barres.
3.  Construisez un diagramme circulaire de la situation.

````{block} solution
{.lower-alpha-paren}
1.  ```{math}
    \begin{array} {cccc}
    \hline
    x_i & n_i & f_i & \varphi \\
    \hline
    \text{Train}    & 72  & 0.36  & 129.6^\circ \\
    \text{Bus}      & 45  & 0.225 & 81^\circ \\
    \text{Voiture}  & 15  & 0.075 & 27^\circ \\
    \text{2 roues}  & 31  & 0.155 & 55.8^\circ \\
    \text{Vélo}     & 21  & 0.105 & 37.8^\circ \\
    \text{Aucun}    & 16  & 0.08  & 28.8^\circ \\
    \hline
    \text{Total}    & 200 & 1 & 360^\circ\\
    \hline
    \end{array}
    ```
2.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 70%;
    type: 'bar',
    data: {
      labels: ["Aucun", "Vélo", "2 roues", "Voiture", "Bus", "Train"],
      datasets: [{axis: 'y', data: [16, 21, 31, 15, 45, 72]}],
    },
    options: {
      indexAxis: 'y',
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {
        x: {title: {display: true, text: "Effectif"}},
        y: {
          beginAtZero: true, title: {display: true, text: "Moyen de transport"},
        },
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true,
          text: "Répartition des élèves en fonction de leur moyen de transport",
        },
      },
    },
    ```
3.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 50%; aspect-ratio: 3 / 2;
    type: 'pie',
    data: {
      labels: ["Train", "Bus", "2 roues", "Vélo", "Aucun", "Voiture"],
      datasets: [{data: [72, 45, 31, 21, 16, 15]}],
    },
    options: {
      layout: {padding: 20},
      borderWidth: 1, borderColor: 'black',
      backgroundColor: ['#000D', '#000B', '#0009','#0007', '#0005', '#0003'],
      plugins: {
        legend: {display: true, position: 'right'},
        title: {
          display: true,
          text: "Répartition des élèves en fonction de leur moyen de transport",
        },
      },
    },
    ```
````

### Exercice {num2}`exercice`

Reprenez la donnée de l'{numref}`exercice %s<exercice:sang>`.

{.lower-alpha-paren}
1. Calculez l'effectif de chaque modalité et établissez le tableau des fréquences.
2. Représentez les effectifs dans un diagramme à barres.

````{block} solution
{.lower-alpha-paren}
1.  ```{math}
    \begin{array} {ccc}
    \hline
    x_i & n_i & f_i \\
    \hline
    \text{A}  & 24  & 0.40   \\
    \text{B}  &  8  & 0.133  \\
    \text{AB} &  6  & 0.1    \\
    \text{O}  & 22  & 0.367 \\
    \hline
    \text{Total}    & 60 & 1 \\
    \hline
    \end{array}
    ```
2.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 60%;
    type: 'bar',
    data: {
      labels: ["O", "AB", "B", "A"],
      datasets: [{axis: 'y', data: [24, 8, 6, 22]}],
    },
    options: {
      indexAxis: 'y',
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {
        x: {title: {display: true, text: "Effectif"}},
        y: {
          beginAtZero: true, title: {display: true, text: "Groupe sanguin"},
        },
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true, text: "Répartition en fonction de leur groupe sanguin",
        },
      },
    },
    ```
````

### Exercice {num2}`exercice`

Voici les notes de la dernière évaluation de mathématiques de la classe 3F8 de
Sainte-Croix en 2021-2022.

```{math}
:class: align-center
\begin{array} {cccccccccc}
\hline
3 & 3.5 & 4 & 3 & 5 & 6 & 6 & 4 & 4.5 & 5 \\
5 & 3 & 2.5 & 3 & 5 & 6 & 5.5 & 4.5 & 2 & 2.5 \\
3.5 & 4 & 4 & 4 & 4.5 & 5.5 & 4 & 5 & 3 & 5 \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  Déterminez la population.
2.  Déterminez la variable statistique.
3.  Est-elle continue ou discrète?
4.  Calculez l'effectif de chaque modalité et établissez le tableau des
    fréquences et fréquences cumulées.
5.  Construisez la représentation graphique des fréquences cumulées.

````{block} solution
{.lower-alpha-paren}
1.  Les élèves de la classe 3F8 de l'année 2021-2022.
2.  La note de ces élèves lors de la dernière évaluation de mathématiques.
3.  Discrète, car les notes sont arrondies à la demie.
4.  ```{math}
    \begin{array} {cccc}
    \hline
    x_i & n_i & f_i & F_i \\
    \hline
    2 & 1 & 0.033 & 0.033 \\
    2.5 & 2 & 0.067 & 0.1 \\
    3 & 5 & 0.167 & 0.267 \\
    3.5 & 2 & 0.067 & 0.333 \\
    4 & 6 & 0.2 & 0.533 \\
    4.5 & 3 & 0.1 & 0.633 \\
    5 & 6 & 0.2 & 0.833 \\
    5.5 & 2 & 0.067 & 0.9 \\
    6 & 3 & 0.1 & 1 \\
    \hline
     \text{Total} & 30 & 1 &  \\
    \hline
    \end{array}
    ```
5.  ```{chartjs} template:cumulative-distribution-function
    :class: align-left
    :style: width: 70%;
    sample: [
      3, 3.5, 4, 3, 5, 6, 6, 4, 4.5, 5, 5, 3, 2.5, 3, 5, 6, 5.5, 4.5, 2, 2.5,
      3.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5,
    ],
    options: {
      borderColor: 'black',
      scales: {
        x: {title: {display: true, text: "Note"}},
        y: {title: {display: true, text: "Fréquence cumulée"}},
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true,
          text: "Fréquences cumulées des notes des élèves",
        },
      },
    },
    ```
````

### Exercice {num2}`exercice`

Un groupe d'élèves sont classés selon la pointure de leurs pieds.

```{math}
:class: align-center
\begin{array} {ccccccccccc}
\hline
\text{Pointure} & 32 & 33 & 34 & 35 & 36 & 37 & 38 & 39 & 40 & 41 \\
\text{Effectif} & 3 & 5 & 7 & 10 & 9 & 14 & 16 & 12 & 7 & 2 \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  Déterminez la population.
2.  Déterminez la variable statistique.
3.  Est-elle continue ou discrète?
4.  Établissez le tableau des fréquences et fréquences cumulées.
5.  Représentez les fréquences au moyen d'un diagramme.
6.  Construisez la représentation graphique des fréquences cumulées.

````{block} solution
{.lower-alpha-paren}
1.  Un groupe d'élèves.
2.  La pointure des pieds de ces élèves.
3.  Discrète, car la pointure est arrondie.
4.  ```{math}
    \begin{array} {cccc}
    \hline
    x_i & n_i & f_i & F_i \\
    \hline
    32 & 3 & 0.035  & 0.035  \\
    33 & 5 & 0.059  & 0.094  \\
    34 & 7 & 0.082  & 0.176  \\
    35 & 10 & 0.118  & 0.294  \\
    36 & 9 & 0.106  & 0.4  \\
    37 & 14 & 0.165  & 0.565  \\
    38 & 16 & 0.188  & 0.753  \\
    39 & 12 & 0.141  & 0.894  \\
    40 & 7 & 0.082  & 0.976  \\
    41 & 2 & 0.024  & 1 \\
    \hline
     \text{Total} & 85 & 1 &  \\
    \hline
    \end{array}
    ```
5.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 70%;
    type: 'bar',
    data: {
      labels: ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
      datasets: [{axis: 'y', data: [3, 5, 7, 10, 9, 14, 16, 12, 7, 2]}],
    },
    options: {
      indexAxis: 'y',
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {
        x: {title: {display: true, text: "Effectif"}},
        y: {beginAtZero: true, title: {display: true, text: "Pointure"}},
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true,
          text: "Répartition des élèves en fonction de leur pointure",
        },
      },
    },
    ```
6.  ```{chartjs} template:cumulative-distribution-function
    :class: align-left
    :style: width: 70%;
    step: 1,
    sample: [
      [32, 3], [33, 5], [34, 7], [35, 10], [36, 9], [37, 14], [38, 16],
      [39, 12], [40, 7], [41, 2],
    ],
    options: {
      borderColor: 'black',
      scales: {
        x: {title: {display: true, text: "Pointure"}},
        y: {title: {display: true, text: "Fréquence cumulée"}},
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true,
          text: "Fréquences cumulées des pointures des élèves",
        },
      },
    },
    ```
````

### Exercice {num2}`exercice`

Lors d'un festival de cinéma, les films ont été classés selon leur durée en
minutes.

```{math}
:class: align-center
\begin{array} {cccccccccc}
\hline
62 & 64 & 69 & 70 & 71 & 72 & 74 & 75 & 75 & 81 \\
81 & 83 & 84 & 85 & 85 & 85 & 85 & 88 & 90 & 90 \\
91 & 92 & 94 & 94 & 94 & 97 & 97 & 99 & 101 & 101 \\
102 & 107 & 108 & 108 & 109 & 115 & 116 & & &  \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  Déterminez la population.
2.  Déterminez la variable statistique.
3.  Est-elle continue ou discrète?
4.  Construisez le tableau de distribution des fréquences de cette variables en
    choisissant de regrouper les valeurs avec des classes de largeur $10$ en
    partant de $60$ min.
5.  Représentez les fréquences au moyen d'un diagramme.

````{block} solution
{.lower-alpha-paren}
1.  Des films lors d'un festival.
2.  La durée des films en minutes.
3.  Continue.
4.  ```{math}
    \begin{array} {ccccc}
    \hline
    x_i & c_i & n_i & f_i & F_i \\
    \hline
    [60; 70[ & 65 & 3 & 0.081  & 0.081  \\
    [70; 80[ & 75 & 6 & 0.162  & 0.243  \\
    [80; 90[ & 85 & 9 & 0.243  & 0.486  \\
    [90; 100[ & 95 & 10 & 0.27  & 0.757  \\
    [100; 110[ & 105 & 7 & 0.189  & 0.946  \\
    [110; 120[ & 115 & 2 & 0.054  & 1  \\
    \hline
     \text{Total} &  & 37 & 1 \\
    \hline
    \end{array}
    ```
5.  ```{chartjs} template:histogram
    :class: align-left
    :style: width: 80%;
    uniform: {min: 60, max: 120, width: 10},
    options: {
      borderWidth: 0.5, borderColor: 'black', backgroundColor: '#0003',
      scales: {
        x: {title: {display: true, text: "Durée en minutes"}},
        y: {title: {display: true, text: "Effectif"}},
      },
      plugins: {
        legend: {display: false},
        title: {
          display: true,
          text: "Répartition des films en fonction de leur durée",
        },
      },
    },
    sample: [
      62, 64, 69, 70, 71, 72, 74, 75, 75, 81,
      81, 83, 84, 85, 85, 85, 85, 88, 90, 90,
      91, 92, 94, 94, 94, 97, 97, 99, 101, 101,
      102, 107, 108, 108, 109, 115, 116,
    ],
    ```
````

## Solutions

```{blocks} solution
:class: allow-break-inside
```
