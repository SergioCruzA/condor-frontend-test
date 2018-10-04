import React, { Component } from 'react';

// Import components
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import CourseList from '../components/CourseList';
import Scroll from '../components/Scroll';

// Define urls for fetch
let corsAnywhere= 'https://cors-anywhere.herokuapp.com/';
let urlReq = 'https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&name=';


// Create App class
class App extends Component {
    constructor(){
        super();
        this.state = {
            courses: [],
            next: '', 
        }
    }

    // Lifecycle method
    componentDidMount() {
        fetch(corsAnywhere + urlReq)
            .then(resp => {
                return resp.json()
            })
            .then(resp => this.setState({ courses: resp.items, next: resp.next }))
    }

    // Event trow when search imput change
    onSearchChange = (evt) => {
        fetch(corsAnywhere + urlReq+ evt.target.value)
              .then(resp => {
                  return resp.json()
              })
              .then(resp => this.setState({ courses: resp.items, next: resp.next }))
    }

    render() {
      const { courses } = this.state;
        return (
            <div className='tc'>
              <Navbar/>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CourseList courses={courses}/>
              </Scroll>
            </div>
        )
    }
}

export default App;