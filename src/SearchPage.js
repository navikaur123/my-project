import React from 'react';
import './App.css';
import {Row, Col, Input, Label, FormGroup} from "reactstrap";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    planetsList : [],
                    searchFlag : 0
    };
  }

  getPlanetList = (e) => {
    let value = e.target.value;
    let searchFlag = this.state.searchFlag;

    if(value !== "" && searchFlag < 15){
      fetch("https://swapi.co/api/planets/")
      .then(results => results.json()).then(data => {
        let planetsData = data.results;
        let list = planetsData.filter(val => !val.name.indexOf(value));
        this.setState({planetsList : list, searchFlag : searchFlag + 1});
        console.log("list", list, searchFlag);
      })
    }
    else {
      this.setState({planetsList : []});
    }
  }

  drawColumns = () => {
    let planetsList = this.state.planetsList;
    if(planetsList.length > 0){
      return planetsList.map((planet, index) => {
         return <Col key={index} className = "box-element">
                  <Label className = "label">
                    {"Name : " + planet.name}
                  </Label>
                  <Label className = "label">
                    {"Population : " + (planet.population === "unknown" ? "-" : planet.population)}
                  </Label>
                </Col>
      })
    }
  }

  render() {
    return(
      <div>
        <header className = "Search-header">
          <Input type = "text"
                 placeholder = "Planet Search"
                 onChange = {(e) => {this.getPlanetList(e)}}
                 className = "email"
          />
        </header>
        <FormGroup className = "App-body">
          <Row>
            {this.drawColumns()}
          </Row>
        </FormGroup>
      </div>
    )
  }
}

export default SearchPage;
