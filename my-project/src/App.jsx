import Dashboard from "./components /Dashboard";
import NavigationBar from "./components /NavigationBar";


function App() {
  return (
    <>
      <div className="flex">
        {/* Navigation Bar */}
        <NavigationBar />

       {/* Main Component  */}
       <main className="grow">
        <Dashboard /> 
       </main>
      </div>
    </>
  );
}

export default App;
