/** @jsx React.DOM */
var Quote = React.createClass({
  startTimer: function(){
    clearInterval(this.timer);
    this.timer = setInterval(function(){
      this.quoteAJAX(this.props.symbol);
    }.bind(this), 5000);
  },
  quoteAJAX: function(stockSymbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+ stockSymbol +'&callback=?';
    $.getJSON(url, function(data){
      $('#' + stockSymbol).text('$' + data.LastPrice);
    }.bind(this));
  },
  render: function(){
    this.startTimer();
    return <td id={this.props.symbol}></td>
  }
});
var QuoteBody = React.createClass({
  render: function(){
    //debugger;
    var createQuote = function(stockSymbol){
      return <tr><td>{stockSymbol}</td><Quote symbol={stockSymbol}/></tr>;
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
      <div className='QuoteBox'>
        <div>
          <input id='textInput' />
          <button onClick={this.handleSubmit}>Update Table</button>
        </div>
        <table className='QuoteTable'>
          <thead><th>Symbol</th><th>Quote</th></thead>
            <QuoteBody symbols={this.state.symbols} />
        </table>
      </div>
    );
  }
});

function trimmedUpper(str){
  return str.trim().toUpperCase();
}
