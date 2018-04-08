import React, { Component } from 'react';
import './playlist.scss';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist__container">
        <main>
          <aside>
            <i className="fa fa-bars" />
            <i className="fa fa-home" />
            <i className="fa fa-search" />
            <i className="fa fa-volume-up" />
            <i className="fa fa-user" />
            <i className="fa fa-spotify" />
            <i className="fa fa-cog" />
            <i className="fa fa-soundcloud" />
          </aside>

          <section className="playlist__content">
            <div className="playlist__music-head">
              <img src="" alt="" />
              <section className="playlist_catty-music">
                <div>
                  <p>CattyBoard Top 100 Single Charts (11.06.36)</p>
                  <p>Unknown Artist</p>
                  <p>2016 . Charts . 100 songs</p>
                </div>
                <div>
                  <i className="fa fa-play"> &nbsp;Play all</i>
                  <i className="fa fa-plus"> &nbsp;Add to</i>
                  <i className="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
                </div>
              </section>
            </div>

            <ul className="playlist__music-list">
              <li>
                <p>1. One Dance</p>
                <p>Crake feat CatKid &amp; Cyla</p>
                <p>2:54</p>
                <p>
                  <span className="playlist__catty-cloud">
                    CATTY CLOUD SYNC
                  </span>
                </p>
              </li>
              <li>
                <p>2. Panda</p>
                <p>Cattee</p>
                <p>4:06</p>
                <p>
                  <span className="playlist__catty-cloud">
                    CATTY CLOUD SYNC
                  </span>
                </p>
              </li>
              <li>
                <p>3. Can't Stop the Feeling!</p>
                <p>Catin Cimberlake</p>
                <p>3:56</p>
                <p>
                  <span className="playlist__catty-cloud">
                    CATTY CLOUD SYNC
                  </span>
                </p>
              </li>
              <li>
                <p>4. Work From Home</p>
                <p>Cat Harmony feat Colla</p>
                <p>3:34</p>
                <p>
                  <span className="playlist__catty-cloud">
                    CATTY CLOUD SYNC
                  </span>
                </p>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <div className="footer__catty-music-small">
            <div>
              <p>If It Ain't Love</p>
              <p>Catson Derulo</p>
            </div>
          </div>
          <aside>
            <i className="fa fa-step-backward" />
            <i className="fa fa-pause" />
            <i className="fa fa-play" />
            <i className="fa fa-step-forward" />
            <i className="fa fa-redo" />
            <i className="fa fa-random" />
          </aside>
        </footer>
      </div>
    );
  }
}

export default Playlist;
