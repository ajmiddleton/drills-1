/** @jsx React.DOM */

var Rectangle = React.createClass({
  getInitialState: function(){
    return {height:200, width:100, backgroundColor:'white'};
  },
  render: function(){
    return (
      <div className='rectangle'></div>
    );
  }
});
