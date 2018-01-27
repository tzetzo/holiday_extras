the app has 3 files in the same folder:


flickr.php - the HTML page

flickr.js - used to accept the Flickr REST API request data & show it in the browser

flickr.css


1. load flickr.php in the browser through running localhost Apache server. for example: localhost/holidayextras/flickr.php
2. double click flickr.php to open it in a browser without running localhost on Apache server


SPA:
If the containers that have 4 items each were supposed to be inserted in their separate templates (as a SPA with AngularJS expects) we need to dynamically create these templates with PHP
as we assume the number of returned items might change in the future and thus the number of templates needed. 
This requires back-end code which is not the current task. This is why I haven't used AngularJS code here.

However if we assume that the returned items will always be 20 (like it is currently) then the dinamically created DOM nodes here can become hard coded as well as the number of templates for 
AngularJS will always be 5(each having 4 items). We will still need a way to distribute the incoming Flickr data among those templates.