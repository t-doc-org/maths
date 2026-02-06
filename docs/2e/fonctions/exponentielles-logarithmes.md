% Copyright 2026 Caroline Blank <caro@c-space.org>
% Copyright 2025 David Rueda
% Copyright 2025 Nicolas Martignoni
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions exponentielles et logarithmes

```{metadata}
subject: "Mathématiques 2e année"
```

Références: Cours de David Rueda et Nicolas Martignoni

## Fonctions exponentielles

```{admonition} Définition
:class: note
Une **équation exponentielle** est une équation dans laquelle l'inconnue
apparaît dans l'exposant de la puissance.
```

### Exemple {num2}`exemple`

Les équations suivantes sont des équations exponentielles:

```{list-grid}
:style: grid-template-columns: 1fr 1fr 1 fr;
- $5^x = 125$
- $4^{2x - 1} = 64$
- $3^{x + 2} - \dfrac{1}{9} = 0$
```

````{admonition} Théorème
:class: note
Soit $a \neq 1$ un nombre réel positif. Alors, pour tout $x$, $y \in \mathbb{R}$,

```{math}
:class: align-center
a^x = a^y \Longleftrightarrow x = y.
```
````

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle $5^x = 125$.

$$
5^x &= 125  \qquad &&\text{écrivez le membre de droite comme puissance de 5}\\
5^x &= 5^3  \qquad &&\text{appliquez le théorème ci-dessus}\\
x &= 3
$$
$S = \{3\}$

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle $4^{2x - 1} = 64$.

