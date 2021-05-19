import React from "react";
import { useParams } from "react-router-dom"; //render different component base on params after :
import NotFound from "./components/NotFound";
const generatePage = (pageName) => {
  const component = () => require(`./pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

const PageRender = (props) => {
  const { page, id } = useParams();
  let pageName = "";
  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }
  console.log(pageName);
  return generatePage(pageName);
};

export default PageRender;
