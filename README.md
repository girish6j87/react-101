# PS React 101

# Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in c++
- Caching - For Faster Builds
- Image optimization
- Minification of files also
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - will remove unsed code for you
- Different dev and prod bundles

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurentContainer
-      - RestaurentCard
-          - img
-          - Name of the restaurent, Star Rating, Cuisine, delevery time etc
- Footer
- - Copyright
- - Links
- - Contacts
- \*/

Two types of Export/Import

1.  Default Export/Import
    export default Component or variable;
    import Component from "path";

2.  Named Export/Import
    export const Component;
    import {Component} from "path";
    Note: When you have to import multiple thing from a single file use named export/import
    Can we use default and named export together?
# React Hooks
Normal js functions written by facebook developers.
useState() - It is used to generate superpowerful state variables in react.// 80% of times used
useEffect() // 20% of time used
Whenever a state variable updates/changes, react rerenders the component.

Reconciliation algorithm is also known as react fiber.: In React 16 
virtual dom is represntation of actual dom.: Ultimately virtual dom is an object
e.g. <Body> is the virtaul dom which is an react element / object

Diif Algorithm: find outs the difference between two virtual doms. whenever any change in state variable.
Why react is fast : React is doing efficient dom manipulation.

Virtual DOM: Instead of directly manipulating the actual DOM, React creates a virtual representation of it. When changes occur, React updates the virtual DOM first, calculates the most efficient way to make these changes in the real DOM, and then performs the necessary updates. This minimizes the number of direct DOM manipulations, which are typically slow and costly in terms of performance.

Reconciliation Algorithm: React uses a reconciliation process to determine what has changed in the virtual DOM. By comparing the new virtual DOM with the previous one, React can efficiently figure out the minimal set of changes required to update the real DOM. This process is optimized for performance.

Component-based Architecture: React encourages building applications with reusable components. Each component manages its own state and can be updated independently. This modular approach allows React to re-render only those components whose state has changed, rather than re-rendering the entire application

Fiber Architecture: React's Fiber architecture is an advanced reconciliation algorithm introduced in React 16. Fiber allows React to split rendering work into chunks and spread it out over multiple frames. This makes React more responsive and allows for smoother updates, particularly for complex applications with a lot of state changes.

What is hook : it is normal javascript funtion.

# Routing in web apps
- Client side routing
- Server side routing