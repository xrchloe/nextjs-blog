import { lazy, Suspense } from "react";
const Icon = ({ name, ...props }) => {
  const Component = lazy(() => import(`./svg/${name}`));
  return (
    <Suspense fallback={<span>...</span>}>
      <span className="inline-block" {...props}>
        <Component />
      </span>
    </Suspense>
  );
};

export default Icon;
