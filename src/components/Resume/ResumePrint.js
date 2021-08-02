/* eslint-disable no-return-assign */
import React from 'react';
import ReactToPrint from 'react-to-print';
import CV from './Resume';

class CVPrint extends React.PureComponent {
  render() {
    const pageStyle = `
    @media print {
      body{
        transform: scale(2.55) translate(-197px, 363px);
        -webkit-print-color-adjust: exact;
        color-adjust: exact !important;
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
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            <button type="button" id="print">
              Print this out!
            </button>
          )}
          content={() => this.componentRef}
          pageStyle={pageStyle}
        />
        <CV state={this.props.state} ref={(el) => (this.componentRef = el)} />
      </>
    );
  }
}

export default CVPrint;
