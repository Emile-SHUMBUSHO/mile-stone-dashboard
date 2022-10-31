import React, {useState} from "react";
import close from "../assets/close2.png"
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateProjectAction } from "../redux/actions/ProjectActions";
import { useNavigate } from "react-router-dom";

const Model = ({open,onClose, project, openModel, setOpenModel})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    useEffect(()=>{
        setTitle(project.title)
        setDesc(project.description)
    },[project])

    const handleSubmit = (e, id)=>{
        e.preventDefault()
        const data = {
            title,
            description: desc,
            image: img
        }
        dispatch(UpdateProjectAction(id, data, navigate))
        setOpenModel(false)
    }
    if(!open) return null;
    return (
        <Warpper>
            <CloseButton>
                <img onClick={onClose} src={close} alt="close" width="30px" height="30px"/>
            </CloseButton>
            <ContentContainer>
                <form id="updateForm" encType="multipart/form-data" onSubmit={(e)=>handleSubmit(e, project.id)}>
                <div class="mb-3 mt-3">
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} class="form-control" id="title" placeholder="Project Title" name="title"/>
                </div>
                <div class="mb-3">
                    <input type="file" onChange={(e)=>{setImg(e.target.files[0])}} class="form-control" id="img" name="img"/>
                </div>
                <textarea class="form-control" value={desc} onChange={(e)=> setDesc(e.target.value)} rows="5" id="" name="text"></textarea>
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

