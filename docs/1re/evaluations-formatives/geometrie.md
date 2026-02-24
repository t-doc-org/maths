% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Géométrie

```{metadata}
subject: "Mathématiques 1re année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} ../../entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin. Calculatrice non
autorisée.**
```
---

## Question {nump}`question`{points}`5`

Répondez aux questions suivantes le plus précisément possible:

{.lower-alpha-paren}
1.  Complétez par le vocabulaire adéquat:\
    Les deux droites BC et DE sont parallèles.
    ```{figure} images/thales.png
    :width: 30%
    :align: center
    ```
    Les angles $\alpha$ et $\beta$ sont isométriques, car ils sont {leader}`.`

    Les angles $\gamma$ et $\delta$ sont isométriques, car ils sont {leader}`.`
2.  Énoncez le théorème de Thalès (les 3 rapports) en fonction de l'image ci-dessus.
3.  Notez la définition générale des trois rapports trigonométriques.

```{solution}
{.lower-alpha-paren}
1.  alternes-internes / opposés par le sommet
2.  $\dfrac{\overline{AD}}{\overline{AB}}=\dfrac{\overline{AE}}{\overline{AC}}=\dfrac{\overline{DE}}{\overline{BC}}$ ou
    $\dfrac{\overline{AB}}{\overline{AD}}=\dfrac{\overline{AC}}{\overline{AE}}=\dfrac{\overline{BC}}{\overline{DE}}$
3.  $\sin(\dots) = \dfrac{\text{opp}}{\text{hyp}} \qquad\qquad$
    $\cos(\dots) = \dfrac{\text{adj}}{\text{hyp}} \qquad\qquad$
    $\tan(\dots) = \dfrac{\text{opp}}{\text{adj}}$
```

## Question {nump}`question`{points}`4`

Soit le triangle $ABC$ rectangle en $A$ et $\overline{AH}$ la hauteur.
```{figure} images/thmmetrique.png
:width: 30%
:align: center
```

{.lower-alpha-paren}
1. Énoncez le théorème de la hauteur en fonction du schéma ci-dessus.
2. Énoncez le théorème d'Euclide en fonction du schéma ci-dessus.
3. Sachant que $\overline{BH} = 4\,cm$ et $\overline{BC} = 8\,cm$, calculez $\overline{AB}$.
4. Sachant que $\overline{BH} = 2\,cm$ et $\overline{AH} = 6\,cm$, calculez $\overline{BC}$.

```{solution}
{.lower-alpha-paren}
1.  $\overline{AH}^2 = \overline{BH} \cdot \overline{HC}$
2.  $\overline{AB}^2 = \overline{BH} \cdot \overline{BC}$ et $\overline{AC}^2 = \overline{HC} \cdot \overline{BC}$
3.  $\overline{AB}^2 = \overline{BH} \cdot \overline{BC}$\
    $$\overline{AB}^2 &= 4 \cdot 8\\
    \overline{AB} &= \sqrt{32} = 5.7\,cm
    $$
4.  $\overline{AH}^2 = \overline{BH} \cdot \overline{HC}$\
    $$6^2 &= 2 \cdot \overline{HC}\\
    \overline{HC} &= \dfrac{36}{2} = 18\,cm\\
    \overline{BC} &= 18 + 2 = 20 \,cm
    $$
```

## Question {nump}`question`{points}`3`

Résolvez les deux triangles suivants, rectangles en $A$, en complétant le
tableau.

**Notez tous les détails des calculs**

| | $a$ | $b$ | $c$ | $\beta$ | $\gamma$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| a) | $49\,cm$ | $31\,cm$ | ... | ... | ... |
| b) | ... | ... | $52\,cm$ | $39^\circ$ | ... |

```{solution}
| | $a$ | $b$ | $c$ | $\beta$ | $\gamma$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| a) | $49\,cm$ | $31\,cm$ | $37.9\,cm$ | $39.2^\circ$ | $50.8^\circ$ |
| b) | $66.9\,cm$ | $42.1\,cm$ | $52\,cm$ | $39^\circ$ | $51^\circ$ |

```

## Question {nump}`question`{points}`3`

Pour déterminer la largeur $x$ d'une rivière, nous pouvons utiliser la
construction suivante et mesurer $a$, $b$ et $c$.

Que vaut la largeur de la rivière si $a=25\,m$, $b=8\,m$, $c=10\,m$?

```{figure} images/riviere.png
:width: 35%
:align: center
```


```{solution}
$$ \dfrac{x}{10} &= \dfrac{8+x}{25}\\
25x &= 10(8 + x)\\
25x &= 80 + 10x\\
15x &= 80\\
x &= \dfrac{80}{15} = 5.\overline{3}$$
La largeur de la rivière vaut ~ 5.3 m.
```

## Question {nump}`question`{points}`3`

Une personne manoeuvrant un cerf-volant tient le fil à $1.5\,m$ au-dessus du
sol. Le fil du cerf-volant est tendu et forme un angle de $50^\circ$ avec
l'horizontale.

À quelle distance du sol se trouve le cerf-volant, si on laisse dérouler $150$
mètres de fil?


`````{solution}
````{list-grid}
:style: grid-template-columns: 1fr 1fr;
-   ```{figure} images/cerf-volant.jpg
    :width: 100%
    :align: center
    ```
-   $\sin(50^\circ) = \dfrac{x}{150} \implies x = 150 \cdot \sin(50^\circ) = 114.9\,m$
    $h = 114.9 + 1.5 = 116.4\,m$<br>
    Le cerf-volant se trouve à 116.4 m du sol.
````
`````

## Question {nump}`question`{points}`5`

$ABCD$ est un rectangle. Sachant que $\alpha = 65^\circ$ et
$\overline{EC} = 11\,cm$, calculez $\widehat{AEB}$, ainsi que l'aire et le
périmètre du triangle $ABE$.

```{figure} images/problemegeom.png
:width: 60%
:align: center
```

```{solution}
$\widehat{BEC} = 180^\circ - 90^\circ - 65^\circ = 25^\circ$\
$\widehat{AEB} = 180^\circ - 65^\circ - 25^\circ = 90^\circ$\
Le triangle $AEB$ est rectangle en $E$.

Par la trigo:\
$\sin(65^\circ) = \dfrac{11}{EB} \implies EB = \dfrac{11}{\sin(65^\circ)} = 12.1\,cm$

Par Pythagore:\
$\overline{EH} = \sqrt{12.1^2-11^2} = 5.1\,cm$

Par le thm de la hauteur:\
$\overline{EH}^2 = \overline{AH} \cdot \overline{HB}$\
$\overline{AH} = \dfrac{\overline{EH}^2}{HB} = \dfrac{5.1^2}{11} = 2.4\,cm$

Par Pythagore:\
$\overline{AB} = \overline{AH} + \overline{HB} = 2.4 + 11 = 13.4\,cm$\
$\overline{AE} = \sqrt{13.4^2 - 12.1^2} = 5.7\,cm$

Aire:\
$A = \dfrac{13.4 \cdot 5.1}{2} = 34.3\,cm^2$

Périmètre:\
$P = 12.1 + 13.4 + 5.7 = 31.2\,cm$
```
