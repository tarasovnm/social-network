import s from './App.module.scss';
import {Route, BrowserRouter} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <main className={s.main}>
                    <Navbar/>
                    <div className={s.content}>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
