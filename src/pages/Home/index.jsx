import { motion } from "framer-motion";
import { Cards } from "../../components/Cards";
import { Search } from "../../components/Search";
import { useState } from "react";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const Home = () => {
  const [searchValue, setSearchValue] = useState([]);

  const [renderCard, setRenderCard] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    api
      .get(`/repos/${searchTerm}`)
      .then((res) => {
        setRenderCard([...renderCard, res]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div className="boxStyle" style={{ width: "900px" }}>
      <h1>GitHub API search</h1>
      <Search handleSearch={handleSearch} />
      <Cards cardValue={renderCard} />
    </motion.div>
  );
};
