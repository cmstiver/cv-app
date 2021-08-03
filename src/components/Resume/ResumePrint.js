/* eslint-disable no-return-assign */
import React from 'react';
import ReactToPrint from 'react-to-print';
import CV from './Resume';

class CVPrint extends React.PureComponent {
  render() {
    const pageStyle = `
    @media print {
      body{
        -webkit-print-color-adjust: exact;
        color-adjust: exact !important;
        margin-left: 0%;
      }
      @page {
        size: A4;
        margin: 0;
      }
    }
`;
    return (
      <>
        <ReactToPrint
          trigger={() => (
            <button className="material-icons" type="button" id="print">
              print
            </button>
          )}
          content={() => this.componentRef}
          // pageStyle={pageStyle}
        />
        <CV state={this.props.state} ref={(el) => (this.componentRef = el)} />
      </>
    );
  }
}

export default CVPrint;
