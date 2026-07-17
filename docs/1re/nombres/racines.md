% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Racines

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

````{admonition} Définition
:class: note
La **racine carré** d'un nombre positif $a$ est défini comme étant le nombre
positif $x$, qui élevé au carré, donne $a$:

```{math}
:class: align-center
\sqrt{a}=x \Longleftrightarrow x^2=a \text{ où } a,x \geq 0
```
````

````{admonition} Définition
:class: note
La **racine n<sup>ième</sup>** d'un nombre $a \geq 0$ est le nombre $x \geq 0$,
qui, élevé à la n<sup>ième</sup> puissance, donne $a$:

```{math}
:class: align-center
\sqrt[n]{a}=x \Longleftrightarrow x^n=a \text{ avec } a,x \geq 0
```
Le nombre $n$ est appelé **indice**.
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $\sqrt{16}=4$, car $4^2=16$
2. $\sqrt[4]{81}=3$, car $3^4=81$
3. $\sqrt[5]{32}=2$, car $2^5=32$
4. $\sqrt[6]{x^{12}}=x^2$, car $\left(x^2\right)^6=x^{12}$
```

```{container}
# Remarques

{.lower-alpha-paren}
1.  Dans le cas de la racine carrée, l'indice n'est pas noté:
    $\sqrt{\phantom{0}}=\sqrt[2]{\phantom{0}}$
2.  Les racines sont les opérations réciproques des puissances:<br>
    $a \geq 0$, $\sqrt[2]{a^2} = (\sqrt[2]{a})^2 = a$ ou $\sqrt[n]{a^n} = (\sqrt[n]{a})^n = a$
3.  La racine carrée d'un nombre négatif n'existe pas dans $\mathbb{R}$. Dans le
    cas des racines n<sup>ième</sup>:<br>
      - Si $a < 0$ et $n$ est pair, alors $\sqrt[n]{a}$ n'est pas définie dans
        $\mathbb{R}$, car il n'est pas possible d'obtenir un nombre négatif en
        l'élevant à une puissance paire.
      - Si $a < 0$ et $n$ est impair, alors $\sqrt[n]{a}$ est définie et elle
        est inférieure à 0.
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $\sqrt[4]{-16}=\varnothing$ aucun nombre élevé à la puissance 4 n'est négatif
2. $\sqrt[5]{-32}=-2$, car $(-2)^5=-32$
3. $\sqrt[3]{-27}=-3$, car $(-3)^3=-27$
```

````{admonition} Théorème - Règles de calcul pour les racines
:class: note
Soient $a, b > 0$ et $m, n \in\mathbb{Z}$, alors

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # Formules
  {.lower-alpha-paren}
  1. $\sqrt[n]{a\cdot b} =\sqrt[n]{a} \cdot \sqrt[n]{ b}$
- # Exemples numériques
  $\sqrt[3]{2} \cdot \sqrt[3]{4}=\sqrt[3]{2 \cdot 4}=\sqrt[3]{8} = 2$
- {.lower-alpha-paren}
  2. $\sqrt[n]{\dfrac{a}{b}} =\dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$
- $\sqrt{\dfrac{16}{25}}=\dfrac{\sqrt{16}}{\sqrt{25}}=\dfrac{4}{5}$
- {.lower-alpha-paren}
  3. $\sqrt[n]{\sqrt[m]{a}}=\sqrt[n \cdot m]{a}$
- $\sqrt[3]{\sqrt[2]{a^6}}=\sqrt[3 \cdot 2]{a^6}=\sqrt[6]{a^6}=a$
- {.lower-alpha-paren}
  4. $\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m$
- $\sqrt[3]{8^5}=\left( \sqrt[3]{8}\right)^5=2^5=32$
```

Si $a, b < 0$, ces règles de calcul ne pourront être appliquées que si m et n
sont des nombres impairs.
````

```{container} frame noprint
# Exemple {num2}`exemple`

Pour effectuez un extraction de racine, il faut écrire, si possible, la valeur
sous la racine sous forme de carré.

{.lower-alpha-paren}
1. $\sqrt{18}=\sqrt{9 \cdot 2}=\sqrt{3^2 \cdot 2}=\sqrt{3^2} \cdot \sqrt{2}=3\sqrt{2}$
2. $\sqrt{800}=\sqrt{100 \cdot 4 \cdot 2}=\sqrt{10^2 \cdot 2^2 \cdot 2}=\sqrt{10^2} \cdot \sqrt{2^2} \cdot \sqrt{2}=10 \cdot 2 \cdot \sqrt{2} = 20\sqrt{2}$
```

