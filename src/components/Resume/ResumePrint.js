/* eslint-disable no-return-assign */
import React from 'react';
import ReactToPrint from 'react-to-print';
import CV from './Resume';

class CVPrint extends React.PureComponent {
  render() {
    return (
      <>
        <ReactToPrint
          trigger={() => (
            <button className="material-icons" type="button" id="print">
              print
            </button>
          )}
          content={() => this.componentRef}
        />
        <CV state={this.props.state} ref={(el) => (this.componentRef = el)} />
      </>
    );
  }
}

export default CVPrint;
