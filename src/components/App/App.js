import s from './App.module.scss';
import {Route} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

function App(props) {
    return (
        <div className={s.app}>
            <Header/>
            <main className={s.main}>
                <Navbar />
                <div className={s.content}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={DialogsContainer} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </main>
        </div>
    );
}

export default App;