````{admonition} Définition
:class: note
Pour tout $a >0$, $m \in \mathbb{Z}$ et $n \in \mathbb{Z}^*$ on a

```{math}
:class: align-center
a^{\frac{1}{n}}=\sqrt[n]{a}
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $5^{\frac{1}{2}} = \sqrt{5}$
2. $2^{\frac{1}{3}} = \sqrt[3]{2}$
3. $3^{\frac{1}{4}} = \sqrt[4]{3}$
4. $9^{\frac{1}{7}} = \sqrt[7]{9}$
```

````{admonition} Définition
:class: note
Pour tout $a >0$, $m \in \mathbb{Z}$ et $n \in \mathbb{Z}^*$ on a

```{math}
:class: align-center
a^{\frac{m}{n}}=\left( a^m\right)^{\frac{1}{n}}=\sqrt[n]{a^m} \text{ \quad ou  \quad}a^{\frac{m}{n}}=\left( a^{\frac{1}{n}}\right)^m=\left( \sqrt[n]{a}\right)^m
```
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $27^{\frac{2}{3}}=\left( \sqrt[3]{27} \right)^2=3^2=9$
2. $25^{\frac{3}{2}}=\left( \sqrt{25} \right)^3=5^3=125$
3. $9^{0.5}=9^{\frac{1}{2}}= \sqrt{9}=3$
4. $8^{-\frac{1}{3}}= \dfrac{1}{8^{\frac{1}{3}}}=\dfrac{1}{\sqrt[3]{8}}=\dfrac{1}{2}$
```

```{container} frame noprint
# Exemple {num2}`exemple`

Dans un calcul avec des puissances et des racines, il faut commencer par
convertir les racines en puissances, ensuite il est possible d'appliquer les
règles de calcul.

{.lower-alpha-paren}
1.  $\left( x^{\frac{5}{6}} \cdot \sqrt[4]{x} \right) : \sqrt[3]{x^2}=\left(x^{\frac{5}{6}} \cdot x^{\frac{1}{4}} \right):x^{\frac{2}{3}}=x^{\frac{10}{12}+\frac{3}{12}-\frac{8}{12}}=x^{\frac{5}{12}}$


2.  $\left( \sqrt[4]{a \cdot \sqrt[3]{a}}\right)^3= \left( \sqrt[4]{a \cdot a^{\frac{1}{3}}}\right)^3=\left( \sqrt[4]{a^{\frac{3}{3}+\frac{1}{3}}}\right)^3=\left( \sqrt[4]{a^{\frac{4}{3}}}\right)^3=\left( \left(a^{\frac{4}{3}} \right)^{\frac{1}{4}} \right)^3=a^{\frac{12}{12}}=a$

3.  $\left( \dfrac{x^{\frac{7}{4}} \cdot y^{\frac{2}{3}}}{\sqrt[4]{y} \cdot \sqrt[3]{x^5}} \right)^{24}=\left( \dfrac{x^{\frac{7}{4}} \cdot y^{\frac{2}{3}}}{y^{\frac{1}{4}} \cdot x^{\frac{5}{3}}} \right)^{24}=\left( \dfrac{x^{\frac{7}{4}} \cdot y^{\frac{2}{3}}}{{x^{\frac{5}{3}} \cdot y^\frac{1}{4}}} \right)^{24} = \left( \dfrac{x^{\frac{7}{4}}}{x^{\frac{5}{3}}} \cdot \dfrac{y^{\frac{2}{3}}}{y^\frac{1}{4}} \right)^{24}$
$=\left( x^{\frac{7}{4}-\frac{5}{3}}  y^{\frac{2}{3}-\frac{1}{4}}\right)^{24}=\left( x^{\frac{21}{12}-\frac{20}{12}}  y^{\frac{8}{12}-\frac{3}{12}}\right)^{24}= \left( x^{\frac{1}{12}}  y^{\frac{5}{12}}\right)^{24}=x^2y^{10}$
```

```{admonition} Définition
:class: note
La **rationalisation d'un dénominateur** est un procédé qui permet d'éliminer
les racines du dénominateur d'une fraction.
```

```{container} frame noprint
# Exemple {num2}`exemple`

