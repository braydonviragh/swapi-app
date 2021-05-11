import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getAllStarwarsPeople from './PlanetsList';

class Person extends Component {
     

    constructor(props){ 
        super(props);
        this.state = { 
            items: [],
            isLoaded: false,
            search: "",
        }
    }

   /*componentDidMount() { 
        fetch('http://127.0.0.1:8000/getPeople')
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                items: json,
                search: "",
            }) 
        })
    }; */
    componentDidMount() { 
        getAllStarwarsPeople()
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                items: json,
                search: "",
            }) 
        })
    }; 


    updateSearch(event){ 
        this.setState({search: event.target.value.substr(0, 20)});
    }

  
 
    
    
    render() {
        var { isLoaded, items, search } = this.state;
        if(!isLoaded) { 
            return <div className="loading"> Loading...</div>;
        }else { 
            var results = this.state.items.results;
            console.log(results)
            var filteredResults = results.filter(
                (person) => { 
                return person.name.toLowerCase().indexOf(this.state.
                    search.toLowerCase()) !== -1;
            }
            );

            return (
                <div className="person pb-4">
                    <section className="pb-100 pt-2">
                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col-md-2 justify-content-center  d-flex flex-column text-center">
                                    <div className="d-flex align-items-start justify-content-center py-4">
                                        <img src="/img/stormtrooper.png" alt="Person"/>
                                    </div>
                                    <div className="d-flex align-items-start justify-content-center">
                                        <p className="strong"> Detailed table displaying your favourite characters from every Star Wars Movie. Scroll through and enjoy!        
                                        </p>
                                    </div>
                                    <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}  placeholder="search..." />
                                </div>
                        <div className="container graph col-md-10">
                        <div className="text-center">
                                    <h2>Star Wars Characters</h2>
                                    </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                 
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Height</th>
                                        <th scope="col">Mass</th>
                                        <th scope="col">Hair Colour</th>
                                        <th scope="col">Skin Colour</th>
                                        <th scope="col">Eye Colour</th>
                                        <th scope="col">Birth Year</th>
                                        <th scope="col">Gender</th>
                                    </tr>
                                </thead>
                                <tbody>                   
                                    {
                                       filteredResults.map(item => (
                                        <tr> 
                                            <td> {item.name}</td>
                                            <td> {item.height}m</td>
                                            <td>{item.mass}kg</td>
                                            <td>{item.hair_color}</td>
                                            <td> {item.skin_color}</td>
                                            <td>{item.eye_color}</td>
                                            <td>{item.birth_year}</td>
                                            <td> {item.gender}</td>
                                        </tr>
                                            ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            );
        }
    }
}

export default Person
