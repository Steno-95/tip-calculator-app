import AppLayout from "./ui/AppLayout";
import Button from "./ui/Button";
import DollarIcon from "./ui/DollarIcon";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Input from "./ui/Input";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header title={"spli tter"} />
      <AppLayout>
        <Input id={"bill"} label={"Bill"}>
          <DollarIcon />
        </Input>
        <Button />
      </AppLayout>
      <Footer />
    </div>
  );
}

export default App;

// Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
//     person Total / person Reset
