/* eslint-disable no-return-assign */
import React from 'react';
import ReactToPrint from 'react-to-print';
import CV from './Resume';

class CVPrint extends React.PureComponent {
  render() {
    return (
      <>
        <div id="print">
          <div>
            <p>
              Use Page Size: A4
              <br />
              Zoom print preview to fit.
            </p>
          </div>
          <ReactToPrint
            trigger={() => (
              <button className="material-icons" type="button">
                print
              </button>
            )}
            content={() => this.componentRef}
          />
        </div>
        <CV state={this.props.state} ref={(el) => (this.componentRef = el)} />
      </>
    );
  }
}

export default CVPrint;
