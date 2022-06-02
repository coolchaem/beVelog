import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoginRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      console.log(searchParams.get('code'));
      navigate('/recent', { replace: true });
    } catch (error) {
      console.error(error);
    }
  }, [searchParams, navigate]);

  return <div>redirect...</div>;
};

export default LoginRedirectPage;
