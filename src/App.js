// import React, { Component } from 'react';
// import {connect} from 'react-redux';


// import * as actions from './actions/index';

// class App extends Component {
//   handleClick = () =>{
//     this.props.onClickNumber(1)
//   }
//   render() {
//     var {click} = this.props
//     return (
//       <div>
//           <p>{click}</p>
//           <button onClick={this.handleClick}>click</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state)=>{
//   return{
//     click: state.myreducer.click
//   }
// }
// const mapDispatchhToProps = (dispatch, props) =>{
//   return{
//       onClickNumber: (click) =>{
//         dispatch(actions.addClick(click))
//       }
//   }
// }
// export default connect(mapStateToProps, mapDispatchhToProps)(App);

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {fetchAllProductRequets} from './actions/index';


class App extends Component {
  componentDidMount(){
      this.props.fetchAllProduct()
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        <form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(item =>{
                  return(
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    data: state.myreducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchAllProduct: () =>{
      dispatch(fetchAllProductRequets())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);