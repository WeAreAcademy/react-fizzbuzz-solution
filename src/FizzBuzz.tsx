import { useState } from "react";
import { nextFizzBuzzIteration } from "./utils/fizzBuzz";
import './FizzBuzz.css';

function FizzBuzz(): JSX.Element {

  const firstIteration = nextFizzBuzzIteration([]);
  const [utterances, setUtterances] = useState(firstIteration);

  function handleNext() {
    const nextIteration = nextFizzBuzzIteration(utterances);
    setUtterances(nextIteration);
  }

  return <div className='fizzbuzz'>
    <button onClick={handleNext}>Next</button>
    <div className='utterances'>
      {
        utterances.map((utterance, ix) => (
          <div key={ix}>{utterance}</div>
        ))
      }
    </div>
  </div >
}
export default FizzBuzz;
