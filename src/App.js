import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import BookList from './components/bookList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <CssBaseline />
      <Container maxWidth="sm">
        <BookList/>
      </Container>
    </Provider>
  );
}

export default App;
