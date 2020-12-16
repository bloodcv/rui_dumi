import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('---props---', props);
  }

  render() {
    return <div className="home_page">ddd</div>;
  }
}
