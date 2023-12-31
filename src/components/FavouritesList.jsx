// FavouritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

export default function FavouritesList({ favourites, onRemoveFromFavourites }) {
    return (
        <section className="favourites-list">
            <h2>Favourite Properties</h2>
            <div className="row roomsList-center">
                {favourites.map(item => (
                    <div key={item.id} className="col-md-4 mb-3">
                        <article className="property">
                            <div className="card img-container" style={{ width: '18rem' }}>
                                <img src={item.picture} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <Link to={`/rooms/${item.tenure}`} className="btn btn-primary">
                                        Read More
                                    </Link>
                                    <br />
                                    <button
                                        onClick={() => onRemoveFromFavourites(item)}
                                        className="btn btn-danger"
                                    >
                                        Remove from Favourites <CiHeart />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Property Type: {item.type}</h5>
                                    <p className="card-text">{''}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.type}</li>
                                    <li className="list-group-item">${item.price} per month</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}
