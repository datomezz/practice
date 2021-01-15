import React, {Component} from "react";

// COMPONENTS
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
  return class extends Component {
    constructor(props){
      super(props);
      this.state = {
        data : null,
        error : false
      }
    }

    componentDidMount() {
      getData()
      .then(this._updateState.bind(this))
      .catch(() => {
        this.setState({error : true})
      })
    }

    _updateState(data) {
      this.setState(state => {
        return {
          data
        }
      })
    }

    render() {
      const {data, error} = this.state;
      if(!data) {
        return <Spinner />
      }

      if(error) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />
    }
  }
}

export default withData;