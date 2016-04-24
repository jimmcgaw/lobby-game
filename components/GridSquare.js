import React from 'react';
import QuidStore from '../store';
import Utils from '../utils';
import Token from './Token';

var GridSquare = React.createClass({

  render: function(){
    var tokenGroup = this.props.token.slice(0,3),
      selected = this.props.aboutToGo,
      rowCount = this.props.board.rows,
      colCount = this.props.board.columns;

    return React.cloneElement(
      <div className={this.props.eligible ? "grid-square" : ''} onClick={this.placeToken} >
        <Token symbol={this.props.token} />
      </div>,
      { style:
        {
          color : Utils.handleColors(tokenGroup, 'color'),
          backgroundColor: Utils.handleColors(tokenGroup, 'bColor', selected),
          height: this.handlePercentage(rowCount),
          width: this.handlePercentage(colCount),
          display: 'inline-block',
          position: 'relative',
          marginBottom: '-4px',
          minHeight: '77.5px',
          minWidth: '77.5px'
        }
      }
    );
  },

  //passes coordinates selected for (eligible) stagedToken placement, initiates completeMove state changes
  placeToken: function(){
    if (this.props.eligible && !this.props.gameOver) {
      QuidStore.completeMove(this.props.rowPos, this.props.colPos);
    }
  },

  //handles size of GridSquare, determined by how many rows/cols board has
  handlePercentage(count){
    var percentages = { 6: '16.66%', 7: '14.28%', 8: '12.49%'}
    return percentages[count];
  }
});

export default GridSquare;
