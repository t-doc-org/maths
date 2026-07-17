% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Ensembles

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

```{admonition} Définition
:class: note
Un **ensemble** $E$ est une collection d'objets. Ces objets sont appelés
**éléments** de l'ensemble $E$ et ne peuvent figurer qu'une seule fois dans
l'ensemble.

Si $x$ appartient à $E$, nous notons $x \in E$.

Si par contre $x$ n'est pas un élément de $E$, nous notons $x \notin E$.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  Soit $P$ l'ensemble des nombres premiers, alors
    $$7 \in P \, \text{ et } \, 12 \notin P$$
2.  Soit $A$ l'ensemble de tous les animaux à quatre pattes, alors
    $$\text{Le chien} \in A \, \text{ et } \, \text{La poule} \notin A$$
````

```{admonition} Définition
:class: note
Un ensemble peut être défini **en extension**. Dans ce cas, les éléments de
l'ensemble sont énumérés entre accolades. Si l'ensemble est infini,
des points de suspension sont ajoutés au début ou à la fin de l'énumération.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  L'ensemble des joueurs de tennis ayant gagné au moins 20 tournois du Grand
    Chelem: \{Federer, Nadal, Djokovic\}
2.  L'ensemble des nombres naturels impairs: \{1;3;5;7;9;...\}
````

