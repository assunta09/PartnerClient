// Imports
// const React = require('react/addons');

// import AboutContainer from '../../src/Components/AboutSegment/AboutContainer.js';
const AboutContainer = require('../../../src/Components/AboutSegment/AboutContainer.js');
const AboutDescription = require('../../../src/Components/AboutSegment/AboutDescription.js');
const AboutInfo = require('../../../src/Components/AboutSegment/AboutInfo.js');
const AboutMeMaps = require('../../../src/Components/AboutSegment/AboutMeMaps.js');
const AboutMissionProgram = require('../../../src/Components/AboutSegment/AboutMissionProgram.js');
const AboutSegment = require('../../../src/Components/AboutSegment/AboutSegment.js');
const renderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = renderer.create(
    <AboutSegment reports={this.props.reports}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


















