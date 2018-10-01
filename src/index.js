import m from "mithril";

const Nested = {
  view: () => {
    return <h1>Hello</h1>;
  }
};

const Component = {
  view: () => {
    return (
      <div>
        <Nested/>
      </div>
    );
  }
};

m.mount(document.body, Component);
