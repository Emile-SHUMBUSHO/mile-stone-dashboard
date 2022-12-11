import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from '../components/Spinner/Loader';
import { FetchMessagesAction } from "../redux/actions/MessagesActions";

export default function Email() {
  const {loading, messages} = useSelector((state)=> state.messageState)
  const dispatchMessage = useDispatch();

  useEffect(() => {
    
    dispatchMessage(FetchMessagesAction())

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
    <>
    {loading ? (<LoadingSpinner/>) : (
    <Section>
      <Nav>
      <div className="title">
        <h4>Emails</h4>
      </div>
    </Nav>
    <table class="table" id="ServiceTable">
            <thead>
                <tr>
                    <th scope="col">E.No.</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
              {messages.map((message, index)=>(
                <tr>
                  <th scope="row">{++index}</th>
                  <td>{message.name}</td>
                  <td>{message.sender}</td>
                  <td>{message.message}</td>
               </tr>
              ))}
                
            </tbody>
        </table>
    </Section>
    )}
    </>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
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
