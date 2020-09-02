import React from "react";

export default class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Component: null };
  }
  render() {
    const { load, ...props } = this.props;
    const Component = this.state.Component;
    return Component ? <Component {...props} /> : null;
  }
  componentDidMount() {
    this.props.load().then((Component) => {
      this.setState({ Component: Component.default });
    });
  }
}
