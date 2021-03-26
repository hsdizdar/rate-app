import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListPage from "../ListPage";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<ListPage />);
});

describe("ListPage rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
