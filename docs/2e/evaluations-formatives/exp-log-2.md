% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Fonctions exponentielles et logarithmes - Partie 2

```{metadata}
subject: "Mathématiques 2e année"
print-styles: tdoc/print-exam.css
page-break-force: 1
page-break-avoid: 2
```

```{include} /_cache/entete-examen.md
```
```{class} align-center
**Détails des calculs obligatoires. Attention au soin.\
Réponse sous forme de valeur exacte simplifiée.\
Calculatrice autorisée.**
```
---

## Formulaires

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

```{admonition} Théorème
:class: note
**Règles de calcul des logarithmes**

Pour $b$, $x$, $y \in \mathbb{R^*_+}$ avec $b \neq 1$ et $n \in \mathbb{R}$,

1. $\log_b(x \cdot y) = \log_b(x) + \log_b(y)$
2. $\log_b(x^n) = n \cdot \log_b(x)$
3. $\log_b\left( \dfrac{x}{y} \right) = \log_b(x) - \log_b(y)$
4. $\log_b\left( \dfrac{1}{y} \right) = - \log_b(y) \quad \quad$ (cas particulier de la formule 3)
```


## Question {nump}`question`{points}`12`

Résolvez les équations suivantes:

{.lower-alpha-paren .vsep-2}
1.  $5^{2-x} = 7^x$
2.  $4^x - 3 \cdot 2^x + 2 = 0$
3.  $\log_2(6 - x) = \log_2(4x)$
4.  $\log(3x - 1) + \log(x) = \log(4)$



```{solution}
{.lower-alpha-paren .vsep-2}
1.  $S = \left\{\dfrac{2 \log(5)}{\log(5) + \log(7)}\right\} = \{0.905\}$
2.  $S = \{0; 1\}$
3.  $D = ]0;6[ \qquad S = \left\{\dfrac{6}{5}\right\}$
4.  $D = \left]\dfrac{1}{3};+\infty\right[ \qquad S = \left\{\dfrac{4}{3}\right\}$
```

## Question {nump}`question`{points}`6`

Une substance active est injectée dans le sang d'un patient. On observe que 4
heures après l'injection, il reste $144$ mg de la substance, et après 7 heures,
il n'en reste plus que $18$ mg.

La fonction $Q(t)=Q_0 \cdot b^t$ représente la quantité de substance active
présente dans le corps $t$ heures après l'administration, où $Q_0$ est la
quantité initiale.

{.lower-alpha-paren .vsep-2}
1.  Déterminez les valeurs de $Q_0$ et de $b$.
2.  Quelle quantité de substance active restera-t-il après une demi-journée (12
    heures)?
3.  Après combien de temps ne restera-t-il plus que 10 % de cette substance dans
    le corps? Répondez en heures, minutes, secondes.

```{solution}
{.lower-alpha-paren .vsep-2}
1.  $Q(4) = Q_0 \cdot b^4 = 144 \implies Q_0 = \dfrac{144}{b^4}$<br>
    $Q(7) = Q_0 \cdot b^7 = 18 \implies Q_0 = \dfrac{18}{b^7}$<br>
    $\implies \dfrac{144}{b^4} = \dfrac{18}{b^7} \implies \dfrac{b^7}{b^4} = \dfrac{18}{144} \implies b^3 = \dfrac{1}{8} \implies b = \dfrac{1}{2}$ <br>
    $Q_0 \cdot \left(\dfrac{1}{2}\right)^4 = 144 \implies Q_0 = 16 \cdot 144 = 2304$ mg<br>
    $Q(t)=2304 \cdot \left(\dfrac{1}{2}\right)^t$
2.  $Q(12)=2304 \cdot \left(\dfrac{1}{2}\right)^{12} = 0.5625$ mg<br>
    Il restera $0.5625$ mg.
3.  $Q(t) = \dfrac{10}{100} \cdot Q_0$<br>
    $2304 \cdot \left(\dfrac{1}{2}\right)^t = 0.1 \cdot 2304$<br>
    $\left(\dfrac{1}{2}\right)^t = 0.1$<br>
    $\log\left(\left(\dfrac{1}{2}\right)^t \right) = \log(0.1)$<br>
    $t \cdot \log\left(\dfrac{1}{2}\right) = \log(0.1)$<br>
    $t = \dfrac{\log(0.1)}{\log\left(\dfrac{1}{2}\right)} \simeq 3.3219\,\text{h} \simeq 3\,\text{h}\,19\,\text{min}\,19\,\text{s}$<br>
    Il ne restera que 10\% de la substance active après 3 h 19 min 19 s.
```
