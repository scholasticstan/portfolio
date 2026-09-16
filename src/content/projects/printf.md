---
title: printf
description: A reimplementation of the C standard library's printf, handling the common conversion specifiers, flags, width and precision.
date: 2023-01-23
tags: [C, Standard Library, Systems]
featured: false
repo: https://github.com/scholasticstan/printf
accent: '#a78bfa'
---

## What it covers

`%c`, `%s`, `%d`, `%i`, `%u`, `%o`, `%x`, `%X`, `%b`, `%p`, `%%`, plus the `+`, space and `#` flags, field width, precision, and the `l` and `h` length modifiers. Output goes through a local buffer flushed with a single `write` call rather than one syscall per character.

## Why it matters

Variadic functions, buffer management and number base conversion, all without a library to lean on. It is the kind of exercise that makes you read the actual specification.

Written with Umar Alabira during ALX.
