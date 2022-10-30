import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Rugwiro Oreste</h4>
        <h1>
          Welcome to <span>Mile Stone LTD</span>
        </h1>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  color: white;
  .title {
    h1 {margin-top:1rem;
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title {
      h1 {
        span {
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
