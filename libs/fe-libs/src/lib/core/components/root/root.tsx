import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '../../../routing/constants/browser-router';
import "./../../../translations/i18n";

export function Root() {
  return (
    <StrictMode>
      <RouterProvider router={browserRouter} />
    </StrictMode>
  );
}
