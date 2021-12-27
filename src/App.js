import Calendar from './component/Calendar';
import Header from './component/Header'

const App = () => {
  let date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  return (
    <div className="App">
      <Header year={year} month={month} />
      <Calendar />
    </div>
  );
}

export default App;