Il suffit de multiplier le numérateur et le dénominateur par la racine.

{.lower-alpha-paren .columns-2}
1. $\dfrac{1}{\sqrt{2}} = \dfrac{1}{\sqrt{2}} \cdot \dfrac{\sqrt{2}}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$
2. $\dfrac{36}{\sqrt{6}} = \dfrac{36}{\sqrt{6}} \cdot \dfrac{\sqrt{6}}{\sqrt{6}} = \dfrac{36 \sqrt{6}}{6} = 6 \sqrt{6}$
3. $\dfrac{\sqrt{2}}{\sqrt{3}} = \dfrac{\sqrt{2}}{\sqrt{3}} \cdot \dfrac{\sqrt{3}}{\sqrt{3}} = \dfrac{\sqrt{6}}{3}$
```

## Exercices

### Exercice {num2}`exercice`

Calculez et simplifiez les expressions suivantes à l'aide des règles de calcul
pour les racines.

{.lower-alpha-paren .columns-3}
1. $\sqrt{12} \sqrt{3}=$
2. $\sqrt[3]{2} \sqrt[3]{4}=$
3. $\sqrt{5} \sqrt{\dfrac{1}{35}}=$
4. $\sqrt{345^2}=$
5. $\sqrt{3^2+4^2}=$
6. $\dfrac{3}{\sqrt{15}} \sqrt{\dfrac{5}{6}}=$
7. $\sqrt{\sqrt{16}}=$
8. $\sqrt[3]{\sqrt{8}}=$
9. $-\sqrt{\dfrac{28}{5}} \sqrt{\dfrac{35}{4}}=$


```{block} solution
{.lower-alpha-paren .columns-5}
1. $6$
2. $2$
3. $\dfrac{1}{\sqrt{7}}$
4. $345$
5. $5$
6. $\dfrac{1}{\sqrt{2}}$
7. $2$
8. $\sqrt{2}$
9. $-7$
```

### Exercice {num2}`exercice`

Effectuez l'extraction de racines.

{.lower-alpha-paren .columns-4}
1. $\sqrt{12}=$
2. $\sqrt{80}=$
3. $\sqrt{27}=$
4. $\sqrt{72}=$
5. $\sqrt{147}=$
6. $\sqrt{216}=$
7. $\sqrt{500}=$
8. $\sqrt{108}=$
9. $\sqrt{75}=$
10. $\sqrt[3]{16}=$
11. $\sqrt[3]{54}=$
12. $\sqrt[3]{32}=$


```{block} solution
{.lower-alpha-paren .columns-4}
1. $2 \sqrt{3}$
2. $4 \sqrt{5}$
3. $3 \sqrt{3}$
4. $6 \sqrt{2}$
5. $7 \sqrt{3}$
6. $6 \sqrt{6}$
7. $10 \sqrt{5}$
8. $6 \sqrt{3}$
9. $5 \sqrt{3}$
10. $2\sqrt[3]{2}$
11. $3\sqrt[3]{2}$
12. $2\sqrt[3]{4}$
```

### Exercice {num2}`exercice`

Effectuez les calculs sans calculatrice.

{.lower-alpha-paren .columns-3}
1. $\sqrt{3}\cdot \sqrt{7} \cdot \sqrt{21}=$
2. $(\sqrt{3})^6=$
3. $\sqrt{5} ( \sqrt{20} + \sqrt{5})=$
4. $\sqrt{45} :  \sqrt{5}=$
5. $\sqrt{3}\cdot \sqrt{3} \cdot \sqrt{3} \cdot \sqrt{3}=$
6. $(\sqrt{2} )^8=$
7. $\sqrt{6} \left(\sqrt{\dfrac{1}{3}} + \sqrt{\dfrac{1}{2}} \right)=$
8. $\dfrac{\sqrt{3}\cdot \sqrt{32}}{\sqrt{6}}=$
9. $\dfrac{\sqrt{2}\cdot \sqrt{12}}{\sqrt{3}\cdot \sqrt{27}} \cdot \sqrt{2 \cdot \dfrac{2}{3}}=$

```{block} solution
{.lower-alpha-paren .columns-5}
1. $21$
2. $27$
3. $15$
4. $3$
5. $9$
6. $16$
7. $\sqrt{2}+\sqrt{3}$
8. $4$
9. $\dfrac{4\sqrt{2}}{9}$
```

### Exercice {num2}`exercice`

Effectuez les calculs. Répondre sous forme de nombre entier ou de fraction
irréductible.

{.lower-alpha-paren .columns-3}
1. $9^{-2}=$
2. $9^{0}=$
3. $9^{-\frac{1}{2}}=$
4. $8^{\frac{2}{3}}=$
5. $10^{-5}=$
6. $16^{-\frac{3}{2}}=$
7. $49^{\frac{1}{2}}=$
8. $100^{0}=$
9. $25^{-\frac{1}{2}}=$
10. $4^{\frac{5}{2}}=$
11. $81^{\frac{1}{4}}=$
12. $27^{-\frac{2}{3}}=$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $\dfrac{1}{81}$
2. $1$
3. $\dfrac{1}{3}$
4. $4$
5. $\dfrac{1}{100\,000}$
6. $\dfrac{1}{64}$
7. $7$
8. $1$
9. $\dfrac{1}{5}$
10. $32$
11. $3$
12. $\dfrac{1}{9}$
```

