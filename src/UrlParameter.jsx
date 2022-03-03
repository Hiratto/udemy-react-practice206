import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const Query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>パラメーターは{id}</p>
      <p>クエリパラメーターは{Query.get("name")}</p>
    </div>
  );
};
