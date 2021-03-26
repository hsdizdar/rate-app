import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListItem from "../ListItem";

configure({ adapter: new Adapter() });

// const props = {
//   linkIndex: 0,
//   linkId: 1,
//   linkVote: 7,
//   linkName: "Hepsiburada",
//   link: "https://hepsiburada.com",
// };

let component;

beforeEach(() => {
  component = shallow(<ListItem />);
});

describe("ListItem rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());
});
