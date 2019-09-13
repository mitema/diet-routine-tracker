import React from "react";

const RoundedButton = () => {
    return (
        <div class="col s2">
              <img src="images/yuna.jpg" alt="" class="circle responsive-img">
        </div>
    )
}

RoundedButton.defaultProps = {
    height: {value:"57", unit:"kg"}
    weight:{value:"163",unit:"cm"}
    
}
export default RoundedButton
