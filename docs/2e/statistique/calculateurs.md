% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Calculateurs
```{metadata}
subject: "Mathématiques 2e année"
```

Calculer la moyenne, la médiane, la variance ou l'écart type à la main devient
vite long et fastidieux sur de grands ensembles de données. Pour gagner en
efficacité et éviter les erreurs, nous allons apprendre à automatiser ces
calculs avec Python.

## Calcul de la moyenne

Pour calculer la moyenne d'un échantillon d'une variable quantitative, il faut
faire la somme de tous les éléments et diviser par le nombre total d'éléments.

Les valeurs de l'échantillon sont stockées dans une liste.

```{exec} python
:name: notes
:when: never
notes = [3, 4.5, 4, 3.5, 5, 6, 6, 4, 4.5, 5, 5, 4, 4.5, 5.5, 5, 6, 5.5, 4.5, 2, 4.5, 5.5, 4, 4, 4, 4.5, 5.5, 4, 5, 3, 5]
```

```{exec} python
:editor: ab5101ec-eb25-427a-b4d5-faf5aab20370
:name: moyenne
:after: notes
:reset: hide
# Écrivez une fonction qui permet de calculez la moyenne des valeurs d'une liste passée en paramètre
```

````{solution}
```{exec} python
:editor:
:after: notes
#def moyenne(liste):
#  return sum(liste)/len(liste)

def moyenne(liste):
  somme = 0
  for n in liste:
    somme += n
  moy = somme / len(liste)
  return moy

print(moyenne(notes))
```
````

## Calcul de la médiane

Pour calculer la médiane, il faut ordonner l'échantillon. Si l'échantillon a un
nombre impair d'élément, il faut prendre l'élément qui se trouve au milieu,
sinon il faut faire la moyenne des deux éléments centraux.

```{exec} python
:editor: d34b350f-6de6-4795-a392-cca7d8e670d4
:name: mediane
:after: moyenne
:reset: hide
# Écrivez une fonction qui permet de calculez la médiane des valeurs d'une liste passée en paramètre
```

````{solution}
```{exec} python
:editor:
:after: notes
from math import *

def mediane(liste):
  liste.sort()
  N = len(liste)
  if N % 2:
    med = (liste[N/2-1] + liste[N/2])/2
  else:
    med = liste[N//2]
  return med

print(mediane(notes))
```
````

## Calcul de la variance

Pour calculer la variance, il faut d'abord calculer la moyenne.

La variance d'un échantillon se calcule en effectuant la somme pour chaque
élément du carré de sa différence par rapport à la moyenne, le tout divisé par
le nombre total d'éléments.


```{exec} python
:editor: 88cdf485-e6cd-4f2c-b55b-1d77fcf32c00
:name: variance
:after: mediane
:reset: hide
# Écrivez une fonction qui permet de calculez la variance des valeurs d'une liste passée en paramètre
```

````{solution}
```{exec} python
:editor:
:after: variance
def variance(liste):
  somme = 0
  m = moyenne(liste)
  for i in liste:
    somme += (i - m)**2
  v = somme / len(liste)
  return v

print(variance(notes))
```
````

## Calcul de l'écart type

Pour calculer l'écart type, il faut prendre la racine carrée de la variance.

```{exec} python
:editor: 6480c235-7517-4a9f-83fe-7b25faeaba0c
:name: ecart-type
:after: variance
:reset: hide
# Écrivez une fonction qui permet de calculez l'écart type des valeurs d'une liste passée en paramètre
```

````{solution}
```{exec} python
:editor:
:after: variance
from math import *

def ecart_type(liste):
  return sqrt(variance(liste))

print(ecart_type(notes))
```
````

## Exercices

### Exercice {num2}`exercice`

Aide pour résoudre l'{numref}`exercice %s<exercice:notes>`.

{.lower-alpha-paren}
1.  Calculez la moyenne et la médiane des notes de la classe 1.
2.  Calculez la moyenne et la médiane des notes de la classe 2.

