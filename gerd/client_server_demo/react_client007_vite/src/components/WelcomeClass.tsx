import React, { Component } from 'react';

// 1. Definition des Interface für die Props
interface WelcomeProps {
  name: string;
}

// 2. Verwendung des Interface als generisches Argument (vor dem State-Typ, hier leeres {})
class WelcomeClass extends Component<WelcomeProps, {}> {
  render() {
    // Zugriff auf die Prop 'name' über 'this.props.name'
    return (
      <h1>Hallo, {this.props.name}!</h1>
    );
  }
}

export default WelcomeClass;