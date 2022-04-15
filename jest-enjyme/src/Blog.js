function Blog() {
  return (
    <div className="mainCls">
      <ul>
        <li key="angular" className="liCls">
          Angular
        </li>
        <li key="node" className="liCls">
          Node
        </li>
        <li key="react" className="liCls">
          React
        </li>
      </ul>
      <div className="numbers">
        <span>one</span>
        <span>two</span>
      </div>
      <div>
        <button className="my-button disabled btn-primary">Submit</button>
      </div>
      <div className="some-class" />
    </div>
  );
}

export default Blog;
