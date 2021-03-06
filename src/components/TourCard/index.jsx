import React from 'react';

import icons from '../../assets/images/icons.svg';
import { STATIC_URL } from '../../constants/main';

export default function TourCard({ tour }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            className="card__picture-img"
            src={`${STATIC_URL}/img/tours/${tour.imageCover}`}
            alt={tour.name}
          />
        </div>
        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">Easy 9-day tour</h4>
        <p className="card__text">{tour.summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${icons}#icon-map-pin`} />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${icons}#icon-calendar`} />
          </svg>
          <span>
            {new Date(tour.startDates[0]).toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${icons}#icon-flag`} />
          </svg>
          <span>{tour.locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref={`${icons}#icon-user`} />
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">${tour.price}</span>{' '}
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">
            {tour.ratingsAverage.toFixed(1)}
          </span>{' '}
          <span className="card__footer-text">
            rating ({tour.ratingsQuantity})
          </span>
        </p>
        <a className="btn btn--green btn--small" href="/">
          Details
        </a>
      </div>
    </div>
  );
}
