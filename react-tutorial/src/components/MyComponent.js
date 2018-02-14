import React, {Component} from 'react'; 
import Upload from 'material-ui-upload/Upload';
 
export default class MyComponent extends Component {
    onFileLoad = (e, file) => console.log(e.target.result, file.name);
 
    render() {
        return (
            <Upload label="Add" onFileLoad={this.onFileLoad}/>
        );
    }
}