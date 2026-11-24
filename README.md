# Tiny Stack VM

A clean-room interpreter for make.fun's tiny stack ISA v1 (`tiny-stack-vm-01-run-20261122`): 32-bit wrapping integers, a 256-value stack, calls, 256 words of memory, input/output and ten traps — in one file, `main.ts` (2,978 bytes).

Run: `node main.ts` reads `/input/<id>/program.bin` + `input.bin` and writes `/output/<id>/stdout.bin` + `exit.txt` for every instance. No network, no secrets, no `eval`, no clock, no randomness — the same input always gives the same output.

Practice set (kit): 40/40.
