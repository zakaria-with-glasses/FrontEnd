import { useEffect, useState } from "react";
import axios from "axios";

const Display = (Page: any) => {
  const [loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);
  const [hasMore, setMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4567/", {
        params: {
          page: Page,
        },
      })
      .then((res: any) => {
        setPosts((prevpage: any) => {
          return [
            ...new Set([
              ...prevpage,
              res.data.first,
              res.data.second,
              res.data.third,
            ]),
          ];
        });
        setMore(res.data > 0);
        console.log(hasMore);
        setLoading(false);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, [Page]);
  return { Posts, loading, hasMore };
};
export default Display;
