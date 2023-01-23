import styled from "styled-components";

export const RatingCardWrapper = styled.div`
    border-radius: 20px;
    width:100%;
    max-width: 450px;
    min-width: 450px;
    background: hsl(213, 19%, 18%);
    padding: 2.2rem;
`
export const RatingIconBox = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: hsl(210, 16%, 22%);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const H1 = styled.h1`
    color: hsl(0,0%, 92%);
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 2rem 0 1rem 0;
    text-align: left;
`
export const P = styled.p`
    color: hsl(217, 12%, 63%);
    font-size: 1rem;
    letter-spacing: .5px;
    margin: 2rem 0 1rem 0;
    text-align: left;
`
export const BUTTON = styled(RatingIconBox)`
    font-size: 1rem;
    border:none;
    outline: none;
    cursor:pointer;
    display: inline-block;
    font-weight: bold;
    color: white;

    background-color:${({ selected }) => selected ? 'hsl(25, 97%, 53%)' : 'hsl(210, 16%, 22%)'};

    &:not(:last-child){
        margin: 0.7rem;
    }

    &:hover{
        background: hsl(25, 97%, 53%);
        color:black;
        transition: all 0.7s;
    }
`

export const SubmitButton = styled.button`
    border-radius: 25px;
    width: 100%;
    background: hsl(25, 97%, 53%);
    border: none;
    outline: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    color:white;
    margin-top: 1rem;
    cursor:pointer;

    &:hover{
        background: white;
        color: hsl(25, 97%, 53%);
    }
    
`