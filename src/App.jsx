import './App.css';
import Blogs from './components/Blogs';
import CreateTags from './components/CreateTags';
import SearchItems from './components/SearchItems';

function App() {
  return (
    <div className="App">
<CreateTags/>
<Blogs/>
<SearchItems/>
    </div>
  );
}

export default App;
