import { Link, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import GetUrl from './components/getUrl';
import './App.css';
import Banner from "./components/banner";
import FiltersList from "./components/filterslist";
import TextAndButton from './components/textbutton';
import Results from './components/results';
import Top from './components/top';
import Contacts from "./components/contacts";
import SingleRecipe from "./pages/views/features/singlerecipe";
import About from "./pages/views/features/about";
import Error from "./pages/views/features/error";

const AutoTopScroll = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {

  const [results, setResults] = useState([]);
  const [comment, setComment] = useState("");
  const Search = async () => {
    try {
      setComment("Please, wait...");
      document.getElementById("comment").style.color = "red";
      const response = await axios.get(GetUrl());
      if (document.getElementById("vegan-check").checked) {
        setResults(response.data.results.filter(result => result.vegan));
      } else {
        setResults(response.data.results);
      }
      if (response.data.results.length === 0) { setComment("Too bad, we have no recipes meeting your needs...") }
      else if (response.data.results.length === 1) { setComment("Alas, we have only 1 recipe meeting your needs..."); }
      else { setComment(`Great! We have ${response.data.results.length} recipes meeting your needs!`); }
      document.getElementById("comment").style.color = "black";
      scrollPage();
    } catch (error) {
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const scrollHandler = () => {
    var nav = document.getElementById("navbar");
    var navRect = nav.getBoundingClientRect();
    if (navRect.top <= (-1 * navRect.height)) {
      document.getElementById("to-top").style.visibility = "visible";
      let div = document.getElementById("root");
      let divRect = div.getBoundingClientRect();
      let topButton = document.getElementById("to-top");
      if (window.innerWidth >= 576) {
        topButton.style.left = `${divRect.left + divRect.width + 20}px`;
      } else {
        topButton.style.left = `${divRect.left + divRect.width + 10}px`;
      }
    } else {
      document.getElementById("to-top").style.visibility = "hidden";
    }
  }

  const scrollPage = () => {
    setTimeout(function () {
      const element = document.getElementById("comment");
      if (element.innerHTML !== "") {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000);
  }

  return (
    <>
    <AutoTopScroll />
      <Banner />
      <nav id="navbar">
        <ul className="navbar">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/info">INFO</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className='main-page'>
            <h3 className="welcome">Welcome! Here are many vegetarian and vegan recipes for your needs, suit yourself!</h3>
            <FiltersList />
            <h4 id="search">Search Keyword</h4><TextAndButton function={Search} />
            <h4 id="comment">{comment}</h4>
            <Results results={results} />
          </div>
        } />
        <Route path="/recipes/:recipe" element={<SingleRecipe source={results} />} />
        <Route path="/info" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Top />
      <Contacts />
    </>
  );
};

export default App;