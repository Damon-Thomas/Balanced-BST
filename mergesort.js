#!/usr/bin/env node

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  let leftClean = mergeSort(left);
  let rightClean = mergeSort(right);

  let i = 0;
  let j = 0;
  let clean = [];
  while (clean.length < arr.length) {
    if (i === leftClean.length) {
      clean.push(...rightClean.slice(j, rightClean.length));

      break;
    }
    if (j === rightClean.length) {
      clean.push(...leftClean.slice(i, leftClean.length));

      break;
    }
    if (leftClean[i] < rightClean[j]) {
      clean.push(leftClean[i]);

      i++;
    } else {
      clean.push(rightClean[j]);

      j++;
    }
  }

  return clean;
}

export {mergeSort}

