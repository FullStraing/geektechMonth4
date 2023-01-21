import React from 'react';
import CatComponent from "./components/catComponent";
import MyComponent from "./components/MyComponent";
import Loader from "./hoc/loader";
import windowBrowser from "./hoc/windowBrowser";
import windowView from "./components/windowView";
import ColorChange from "./hoc/colorChange";
import ItemComponent from "./components/itemComponent";

const App = () => {

    const ColorChangeComponent = ColorChange(ItemComponent);
 
    return (
        <div>
            <ColorChangeComponent/>
        </div>
    );
};

export default App;