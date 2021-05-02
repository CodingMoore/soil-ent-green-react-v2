# **Soil-Ent-Green**
Project Initiated: 2021-03-05<br/>
Updated: 2021-03-17

__This repo is the JavaScript/React side of this project.  The Python (Raspberry Pi) side of this project can be found in its own repo, [here](https://github.com/CodingMoore/soil-ent-green-python).__

<br/>
<br/>

## **Project Description**

<br/>

__Save Lives!__

Are you a terrible plant parent?  Does your “green” thumb spread death to all potted life-forms? Despair not, for now you have “Soil-Ent-Green”!

Soil-Ent-Green is a web/hardware application that allows users to remotely gather soil moisture data from their houseplants, and have that data graphed for them in real-time. 

A "Raspberry Pi" running the Soil-Ent-Green Python application is used to gather the data and send it to "Firestore" (NoSQL online database) for storage.  The Soil-Ent-Green React application retrieves the data from Firestore and provides a browser-based user interface. 

The React application has full C.R.U.D. capabilities and utilizes Firebase Authentication, so a user can only access, add, edit, and delete their own plants and database data.  As plant information is stored in the Firestore database with the sensor data, this application could be utilized by the user from any browser/device (if the application were deployed).

The Python application can be modified to account for individual sensor calibration and to adjust the interval between sensor readings.  For the purposes of quick demos, this interval is currently set to 2 seconds.

<br/>

## **Project Explanation**

Soil-Ent-Green is an exercise/experiment in figuring out how a hardware product might be paired with its software without the user being required to edit any code. With respect to this, we are assuming that the "Machine Name" that is entered into the "New Plant" creation form, is written somewhere on the hardware's exterior.  

For the purposes of this project, a Raspberry Pi is used instead of custom hardware.  If this were a "real" product, the hardware would have be factory programmed with this unique "machine name" and database authentication key.

<br/>

## **Required for Use**
* A browser that can run HTML5.
* [Node.js](https://nodejs.org/en/)
* A "Raspberry Pi" running Python 3.
* Capacitive soil moisture sensor.
* Analog to digital converter (ADC ADS1115 based).

<br/>

## **Installation Instructions**
**Option 1** (direct download)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. 
<br/>

    https://github.com/CodingMoore/soil-ent-green-react-v2

2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract (unzip) it's contents.
4) Open the unzipped folder/files using Visual Studio Code, or similar source code editing program.  Install all required dependencies from the package.JSON folder, and then build the program.  If you are using Node Package Manager, first navigate to the root directory of the project in your console.  You can then type the following commands to install build and run the program.

    <code>npm install</code>

    <code>npm start</code>

    The code will automatically be built, and it should automatically be launched by your default web browser.  If the application does not launch automatically, you can type the following into your web browser's url bar and hit enter/return.
    <br/>
    
    http://localhost:3000/

**Option 2** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current directory and hit return/enter

    <code>git clone https://github.com/CodingMoore/soil-ent-green-react-v2</code><br>

3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

    The project should automatically launch using your default source code editor.

4) Install all required dependencies from the package.JSON folder, and then build the program.  If you are using Node Package Manager, first navigate to the root directory of the project in your console.  You can then type the following commands to install build and run the program.

    <code>npm install</code>

    <code>npm start</code>

    The code will automatically be built, and it should automatically be launched by your default web browser.  If the application does not launch automatically, you can type the following into your web browser's url bar and hit enter/return.
    <br/>
    
    http://localhost:3000/

## **React Component Tree Diagram**

![Component Diagram](./readmeAssets/soil-ent-green-component-diagram-v1.PNG)

<br/>

## **Known Bugs**
* The graph currently shows ALL moisture data from a given plant rather than from a specific timeframe.
* There is currently no confirmation that the user has signed-up or signed-in.
* The 'My Plants' button in the header is only functional when the user is on the login page.  (The 'My Plants' button that appears at the bottom of other pages is always functional.)
* The 'Red Alert' and 'Yellow Alert' functionality is not yet in place. (It will be used to send notifications if the moisture level drops below these levels.)

<br/>

## **Technology Used**
__Hardware:__<br/>
* [Raspberry Pi 3B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) <br/>
* SwitchDoc [Capacitive Plant Moisture Sensor](https://shop.switchdoc.com/products/capacitive-plant-moisture-sensor-grove?pr_prod_strat=copurchase&pr_rec_pid=1447107919916&pr_ref_pid=229332680734&pr_seq=uniform) Corrosion Resistant Grove<br/>
* SwitchDoc [Grove ADC](https://shop.switchdoc.com/products/grove-4-channel-16-bit-analog-to-digital-converter?pr_prod_strat=copurchase&pr_rec_pid=229332680734&pr_ref_pid=229338251294&pr_seq=uniform) - 4 Channel 16 Bit Analog to Digital Converter (based on ADS1115)<br/>
* SwitchDoc [Pi2Grover](https://shop.switchdoc.com/collections/sensors/products/pi2grover-raspberry-pi-to-grove-connector-interface-board) - Raspberry Pi to Grove Connector Interface Board.<br/>
* SwitchDoc [Grove Cable](https://shop.switchdoc.com/products/grove-30cm-universal-4-pin-5-pack?_pos=1&_sid=2bb98f7db&_ss=r) - 30cm Universal 4-pin: 5-pack

__Software:__<br/>
* Python 3<br/>
* React.js<br/>
* JavaScript<br/>
* Node.js<br/>
* CSS<br/>
* Bootstrap<br/>
* Firebase (Firestore) database

<br/>

## **Authors and Contributors**
Authored by: Randel Moore

<br/>

## **Contact**
CodingMoore@gmail.com

<br/>

## **License**

GPLv3

Copyright © 2021 Randel Moore

