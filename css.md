# This probably should be in css repo
Initialize css repo so it can be used.

# Hover To View Hidden Text Overflow
https://www.willmaster.com/library/web-development/hover-to-view-hidden-text-overflow.php

white-space:nowrap; keeps all text on one line

overflow:hidden; to clip any text that extends past the right side of the container.

text-overflow:ellipsis; to print an elipsis where some of the text is clipped.

Use the overflow:visible; CSS declaration for the class' :hover selector.

# The best “styling in React” tutorial you’ve ever seen
## Inline styling
## Styled Components
## CSS Modules

https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945

# React Inline Styles 
video
React Inline Styles and ReactJS instead of CSS
https://youtu.be/k3OF4A30jSQ

* Specificity Hell

More specific rule: a {color: orange} vs .headerClass a {color: white}

Moving components, specificity can create UI issues. A css senior can refactor with more general rules. 

* Source Order Woes

If two components have the same specificity, the last one to appear wins. In large apps this can easily happen.

* Naming Collisions

Large proj, you ran of good class names quickly.

css selector is global, hard to keep track

Solutions:
naming conventions,
practice code review,
and search code base thoroughly

* Dead Code

 Difficult to remove old css. It's dangerous to remove it.
 
 # React
 * Server and client. Not only in browser anymore.
 * One way data flow model, simple structure than MVC
 * Everything is a component. Encapsulates and makes them consistent, readable and maintainable.

Abandon JS entirely and managing styles with JS instead. 

# Radium library
A toolset for managing inline styles with react.

React built in inline styles support

Most React apps are written in JSX. Creating markup (text) with javascript using html like syntax.

React feature of groups of styles properties using JS Objects and use them as inline styles in a component using braces.
