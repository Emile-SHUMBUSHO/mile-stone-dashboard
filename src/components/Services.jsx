import React, { useEffect } from "react";
import styled from "styled-components";
// import Navbar from "./Navbar";
import scrollreveal from "scrollreveal";
import "./Services.css";
import updateImg from '../assets/update.png';
import deleteImg from '../assets/delete.png';

export default function Services() {
  useEffect(() => {
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
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <Nav>
      <div className="title">
        <h4>Services</h4>
      </div>
    </Nav>
    <table class="table" id="ServiceTable">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Descrption</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={updateImg} alt="Update" width="30px" height="30px"/></td>
                    <td><img src={deleteImg} alt="Update" width="30px" height="30px"/></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
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