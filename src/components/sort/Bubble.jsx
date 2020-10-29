import React from "react";

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 90,
      noOfBars: 8,
      array: [],
      arrayIndex: []
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
    this.bubbleSort();
  }
  //bubblesort_Algo
  bubbleSort() {
    let initialArray = this.state.array.slice();
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
    this.setState({ arrayIndex: finalArray });
  }

  runstart() {
    const ANIMATION_SPEED_MS = this.state.speed;
    // const SECONDARY_COLOR = "#dc3545";
    const third_color = "#28a745";

    const animations = this.state.arrayIndex;
    const arrayBars = document.getElementsByClassName("elem");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, currState] = animations[i];
      if (currState === 0) {
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = "rgb(197, 17, 98)";
          arrayBars[barTwoIdx].style.backgroundColor = "rgb(197, 17, 98)";
        }, i * ANIMATION_SPEED_MS);
      }
      if (currState === 1) {
        // const barOneStyle = arrayBars[barOneIdx].style;
        // const barTwoStyle = arrayBars[barTwoIdx].style;
        // setTimeout(() => {
        //   barOneStyle.backgroundColor = SECONDARY_COLOR;
        //   arrayBars[y].innerHTML = newHeight;
        //   barOneStyle.height = `${newHeight + 100}px`;
        //   barOneStyle.paddingTop = `${newHeight + 75}px`;
        // }, i * ANIMATION_SPEED_MS);
      }
      if (currState === 2) {
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = third_color;
          arrayBars[barTwoIdx].style.backgroundColor = third_color;
        }, i * ANIMATION_SPEED_MS);
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
        <section className="d-flex pt-2 justify-content-center">
          <button
            type="button"
            className="btn btn-secondary mr-2 align-text-bottom "
            onClick={() => this.runstart()}
          >
            Start
          </button>
        </section>
        <section className="d-flex pt-4 justify-content-center">
          <button
            type="button"
            style={{ cursor: "default" }}
            className="btn disabled btn-secondary mr-2 align-text-bottom "
            onClick={() => this.resetArray()}
          >
            Change Values
          </button>
        </section>

        <section
          className="d-flex justify-content-center mt-4 align-items-end"
          style={{ height: "50vh" }}
        >
          {array.map((value, idx) => (
            <button
              type="button"
              key={idx}
              style={{
                height: value + 100,
                width: "50px",
                paddingTop: 75 + value
              }}
              className="btn btn-secondary mr-2 elem align-text-bottom "
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
