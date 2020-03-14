import React from "react";
import styled from "styled-components";
import { color } from "./initialStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

type TMyLocationButtonProps = {
  onMoveMyLocation: () => void;
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: bold;
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

const MyLocationButton: React.FC<TMyLocationButtonProps> = ({
  onMoveMyLocation
}) => {
  return (
    <Container onClick={onMoveMyLocation}>
      <FontAwesomeIcon icon={faCrosshairs} />
    </Container>
  );
};

export default MyLocationButton;
