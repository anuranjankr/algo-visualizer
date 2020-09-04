import React, { useState } from "react";

const Bubble = () => {
  const [speed, setSpeed] = useState(50);
  const [noOfBars, setNoOfBars] = useState(16);
  //create array
  //const create
  //start
  //bubblesort_Algo
  const bubbleSort = (initialArray) => {
    let length = initialArray.length;
    let finalArray = [];
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        finalArray.push(j, j + 1, 0); //0 means selected
        if (initialArray[j] > initialArray[j + 1]) {
          finalArray.push(j, j + 1, 1); //1 means swap
          let temp = initialArray[j];
          initialArray[j] = initialArray[j + 1];
          initialArray[j + 1] = temp;
        }
        finalArray.push(j, j + 1, 2); //2 means done
      }
    }
    return finalArray;
  };
  //slider for speed
  //no of bars
  return <div>Do Bubble sort here!</div>;
};

export default Bubble;

/*

normal array->grey

Input : initial_arr ->16 nom

function bubble_sort(initial_arr){

  final ->{[1st index, 2nd index, type of operation->{select->"red'0'", swap"yellow'1'", done"green'2'"}]
  ->[0,1,0]}

  return final_arr;
}
*/
