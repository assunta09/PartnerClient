// Imports
import React from 'react/addons';
import AboutContainer from 'src/Components/AboutSegment/AboutContainer.js';
import AboutDescription from 'src/Components/AboutSegment/AboutDescription.js';
import AboutInfo from 'src/Components/AboutSegment/AboutInfo.js';
import AboutMeMaps from 'src/Components/AboutSegment/AboutMeMaps.js'; 
import AboutMissionProgram.js from 'src/Components/AboutSegment/AboutMissionProgram.js';
import AboutSegment from 'src/Components/AboutSegment/AboutSegment.js';


describe("AboutSegment component - TestUtils approach", () => {
  beforeEach(function() {
    let { TestUtils } = React.addons;

    this.component = TestUtils.renderIntoDocument(<AboutSegment initialName="my first test" />);

    this.TestUtils = TestUtils;
  });

  it("renders a <div> with class name called AboutSegment", function() { 
    let div = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
    expect(div.props.children.join('')).toEqual("");
  });

  it("wraps a paragraph with a <div> with a proper class name", function() {
    let wrapDiv = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");

    expect(wrapDiv.props.className).toEqual("greeter");
  });

  it("changes greeting person after setting state", function() {
    let paragraph = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "p");

    expect(paragraph.props.children.join('')).toEqual("Hello, my first test!");
    this.component.setState({ name: "World" });
    expect(paragraph.props.children.join('')).toEqual("Hello, World!");
  });
});
