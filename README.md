# Namaste React 🚀
- React uses Reconciliation Algorithm (React Fiber)
- It is a React core algorithm.
- React is doing efficient DOM manipulation beacuse it has Virtual DOM.
- Virtual DOM is a representation of Actual DOM. for eg. This is an Actual DOM(<div><img /></div>)
    - Whenever there is a chnage in a state variable, React will findout the difference between virtual dom and it will rerender the dom.

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- It is based on File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consisting Hashing
- Code Splitting
- Differntial Bundling - Support Older Browsers
- Diagonistic
- Error Handling/Suggestion
- HTTPS is provided by Parcel
- Tree Shaking Algorithm = Remove unused Code.
- Different build for Dev and Production Bundles

# Config driven UI

# Two Types of Exports/Imports

- Default Export Component
    export default <component_name>
    import <component_name> from "path";

- Named Export Component
    export const <component_name>
    import {component_name} from "path";

# Hooks in React
- Normal JS utlility function
- useState() & useEffect() these are most important hooks in react.
    - useState() => Whenever a state variable change it render the component.
    - useEffect() => This hook is called after a component render. If we have to do anything after the render of a component we ahve to use the useEffect hook.

# 02 Types of Routing in web app
- Client Side Routing
- Server Side Routing        

# Redux ToolKit
- Install Redux Tool Kit (@reduxjs/toolkit and react-redux)
- Build our store
- Connect our store to our App
- Create a cart slice
- Dispatch Action
-  Selector