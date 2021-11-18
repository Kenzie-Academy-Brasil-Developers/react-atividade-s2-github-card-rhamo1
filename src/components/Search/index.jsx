import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Search = ({ handleSearch }) => {
  const [orgValue, setOrgValue] = useState("");
  const [repoValue, setRepoValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const setSearch = () => {
    setSearchTerm(`${orgValue}/${repoValue}`);
    handleSearch(searchTerm);
  };

  return (
    <>
      <motion.div className="flexContainer boxStyle">
        <h3>Nome da organização:</h3>
        <input
          className="boxStyle"
          placeholder="ex: 'facebook'"
          value={orgValue}
          onChange={(e) => setOrgValue(e.target.value)}
        />
        <h1>/</h1>

        <h3>Nome do repositório:</h3>
        <input
          className="boxStyle"
          placeholder="ex: 'react'"
          value={repoValue}
          onChange={(e) => setRepoValue(e.target.value)}
        />
        <button onClick={() => setSearch()} className="button">
          Pesquisar
        </button>
      </motion.div>
    </>
  );
};
