import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Search from "../Search";

class ReportCert extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            searchShow : [],
        }
    }
  getupdata(content){
      console.log(content)
  }
  render() {
      console.log(this.state.searchShow)
    return (
        <div className='print-source'>
      </div>
    );
  }
}
// class Example extends React.Component {
//     render() {
//       return (
//         <div>
//           <ReactToPrint
//             trigger={() => <a href="#">Print this out!</a>}
//             content={() => this.componentRef}
//           />
//           <ReportCert ref={el => (this.componentRef = el)} />
//         </div>
//       );
//     }
// }
function getPDF(props) {
  console.log(props)
  return (
    <div>
      <button
        className="btn btn-success btn-lg px-3"
        onClick={async () => {
          // console.log(props)
          const smartshow = props.smart.split(",");
          // const result = await CustomDialog(<ReportCert data={props} />, {
          //   title: "โอนเหรียญ : " + smartshow[3],
          //   showCloseIcon: true,
          // });
        }}
      >
        โอนเหรียญ
      </button>
    </div>
  );

}

export default getPDF;
