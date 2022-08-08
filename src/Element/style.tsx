import styled from 'styled-components'
import theme from '../Config/theme.json'

export const ContainerGlobal = styled.section`
    width:100%;
    min-height: 100vh;
    background-color: ${theme.ColorPrimary};
`
export const Header = styled.header`
    display: grid;
    place-content: center;
    width: 100%;
    height: 20vh;
    background: linear-gradient(330deg, ${theme.ColorSecond} 20.33%, rgba(255, 153, 0, 0) 20.34%), linear-gradient(205deg, ${theme.ColorFourth} 82.13%, ${theme.ColorSecond} 82.14%, ${theme.ColorSecond} 110.37%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    

    &>:nth-child(1){
        cursor: pointer;
        width:20em;
        height: 100%;
        & img {
            width: 100%;
            filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
        }
        @media screen and (min-width:40em){
            width: 30em;
        }
    }
`

export const Container = styled.section<{ PaddingTop?: string }>`
    display: flex;
    justify-content: center;
    padding-top: ${({ PaddingTop = '3em' }) => PaddingTop};
`
export const Card = styled.section`
    width: 40vw;
    min-height: 30em;
    background-color: ${theme.ColorWhite};
    box-shadow: 0px 4px 6px rgba(2, 2, 2, 0.16);
    border-radius: 0px 0px 8px 8px;
    padding-bottom: 5rem;
    margin-bottom: 5rem;

    
@media screen and (max-width:64em){
  width: 80vw;
}

@media screen and (max-width:40em){
  width: 95vw;
}

`
export const SubHeader = styled.header`
    width: 90%;
    height: 15vh;
    padding: 0px 5% 10px 5%;
    display: flex;
    align-items: center;
    gap: 32px;
    background-color: ${theme.ColorFourth};
`

export const Title = styled.h2`
    color: #FF9900;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.11);
    & span {
      color:${theme.ColorWhite};
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.11);
    }
`

export const List = styled.article`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 16px;

    @media screen and (max-width:40em){
    width: 98%;
    }
    
    & > :nth-child(n){
        display: flex;
        flex-direction: row;
        gap: 16px;
        color: ${theme.ColorWhite};
        
        font-size: 1rem;
        & > :nth-child(1){
            display: flex;
            width: 8%;
            font-weight: 800;
            padding: 0px 12px 0px 12px;
            align-items: center; 
            justify-content: center;
            background-color: ${theme.ColorPrimary};
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.49);
            border-radius: 4px;
        }
        & > :nth-child(2){
            display: flex;
            font-weight: 400;
            width: 92%;
            padding: 6px 16px 6px 16px;
            text-align: left; 
            align-items: center;
            justify-content:space-between;
            background-color: ${theme.ColorPrimary};
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.49);
            border-radius: 4px;
        }
    }
    
    `

export const Button = styled.button`
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
    background-color: rgba(0,0,0,0);
    border: 0px;
    margin-left: 8px;
    & img {
        background-color: rgba(0,0,0,0);
        filter: invert(100%);
    }
`

export const Loading = styled.div`
    display: grid;
    place-content: center;
    & > img {
        width: 80%;
        height: 80%;
        margin-top: 50%;
        background-color: rgba(0,0,0,0);
        animation-name: smooth;
        animation-duration: 0.5s;
        animation-direction: alternate;
        animation-timing-function: cubic-bezier(
        .5, 0.05, 1, .5);
        animation-iteration-count: infinite;
    }
    
    @keyframes smooth{
        from { transform: scale3d(1, 1, 1)  ;}
        to { transform: scale3d(0.5, 0.5, 0.5) ;}
    }   
 
`

export const Select = styled.select`
    position: fixed;
    bottom: 16px;
    left: 16px;
    background-color:rgba(0, 0, 0, 0) ;
    border: 0px;
    color: ${theme.ColorSecond};
    font-size: 1em;
`

export default ContainerGlobal
