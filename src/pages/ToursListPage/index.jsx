import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../containers/Layout';
import TourCard from '../../components/TourCard';
import Spinner from '../../components/Spinner';

import { getAllTours } from '../../redux/slices/toursSlice';

export default function ToursListPage() {
  const { tours } = useSelector((state) => state.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTours());
  }, []);

  useEffect(() => {
    console.log('tours', tours);
  }, [tours]);

  return (
    <Layout>
      <main className="main">
        {tours.length ? (
          <div className="card-container">
            {tours.map((tour) => (
              <TourCard id={tour._id} tour={tour} />
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </main>
    </Layout>
  );
}
