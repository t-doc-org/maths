% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Indicateurs de position

## Indicateurs de tendance centrale

### Moyenne

````{admonition} Définition
:class: note
La **moyenne** d'un échantillon de taille $N$ avec $k$ modalités est
définie par

```{math}
:class: align-center
\overline{x} = \dfrac{n_1x_1 + n_2x_2 + \cdots + n_kx_k}{N} = \dfrac{\displaystyle{\sum_{i=1}^k n_i x_i}}{N}
```
````

### Médiane

```{admonition} Définition
:class: note
La **médiane** d'un échantillon dont les valeurs sont rangées par ordre
croissant est la valeur qui partage l'échantillon en deux groupes de même
effectif. Elle est notée $\tilde{x}$.

Soit $N$ la taille de l'échantillon:
  - si $N$ est impair, $\tilde{x} = x_{\frac{N+1}{2}}$
  - si $N$ est pair, $\tilde{x} = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2} \quad$
    (moyenne des valeurs centrales)
```


La médiane sépare la population en deux groupes: $50\%$ de la population est
au-dessous de la médiane et $50\%$ en dessus.

````{container} frame noprint
# Exemple {num2}`exemple:matu2`

Reprenons l'{numref}`exemple %s<exemple:matu>` qui est celui d'une variable
statistique discrète.

Voici les notes obtenues à l'examen écrit de maturité en mathématiques.

```{math}
:class: align-center
\begin{array} {cccccccccc}
\hline
3 & 4.5 & 4 & 3.5 & 5 & 6 & 6 & 4 & 4.5 & 5 \\
5 & 4 & 4.5 & 5.5 & 5 & 6 & 5.5 & 4.5 & 2 & 4.5 \\
5.5 & 4 & 4 & 4 & 4.5 & 5.5 & 4 & 5 & 3 & 5 \\
\hline
\end{array}
```

{.lower-alpha-paren}
1.  En utilisant les données brutes ci-dessus, le calcul de la moyenne et la
    médiane sont les suivants:

    Moyenne:
    $$\overline{x} &= \dfrac{3+4.5+4+3.5+5+6+6+4+4.5+5+5+4+4.5+5.5+5+6+5.5+4.5+2+4.5+
    5.5+4+4+4+4.5+5.5+4+5+3+5}{30}\\
     &= \dfrac{136.5}{30} = 4.55$$

    Pour déterminer la médiane, il faut
    - ordonner l'échantillon
    - trouver la valeur qui se trouve au milieu de l'échantillon. Soit $N$ la
      taille de l'échantillon:
      - si $N$ est impair, $\tilde{x} = x_{\frac{N+1}{2}}$
      - si $N$ est pair, $\tilde{x} = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2}$

    ```{math}
    :class: align-center
    \begin{array} {cccccccccc}
    \hline
    2 & 3 & 3 & 3.5 & 4 & 4 & 4 & 4 & 4 & 4 \\
    4 & 4.5 & 4.5 & 4.5 & {\color{red}4.5} & {\color{red}4.5} & 4.5 & 5 & 5 & 5 \\
    5 & 5 & 5 & 5.5 & 5.5 & 5.5 & 5.5 & 6 & 6 & 6 \\
    \hline
    \end{array}
    ```
    $N = 30 \implies \tilde{x} = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2} = \dfrac{x_{15} + x_{16}}{2} = \dfrac{4.5 + 4.5}{2} =4.5$

    Le tableau des effectifs $n_i$, des fréquences $f_i$  et des fréquences
    cumulées $F_i$ est le suivant.

