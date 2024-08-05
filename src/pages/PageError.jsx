import { useRouteError } from 'react-router-dom';

function PageError() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Une erreur est survenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

export default PageError;
