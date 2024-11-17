import { useState } from "react";
import HomeCategory from "../components/HomeCategory";
import HomeProducts from "../components/HomeProducts";


function Home() {
  const [categoryId, setCategoryId] = useState<number | string>("")

  return (
    <>
      <HomeCategory setCategoryId={setCategoryId}/>
      <HomeProducts categoryId={categoryId}/>
    </>
  )
}

export default Home