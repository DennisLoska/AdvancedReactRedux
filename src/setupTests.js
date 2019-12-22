import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//wire in Enzyme to the project
Enzyme.configure({ adapter: new Adapter() });
