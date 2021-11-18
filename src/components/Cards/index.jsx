import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Cards = ({ cardValue }) => {
  return (
    <>
      <motion.div className="miniCardsContainer">
        {cardValue.map((cards, index) => (
          <a
            key={index}
            className="miniCard boxStyle"
            href={cards.data.svn_url}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                className="boxStyle"
                src={cards.data.owner.avatar_url}
                alt=""
              />
            </div>
            <div className=" cardText">
              <h3>{cards.data.full_name}</h3>

              <p>{cards.data.description}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </>
  );
};
