import React from "react";
import { Link, NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";


const Breadcrumbs = ({prop}) => {

  const routes = [
    { path: "/", breadcrumb: "Trang Chủ" },
    { path: "/lien-he/", breadcrumb: 'Liên Hệ' },
    { path: "/bai-viet/", breadcrumb: 'Bài Viết' },
    { path: "/bai-viet/:id", breadcrumb: prop },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};

export default Breadcrumbs;
