import React, {Component} from 'react';

class ImageSlider extends Component {
    state = {
      selectedIndex: 0,
    };
    render() {
      return (
        <div>
            <div 
                style={{ maxWidth:'800px' }}>
                <img />
                <div  
                    style={{width:'100%'}}>
                    <div 
                        className="left">
                        &#10094;
                    </div>
                    <div 
                        className="w3-right">
                        &#10095;
                    </div>
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
            </div>
        </div>
      );
    }
  }

export default ImageSlider;
