import React from 'react';
// import logo from './logo.svg';
import './App.css';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) && email.length <= 128;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documentName: '',
      documentType: '',
      category: '',
      email: '',
      documentNameProgress: 0,
      documentTypeProgress: 0,
      categoryProgress: 0,
      emailProgress: 0,
      progressBar: 0
    };

    this.updateDocumentName = this.updateDocumentName.bind(this);
    this.updateDocumentType = this.updateDocumentType.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  updateDocumentName(e) {
    let documentName = e.target.value;
    let validDocName = documentName.length >= 2 && documentName.length <= 32;
    // validate document name
    // console.log('valid input name')
    // debugger
    if (validDocName) {
      this.setState({
        documentNameProgress: 25
      }, () => {
          console.log('updating progress bar');
          this.updateProgressBar();
      });
    } else {
      this.setState({
        documentNameProgress: 0
      }, () => {
          this.updateProgressBar();
      });
    }

    // update state
    this.setState({
      documentName
    });

    
  }

  updateDocumentType(e) {
    let documentType = e.target.value;
    let validDocumentType = documentType.length > 0;
    // validate document name
    // console.log('valid input name')
    // debugger
    if (validDocumentType) {
      this.setState({
        documentTypeProgress: 25
      }, () => {
        console.log('updating progress bar');
        this.updateProgressBar();
      });
    } else {
      this.setState({
        documentTypeProgress: 0
      }, () => {
        this.updateProgressBar();
      });
    }

    // update state
    this.setState({
      documentType
    });
  }

  updateCategory(e) {
    let category = e.target.value;
    let validCategory = category.length > 0;
    // validate document name
    // console.log('valid input name')
    // debugger
    if (validCategory) {
      this.setState({
        categoryProgress: 25
      }, () => {
        console.log('updating progress bar');
        this.updateProgressBar();
      });
    } else {
      this.setState({
        categoryProgress: 0
      }, () => {
        this.updateProgressBar();
      });
    }

    // update state
    this.setState({
      category
    });
  }

  updateEmail(e) {
    let email = e.target.value;
    let validEmail = validateEmail(email);
    
    // validate document name
    // console.log('valid input name')
    // debugger
    if (validEmail) {
      this.setState({
        emailProgress: 25
      }, () => {
        console.log('updating progress bar');
        this.updateProgressBar();
      });
    } else {
      this.setState({
        emailProgress: 0
      }, () => {
        this.updateProgressBar();
      });
    }

    // update state
    this.setState({
      email
    });

  }

  updateProgressBar() {
    let progressBarInner = document.querySelector('.progress-bar-inner');
    let { documentNameProgress, documentTypeProgress, categoryProgress, emailProgress } = this.state;
    let totalScore = documentNameProgress + documentTypeProgress + categoryProgress + emailProgress;
    progressBarInner.setAttribute('style', `width: ${totalScore}%`);
  }



  // progress bar above form
    // 0, 25, 50, 75, 100%
    // each valid input increases the progress bar by 25%
  // form details:
    //4 inputs:
    // ONE:
      // text, #documentName
    // TWO:
      // dropdown, #documentType
        // option #1: empty label (default)
        // option #2: label = 'Plain'
        // option #3: label = 'PDF'
    // THREE:
      // dropdown, #category
        // option #1: ''
        // option #2: 'Audit'
        // option #3: 'Application'
        // option #4: 'Other'
    // THREE:
      // email, #email

  // check specific validations for each input type


  render() {
    return (
      <div className="form-wrapper">
        <div className="progress-bar-wrapper">
          <p>Progress Bar</p>
          <div className="progress-bar">
            <div className="progress-bar-inner"></div>
          </div>
        </div>
        <form method="POST">
          <label htmlFor="documentName">Document Name<br />
            <input 
              type="text" 
              id="documentName" 
              value={this.state.documentName} 
              onChange={this.updateDocumentName}/>
          </label>
          <br /><br />

          <label htmlFor="documentType">
            Document Type <br />
            <select name="documentType" id="documentType" onChange={this.updateDocumentType}>
              <option value="" disabled selected></option>
              <option value="Plain">Plain</option>
              <option value="PDF">PDF</option>
            </select>
          </label>

          <br /><br />

          <label htmlFor="category">
            Category <br />
            <select name="category" id="category" onChange={this.updateCategory}>
              <option value="" disabled selected></option>
              <option value="Audit">Audit</option>
              <option value="Application">Application</option>
              <option value="Other">Other</option>
            </select>
          </label>

        <br />
        <br />

          <label htmlFor="email">Email <br />
            <input type="email" value={this.state.email} onChange={this.updateEmail}/>
          </label>

        </form>
      </div>
    );
  }
}

export default App;
