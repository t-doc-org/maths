% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Puissances

```{metadata}
page-break-force: 2
page-break-avoid-inside: 3
```

## Théorie

````{admonition} Définition
:class: note
La **n<sup>ième</sup> puissance** d'un nombre $a$ est le produit de $n$
facteurs $a$:

```{math}
:class: align-center
a^n=\underbrace{a\cdot a\cdot a \cdot  \ldots \cdot a}_{n \text{ facteurs}} \text{ avec } a \in \mathbb{R} \text{ et } n \in \mathbb{N}.
```

Le nombre $a$ est appelé **base** et $n$ est appelé **exposant** de la
puissance. L'expression $a^n$ se lit $a$ puissance $n$.\\
De plus

```{math}
:class: align-center
a^0=1 \text{ pour tout }a \neq 0.
```
````

```{container}
# Remarques

{.lower-alpha-paren}
1.  L'expression $0^0$ n'est pas définie!
2.  La définition des puissances donne le résultat suivant
    ```{math}
    :class: align-center
    (-a)^n=\left\{ \begin{array}{ll} a^n & \text{ si } n \text{ est pair} \\ -a^n & \text{ si } n \text{ est impair} \end{array}\right.
3.  Les puissances sont à calculer avant les multiplications. C'est pour cela
    que le signe $-$ ne doit pas être pris en considération pour une puissance
    s'il n'y a pas de parenthèses.
    ```{math}
    :class: align-center
    -a^n=(-1) \cdot a^n
    ````
```

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren .columns-3}
1.  $(-2)^4=2^4=16$
2.  $(-3)^3=-3^3=-27$
3.  $-2^4=-16$
```

````{admonition} Théorème - Règles de calcul pour les puissances
:class: note
Soient $a, b \in \mathbb{R} \setminus \{0\}$ et $n,m \in\mathbb{Z}$, alors

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- # Formules
  {.lower-alpha-paren}
  1. $a^n \cdot a^m =a^{n+m}$
- # Exemples numériques
  $a^3 \cdot a^4 =a^{3+4}=a^7$
- {.lower-alpha-paren}
  2. $\dfrac{a^n}{a^m} =a^{n-m}$
- $\dfrac{x^6}{x^3}=x^{6-3}=x^3$
- {.lower-alpha-paren}
  3. $\left(a^n\right)^m=a^{n \cdot m}$
- $\left(b^4\right)^5=b^{4 \cdot 5}=b^{20}$
- {.lower-alpha-paren}
  4. $(a \cdot b)^n =a^n \cdot b^n$
- $(x^2y^3)^5=x^{2 \cdot 5}y^{3 \cdot 5}=x^{10}y^{15}$
- {.lower-alpha-paren}
  5. $\left( \dfrac{a}{b} \right)^n=\dfrac{a^n}{b^n}$
- $\left( \dfrac{a^4}{b^2}\right)^3=\dfrac{a^{4 \cdot 3}}{b^{ 2 \cdot 3}}=\dfrac{a^{12}}{b^{6}}$
````

````{container} frame noprint
# Démonstration

{.lower-alpha-paren}
1. ```{math}
   a^n \cdot a^m = \underbrace{a \cdot  \ldots \cdot a}_{n\text{ fois}} \cdot \underbrace{a \cdot  \ldots \cdot a}_{m\text{ fois}}= \underbrace{a \cdot  \ldots \cdot a \cdot a \cdot \ldots \cdot a}_{n+m\text{ fois}}=a^{n+m}
   ```
2. ```{math}
   \dfrac{a^n}{a^m} = \dfrac{\overbrace{a \cdot  \ldots \cdot a}^{n\text{ fois}}}{\underbrace{a \cdot  \ldots \cdot a}_{m\text{ fois}}} \overset{\color{red}\text{simpl. des a}}{=} \underbrace{a \cdot  \ldots \cdot a \cdot a \cdot \ldots \cdot a}_{n-m\text{ fois}}=a^{n-m}
   ```
3. ```{math}
   \left(a^n\right)^m = (\overbrace{a \cdot  \ldots \cdot a}^{n\text{ fois}})^m = \underbrace{(\overbrace{a \cdot  \ldots \cdot a}^{n\text{ fois}}) \cdot \ldots \cdot (\overbrace{a \cdot  \ldots \cdot a}^{n\text{ fois}})}_{m\text{ fois}} =a^{n \cdot m}
   ```
4. ```{math}
   (a \cdot b)^n = \underbrace{(a \cdot b) \cdot  \ldots \cdot (a \cdot b)}_{n\text{ fois}} \overset{\color{red}\text{commutativité}}{=}  \underbrace{a \cdot  \ldots \cdot a}_{n\text{ fois}} \cdot \underbrace{b \cdot  \ldots \cdot b}_{n\text{ fois}}=a^n \cdot b^n
   ```
5. ```{math}
   \left( \dfrac{a}{b} \right)^n = \underbrace{\dfrac{a}{b} \cdot  \ldots \cdot \dfrac{a}{b}}_{n\text{ fois}} =  \dfrac{\overbrace{a \cdot  \ldots \cdot a}^{n\text{ fois}}}{\underbrace{b \cdot  \ldots \cdot b}_{n\text{ fois}}}=\dfrac{a^n}{b^n}
   ```
````

````{admonition} Définition
:class: note
Une **puissance avec exposant négatif** $a^{-n}$ est l'inverse de la puissance
$a^n$, c'est-à-dire

```{math}
:class: align-center
a^{-n}=\frac{1}{a^n} \quad \text{ et } \quad \frac{1}{a^{-n}}=a^n
```
````

````{container} frame noprint
# Démonstration

$a^n \cdot a^{-n} = a^{n+(-n)}=a^0=1$

{.lower-alpha-paren .columns-2}
1. ```{math}
   \implies a^n \cdot a^{-n} &= 1 \qquad  | :a^n\\
   a^{-n} &= \frac{1}{a^n}
   ```
2. ```{math}
   \implies a^n \cdot a^{-n} &= 1 \qquad  | :a^{-n}\\
   a^{n} &= \frac{1}{a^{-n}}
   ```
````

```{container} frame noprint
# Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $2^{-2}=\dfrac{1}{2^2}=\dfrac{1}{4}$
2. $5 \cdot b^{-3}= 5 \cdot \dfrac{1}{b^3} = \dfrac{5}{b^3}$
3. $\left( \dfrac{3}{x} \right)^{-1}= \dfrac{x}{3}$ (inverse d'une fraction)
4. $\dfrac{2}{6^{-2}}= 2 \cdot \dfrac{1}{6^{-2}} = 2 \cdot 6^2=72$
```

````{admonition} Définition - Notation scientifique
:class: note
Tout nombre $x$ peut être écrit comme le produit d'un nombre $a$ entre $1$ et
$10$ (ou entre $-10$ et $-1$ si le nombre $x$ est négatif) et une puissance de
$10$, c'est-à-dire

```{math}
:class: align-center
x=a \cdot 10^n \text{ avec } 1\leq|a|<10 \text{ et } n \in \mathbb{Z}
```
````

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren .columns-2}
1. $1\,000\,000=1 \cdot 10^6=10^6$
2. $1\,236=1.236 \cdot 10^3$
3. $-27\,720\,000\,000=-2.772 \cdot 10^{10}$
4. $0.0000021 =2.1 \cdot 10^{-6}$
````

````{container} frame noprint
### Exemple {num2}`exemple`

{.lower-alpha-paren}
1. $5\,200\,000 \cdot 0.0006=5.2 \cdot 10^6 \cdot 6\cdot 10^{-4}=5.2 \cdot 6 \cdot 10^6 \cdot 10^{-4}=31.2 \cdot 10^2=3\,120$
2. $\dfrac{20\,000^2}{0.01^3}=\dfrac{(2 \cdot 10^4)^2}{(1 \cdot 10^{-2})^3}= \dfrac{4 \cdot 10^8}{1 \cdot 10^{-6}}=\dfrac{4}{1} \cdot \dfrac{10^8}{10^{-6}}=4 \cdot 10^{8-(-6)}=4 \cdot 10^{14}$
````


## Exercices

### Exercice {num2}`exercice`

Simplifiez à l'aide des règles de calcul pour les puissances et écrivez le
résultat comme une seule puissance.

{.lower-alpha-paren .columns-3}
1. $x^2 \cdot x^6=$
2. $b^7 \cdot b^5=$
3. $\left(a^{3n}\right)^{-2}=$
4. $a^2 \cdot a^5 \cdot a^3=$
5. $\left(x^{4n}\right)^{-5}=$
6. $\dfrac{a^2}{a^5}=$
7. $(b^6)^3=$
8. $\left( \dfrac{6^6}{6^4}\right) \cdot 6^2=$
9. $a^{n+1} \cdot a^{n-1}=$
10. $x^{3m+3} \cdot x^{-m+2}=$
11. $\dfrac{x^4}{x^4}=$
12. $c^4 \cdot c^3 \cdot c^{-5}=$
13. $\left( (-5)^4\right)^5=$
14. $2^n \cdot 5^n=$
15. $4^{-2} \cdot a^{-2}=$
16. $(-4)^n \cdot (-3)^n=$
17. $10^x \cdot 0.5^x=$
18. $9^{-n} : 3^{-n}=$
19. $10^m :5^m=$
20. $(4c)^5:(2c)^5=$
21. $\left( \dfrac{x}{2}\right)^4 : \left( \dfrac{x}{6} \right)^4=$

```{block} solution
{.lower-alpha-paren .columns-4}
1. $x^8$
2. $b^{12}$
3. $a^{-6n}$
4. $a^{10} $
5. $x^{-20n}$
6. $a^{-3}$
7. $b^{18}$
8. $6^4=1296$
9. $a^{2n}$
10. $x^{2m+5}$
11. $1$
12. $c^2$
13. $5^{20}$
14. $10^n$
15. $(4a)^{-2}$
16. $12^n$
17. $5^x$
18. $3^{-n}$
19. $2^m$
20. $2^5=32$
21. $3^4=81$
```

### Exercice {num2}`exercice`

Transformez pour supprimer les exposants négatifs et les parenthèses.

{.lower-alpha-paren .columns-3}
1. $a^{-3}=$
2. $\dfrac{1}{b^{-1}}=$
3. $4 \cdot c^{-5}=$
4. $\dfrac{2}{x^{-3}}=$
5. $a^{-2} \cdot c^{3} =$
6. $\left( \dfrac{2}{3} \right)^{-1}=$
7. $\left( \dfrac{1}{5} \right)^{-2}=$
8. $\left( \dfrac{x}{y} \right)^{-4}=$
9. $\left( \dfrac{a^2b^3}{n^4m} \right)^{-3}=$

```{block} solution
{.lower-alpha-paren .columns-5}
1. $\dfrac{1}{a^3}$
2. $b$
3. $\dfrac{4}{c^5}$
4. $2x^3$
5. $\dfrac{c^3}{a^2}$
6. $\dfrac{3}{2}$
7. $5^2 = 25$
8. $\dfrac{y^4}{x^4}$
9. $\dfrac{n^{12}m^3}{a^6b^9}$
```

### Exercice {num2}`exercice`

Calculez (sans calculatrice).

{.lower-alpha-paren .columns-2}
1. $(-2)^3 - 5 \cdot 6 + (-3)^2 =$
2. $(3+6)-5-2 \cdot (2+1)^2=$
3. $\dfrac{1}{5 \cdot 4^0} + \left( \dfrac{15}{14} \right)^{-1} \cdot \dfrac{1}{7}=$
4. $3+2 \cdot 2^2 +4 \cdot 3 -(6-1)^2=$
5. $\dfrac{1}{12}+ \left( \dfrac{2}{3}\right)^{-1}:(-6)^2=$
6. $2^2 \cdot (2-4)^5 -2^2 \cdot 4=$
7. $1-2^2:\dfrac{3^{-1}+6^{-1}}{2}=$


```{block} solution
{.lower-alpha-paren .columns-6}
1. $-29$
2. $-14$
3. $\dfrac{1}{3}$
4. $-2$
5. $\dfrac{1}{8}$
6. $-144$
7. $-15$
```

### Exercice {num2}`exercice`

Calculez à l'aide de la notation scientifique et des règles de calcul des
puissances (réponse en notation scientifique).

{.lower-alpha-paren .columns-2}
1. $0.004 \cdot 500=$
2. $60\,000\,000\,000 : 2\,000=$
3. $4 \cdot 10^{10} \cdot 4 \cdot 10^{-19}=$
4. $6 \cdot 10^1 \cdot 7 \cdot 10^{12} \cdot 4 \cdot 10^{-5}=$
5. $3\,000 \cdot 0.00000005 \cdot 20\,000=$
6. $1 \cdot 10^{-5} \cdot 9 \cdot 10^5 \cdot 2=$
7. $10 \cdot 10^{-5} \cdot 10^3 \cdot 10^5 \cdot 19 =$
8. $\left(2 \cdot 10^3\right)^4 \cdot \left(9 \cdot 10^5\right)^2=$
9. $200^4 \cdot 1\,000^2=$
10. $0.0003^4 : 0.0001^5=$


```{block} solution
{.lower-alpha-paren .columns-4}
1. $2$
2. $3 \cdot 10^7$
3. $1.6 \cdot 10^{-8}$
4. $1.68 \cdot 10^{10}$
5. $3$
6. $1.8 \cdot 10^1$
7. $1.9 \cdot 10^{5}$
8. $1.296 \cdot 10^{25}$
9. $1.6 \cdot 10^{15}$
10. $8.1 \cdot 10^{5}$
```

### Exercice {num2}`exercice`

Transformez dans l'unité demandée (réponse en notation scientifique).

{.lower-alpha-paren .columns-2}
1. $400 \, dm^2$ en $mm^2$.
2. $6 \, mm^3$ en $km^3$.
3. $78\,000\,000$ litres en $km^3$.
4. $9\,000\,cm^2$ en $m^2$.


```{block} solution
{.lower-alpha-paren .columns-4}
1. $4 \cdot 10^6\,mm^2$
2. $6 \cdot 10^{-18}\,km^3$
3. $7.8 \cdot 10^{-5}\,km^3$
4. $9 \cdot 10^{-1}\,m^2$
```

### Exercice {num2}`exercice`

Simplifiez le plus possible.

{.lower-alpha-paren .columns-3}
1. $a^4 a^{28}=$
2. $x^{-25}x^{14}=$
3. $u^{-4}u^{-7}u=$
4. $t^{x-4} : t^{x-6}=$
5. $\left( -x^6 \right)^2=$
6. $\left(b^{4n-1}\right)^2 \cdot b^{-n-1}=$
7. $\left( m^xn^y \right)^3=$
8. $\left( k^3 \right)^5 \cdot k^5=$
9. $\left( a^x b\right)^3 \cdot a^x=$
10. $\dfrac{h^{-4}}{h^{-7}}=$
11. $\dfrac{n^{0}}{n^{-4}}=$
12. $\dfrac{z^{5}}{z^{3-6n}}=$
13. $\left( \dfrac{\pi}{2} \right)^{-1}=$
14. $\dfrac{54a^3y^2}{18a^{-4}y^8}=$
15. $\dfrac{16u^{-3}w^{-2}}{128u^{-5}w^{0}}=$
16. $\dfrac{(-a)^6}{(-a)^3}=$
17. $\left( a^{-3} b^5\right)^3=$
18. $\left( u^5 v^{-8} x\right)^{-4}=$
19. $\left( \dfrac{3}{4}\right)^{-5} : \left( \dfrac{3}{4}\right)^{-3}=$
20. $\left( \dfrac{-2}{5}\right)^{3} : \left( \dfrac{-2}{5}\right)^{-1}=$


```{block} solution
{.lower-alpha-paren .columns-4}
1. $a^{32}$
2. $x^{-11}$
3. $u^{-10}$
4. $t^{2} $
5. $x^{12} $
6. $b^{7n-3}$
7. $m^{3x} n^{3y} $
8. $k^{20}$
9. $a^{4x} b^3$
10. $h^{3}$
11. $n^{4}$
12. $z^{2+6n}$
13. $\dfrac{2}{\pi}$
14. $3a^7y^{-6}$
15. $\dfrac{1}{8} u^{2}w^{-2} $
16. $-a^{3}$
17. $a^{-9} b^{15}$
18. $ u^{-20} v^{32} x^{-4}$
19. $\dfrac{16}{9}$
20. $\dfrac{16}{625}$
```

### Exercice {num2}`exercice`

Vitesse de la lumière: $2.998 \cdot 10^8\,m/s$<br>
Distance moyenne entre la terre et le soleil: $1.495 \cdot 10^8 km$

{.lower-alpha-paren}
1.  Combien de temps faut-il aux rayons du soleil pour atteindre la terre?
2.  Vue de la Terre, Sirius est l'étoile la plus brillante du ciel après le
    Soleil. La lumière de cette étoile voyage pendant 9 ans pour atteindre la
    terre. Quelle est la distance entre Sirius et la terre?
3.  Le centre de notre Voie Lactée se trouve à une distance de
    $3 \cdot 10^{17}km$ de la terre. Combien de temps prendrait une navette
    spatiale (d'un film de science-fiction) pour atteindre le centre de la Voie
    Lactée si elle pouvait voyager trois fois plus vite que la lumière?


```{block} solution
{.lower-alpha-paren .columns-}
1. env. 8 min. 19 sec.
2. env. $8.5 \cdot 10^{13}km$.
3. env. $10\,577$ années.
```

### Exercice {num2}`exercice`

Le corps humain contient environ 5 litres de sang. Il y a 5 millions de globules
rouges et $7\,000$ globules blancs par $mm^3$ de sang.

{.lower-alpha-paren}
1.  Combien notre corps contient-il de globules rougeset combien de globules
    blancs?
2.  La forme d'un globule rouge est assimilée à celle d'un cylindre de hauteur
    $3\mu m$. Si tous ces globules rouges sont empilé pour former une colonne,
    quelle est la hauteur de la colonne obtenue?


```{block} solution
{.lower-alpha-paren}
1.  $2.5 \cdot 10^{13}$ globules rouges et  $3.5  \cdot 10^{10}$ globules blancs.
2.  $7.5 \cdot 10^4\,km$
```


## Solutions

```{blocks} solution
:class: allow-break-inside
```