2.  En utilisant les données représentées dans le tableau des effectifs cumulés.

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
    \rowcolor{red}4.5 & 6 & 0.2 & 0.567 \\
    5 & 6 & 0.2 & 0.767 \\
    5.5 & 4 & 0.133 & 0.9 \\
    6 & 3 & 0.1 & 1 \\
    \hline
     \text{Total} & 30 & 1 &  \\
    \hline
    \end{array}
    ```

    Moyenne:

    $$\overline{x} &= \dfrac{2 \cdot 1 + 2.5 \cdot 0 + 3 \cdot 2 + 3.5 \cdot 1 + 4 \cdot 7 + 4.5 \cdot 6 + 5 \cdot 6 + 5.5 \cdot 4 + 6 \cdot 3}{30}\\
     &= \dfrac{136.5}{30} = 4.55$$

    Pour déterminer la médiane, il faut trouver la première valeur pour laquelle
    la fréquence cumulée dépasse $\dfrac{1}{2}$.

    $F_6 \geq \dfrac{1}{2}$, la médiane vaut $\tilde{x} = 4.5$.

Dans le cas d'une variable statistique discrète, ces deux méthodes donnent les
mêmes résultats.

Pour la représentation graphique, un diagramme en bâtons est utilisé:

```{chartjs} densityFunction
min: 1.5, max: 6.5, step: 0.5,
sample: [
  3, 4.5, 4, 3.5, 5, 6, 6, 4, 4.5, 5, 5, 4, 4.5, 5.5, 5, 6, 5.5, 4.5, 2, 4.5,
  5.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5
],
options: {
  backgroundColor: '#36a2eb',
  scales: {y: {title: {display: true, text: "Effectif"}},
    x: {title: {display: true, text: "Note"}}},
},
annotations: [{
  median: {label: 'médiane'},
  options: {
    borderColor: '#9966ff',
    label: {position: '15%', backgroundColor: '#9966ffcc', rotation: -90},
  },
}, {
  mean: {label: 'moyenne'},
  options: {
    borderColor: '#ff6384',
    label: {position: '45%', backgroundColor: '#ff6384cc', rotation: -90},
  },
}],
```
````

````{container} frame noprint
# Exemple {num2}`exemple`

Reprenons l'{numref}`exemple %s<exemple:masse>` qui est celui d'une variable
statistique continue.

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
  66 & 66 & 66 & 66 & 66 & 67 & 67 & 67 & 67 & 67 & 67 & 67 & 67 & \cellcolor{red}67 \\
  \cellcolor{red}67 & 67 & 67 & 67 & 67 & 67 & 68 & 68 & 68 & 68 & 68 & 68 & 68 & 68 \\
  68 & 68 & 68 & 68 & 68 & 69 & 69 & 69 & 69 & 70 & 70 & 70 & 70 & 70 \\
  70 & 70 & 71 & 71 & 71 & 71 & 72 & 72 & 72 & 72 & 72 & 72 & 72 & 73 \\
  73 & 73 & 73 & 73 & 73 & 73 & 74 & 74 & 75 & 75 & 75 & 76 & 76 & 77 \\
  77 & 78 & 78 & 79 & 79 & 79 & 79 & 81 & 83 & 83 & 85 & 86 & 88 & 89 \\
\hline
\end{array}
```

Le calcul de la moyenne et la médiane sont les suivants:

Moyenne:
```{math}
\overline{x} &= \dfrac{46+49+51+53+55+55+55+57+58+58+58+60+60+60+60+60+61+61+61+61+61+61+61+61+61+61+61+61+
  62+62+62+62+62+63+63+63+63+63+63+64+64+64+64+64+64+65+65+65+65+65+65+65+65+65+66+66+
  66+66+66+66+66+67+67+67+67+67+67+67+67+67+67+67+67+67+67+67+68+68+68+68+68+68+68+68+
  68+68+68+68+68+69+69+69+69+70+70+70+70+70+70+70+71+71+71+71+72+72+72+72+72+72+72+73+
  73+73+73+73+73+73+74+74+75+75+75+76+76+77+77+78+78+79+79+79+79+81+83+83+85+86+88+89}{140}\\
  &= \dfrac{9446}{140} = 67.47
```

Comme les données de l'échantillon sont notées dans l'ordre croissant, la
médiane est la valeur qui se trouve exactement au milieu. Ici il y a un
nombre pair de données (140), le milieu de l'échantillon se trouve donc
entre deux valeurs, il faut donc faire la moyenne de ces deux valeurs.

Médiane:

$N = 140 \implies \tilde{x} = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2} = \dfrac{x_{70} + x_{71}}{2} = \dfrac{67 + 67}{2}=67$.

Pour la représentation graphique, un histogramme est utilisé avec des classes de
 largeur 5:

```{chartjs} histogram
uniform: {min: 40, max: 100, width: 5},
annotations: [{
  median: {label: 'médiane'},
    options: {
      borderColor: '#9966ff',
      label: {position: '15%', backgroundColor: '#9966ffcc',
            rotation: -90}
    },
}, {
  mean: {label: 'moyenne'},
  options: {
    borderColor: '#ff6384',
    label: {position: '40%', backgroundColor: '#ff6384cc', rotation: -90},
  },
}],
options: {
  borderWidth: 0.5, borderColor: '#36a2eb', hoverBorderColor: '#36a2eb',
  backgroundColor: '#36a2eb33',
  scales: {
    x: {title: {display: true, text: "Masse"}},
    y: {title: {display: true, text: "Effectif"}},
  },
},
sample: [
  46, 49, 51, 53, 55, 55, 55, 57, 58, 58, 58, 60, 60, 60,
  60, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
  62, 62, 62, 62, 62, 63, 63, 63, 63, 63, 63, 64, 64, 64,
  64, 64, 64, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66, 66,
  66, 66, 66, 66, 66, 67, 67, 67, 67, 67, 67, 67, 67, 67,
  67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 68, 68,
  68, 68, 68, 68, 68, 69, 69, 69, 69, 70, 70, 70, 70, 70,
  70, 70, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 72, 73,
  73, 73, 73, 73, 73, 73, 74, 74, 75, 75, 75, 76, 76, 77,
  77, 78, 78, 79, 79, 79, 79, 81, 83, 83, 85, 86, 88, 89,
],
```

