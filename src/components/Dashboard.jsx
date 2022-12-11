import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Navbar from "./Navbar";
import scrollreveal from "scrollreveal";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedIn = localStorage.getItem('auth')
    if (!getLoggedIn) navigate('/mile-stone-dashboard');
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
  <Section>
    <Navbar />
      <div className="row__one">
        <Analytics />
      </div>
  </Section> 
  );
}



const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .row__one {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
