% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Indicateurs de dispersion
```{metadata}
subject: "Mathématiques 2e année"
```

````{container} frame noprint
# Exemple {num2}`exemple`
Bob et Alice comparent les diamètres des arbres sur leur terrain. Ils décident
de mesurer en centimètres les diamètres des différents arbres.
Bob recueille les données suivantes: $\left\{ 10, 12, 14, 52, 56, 60 \right\}$
alors qu'Alice obtient $\left\{ 28, 29, 33, 35, 38, 41 \right\}$.

Les deux ensembles de données ont la même moyenne $ \overline{x} = 34$.

Toutefois les deux populations sont bien différentes, car les données
recueillies par Bob sont beaucoup plus **dispersées** que celles d'Alice.

```{chartjs} template:density-function
:style: width: 50%;
min: 5, max: 65, step: 5,
sample: [10, 12, 14, 52, 56, 60],
options: {
  backgroundColor: '#36a2eb',
  scales: {y: {title: {display: true, text: "Effectif"}},
    x: {title: {display: true, text: "diamètre"}}},
  plugins: {
    title: {
      display: true,
      text: "Mesures de Bob",
    },
  },
},
annotations: [{
  mean: {label: 'moyenne'},
  options: {
    borderColor: '#ff6384',
    label: {position: '45%', backgroundColor: '#ff6384cc', rotation: -90},
  },
}],
```

```{chartjs} template:density-function
:style: width: 50%;
min: 5, max: 65, step: 5,
sample: [28, 29, 33, 35, 38, 41],
options: {
  backgroundColor: '#36a2eb',
  scales: {y: {title: {display: true, text: "Effectif"}},
    x: {title: {display: true, text: "diamètre"}}},
  plugins: {
    title: {
      display: true,
      text: "Mesures d'Alice",
    },
  },
},
annotations: [{
  mean: {label: 'moyenne'},
  options: {
    borderColor: '#ff6384',
    label: {position: '45%', backgroundColor: '#ff6384cc', rotation: -90},
  },
}],
```
````

{.allow-break-inside}
## Définitions

```{admonition} Définition
:class: note
L'**étendue** d'une variable statistique est la différence entre la plus grande
et la plus petite modalité.
```

L'étendue ne tient pas compte de toutes les observations.
De plus, elle n'est pas un indicateur robuste, car elle dépend fortement de la présence de valeurs extrêmes.

````{admonition} Définition
:class: note
L'**écart interquartile** d'une variable statistique, noté $EI$, est la
différence entre le troisième et le premier quartiles:
```{math}
:class: align-center
EI = Q_3 - Q_1
```
````

L'écart interquartile correspond à l'étendue de la variable statistique après
élimination de $25 \%$ des valeurs les plus petites et de $25 \%$
des valeurs les plus élevées.
Cet indicateur est plus robuste que l'étendue, car il ne contient pas
d'éventuelles valeurs extrêmes.

````{container} frame noprint
# Exemple {num2}`exemple:matu3`

Reprenons l'{numref}`exemple %s<exemple:matu2>` du chapitre "Indicateurs de
position".

Les notes obtenues à l'examen écrit de maturité en mathématiques ordonnées.

```{math}
:class: align-center
\begin{array} {cccccccccc}
\hline
2 & 3 & 3 & 3.5 & 4 & 4 & 4 & 4 & 4 & 4 \\
4 & 4.5 & 4.5 & 4.5 & 4.5 & 4.5 & 4.5 & 5 & 5 & 5 \\
5 & 5 & 5 & 5.5 & 5.5 & 5.5 & 5.5 & 6 & 6 & 6 \\
\hline
\end{array}
```

La moyenne et la médiane ont déjà été calculées: $\overline{x} = 4.55$ et
$\tilde{x} = Q_2 = 4.5$.

Reprenons le tableau des effectifs cumulés:

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
\rowcolor{cyan}4 & 7 & 0.233 & 0.367 \\
4.5 & 6 & 0.2 & 0.567 \\
\rowcolor{yellow}5 & 6 & 0.2 & 0.767 \\
5.5 & 4 & 0.133 & 0.9 \\
6 & 3 & 0.1 & 1 \\
\hline
 \text{Total} & 30 & 1 &  \\
