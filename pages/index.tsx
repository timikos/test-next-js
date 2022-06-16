import type { NextPage } from 'next'
import React from "react";

import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  return (
      <MainLayout title={"Main"}>
        <h1>MAIN</h1>
      </MainLayout >
  )
}

export default Home
