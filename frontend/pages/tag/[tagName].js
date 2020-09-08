import React, { useState } from "react";
import getTagNamesRequest from "../../requests/getTagNamesRequest";
import getTagRequest from "../../requests/getTagRequest";
import { useRouter } from "next/router";
import Tag from "../../components/Tag";

export async function getStaticPaths() {
  const getTagNamesResult = await getTagNamesRequest(50);
  if (!getTagNamesResult.status) {
    return { paths: [], fallback: true };
  }
  return {
    paths: getTagNamesResult.tagNames.map((tagName) => {
      return {
        // eslint-disable-next-line no-unused-labels
        params: {
          // eslint-disable-next-line no-unused-labels
          tagName,
        },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const getTagResult = await getTagRequest(params.tagName);
  if (!getTagResult.status) {
    return {
      props: {
        tag: null,
      },
      revalidate: 1,
    };
  }
  return {
    props: { tag: getTagResult.tag },
    revalidate: 1,
  };
}

function TagPage(props) {
  const router = useRouter();
  const [tag, setTag] = useState(null);
  // console.log(router.isFallback);
  // console.log(!router.isFallback && !props.article && process.browser);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!router.isFallback && !props.tag && process.browser) {
    const getTagResult = getTagRequest(router.query.tagName);
    if (!getTagResult.status) {
      window.location.href("/");
    } else {
      setTag(getTagResult.tag);
    }
  }
  return (
    <div>
      {(!!props.tag && <Tag {...props.tag} />) || (!!tag && <Tag {...tag} />)}
    </div>
  );
}

export default TagPage;