\hline
\end{array}
```

L'étendue vaut: $x_9 - x_1 = 6-2 = 4$.

Le premier quartile est la plus petite valeur telle qu'au moins $25\%$ des
valeurs de l'échantillon lui soient inférieures ou égales. Cela correspond à
$Q_1 = x_5 = 4$.

Cela signifie qu'un quart des élèves ont une note inférieure ou égale à 4.

Le troisième quartile est la plus petite valeur telle qu'au moins $75\%$ des
valeurs de l'échantillon lui soient inférieures ou égales. Cela correspond à
$Q_3 = x_7 = 5$.

Cela signifie que trois quarts des élèves ont une note inférieur ou égale à 5.

L'écart interquartile vaut $EI = Q_3 - Q_1 = 5 - 4 = 1$.
````

````{admonition} Définition
:class: note
La **boîte à moustaches** d'une variable statistique discrète ou continue est un
graphique qui représente l'étendue et les différents quartiles:
$Q_0 = 9$, $Q_1 = 18$, $Q_2 = 22$, $Q_3 = 27$ et $Q_4 = 33$.

```{chartjs} template:chart
:style: width: 70%; aspect-ratio: 5;
type: 'boxplot',
data: {
  labels: [''],
  datasets: [{
    data: [
      {min: 9, q1: 18, median: 22, q3: 27, max: 33},
    ],
  }],
},
options: {
  borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
  coef: 0, barPercentage: 0.7,
  indexAxis: 'y',
  scales: {
    x: {title: {display: false}},
    y: {beginAtZero: true, title: {display: false}},
  },
  plugins: {
    legend: {display: false},
  },
},
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Reprenons l'{numref}`exemple %s<exemple:matu3>` concernant les notes obtenues
à l'examen écrit de maturité en mathématiques.

$Q_2 = \tilde{x} = 4.5$, $Q_1 = 4$, $Q_3 = 5$ (calculés précédemment)

$Q_0 = 2$ est la note la plus basse obtenue et $Q_4 = 6$ est la note la plus
haute obtenue.

Les quartiles permettent de représenter la boîte à moustache de cet exemple:

```{chartjs} template:chart
:style: width: 70%; aspect-ratio: 4;
type: 'boxplot',
data: {
  labels: [''],
  datasets: [{
    data: [
      {min: 2, q1: 4, median: 4.5, q3: 5, max: 6},
    ],
  }],
},
options: {
  coef: 0, barPercentage: 0.7,
  indexAxis: 'y',
  scales: {
    x: {
      title: {display: true, text: "Note"}, min: 1, max: 6.5,
      ticks: {stepSize: 0.5},
    },
    y: {beginAtZero: true, title: {display: false}},
  },
  plugins: {
    legend: {display: false},
  },
},
```

Cette représentation montre clairement que 50% des élèves ont une note entre 4
et 5.
````

````{admonition} Définition
:class: note
La **variance** d'une variable statistique, notée $v$, est la moyenne du carré
des écarts à la moyenne.
```{math}
:class: align-center
v = \frac{\sum_{i=1}^k n_i  (x_i - \overline{x})^2}{N} = \sum_{i=1}^k f_i (x_i - \overline{x})^2
```
````

````{admonition} Définition
:class: note
L'**écart type** d'une variable statistique, noté $s$, est la racine carrée
de sa variance $v$.
```{math}
:class: align-center
s = \sqrt{v}
```
````

L'écart type mesure l'éloignement des valeurs de l'échantillon par rapport à la
moyenne.

