
import { useState } from "react"
import React from 'react'

/* useState updated einen status ab. Bsp:*/
interface FavoriteColorProps {
  color: string;
}

//function Welcome(props: WelcomeProps): React.JSX.Element {

export default function AppDani(props: FavoriteColorProps) :React.JSX.Element  {
  // const [color, setColour] = useState("red"); <== brauchen wir nicht Color wird als Prop übergeben
  const [color, setColour] = useState(props.color);

  console.log(props.color)

  return (
    <>
      <div>My favorite color is {color}!</div>
      <button
        type="button"
        onClick={() => setColour("blue")}
      >{color}</button>
    </>
  )
}

