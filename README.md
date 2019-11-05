# Data Visualization Project

## Course Review:

Following document present my CS573: Final Project for Data Visualization Course at WPI, where students learned advanced web techniques and tools such as React.js, D3.js, Three.js, etc. However, the course is not mainly about programming assessments, instead it involves the necessary theory of creating Viz, that causes impact on users or desired population. The expected Viz for a Computer Science Network team should not be the same to non-cs users. Thus, in this course we covered the theory about cognitive perception and how colors, visualization, form and other techniques could be misunderstood to the public. Avoiding usages of bad visualization techniques can save times in later work on other projects. During course we learned a complex data structure algorithm can be visualized with advanced visualization techniques such as “Facet into Multiple Views”. 

The course is interesting and good to have on your curriculum if you will be working with any type of data during you career. Data Viz are good to tell story, and good design are self-explanatory. A story is equally worth on value of a good product development, without it public cannot feel the reasons for the data to be further explorer for future work.


## Data

The data I proposed to visualize for my project is the The [World of Warcraft Avatar History Dataset](https://gist.github.com/meperezcuello/38533ec33abb5e0b3568fa4f91d97bb3) which is a **collection of records that detail information about player characters** that was cleaned and limited to less than 2 days of hourly data (since the dataset was limited to 5 mb). Understanding players behavior over playing time, allows the developers to examine posibles updates. furthermore, good Viz allows proper predict gaming time for any future update or server optimization and maintenance (you would not performing maintenance, when most of your player population is online.


## Pre-Development Visualizations

For a better overview of the data I've decided to plot two Viz: **the first one**, consist of the total number of players per hour over 12 hours of gameplay, with the objective to perform data manipulation on JS and D3.js without performing it offline (i.e. using Python lib such as Numpy or Pandas). Since, the Data do not show the total number per hour, instead each unique player id and a time it was connected, this transformation was required. **The latter Viz**, was a small prototype to visualize as much data in one plot, the idea is to create Viz that contains as much information of the dataset; this plot shows the total level per race and character class.

[![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/%23numberplayerconencted.png)](https://beta.vizhub.com/meperezcuello/15362afeabb94920b4c1fd8175464829)

**Figure 1.** WOW Horde Avatar History Under: Amount Players Connected per Hour.

[![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/racevslevel.png)](https://beta.vizhub.com/meperezcuello/0eca535128ec4e0bb3c5e03866adad68)
 
**Figure 2.** WOW Horde Avatar History (Race vs Total Level).


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:
(**Note:** might change later as the project develops over time).

* How many players are connected in one zone at one specific time? **(Developed)**
* What race or charclass of players is most popular in one zone during a specific time? **(Developed As Pre-Developed Viz)**
* Top 3 for each zone of most popular races? **(Dropped for future revisions)**
* Top 3 for each zone of most popular charclass?  **(Dropped for future revisions)**
* Top 5 of most popular zone (i.e., which zones have more players connected)?  **(Dropped for future revisions)**

**Extra Features: (for future revisions):**
* What is the average of players' levels in a specific zone over time? (Useful to determine popular area for high levels char)
* Average playing time for each char class or race?
* Average Playing time for each zone?


## Sketches (includes future work)

**First Sketch (moved for future work):** This sketch is a unique, since it helps visualize the entire playing time or behavior of every single player (ID) recorded on the datasets. As we can see, there are time tha no data was recorded between two points(hours), meaning that the player was disconnected. This sketch is related to the question, How many players are connected in one zone at one specific time?, since it expanded the question into more details, however this plot has its cons. Such as to many data might not viable to visualize in on single plot.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/PlayerID%20vs%20Time.jpeg)
**Figure 3.** WOW Horde Avatar History (Players ID vs Timestamp).

**Second Sketch (moved for future work):** This sketch similar to the last one however instead of unique ID, the Viz explore the total number of players per zone and charclass in an animated timeline of 24 to 48 hours (can be less or more). This plot is a bar plots, which is easier to interpret compared to other complex model we will see, which means user can easily identify the answer they are seeking. This chart answers the question, What race or charclass of players is most popular in one zone during a specific time?, due to the it shows most of the data information such as charclass on x time.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Most%20Popular%20CharClass%20per%20Zone.jpeg)
**Figure 4.** WOW Horde Avatar History (#players vs Zones).

**Third Sketch (developed):** Finally, we plot the density of player on the real map of WOW, i.e., total number of players per zone. This plot shows a real-time animation of how the density of each zone change over time, which can be useful to track content and utilities that might be useful for future updates. Also, this plot answers questions, concentration of players levels in a specific zone?, as explained before.
**Figure 5.** WOW Horde Player Density Over Time.

**Note:** The redness density levels was changed to a **colorful heatmap** for visual purpose, but the locations of each player was not provided on the datasets. Only zone locations is known, thus data is centralized and connected from a fixed center point.

![image](https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/WOW%20Player%20Zone%20Density%20over%2048%20hours.jpeg)


## Final Results

![image](https://raw.githubusercontent.com/meperezcuello/CS573-Data-Visualization-Final-Project-WoW-Horde-Player-Anaylsis/master/Images/Results/Final-WoW-Hord-Players-2018-Viz.png)
**Figure 6.** WOW Horde Player Density on 2008 (release year of Wrath of Lich King Expansion).

## Behavior for interactions

### How the Data Visualization Works?


1. The Application will load all necessary Texture and Data to load the Viz. **Note:** this is a heavy computational task and might require switch to a resources such a GPU. This issues is under working process.

2. Then the data is fully loaded, and a "Play Button" will appear allowing to be click.

3. After clicking the button, a 1 minutes animation will start showing the Horder players density over the time (might varies on CPU Clock or general performance of device, this issues is working on process by adding a Clock Tick on the animation functions to normalize the loop speed among devices).

4. Finally, An interactive GUI will pop-ups including extra UI, willingly allowing users to change date/timestamp.


### WoW Zone Map Over Time
This Visual interaction have a time bar, which the user can click and change the value to a desired day input (by scrolling the indicator of the bar to either left or right), in order to visualize the density of the amount of Horde players. For each zone will be colored based on a color map (color Hue) indicating the amount of Horder players per zone and timestamp. The expected color to use is "Rainbow, keeping in mind that the data only has Horde players records. Thus, the redish (highest hue concentration) the zone the more Horde's players are allocated, if there is no color (Blue), it will mean that there is not Horde's players, which could mean that zone belong to the other faction "Alliance". The animation will be automatically start, then the user can stop and change to a static unit in time.

**Desired Extra Features (for future work):**
  * 3D Bar Plot that show the amount of charclass / races, but it will depend on how well it would look on the final result.



## The proposed schedule of Deliverables during the life of the project
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

The only current issues with the Three.js 3D plot relies on Shader Texture loading on certain machines specs or slow internet connections. During the testing state, some devices presented dark texture mapping on the generated heightmap object (WoW World Map). However, this will be solved on the future using web workers or async processes to allow loading time per devices resources.

**Note:** This problems occurs due to the large data loaded into the memory, the collected data from the game (Number of players), was drawn on a canvas, converted to Three.js Texture (necessary for Material) and saved on a dictionary, which the processess of converting to Texture is low (plus, if you add multiples days (rows)). 


