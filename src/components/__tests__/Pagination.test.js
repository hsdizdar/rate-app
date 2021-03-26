import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "../Pagination";

configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = shallow(<Pagination />);
});

describe("Pagination rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
