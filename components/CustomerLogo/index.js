import { lazy, Suspense } from "react";
const CustomerLogo = ({ name }) => {
  const Component = lazy(() => import(`./svg/${name}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default CustomerLogo;
