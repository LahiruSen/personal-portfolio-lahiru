import Disqus from "disqus-react";
import Markdown from "markdown-to-jsx";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState("");
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
    import(`../blog/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });


  return (
    <Layout>
      <Helmet>
        <title>Blog Details - Lahiru Senevirathne Personal Portfolio</title>
        <meta
          name="description"
          content="Lahiru Senevirathne Personal Portfolio Blog Details Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Markdown>{content}</Markdown>
            <Suspense fallback={<h1>loading...</h1>}>
            </Suspense>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default BlogDetails;
