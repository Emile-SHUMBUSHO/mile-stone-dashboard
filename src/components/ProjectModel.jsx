import React from "react";
import close from "../assets/close2.png"
import styled from "styled-components";
const Model = ({open,onClose})=>{
    if(!open) return null;
    return (
        <Warpper>
            <CloseButton>
                <img onClick={onClose} src={close} alt="close" width="30px" height="30px"/>
            </CloseButton>
            <ContentContainer>
                <form action="/action_page.php" id="updateForm">
                <div class="mb-3 mt-3">
                    <input type="text" class="form-control" id="title" placeholder="Project Title" name="title"/>
                </div>
                <div class="mb-3">
                    <input type="file" class="form-control" id="img" name="img"/>
                </div>
                <textarea class="form-control" rows="5" id="" name="text"></textarea>
                <button type="submit" class="updateBtn">Update</button>
                </form>
            </ContentContainer>
        </Warpper>
    );
};
export default Model;

const Warpper = styled.div`
    height: 30rem;
    background-color: #212121;
    margin:0;
    padding:0;
    border-radius: 10px;
`;

const ContentContainer = styled.div`
    margin: 2rem;
    button{
        background-color: #ffc107;
        margin:1rem;
        border: 0px;
        height:40px;
        width:100px;
    }
`
const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img{
        margin:1rem;
    }
    img:hover{
        cursor: pointer;
    }
`

