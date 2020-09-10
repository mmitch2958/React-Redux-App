import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";
import { QuoteCard } from "./QuoteCard";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    getQuote();
  }, [getQuote]);

  if (isFetching) {
    return <h1>Getting a joke</h1>;
  }


  return (
    <>
      <QuoteCard />
      <div className="joke-card">
        <h4>{quote}</h4>
        <img
          src="https://media1.tenor.com/images/575b9a0b98e26640182826576a1f6858/tenor.gif"
          alt="chuck punch"
        />

        {error && <p className="error">{error}</p>}
      </div>

      <button onClick={getQuote}>Get a Joke</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quotes);