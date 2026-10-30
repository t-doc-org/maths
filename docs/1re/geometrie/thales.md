% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

# Théorème de Thalès

```{container} frame noprint instructor
{xopp}`Corrigés détaillés <corriges/thales.xopp>`
```

## Théorie


`````{admonition} Théorème de Thalès
:class: note
Soit deux droites $g$ et $h$ qui se coupent en un point $S$. Soit deux
droites parallèles $a$ et $b$ qui coupent $h$ et $g$ en $A_1$ et $A_2$,
respectivement $B_1$ et $B_2$.

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # Première construction
  ```{figure} images/thales1.png
  :width: 80%

  ```
- # Deuxième construction
  ```{figure} images/thales2.png
  :width: 90%
  ```
````

{.lower-alpha-paren}
1.  Premier énoncé:
    ```{math}
    :class: align-center
    \frac{SA_1}{SB_1} = \frac{SA_2}{SB_2} = \frac{A_1A_2}{B_1B_2}
    ```

2.  Deuxième énoncé:
    ```{math}
    :class: align-center
    \frac{SA_1}{A_1B_1} = \frac{SA_2}{A_2B_2}
    ```
`````

````{container} frame noprint
# Exemple {num2}`exemple`

Dans la figure ci-dessous $CA$ est parallèle à $DB$. Les longueurs suivantes
sont données: $SC=3 \text{ cm}$, $CA=2.5 \text{ cm}$, $DB=4 \text{ cm}$ et
$AB=2 \text{ cm}$.<br>
Déterminer $CD$ et $SA$.

```{figure} images/thales-exemple.png
:width: 60%
```

Thèorème de Thalès (1er énoncé): $\quad \dfrac{SC}{SD} = \dfrac{SA}{SB} = \dfrac{CA}{DB}$

$\implies \dfrac{3}{SD} = \dfrac{SA}{SB} = \dfrac{2.5}{4} \implies  \dfrac{3}{SD} = \dfrac{2.5}{4} \implies SD = \dfrac{3 \cdot 4}{2.5} = 4.8 \text{ cm}$

$CD = SD - SC = 4.8 -3 = 1.8 \text{ cm}$

Thèorème de Thalès (1e énoncé): $\quad \dfrac{SC}{CD} = \dfrac{SA}{AB}$

$\dfrac{3}{1.8} = \dfrac{SA}{2} \implies SA = \dfrac{2 \cdot 3}{1.8} = 3.\overline{3} \text{ cm}$
````

```{container} frame instructor noprint
-> {numref}`exercice %s<exercice:1-thales-ex1>`,
{numref}`exercice %s<exercice:1-thales-ex2>`,
{numref}`exercice %s<exercice:1-thales-ex3>`,
{numref}`exercice %s<exercice:1-thales-ex4>`,
{numref}`exercice %s<exercice:1-thales-ex5>` et
{numref}`exercice %s<exercice:1-thales-ex6>`
```


## Exercices

### Exercice {num2}`exercice:1-thales-ex1`

Calculez les valeurs manquantes. Les longueurs sont toutes en cm.
Commencez par notez les formules du Théorème de Thalès en fonction des schémas
ci-dessous.


<style>
@media print {
  .table.reset-print.longueur :is(th, td) {
    border-width: 1px;
    padding: 0.1rem;
  }
  .table.reset-print.longueur th {
    border-bottom-width: 2px;
  }
}
a.valign-top {
  display: block;
  margin: 1rem auto;
  text-align: center;
}
img.valign-top {
  vertical-align: top;
}
</style>

{.lower-alpha-paren}
1.  ```{image} images/thales-ex1a.png
    :width: 40%
    :class: valign-top
    ```

    {.reset-print .longueur}
    | $AB$ | $BC$ | $AC$ | $AD$ | $DE$ | $AE$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    |$22.17$ | $20.46$ |  | $12.96$ | | $5.17$ |
    |$98.9$ | $72.4$ | $89.6$ | | $23.72$ |  |
    |$406$ |  | $180$ |  | $145.66$ | $68.28$ |
    || $82.6$ |  | $38.8$ | $45.01$ | $36.67$ |
    |$631$ | | $761$ |  | $310.58$ | $404.02$ |

