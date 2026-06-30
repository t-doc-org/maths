% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Ensembles

```{metadata}
subject: "Mathématiques 1re année"
```

```{admonition} Définition
:class: note
Un **ensemble** $E$ est une collection d'objets. Ces objets sont appelés
**éléments** de l'ensemble $E$ et ne peuvent figurer qu'une seule fois dans
l'ensemble.

Si $x$ appartient à $E$, nous notons $x \in E$.

Si par contre $x$ n'est pas un élément de $E$, nous notons $x \notin E$.
```

````{container} frame noprint
## Exemple {num2}`exemple`

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
## Exemple {num2}`exemple`

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
## Exemple {num2}`exemple`

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
## Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  $[-3;10]$ représente l'ensemble des nombres de $-3$ compris à $10$ compris.
2.  $]0;7]$ représente l'ensemble des nombres de $0$ non compris à $7$ compris.
3.  $]-10;-4[$ représente l'ensemble des nombres de $-10$ non compris à $-4$ non
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
## Exemple {num2}`exemple`

{.lower-alpha-paren}
1.  L'ensemble des élèves de la classe est un sous-ensemble de l'ensemble des
    élèves du collège.
2.  L'ensemble des nombres pairs est un sous-ensemble de l'ensemble de tous les
    nombres.
````

## Quelques remarques

-   L'ordre dans lequel les éléments d'un ensemble sont énumérés ne joue aucun
    rôle.
-   Un élément ne peut figurer qu'une seule fois dans un ensemble.
-   L'ensemble vide est un sous-ensemble de tout ensemble.
-   Un ensemble est toujours sous-ensemble de lui-même.
-   Les accolades sont réservées pour décrire les ensembles.


```{admonition} Définition
:class: note
Soit $a, b \in \mathbb{R}$ tels que $a < b$. Les **intervalles d'extrémités a et
b** sont les sous-ensembles suivants de $\mathbb{R}$:

{.lower-alpha-paren}
1. **Intervalle fermé**: $[a;b]=\{x \in \mathbb{R} \, \mid \, a \leq x \leq b\}$<br>
L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ et $b$ compris.
2. **Intervalle ouvert**: $]a;b[=\{x \in \mathbb{R} \, \mid \, a < x < b\}$<br>
L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ et $b$ non compris.
3. **Intervalles semi-ouverts**:<br>
    - $[a;b[=\{x \in \mathbb{R} \, \mid \, a \leq x < b\}$ (intervalle fermé à gauche)<br>
    L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ compris et $b$ non compris.
    - $]a;b]=\{x \in \mathbb{R} \, \mid \, a < x \leq b\}$ (intervalle fermé à droite)<br>
    L'ensemble de tous les nombres réels entre $a$ et $b$ avec $a$ non compris et $b$ compris.

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
  ```{chartjs} chart
  :style: border: 1px solid var(--pst-color-border); border-radius: 0.25rem;
  type: 'venn',
  data: {
    labels: ['A', 'B', 'A ∩ B'],
    datasets: [{
      data: [
        {sets: ['A'], value: ''},
        {sets: ['B'], value: ''},
        {sets: ['A', 'B'], value: 'A ∩ B'},
      ],
    }],
  },
  options: {
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: ['#fff', '#fff', '#0002'],
    hoverBackgroundColor: ['#fff', '#fff', '#0002'],
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
  ```{chartjs} chart
  :style: border: 1px solid var(--pst-color-border); border-radius: 0.25rem;
  type: 'venn',
  data: {
    labels: ['A', 'B', 'A ∪ B'],
    datasets: [{
      data: [
        {sets: ['A'], value: ''},
        {sets: ['B'], value: ''},
        {sets: ['A', 'B'], value: 'A ∪ B'},
      ],
    }],
  },
  options: {
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#0002',
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },

- # $A \setminus B$
  ```{chartjs} chart
  :style: border: 1px solid var(--pst-color-border); border-radius: 0.25rem;
  type: 'venn',
  data: {
    labels: ['A', 'B', 'A \\ B'],
    datasets: [{
      data: [
        {sets: ['A'], value: 'A \\ B'},
        {sets: ['B'], value: ''},
        {sets: ['A', 'B'], value: ''},
      ],
    }],
  },
  options: {
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: ['#0002', '#fff', '#fff'],
    hoverBackgroundColor: ['#0002', '#fff', '#fff'],
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },

- # $\overline{A}$
  ```{chartjs} chart
  :style: |
  : border: 1px solid var(--pst-color-border); border-radius: 0.25rem;
  : background-color: rgba(0, 0, 0, 0.13);
  type: 'venn',
  data: {
    labels: ['A\u0305'],
    datasets: [{
      data: [
        {sets: ['A'], value: ''},
      ],
    }],
  },
  options: {
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#fff',
    hoverBackgroundColor: '#fff',
    scales: {
      x: {ticks: {font: {size: 12}}},
      y: {ticks: {font: {size: 16}}},
    },
    plugins: {
      tooltip: false,
      legend: {display: false},
    },
  },

````