````

{.allow-break-inside}
### Comparaison des indicateurs de tendance centrale

**Moyenne:**

- L'indicateur de tendance centrale le plus connu.
- La plus coûteuse à calculer, même si la formule est simple à exprimer.
- Très influencée par les valeurs extrêmes ou aberrantes.
- Peu influencée par le choix des classes.
- Très stable, c'est-à-dire qu'elle varie peu selon l'échantillon choisi de la
  population.
- L'indicateur de tendance centrale le plus utilisé.

{.page-break}
**Médiane:**

- Issue d'une conception simple de la notion de centre.
- Détermination un peu plus compliquée.
- Peu influencée par les valeurs extrêmes ou aberrantes de la distribution.
- Peu influencée par le choix des classes.
- Assez stable, mais moins que la moyenne arithmétique.
- Moins utilisée que la moyenne.

{.no-force-break .allow-break-inside}
## Quantiles

```{admonition} Définition
:class: note
Les **quantiles** sont les valeurs qui divisent une variable statistique en
intervalles de mêmes fréquences.

Si $n$ est le nombre de ces intervalles, l'**ordre** du quantile est l'inverse
$\dfrac{1}{n}$ de ce nombre.
```

Le premier quartile, noté $Q_1$, est la plus petite valeur telle qu'au moins
$25\%$ des valeurs de l'échantillon lui soient inférieures ou égales.

Le troisième quartile, noté $Q_3$, est la plus petite valeur telle qu'au moins
$75\%$ des valeurs de l'échantillon lui soient inférieures ou égales.

Le deuxième quartile correspond à la médiane.

Le premier décile, noté $D_1$, est la plus petite valeur telle qu'au moins
$10\%$ des valeurs de l'échantillon lui soient inférieures ou égales.

## Exercices

### Exercice {num2}`exercice`

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
2.  Une autre entreprise composée de 16 employés paye les salaires suivants:
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
1.  $\overline{x} = 5\,900$ et $\tilde{x} = 5\,500$
2.  $\overline{x} = 10\,531.25$ et $\tilde{x} = 5\,750$

La moyenne est très sensible à la valeur extrême ($80\,000$).
```

### Exercice {num2}`exercice`

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
$\overline{x} = 5.82$ et $\tilde{x} = 4$
```

### Exercice {num2}`exercice`

Pour chaque élève inscrit dans une école, le nombre de lettres de leur prénom a
été déterminé. Les résultats varient entre 3 lettres (Ana, Zoé, Luc,…) et 13
lettres (Paul-Alexandre et Marcia-Andreia).

```{math}
:class: align-center
\begin{array} {cccccccccccc}
\hline
\text{Nombre de lettres} &  3 &  4 &   5 &   6 &   7 &   8 &  9 & 10 & 11 & 12 & 13 \\
\text{Effectif} & 10 & 52 & 155 & 198 & 156 & 102 & 45 & 17 &  7 &  2 &  2 \\
\hline
\end{array}
```

Déterminez la moyenne et la médiane de cette variable statistique.

```{block} solution
$\overline{x} = 6.449$ et $\tilde{x} = 6$
```

### Exercice {num2}`exercice`

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

### Exercice {num2}`exercice:notes`

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
1.  Calculez la moyenne et la médiane.
2.  Construisez le tableau de distribution des fréquences cumulées.
3.  Représentez les fréquences au moyen d'un diagramme.
4.  Construisez la représentation graphique des fréquences cumulées.

````{block} solution
**Classe 1:**

{.lower-alpha-paren}
1.  $\overline{x} = 4.089$ et $\tilde{x} = 3.5$
2.  ```{math}
    \begin{array} {ccccccc}
    \hline
    x_i & 2.5 & 3 & 3.5 & 4 & 4.5 & 5 & 5.5 & 6 \\
    F_i & 0.179 & 0.393 & 0.536 & 0.571 & 0.607 & 0.714 & 0.821 & 1 \\
    \hline
    \end{array}
    ```
