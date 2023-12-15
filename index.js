"use strict";
import isPerfect from "./reverse.js";
const i_1 = document.querySelector('#i_1');
const i_2 = document.querySelector('#i_2');
i_1.addEventListener('input', () => i_2.value = isPerfect(i_1.value));



