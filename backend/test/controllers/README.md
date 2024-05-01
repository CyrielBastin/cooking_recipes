Some tests inside `recipes_controller_test` don't work.
The attribute `_destroy` from `accepts_nested_attributes_for` won't delete the associated child.
There is also an issue with how the `params` are sent with the test `updates 'bolognese' ingredients`
(2 of the `params` sent are merged into 1).

Manual Testing seem to work though!

We will test the controller in the frontend to try to pinpoint where the problem comes from.

---
The route `user_registration` doesn't seem to work in testing either.
We shall try it on the frontend too.
