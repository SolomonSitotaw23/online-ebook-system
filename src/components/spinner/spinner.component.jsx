import React from "react";
import { FallingLines } from "react-loader-spinner";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