```{exec} python
:editor: 89b71e77-9b17-4439-99e4-d43fe1959255
:after: ecart-type
notes_1 = [2.5, 2.5, 2.5, 2.5, 2.5, 3, 3, 3, 3, 3, 3, 3.5, 3.5,
           3.5, 3.5, 4, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 6, 6]

notes_2 = [6, 6, 6, 6, 6, 6, 5, 5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4, 3.5,
          3.5, 3.5, 3.5, 3, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2.5]

# Appelez la fonction moyenne et la fonction mediane pour chaque ensemble de notes.
```

### Exercice {num2}`exercice`

Aide pour résoudre l'{numref}`exercice %s<exercice:course>`.

Calculez la moyenne et la médiane des temps obtenus.

```{exec} python
:editor: 90e782a3-89d4-43d0-9351-0bfbb7f0dd50
:after: ecart-type
temps = [152, 153, 175, 175, 175, 180, 185, 185, 188, 188, 190, 190, 190,
        191, 194, 194, 195, 197, 199, 200, 200, 200, 200, 208, 208, 208,
        210, 215, 215, 215, 215, 217, 217, 217, 218, 218, 218, 220, 220,
        222, 228, 235, 245, 245, 245, 252, 253, 260, 260, 260, 261, 265,
        265, 268, 278, 292, 292, 292]

# Appelez la fonction moyenne et la fonction mediane pour les temps obtenus
```

### Exercice {num2}`exercice`

Aide pour résoudre l'{numref}`exercice %s<exercice:notes2>`.

{.lower-alpha-paren}
1.  Calculez la variance et l'écart-type des notes de la classe 1.
2.  Calculez la variance et l'écart-type des notes de la classe 2.

```{exec} python
:editor: e9cd32ae-99a3-4905-991f-f26f9907f984
:after: ecart-type
notes_1 = [2.5, 2.5, 2.5, 2.5, 2.5, 3, 3, 3, 3, 3, 3, 3.5, 3.5,
           3.5, 3.5, 4, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 6, 6]

notes_2 = [6, 6, 6, 6, 6, 6, 5, 5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4, 3.5,
          3.5, 3.5, 3.5, 3, 3, 3, 3, 2.5, 2.5, 2.5, 2.5, 2.5]

# Appelez la fonction variance et la fonction ecart-type pour chaque ensemble de notes.
```

### Exercice {num2}`exercice`

Aide pour résoudre l'{numref}`exercice %s<exercice:course2>`.

Calculez la variance et l'écart-type des temps obtenus.

```{exec} python
:editor: da544bb0-f16e-4fbf-bf5b-6c39af48c5d5
:after: ecart-type
temps = [152, 153, 175, 175, 175, 180, 185, 185, 188, 188, 190, 190, 190,
        191, 194, 194, 195, 197, 199, 200, 200, 200, 200, 208, 208, 208,
        210, 215, 215, 215, 215, 217, 217, 217, 218, 218, 218, 220, 220,
        222, 228, 235, 245, 245, 245, 252, 253, 260, 260, 260, 261, 265,
        265, 268, 278, 292, 292, 292]

# Appelez la fonction variance et la fonction écart-type pour les temps obtenus
```

### Exercice {num2}`exercice`

Aide pour résoudre l'{numref}`exercice %s<exercice:desintegration>`.

Calculez la médiane, la variance et l'écart-type du nombre de désintégrations.

```{exec} python
:editor: 8a33dced-00fe-4a71-b4c1-b31bb8b1a3df
:after: ecart-type
nb = [275, 283, 284, 284, 286, 287, 287, 289, 292, 292, 293, 295, 296,
     298, 303, 303, 304, 305, 309, 309, 310, 310, 313, 313, 314, 315,
     320, 324, 329, 329]

# Appelez la fonction médiane, la fonction variance et la fonction écart-type pour le nombre de désintégrations
```
