import "./styles.css";

import QrCode from "./Components/QrCode_Genetator/QrCode";
import QrCode2 from "./Components/QrCode_Genetator/QrCode2";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import SimpleFormFunc from "./Components/SimpleForm/SimpleFormFunc";
import FetchUser from "./Components/FetchUser/FetchUser";

import Palindrome from "./Components/Palindrome/Palindrome";
import Anagram from "./Components/Anagram/Anagram";
import SearchBar from "./Components/SearchBar/SearchBar";
import ResponsivePlayer from "./Components/VideoPlayer/VideoPlayer";

export default function App() {
  return (
    <div className="App">
      {/* <SimpleForm /> */}
      {/* <Palindrome /> */}
      {/* <Anagram /> */}
      <br />
      {/* <QrCode /> */}
      {/* <QrCode2 /> */}
      {/* <FetchUser /> */}
      {/* <SearchBar /> */}
      <ResponsivePlayer />
    </div>
  );
}
