---
title: Python 101 - for Code Club
date: 2017-11-29 09:00:00 Z
permalink: "/python101/"
layout: single
author_profile: false
type: pages

---

---  
# Python 101

---


Loops - the indentation is important!

```python
for i in range(10):
  print(str(i))
  print("this is in the loop")
print("this is after the loop")
```


Graphics with Turtle

```python
from turtle import *
penup()
goto(-100,100)
pendown()
pencolor("red")
forward(180)
right(90)
forward(180)
pencolor(0,255,0)
right(90)
forward(100)
right(90)
forward(100)
```

Shape and stamp

```python
from turtle import *
penup()
shape("turtle")
stamp()
forward(100)
stamp()
```
