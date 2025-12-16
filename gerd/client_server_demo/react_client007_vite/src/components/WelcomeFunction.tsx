import React from 'react';

// 1. Definition des Interface für die Props
interface WelcomeProps {
  name: string;
}

// 2. Verwendung des Interface im Funktionsargument (Destrukturierung)
const WelcomeFunction: React.FC<WelcomeProps> = ({ name }) => {
  // Zugriff auf die Prop 'name'
  return (
    <h1>Hallo, {name}!</h1>
  );
};

export default WelcomeFunction;