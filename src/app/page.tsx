import Navbar from '../components/Navbar';
import ProSearchSidebar from '../components/ProSearchSidebar';
import { Alchemy, Network, AssetTransfersCategory } from "alchemy-sdk";

export default async function Home() {

  return (
    <main className='w-full h-full flex'>
      <Navbar />
      <ProSearchSidebar />
    </main>
  )
}

