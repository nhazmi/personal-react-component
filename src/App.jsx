import './App.css'
// import treeData from './Project/Tree View Component/Data'
// import Accordion from './Project/Accordion/Accordion'
// import CreateRandomColour from './Project/Random Colour Generator/Rcg'
import StarRating from './Project/Star Rating/StrRating'
// import ImageSlider from './Project/ImgSlider/ImgSlider'
// import LoadMoreButton from './Project/Load More Button/LoadMoreButton'
// import FibonnacciDisplayer from './Project/Fibbonacci Number/Fibonnacci'
// import UiViewComponent from './Project/Tree View Component/Tree'
// import QrCodeGenerator from './Project/QR Code Generator/QrCode'
import ToggleTheme from './Project/Toggle Theme/ToggleTheme'
import ScrollIndicator from './Project/Scroll Indicator/scrollIndicator'
// import TabComponent from './Project/Tab Component/tabComponent'
// import myTabsData from './Project/Tab Component/Data'
import PopupMainPage from './Project/Popup Modal/PopupMainPage'
import GithubProfileFinder from './Project/Github Profile Finder/GithubProfileFinder'



function App() {
 
  return (
    <>
    {/* <Accordion/> */}

    {/* <CreateRandomColour/> */}

    <StarRating></StarRating>

    {/* <ImageSlider></ImageSlider> */}

    {/* <LoadMoreButton></LoadMoreButton> */}

    {/* <FibonnacciDisplayer></FibonnacciDisplayer> */}

    {/* <UiViewComponent items1={treeData}></UiViewComponent> */}

    {/* <QrCodeGenerator></QrCodeGenerator> */}

    <ToggleTheme></ToggleTheme>
    
    <ScrollIndicator></ScrollIndicator>

    {/* <TabComponent data={myTabsData}></TabComponent> */}

    {/* <PopupMainPage></PopupMainPage>  */}
    {/* try to solve the styling issue of animation in popup component later */}

    <GithubProfileFinder></GithubProfileFinder> 
    {/* try to learn how to numeric date to name ex: 11 -> Nov */}

    

    </>   
  )
}

export default App
  