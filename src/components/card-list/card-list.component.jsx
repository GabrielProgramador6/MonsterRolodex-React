import { Component } from 'react';
import Card from '../card/card';
import './card-list.styles.css';

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => (
                <Card monster={monster} />
            ))}
        </div>
    );
};

export default CardList;
