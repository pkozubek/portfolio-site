import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin: 5%;
  display: flex;
  flex-wrap: wrap;

  svg {
    margin-left: 5%;
    width: 25px;
    height: 25px;
    margin-right: 25px;
    color: rgba(51, 153, 255, 0.5);
  }
`

export const SingleExpEduContainer = styled.div`
  margin: 25px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  width: calc(100% - 45px);

  h3 {
    color: rgba(51, 153, 255, 0.5);
  }
`

export const SubSingleExperience = styled.div`
  padding: 10px;
  width: calc(90% - 150px);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-right: 10%;

  h3 {
    color: ${props =>
      props.destination == "experience" ? "rgba(51,153,255,0.5)" : "gray"};
  }

  p {
    color: lightgray;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
