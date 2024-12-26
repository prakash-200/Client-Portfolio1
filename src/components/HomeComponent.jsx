
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeStyles.css";
import ssImage from "../assets/ss2.png";
import { motion } from "motion/react"
import music from "../assets/music-notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
  const navigate = useNavigate();
  const [turning, setTurning] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleDoubleClick = () => {
    setTurning(true);
    setTimeout(() => {
      navigate("/flip"); // Redirect after animation is complete
    }, 1000); // Match the duration of the page-turn animation
  };

  const handleClick = (e) => {
    const newNote = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      color: "#E2B250", // Always yellow color
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);

    // Remove the note after animation
    setTimeout(() => {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== newNote.id)
      );
    }, 1000);
  };

  return (
    <div
      className={`page ${turning ? "turning" : "home"}`}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <div className="row home-header">
        <div className="nav d-flex align-items-center pt-3 justify-content-end pe-md-5 pe-4">
          <button className="border-0 bg-transparent">
            Explore &nbsp;
            <FontAwesomeIcon
              className="music-icon"
              icon={faMusic}
              beatFade
              size="xs"
            />
          </button>
        </div>
      </div>
      <div className="row home-content">
        <div className="col col-md-7 h-md-75 content-column1 d-flex d-md-flex">
          <div className="w-100 p-4">
            <motion.h3 initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }} 
                    className="col home-slogan ms-md-5">Where Words Fail</motion.h3>
            <div className="text-center">
              <motion.h1 initial={{ opacity:0, ease: "linear", scale: 0 }} animate={{ scale: 1, opacity: 1, transition: { delay: .8, duration: 1, ease: "linear" }, }} className="home-author1">SANTHOSH</motion.h1>
              <motion.h1 initial={{ opacity:0, ease: "linear", scale: 0 }} animate={{ scale: 1, opacity: 1, transition: { delay: .8, duration: 1, ease: "linear" }, }} className="home-author2">VAIRAVEL</motion.h1>
            </div>
            <motion.h3 initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }} 
                    className="col home-slogan text-end">Music Speaks !!!</motion.h3>
            <h6 className="double-click d-flex flex-column justify-content-between">
              <span>
                Double Tap Here &nbsp;
                <img src={music} height="20px" width="20px" alt="" />
              </span>
            </h6>
          </div>
        </div>
        <div className="col img-col">
          <motion.img initial={{ y: 500 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 30, delay: .3 }} src={ssImage} 
                    className="col author-img" alt="santhosh" />
        </div>
      </div>

      {/* Render animated music notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          className="music-note"
          style={{
            left: note.x,
            top: note.y,
            color: note.color,
            animation: "move-up 1s forwards",
          }}
        >
          <img src={music} height="40px" width="40px" alt="" />
        </div>
      ))}
    </div>
  );
};

export default HomeComponent;
