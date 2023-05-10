# Unified LASA Office Hours
Gideon Witchel and Andrew Teodorovich
## Problem and Solution
LASA teachers’ office hours are displayed on the LASA Life app in a spreadsheet format. Students can look up specific classes to see their office hours. This is a clunky system which doesn’t suit students’ needs, because it doesn’t allow students to easily compare office hours, plan for which office hours to go to, or see what other teachers in the same subject have office hours at different times.

We are making a website which will visually display office hours in a calendar-like format. Students will be able to look at specific classes, teachers, subjects, or a combination of them, easily figuring out when and where they need to be.

The website will use HTML, CSS, Javascript, Bootstrap, and Flask. We will use Python and Regex for data scraping and sorting.

We will use GitHub to collaborate and enforce version control.

## Efficacy Criteria
To determine the efficacy of the website, we will have 3 criteria:
- Visually appealing and well organized.
- Simple user interface to select classes, teachers, subjects to display.
- Well documented for future upkeep as teachers’ office hours change.


# Instructions for importing teacher data for future years

## Google Form

Here is the link to a Google folder containing the Google Form and Responses Spreadsheet:
- https://drive.google.com/drive/folders/1SsBOW5KBBuG1YNmpyrtrmeK4TKjP_QMP?usp=sharing

Open the Unified Office Hours (Responses) Google Sheet and delete any previous response data. Delete everything except row 1

Next, send out the google form and have all teachers fill out the form. This is the link to the form:
- https://forms.gle/DSBx3V4bc9uc2ZFm7


## Parsing the Data

- After all teachers have filled out the form, download the data from the spreadsheet
- Download the data as a CSV from the Unified Office Hours (Responses) sheets in the above shared folder (File -> Downlod -> Comma Separated Values)
- Save the file as 'Unified Office Hours (Responses).csv' in the data directory
- Run the python script 'pythonScriptForArray.py' in the same directory as the downloaded form data

## Putting the Data into the Website
- Copy and paste the outputed arrays from pythonScriptForArray.py' and replace the 'classes' and 'data' arrays in the 'index.js' file
