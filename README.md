# RA-project02: Instanews App

Instanews App One-page responsive website that allows a user to filter top news story categories via New York Times API. 

URL: https://usotnyk.github.io/RA-project02/

Used tech and libraries:

- HTML5 
- CSS3 
- JavaScriptES5 
- Heapbox jQuery plugin used to style select menu 
- Gulp build system 
- SASS


Apr-25-2017

To do:

 - Dynamically populate options in drop-down sections menu from an array;
 - Complete responsive design for header: resize the header with jQuery;
 - Refactor code to clone parent <div>;
 - Heapbox;

Done:

 - added function to dynamically populate options of <select> on page load;
 - added loading gif image for transition before the data were returned;
 - added Heapbox functionality to style dropdown menu;
 - implemented resizing of <header> once articles are loaded.
 - fixed bug with loader gif showing on "Sections.." option (placeholder);


  Apr-27-2017

  - configured gulp task systme set-up (concat, sass, cleanCSS, watch, browser-sync);
  - sass variables';
  - Applied transitions to show/hide abstract on hover;

  Project week updates

  - seperated JS code into a it's own file;
  - added transitions of opacity on hover of paragraphs;
  - fixed bug that prevented header from moving to the top left corner and changing height on load;
  - fixed bug when loader was not showing (removed "rendered class");
