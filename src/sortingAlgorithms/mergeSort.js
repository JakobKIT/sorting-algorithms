export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    const helperArray = array.slice();
    sort(array, 0, array.length - 1, helperArray, animations);
    return animations;
}

function sort(
    array,
    leftIndex,
    rightIndex,
    helperArray,
    animations
) {
    if (leftIndex === rightIndex) return;
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    sort(helperArray, leftIndex, midIndex, array, animations);
    sort(helperArray, midIndex + 1, rightIndex, array, animations);
    merge(array, leftIndex, midIndex, rightIndex, helperArray, animations);
}

function merge(
    array,
    leftIndex,
    midIndex,
    rightIndex,
    helperArray,
    animations
) {
    let k = leftIndex;
    let i = leftIndex;
    let j = midIndex + 1;
    while (i <= midIndex && j <= rightIndex) {
        // Pushing the values to compare 2 times
        // so we can change their colors 2 times
        animations.push([i, j]);
        animations.push([i, j]);
        if (helperArray[i] <= helperArray[j]) {
            animations.push([k, helperArray[i]]);
            array[k++] = helperArray[i++];
        } else {
            animations.push([k, helperArray[j]]);
            array[k++] = helperArray[j++];
        }
    }
    while (i <= midIndex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, helperArray[i]]);
        array[k++] = helperArray[i++];
    }
    while (j <= rightIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, helperArray[j]]);
        array[k++] = helperArray[j++];
    }
}

