import React from "react";
import { Link, NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = ({prop}) => {

  const routes = [
    { path: "/", breadcrumb: "Trang Chủ" },
    { path: "/gioi-thieu", breadcrumb: 'Giới Thiệu' },
    { path: "/san-pham/", breadcrumb: 'Sản Phẩm' },
    { path: "/san-pham/:id", breadcrumb: prop },
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