### Exercice {num2}`exercice`

Transformez les puissances avec exposants rationnels en racines.

{.lower-alpha-paren .columns-3}
1. $a^{\frac{1}{2}}=$
2. $m^{\frac{1}{3}}=$
3. $f^{\frac{3}{4}}=$
4. $x^{-\frac{1}{5}}=$
5. $b^{0.5}=$
6. $\left( a^2 b^3\right)^{\frac{3}{4}}=$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\sqrt{a}$
2. $\sqrt[3]{m}$
3. $\sqrt[4]{f^3}$
4. $\dfrac{1}{\sqrt[5]{x}}$
5. $\sqrt{b}$
6. $\sqrt[4]{a^6b^9}$
```

### Exercice {num2}`exercice`

Transformez les racines en puissances.

{.lower-alpha-paren .columns-3}
1. $\sqrt{a}=$
2. $\sqrt{a^3}=$
3. $\sqrt[4]{a^5}=$
4. $\dfrac{1}{\sqrt[3]{a}}=$
5. $\sqrt[5]{a}=$
6. $\dfrac{1}{\sqrt[3]{a^2}}=$
7. $\left( \sqrt[4]{a} \right)^3=$
8. $\dfrac{1}{\sqrt{a^7}}=$
9. $\sqrt[3]{a^7}=$

```{block} solution
{.lower-alpha-paren .columns-5}
1. $a^{\frac{1}{2}}$
2. $a^{\frac{3}{2}}$
3. $a^{\frac{5}{4}}$
4. $a^{-\frac{1}{3}}$
5. $a^{\frac{1}{5}}$
6. $a^{-\frac{2}{3}}$
7. $a^{\frac{3}{4}}$
8. $a^{-\frac{7}{2}}$
9. $a^{\frac{7}{3}}$
```

### Exercice {num2}`exercice`

Écrivez le résultat comme une seule puissance ou une seule racine.

{.lower-alpha-paren .columns-3}
1. $\sqrt{a} \cdot a^5 \cdot a^{\frac{3}{4}}$
2. $\sqrt[3]{x^2} \cdot \sqrt{x^5} \cdot x^{\frac{1}{4}}$
3. $\left( \sqrt{b^7} \right)^3 \cdot b^{\frac{2}{7}}$
4. $\dfrac{\sqrt[5]{x}}{\sqrt[3]{x^2}} \cdot x^{\frac{7}{3}}$
5. $\sqrt[5]{a} \cdot \sqrt[4]{a} \cdot \sqrt[3]{a} \cdot \sqrt{a}$
6. $\left( b^{\frac{2}{3}} \cdot b^{\frac{1}{4}} \cdot \sqrt{b^9} \right)^2$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $a^{\frac{25}{4}}=\sqrt[4]{a^{25}}$
2. $x^{\frac{41}{12}}=\sqrt[12]{x^{41}}$
3. $b^{\frac{151}{14}}=\sqrt[14]{b^{151}}$
4. $x^{\frac{28}{15}}=\sqrt[15]{x^{28}}$
5. $a^{\frac{77}{60}}=\sqrt[60]{a^{77}}$
6. $b^{\frac{65}{6}}=\sqrt[6]{b^{65}}$
```

