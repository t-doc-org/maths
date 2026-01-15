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

Résolvez l'equation exponentielle $5^x = 125$.

$$
5^x &= 125  \qquad &&\text{écrivez le membre de droite comme puissance de 5}\\
5^x &= 5^3  \qquad &&\text{appliquez le théorème ci-dessus}\\
x &= 3
$$
$S = \{3\}$

### Exemple {num2}`exemple`

Résolvez l'equation exponentielle $4^{2x - 1} = 64$.

$$
4^{2x - 1} &= 64  \qquad &&\text{écrivez le membre de droite comme puissance de 4}\\
4^{2x - 1} &= 4^3  \qquad &&\text{appliquez le théorème ci-dessus}\\
2x - 1 &= 3  \qquad &&\text{résolvez l'équation de degré 1}\\
2x &= 4 \\
x &= 2 \\
$$
$S = \{2\}$

### Exemple {num2}`exemple`

Résolvez l'equation exponentielle $3^{x + 2} - \dfrac{1}{9} = 0$.

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

Résolvez l'equation exponentielle $3^{3x + 1} =  9^{x - 2}$.

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

Résolvez l'equation exponentielle $2^x + 4^x = 6$.

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

### Exemple {num2}`exemple`

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

```{admonition} Théorème
:class: note
Soient $b \in \mathbb{R_+^*} \setminus \{1\}$ et $x \in \mathbb{R_+^*}$. La
fonction logarithmique $\log_b(x)$ et la fonction exponentielle $b^x$ sont
réciproques l'une de l'autre.
```

````{admonition} Théorème
:class: note
Changement de base des logarithmes:

Soient $b \in \mathbb{R_+^*} \setminus \{ 1 \}$ et $x \in \mathbb{R_+^*}$.

```{math}
:class: align-center
\log_b(x) = \frac{\log(x)}{\log(b)}.
```
````

```{admonition} Théorème
:class: note
**Règles de calcul des logarithmes**

Pour $b$, $x$, $y \in \mathbb{R*_+}$ avec $b \neq 1$ et $n \in \mathbb{R}$,

- $\log_b(x \cdot y) = \log_b(x) + \log_b(y)$
- $\log_b\left( \dfrac{x}{y} \right) = \log_b(x) - \log_b(y)$
- $\log_b(x^n) = n \cdot \log_b(x)$
```

````{admonition} Définition
:class: note
Le **nombre d'Euler** $e$ est le nombre réel défini par

```{math}
:class: align-center
e = \lim_{n\to \infty} \left( 1 + \dfrac{1}{n} \right)^n.
```
````

````{admonition} Définition
:class: note
Une **fonction exponentielle** est une fonction de la forme
```{math}
:class: align-center
f(x) = P_0 \cdot b^x
```
avec $P_0 \in \mathbb{R^*_+}$ et $b \in \mathbb{R^*_+} \setminus \{ 1 \}$.
````

```{admonition} Définition
:class: note
Si dans un processus une quantité croît de façon exponentielle, on appelle
**temps de doublement** du processus le temps qu'il faut à la quantité pour
doubler.

Lorsque la quantité décroît de façon exponentielle, la **demi-vie** du processus
est le temps qu'il faut à la quantité pour qu'elle soit divisée par $2$.
```
