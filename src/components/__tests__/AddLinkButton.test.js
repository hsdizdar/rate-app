import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddLinkButton from "../AddLinkButton";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<AddLinkButton />);
});

describe("AddLinkButton rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
