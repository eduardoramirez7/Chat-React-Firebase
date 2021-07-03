import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        };
    }
    
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({
              authenticated: true,
              loading: false,
            });
          } else {
            this.setState({
              authenticated: false,
              loading: false,
            });
          }
        })
      }
}

export default App;