import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";
import { QuotesCard } from "./QuotesCard";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    getQuote();
  }, [getQuote]);

  if (isFetching) {
    return <h1>Getting a joke</h1>;
  }


  return (
    <>
      <QuotesCard />
      <div className="joke-card">
        <h4>{quote}</h4>
        <img
          src="https://media.tenor.com/images/b8e4664cdc8797a79cebd1deed4cb7d7/tenor.gif"
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