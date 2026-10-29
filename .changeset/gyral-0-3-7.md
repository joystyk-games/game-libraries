---
'@joystyk/arcade': patch
'@joystyk/cards-ui': patch
'@joystyk/catalog': patch
'@joystyk/launcher': patch
'@joystyk/ui': patch
---

Depend on Gyral 0.3.7 instead of 0.3.1, and build and test the libraries against it.
Applications on Gyral 0.3.7 can then share one `@gyral/core` with these libraries
without overriding the libraries' Gyral versions.
