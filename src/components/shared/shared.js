import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin: 15px 0 10px 5%;
  display: flex;
  flex-wrap: wrap;

  svg {
    margin-left: 5%;
    width: 25px;
    height: 25px;
    margin-right: 25px;
    color: rgba(51, 153, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 25px 5% 25px 5%;
  }

  @media (max-width: 550px) {
    width: 100%;
    margin: 25px 0 25px 0;
  }
`

export const scrollToId = id => {
  const element = document.getElementById(id)

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

export const SingleExpEduContainer = styled.div`
  margin: 25px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  width: calc(100% - 45px);

  h3 {
    color: rgba(51, 153, 255, 0.5);
  }

  label {
    color: lightgray;
  }

  @media (max-width: 768px) {
    margin: 15px;
    width: calc(100% - 30px);

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.1em;
    }

    p {
      font-size: 0.9em;
    }
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
      props.destination === "experience"
        ? "rgba(51,153,255,0.5)"
        : "rgba(0,0,0,.8)"};
  }

  p {
    color: lightgray;
  }

  @media (max-width: 768px) {
    width: calc(90% - 120px);

    h3 {
      font-size: 1.1em;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
