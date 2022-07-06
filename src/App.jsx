import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [title, setTitle] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const onTitleChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setTitle(searchFieldString);
    };

    

    return (
        <div className="App">
            <h1 className='app-title'>{title}</h1>

            <SearchBox
                onSearchHandler={onSearchChange}
                placeholder="search monsters"
                className="monsters-search-box"
                type="search"
            />
            <br />
            <SearchBox
                onSearchHandler={onTitleChange}
                placeholder="set title"
                className="title-search-box"
                type="search"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             searchField: '',
//         };
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((users) =>
//                 this.setState(() => {
//                     return { monsters: users };
//                 })
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();

//         this.setState(() => {
//             return { searchField };
//         });
//     };

//     render() {
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });

//         return (
//             <div className="App">
//                 <SearchBox
//                     onSearchHandler={onSearchChange}
//                     placeholder="search monsters"
//                     className='monsters-search-box'
//                     type='search'
//                 />
//                 <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;
