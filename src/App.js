import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
      <header className="header">
        <img className="header__logo" src="logo192.png" alt="logo"/>
      </header>

      <main className="page-main">

        <nav className="navbar">
          <div className="navbar__item">
            <a href="/" className="navbar__link">Profile</a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">Messages</a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">News</a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">Music</a>
          </div>
          <div className="navbar__item">
            <a href="/" className="navbar__link">Settings</a>
          </div>
        </nav>
        
        <div className="content">
          <div className="profile">
            <div className="profile__img">
              <img src="profile-bg.jpg"/>
            </div>

            <div className="profile__user user">
              <div className="user__photo">
                <img src="gintoki.jpg" alt="user photo"/>
              </div>

              <div className="user__info">
                <h3 className="user__name">Dmitry K.</h3>
                <p className="user__date-of-birth">Date of Birth: 2 january</p>
                <p className="user__city">City: Minsk</p>
                <p className="user__education">Education: BSU'11</p>
                <p className="user__site">Web-Site: https://google.com</p>
              </div>
            </div>

            <div className="profile__posts posts">
              <h3 className="posts__title">My posts</h3>
              <div className="posts__item post">
                <div className="post__user-pic">
                  <img src="gintoki.jpg" alt=""/>
                </div>
                <p className="post__text">
                  Hey? why nobody love me?
                </p>
              </div>
              <div className="posts__item post">
                <div className="post__user-pic">
                  <img src="gintoki.jpg" alt=""/>
                </div>
                <p className="post__text">
                  Post #2
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
      </div>
    </div>
  );
}

export default App;
