import style from './datavis.module.css';

const Page = () => (
   <div className={style.contentContainer}>
      <h1>Using the App - Saving and Loading Sessions</h1>

      <p>The app allows you to save sessions, including camera options, display items, and item settings. Loading textures is currently not supported.</p>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Session Buttons</h2>
            <p>The <b>save</b> and <b>load</b> session buttons are available in the main display section and are pictured to the right.</p>
         </div>
         <div>
            <img src={require('assets/img/sessions_1.webp')}/>
         </div>
      </div>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Saving a Session</h2>
            <p>Clicking the <b>save session</b> button will bring up the window pictured to the right. Simply choose a session name and click the "save" button.</p>
            <p>The session will be stored as a cookie, so clearing cookies will erase the session. Server-side support is coming soon.</p>
         </div>
         <div>
            <img src={require('assets/img/sessions_2.webp')}/>
         </div>
      </div>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Loading a Session</h2>
            <p>Clicking the <b>load session</b> button will bring up the window pictured to the right, with a list of all saved sessions. Clicking on a session will immediately load it.</p>
            <p>To delete a saved session, click the '&times;' button. A confirmation will pop up asking you to click the '&times;' button a second time. Doing this will delete the session.</p>
         </div>
         <div>
            <img src={require('assets/img/sessions_3.webp')}/>
         </div>
      </div>
   </div>
)

export default Page;