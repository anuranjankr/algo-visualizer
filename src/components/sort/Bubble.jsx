import React from "react";
import { Button } from "@material-ui/core";
import "./../layout/Layout.css";

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 90,
      noOfBars: 8,
      array: []
    };
  }

  //resetArray
  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.noOfBars; i++) {
      let num = Math.floor(Math.random() * 100) + 6;
      array.push(num > 99 ? num - 6 : num);
    }
    // console.log({ array }, this);
    this.setState({ array });
  }
  //bubblesort_Algo
  bubbleSort() {
    let initialArray = document.getElementsByClassName("elem");
    let length = initialArray.length;
    let finalArray = [];
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        initialArray[j].style.backgroundColor = "red";
        initialArray[j + 1].style.backgroundColor = "red";
        finalArray.push(j, j + 1, 0); //0 means selected
        if (initialArray[j].innerHTML > initialArray[j + 1].innerHTML) {
          finalArray.push(j, j + 1, 1); //1 means swap
          let temp = initialArray[j].innerHTML;
          let heigh = initialArray[j].style.height;
          let padd = initialArray[j].style.paddingTop;
          initialArray[j].innerHTML = initialArray[j + 1].innerHTML;
          initialArray[j].style.height = initialArray[j + 1].style.height;
          initialArray[j].style.paddingTop =
            initialArray[j + 1].style.paddingTop;
          initialArray[j + 1].innerHTML = temp;
          initialArray[j + 1].style.height = heigh;
          initialArray[j + 1].style.paddingTop = padd;
          initialArray[j].style.backgroundColor = "green";
          initialArray[j + 1].style.backgroundColor = "green";
        }
        finalArray.push(j, j + 1, 2); //2 means done
        initialArray[j].style.backgroundColor = "grey";
        initialArray[j + 1].style.backgroundColor = "grey";
      }
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <section className="app__navButtons">
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            style={{ marginRight: 5 }}
            onClick={() => this.bubbleSort()}
          >
            Start
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            style={{ marginRight: 5 }}
            onClick={() => this.resetArray()}
          >
            Change Values
          </Button>
        </section>
        <section
          className="app__navButtons"
          style={{
            marginTop: 5,
            marginRight: 5,
            marginLeft: 5
          }}
        >
          {array.map((value, idx) => (
            <button
              key={idx}
              variant="contained"
              color="secondary"
              style={{
                height: value + 100,
                paddingTop: 75 + value,
                marginRight: 5,
                flex: 2
              }}
              className="elem"
            >
              {value}
            </button>
          ))}
        </section>
      </>
    );
  }
}

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