2.  ```{image} images/thales-ex1b.png
    :width: 40%
    :class: valign-top
    ```

    {.reset-print .longueur}
    | $AB$ | $BC$ | $AC$ | $AD$ | $DE$ | $AE$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    | $74.2$|| $47.8$| $46.79$| $62.11$ |
    | | $16.41$| $10.88$|$10.06$| $8$ |
    | $65.4$| | | $32.8$| $18.16$| $33.2$ |
    | $95$| $72.3$| $37.2$|| | $24.36$ |
    | $95.2$| | $89.4$| | $43.68$| $42.54$ |



```{block} solution
$\dfrac{AD}{AB} = \dfrac{AE}{AC} = \dfrac{DE}{BC}$

{.lower-alpha-paren}
1.  {.reset-print .longueur}
    | $AB$ | $BC$ | $AC$ | $AD$ | $DE$ | $AE$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    || | $8.84$ | | $11.96$ | |
    | |  | | $32.4$ | | $29.36$ |
    || $384$ || $154$ | | |
    |$71.2$| | $67.3$ | | |  |
    | | $585$ | | $335$ | | |

2.  {.reset-print .longueur}
    | $AB$ | $BC$ | $AC$ | $AD$ | $DE$ | $AE$ |
    | :--: | :--: | :--: | :--: | :--: | :--: |
    | $75.8$ | | $98.5$ | | | |
    | $22.32$ | | | | |
    | | $36.2$ | $66.2$ | | | |
    | |  |  | $62.2$| $47.34$ |  |
    | | $91.8$ | | $45.3$ | | |

```

### Exercice {num2}`exercice:1-thales-ex2`

Dans la figure ci-dessous, les longueurs suivantes sont données:
$AB = 2 \text{ cm}$, $AA'=3 \text{ cm}$, $A'B'=3 \text{ cm}$, $SA'=6 \text{ cm}$
et $B'C'=9 \text{ cm}$. Les droites qui coupent les deux demi-droites sont
parallèles.<br>
Déterminer les segments $SA$ et $BC$.

```{figure} images/thales-ex2.png
:width: 50%
```

```{block} solution
$SA=4 \text{ cm}$ et $BC = 6 \text{ cm}$
```

### Exercice {num2}`exercice:1-thales-ex3`

Pour déterminer la largeur $x$ d'une rivière, la construction suivante a été
utilisée. Quelle est la largeur de la rivière?

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{figure} images/thales-riviere.png
    :width: 80%
    ```
-   {.lower-alpha-paren}
    1. Si $a=20 \text{ m}$, $b=10 \text{ m}$, $c=13 \text{ m}$?
    2. Si $a=30 \text{ m}$, $b=5 \text{ m}$, $c=26 \text{ m}$?
````

```{block} solution
{.lower-alpha-paren}
1. La largeur de la rivière est de $18.6 \text{ m}$.
2. La largeur de la rivière est de $32.5 \text{ m}$.
```

### Exercice {num2}`exercice:1-thales-ex4`

En tenant un petit pois d'un diamètre de $6\,mm$ à une distance de $66\,cm$ de
nos yeux, la pleine lune est complètement couverte par le petit pois.<br>
À quelle distance de la terre se trouve la lune si le diamètre de la lune vaut
$3\,476 \text{ km}$?

```{block} solution
La lune se trouve à $382\,360 \text{ km}$ de la terre.
```

### Exercice {num2}`exercice:1-thales-ex5`

````{list-grid}
:style: grid-template-columns: 1fr 1fr;
- Quelle est la longueur $x$ du côté du carré dans la figure ci-contre?

- ```{figure} images/thales-ex5.png
  :width: 80%
  ```
````

```{block} solution
$x$ vaut $2.4 \text{ cm}.$
```

### Exercice {num2}`exercice:1-thales-ex6`

Dans la figure ci-dessous, les longueurs suivantes sont données:<br>
$MN=12\,cm$, $NP=15\,cm$, $RS=6c\,m$, $RM=9c\,m$ et $SN=13\,cm$.<br>
Les segments $RM$, $SN$ et $TP$ sont parallèles.<br>
Déterminer $TP$ et $ST$.

**Indice:** Tracez une droite qui permet d'appliquer le théorème de Thalès.

```{figure} images/thales-ex6.png
:width: 50%
```

```{block} solution
$ST=7.5 \text{ cm}$ et $TP=18 \text{ cm}$
```



## Solutions

```{blocks} solution
:class: allow-break-inside
```

