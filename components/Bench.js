import React from 'react';
import BenchSeat from './BenchSeat';

var Bench = React.createClass({
  render: function(){
    var seats = [],
      helpers = this.props.helpers,
      tokens = Object.keys(helpers),
      token,
      count,
      i;

    for (i=0; i < tokens.length; i++){
      token = tokens[i];
      count = helpers[token];
      if (count > 0){
        seats.push(<BenchSeat token={token} count={count} key={i}/>);
      }
    }

    return (
      <div style={this.styles.bench}>
        {seats}
      </div>
    );
  },

  styles: {
    bench: {
      color: 'white',
      backgroundColor: 'blue',
      height: '70px',
      float: 'left',
      width: '500px',
      display: 'block',
      position: 'relative'
    }
  }
});

export default Bench;
