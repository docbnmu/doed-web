import React from "react"
import Layout from "../components/layout"
import {Badge, Image, Card, Col, Form, Button, InputGroup, FormControl} from "react-bootstrap"
export default class AdmitCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formAlp: '',
      formNo: '',
      submitClicked: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  downloadFile = function(e) {
    e.preventDefault();
    this.setState({ submitClicked : true});
    const filename = Buffer.from(this.state.formAlp + this.state.formNo).toString('base64');
    var xhr = new XMLHttpRequest();
       
        var URLToPDF = "https://download.doedbnmu.in/Master/" + filename + ".pdf";
        
        xhr.open("GET", URLToPDF, true);

        xhr.responseType = "blob";

        xhr.onload = function() {
          if (xhr.status === 404) {
            alert('Candidate not found.\n' +
                 'अभ्यर्थी नहीं मिला।\n' +
                'Contact department office or collect your admit card there itself.' +
                '\nविभाग के कार्यालय से संपर्क करें या अपना एडमिट कार्ड वहीं से प्राप्त करें।'); // e.g. 404: Not Found
          } else {
            const fileURL = URL.createObjectURL(new Blob([xhr.response], { type: 'application/pdf' }));
            const link = document.createElement('a');
              link.href = fileURL;
              link.setAttribute('download', 'MET2020.Admit.Card.BNMU.pdf');
               document.body.appendChild(link);
               const clickLink = link.click();
            //window.location.replace(fileURL, "_blank");
        }
      };

        xhr.send();
  };

render() {
  return (
<Layout pageInfo={{ pageName: "M. Ed. Entrance Test 2020" }}>

<Card bg="light" text="black" className="text-center">
  <Card.Header><h3>M.Ed. Entrance Test(MET)-2020</h3></Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      उम्मीदवार अपना एडमिट कार्ड डाउनलोड करने के लिए अपना फॉर्म नंबर दर्ज कर सकते हैं (उदाहरण A-000) या उम्मीदवार अपना एडमिट कार्ड शिक्षाशास्त्र विभाग, भूपेंद्र नारायण मंडल विश्वविद्यालय से प्राप्त कर सकते हैं |
      <br />
      Candidates may enter their form number to download the admit card (example A-000) or they can get their admit card from the Education Department, B. N. Mandal University.
    </Card.Text>
    <Button href="../documents/MEd/MET2020-Instructions.pdf" variant="outline-dark">
    Instructions for candidates <Badge variant="secondary">PDF</Badge>
    </Button>
  </Card.Body>
  <Card.Footer>
  अभ्यर्थी अपना फॉर्म नंबर स्वीकृति पर्ची पर पा सकते हैं। उदाहरण:
  <br />
  Candidates can find their form number on the receiving slip. Example:
  <Image src="../documents/MEd/find-form-no.png" fluid />
  </Card.Footer>
</Card>
<hr />

<h4>अपना फॉर्म नंबर यहां डालें | Enter your form number here:</h4> 
<br />
<Form>
  <Form.Row className="justify-content-md-center">
  <InputGroup size="lg" className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Full name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl 
  type="text"
  style={{textTransform: 'uppercase'}}
  placeholder="BHUPENDRA NARAYAN MANDAL"
  />
</InputGroup>
    <Col sm={4} className="my-1" >
    <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text>Form No.</InputGroup.Text>
    </InputGroup.Prepend>
      <Form.Control
    type="text"
    maxLength={1}
    style={{textTransform: 'uppercase'}}
    id="form-alp1"
    placeholder="X"
    name="formAlp"
    required
    value={this.state.formAlp}
    onChange={this.handleInputChange}
  />
      <InputGroup.Prepend>
      <InputGroup.Text><b>-</b></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl 
      required
      id="form-no1" 
      placeholder="000"
      type="number"
      min="001"
      max="999"
      maxLength={3}
      name="formNo"
      value={this.state.formNo}
      onChange={this.handleInputChange}
      />
      </InputGroup>
      <br />
    </Col>
    <Col xs="auto" className="my-1">
      <Button size="lg" onClick={this.downloadFile}>Submit</Button>
    </Col>
    <Col xs="auto" className="my-1">
      <Button size="lg" variant="dark" type="reset">Reset</Button>
    </Col>

{
        this.state.submitClicked?
    <Col xs="auto" className="my-1">
     
                  
                  <Button href={this.filename} size="lg" variant="outline-dark">
                    Download your Admit Card <Badge variant="secondary">PDF</Badge>
                  </Button>
               
    </Col>
    : <> </>      
}
</Form.Row>
</Form>
<hr />

<br />
<br />
</Layout>
  );
  }
};
