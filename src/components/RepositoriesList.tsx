import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useActions();

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
    </div>
  );
};

export default RepositoriesList;