```{admonition} Définition
:class: note
Un ensemble peut être défini **en compréhension**, c'est-à-dire qu'il est
défini par ses propriétés caractéristiques.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $\{x \in \text{ Ensemble des animaux} \, \mid  \, x \text{ a quatre pattes} \}$
    représente l'ensemble des animaux à 4 pattes.
2.  $\{x \in \mathbb{Z} \, \mid \, -4 \leqslant x \leqslant 4\}$ représente
    l'ensemble des nombres entiers entre $-4$ et $4$.
````

```{admonition} Définition
:class: note
Un ensemble peut être défini par un **intervalle**, c'est-à-dire un ensemble de
nombres réels délimité par deux bornes.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $[-3;10]$ représente l'ensemble des nombres réels de $-3$ compris à $10$ compris.
2.  $]0;7]$ représente l'ensemble des nombres réels de $0$ non compris à $7$ compris.
3.  $]-10;-4[$ représente l'ensemble des nombres réels de $-10$ non compris à $-4$ non
    compris.
````

```{admonition} Définition
:class: note
L'**ensemble vide** est l'ensemble ne contenant aucun élément. Il est noté
$\varnothing$.
```

```{admonition} Définition
:class: note
Un ensemble $A$ est **sous-ensemble** d'un ensemble $B$, si tout élément de $A$
est également élément de $B$, noté $A \subset B$.
```

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  L'ensemble des élèves de la classe est un sous-ensemble de l'ensemble des
    élèves du collège.
2.  L'ensemble des nombres pairs est un sous-ensemble de l'ensemble de tous les
    nombres.
````

### Quelques remarques

- L'ordre dans lequel les éléments d'un ensemble sont énumérés ne joue aucun
  rôle.
- Un élément ne peut figurer qu'une seule fois dans un ensemble.
- L'ensemble vide est un sous-ensemble de tout ensemble.
- Un ensemble est toujours sous-ensemble de lui-même.
- Les accolades sont réservées pour décrire les ensembles.

```{admonition} Définition
:class: note
Soit $a, b \in \mathbb{R}$ tels que $a < b$. Les **intervalles d'extrémités a et
b** sont les sous-ensembles suivants de $\mathbb{R}$:

{.lower-alpha-paren}
1.  **Intervalle fermé**: $[a;b]=\{x \in \mathbb{R} \, \mid \, a \leq x \leq b\}$<br>
    L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ et $b$
    compris.
2.  **Intervalle ouvert**: $]a;b[=\{x \in \mathbb{R} \, \mid \, a < x < b\}$<br>
    L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ et $b$ non
    compris.
3.  **Intervalles semi-ouverts**:<br>
    - $[a;b[=\{x \in \mathbb{R} \, \mid \, a \leq x < b\}$ (intervalle fermé à
      gauche)<br>
      L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ compris et
      $b$ non compris.
    - $]a;b]=\{x \in \mathbb{R} \, \mid \, a < x \leq b\}$ (intervalle fermé à
      droite)<br>
      L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ non compris
      et $b$ compris.

Il existe quatre autres types de sous-ensembles de $\mathbb{R}$:
- $[a;+\infty[=\{x \in \mathbb{R} \, \mid \, x \geq a\}$
- $]-\infty;a]=\{x \in \mathbb{R} \, \mid \, x \leq a\}$
- $]a;+\infty[=\{x \in \mathbb{R} \, \mid \, x > a\}$
- $]-\infty;a[=\{x \in \mathbb{R} \, \mid \, x < a\}$
```

Les crochets sont toujours tournés vers l'extérieur pour $+\infty$ et $-\infty$.

```{admonition} Définition
:class: note
Soient $A$ et $B$ deux sous-ensembles d'un ensemble plus grand $M$.

{.lower-alpha-paren}
1.  L'**intersection** $A \cap B$ des ensembles $A$ et $B$ est l'ensemble de
    tous les éléments appartenant simultanément à $A$ et $B$.
    $$ A \cap B = \{x \in M \, \mid \, x \in A \text{ \textbf{et}  } x \in B\}$$

2.  La **réunion** $A \cup B$ des ensembles $A$ et $B$ est l'ensemble des
    éléments appartenant à $A$ ou à $B$ (ou aux deux).
    $$A \cup B = \{x \in M \, \mid \, x \in A \text{ \textbf{ou} } x \in B\}$$

3.  La **différence** $A \setminus B$ est l'ensemble de tous les éléments de
    $A$ n'appartenant pas à $B$.
    $$A \setminus B = \{x \in M \, \mid \, x \in A \text{ et } x \notin B\}$$

4.  Le **complémentaire** $\overline{A}$ par rapport à $M$ est l'ensemble des
    éléments qui n'appartiennent pas à $A$.
    $$\overline{A}=M \setminus A = \{x \in  M \, \mid \, x \notin A \}$$
```

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # $A \cap B$
  ```{chartjs} venn
  data: {
    labels: ['A', 'B', 'A ∩ B'],
    datasets: [{data: [{}, {}, {value: 'A ∩ B'}]}],
  },
  options: {
    borderWidth: 1, borderColor: '#888',
    backgroundColor: ['#fff', '#fff', '#ddd'],
    hover: {mode: ''},
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },
  ```
- # $A \cup B$
  ```{chartjs} venn
  data: {
    labels: ['A', 'B', 'A ∪ B'],
    datasets: [{data: [{}, {}, {value: 'A ∪ B'}]}],
  },
  options: {
    borderWidth: 1, borderColor: '#888', backgroundColor: '#ddd',
    hover: {mode: ''},
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },
  ```

- # $A \setminus B$
  ```{chartjs} venn
  data: {
    labels: ['A', 'B', 'A \\ B'],
    datasets: [{data: [{value: 'A \\ B'}, {}, {}]}],
  },
  options: {
    borderWidth: 1, borderColor: '#888',
    backgroundColor: ['#ddd', '#fff', '#fff'],
    hover: {mode: ''},
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },
  ```

- # $\overline{A}$
  ```{chartjs} venn
  data: {
    labels: ['A\u0305'],
    datasets: [{data: [{}]}],
  },
  options: {
    borderWidth: 1, borderColor: '#888', backgroundColor: '#fff',
    hover: {mode: ''},
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      background: {color: '#ddd'},
      tooltip: false,
      legend: {display: false},
    },
  },
  ```
````

````{container} frame noprint
### Exemple {num2}`exemple`

Les diagrammes de Venn permettent de résoudre des problèmes:

Une classe est composée de 26 élèves. 17 font du foot, 12 du hockey et 9 du
tennis. Un seul élève ne fait pas de sport et 2 pratiquent trois sports. 3
élèves jouent au moins au hockey et au tennis et 6 élèves font au moins du
hockey et du foot. Combien d'élèves ne pratiquent qu'un seul sport?

{.lower-alpha-paren}
1. "2 pratiquent trois sports" $\implies$ 3 sports: 2 élèves
2. "Un seul élève ne fait pas de sport" $\implies$ Aucun sport: 1 élève
3. "3 élèves jouent au moins au hockey" $\implies$ Hockey et tennis (pas foot):
    $3 - 2 = 1$ élève
4. "6 élèves font au moins du hockey et du foot" $\implies$ Hockey et foot (pas
    tennis): $6 - 2 = 4$ élèves
5. "12 du hockey" $\implies$ Que du Hockey: $12 - (4 + 1 + 2) = 12 - 7 = 5$
    élèves
6. "17 font du foot" $\implies$ Foot mais pas du hockey:
    $17 - (4 + 2) = 17 - 6 = 11$ élèves
7. "9 du tennis" $\implies$ Tennis mais pas du hockey: $9 - (2 + 1) = 9 - 3 = 6$
    élèves
8. Élèves qui restent à placer $26 - (12 + 1) = 26 - 13 = 13$ élèves
9. Foot et/ou tennis mais pas de hockey: $11 + 6 = 17$ élèves
10. Foot et tennis:  $17 - 13 = 4$ élèves
11. Que du foot: $17 - (4 + 4 + 2) = 17 - 10 = 7$ élèves
12. Que du tennis: $9 - (4 + 1 + 2) = 9 - 7 = 2$ élèves
13. Un seul sport: $5 + 7 + 2 = 14$ élèves

```{chartjs} venn
:style: width: 60%; aspect-ratio: 1.2;
data: {
  labels: ['Foot', 'Hockey', 'Tennis'],
  datasets: [{
    data: [
      {sets: ['F'], value: '7'},
      {sets: ['H'], value: '5'},
      {sets: ['T'], value: '2'},
      {sets: ['F', 'H'], value: '4'},
      {sets: ['F', 'T'], value: '4'},
      {sets: ['H', 'T'], value: '1'},
      {sets: ['F', 'H', 'T'], value: '2'},
    ],
  }],
},
options: {
  borderWidth: 1,
  borderColor: ['#36a2eb', '#ff6384', '#4bc0c0', '#ff9f40', '#9966ff',
                '#ffcd56', '#c9cbcf'],
  backgroundColor: ['#36a2eb33', '#ff638433', '#4bc0c033', '#ff9f4033',
                    '#9966ff33', '#ffcd5633', '#c9cbcf33'],
  layout: {padding: 20},
  scales: {
    x: {ticks: {font: {size: 12}}},
    y: {ticks: {font: {size: 16}}},
  },
  plugins: {
    tooltip: false,
    legend: {display: false},
  },
},
```

Réponse: 14 élèves ne pratiquent qu'un seul sport.
````

## Exercices

### Exercice {num2}`exercice`

Écrivez les ensembles suivants en extension.

{.lower-alpha-paren}
1. L'ensemble des jours de la semaine.
2. L'ensemble des mois de l'année qui ont 31 jours.
3. L'ensemble des nombres entiers de 0 à 10.
4. L'ensemble des multiples de 3, noté $M_{3}$.
5. L'ensemble des diviseurs de 24, noté $D_{24}$.

```{block} solution
{.lower-alpha-paren}
1. $\{\text{lundi; mardi; mercredi; jeudi; vendredi; samedi; dimanche}\}$
2. $\{\text{janvier; mars; mai; juin; juillet; août; octobre; décembre}\}$
3. $\{0; 1; 2; 3; 4; 5; 6; 7; 8; 9; 10\}$
4. $M_{3} = \{3; 6; 9; 12; 15; 18; \dots\}$
5. $D_{24} = \{1; 2; 3; 4; 6; 8; 12; 24\}$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivants en compréhension.

{.lower-alpha-paren}
1. L'ensemble des garçons de la classe qui ont des lunettes.
2. L'ensemble des filles de la classe qui ont 16 ans.
3. L'ensemble des nombres entiers entre 6 et 12 compris.
4. L'ensemble des nombres entiers entre -2 et 5 non compris.
5. L'ensemble des nombres entiers entre -3 non compris et 3 compris.

```{block} solution
{.lower-alpha-paren}
1. $\{x \in \text{garçons de la classe} \, \mid \, x \text{ a des lunettes}\}$
2. $\{x \in \text{filles de la classe} \, \mid \, x \text{ a 16 ans}\}$
3. $\{ x \in \mathbb{Z} \, \mid \,6 \leq x \leq 12\}$
4. $\{ x \in \mathbb{Z} \, \mid \,-2 < x < 5\}$
5. $\{ x \in \mathbb{Z} \, \mid \,-3 < x \leq 3\}$
```

### Exercice {num2}`exercice`

Écrivez les ensembles de l'exercice précédent en extension.

```{block} solution
{.lower-alpha-paren}
1. sans correction
2. sans correction
3. $\{ x \in \mathbb{Z} \, \mid \,6 \leq x \leq 12\} = \{6; 7; 8; 9; 10; 11; 12\}$
4. $\{ x \in \mathbb{Z} \, \mid \,-2 < x < 5\} = \{-1; 0; 1; 2; 3; 4\}$
5. $\{ x \in \mathbb{Z} \, \mid \,-3 < x \leq 3\} = \{-2; -1; 0; 1; 2; 3\}$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivants sous forme d'intervalle.

{.lower-alpha-paren .columns-2}
1. $\{ x \in \mathbb{R} \, \mid \,0 \leq x \leq 5\}$
2. $\{ x \in \mathbb{R} \, \mid \,-3 \leq x \leq 2\}$
3. $\{ x \in \mathbb{R} \, \mid \,9 < x \leq 15\}$
4. $\{ x \in \mathbb{R} \, \mid \,-10 \leq x < -5\}$

```{block} solution
{.lower-alpha-paren}
1. $\{ x \in \mathbb{R} \, \mid \,0 \leq x \leq 5\} = [0; 5]$
2. $\{ x \in \mathbb{R} \, \mid \,-3 \leq x \leq 2\} = [-3; 2]$
3. $\{ x \in \mathbb{R} \, \mid \,9 < x \leq 15\} = ]9; 15]$
4. $\{ x \in \mathbb{R} \, \mid \,-10 \leq x < -5\} = [-10; -5[$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivant en extension.

{.lower-alpha-paren .columns-2}
1. $\{ x \in \mathbb{Z} \, \mid \,0 \leq x \leq 7\}$
2. $\{ x \in \mathbb{Z} \, \mid \,-2 \leq x \leq 3\}$
3. $\{ x \in \mathbb{Z} \, \mid \,10 < x \leq 14\}$
4. $\{ x \in \mathbb{Z} \, \mid \,-8 \leq x < -2\}$

```{block} solution
{.lower-alpha-paren}
1. $\{ x \in \mathbb{Z} \, \mid \,0 \leq x \leq 7\} = \{0; 1; 2; 3; 4; 5; 6; 7\}$
2. $\{ x \in \mathbb{Z} \, \mid \,-2 \leq x \leq 3\} = \{-2; -1; 0; 1; 2; 3\}$
3. $\{ x \in \mathbb{Z} \, \mid \,10 < x \leq 14\} = \{11; 12; 13; 14\}$
4. $\{ x \in \mathbb{Z} \, \mid \,-8 \leq x < -2\} = \{-8; -7; -6; -5; -4; -3\}$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivants en compréhension.

{.lower-alpha-paren .columns-2}
1. $\{0; 1; 2; 3\}$
2. $\{0; 1; 2; 3; ...\}$
3. $\{ -4; -3; -2; -1\}$
4. $\{ ...; -4; -3; -2; -1\}$
5. $\{ 2; 4; 6; 8; 10; 12; ...\}$
6. $\{ 2; 3; 5; 7; 11; 13; 17; ...\}$
7. $\{ 1; 2; 3; 6\}$
8. $\{ 1; 4; 9; 16; 25; \dots \}$
9. $[4; 9]$
10. $]-1; 6[$
11. $[-7; -2[$
12. $]0; 7]$

```{block} solution
{.lower-alpha-paren}
1. $\{0; 1; 2; 3\} = \{ x \in \mathbb{Z} \, \mid \,0 \leq x \leq 3\}$
2. $\{0; 1; 2; 3; ...\} = \{ x \in \mathbb{Z} \, \mid \,0 \leq x < \infty\}$
3. $\{ -4; -3; -2; -1\} = \{ x \in \mathbb{Z} \, \mid \,-4 \leq x \leq -1\}$
4. $\{ ...; -4; -3; -2; -1\} = \{ x \in \mathbb{Z} \, \mid \,-\infty < x \leq -1\}$
5. $\{ 2; 4; 6; 8; 10; 12; ...\} = \{ x \in \mathbb{N} \, \mid \, x \text{ est pair}\}$
6. $\{ 2; 3; 5; 7; 11; 13; 17; ...\} = \{ x \in \mathbb{N} \, \mid \, x \text{ est un nombre premier}\}$
7. $\{ 1; 2; 3; 6\} = \{ x \in \mathbb{N} \, \mid \, x \text{ est un diviseur de 6}\}$
8. $\{ 1; 4; 9; 16; 25; \dots\} = \{ x \in \mathbb{Z} \, \mid \, x \text{ est un carré}\}$
9. $[4; 9] = \{ x \in \mathbb{R} \, \mid \,4 \leq x \leq 9\}$
10. $]-1; 6[ = \{ x \in \mathbb{R} \, \mid \,-1 < x < 6\}$
11. $[-7; -2[ = \{ x \in \mathbb{R} \, \mid \,-7 \leq x < -2\}$
12. $]0; 7] = \{ x \in \mathbb{R} \, \mid \,0 < x \leq 7\}$
```

### Exercice {num2}`exercice`

Soient les ensembles $A = \{1;2;3;4;5;6;7;8\}$, $B = \{1;3;5;7\}$ et $C = \{2;4;8;12\}$.

{.lower-alpha-paren}
1.  Énumérez les ensembles suivants.

    {.decimal-paren .columns-3}
    1.  $A\cup C$
    2. $A \setminus B$
    3. $A \cap B$
    4.  $C \cap B$
    5. $C \cup B$
    6.  $C \setminus A$

2.  Répondez par vrai ou faux.

    {.decimal-paren .columns-2}
    1. $C \subset A$
    2. $B \subset A$

```{block} solution
{.lower-alpha-paren}
1.  {.decimal-paren .columns-2}
    1. $A \cup C=\{1;2;3;4;5;6;7;8;12\}$
    2. $A\setminus B=\{2;4;6;8\}$
    3. $ A \cap B=\{1;3;5;7\}$
    4. $C \cap B= \varnothing$
    5.  $C \cup B=\{1;2;3;4;5;7;8;12\}$
    6. $C\setminus A=\{12\}$

2.  {.decimal-paren .columns-2}
    1. Faux
    2. Vrai
```

### Exercice {num2}`exercice`

Soient $D_n$ l'ensemble des diviseurs de $n$ et $M_n$ l'ensemble des multiples
de $n$. Énumérez les ensembles suivants (définis en extension).

{.lower-alpha-paren .columns-4}
1. $D_{12} \cap D_{18}$
2. $D_{30} \setminus D_{15}$
3. $M_2 \cap M_4$
4. $M_6 \setminus M_9$
5. $D_{10} \cup D_{35}$
6. $M_3 \cup M_6$
7. $D_{24} \cap M_3$
8. $M_3 \setminus D_{36}$

```{block} solution
{.lower-alpha-paren .columns-2}
1. $D_{12} \cap D_{18} = \{ 1; 2; 3; 6\}$
2. $D_{30} \setminus D_{15} = \{ 2; 6; 10; 30\}$
3. $M_2 \cap M_4 = \{ 4; 8 ; 12; 16; 20; \dots\}$
4. $M_6 \setminus M_9 = \{ 6; 12; 24; 30; 42; 48; \dots\}$
5. $D_{10} \cup D_{35} = \{ 1; 2; 5; 7; 10: 35\}$
6. $M_3 \cup M_6 = \{ 3; 6; 9; 12; 15; \dots\}$
7. $D_{24} \cap M_3 = \{ 3; 6; 12; 24;\}$
8. $M_3 \setminus D_{36} = \{ 15; 21; 24; 27; 30; 33; 39; \dots\}$
```

### Exercice {num2}`exercice`

Écrivez comme un seul intervalle les ensembles suivants.

{.lower-alpha-paren .columns-3}
1. $[2; 15] \cup [8; 20]$
2. $[2; 15] \cap [8; 20]$
3. $[1; 7[ \cup ]0; 8]$
4. $[1; 7[ \cap ]0; 8]$
5. $[7; 14[ \cap [14; 16]$
6. $[7; 14[ \cup [14; 16]$
7. $[7; 14[ \setminus [13; 16]$
8. $]-\infty; 6[ \cap ]-2; 7]$
9. $\mathbb{R} \setminus ]-5; \infty[$

```{block} solution
{.lower-alpha-paren .columns-5}
1. $[2; 20]$
2. $[8; 15]$
3. $]0; 8]$
4. $[1; 7[$
5. $\varnothing$
6. $[7; 16]$
7. $[7; 13[$
8. $]-2; 6[$
9. $]-\infty; -5]$
```

### Exercice {num2}`exercice`

Écrivez les ensembles suivants sous forme (de réunion) d'intervalles.

{.lower-alpha-paren .columns-2}
1. $[-10; 10] \setminus [0; 5]$
1. $[0; 19] \setminus ]6; 12[$
1. $[-5; 5] \setminus [-1; 8]$
1. $[12; 25[ \setminus [15; 20[$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $[-10; 0[ \cup ]5; 10]$
2. $[0; 6] \cup [12; 19]$
3. $[-5; -1[$
4. $[12; 15[ \cup [20; 25[$
```

### Exercice {num2}`exercice`

Soient $A$, $B$ et $C$ des sous-ensembles de l'ensemble $M$. Représentez les
ensembles suivants au moyen d'un diagramme de Venn (un diagramme différent pour
chaque exercice).

{.lower-alpha-paren .columns-3}
1. $A \cup (B \cap C)$
2. $A \setminus (B \cap C)$
3. $A \cap (B \cup C)$
4. $\overline{B}$
5. $(B \setminus C) \setminus A$
6. $\overline{A \cap B}$

````{block} solution
{.columns-3 .lower-alpha-paren}
1.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#ddd', '#fff', '#fff', '#ddd', '#ddd', '#ddd', '#ddd'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
2.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#ddd', '#fff', '#fff', '#ddd', '#ddd', '#fff', '#fff'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
3.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#fff', '#fff', '#fff', '#ddd', '#ddd', '#fff', '#ddd'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
4.  ```{chartjs} venn
    data: {
      labels: ['B'],
      datasets: [{data: [{}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888', backgroundColor: '#fff',
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        background: {color: '#ddd'},
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
5.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#fff', '#ddd', '#fff', '#fff', '#fff', '#fff', '#fff'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
6.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#ddd', '#ddd', '#ddd', '#fff', '#ddd', '#ddd', '#fff'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        background: {color: '#ddd'},
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
````

### Exercice {num2}`exercice`

Écrivez les ensembles suivants à l'aide des opérations sur les ensembles.

{.columns-2 .lower-alpha-paren}
1.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1, borderColor: '#888',
      backgroundColor: ['#ddd', '#ddd', '#ddd'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
2.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1,
      borderColor: '#888',
      backgroundColor: ['#fff', '#ddd', '#ddd', '#fff', '#fff', '#ddd', '#fff'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
3.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1,
      borderColor: '#888',
      backgroundColor: ['#fff', '#fff', '#fff', '#ddd', '#fff', '#fff', '#fff'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```
4.  ```{chartjs} venn
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
    },
    options: {
      borderWidth: 1,
      borderColor: '#888',
      backgroundColor: ['#fff', '#ddd', '#fff', '#ddd', '#ddd', '#fff', '#ddd'],
      hover: {mode: ''},
      scales: {
        x: {ticks: {font: {size: 12}}},
        y: {ticks: {font: {size: 16}}},
      },
      plugins: {
        tooltip: false,
        legend: {display: false},
      },
    },
    ```

```{block} solution
{.lower-alpha-paren .columns-4}
1. $A \cup B \cup C$
2. $(B \cup C) \setminus A$
3. $(A \cap B) \setminus C$
4. $(B \setminus C) \cup (A \cap C)$
```

### Exercice {num2}`exercice`

Dans un hôpital, il y a 200 patients. 50 ont des problèmes respiratoires, 60 des
problèmes cardiaques et 30 du rhumatisme. 15 patients ont des problèmes
cardiaques et respiratoires, 10 patients ont du rhumatisme et des problèmes
cardiaques. Parmi les patients avec du rhumatisme, 5 ont aussi un problème
respiratoire. Aucune personne ne souffre des trois maladies. Résolvez le
problème suivant à l'aide d'un diagramme de Venn et répondez aux questions
suivantes.

{.lower-alpha-paren}
1. Combien de patients n'ont qu'une seule maladie? Laquelle?
2. Combien de patients sont dans cet hôpital pour d'autres raisons?

```{block} solution
{.lower-alpha-paren}
1.  Il y a 35 patients avec que des problèmes cardiaques, 30 patients avec que
    des problèmes respiratoires et 15 avec que du rhumatisme.
2.  90 patients sont dans cet hôpital pour d'autres maladies.
```

### Exercice {num2}`exercice`

Lors d'une étude sur les voyages des collégiens en Europe, 363 élèves ont été
interrogés sur leurs voyages en Espagne, en Angleterre et en Italie.

180 élèves ont séjourné en Espagne, 192 en Angleterre et 199 en Italie. 103
élèves ont au moins séjourné en Espagne et en Angleterre, 105 au moins en Italie
et en Angleterre et 123 au moins en Italie et en Espagne. 73 élèves ont déjà
séjourné dans les 3 pays. Résolvez le problème suivant à l'aide d'un diagramme
de Venn et répondez aux questions suivantes.

{.lower-alpha-paren}
1. Combien d'élèves ont séjourné uniquement en Espagne?
2. Combien d'élèves ont séjourné uniquement en Italie et en Angleterre?
3. Combien d'élèves n'ont séjourné dans aucun de ces 3 pays.

```{block} solution
{.lower-alpha-paren}
1. 27 élèves ont séjourné uniquement en Espagne.
2. 32 élèves ont séjourné uniquement en Italie et en Angleterre.
3. 50 élèves n'ont séjourné dans aucun de ces 3 pays.
```

### Exercice {num2}`exercice`

Dans une classe de 28 élèves, 12 élèves ont un chat, 11 élèves ont un chien et 6
élèves ont des poissons. 3 élèves ont au moins un chien et un chat. Aucun élève
n'a qu'un chat et des poissons. 1 seul élève a un chat, un chien et des poissons.
5 élèves n'ont aucun des trois animaux.

{.lower-alpha-paren}
1. Combien d'élèves n'ont qu'un chat?
2. Combien d'élèves ont qu'un chien et des poissons?
3. Combien d'élèves n'ont qu'un chien?

```{block} solution
{.lower-alpha-paren}
1. 9 élèves n'ont qu'un chat.
2. 2 élèves n'ont qu'un chien et des poissons.
3. 6 élèves n'ont qu'un chien.
```

### Challenge

Lors d'une exposition, des bijoux ont été volés. La police interroge 18
personnes et pose deux questions auxquelles les personnes doivent répondre par
"Oui" ou par "Non". Les questions sont:

1. Avez-vous entendu du verre se casser?
2. Avez-vous vu fuir quelqu'un ?

Dix personnes ont répondu "Oui" à la première question, six personnes ont
répondu "Non" à la deuxième question et 5 personnes ont répondu "Non" aux deux
questions.

Dessinez un diagramme de Venn qui illustre cette situation et déterminez
combien de personnes ont répondu "Oui" aux deux questions.

````{solution}
```{chartjs} venn
:style: width: 30%;
data: {
  labels: ['Q1', 'Q2'],
  datasets: [{data: [{value: '1'}, {value: '3'}, {value: '9'}]}],
},
options: {
  borderWidth: 1, borderColor: '#888', backgroundColor: '#fff',
  hover: {mode: ''},
  scales: {
    x: {ticks: {font: {size: 12}}},
    y: {ticks: {font: {size: 16}}},
  },
  plugins: {
    tooltip: false,
    legend: {display: false},
  },
},
```
9 personnes ont répondu "oui" aux deux questions.
````

## Solutions

```{blocks} solution
:class: allow-break-inside
```
