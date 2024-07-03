# Roster Calculator

The purposes of this website is to provide a roster calculator for medium to large size companies. The user will select the number of weeks and the table wil display prompting a start time and end end time for each day. The calculator is geared towards a paid hours calculation, so if the user selects unpaid breaks, these hours will be removed. 

With large scale companies, it is common to have mutiple rosters to cover all their internal teams and roles. These can be beome quite complex when tryng to match hours against changing busy periods or seasonal trends.

One of the mian considerations when creating a roster is to ensure the hours in the roster matches the employee contracted hours ob avger over the length of the roster (1 week or muttiple weeks). This calculator shows the use the average hours and they can then edit the times, if eeded, to bring the average to the 40 hours (or whatever contract the employee has)

![Responsice Mockup](assets)

## Features 

### Existing Features

__Selecter Number of Weeks and whether paid or unpaid breaks__
  - ![Drop down list and Raio buttons](assets/images/questions.jpg)
  - These are the first 2 user inputs needed. 
  - The number of weeks determines how many lines in the roster.
  - Paid or unpaid breaks will effect the calculation for shift length. This is beacuse the shift length that is being caluclated is paid hours. This should match back to an employees contracted weekly hours.


__Enter Daily Start and End times__

  - ![Input table](assets/images/input-table.jpg)
  - The number of rows in this table will be based on the selection the user made in the above dropdown list.
  - This table allows for inputs for Start and End time for each day. 


__Display Daily shift lengths__

  - ![Input table](assets/images/display-table.jpg)
  - The number of rows in this table will maych the input table
  - This is a readonly table which displays the length of each shift for each day. This is in demimal format.

__Average Weekly Hours__

  - ![Input table](assets/images/weekly-average-hours.jpg)
  - This is straight forward calculation of the total number of shifts hours divided by the number of weeks.
  - The average weekly hours are displayed as readonly
  - The average weekly hours should be a check against whatever contracted hours a particular mployee has

__Next Steps__
  - Although mobile first is the recomended approach, for this particular pfoject, the recoended viewing is on a tablet or above. The reason for this is that weekly view is needed. Further disign would be needed to optimise this site for mobiles with the lielihood being a day view for each day of the roser rather than a weekly view but this too would be probleatic on rosters longer than 2 or 3 weeks.

  - Also, most robost checks are needed to ensure user does not select a roster below zero length shift.

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](assets/images/html-validator.jpg)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](assets/images/css-validator.jpg)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - Function with the largest signature take 0 arguments, while the median is 0.
      - Largest function has 55 statements in it, while the median is 30.
      - The most complex function has a cyclomatic complexity value of 5 while the median is 4.



## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://terry-martin.github.io/Roster-Check/


## Credits  

### Content 
 - CSS for button was adapted from https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover
 - JS for adding IDs to dynamically created cells was adapted from https://stackoverflow.com/questions/23003341/add-id-dynamically-to-each-table-cells

