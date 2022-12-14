import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div
      className="search"
      ref={searchRef}
      style={{ width: "1rem", height: "1rem" }}
    >
      <input
        className="searchInput"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search here"
        type="text"
        value={query}
      />
      {active && results.length > 0 && (
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
