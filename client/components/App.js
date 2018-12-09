import React from 'react';
import CowDetails from './CowDetails.js'
import CowList from './CowList.js'
import Cows from "../data/cows.js"


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			cows: Cows,
			cow: Cows[0]
		}
	}

    handleSubmit(e) {
    	e.preventDefault();
        var data = new FormData(e.target);
    	var values = stringifyFormData(data);
    	var cowName = data.get('cowName');
    	var cowDesc = data.get('cowDesc');
    	console.log('bfor', Cows)
    	Cows.push({
    		'cowName': cowName,
    		'cowDesc': cowDesc
    	 })
    	console.log('after', Cows)

    }

	render() {

		console.log(this.state.cows, this.state.cow)
		return (
          <div>
		    <CowDetails />
		    
		    <form onSubmit={this.handleSubmit}>
              <label>
                Cow Name:
                  <input type="text" name="cowName" />
                Description:
                  <input type="text" name="cowDesc" />
              </label>
                <input type="submit" value="Make Cow" />
            </form>

             <CowList />
          </div>
     
    )
  }
}

export default App;

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}






