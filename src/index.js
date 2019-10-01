import React from 'react';
import ReactDOM from 'react-dom';
import MessageContent from './MessageContent';

const App = () => {
    return (
      <div>
        <MessageContent>
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="pdf file outline icon"></i>
              No documents are listed for this customer.
            </div>
            <div className="ui primary button">Add document</div>
          </div>
        </MessageContent>
        <MessageContent>
          <div className="ui placeholder segment">
            <h4 className="ui header">For your information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales, ante ac lacinia blandit, arcu massa rutrum est, eu tempus
              sapien erat et purus. Aliquam quis ex pellentesque, porta tortor
              ut, blandit mi. Donec tincidunt id ipsum et eleifend. Curabitur mi
              ante, faucibus sit amet enim ut, lacinia scelerisque mauris.
              Quisque nibh quam, finibus vel tristique ac, tempus id sem.
              Vivamus tempus magna quis tellus sodales consequat.
            </p>
          </div>
        </MessageContent>
      </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
