import logo from "./logo.svg";
import "./App.css";

import React from "react";

import AddButton from "./Components/AddButton";
import LinkList from "./Components/LinkList";
import SearchBar from "./Components/SearchBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const storedLinks = localStorage.getItem("links");
    const parsedLinks =
      storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);

    this.state = {
      links: Array.isArray(parsedLinks) ? parsedLinks : [],
      search: "",
    };
  }

  onSearchChange = (search) => {
    this.setState({
      search,
    });
  };

  onAddButtonAddLink = (name, url, tags) => {
    const newLinks = this.state.links.concat([
      {
        name,
        url,
        tags,
      },
    ]);
    this.setState({
      links: newLinks,
    });

    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  render() {
    const lowerSearch = this.state.search.toLowerCase();
    let filteredLinks = this.state.links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return tag.name.toLowerCase().indexOf(lowerSearch) > -1;
          })
          .indexOf(true) > -1
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 left-panel centered">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <p>King of JS</p>
            <br />
            <p>Links shared: {this.state.links.length}</p>
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="col-8 right-panel centered">
            <h4>Search Stored links:</h4>
            <SearchBar onSearchChange={this.onSearchChange} />
            <h4>Links for: {this.state.search}</h4>
            <LinkList links={filteredLinks} />
          </div>
        </div>
      </div>
    );
  }
}
