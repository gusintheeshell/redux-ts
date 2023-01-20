import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <p>Loading...</p>}
      {!error &&
        !loading &&
        data.map((name) => (
          <ul key={name}>
            <li>{name}</li>
          </ul>
        ))}
    </div>
  );
};

export default RepositoriesList;
