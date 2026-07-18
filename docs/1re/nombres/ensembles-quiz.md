% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Quiz ensembles

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```
## Exercice {nump}`exercice`

``````{tab-set}
:sync-group: etape
`````{tab-item} Question 1
:sync: question1
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#fff', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd'],
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
````{solution}
```{math}
:class: align-center
(A \cap B) \cup C
````
`````
`````{tab-item} Question 2
:sync: question2
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
(A \setminus B) \cap C
```

````{solution}
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#fff', '#fff', '#fff', '#ddd', '#fff', '#fff'],
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
````
`````
`````{tab-item} Question 3
:sync: question3
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
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
````{solution}
```{math}
:class: align-center
(A \cap B) \cup (A \cap C)
````
`````
`````{tab-item} Question 4
:sync: question4
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
A \cap (B \cup C)
```

````{solution}
```{chartjs} venn
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
````
`````
`````{tab-item} Question 5
:sync: question5
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#ddd', '#ddd', '#fff', '#ddd', '#fff', '#fff', '#fff'],
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
````{solution}
```{math}
:class: align-center
\overline{C}
````
`````
`````{tab-item} Question 6
:sync: question6
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
B \setminus (A \cap C)
```

````{solution}
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#ddd', '#fff', '#ddd', '#fff', '#ddd', '#fff'],
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
````
`````
`````{tab-item} Question 7
:sync: question7
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#ddd'],
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
````{solution}
```{math}
:class: align-center
\overline{A \cup B \cup C} \cup (A \cap B \cap C)
````
`````
`````{tab-item} Question 8
:sync: question8
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
A \setminus (B \cup C)
```

````{solution}
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#ddd', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
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
````
`````
`````{tab-item} Question 9
:sync: question9
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#fff', '#fff', '#ddd', '#ddd', '#ddd', '#fff'],
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
````{solution}
```{math}
:class: align-center
(A \cap B) \cup (A \cap C) \cup (B \cap C) \setminus (A \cap B \cap C)
````
`````
`````{tab-item} Question 10
:sync: question10
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
\overline{A} \cap B
```

````{solution}
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#fff', '#fff', '#ddd', '#fff', '#fff', '#ddd', '#fff'],
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
````
`````
`````{tab-item} Question 11
:sync: question11
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} venn
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
````{solution}
```{math}
:class: align-center
\overline{A \cap B}
```
````
`````
`````{tab-item} Question 12
:sync: question12
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
(A \cup B \cup C) \setminus (A \cap B) \setminus (A \cap C) \setminus (B \cap C)
```

````{solution}
```{chartjs} venn
data: {
  labels: ['A', 'B', 'C'],
  datasets: [{data: [{}, {}, {}, {}, {}, {}, {}]}],
},
options: {
  borderWidth: 1, borderColor: '#888',
  backgroundColor: ['#ddd', '#ddd', '#ddd', '#fff', '#fff', '#fff', '#fff'],
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
````
`````
``````
