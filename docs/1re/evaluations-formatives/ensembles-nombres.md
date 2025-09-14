% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Ensembles et nombres

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

## Question {nump}`question`{points}`2`

Répondez aux questions suivantes:

{.lower-alpha-paren}
1.  À quels ensembles de nombres appartient $-7$? {leader}`.`
2.  Vrai ou faux, $1.\overline{7}$ est un nombre rationnel? {leader}`.`
3.  Donnez un exemple de nombre irrationnel: {leader}`.`
4.  Écrivez l'ensemble $\mathbb{N}$ en extension: {leader}`.`

```{solution}
{.lower-alpha-paren}
1.  $\mathbb{Z}$, $\mathbb{Q}$ et $\mathbb{R}$
2.  Vrai
3.  $\sqrt{2}$, $\pi$, etc.
4.  $\mathbb{N} = \{0; 1; 2; 3; 4; 5; ...\}$
```

## Question {nump}`question`{points}`3`

Écrivez les ensembles suivants:

{.lower-alpha-paren}
1.  en compréhension, $A = \{0; 1; 2; 3; 4; 5\} =$ {leader}`.`
2.  en extension, $B = \{x \in \mathbb{N} | x \textrm{ est un multiple de 5}\} =$
    {leader}`.`
3.  sous forme d'intervalle, $C = \{x \in \mathbb{R} | -5 \leq x < 4\} =$
    {leader}`.`

```{solution}
{.lower-alpha-paren}
1.  $A = \{ x \in \mathbb{N} | 0 \leq x \leq 5 \}$
2.  $B = \{ 5; 10; 15; 20; \dots \}$
3.  $C = [-5; 4[$
```

## Question {nump}`question`{points}`3`

Soient les ensembles $A= \{1; 2; 3; 4; 5; 6\}$, $B = \{2; 5, 12\}$ et
$C = \{-1; 0; 4 ; 7; 12\}$.

{.lower-alpha-paren}
1.  Énumérez l'ensemble $A \cap C =$ {leader}`.`
2.  Énumérez l'ensemble $A \setminus B =$ {leader}`.`
3.  Énumérez l'ensemble $(A \cup C) \setminus (B \cap C) =$ {leader}`.`

```{solution}
{.lower-alpha-paren}
1.  $A \cap C = \{4\}$
2.  $A \setminus B = \{1; 3; 4; 6\}$
3.  $(A \cup C) \setminus (B \cap C) = \{-1; 0; 1; 2; 3; 4; 5; 6 ;7\}$
```

## Question {nump}`question`{points}`2`

Soient $A$, $B$ et $C$ des sous-ensembles de l'ensemble $M$. Représentez
$\overline{(A \cup B)\setminus C}$ au moyen d'un diagramme de Venn.

```{jsxgraph}
:template: grid(35, 35)
```

````{solution}
```{figure} images/diagramme1.png
:width: 50%
:align: center
```
````

## Question {nump}`question`{points}`4`

Répondez aux questions en faisant un diagramme de Venn.

Nous avons observé la tenue des 30 élèves d'une classe du collège. 7 élèves ont
des lunettes et 14 portent une casquette. 4 élèves portent des lunettes, une
casquette et des baskets. 7 élèves portent au moins une casquette et des
baskets. 1 élève ne porte que des lunettes. Aucun élève ne porte que des
lunettes et des baskets. 3 élèves n'ont ni lunettes, ni baskets, ni casquette.

{.lower-alpha-paren}
1.  Combien d'élèves portent seulement une casquette? {leader}`.`
2.  Combien d'élèves portent des baskets? {leader}`.`

```{jsxgraph}
:template: grid(35, 35)
```

```{solution}
{.lower-alpha-paren}
1.  5 élèves ne portent qu'une casquette.
2.  19 élèves portent des baskets.
```

## Question {nump}`question`{points}`3`

Écrivez $4.21\overline{8}$ comme fraction. Pas besoin de réduire la fraction.

```{jsxgraph}
:template: grid(35, 15)
```

```{solution}
Posons $x = 4.21\overline{8}$.

$$
10x &= 42.18\overline{8}\\
- \quad x &= \phantom{4}4.21\overline{8}\\
9x &= 37.97
$$
$x = \dfrac{37.97}{9} = \dfrac{3797}{900}$
```

## Question {nump}`question`{points}`5`

Calculez en simplifiant au maximum. Rédaction sous forme d'un seul calcul.

$\dfrac{\dfrac{3}{4} - \dfrac{7}{24} \cdot \dfrac{8}{21}}{\dfrac{1}{5} \cdot \left( \dfrac{1}{2} - 3\right)} = $

```{jsxgraph}
:template: grid(35, 20)
```

```{solution}
$$
\dfrac{\dfrac{3}{4} - \dfrac{7}{24} \cdot \dfrac{8}{21}}{\dfrac{1}{5} \cdot \left( \dfrac{1}{2} - 3\right)}
= \dfrac{\dfrac{3}{4} - \dfrac{1}{9}}{\dfrac{1}{5} \cdot \left( \dfrac{1}{2} - \dfrac{6}{2}\right)}
=  \dfrac{\dfrac{27}{36} - \dfrac{4}{36}}{\dfrac{1}{5} \cdot \left( -\dfrac{5}{2}\right)}
=  \dfrac{\dfrac{23}{36}}{-\dfrac{1}{2}}
$$
$$
=  -\dfrac{23}{36} \cdot \dfrac{1}{2}= -\dfrac{23}{18}
$$
```
