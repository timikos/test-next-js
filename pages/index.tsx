import type { NextPage } from 'next'
import React from "react";

import MainLayout from "../components/MainLayout";

import { Title, TomatoTitle, Container, StyledLink } from "./index.style"


const Home: NextPage = () => {

  return (
      <MainLayout title={"Main"}>
          <Container>
              <StyledLink href={'/'}>LINK</StyledLink>
              <Title primaryColor primary> Hi </Title>
              <TomatoTitle primary> Hi </TomatoTitle>
          </Container>
        <h1>MAIN</h1>

      </MainLayout >
  )
}

export default Home
