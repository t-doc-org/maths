% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 Nicolas Martignoni
% Copyright 2025 David Rueda
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Indicateurs de position

```{metadata}
subject: "Mathématiques 2e année"
```

{.allow-break}
## Indicateurs de tendance centrale

### Moyenne arithmétique

````{admonition} Définition
:class: note
La **moyenne arithmétique** d'une variable statistique discrète d'effectif $N$
avec $k$ modalités est définie par

```{math}
:class: align-center
\mu = \dfrac{n_1x_1 + n_2x_2 + \cdots + n_kx_k}{N} = \dfrac{\displaystyle{\sum_{i=1}^k n_i x_i}}{N}
```

Pour une variable statistique continue, la moyenne arithmétique se calcule de
manière identique, en supposant que toutes les données sont situées au centre de
la classe.
````

### Médiane

````{admonition} Définition
:class: note
La **médiane** d'une variable statistique discrète est la première modalité dont
la fréquence cumulée est plus grande ou égale à $\dfrac{1}{2}$. Elle est notée
$M$.

La **classe médiane** d'une variable statistique continue est la première classe
dont la fréquence cumulée est plus grande ou égale à $\dfrac{1}{2}$.
En utilisant les notations établies au [chapitre précédent](#notation), la
médiane est donnée alors par
```{math}
:class: align-center
M = b_{i-1} + L_i \cdot \dfrac{\frac{1}{2} - F_{i-1}}{F_i - F_{i-1}} = b_{i-1} + L_i \cdot \dfrac{\frac{1}{2} - F_{i-1}}{f_i}.
```
````

La médiane sépare la population en deux groupes: $50\%$ de la population est
au-dessous de la médiane et $50\%$ en dessus.

#### Exemple {num2}`exemple`

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
    $$\mu &= \dfrac{3+4.5+4+3.5+5+6+6+4+4.5+5+5+4+4.5+5.5+5+6+5.5+4.5+2+4.5+
    5.5+4+4+4+4.5+5.5+4+5+3+5}{30}\\
     &= \dfrac{136.5}{30} = 4.55$$

    Pour déterminer la médiane, il faut
    - ordonner l'échantillon
    - trouver la valeur qui se trouve au milieu de l'échantillon. Soit $N$ la
      taille de l'échantillon:
      - si $N$ est impair, $M = x_{\frac{N+1}{2}}$
      - si $N$ est pair, $M = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2}$

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
    $N = 30 \implies M = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2} = \dfrac{x_{15} + x_{16}}{2} = \dfrac{4.5 + 4.5}{2} =4.5$

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

    $$\mu = \dfrac{2 \cdot 1 + 2.5 \cdot 0 + 3 \cdot 2 + 3.5 \cdot 1 + 4 \cdot 7 + 4.5 \cdot 6 + 5 \cdot 6 + 5.5 \cdot 4 + 6 \cdot 3}{30} = \dfrac{136.5}{30} = 4.55$$

    Pour déterminer la médiane, il faut trouver la première valeur pour laquelle
    la fréquence cumulée dépasse $\dfrac{1}{2}$.

    $F_6 \geq \dfrac{1}{2}$, la médiane vaut $M = 4.5$.

Dans le cas d'une variable statistique discrète, ces deux méthodes donnent les
mêmes résultats.

#### Exemple {num2}`exemple`

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

{.lower-alpha-paren}
1.  En utilisant les données brutes ci-dessus, le calcul de la moyenne et la
    médiane sont les suivants:

    Moyenne:
    ```{math}
    \mu &= \dfrac{46+49+51+53+55+55+55+57+58+58+58+60+60+60+60+60+61+61+61+61+61+61+61+61+61+61+61+61+
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

    $N = 140 \implies M = \dfrac{x_{\frac{N}{2}} + x_{\frac{N}{2}+1}}{2} = \dfrac{x_{70} + x_{71}}{2} = \dfrac{67 + 67}{2}=67$.

2.  En utilisant les données représentées dans le tableau des effectifs cumulés.

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
    \rowcolor{red}\left[ 65 ; 70 \right[ & 67.5 & 48 & 0.343 & 0.664 \\
    \left[ 70 ; 75 \right[ & 72.5 & 27 & 0.193 & 0.857 \\
    \left[ 75 ; 80 \right[ & 77.5 & 13 & 0.093 & 0.950 \\
    \left[ 80 ; 85 \right[ & 82.5 & 3  & 0.021 & 0.971 \\
    \left[ 85 ; 90 \right[ & 87.5 & 4  & 0.029 & 1.000 \\
    \hline
     \text{Total} & & 140 & 1 &  \\
    \hline
    \end{array}
    ```
    Moyenne:

    $$\mu &= \dfrac{47.5 \cdot 2 + 52.5 \cdot 2 + 57.5 \cdot 7 + 62.5 \cdot 34 + 67.5 \cdot 48 + 72.5 \cdot 27 + 77.5 \cdot 13 + 82.5 \cdot 3 + 87.5 \cdot 4}{140} \\
    &= \dfrac{9530}{140} = 68.07$$

    Mediane:

    La classe médiane est $[65;70[$, car $F_4 = 0.321 \leq \dfrac{1}{2}$ et
    $F_5 = 0.664 \geq \dfrac{1}{2}$.

    $$M = b_{4} + L_5 \cdot \dfrac{\frac{1}{2} - F_{4}}{F_5 - F_{4}} = 65 + 5 \cdot \dfrac{\frac{1}{2} - 0.321}{0.664 - 0.321} = 67.6$$

Dans le cas d'une variable statistique continue, ces deux méthodes ne donnent
pas les mêmes résultats. Les données stockées sous forme de classe perdent en
précision.


### Comparaison des indicateurs de tendance centrale

**Moyenne:**

- L'indicateur de tendance centrale le plus connu.
- La plus coûteuse à calculer, même si la formule est simple à exprimer.
- Très influencée par les valeurs extrêmes ou aberrantes.
- Peu influencée par le choix des classes.
- Très stable, c'est-à-dire qu'elle varie peu selon l'échantillon choisi de la
  population.
- L'indicateur de tendance centrale le plus utilisé.

**Médiane:**

- Issue d'une conception simple de la notion de centre.
- Détermination un peu plus compliquée.
- Peu influencée par les valeurs extrêmes ou aberrantes de la distribution.
- Peu influencée par le choix des classes.
- Assez stable, mais moins que la moyenne arithmétique.
- Moins utilisée que la moyenne.

## Quantiles

```{admonition} Définition
:class: note
Les **quantiles** sont les valeurs qui divisent une variable statistique en
intervalles de mêmes fréquences.

Si $n$ est le nombre de ces intervalles, l'**ordre** du quantile est l'inverse
$\dfrac{1}{n}$ de ce nombre.
```

````{admonition} Marche à suivre
:class: note
**Cas discret:**

Le $k$-ième quantile d'ordre $p$ est la première modalité dont la fréquence
cumulée est plus grande ou égale à $k \cdot p$.

**Cas continu:**

- Trouvez la classe qui contient le quantile. La classe
  $\left[b_{i-1} ; b_i \right[$ contenant le $k$-ième quantile d'ordre $p$ est
  la première classe dont la fréquence cumulée est plus grande ou égale à
  $k \cdot p$.
- Calculez $X_{kp}$:<br>
  ```{math}
  :class: align-center
  X_{kp} = b_{i-1} + L_i \cdot \frac{kp - F_{i-1}}{F_i - F_{i-1}} = b_{i-1} + L_i \cdot \frac{kp - F_{i-1}}{f_i}.
  ```
````
