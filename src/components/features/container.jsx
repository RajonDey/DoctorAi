import classNames from "classnames";

export const Container = ({ children, className }) => {
  return (
    <div
      className={classNames("mx-auto max-w-[120rem] px-8", className)}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};
