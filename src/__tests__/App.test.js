import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<App />);
});

describe("App rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
