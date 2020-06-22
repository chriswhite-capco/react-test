import React from 'react';

class Slides extends React.Component {
  render() {
    const { slides } = this.props;

    return (
      <div>
        <div id='navigation'>
          <button data-testid='button-restart'>Restart</button>
          <button data-testid='button-prev'> Prev </button>
          <button data-testid='button-next'>Next</button>
        </div>
        <div id='slide'>
          <h1 data-testid='title'>Slide Title</h1>
          <p data-testid='text'>Slide Text</p>
        </div>
      </div>
    );
  }
}

export default Slides;
