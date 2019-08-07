# Possible React-Related Interview Questions

These questions are coming from all over the place. I'm currently prepping for a REACT/FrontEnd position with a company in PDX and figured why not but my study materials here so I can come back.

---

## General Knowledge Questions


### [1] What hapens when **setState** is called?

1. The first thing React will do is merge the object you passed into setState into the current state of the component. 
2. After the state-merge is complete, the [<i><sup>1</sup></i> reconciliation](#1-reconciliation) process is kicked off.


### [2] What’s the difference between an Element and a Component in React?

- React **_elements_** describe what you want to see on the screen, kind of like a representation of a DOM node.
- **_Components_** are the building blocks of React. A component is a function or class which optionally accepts input and returns a React element.


    #### The following 'createElement' call

    ```javascript
    const element = React.createElement(
      'div',              // tag
      {id: 'login-btn'},  // attributes
      'Login'             // children
    )
    ```

    #### will return an object like this:

    ```javascript
    {
      type: 'div',
      props: {
        children: 'Login',
        id: 'login-btn'
      }
    }
    ```

    #### ...which the `ReactDOM.render` method will use to create a DOM node that looks like:

    ```html
    <div id='login-btn'>Login</div>
    ```

### [3] When would you use a Class Component over a Functional Component?

- If your component has state or a lifecycle method(s), use a Class component or use Hooks. Otherwise, a good rule of thumb is to use the most simple pure component possible, which is the functional component.

### [4] What are refs and why use them?

- Refs are exactly what they sound like they would be - they are references. They reference actual DOM elements and/or instances of components.
- They provide direct access to the elements they are referencing. They can be added as attributes to components and assigned values as callback functions which can be used for binding purposes or as a mechanism for receiving instances of components,

### [5] How do you tell React to build in Production mode and what will that do?

- You set `process.env.NODE_ENV` to `production`. When React in production mode, it’ll strip out any extra development features like warnings. In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.


### [6] Describe how events are handled in React.

- Interestingly, React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.

### [7] What is the second argument that can optionally be passed to setState and what is its purpose?

- A callback function which will be invoked when setState has finished and the component is re-rendered.

- Something that’s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it’s best to use another lifecycle method rather than relying on this callback function, but it’s good to know it exists.

&nbsp;

---

## Footnotes

### _<sup>1</sup> Reconciliation_

- The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where necessary.


## Sources

- [Tyler McGinnis' Blog Post](https://tylermcginnis.com/react-interview-questions/)