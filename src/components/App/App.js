import s from './App.module.scss';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__wrapper}>
        <Header/>
        <main className={s.main}>
          <Navbar/>
          <div className={s.content}>
            <Profile/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
