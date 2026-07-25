% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Quiz ensembles

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
scripts:
  - src: chart.js
    type: module
```

## Exercice {nump}`exercice`

```{defaults} chartjs
:style: aspect-ratio: 1; width: 50%;
```

``````{tab-set}
:sync-group: question
`````{tab-item} Question 1
:sync: 1
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['xx1', '11x'],
```
````{solution}
```{math}
:class: align-center
(A \cap B) \cup C
````
`````
`````{tab-item} Question 2
:sync: 2
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
(A \setminus B) \cap C
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['101'],
```
````
`````
`````{tab-item} Question 3
:sync: 3
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['11x', '1x1'],
```
````{solution}
```{math}
:class: align-center
(A \cap B) \cup (A \cap C)
````
`````
`````{tab-item} Question 4
:sync: 4
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
A \cap (B \cup C)
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['11x', '1x1'],
```
````
`````
`````{tab-item} Question 5
:sync: 5
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['xx0'],
```
````{solution}
```{math}
:class: align-center
\overline{C}
````
`````
`````{tab-item} Question 6
:sync: 6
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
B \setminus (A \cap C)
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['010', '110', '011'],
```
````
`````
`````{tab-item} Question 7
:sync: 7
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['000', '111'],
```
````{solution}
```{math}
:class: align-center
\overline{A \cup B \cup C} \cup (A \cap B \cap C)
````
`````
`````{tab-item} Question 8
:sync: 8
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
A \setminus (B \cup C)
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['100'],
```
````
`````
`````{tab-item} Question 9
:sync: 9
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['110', '101', '011'],
```
````{solution}
```{math}
:class: align-center
(A \cap B) \cup (A \cap C) \cup (B \cap C) \setminus (A \cap B \cap C)
````
`````
`````{tab-item} Question 10
:sync: 10
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
\overline{A} \cap B
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['0x1'],
```
````
`````
`````{tab-item} Question 11
:sync: 11
Notez la partie grisée à l'aide des opérations sur les ensembles.
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['10x', '01x', '00x'],
```
````{solution}
```{math}
:class: align-center
\overline{A \cap B}
```
````
`````
`````{tab-item} Question 12
:sync: 12
Représentez l'ensemble suivant à l'aide d'un diagramme de Venn.

```{math}
:class: align-center
(A \cup B \cup C) \setminus (A \cap B) \setminus (A \cap C) \setminus (B \cap C)
```

````{solution}
```{chartjs} vennOperations
labels: ['A', 'B', 'C'],
areas: ['100', '010', '001'],
```
````
`````
``````
