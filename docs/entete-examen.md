% Copyright 2025 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

<style>
.exam-header {
  margin-top: 0;
  grid-template-columns: 5fr 1fr;
  gap: 4rem;
}
.exam-header > :nth-child(1) {
  position: relative;
  overflow: hidden;
}
.exam-header > :nth-child(1) > p {
  display: contents;
}
.exam-header > :nth-child(1)::after {
  position: absolute;
  padding-left: 0.5rem;
  text-align: right;
  content: "................................................................"
           "................................................................"
           "................................................................"
           "................................................................";
}
table.points > thead > tr > th {
  min-width: 3rem;
}
</style>

````{list-grid}
:class: exam-header
- Nom, prénom:
- Note:
````
```{flex-table}
:class: points grid align-left
{t=h}|{.l}Question   |{points=label}|Total
{t=b}|{t=h .l}Points |{points=value}|{points=sum}
     |{t=h .l}Obtenus|{points=empty}|
```
