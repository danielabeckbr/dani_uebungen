
import { useState } from "react";
import React, { Component } from 'react';

/* | bedeutet oder. string | null heißt also, der Wert kann ein string oder null sein */

function greet(person: string) {
  return person.toUpperCase(); // OK
}

const greeting = greet("Susi");
const greeting2 = greet("Ben");

/*components*/



/* useState updated einen status ab. Bsp:*/
interface FavoriteColor {
  color: string;
}

function FavoriteColor() {
  const [color, setColour] = useState("red");

  return (
    <>
      <div>My favorite color is {color}!</div>
      <button
        type="button"
        onClick={() => setColour("blue")}
      >Blue</button>
    </>
  )
}

interface PetProps {
  animal: string;
}

function Pet(props: PetProps): React.JSX.Element {
  const [animal, setColour] = useState(props.animal);

  console.log(props.animal)

  return (
    <>
      <div>My favorite animals are {animal}!</div>
      <button
        type="button"
        onClick={() => setColour("rabbits")}
      >{animal}</button>
    </>
  )
}


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <div>
        {greeting}
      </div>
      <br></br>
      <br></br>
      <div>
        {greeting2}
      </div>
      <br></br>
      <FavoriteColor />
      <br></br>
      <Pet animal="mice" />
      <Pet animal="dogs" />
      <br></br>

    </div>

  );
}