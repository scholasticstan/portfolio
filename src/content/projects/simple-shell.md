---
title: Simple Shell
description: A Unix command interpreter written in C, from the man pages up. Built with a teammate during ALX.
date: 2023-02-20
tags: [C, Linux, Processes, Systems]
featured: true
repo: https://github.com/scholasticstan/simple_shell
accent: '#5eead4'
---

## What it is

A working shell you can run and type commands into. It reads a line, splits it into arguments, finds the program on `PATH`, forks, executes it in the child and waits in the parent. It handles built-ins (`exit`, `env`, `setenv`, `unsetenv`, `cd`, `alias`, `history`), variables like `$?` and `$$`, comments, and command chaining with `;`, `&&` and `||`. It works in both interactive and non-interactive mode, so you can pipe a script into it.

## What I learned from it

- What a process actually is. `fork`, `execve`, `wait` and exit codes stop being vocabulary and become tools.
- Why memory management is a discipline, not a feature. Every `malloc` in the tokenizer has a matching `free`, and Valgrind was part of the test loop.
- How to read a man page and implement from it rather than from a tutorial.
- Working in a pair on C code with a strict style checker (Betty) and no framework to hide behind.

Written with Umar Alabira as part of the ALX Software Engineering programme.