````{admonition} Théorème
:class: note
```{math}
:class: align-center
v = \sum_{i=1}^k f_ix_i^2 - \overline{x}^2
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Reprenons l'{numref}`exemple %s<exemple:matu3>` concernant les notes obtenues
à l'examen écrit de maturité en mathématiques.

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
La moyenne a déjà été calculée: $\overline{x} = 4.55$

Calcul de la variance:

$$v &= 0.033 \cdot 2^2 + 0 \cdot 2.5^2 + 0.067 \cdot 3^2 + 0.033 \cdot 3.5^2 + 0.233 \cdot 4^2 + 0.2 \cdot 4.5^2 + 0.2 \cdot 5^2 + 0.133 \cdot 5.5^2 + 0.1 \cdot 6^2 - 4.55^2\\
 &= 0.86$$

Calcul de l'écart type:

$s = \sqrt{v} = \sqrt{0.86} = 0.93$


```{chartjs} template:density-function
min: 1.5, max: 6.5, step: 0.5,
sample: [
  3, 4.5, 4, 3.5, 5, 6, 6, 4, 4.5, 5, 5, 4, 4.5, 5.5, 5, 6, 5.5, 4.5, 2, 4.5,
  5.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5
],
options: {
  backgroundColor: '#36a2eb',
  scales: {
    y: {title: {display: true, text: "Effectif"}},
    x: {title: {display: true, text: "Note"}},
  },
},
annotations: [{
  mean: {label: 'moyenne'},
  options: {
    borderColor: '#ff6384',
    label: {position: '40%', backgroundColor: '#ff6384cc', rotation: -90},
  },
}, {
  stdDev: {f: [-1], label: '-s'},
  options: {
    borderColor: '#ff6384',
    label: {position: '45%', backgroundColor: '#ff6384cc'},
  },
}, {
  stdDev: {f: [1], label: '+s'},
  options: {
    borderColor: '#ff6384',
    label: {position: '45%', backgroundColor: '#ff6384cc'},
  },
}],
```
````


## Exercices

### Exercice {num2}`exercice`

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
Étendue = $8$; $EI = 2$; $\overline{x} = 2.685$, $v = 3.53$; $s = 1.88$
```

### Exercice {num2}`exercice:notes2`

Reprenez l'{numref}`exercice %s<exercice:notes>` du chapitre "Indicateurs de
position".

Voici les notes obtenues à une évaluation par une classe durant l'année
2021-2022.

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
1.  Classe 1: étendue = $3.5$; $EI = 2.5$; $\overline{x} = 4.09$, $v = 1.72$; $s = 1.31$<br>
    Classe 2: étendue = $3.5$; $EI = 2$; $\overline{x} = 4.09$, $v = 1.54$; $s = 1.24$
2.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 70%; aspect-ratio: 3;
    type: 'boxplot',
    data: {
      labels: ['Classe 1', 'Classe 2'],
      datasets: [{
        data: [
          {min: 2.5, q1: 3, median: 3.5, q3: 5.5, max: 6},
          {min: 2.5, q1: 3, median: 4, q3: 5, max: 6},
        ],
      }],
    },
    options: {
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      coef: 0, barPercentage: 0.7,
      indexAxis: 'y',
      scales: {
        x: {title: {display: false}, min: 2, max: 6, ticks: {stepSize: 0.5}},
        y: {beginAtZero: true, title: {display: false}},
      },
      plugins: {
        legend: {display: false},
      },
    },
    ```
```

### Exercice {num2}`exercice:course2`

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
<!-- vérifiez l'EI -->
Étendue = $140$; $EI = 51$; $\overline{x} = 218.16$, $v = 1135.86$;
$s = 33.7$
```

### Exercice {num2}`exercice`

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

### Exercice {num2}`exercice`

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

### Exercice {num2}`exercice`

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

### Exercice {num2}`exercice:desintegration`

À l'aide d'un compteur Geiger, le nombre de désintégrations radioactives d'un
échantillon de $^{226}\text{Ra}$ est mesuré durant une minute. L'expérience est
répétée 30 fois. Les résultats sont donnés ci-dessous, triés par ordre
croissant.

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
2.  Déterminez sa moyenne, sa variance et son écart type.
3.  Dessinez la boîte à moustache correspondante.

```{block} solution
{.lower-alpha-paren}
1. $\tilde{x} = Q_2 = 303$; $Q_1 = 289$; $Q_3 = 313$; $D_1 = 284$; $D_9 = 320$.
2. $\overline{x} = 301.7$, $v = 201.81$; $s = 14.206$.
3.  ```{chartjs} template:chart
    :class: align-left
    :style: width: 70%; aspect-ratio: 4.5;
    type: 'boxplot',
    data: {
      labels: ['Désintégrations'],
      datasets: [{
        data: [
          {min: 275, q1: 289, median: 303, q3: 313, max: 329},
        ],
      }],
    },
    options: {
      maintainAspectRatio: false,
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      coef: 0, barPercentage: 0.7,
      indexAxis: 'y',
      scales: {
        x: {title: {display: false}, min: 260, max: 340, ticks: {stepSize: 20}},
        y: {title: {display: false}},
      },
      plugins: {
        legend: {display: false},
      },
    },
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