### Exercice {num2}`exercice`

Écrivez le résultat comme une seule puissance ou une seule racine.

{.lower-alpha-paren .columns-3}
1. $\sqrt{\sqrt[3]{64}}$
2. $\sqrt[7]{\sqrt[5]{a^{14}}}$
3. $\sqrt[10]{\sqrt[5]{a^{50}}}$
4. $\sqrt[8]{a^{-4}}$
5. $\sqrt[3]{a^2 \cdot \sqrt[3]{a^2}}$
6. $\sqrt{x^4 \cdot \sqrt[3]{x^{\frac{1}{2}}}}$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\sqrt[6]{64}=64^{\frac{1}{6}}=2$
2. $\sqrt[5]{a^2}=a^{\frac{2}{5}}$
3. $a$
4. $a^{-\frac{1}{2}}=\dfrac{1}{\sqrt{a}}$
5. $\sqrt[9]{a^8}=a^{\frac{8}{9}}$
6. $\sqrt[12]{x^{25}}=x^{\frac{25}{12}}$
```

### Exercice {num2}`exercice`

Rendez rationnel le dénominateur des fractions suivantes:

{.lower-alpha-paren .columns-3}
1. $\dfrac{1}{\sqrt{3}}$
2. $\dfrac{25}{\sqrt{5}}$
3. $\dfrac{\sqrt{3}}{\sqrt{5}}$
4. $\dfrac{2}{\sqrt{7}}$
5. $\dfrac{1}{3\sqrt{11}}$
6. $\dfrac{12}{\sqrt{3}}$
7. $\dfrac{\sqrt{7}}{\sqrt{6}}$
8. $\dfrac{2\sqrt{2}}{3\sqrt{5}}$
9. $\dfrac{2}{3\sqrt{6}}$
10. $\dfrac{4}{3\sqrt{7}}$
11. $\dfrac{15}{2\sqrt{10}}$
12. $\dfrac{2\sqrt{5}}{3\sqrt{6}}$

```{block} solution
{.lower-alpha-paren .columns-3}
1. $\dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$
2. $\dfrac{25}{\sqrt{5}} = 5\sqrt{5}$
3. $\dfrac{\sqrt{3}}{\sqrt{5}} = \dfrac{\sqrt{15}}{5}$
4. $\dfrac{2}{\sqrt{7}} = \dfrac{2\sqrt{7}}{7}$
5. $\dfrac{1}{3\sqrt{11}} = \dfrac{\sqrt{11}}{33}$
6. $\dfrac{12}{\sqrt{3}} = 4\sqrt{3}$
7. $\dfrac{\sqrt{7}}{\sqrt{6}} = \dfrac{\sqrt{42}}{6}$
8. $\dfrac{2\sqrt{2}}{3\sqrt{5}} = \dfrac{2\sqrt{10}}{15}$
9. $\dfrac{2}{3\sqrt{6}} = \dfrac{\sqrt{6}}{9}$
10. $\dfrac{4}{3\sqrt{7}} = \dfrac{4\sqrt{7}}{21}$
11. $\dfrac{15}{2\sqrt{10}} = \dfrac{3\sqrt{10}}{4}$
12. $\dfrac{2\sqrt{5}}{3\sqrt{6}} = \dfrac{\sqrt{30}}{9}$
```

### Challenge

Simplifiez le plus possible.

{.lower-alpha-paren .columns-2}
1. $\sqrt{\dfrac{\sqrt[4]{a^{\frac{1}{3}}} \cdot \sqrt{a^{-8}}}{\sqrt[3]{a^{-5}}}} : \dfrac{\sqrt[6]{a^{\frac{3}{4}}}}{\sqrt[3]{a^2}}$
2. $\dfrac{\sqrt{\sqrt[3]{\left( \dfrac{1}{b^2}\right)^{-4}}\cdot \sqrt{b \cdot \sqrt[3]{b^2}}}}{b \cdot \sqrt[6]{b \sqrt{b}}\cdot \sqrt{b^{-1} \cdot \sqrt[3]{b^2}} }$

```{solution}
{.lower-alpha-paren .columns-2}
1. $a^{-\frac{7}{12}}$
2. $b^{\frac{2}{3}}$
```

## Solutions

```{blocks} solution
:class: allow-break-inside
```
