/** @jsx React.DOM */

var Quote = React.createClass({
  quoteAJAX: function(stockSymbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+ stockSymbol +'&callback=?';
    $.getJSON(url, function(data){
      $('#' + stockSymbol).text('$' + data.LastPrice);
    }.bind(this));
  },
  render: function(){
    //debugger;
    var createQuote = function(stockSymbol){
      this.quoteAJAX(stockSymbol);
      return <tr><td>{stockSymbol}</td><td id={stockSymbol}></td></tr>;
    }.bind(this);
    return <tbody>{this.props.symbols.map(createQuote)}</tbody>;
  }
});
var QuoteTable = React.createClass({
  getInitialState: function(){
    return {seconds:0, symbols:[]}
  },
  handleSubmit: function(e){
    e.preventDefault();

    var nextSymbols = $('#textInput').val().split(',').map(trimmedUpper);
    nextSymbols = this.state.symbols.concat(nextSymbols);
    var uniqueSymbols = [];
    $.each(nextSymbols, function(i, el){
      if($.inArray(el, uniqueSymbols)=== -1){ uniqueSymbols.push(el);}
    });
    this.setState({symbols: uniqueSymbols})
  },
  render: function(){
    return(
      <div>
        <div>
          <input id='textInput' />
          <button onClick={this.handleSubmit}>Update Table</button>
        </div>
        <table className='QuoteTable'>
          <thead><th>Symbol</th><th>Quote</th></thead>
            <Quote symbols={this.state.symbols} />
        </table>
      </div>
    );
  }
});

function trimmedUpper(str){
  return str.trim().toUpperCase();
}
