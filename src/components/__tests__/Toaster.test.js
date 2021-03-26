import { shallow } from "enzyme";
import Toaster from "../Toaster";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const props = {
  isShow: true,
  linkName: "Hepsiburada",
  message: "added",
};

let component;

beforeEach(() => {
  component = shallow(<Toaster {...props} />);
});

describe("Toaster rendering", () => {
  it("renders correctly", () => expect(component).toMatchSnapshot());

  it("props works correctly", () => {
    expect(component.props().isShow).toEqual(props.isShow);
    expect(component.props().children[0].props.children).toEqual(
      props.linkName
    );
    expect(component.props().children[1].props.children).toEqual(props.message);
  });
});
