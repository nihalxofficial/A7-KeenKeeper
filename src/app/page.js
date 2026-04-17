import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import AllFriends from "./components/AllFriends/AllFriends";
export const metadata = {
  title: 'Home Page',
  description: 'This is home page',
}

export default function Home() {
  
  return (
    <>
      <Banner/>
      <Stats/>
      <AllFriends/>
      
    </>
  );
}
