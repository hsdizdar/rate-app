import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderLinks from "../OrderLinks";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<OrderLinks />);
});

describe("OrderLinks rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
