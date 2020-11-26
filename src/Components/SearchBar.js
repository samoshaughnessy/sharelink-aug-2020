import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  onSearchChange = (e) => {
    const newSearch = e.currentTarget.value;
    this.setState({
      search: newSearch,
    });

    this.props.onSearchChange(newSearch);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
