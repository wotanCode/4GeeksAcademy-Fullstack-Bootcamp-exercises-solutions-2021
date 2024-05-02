import ReactDOM from "react-dom";
import { WhatToRender } from "./index";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("Component title is being passed properly", () => {
    const component = ReactDOM.render.mock.calls[0][0];
    expect(component.props.title).toBe("Bob Dylan");
});

test("Component imageUrl is being passed properly", () => {
    const component = ReactDOM.render.mock.calls[0][0];
    if (component.props.imageUrl != undefined) {
        expect(component.props.imageUrl).toBe("https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/");

    } else if (component.props.imageURL != undefined) {
        expect(component.props.imageURL).toBe("https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/");

    } else {
        throw Error('I was expecting the property imageURL')


    }

});

test("Component description is being passed properly", () => {
    const component = ReactDOM.render.mock.calls[0][0];
    expect(component.props.description).toBe(
        "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
    );
});

test("Component buttonUrl is being passed properly", () => {
    const component = ReactDOM.render.mock.calls[0][0];
    
    if (component.props.buttonUrl != undefined) {
        expect(component.props.buttonUrl).toBe(
        "https://en.wikipedia.org/wiki/Bob_Dylan"
    );
    } else if (component.props.buttonURL != undefined) {
            expect(component.props.buttonURL).toBe(
        "https://en.wikipedia.org/wiki/Bob_Dylan"
    );
    } else {
        throw Error('I was expecting the property buttonURL')


    }
});

test("Component buttonLabel is being passed properly", () => {
    const component = ReactDOM.render.mock.calls[0][0];
    expect(component.props.buttonLabel).toBe("Go to wikipedia");
});

test("The component should return the exact HTML", () => {
    const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="card m-5"
>
  <img
    alt="Card image cap"
    className="card-img-top"
    src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
  />
  <div
    className="card-body"
  >
    <h5
      className="card-title"
    >
      Bob Dylan
    </h5>
    <p
      className="card-text"
    >
      Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.
    </p>
    <a
      className="btn btn-primary"
      href="https://en.wikipedia.org/wiki/Bob_Dylan"
    >
      Go to wikipedia
    </a>
  </div>
</div>
`);
});
