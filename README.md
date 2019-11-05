# Data Visualization Project

## Data

The data used on the project was the [World of Warcraft Avatar History Dataset](https://gist.github.com/meperezcuello/38533ec33abb5e0b3568fa4f91d97bb3) which is a **collection of records that detail information about Horde player characters** that was cleaned and limited to less than 365 days of daily data (since the dataset was limited to 5 mb). Understanding players behavior over playing time, allows the developers to examine posibles updates. furthermore, good Viz allows proper predict gaming time for any future update or server optimization and maintenance (you would not performing maintenance, when most of your player population is online.

## 

For a better overview of the data I've decided to plot two Viz: **the first one**, consist of the total number of players per hour over 12 hours of gameplay, with the objective to perform data manipulation on JS and D3.js without performing it offline (i.e. using Python lib such as Numpy or Pandas). Since, the Data do not show the total number per hour, instead each unique player id and a time it was connected, this transformation was required. **The latter Viz**, was a small prototype to visualize as much data in one plot, the idea is to create Viz that contains as much information of the dataset; this plot shows the total level per race and character class.

**NOTE:** This data visualization presente extra work to study the data prior to develop a final model; to explore future development opportunities.

[![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/%23numberplayerconencted.png)](https://beta.vizhub.com/meperezcuello/15362afeabb94920b4c1fd8175464829)

**Figure 1.** WOW Avatar History Under: Amount Players Connected per Hour

[![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/racevslevel.png)](https://beta.vizhub.com/meperezcuello/0eca535128ec4e0bb3c5e03866adad68)
 
**Figure 2.** WOW Avatar History (Race vs Total Level)

## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:
(**Note:** might change later as the project develops over time).

* How many players are connected in one zone at one specific time?
* What race or charclass of players is most popular in one zone during a specific time?
* Top 3 for each zone of most popular races?
* Top 3 for each zone of most popular charclass?
* Top 5 of most popular zone (i.e., which zones have more players connected)?

**Extra Features: (if time permits it):**
* What is the average of players' levels in a specific zone over time? (Useful to determine popular area for high levels char)
* Average playing time for each char class or race?
* Average Playing time for each zone?

## Sketches

**First Sketch:** This sketch is a unique, since it helps visualize the entire playing time or behavior of every single player (ID) recorded on the datasets. As we can see, there are time tha no data was recorded between two points(hours), meaning that the player was disconnected. This sketch is related to the question, How many players are connected in one zone at one specific time?, since it expanded the question into more details, however this plot has its cons. Such as to many data might not viable to visualize in on single plot.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/PlayerID%20vs%20Time.jpeg)

**Second Sketch:** This sketch similar to the last one however instead of unique ID, the Viz explore the total number of players per zone and charclass in an animated timeline of 24 to 48 hours (can be less or more). This plot is a bar plots, which is easier to interpret compared to other complex model we will see, which means user can easily identify the answer they are seeking. This chart answers the question, What race or charclass of players is most popular in one zone during a specific time?, due to the it shows most of the data information such as charclass on x time.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Most%20Popular%20CharClass%20per%20Zone.jpeg)


**Third Sketch:** Finally, we plot the density of player on the real map of WOW, i.e., total number of players per zone. This plot shows a real-time animation of how the density of each zone change over time, which can be useful to track content and utilities that might be useful for future updates. Also, this plot answers questions, concentration of players levels in a specific zone?, as explained before.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/WOW%20Player%20Zone%20Density%20over%2048%20hours.jpeg)

## behavior for interactions

### WoW Zone Map Over Time
This Visual interaction have a time bar, which the user can click and change the value to a desired hour input (by scrolling the indicator of the bar to either left or right), in order to visualize the density of the amount of players. For each zone will be colored based on a color map (color saturation) indicating the amount of players per zone. The expected color to use is "Red", since the data only has Horde players records; this faction color is red. Thus, the redish the zone the more Horde's players are allocated, if there is no color (grey or white, depends how the visuals are adapted), it will mean that there is not Horde's players, which could mean that zone belong to the other faction "Alliance". The animation will be automatically start, then the user can stop and change to a static unit in time.


**Desired Extra Features:**
  * 3D Bar Plot that show the amount of charclass / races, but it will depend on how well it would look on the final result.


## Schedule of Deliverables
**Note:** main tasks are worked on parallel, allowing multitasking and scalability of the project, since each task will be containerized, i.e., it is easier to debug and perform updates. The main tasks have "Estimated Deliverable Week:" on their paragraph.

* **Data Manipulation:** create multiple methods which contains different data manipulation to assess the Questions/Task, the provided data is not properly formatted to visualize as all desired plots. **1 week**, Estimated Deliverable Week: **Week 7**

* **WoW Zone Map Over Time:** Design Wow maps for Wrath of the Lich King Expansion (either Three.js or SVG) to visualize the density (amount of players) and classes or/ races per zone. **5 weeks**, Estimated Deliverable Week: **Week 9**
  * **Map Design:** Design a zone of the Wrath of the Lich King Expansion, either SVG or Three.js (depends on technical errors encountered). **2 Weeks**
  * Import created zone maps: import to Vizhub the create map and join together, thus it looks as the real game map. **2-3 days**
  * **Create Classes for Each Zone:** identify each zone either with a JS Class or Methods to easily manipulate data. e.g., one class can contain Three.js methods to change the color of the object, which indicates the density. Later, theses classes are export/import into the main index.js and change their parameters based on input data. **2-3 days**
  * **Prototype implementation:** add one hour sample into each zone (already created classes), and visualize the results. **1-2 days**
  * **Add an animated time lapse bar:** create a bar horizontal bar that holds the values of each hour and change over to generate the effect of changes in density over time. **1 week**
  * **Final Data implementation and Debugging:** add the whole data for each time (hours) and solved any encountered issues. **1 week**
 
* **Develop Player ID Vs Playing Time (Hours):** Create the plot to visualize Player IDs vs Playing Time, to visualize a subset of player at times. 50, 100, 500, or 1000 player at times. **2 week** , Estimated Deliverable Week: **Week 8**

* **develop total number of players vs zone colored by charclass:** create a plot that visualize the total number of players in each zone as barplot and colored per char classes over time (hours). **2 week**, Estimated Deliverable Week: **Week 7**
  * develop a prototype plot: create a plot using D3 and React to test the data and design the interface prior design the time bar. **1 week**
  * design time bar: create the animated time bar that will changes the data per time instances. **1 week**


## Open Questions

The only uncertainty that might occur during the development of this project is time concern to learn the libraries to design the WOW maps either in three.js, TopoJson.js or SVG or any data manipulation techniques.


