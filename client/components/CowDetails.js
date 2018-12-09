import React from 'react';

class CowDetails extends React.Component {

  render() {
    return (
    
    <form>
      <label>
        Cow Name:
          <input type="text" name="name" />
        Description:
          <input type="text" name="name" />
      </label>
      <input type="submit" value="Make Cow" />
    </form>


    )
  }
}


export default CowDetails;