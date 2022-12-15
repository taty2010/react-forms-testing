import "./styles.css";
import NetlifyForm from "./NetlifyForm";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NetlifyForm formName="feedback" method="POST" action="/success">
        <input type="hidden" name="form-name" value="feedback" />
        <p>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="feedback">What is your feedback?</label>
        <textarea id="feedback" wrap="soft" name="feedback" required></textarea>
        <button type="submit">Submit</button>
      </NetlifyForm>
    </div>
  );
}
