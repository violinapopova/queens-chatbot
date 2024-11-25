# Queens ChatBot

Queens ChatBot is a React Native chatbot application using Expo.

## Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher) or yarn
- Expo CLI (`npm install expo`)

## Getting Started

1. **Clone the repository:**

    ```sh
    git clone https://github.com/violinapopova/queens-chatbot.git
    cd queens-chat
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

    or

    ```sh
    yarn 
    ```

3. **Set up the API key:**

    - Open the [Constants.js](http://_vscodecontentref_/0) file.
    - Replace the empty string in [export const API_KEY = '';](http://_vscodecontentref_/1) with your API key from [Google AI Studio](https://aistudio.google.com/).

4. **Start a development server to work on your project by running:** 
    ```sh
    npx expo start
    ```

6. **Start the project:**

    ```sh
    npm start
    ```

    or

    ```sh
    yarn
    ```

### 📱 Want to preview your app on your physical device? Here's how to download the Expo Go app:
- iOS Users: https://apps.apple.com/app/apple-store/id982107779
- Android Users: https://play.google.com/store/apps/details?id=host.exp.exponent

## 🖥️ 💻 Interested in testing on a virtual device? You'll need either Android Studio or Xcode installed:
- Download Android Studio: https://developer.android.com/studio/install
- Download Xcode: https://developer.apple.com/xcode/resources/

7. **Run on Android:**

    ```sh
    npm run android
    ```

    or

    ```sh
    yarn android
    ```

8. **Run on iOS:**

    ```sh
    npm run ios
    ```

    or

    ```sh
    yarn ios
    ```

## Project Structure

- [App.js](App.js): Entry point of the application.
- [ChatBot.js](src/ChatBot.js): Main chatbot component.
- [ChatItem.js](src/ChatItem.js): Component for individual chat items.
- [Constants.js](Constants.js): Contains the API key.
- [assets](assets): Contains images and other assets.

## Dependencies

- [axios](https://axios-http.com/docs/intro): Promise-based HTTP client for making API requests.
- `expo`: Framework and platform for universal React applications.
- `expo-speech`: Expo module for text-to-speech functionality.
- `expo-status-bar`: Expo module for controlling the status bar.
- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native apps using React.
- `react-native-vector-icons`: Customizable icons for React Native.


## Want to create a new project? 
    ```sh
    npx create-expo-app --template
    ```

    or 

    ```sh
    npx create-expo-app@latest
    ```

### For more details, check the Expo documentation: 
    🔗 https://docs.expo.dev/more/create-expo/

## License

This project is licensed under the MIT License.