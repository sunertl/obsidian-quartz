---
tags:
  - docs
---
Distinguish this from Development Environments and Build Environments.

You will tend to find a hierarchy here.

Run time environment - Everything you need to execute a program, but no tools to change it.

Build environment- Given some code written by someone, everything you need to compile it or otherwise prepare an executable that you put into a Run time environment. Build environments are pretty useless unless you can see tests what you have built, so they often include Run too. In Build you can't actually modify the code.

Development environment - Everything you need to write code, build it and test it. Code Editors and other such tools. Typically also includes Build and Run.