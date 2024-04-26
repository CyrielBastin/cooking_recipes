# TODO

## fix tests for recipes controller
the test `updates_bolognes_ingredients` -- ligne 125
properly destroys an ingredient thanks to the attribute `_destroy` set to `true`.
However in the other tests (`updates_bolognese_instructions`, `updates_a_recipe_fully`), that same attribute doesn't seem to work.
I can't figure out why.
