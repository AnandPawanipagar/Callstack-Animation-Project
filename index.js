"use strict";
let count = "0";
//pushing the box
function pushElement() {
  count++;
  let block_name = "";
  let highcount = count;
  for (let i = 0; i < count; i++) {
    highcount--;
    block_name = block_name + `<div class="Box">${Number(highcount + 1)}</div>`;
  }
  console.log(block_name);
  document.getElementById("boxes").innerHTML = block_name;
}
//poping the box
function popElement() {
  if (count != 0) {
    count--;
  }
  console.log(count);
  document.getElementById("boxes").innerHTML = "";
  let highcount = count;
  let block_name = "";
  for (let i = 0; i < count; i++) {
    highcount--;
    block_name = block_name + `<div class="Box">${Number(highcount + 1)}</div>`;
  }
  console.log(block_name);
  document.getElementById("boxes").innerHTML = block_name;
}
