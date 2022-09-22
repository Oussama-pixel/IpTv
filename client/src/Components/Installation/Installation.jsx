import React from 'react'
import  "./installation.scss"
import InstallationWay from './InstallationWay/InstallationWay'

export default function Installation() {
    let info_amazon = (
      <>
        <p>
            You can download the APK of IPTV smarters pro via direct
        </p> 
        <p>
            link by Downloader app in Fire TV, follow these steps:
        </p>
        <p>
            1- Install Downloader on your Amazon Fire TV.
        </p>
        <p>
            2- Go to settings From the menu, select Device. Next, pick Developer Options and you should see a sub-menu that includes the entry ‘Apps from Unknown Sources’. Make sure to enable it.
        </p>
        <p>
            3- go back to the Downloader app, you can easily install "Downloader" app from the Amazon Store. On the app’s initial page you’ll see a white box into which you can type a URL. Select it and type in:
            https://bit.ly/33nkay9
            Then install it.
        </p>
        <p>
            4- Open IPTV Smarters PRO and click Login with Xtream Codes API
        </p>
        <p>
            5- Enter Xtream connection details
            For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER
        </p>
      </> 
    )
    let android_info = (
        <>
            <p>
                IPTV Smarters PRO Application
            </p>
            <p>
                1- Open Google Play Store
            </p>
            <p>
                2- Search for “IPTV Smarters PRO” and install it
            </p>
            <p>
                3- Open IPTV Smarters PRO and click Login with Xtream Codes API
            </p>
            <p>
                4- Enter Xtream connection details
                For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER
            </p>
        </>
    )
    let ios_info = (
        <>
            <p>
                <b>
                    APP 1:
                </b>
            </p>
            <p>
                IPTV Smarters PRO Application
            </p>
            <p>
                1- Open Google Play Store
            </p>
            <p>
                2- Search for “IPTV Smarters PRO” and install it
            </p>
            <p>
                3- Open IPTV Smarters PRO and click Login with Xtream Codes API
            </p>
            <p>
                4- Enter Xtream connection details
                For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER
            </p>
            <p>
                <b>
                    APP 2:
                </b>
            </p>
            <p>
                GSE Smart IPTV app available for iPhone, iPad, tvOS, and Mac OS X. You can download it from the App store.
                Download for iOS devices: apps.apple.com
            </p>
            <p>
                1- Navigate to XTREAM CODES API
            </p>
            <p>
                2- Press + icon to add new XTREAM CODES list
            </p>
            <p>
                3- Enter Xtream based details
                For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you  Turn ON Autoupdate EPG and click LOGIN
            </p>
            <p>
                4- Enter the created list and watch movies and live TV channels
            </p>
        </>
    )
    let smart_tv = (
        <>
            <p><b>APP 1 (Free):</b></p>

            <p>ROOM IPTV Application</p>
                
            <p>1- Open the download store </p>
                
            <p>2- Search for “ROOM IPTV” and install it</p>
                
            <p>3- Inside the app you will find "device key" & "device id".</p>
                
            <p>4-Go to the link: "https://manage.roomiptv.com/multi/login.php"</p>
                
            <p>5-Log in with your device id and device key</p>
                
            <p>6-Simply click "Add Playlist" and add the M3U link provided by us to the app</p>
                
            <p>7- Restart the app and you should see the playlist</p>
                
            <p><b>App 2 (paid):</b></p>
                
            <p>IBO Player Application</p>
                
            <p>1 – Go to the Samsung or LG Smart TV app store screen and search for “IBO Player” application If the app is not displayed on the main screen you may have to search for it in ‘All Apps’ or ‘Updates’. If you still can’t find it please contact us.</p>
                
            <p>2 – Launch the “IBO Player” app and make a note of the ‘Device ID’ and ‘Device Key’ which is displayed on the screen.</p>
                
            <p>3 – Navigate to https://iboiptv.com/device/login and Enter Device ID and Device key you noted in step 1, Then click on Login.</p>
                
            <p>4 – Click (add XC Playlist) button and Fill your Xtream connection details (check your email for this details).</p>
                
            <p>Enter Username , Password and Host (Server URL of xtream connection). Click on Save</p>
                
            <p>5 – Then back to IBO Player application and choose Refresh to reload Playlists , Then the playlist name must appears</p>
                
            <p><b>Note: You can send us the device key/id and we will add it for you if you were not able to add it by yourself</b></p>


        </>
    )
    let mag_box_info = (
        <>
            <p>Step 1: When the box is being loaded the main portal screen appears. After that click on “settings”,</p>

            <p>Step 2: Then press on “System settings” and click on “Servers”.</p>

            <p>Step 3: Select “Portals”.</p>

            <p>Step 4: In the “Portal 1 name” line enter the following ” IPTV “.</p>
            <p>In the “Portal 1 URL” enter the portal address provided by your IPTV distributor. First, you must provide your device Mac address which can be found on the back side of your box to your IPTV distributor.</p>



            <p>When all the steps listed above are done press”EXIT” 2 times on the remote control and restart the portal.</p>

            <p>Now everything is ready to start watching Live TV… </p>
        </>
    )
    let windows_info = (
        <>
            <p>IPTV Smarters PRO Application (APP 1)</p>

            <p>1- Go to iptvsmarters.com to download Smarters PRO then install it</p>
            <img src='/images/installations/installation_windows_pic1.jpg' alt=""/>
            <p>
                3- Open IPTV Smarters PRO and click Login with Xtream Codes API
            </p>
            <img src='/images/installations/installation_windows_pic2.jpg' alt=""/>
            <p>
                4- Enter Xtream connection details
                For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER
            </p>
            <img src='/images/installations/installation_windows_pic3.jpg' alt=""/>
            <p>
                5- It will start downloading channels and VOD about 10 seconds then you will be logged in and you will see this page
            </p>
            <img src='/images/installations/installation_windows_pic4.jpg' alt=""/>
            <p>
                My IPTV Player (APP 2)
            </p>
            <p>
                This is an exceptional media player with EPG to play your IPTV channels on your Windows Phone, Windwos10, and Xbox One. You can simply load your M3U playlist from storage or remote source and you are good to go.
            </p>
            <p>
                You can download it from the "Microsoft Store"
            </p>
            <p>
                1- Navigate Settings
            </p>
            <p>
                Go to the Settings tab and open Add new playlist and EPG source
            </p>
            <img src='/images/installations/installation_windows_pic5.jpg' alt=""/>
            <p>
                2- Enter M3u Link
            </p>
            <p>
                Type a name (ex:ipmivo) in the Remote channel list name field.
            </p>
            <p>
                Enter (paste) M3u link provided by IPTV provider in Enter remote source URL
            </p>
            <p>
                Press Add remote list
            </p>
            <img src='/images/installations/installation_windows_pic6.jpg' alt=""/>
            <p>
                3- Select list to load
            </p>
            <p>
                Back to Settings and select ipmivo in Select Channel playlist
            </p>
            <img src='/images/installations/installation_windows_pic7.jpg' alt=""/>
            <p>
                4-Watch Channels and VOD Done, Back to Channels tab now and select your country you want to watch TV channels.
            </p>
        </>
    )
    let mac_info = (
        <>
            <p>IPTV Smarters PRO Application</p>

            <p>1- Go to iptvsmarters.com/#downloads</p>

            <p>2- Select Download MAC APP and install it</p>

            <p>3- Open IPTV Smarters PRO and click Login with Xtream Codes API</p>

            <p>4- Enter Xtream connection details</p>
            <p>For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER</p>
        </>
    )
  return (
    <div className='installation' id='installation'>
        <div className="installation-info">
            <h3>
                Intallation
            </h3>
            <pre>
                This section shows you how to setup our IPTV subscription on {"\n"}
                your device. We explained few apps, you can use any other {"\n"}
                desired IPTV app player aswell
            </pre>
        </div>
        <div className="insatllation-ways">
            <InstallationWay title={"Installation"} height={"100px"} info={<p>Select your device below:</p>}/>
            <InstallationWay title={"Amazon FireStick"} height={"470px"} info={info_amazon}/>
            <InstallationWay title={"Android Device (BOX/Phone/TV)"} height={"250px"} info={android_info}/>
            <InstallationWay title={"iOS (Apple TV/iPhone/iPad)"} height={"620px"} info={ios_info}/>
            <InstallationWay title={"SMART TV (LG/SAMSUNG)"} height={"950px"} info={smart_tv}/>
            <InstallationWay title={"MAG BOX (STB EMU)"} height={"400px"} info={mag_box_info}/>
            <InstallationWay title={"Windows PC"} height={"3150px"} info={windows_info}/>
            <InstallationWay title={"MAC OS"} height={"320px"} info={mac_info}/>
        </div>
    </div>
  )
}
