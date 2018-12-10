import React from 'react';
import CowDetails from './CowDetails.js'
import CowList from './CowList.js'




class App extends React.Component {
	constructor(props) {
		super(props);

		this.state={
       currentCow : '',
       cows : [],
      showDescription: false
		}
	}
    handleClick(e) {
      
      if (this.state.showDescription === false) {
      this.setState({
        showDescription: !this.state.showDescription,
        currentCow: e.target
      })
     }

    }

    handleSubmit(e) {
    	e.preventDefault();
      var data = new FormData(e.target);
    	var cowName = data.get('cowName');
    	var cowDesc = data.get('cowDesc');
      this.state.cows.push({
        'cowName': cowName,
        'cowDesc': cowDesc
      })
      this.setState({
        cows: this.state.cows
      })
        
     
    
    	

    }

	render() {

		
		return (
          <div>
		    <CowDetails currCow={this.state.currentCow} cows={this.state.cows} state={this.state.showDescription}/>
		    
		    <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                Cow Name:
                  <input type="text" name="cowName" />
                Description:
                  <input type="text" name="cowDesc" />
              </label>
                <input type="submit" value="Make Cow" />
            </form>

             <CowList cows={this.state.cows} action={this.handleClick.bind(this)} />
          </div>
     
    )
  }
}

export default App;







