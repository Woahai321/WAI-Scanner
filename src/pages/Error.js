import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. The error details are:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <b>Error code:</b> {error.status}
      </p>
      <p>
        <b>Error message:</b> {error.message}
      </p>
      <p>Try going back to the previous page or refreshing the current page. If the problem persists, please contact our support team for assistance.</p>
      <button onClick={()=>{window.history.back()}}>Go Back</button>
      <button onClick={()=>{window.location.reload()}}>Refresh</button>
    </div>
  );
}
