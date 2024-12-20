import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ChatCaseStudy = () => {
  return (
    <Row>
      <Col>

{/* hero */}
      <Row>
          <header className="chat-hero has-bg-img" style={{ paddingLeft: 0 }}>
            <div className="p-3 text-center bg-image">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mt-5 text-light">Case Study</h1>
                    <h4 className="mb-5 text-light">React Native Chat Application</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Row>

{/* overview */}
        <Row className="mt-4 text-center">
          <Col>
            <h3>Overview</h3>
            <p>
            The goal was to build an accessible cross-platform chat application that allows users to share images and their locations as well as to choose the background color of the chat screen.  This app was built while taking the CareerFoundry Full-Stack Web Development course.
            </p>
          </Col>
        </Row>

{/* tech used */}
        <Row className="mt-5 mb-2">
          <h3 className="text-center">Technology Used</h3>
          <Col className="d-flex-row">
          
          <Row className="my-3 pt-2 mx-auto chat-left">
          <p><b>React Native</b> allows for cross platform development using JavaScript and React.  React Native Navigation is a package that was used to allow navigation between the start screen and the chat screen.</p>
        </Row>
        <Row className="my-3 pt-2 mx-auto chat-tech">
          <p><b>Expo</b> is a software development kit that allows developers to create applications with React that will work on Android and iOS.  Expo Go is an app that I used to test the application on my iPhone.</p>
        </Row>
        <Row className="my-3 pt-2 mx-auto chat-left">
          <p><b>Android Studio</b> is an emulator that allows developers to test their application on an Android device if they don’t own one.</p>
        </Row>
        <Row className="my-3 pt-2 mx-auto chat-tech">
          <p><b>GiftedChat</b> is a chat user interface package for React Native that implements chat functionality with customization.</p>
        </Row>
        <Row className="my-3 pt-2 mx-auto chat-left">
          <p><b>AsyncStorage</b> is a package recommended by Expo and React Native.  It allows developers to store data locally on a mobile device, similar to how data is stored in localStorage on a web browser.</p>
        </Row>
        <Row className="my-3 pt-2 mx-auto chat-tech">
          <p><b>Google Firebase</b> is a web and mobile app development platform which provides services related to app authentication, data storage, and security.  It allows users to log in anonymously in this chat app and its Firestore Database was used to store the messages and images sent in the chat.</p>
        </Row>
          
          </Col>
        </Row>

{/* dev process */}
        <Row className="my-5 text-center">
          <h3>Development</h3>
          <Col>
          
            <Row>
              <h5 className="mt-3">Set Up</h5>
              <p>
                An Expo application was created from a blank Expo template and navigation set up using React Native Navigation.  The design of the start screen was specified by the project brief with image and color assets provided.                  An effective chat app will show users new messages as soon as they are sent.  This function was made possible with Google Firebase websockets protocol.  The messages are also saved to Google Firestore cloud storage.               Chat applications are useful when the user can access sent messages and images even when their device doesn’t have internet connection.  This feature was enabled by the React Native AsyncStorage package.
              </p>
            </Row>

            <Row>
              <h5 className="mt-3">Chat Functionality & Accessibility</h5>
              <p>
                The GiftedChat library was used for the main chat functionality.  It provides an interface that users expect of a chat application and allowed for customization.  This customization allowed for the implementation of an action button (from React Native ActionSheet) which, when pressed, opens a menu from which users can choose to send a picture, take a picture with the device camera to send, or to send their location to chat.<br />
                Many of the functions of mobile devices use buttons without text on them so it is important to include accessibility roles for those buttons and similar items.  In this case, the Touchable Opacity utility was used instead of a button because it was more customizable.  Each Touchable Opacity received accessibilityRole="button" and, when there wasn't text in the Touchable Opacity, it received an appropriate accessibilityLabel and accessibilityHint.
              </p>
            </Row>

          </Col>
        </Row>

{/* final product */}
        <Row>
          <h3 className="text-center">Final Product</h3>
          <div className="d-flex">
            <Col lg={4} className="mx-auto">
              <img className="final-chat-screenshot" src="chat-start.png" alt="chat app screenshot of start screen"/>
            </Col>
            <Col lg={4} className="mx-auto">
              <img className="final-chat-screenshot" src="chat-chat.png" alt="chat app screenshot of chat screen"/>
            </Col>
          </div>
        </Row>

{/* credits */}
        <Row className="my-5 credits">
          <h3>Credits</h3>
          <p>
              Lead Developer: Kelly Scott<br />
              Mentor: Vini De Antoni<br />
              Tutor: Jason Early
            </p>
            <a href="https://github.com/kellysdev/chat-app">GitHub Repository</a>
        </Row>
      
      </Col>
    </Row>
  );
};

export default ChatCaseStudy;