import React from "react";

interface IFooterItemProps {
  title: string;
  children: React.ReactNode;
}

const FooterItems = ({ children, title }: IFooterItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-popins font-semibold">{title}</h4>
      {children}
    </div>
  );
};

export default FooterItems;
