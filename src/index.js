import React from "react";
import ReactDOM from "react-dom";
import MessageContent from "./MessageContent";

const App = () => {
  return (
    <div>
      <MessageContent>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </div>
      </MessageContent>

      <MessageContent>
        <div class="ui piled segment">
          <h4 class="ui header">For your information</h4>
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
            alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas
            an. Mei ex natum rebum iisque.
          </p>
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
            definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne,
            his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
            ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
        </div>
      </MessageContent>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
