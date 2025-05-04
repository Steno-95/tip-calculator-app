import AppLayout from "./ui/AppLayout";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[20rem] min-h-screen mx-auto md:max-w-[44rem]">
      <Header />
      <AppLayout></AppLayout>
      <Footer />
    </div>
  );
}

export default App;

// Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
//     person Total / person Reset
