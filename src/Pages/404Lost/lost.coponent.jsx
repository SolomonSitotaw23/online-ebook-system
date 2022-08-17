import React from "react";
import "./lost.style.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Lost = () => {
  return (
    <LostSec className="page_404">
      <Container className="container_404">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LostSec>
  );
};
const LostSec = styled.section``;
const Container = styled.div``;

export default Lost;