$$
4^{2x - 1} &= 64  \qquad &&\text{écrivez le membre de droite comme puissance de 4}\\
4^{2x - 1} &= 4^3  \qquad &&\text{appliquez le théorème ci-dessus}\\
2x - 1 &= 3  \qquad &&\text{résolvez l'équation de degré 1}\\
2x &= 4 \\
x &= 2 \\
$$
$S = \{2\}$

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle $3^{x + 2} - \dfrac{1}{9} = 0$.

$$
3^{x + 2} - \dfrac{1}{9} &= 0 \qquad &&\text{isolez le terme avec le } x\\
3^{x + 2} &= \dfrac{1}{9}  \qquad &&\text{écrivez le membre de droite comme puissance de 3}\\
3^{x + 2} &= 3^{-2}  \qquad &&\text{appliquez le théorème ci-dessus}\\
x + 2 &= -2  \qquad &&\text{résolvez l'équation de degré 1}\\
x &= -4 \\
$$
$S = \{-4\}$

Pour résoudre des équations exponentielles plus complexes, il est nécessaire
d'utiliser les règles du calcul des puissances.

```{admonition} Théorème
:class: note
**Règles du calcul des puissances**

Soient $a$ et $b$ deux nombres réels strictement positifs et $n$ et $m$ deux
nombres réels.

{.columns-2 .vsep-1}
- $a^0 = 1$
- $a^{-n} = \dfrac{1}{a^n}$
- $a^\frac{1}{n} = \sqrt[\leftroot{1}\uproot{2}n]{a}$
- $(a^n)^m = a^{nm}$
- $a^n \cdot a^m = a^{n+m}$
- $\dfrac{a^n}{a^m} = a^{n-m}$
- $a^n \cdot b^n = (a \cdot b)^n$
- $\dfrac{a^n}{b^n} = \left( \dfrac{a}{b} \right)^n$
```

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle $3^{3x + 1} =  9^{x - 2}$.

$$
3^{3x + 1} &=  9^{x - 2} \qquad &&\text{écrivez le membre de droite comme puissance de 3}\\
3^{3x + 1} &=  (3^2)^{x - 2} \qquad &&\text{appliquez les règles de calcul des puissances}\\
3^{3x + 1} &= 3^{2(x - 2)}  \qquad &&\text{appliquez le théorème ci-dessus}\\
3x + 1 &= 2(x-2)  \qquad &&\text{résolvez l'équation de degré 1}\\
3x + 1 &= 2x-4 \\
x &= -5 \\
$$
$S = \{-5\}$

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle $2^x + 4^x = 6$.

$$
2^x + 4^x &= 6 \qquad &&\text{écrivez les termes qui contiennent }x \text{ comme puissance de 2}\\
2^x + (2^2)^x &= 6  \qquad &&\text{appliquez les règles de calcul des puissances}\\
2^x + 2^{2x} &= 6  \qquad &&\text{appliquez les règles de calcul des puissances}\\
2^x + (2^x)^2 &= 6  \qquad &&\text{faites une substitution en posant } y = 2^x\\
y + y^2 &= 6  \qquad &&\text{résolvez l'équation de degré 2}\\
y^2 + y - 6 &= 0 \qquad &&\text{factorisez ou utilisez le discriminant}\\
(y + 3)(y-2) &= 0
$$

```{list-grid}
:style: grid-template-columns: 1fr 1fr;
- $$\text{Soit } y + 3 &= 0\\
  y &= -3 \\
  2^x &= -3  \qquad \text{impossible}
  $$

- $$\text {soit } y-2 &=0\\
  y &= 2\\
  2^x &= 2\\
  x &= 1\\
  $$
```
$S = \{1\}$

Certaines équations ne peuvent pas être résolues avec les régles de calculs des
puissances et/ou le théorème ci-dessus.

(exemple-approx)=
### Exemple {num2}`exemple:approx`

Il n'est pas possible de résoudre $3^x = 40$ avec les méthodes que vous
connaissez, car 40 ne peut pas s'écrire sous forme de puissance de 3. Mais
dans ce cas, il est possible de trouver une approximation de la solution.

$$
27 &<& 40 &<& 81  &\qquad \text{entourez }40 \text{ par deux puissances de 3 consécutives}\\
3^3 &<& 3^x &<& 3^4 &\qquad\\
3 &<& x &<& 4 &\qquad\\
$$

La solution de cette équation est un nombre réel compris entre 3 et 4.


## Fonctions logarithmes

````{admonition} Définition
:class: note
Soit $a$ un nombre réel strictement positif.
Le **logarithme de base $10$** ou **logarithme décimal** de $a$, noté
$\log_{10}(a)$ ou $\log(a)$, est le nombre réel défini par

```{math}
:class: align-center
\log_{10}(a) = x \quad \Longleftrightarrow \quad a = 10^x.
```
````

### Exemple {num2}`exemple`

Pour calculer le $log_{10}$ d'un nombre, il faut exprimer ce nombre sous forme
de puissance de $10$.

{.lower-alpha-paren}
1.  $\log_{10}(100) = \log_{10}(10^2) = 2$
2.  $\log_{10}(0.000\,001) = \log_{10}(10^{-6}) = -6$

### Exemple {num2}`exemple`

Sur la calculatrice, la touche {kbd}`lnlog` permet de calculer le logarithme
de base $10$ (pressez deux fois pour sélectionner `log`).

{.lower-alpha-paren}
1.  $\log_{10}(20) = \log(20) \approx 1.3$
2.  $\log_{10}(10\,345) = \log(10\,345) \approx 4.01$


````{admonition} Définition
:class: note
Soient $a$ et $b$ des nombres réels strictement positifs et $b \neq 1$.
Le **logarithme de base $b$** de $a$, noté $\log_b(a)$, est le nombre réel
défini par

```{math}
:class: align-center
\log_{b}(a) = x \quad \Longleftrightarrow \quad a = b^x.
```
````

### Exemple {num2}`exemple`

Pour calculer le $\log_{b}$ d'un nombre, il faut exprimer ce nombre sous forme
de puissance de $b$.

{.lower-alpha-paren}
1.  $\log_{3}(81) = \log_{3}(3^4) = 4$
2.  $\log_{6}(36) = \log_{6}(6^2) = 2$
3.  $\log_{2}(\dfrac{1}{8}) = \log_{2}(\dfrac{1}{2^3}) = \log_{2}(2^{-3}) = -3$
4.  $\log_{4}(\sqrt{4^3}) = \log_{4}(4^{\frac{3}{2}}) = \dfrac{3}{2}$
5.  $\log_{16}(4) = \log_{16}(\sqrt{16}) = \log_{16}(16^{\frac{1}{2}}) = \dfrac{1}{2}$

```{important}
Le logarithme d'un nombre négatif ou nul n'existe pas.
```

```{admonition} Théorème
:class: note
Soient $b \in \mathbb{R_+^*} \setminus \{1\}$ et $x \in \mathbb{R_+^*}$. La
fonction logarithmique $\log_b(x)$ et la fonction exponentielle $b^x$ sont
réciproques l'une de l'autre.
```

### Exemple {num2}`exemple`

La fonction logarithme et la fonction exponentielle sont réciproques l'une de
l'autre.

{.lower-alpha-paren}
1.  $\log_{4}(4^7) = 7$
2.  $3^{\log_{3}(2)} = 2$

````{admonition} Théorème
:class: note
Changement de base des logarithmes:

Soient $b \in \mathbb{R_+^*} \setminus \{ 1 \}$ et $x \in \mathbb{R_+^*}$.

```{math}
:class: align-center
\log_b(x) = \frac{\log(x)}{\log(b)}.
```
````

### Exemple {num2}`exemple`

Certaine calculatrice ne permettent pas de calculer les logarithmes autres que
ceux en base $10$, dans ce cas, il faut effectuer un changement de base:

{.lower-alpha-paren}
1.  $\log_{3}(1000) = \dfrac{\log(1000)}{\log(2)} \approx 9.966$
2.  $\log_{4}(30) = \dfrac{\log(30)}{\log(4)} \approx 2.453$

```{admonition} Théorème
:class: note
**Règles de calcul des logarithmes**

Pour $b$, $x$, $y \in \mathbb{R*_+}$ avec $b \neq 1$ et $n \in \mathbb{R}$,

1. $\log_b(x \cdot y) = \log_b(x) + \log_b(y)$
2. $\log_b(x^n) = n \cdot \log_b(x)$
3. $\log_b\left( \dfrac{x}{y} \right) = \log_b(x) - \log_b(y)$
4. $\log_b\left( \dfrac{1}{y} \right) = - \log_b(y) \quad \quad$ (cas particulier de la formule 3)
```

### Exemple {num2}`exemple`

Les règles de calcul des logarithmes permettent de simplifier les calculs.

{.lower-alpha-paren}
1.  $\log(25) + \log(4) = \log(25 \cdot 4) = \log(100) = \log(10^2) = 2$
2.  $\log_{3}(9^4) = 4 \cdot \log_{3}(9) = 4 \cdot \log_{3}(3^2) = 4 \cdot 2 = 8$
3.  $\log(\dfrac{10}{x}) + \log(x) = \log(\dfrac{10}{x} \cdot x) = \log(10) = 1$
4.  $\log(3x^2) - \log(x) = \log(\dfrac{3x^2}{x}) = \log(3x)$


### Exemple {num2}`exemple`

Dans l'{numref}`exemple %s<exemple:approx>`, nous n'avons trouvé qu'une approximation de la
solution de $x$, car il est impossible d'écrire $40$ sous forme de puissance de
$3$. Grâce au logarithme qui est la réciproque de l'exponentielle et aux régles
de calcul des logarithmes, il est possible de résoudre ce type d'équation.

$$3^x &= 40 \qquad \qquad \qquad \qquad \qquad &|& \log(...)\\
\log(3^x) &= \log(40)  &|& \log(x^n) = n \cdot \log(x)\\
x \cdot \log(3) &= \log(40)  &|& : \log(3)\\
x &= \dfrac{\log(40)}{\log(3)} \approx 3.358 &\\
S &= \{3.358\}$$

### Exemple {num2}`exemple`

$$4 \cdot 5^{x+1} &= 68 \qquad \qquad \qquad \qquad \qquad &|& \text{isolez le terme contenant } x \text{ en divisant par } 4\\
5^{x+1} &= 17 \qquad \qquad \qquad \qquad \qquad &|& \log(...)\\
\log(5^{x+1}) &= \log(17)  &|& \log(x^n) = n \cdot \log(x)\\
(x+1) \cdot \log(5) &= \log(17)  &|& : \log(5)\\
x+1 &= \dfrac{\log(17)}{\log(5)}  &|& -1\\
x &= \dfrac{\log(17)}{\log(5)} - 1 \approx 0.76 &\\
S &= \{0.76\}$$

### Exemple {num2}`exemple`

$$2^{x+2} + 3 \cdot 2^x &= 5^{3x} \qquad \qquad \qquad \qquad \qquad &|& a^{n+m} = a^n \cdot a^m\\
2^x \cdot 2^2 + 3 \cdot 2^x &= 5^{3x}  &|& \text{mise en évidence de }2^x\\
2^x (2^2 + 3) &= 5^{3x} &|& \text{CL}\\
2^x \cdot 7 &= 5^{3x} &|& \log(...)\\
\log(2^x \cdot 7) &= \log(5^{3x}) &|& \log(x \cdot y) = \log(x) + \log(y)\\
\log(2^x) + \log(7) &= \log(5^{3x}) &|& \log(x^n) = n \cdot \log(x)\\
x\log(2) + \log(7) &= 3x\log(5) &|& -3x\log(5) - \log(7)\\
x\log(2) -3x\log(5) &= -\log(7) &|& \text{mise en évidence de }x\\
x(\log(2) -3\log(5)) &= -\log(7) &|& :(\log(2) -3\log(5))\\
x &= \dfrac{-\log(7)}{\log(2) -3\log(5)} \approx 0.47 &\\
S &= \{0.47\}$$


### Exemple {num2}`exemple`

Résolvez l'équation logarithmique suivante $\log(x) = \log(3) + 2 \cdot \log(4)$

Comme le logarithme n'est défini que pour les valeurs strictement positives, il
faut déterminer le domaine de définition de cette équation. Pour cela, vérifiez
les conditions pour que tous les logarithmes de cette équation soient
strictement positifs:

$x > 0$ et $3 > 0$ (toujours vrai) et $4 > 0$ (toujours vrai) $\implies x>0 \implies D_f = \mathbb{R^*_+} = ]0; +\infty[$

Pour résoudre ce type d'équation, il faut la transformer pour obtenir un seul
logarithme de chaque côté de l'égalité:

$$\log(x) &= \log(3) + 2 \cdot \log(4) \qquad \qquad \qquad &|& n \cdot \log(x) = \log(x^n)\\
\log(x) &= \log(3) + \log(4^2) &|& \log(x) + \log(y) = \log(xy)\\
\log(x) &= \log(3 \cdot 4^2) &|& \text{CL}\\
\log(x) &= \log(48) &|& \log(x) = \log(y) \text{ et } x > 0, y > 0 \implies x = y\\
x &= 48 \in D_f&\\
S &= \{48\}$$

### Exemple {num2}`exemple`

Résolvez l'équation logarithmique suivante $\log(x + 1) = \log(3 - x)$

Domaine de définition:

$x + 1 > 0 \implies x > -1$ et $3 - x > 0 \implies x < 3 \implies D_f = ]-1; 3[$

Résolution:

$$\log(x + 1) &= \log(3 - x) \qquad \qquad \qquad &|& \log(x) = \log(y) \text{ et } x > 0, y > 0 \implies x = y\\
x + 1 &= 3 - x &|& + x -1\\
2x &= 2 &|& : 2\\
x &= \dfrac{2}{2} = 1 \\
x &= 1 \in D_f&\\
S &= \{1\}$$

### Exemple {num2}`exemple`

Résolvez l'équation logarithmique suivante $\log_2(x) + log_2(x - 1) = \log_2(12)$

Domaine de définition:

$x > 0$ et $x - 1 > 0 \implies x > 1 \implies D_f = ]1; +\infty[$

Résolution:

$$\log_2(x) + log_2(x - 1) &= \log_2(12) \qquad \qquad \qquad &|& \log_b(x) + \log_b(y) = \log_b(xy)\\
\log_2(x(x - 1)) &= \log_2(12) \qquad \qquad \qquad &|& \log_b(x) = \log_b(y) \text{ et } x > 0, y > 0 \implies x = y\\\\
x(x - 1) &= 12 &|& \text{CL et } -12\\
x^2 - x - 12 &= 0 &|& \text{factorisation}\\
(x-4)(x+3) &= 0 &|& \text{factorisation}
$$

```{list-grid}
:style: grid-template-columns: 2fr 1fr 5fr;
- $$x- 4 &= 0\\
  x &= 4 \in D_f
  $$

- ou

- $$x + 3 &= 0\\
  x &= -3 \notin D_f
  $$
```
$S = \{4\}$


````{admonition} Définition
:class: note
Le **nombre d'Euler** $e$ est le nombre réel (irrationnel) défini par

```{math}
:class: align-center
e = \lim_{n\to \infty} \left( 1 + \dfrac{1}{n} \right)^n = 2.718281828459\dots
```
````

````{admonition} Définition
:class: note
Le **logarithme naturel** est le logarithme de base $e$. Il est noté:

```{math}
:class: align-center
\log_e(x) = \ln(x)
```
````

````{admonition} Propriétés
:class: note
- $\ln(e) = 1$
- $\ln(e^x) = x$
- $e^{\ln(x)} = x$
````

### Exemple {num2}`exemple`

Résolvez l'équation exponentielle suivante: $1 + e^{2x} = 7$


$$1 + e^{2x} &= 7 \qquad \qquad \qquad &|& -1 \text{ (isolez l'exponentielle)}\\
e^{2x} &= 6 &|& \ln(\dots)\\
\ln(e^{2x}) &= \ln(6) &|& \ln(e^x) = x\\
2x &= \ln(6) &|& :2\\
x &= \dfrac{\ln(6)}{2}\approx 0.896 &\\
S &= \{0.896\}$$


### Exemple {num2}`exemple`

Résolvez l'équation logarithmique suivante: $2 + \ln(x - 1) = 5$

Domaine de définition:

$x - 1 > 0 \implies x > 1 \implies D_f = ]1; +\infty[$

Résolution:

$$2 + \ln(x - 1) &= 5 \qquad \qquad \qquad &|& -2 \text{ (isolez le logarithme)}\\
\ln(x - 1) &= 3 &|& e^{\dots}\\
e^{\ln(x - 1)} &= e^3  &|& e^{\ln(x)} = x\\
x - 1 &= e^3 &|& + 1\\
x &= e^3 + 1\approx 21.086 &\\
S &= \{21.086\}$$


````{admonition} Définition
:class: note
Une **fonction exponentielle** est une fonction de la forme
```{math}
:class: align-center
f(x) = P_0 \cdot b^x
```
avec $P_0 \in \mathbb{R^*_+}$ et $b \in \mathbb{R^*_+} \setminus \{ 1 \}$.

Cette fonction peut aussi s'écrire en utilisant la base $e$
```{math}
:class: align-center
f(x) = P_0 \cdot e^{kx}
```
avec $P_0 \in \mathbb{R^*_+}$ et $k \neq 0$

Si $k > 0$, le processus modélisé est croissant, si $k < 0$, ce processus est
décroissant.
````

### Exemple {num2}`exemple`

La croissance d'une population de 1000 batéries qui double chaque jour est
donnée par la fonction exponentielle $C(t) = 1000 \cdot 2^t$ avec $t$ en jours.

1.  Exprimez cette fonction en utilisant la base $e$:

    $C(t) = 1000 \cdot 2^t = 1000 \cdot e^{\ln(2^t)} = 1000 \cdot e^{t \cdot \ln(2)} \approx 1000 \cdot e^{0.6931t}$

2.  Combien de bactéries y aura-t-il après 6 jours?

    $C(6) = 1000 \cdot 2^6 = 64000$ bactéries

    Après 6 jours, il y aura 64'000 bactéries.

3.  Après combien de jour la population de batéries atteindra-t-elle un million
    d'individus?

    Il faut résoudre: $C(t) = 1\,000\,000$

    $$1000 \cdot 2^t &= 1\,000\,000\\
    2^t &= 1\,000\\
    \log(2^t) &= \log(1\,000)\\
    t \cdot \log(2) &= \log(1\,000)\\
    t &= \dfrac{\log(1\,000)}{\log(2)} = 9.97 \text{ jours}$$

    Il faudra ~10 jours.


(exemple-capital)=
### Exemple {num2}`exemple:capital`

La croissance d'un capital est donné par la fonction exponentielle
$C(n) = C_0 \cdot (1 + I)^n$ avec

$C_0$: capital initial\
$I$: taux d'intérêt\
$n$: durée en années

{.lower-alpha-paren}
1.  Quel capital final obtiendrez-vous si vous placez $1\,500$ CHF à un taux
    d'intérêt annuel de $0.5\%$ pendant $2$ ans?

    $C_0 = 1500$, $I = 0.5\% = 0.005$ et $n = 2$

    $C(2) = 1500 \cdot (1 + 0.005)^2 = 1515.0475$

    Le capital sera de $1515.0475$ CHF, le gain sera de $15.0475$ CHF.

2.  Pendant combien de temps faut-il placer un capital de $1\,000$ CHF à un taux
    de $1\%$ pour obtenir $1220.19$ CHF?

    $C_0 = 1000$ et $I = 1\% = 0.01$

    $$
    C(n) &= 1220.19\\
    1000 \cdot (1 + 0.01)^n &= 1220.19\\
    1000 \cdot (1.01)^n &= 1220.19\\
    (1.01)^n &= 1.22019\\
    \log((1.01)^n) &= \log(1.22019)\\
    n \log(1.01) &= \log(1.22019)\\
    n &= \dfrac{\log(1.22019)}{\log(1.01)} \approx 20
    $$

    Il faudra 20 ans.

3.  Quel est le taux d'intérêt annuel si une somme de $2\,000$ CHF est placée à
    la banque pendant $5$ ans et que le bénéfice est de $154.568$ CHF?

    $C_0 = 2000$ et $n = 5$

    $$
    C(5) &= 2000 + 154.568\\
    2000 \cdot (1 + I)^5 &= 2154.568\\
    (1 + I)^5&= \dfrac{2154.568}{2000}\\
    (1 + I)^5&= 1.077284\\
    1 + I&= \sqrt[5]{1.077284}\\
    I&= \sqrt[5]{1.077284} - 1 = 0.014999999 = 0.015\\
    $$

    La taux d'intérêt annuel est de $15\%$.




```{admonition} Définition
:class: note
Si dans un processus une quantité croît de façon exponentielle, on appelle
**temps de doublement** du processus le temps qu'il faut à la quantité pour
doubler.

Lorsque la quantité décroît de façon exponentielle, la **demi-vie** du processus
est le temps qu'il faut à la quantité pour qu'elle soit divisée par $2$.
```

### Exemple {num2}`exemple`

Reprenons l'{numref}`exemple %s<exemple:capital>`. Après combien de temps, la
capital aura-t-il doublé avec un taux de $1\%$?

$$2 \cdot C(n) &= C(n + d)\\
2 \cdot C_0 \cdot (1 + 0.01)^n &= C_0 \cdot (1 + 0.01)^{n+d}\\
2 \cdot C_0 \cdot (1.01)^n &= C_0 \cdot (1.01)^{n+d} \qquad\qquad &|&: C_0\\
2 \cdot (1.01)^n &= (1.01)^{n+d} \qquad\qquad &|& a^{n+m} = a^n \cdot a^m\\
2 \cdot (1.01)^n &= (1.01)^n \cdot (1.01)^d \qquad\qquad &|& : (1.01)^n\\
2 &= (1.01)^d \qquad\qquad &|& \log(\dots)\\
\log(2) &= \log((1.01)^d) \qquad\qquad &|& \log(a^n) = n\log(a)\\
\log(2) &= d \cdot \log(1.01)\\
d &= \dfrac{\log(2)}{\log(1.01)} = 69.66\\
$$

Il faudra presque 70 ans pour doubler son capital avec un taux de 1 %.
