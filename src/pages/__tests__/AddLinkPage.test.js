import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddLinkPage from "../AddLinkPage";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<AddLinkPage />);
});

describe("AddLinkPage rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
