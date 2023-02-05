function ParentProps(props) {
  return (
    <div className="data-test" id="guest">
      <section className="first-section">
        <h1>{props.title}</h1>
      </section>

      <form>
        <fieldset>
          <legend> Be part of our community</legend>
          <br />
          <h2>{props.subtitle}</h2>
          <br />
          <div>
            <label htmlFor="name">Enter your Firstname</label>
            <input id="name" name="name" />
          </div>
          <div>
            <label htmlFor="lastname">Enter your Lastname</label>
            <input id="name" name="lastname" />
            <input type="checkbox" />
          </div>
        </fieldset>
      </form>
      <span>
        <h2 className="second-h2-align-center"> {props.appreciation} </h2>
      </span>
    </div>
  );
}

function ParentProp() {
  return (
    <ParentProps
      title="Welcome to our guest list"
      subtitle="Type in"
      appreciation="Thanks for submitting"
    />
  );
}

export default ParentProp;
