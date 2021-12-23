import { FC } from "react";

interface IPageText {
  className?: string;
  fontSize?: any;
  color?: string;
}

export const PageText: FC<IPageText> = ({ className, children, color, fontSize }) => {
  return (
    <span className={className} style={{ color, fontSize }}>
      {children}
    </span>
  );
};

