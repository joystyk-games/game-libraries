---
'@joystyk/launcher': patch
---

Show a local game's results only after its save slot is cleared. The stage used to show the
outcome first and delete the finished game's saves afterwards, in two storage transactions. A
reload in between abandoned the deletes, and the next page offered the finished game for
resuming at its last position before the end, so a player could carry on a game they had
already lost.
