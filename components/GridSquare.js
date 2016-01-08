import React from 'react';
import Token from './Token';

var GridSquare = React.createClass({
  render: function(){

    return (
      <div style={this.styles.gridSquare} ><Token /></div>
    );
  },

  styles: {
     gridSquare: {
      border: '1px solid #000',
      height: '105px',
      width: '16.3%',
      color: 'white',
      margin: 0,
      display: 'inline-block'
     }
  }

});

export default GridSquare
