import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyClock from './02/MyClock';
import MyDiv from './03/MyDiv';
import MyListItem from './04/MyListItem';
import Grouptext from './01/GroupText';
import MyList from './04/MyListData'
import Lotto from './05/Lotto';
import Foodcard from './06/Foodcard';
import FoodMain from './06/FoodMain';
import MyToggle from './07/MyToggle';
import MyEffect from './08/MyEffect';
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
import Traffic_Temp from './10_Temp/Traffic';
import MyRef from './11/MyRef_Cal';
import MyRef_Cal from './11/MyRef_Cal';
import Gallery from './12/Gallery';
import Festival from './13/Festival';
import Fcst from './15/Fcst';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNav from './AppNav';
import FcstList from './15/FcstList'
import DivMain from './17/DivMain';
import ChargeMain from './18/ChargeMain';

// import RouteMain from './14/RouteMain';

function App() {

  return (
    <BrowserRouter>
      <div className="w-full xl:w-8/10 h-screen mx-auto
                         flex flex-col justify-start items-start
                        bg-amber-50">
  
        <header className="w-full min-h-20
                                 flex justify-between items-center
                                 bg-amber-300">
          <div className='flex ml-10'>
            <img src={reactLogo} alt="react" /> +
            <img src={viteLogo} />
            <AppNav />
          </div>
  
  
  
        </header>
        <main className='bg-white w-full flex-grow
                               overflow-y-auto py-10
                               flex flex-col justify-start items-center'>

           <Routes>
              <Route path='/' element={<MyClock />} />
              <Route path='Lotto' element={<Lotto />} />
              <Route path='FoodMain' element={<FoodMain />} />
              <Route path='BoxOffice' element={<BoxOffice />} />
              <Route path='Traffic_Temp' element={<Traffic_Temp />} />
              <Route path='Gallery' element={<Gallery />} />
              <Route path='Festival' element={<Festival />} />
              <Route path='Fcst' element={<Fcst />} />
              <Route path='FcstList' element={<FcstList />} />
              <Route path='DivMain' element={<DivMain />} />
              <Route path='ChargeMain' element={<ChargeMain />} />
          </Routes>                
  
          
        </main>
  
        <footer className="w-full min-h-20
                                 flex justify-center items-center
                                 bg-red-400">
          K-digital 2025 2기
  
        </footer>
  
      </div>
    </BrowserRouter>
  )
}

export default App