3.  ```{chartjs} densityFunction
    min: 1.5, max: 6.5, step: 0.5,
    sample: [
      2.5, 2.5, 2.5, 2.5, 2.5, 3, 3, 3, 3, 3, 3, 3.5, 3.5, 3.5,
      3.5, 4, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 6, 6
    ],
    options: {
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {y: {title: {display: true, text: "Effectif"}},
        x: {title: {display: true, text: "Note"}}},
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Notes obtenues"},
      },
    },
    annotations: [{
      median: {label: 'médiane'},
      options: {
        borderColor: '#9966ff',
        label: {position: '25%', backgroundColor: '#9966ffcc', rotation: -90},
      },
    }, {
      mean: {label: 'moyenne'},
      options: {
        borderColor: '#ff6384',
        label: {position: '40%', backgroundColor: '#ff6384cc', rotation: -90},
      },
    }],
    ```
4.  ```{chartjs} cumulativeDistributionFunction
    :style: aspect-ratio: 3;
    min: 1.5, max: 6.5, step: 0.5,
    sample: [
      [2.5, 5], [3, 6], [3.5, 4], [4, 1], [4.5, 1], [5, 3], [5.5, 3], [6, 5],
    ],
    options: {
      borderColor: 'black',
      scales: {
        x: {title: {display: true, text: "Note"}},
        y: {title: {display: true, text: "Fréquence cumulée"}},
      },
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Férquences cumulées des notes obtenues"},
      },
    },
    ```

**Classe 2:**

{.lower-alpha-paren}
1.  $\overline{x} = 4.089$ et $\tilde{x} = 4$
2.  ```{math}
    \begin{array} {ccccccc}
    \hline
    x_i & 2.5 & 3 & 3.5 & 4 & 4.5 & 5 & 5.5 & 6 \\
    F_i & 0.179 & 0.321 & 0.464 & 0.571 & 0.714 & 0.786 & 0.786 & 1 \\
    \hline
    \end{array}
    ```
3.  ```{chartjs} densityFunction
    min: 1.5, max: 6.5, step: 0.5,
    sample: [
      6, 6, 6, 6, 6, 6, 5, 5, 4.5, 4.5, 4.5, 4.5, 4, 4,
      4, 3.5, 3.5, 3.5, 3.5, 3, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2.5
    ],
    options: {
      borderWidth: 1, borderColor: 'black', backgroundColor: '#0005',
      scales: {y: {title: {display: true, text: "Effectif"}},
        x: {title: {display: true, text: "Note"}}},
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Notes obtenues"},
      },
    },
    annotations: [{
      median: {label: 'médiane'},
      options: {
        borderColor: '#9966ff',
        label: {position: '15%', backgroundColor: '#9966ffcc', rotation: -90},
      },
    }, {
      mean: {label: 'moyenne'},
      options: {
        borderColor: '#ff6384',
        label: {position: '45%', backgroundColor: '#ff6384cc', rotation: -90},
      },
    }],
    ```
4.  ```{chartjs} cumulativeDistributionFunction
    :style: aspect-ratio: 3;
    min: 1.5, max: 6.5, step: 0.5,
    sample: [
      [2.5, 5], [3, 4], [3.5, 4], [4, 3], [4.5, 4], [5, 2], [5.5, 0], [6, 6],
    ],
    options: {
      borderColor: 'black',
      scales: {
        x: {title: {display: true, text: "Note"}},
        y: {title: {display: true, text: "Fréquence cumulée"}},
      },
      plugins: {
        legend: {display: false},
        title: {display: true, text: "Fréquences cumulées des notes obtenues"},
      },
    },
    ```
````

### Exercice {num2}`exercice:course`

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
Calculez les indicateurs de tendance centrale (moyenne et médiane) de cette
série statistique

```{block} solution
$\overline{x} = 218.16$ et $\tilde{x} = 215$
```

### Exercice {num2}`exercice`

En 2007 en Suisse, la taille moyenne des hommes était de $175.4$ cm et celle des
femmes de $164.0$ cm. En sachant que la population suisse, à cette date, était
de $7\,589\,141$ habitants et que la taille moyenne d'un habitant suisse (femmes
et hommes mélangés) était de $169.6$ cm, déterminez le nombre des femmes qu'il y
avait de plus que d'hommes à cette époque.

```{block} solution
Il y avait $133\,143$ femmes de plus que d'hommes.
```

### Exercice {num2}`exercice`

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
$C_{57} = 4$; $D_3 = 3$; $Q_3 = 5$; $\overline{x} = 4.23$; $\tilde{x} = 4$.
````

### Exercice {num2}`exercice`

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
$C_{77} = 8$; $D_2 = 2$; $Q_2 = \tilde{x} = 5$; $\overline{x} = 4.917$.
````

## Solutions

```{blocks} solution
:class: allow-break-inside
```
