import "./App.css";
import { useRef } from "react";

function App() {
  let score = 0;
  let numberOne = useRef();
  let numberTwo = useRef();

  return (
    <div className="App">
      <div>
        <button
          className="button"
          onClick={() => {
            score++;
            console.log(score);
          }}
        >
          increment
        </button>
        <button
          className="button"
          onClick={() => {
            score--;
            console.log(score);
          }}
        >
          decrement
        </button>
      </div>
      <form>
        <div>
          <label>number 1</label>
          <input ref={numberOne} type="number"></input>
        </div>
        <div>
          <label>number 2</label>
          <input ref={numberTwo} type="number"></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              let addition = number1 + number2;

              console.log(addition);
            }}
          >
            Addition
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              let subtraction = number1 - number2;

              console.log(subtraction);
            }}
          >
            Subtraction
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              let Multiplication = number1 * number2;

              console.log(Multiplication);
            }}
          >
            Multiplication
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              let Division = number1 / number2;

              console.log(Division);
            }}
          >
            Division
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              let Modulus = number1 % number2;

              console.log(Modulus);
            }}
          >
            Modulus
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              console.log(number1 >= number2);
              console.log(number1 <= number2);
              console.log(number1 == number2);
              console.log(number1 != number2);
              console.log(number1 > number2);
              console.log(number1 < number2);
            }}
          >
            Comparision
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              if (number1 > number2) {
                console.log("Number2 is the smallest number");
              } else {
                console.log("Number1 is the smallest number");
              }
            }}
          >
            Conditional(If Else)
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let number1 = Number(numberOne.current.value);
              let number2 = Number(numberTwo.current.value);
              number1 += 1;
              console.log(`Value of number1 += 1 is : ${number1}`);
              number1 *= 5;
              console.log(`Value of number1 *= 5 is : ${number1}`);
              number2 /= 4;
              console.log(`Value of number2 /= 4 is : ${number2}`);
              number2 %= 8;
              console.log(`Value of number2 %= 8 is : ${number2}`);
              number2 -= 2;
              console.log(`Value of number2 -= 2 is : ${number2}`);
              number2 = 9;
              console.log(`Value of number2 = 9 is : ${number2}`);
            }}
          >
            Assignment
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
