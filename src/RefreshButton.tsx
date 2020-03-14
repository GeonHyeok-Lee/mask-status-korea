import React from "react";
import styled from "styled-components";
import { color } from "./initialStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 20px;
  @media (max-width: 1023px) {
    font-size: 11px;
    padding: 10px;
  }
  svg {
    font-size: 24px;
    color: ${color.white};
    transition: all 0.2s;
    :hover {
      color: ${color.green};
    }
    @media (max-width: 1023px) {
      font-size: 16px;
    }
  }
`;

const RefreshButton: React.FC<any> = ({ onRefreshStoreData, spin }) => {
  return (
    <Container onClick={onRefreshStoreData}>
      <FontAwesomeIcon icon={faSync} spin={spin} />
    </Container>
  );
};

export default RefreshButton;
