import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect } from 'react';
import { selectDetails } from '../store/details/details.selector';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearDetails,
  loadCountryByName,
} from '../store/details/details-action';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h4>Loading...</h4>}
      {status === 'error' && <h4>{error}</h4>}

      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
