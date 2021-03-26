import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "../Modal";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<Modal />);
});

describe("Modal rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
