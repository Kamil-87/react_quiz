import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout"
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
        <Layout>
          <div style={{width: 400, border: '1px solid black'}}>
            <Quiz />
          </div>
        </Layout>
    )
  }
}



export default App;
