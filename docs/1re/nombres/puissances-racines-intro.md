% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Introduction - Puissances et racines

```{metadata}
page-break-avoid-inside: 2
```

## Exercice {nump}`exercice`

Calculez.

{.lower-alpha-paren .columns-2}
1. $2^6=$
2. $4^2=$
3. $(-3)^3=$
4. $10^5=$
5. $-2^4=$
6. $(-2)^4=$
7. $0.5^2=$
8. $20^0=$

```{solution}
{.lower-alpha-paren .columns-2}
1. $2^6=64$
2. $4^2=16$
3. $(-3)^3=-27$
4. $10^5=100\,000$
5. $-2^4=-16$
6. $(-2)^4=16$
7. $0.5^2=0.25$
8. $20^0=1$
```

Expliquez pourquoi les résultats de e) et de f) ne sont pas identiques.

```{solution}
$-2^4 = - \,2 \cdot 2 \cdot 2 \cdot 2 = -16$

$(-2)^4 = (-2) \cdot (-2) \cdot(-2) \cdot(-2) = 16$
```

## Exercice {nump}`exercice`

Effectuez les deux calculs suivants.

{.lower-alpha-paren .columns-2}
1. $2^7=$
2. $2^3 \cdot 2^4=$

```{solution}
{.lower-alpha-paren .columns-2}
1. $2^7=128$
2. $2^3 \cdot 2^4= 8 \cdot 16 = 128$
```

Quelle est la formule pour la multiplication de deux puissances ayant la même
base?

```{math}
:class: align-center
a^n \cdot a^m =
```

````{solution}
```{math}
:class: align-center
a^n \cdot a^m = a^{n+m}
```
````

## Exercice {nump}`exercice`

<style>
@media print {
  .table.reset-print.puissances :is(th, td) {
    border-width: 1px;
    padding: 0.5rem;
  }
  .table.reset-print.puissances th {
    border-bottom-width: 2px;
  }
  .table.reset-print.puissances :is(th, td):first-child {
    border-right-width: 2px;
  }
}
</style>


{.lower-alpha-paren}
1.  Complétez le tableau suivant.

    {.reset-print .puissances}
    |$n$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$|
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    |$2^n$| | | | |$2$|$4$|$8$|

    ```{solution}
    {.reset-print .puissances}
    |$n$|$-3$|$-2$|$-1$|$0$|$1$|$2$|$3$|
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    |$2^n$| $0.125 = \dfrac{1}{8}$|$0.25 = \dfrac{1}{4}$|$0.5 = \dfrac{1}{2}$|$1$|$2$|$4$|$8$|
    ```

2.  Que peut-on dire des puissances de $2$ avec un exposant nul ou négatif?
    {vspace}`2lh`
    ```{solution}
    $2^{-1} = \dfrac{1}{2^1}$ , $\quad 2^{-2} = \dfrac{1}{4} = \dfrac{1}{2^2} \quad$ et
    $\quad 2^{-3} = \dfrac{1}{8} = \dfrac{1}{2^3} \quad$
    ```
3.  Quelle est la définition générale de $2^{-n}$?
    ```{math}
    :class: align-center
    2^{-n}=
    ```

    ````{solution}
    ```{math}
    :class: align-center
    2^{-n}= \dfrac{1}{2^n}
    ```
    ````

{.page-break}
## Exercice {nump}`exercice`

Complétez.

{.lower-alpha-paren .columns-4}
1. $\sqrt{4} = \ldots$
2. $\sqrt{81} = \ldots$
3. $\sqrt{\ldots \phantom{i}} = 5$
4. $\sqrt{\ldots \phantom{i}} = 7$
5. $\sqrt[3]{27} = \ldots$
6. $\sqrt[3]{64} = \ldots$
7. $\sqrt[3]{\ldots \phantom{i}} = 2$
8. $\sqrt[3]{\ldots \phantom{i}} = 1$

```{solution}
{.lower-alpha-paren .columns-4}
1. $\sqrt{4} = 2$
2. $\sqrt{81} = 9$
3. $\sqrt{25} = 5$
4. $\sqrt{49} = 7$
5. $\sqrt[3]{27} = 3$
6. $\sqrt[3]{64} = 4$
7. $\sqrt[3]{8} = 2$
8. $\sqrt[3]{1} = 1$
```

## Exercice {nump}`exercice`

Complétez.

{.lower-alpha-paren .columns-4}
1. $\sqrt[\ldots]{3^2} =3$
2. $\sqrt[\ldots]{4^3} =4$
3. $\sqrt[\ldots]{2^4} =2$
4. $\sqrt[\ldots]{6^{10}} =6$

```{solution}
{.lower-alpha-paren .columns-4}
1. $\sqrt[2]{3^2} =3$
2. $\sqrt[3]{4^3} =4$
3. $\sqrt[4]{2^4} =2$
4. $\sqrt[10]{6^{10}} =6$
```

## Exercice {nump}`exercice`

Quels calculs peuvent être résolus? Expliquez.

{.lower-alpha-paren .columns-3}
1. $\sqrt{16} =$
2. $\sqrt{-16} =$
3. $\sqrt[3]{8} =$
4. $\sqrt[3]{-8} =$
5. $\sqrt[4]{1} =$
6. $\sqrt[4]{-1} =$

```{solution}
{.lower-alpha-paren .columns-3}
1. $\sqrt{16} = 4$
2. $\sqrt{-16}$ impossible $\notin \mathbb{R}$
3. $\sqrt[3]{8} = 2$
4. $\sqrt[3]{-8} = -2$
5. $\sqrt[4]{1} = 1$
6. $\sqrt[4]{-1}$ impossible $\notin \mathbb{R}$
```

## Exercice {nump}`exercice`
À l'aide de la calculatrice, effectuez:

{.lower-alpha-paren .columns-3}
1. $16^{\frac{1}{2}} =$
2. $81^{\frac{1}{2}} =$
3. $9^{\frac{1}{2}} =$
4. $8^{\frac{1}{3}} =$
5. $125^{\frac{1}{3}} =$
6. $(-27)^{\frac{1}{3}} =$

```{solution}
{.lower-alpha-paren .columns-3}
1. $16^{\frac{1}{2}} = \sqrt{16} = 4$
2. $81^{\frac{1}{2}} = \sqrt{81} = 9$
3. $9^{\frac{1}{2}} = \sqrt{9} = 3$
4. $8^{\frac{1}{3}} = \sqrt[3]{8} = 2$
5. $125^{\frac{1}{3}} = \sqrt[3]{125} = 5$
6. $(-27)^{\frac{1}{3}} = \sqrt[3]{-27} = -3$
```

En déduire les résultats suivants:
```{math}
:class: align-center
a^{\frac{1}{2}} =

\left( \sqrt{a}\right)^2=

\left( a^{\frac{1}{2}}\right)^2=
```

````{solution}
```{math}
:class: align-center
a^{\frac{1}{2}} = \sqrt{a}

\left( \sqrt{a}\right)^2= a \text{ si } a \geq 0

\left( a^{\frac{1}{2}}\right)^2= a \text{ si } a \geq 0
```
````
