import React from "react";
import "./pageNav.css"


/*
-tlačítko úplně na začátek
-tlčítko o stránku zpět
input s číslem stránky
štítek s celkovým počtem stránek
-tlačítko o jeden vpřed
-tlačítko úplně nakonec
z props chodí: 
page
lastPage
*/


const PageNav = () => {
return(
    <div className="navPanel">
    <button>|◄</button>
    <button>◄</button>
    <label>
    <input type="number" min="1" max="999" defaultValue={1}/>
                            &nbsp;Page
    </label>
    <button>►</button>
    <button>►|</button>
    </div>
);
};



export default PageNav;