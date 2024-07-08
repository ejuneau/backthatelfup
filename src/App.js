import Bibliography from './Bibliography';
import Template from './Assets/template.png';
import TemplateAnnotated from './Assets/template-annotated.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is the header for backthatelfup.com</h2>
        <p>
          Navigation links will go here
        </p>
      </header>
      <main>
        <p>There is some introductory text here. It tells you about yourself and the kind of work you do.</p>
        <p>This website sucks. It's currently only a testing ground for the bibliography component that will be found directly below this line of text.</p>
        <Bibliography />
        <h3>That was the end of the bibliography. No more borders.</h3>
        <p>Remember that all styling can be edited later. This is just one hour of proof-of-concept work.</p>
        <p>If you wanted to edit the entries you'd have to open the categories.js file in a code editor, I use Visual Studio Code.</p>
        <p> It'll look like this:</p>
        <img src={Template} alt="Screenshot of the categories.js file used to build this site" />
        <p>The bottom of the file has an annotated entry to help you understand what each value means:</p>
        <img src={TemplateAnnotated} alt="Screenshot of the categories.js file used to build this site" />
        <p>If anything still isn't clear, you can also just ask me.</p>
        <p>This website is hosted on Render which is set to track any updates to the Git repository I'm using for the website files. Any update that gets pushed to the repository will cause Render to rebuild the website.</p>
      </main>
      <footer className="App-footer">
        <h2>This is the footer for backthatelfup.com</h2>
        <p>
          Navigation links will go here
        </p>
      </footer>
    </div>
  );
}

export default App;
